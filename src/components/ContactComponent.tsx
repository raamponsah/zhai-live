import React from 'react'
import styles from '@/styles/ContactComponent.module.css'
const ContactComponent = () => {
  return (
    <div className={styles.contact}>
        <form className={styles.contactForm}>
                <div>
                <label htmlFor="">Full Name</label>
                <input type="text" name='fullname' />
                </div>

                <div>
                <label htmlFor="">Email</label>
                <input type="email" name='email' />
                </div>

                <div>
                <label htmlFor="">Business Name</label>
                <input type="text" name='fullname' />
                </div>

                <div>
                <label htmlFor="">Message</label>
                <textarea name="message" id="message" cols={30} rows={10}></textarea>
                </div>

                
            </form>
    </div>
  )
}

export default ContactComponent