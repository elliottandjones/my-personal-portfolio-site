import React from 'react'
import { splitFormProps, useField, useForm } from 'react-form'
import './ContactForm.css'

const InputField = React.forwardRef((props, ref) => {
  // Let's use splitFormProps to get form-specific props
  const [field, fieldOptions, rest] = splitFormProps(props)
  // Use the useField hook with a field and field options to access field state
  const {
    meta: { error, isTouched, isValidating, message },
    getInputProps,
  } = useField(field, fieldOptions)
  // Build the field
  return (
    <div className="form-field-wrapper">
      <input {...getInputProps({ ref, ...rest })} />
      {/* some inline validation and error information for the field */}
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <strong>{error}</strong>
      ) : message ? (
        <small>{message}</small>
      ) : null}
    </div>
  )
})

const TextAreaField = React.forwardRef((props, ref) => {
  // Let's use splitFormProps to get form-specific props
  const [field, fieldOptions, rest] = splitFormProps(props)
  // Use the useField hook with a field and field options to access field state
  const {
    meta: { error, isTouched, isValidating, message },
    getInputProps,
  } = useField(field, fieldOptions)
  // Build the field
  return (
    <div className="form-field-wrapper">
      <textarea {...getInputProps({ ref, ...rest })} />
      {/* some inline validation and error information for the field */}
      {isValidating ? (
        <em>Validating...</em>
      ) : isTouched && error ? (
        <strong>{error}</strong>
      ) : message ? (
        <small>{message}</small>
      ) : null}
    </div>
  )
})

function ContactForm() {
  const defaultValues = React.useMemo(
    () => ({
      name: '',
      email: '',
      subject: '',
      message: '',
    }),
    []
  )
  const {
    Form,
    values,
    // handleSubmit,
    meta: { isSubmitting, isSubmitted, canSubmit, error },
  } = useForm({
    defaultValues,
    validate: (values) => {
      if (values.name === 'Elliott Jones') return 'I do not accept spam from nominal doppelgängers.'
      if (values.email === 'elliottohj44@gmail.com') return 'Please enter your own email address.'
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
          <label htmlFor="email-name">Name</label>
          <InputField /* @ts-ignore */
            field="name"
            id="email-name"
            validate={(value: string) => (!value ? ' Required' : false)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email-address">Email</label>
          <InputField /* @ts-ignore */
            field="email"
            id="email-address"
            validate={(value: string) => {
              if (!value) return ' Required'
              if (!validateEmail(value)) return ' Please enter a valid email addresss'
              console.log(`Checking email: ${value}...`)
              // mocking that for now
              // await new Promise((resolve) => setTimeout(resolve, 2000))
              return false
            }}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email-subject">Subject</label>
          <InputField /* @ts-ignore */
            field="subject"
            id="email-subject"
            validate={(value: string) => (!value ? ' Required' : false)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email-message">Message</label>
          <TextAreaField /* @ts-ignore */
            field="message"
            id="email-message"
            placeholder="Message"
            validate={(value: string) => (!value ? ' Required' : false)}
          />
        </div>
        {/* <div className="captcha-wrapper">
          <label htmlFor="captcha">I use this field to detect spam bots.</label>
          <InputField 
            id="captcha"
            field="captcha"
            placeHolder="I use this field to detect spam bots. "/>
        </div> */}
        {isSubmitted && <em>Thanks for reaching out, {values.name}</em>}
        {error && <strong>{error}</strong>}
        {isSubmitting && 'Submitting...'}
        <div className="input-wrapper">
          <button
            className={`submit-btn ${canSubmit && 'grow'}`}
            type="submit"
            disabled={!canSubmit}
          >
            Send
          </button>
        </div>
      </Form>
      {/* <code>
        <pre>{JSON.stringify(values, undefined, 2)}</pre>
      </code> */}
    </section>
  )
}

function validateEmail(email: any) {
  var reggie =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reggie.test(String(email).toLowerCase())
}

export default ContactForm
