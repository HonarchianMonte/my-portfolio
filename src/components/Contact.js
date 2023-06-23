import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_i3kld54",
        "template_wb66r8a",
        form.current,
        "M378Hz-qquOnkkEJt"
      )
      .then(() => {
        setIsLoading(false);
        setIsSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      })
      .catch(() => {
        setIsLoading(false);
        // Handle error if needed
      });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="relative">
      <div className="container w-full px-5 py-10 pt-20 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            title="map"
            className="absolute inset-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52809.6874128845!2d-118.36649672320627!3d34.1820035366974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c295152818c595%3A0x307791af901f8ad4!2sBurbank%2C%20CA!5e0!3m2!1sen!2sus!4v1684977192513!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ filter: "opacity(0.7)" }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/3 px-6">
              <h2 className="font-semibold text-white tracking widest text-xs">
                LOCATION
              </h2>
              <p className="mt-1">Burbank, CA</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:montehonarchian@gmail.com"
                className="text-green-400 leading-relaxed"
              >
                montehonarchian@gmail.com
              </a>
              <h2 className="font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">818-388-2367</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="test"
          ref={form}
          onSubmit={sendEmail}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto md: mr-3 w-full md:py-8 mt-8 md:mt-0"
        >
          <h2 className="text-white sm:text-4xl text-3xl font-medium">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-4">
            Send me a message, and I'll get back to you as soon as possible!
          </p>
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900
            text-base py-1 px-3 outline-none text-gray-100 leading-8 transition-colors duration-200 ease-in-out"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
          </div>
          <div>
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="user_email"
              value={email}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900
            text-base py-1 px-3 outline-none text-gray-100 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="relative">
            {isLoading && (
              <div className="fixed top-20 left-0 right-0 py-2 text-white bg-green-500 flex items-center justify-center transition-opacity rounded text-lg">   
                  <span className="opacity-100">Sending...</span> 
              </div>
            )}
            {isSuccess && (
              <div className="fixed top-20 left-0 right-0 flex justify-center bg-green-500 px-4 py-2 text-white rounded shadow rounded text-lg">
                <div className="transition-opacity opacity-100 duration-2000">
                  Sent!
                </div>
              </div>
            )}
            {isError && (
              <div className="fixed top-20 left-0 right-0 flex items-center justify-center bg-red-500 px-4 py-2 text-white rounded shadow">
                Error Sending Message!
              </div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Submit
            </button>
            </div>
          </form>
      </div>
    </section>
  );
}

export default Contact;
