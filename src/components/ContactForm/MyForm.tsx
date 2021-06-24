import { forwardRef, useMemo } from 'react'
import { splitFormProps, useField, useForm } from 'react-form'
import './ContactForm.css'

const InputField = forwardRef((props, ref) => {
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
  const defaultValues = useMemo(
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
    // pushFieldValue,
    // removeFieldValue,
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
    // debugForm: true,
  })

  return (
    <section id="contact" className="contact">
      <Form 
        className="contact-form" 
        // onSubmit={(e:React.SyntheticEvent<unknown, Event>)=>e.preventDefault()} 
      // handleSubmit={(e:React.SyntheticEvent<unknown, Event>) => e.preventDefault()}
      >
        <div className="input-wrapper">
          <label htmlFor="name">Name</label>
          <InputField /* @ts-ignore */
            id="name"
            field="name"
            placeholder="Full Name" 
            validate={(value:string) => (!value ? ' Required' : false)}
            />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <InputField /* @ts-ignore */
            id="email"
            field="email"
            placeholder="Email" 
            validate={async (value:string) => {
              if (!value) return ' Required'
              if (!validateEmail(value)) return ' Please enter a valid email addresss'
              console.log(`Checking email: ${value}...`)
              // We're going to mock that for now
              await new Promise((resolve) => setTimeout(resolve, 2000))
              return false
            }}
            />
        </div>
        <div className="input-wrapper">
          <label htmlFor="subject">Subject</label>
          <InputField /* @ts-ignore */
            id="subject"
            field="subject" 
            placeholder="Subject"
            validate={(value:string) => (!value ? ' Required' : false)}
            />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email-message">Message</label>
          <InputField /* @ts-ignore */ 
            id="email-message"
            field="message"
            placeholder="Message"
            validate={(value:string) => (!value ? ' Required' : false)}
            />
        </div>
        {isSubmitted && <em>Thanks for submitting!</em>}
        {error && <strong>{error}</strong>}
        {isSubmitting && 'Submitting...'}
        <div className="input-wrapper">
          <button className="submit-btn grow" type="submit" disabled={!!isSubmitting || !canSubmit}>Send</button>
        </div>
      </Form>
      <code>
        <pre>{JSON.stringify(values, undefined, 2)}</pre>
      </code>
    </section>
  )
}

function validateEmail(email:any) {
  var reggie =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reggie.test(String(email).toLowerCase())
}

export default MyForm
