import axios from "axios";
import React, { useState } from "react";
import { SlPencil } from "react-icons/sl";
import { IoAlertCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { TfiEmail } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, name, company);

    try {
      const response = await axios.post("/api/v1/email/sendEmail/", {
        name,
        email,
        company,
        message,
      });
      if (response.data.success) {
        alert("Email sent successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <div className="flex m-16 p-16">
        <div className="w-5/12">
          <div className="font-medium">Contact Us</div>
          <div className="font-bold py-4 text-6xl">Let's Talk</div>
          <p className="text-gray-500">
            We will reach out to you within 24 hours
          </p>
          <p className="pt-6 font-medium opacity-80">
            Don't like filling up forms? Email us directly at-
          </p>
          <div className="flex py-2 m-1 pr-3">
            <IconContext.Provider value={{ color: "green", size: "1.5em" }}>
              <div className="">
                <TfiEmail />
              </div>
              <p className="px-2">hi@trudax.io</p>
            </IconContext.Provider>
          </div>
        </div>
        <div className="w-7/12">
          <form className="p-2 m-2 " onSubmit={handleSubmit}>
            <div className=" m-2">
              <label className="flex border-b-2">
                <IconContext.Provider value={{ color: "grey", size: "1.5em" }}>
                  <div className="py-2 m-1 pr-3">
                    <FaRegUser />
                  </div>
                </IconContext.Provider>

                <input
                  type="text"
                  className="w-11/12 text-opacity-85 "
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className="m-2">
              <label className="flex border-b-2">
                <IconContext.Provider value={{ color: "grey", size: "1.5em" }}>
                  <div className="py-2 m-1 pr-3">
                    <TfiEmail />
                  </div>
                </IconContext.Provider>
                <input
                  type="email"
                  className="w-11/12 text-opacity-85 "
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div className="m-2">
              <label className="flex border-b-2">
                <IconContext.Provider value={{ color: "grey", size: "1.7em" }}>
                  <div className="py-2 m-1 pr-3">
                    <IoAlertCircleOutline />
                  </div>
                </IconContext.Provider>
                <input
                  type="text"
                  className="w-11/12 text-opacity-85 "
                  placeholder="Company Name"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </label>
            </div>
            <div className="m-2 ">
              <label className="flex border-b-2">
                <IconContext.Provider value={{ color: "grey", size: "1.3em" }}>
                  <div className="py-3 m-1 pr-3">
                    <SlPencil />
                  </div>
                </IconContext.Provider>
                <textarea
                  className="w-11/12 py-3 text-opacity-85 resize-y "
                  value={message}
                  placeholder="How can we help you? Feel free to get in touch"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
            </div>
            <div className="pt-8">
              <button
                className="flex px-6 py-3 m-2 bg-green-700 rounded-3xl text-white hover:bg-green-500"
                type="submit"
              >
                <div className="p-1">
                  <PiTelegramLogo />
                </div>
                <p className="px-1">Get In Touch</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
