import React from 'react'
import { splitFormProps, useField, useForm } from 'react-form'
import './ContactForm.css'

const InputField = React.forwardRef((props, ref) => {
  // Let's use splitFormProps to get form-specific props
  const [field, fieldOptions, rest] = splitFormProps(props)

  // Use the useField hook with a field and field options
  // to access field state
  const {
    meta: { error, isTouched, isValidating, message },
    getInputProps,
  } = useField(field, fieldOptions)


  // Build the field
  return (
    <>
      <input {...getInputProps({ ref, ...rest})} />

      {/*
        Let's inline some validation and error information
        for our field
      */}

      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <strong>{error}</strong>
      ) : message ? (
        <small>{message}</small>
      ) : null}
    </>
  )
})

function MyForm() {
  const defaultValues = React.useMemo(
    () => ({
      name: '',
      email: '',
      phone: '',
      message: '',
      sent: false,
    }),
    []
  )
  const {
    Form,
    // values,
    // pushFieldValue,
    // removeFieldValue,
    meta: { isSubmitting, isSubmitted, canSubmit, error },
  } = useForm({
    defaultValues,
    validate: (values) => {
      if (values.name === 'Elliott Jones') {
        return "No doppleganger spam!"
      }
      return false
    },
    onSubmit: async (values, instance) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(values)
    },
    debugForm: true,
  })

  return (
    <section id="contact" className="contact">
      <Form className="contact-form">
        <div className="input-wrapper">
          <label htmlFor="full-name">Full Name</label>
          {/* @ts-ignore */}
          <InputField id="full-name" field="name" validate={(value:string) => (!value ? 'Required' : false)} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email-address">Email</label>
          {/* @ts-ignore */}
          <InputField id="email-address" field="email" validate={async (value:string) => {
            if (!value) {
              return `\n\n Email is required`
            }
            
            if (!validateEmail(value)) {
              return 'Please enter a valid email addresss'
            }
            console.log(`Checking email: ${value}...`)
            
            // We're going to mock that for now
            await new Promise((resolve) => setTimeout(resolve, 2000))
            
            return value === 'elliottohj44@gmail.com' ? 'Email is already being used' : false
          }}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email-message">Message</label>
          <br/>
          {/* @ts-ignore */}
          <InputField id="email-message" field="message" defaultValue="Type your message here 😄" />
        </div>

        {isSubmitted ? <em>Thanks for submitting!</em> : null}

        {error ? <strong>{error}</strong> : null}

        {isSubmitting ? (
          'Submitting...'
          ) : (
            <div className="input-wrapper">
            <button className="submit-btn grow" type="submit" disabled={!canSubmit}>
              Submit
            </button>
          </div>
        )}
      </Form>
    </section>
  )
}

function validateEmail(email:any) {
  var reggie =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reggie.test(String(email).toLowerCase())
}

export default MyForm
