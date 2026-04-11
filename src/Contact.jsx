import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const data = new FormData(form);

    fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfgeBZb4DZTH3bJiM_YIGzuhIvYCUojuVy119nJ_yrVIeRX-Q/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: data,
      }
    )
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div style={{ background: "#0b1a35", color: "white", minHeight: "100vh" }}>
      
      {/* Header */}
      <div className="text-center py-5">
        <h1 className="fw-bold">Contact Us</h1>
        <p className="text-light">We’d love to hear from you!</p>
      </div>

      <div className="container pb-5">
        <div className="row g-4">

          {/* Left Section */}
          <div className="col-md-5">
            <div className="p-4 rounded" style={{ background: "#132a52" }}>
              <h4>Get in Touch</h4>
              <p className="text-light">
                Feel free to reach out for any inquiries or business collaboration.
              </p>

              <p> 7293513859</p>
              <p> jadeert28@gmail.com</p>
              <p>palakkad, Kerala, India</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-md-7">
            <div className="p-4 rounded" style={{ background: "#132a52" }}>
              <h4>Send Message</h4>

              {/* ✅ Show Thank You Message */}
              {submitted ? (
                <div className="alert alert-success text-center">
                  🎉 Thank you! Your message has been sent successfully.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="entry.251208727"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      name="entry.1966741513"
                      className="form-control"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      name="entry.1091895698"
                      className="form-control"
                      rows="4"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Map */}
      {/* <div className="container pb-5">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
          style={{ borderRadius: "10px", border: "none" }}
        ></iframe>
      </div> */}

    </div>
  );
}