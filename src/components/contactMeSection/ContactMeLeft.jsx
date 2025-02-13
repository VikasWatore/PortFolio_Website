import React from 'react'
import ContactMeForm from './ContactMeForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-8'>
        <div>
            <h2 className='text-orange text-3xl mb-4'> Get In Touch</h2>
            <p className='text-white'>
                Feel Free to reach out if you'd like to collaborate
                <br/>
                you are just a few clicks away!
                </p>
        </div>
        <ContactMeForm/>
    </div>
  )
}

export default ContactMeLeft