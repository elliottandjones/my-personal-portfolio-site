import { useState } from 'react'
import './ContactForm.css'

export type CustomEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// type CustomEvent = React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLTextAreaElement>

function ContactForm() {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
    sent: false,
    buttonText: 'Submit',
    err: '',
  })
  // update data in form fields
  const onChange = (event: CustomEvent): void => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
    console.table(data)
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

  // TODO
  //const clearFormFields = () => {}

  return (
    <>
      <section className="contact" id="contact">
        <form className="contact-form" onSubmit={onSubmit}>
          <div>
            <label htmlFor="full-name">Full Name</label>
            <input id="full-name" name="name" type="text" onChange={onChange} />
          </div>
          <div>
            <label htmlFor="email-address">Email Address</label>
            <input id="email-address" name="email" type="email" onChange={onChange} />
          </div>
          <div>
            <label htmlFor="email-message">Email Message</label>
            <textarea
              name="message"
              id="email-message"
              cols={30}
              rows={10}
              onChange={onChange}
            ></textarea>
          </div>
          <div className="captcha-element">Captcha Element</div>
          <div className="btn">
            <input type="submit" />
          </div>
        </form>
      </section>
      <section>
        <code>
          <pre>{data}</pre>
        </code>
      </section>
    </>
  )
}

export default ContactForm
// const onBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//   const { name, value } = e.target
//   setData({
//     ...data,
//     [name]: value,
//   })
// }

/* <div>
    <label htmlFor="email-subject">Subject</label>
    <input id="email-subject" name="subject" type="text" onChange={onChange} />
  </div> */
