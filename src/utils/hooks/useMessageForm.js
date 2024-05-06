// useMessageForm.js
import { useState } from "react";

function useMessageForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform additional actions like sending the message to a server here
    // For now, let's just set submitted to true
    setSubmitted(true);
  };

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    submitted,
    handleSubmit,
  };
}

export default useMessageForm;
