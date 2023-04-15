import React from "react";
import styles from "@/styles/ContactComponent.module.css";
const ContactComponent = () => {
  return (
    <div className={styles.contact}>
      <form
        method="POST"
        className={styles.contactForm}
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
              <input type="hidden" name="form-name" value="contact" />

    
       <h1>Write to us</h1>
    
        <div>
          <label htmlFor="">Full Name</label>
          <input type="text" name="fullname" />
        </div>

        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email" />
        </div>

        <div>
          <label htmlFor="">Business Name</label>
          <input type="text" name="fullname" />
        </div>

        <div>
          <label htmlFor="">Message</label>
          <textarea name="message" id="message" cols={30} rows={10}></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactComponent;
