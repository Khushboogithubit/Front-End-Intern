import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all required fields!");
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus("Please enter a valid email!");
      return;
    }

    try {
      const response = await fetch(
        "https://vernanbackend.ezlab.in/api/contact-us/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setStatus("Form Submitted");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Submission failed");
      }
    } catch (error) {
      setStatus("Error submitting form");
    }
  };

  return (
    <section className="contact-section">
      <div className="decor-top-right"></div>
      <div className="decor-bottom-left"></div>
      <div className="content">
        <div className="contact-left">
          <p>
            Whether you have an idea, a question, or simply want to explore how V can work together, 
            V’re just a message away.<br/>
            Let’s catch up over coffee.<br/>
            Great stories always begin with a good conversation.
          </p>
        </div>

        <div className="contact-right">
          <h3>Join the Story</h3>
          <p>Ready to bring your vision to life? Let’s talk.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Your message*"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>

          {status && <p style={{ textAlign: "center", marginTop: "10px" }}>{status}</p>}

          <div className="contact-info">
            <a href="mailto:vernita@varnanfilms.co.in">vernita@varnanfilms.co.in</a>
            <span>+91 98736 84567</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
