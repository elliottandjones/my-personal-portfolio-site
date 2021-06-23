import { useState } from 'react'
// import { splitFormProps, useField, useForm } from 'react-form'
import './ContactForm.css'

export type CustomEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// type CustomEvent = React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>

// const InputField = forwardRef((props, ref) => {
//   // Let's use splitFormProps to get form-specific props
//   const [field, fieldOptions, rest] = splitFormProps(props)

//   // Use the useField hook with a field and field options
//   // to access field state
//   const {
//     meta: { error, isTouched, isValidating, message },
//     getInputProps,
//   } = useField(field, fieldOptions)

//   // Build the field
//   return (
//     <>
//       <input {...getInputProps({ ref, ...rest })} />

//       {/*
//         Let's inline some validation and error information
//         for our field
//       */}

//       {isValidating ? (
//         <em>Validating...</em>
//       ) : isTouched && error ? (
//         <strong>{error}</strong>
//       ) : message ? (
//         <small>{message}</small>
//       ) : null}
//     </>
//   )
// })

const initialState = {
  name: '',
  email: '',
  message: '',
  sent: false,
  buttonText: 'Submit',
  err: '',
}

function ContactForm() {
  const [data, setData] = useState(initialState)
  // update data in form fields
  const onChange = (event: CustomEvent): void => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
  }
  // submit the form
  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    setData({
      ...data,
      sent: true,
    })
    console.info('form submitted')
  }
  

  // TODO make a POST request the form data to server
  //const submitFormData = () => {}

  // const clearFormFields = (): void => {
  //   setData(initialState)
  // }

  return (
    <>
      <section className="contact" id="contact">
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="full-name">Full Name</label>
            <input autoComplete="false" id="full-name" name="name" type="text" onChange={onChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email-address">Email Address</label>
            <input id="email-address" name="email" type="email" onChange={onChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email-message">Email Message</label>
            <textarea
              name="message"
              id="email-message"
              cols={30}
              rows={10}
              onChange={onChange}
            ></textarea>
          </div>
          <div className="input-wrapper">
            <div className="captcha-element">Captcha Element</div>
          </div>
          <div className="input-wrapper">
            <input className="btn" type="submit" />
          </div>
        </form>
      </section>
      <section>
        <pre>
          {JSON.stringify(data, undefined, 2)}
        </pre>
      </section>
    </>
  )
}

// function validateEmail(email: any): boolean {
//   let reggie =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//   return reggie.test(String(email).toLowerCase())
// }

export default ContactForm
// const onBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//   const { name, value } = e.target
//   setData({
//     ...data,
//     [name]: value,
//   })
// }
