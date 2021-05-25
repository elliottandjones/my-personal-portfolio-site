import React, { useState } from 'react'
import './ContactForm.css'

export default function ContactForm() {
  const [data, setData] = useState({name: '', email: '', message: '', sent: false, buttonText: 'Submit', err: ''})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
      setData({
        ...data,
        [name]: value
    })
  }
  const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = e.target
      setData({
        ...data,
        [name]: value
    })
  }
  return (
    <section className="contact" id="contact">
      <form className="contact-form" onSubmit={e=>e.preventDefault()}>
        <div>
          <label htmlFor="full-name">Full Name</label>
          <input id="full-name" name="full-name" type="text" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email-address">Email Address</label>
          <input id="email-address" name="email-address" type="email" onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email-body">Email Body</label>
          <textarea name="email-body" id="email-body" cols={30} rows={10} onChange={handleBodyChange}></textarea>
        </div>
        <div className="captcha-element">
          Captcha Element
        </div>
        <div className="btn">
          <input type="submit" value=""/>
        </div>
      </form>
    </section>
  )
}
