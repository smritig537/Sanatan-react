import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

function ContactForm() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: ''
  // });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('SanatanadharmaFoundation', 'template_v4vvl4c', form.current, {
        publicKey: 'QBZt0A9i62vFSZOBd',
      })
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="User_name" />
      <label>Email</label>
      <input type="email" name="email_name" />
      <label>Message</label>
      <textarea name="message" />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default ContactForm;
