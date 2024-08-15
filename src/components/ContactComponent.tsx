import React from "react";
import Button from "@/components/Button";

const ContactComponent = () => {
  return (
    <div style={{  minWidth:'400px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{paddingBottom: '20px'}}>Write to us</h1>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        id="form"
        noValidate
        style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
        <input type="hidden" name="access_key" value="06633241-2db5-4dc9-8187-61dc6c57ae89" />

        <input type="checkbox" style={{ display: "none" }} name="botcheck" />

        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            placeholder="Full Name"
            required
            name="name"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #ccc',
              borderRadius: '8px',
              outline: 'none',
              fontSize: '16px',
            }}
          />
          <div style={{ color: '#f87171', fontSize: '14px', marginTop: '8px', display: 'none' }}>
            Please provide your full name.
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email_address" style={{ display: 'none' }}>Email Address</label>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            name="email"
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #ccc',
              borderRadius: '8px',
              outline: 'none',
              fontSize: '16px',
            }}
          />
          <div style={{ color: '#f87171', fontSize: '14px', marginTop: '8px', display: 'none' }}>
            Please provide your email address.
          </div>
          <div style={{ color: '#f87171', fontSize: '14px', marginTop: '8px', display: 'none' }}>
            Please provide a valid email address.
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <textarea
            name="message"
            required
            placeholder="Your Message"
            style={{
              width: '100%',
              padding: '12px',
              border: '2px solid #ccc',
              borderRadius: '8px',
              outline: 'none',
              fontSize: '16px',
              minHeight: '144px',
              resize: 'vertical'
            }}
          ></textarea>
          <div style={{ color: '#f87171', fontSize: '14px', marginTop: '8px', display: 'none' }}>
            Please enter your message.
          </div>
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#4f46e5',
            color: '#fff',
            padding: '12px 20px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            alignSelf: 'flex-start',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={e => e.currentTarget.style.backgroundColor = '#4338ca'}
          onMouseOut={e => e.currentTarget.style.backgroundColor = '#4f46e5'}
        >
          Send Message
        </button>

        <div id="result" style={{ marginTop: '20px', textAlign: 'center' }}></div>
      </form>
    </div>
  );
};

export default ContactComponent;
