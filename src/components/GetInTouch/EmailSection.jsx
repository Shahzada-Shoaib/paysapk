import React from "react";
import Button from "../Button";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EmailSection() {
  const form = useRef();
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      contact: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
      isValid = false;
    } else if (!/^\d{11}$/.test(formData.contact)) {
      newErrors.contact = "Contact number should be 10 digits";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm(
          "service_1zpuxqi",
          "template_6rl0d85",
          form.current,
          "gnFrwrau_B2K9mR_G"
        )
        .then((res) => {
          toast.success("Submitted Successfully");
          setFormData({
            name: "",
            email: "",
            contact: "",
            message: "",
          });
        })
        .catch((err) => {
          toast.error(err.text);
        });
    }
  };

  return (
    <div className="px-4 mt-16">
      <ToastContainer />
      <section className="relative max-w-screen-md mx-auto mt-4">
        <div className="md:pt-12">
          <img
            className="hidden md:block h-[456px] w-[424px] rounded-[20px] mb-32 "
            src="/assets/get-in-touch-images/yellowImage.svg"
            alt="background poster"
          />
        </div>

        <div
          className="md:absolute w-full lg:w-[604px]  bg-[#3F94C44D] rounded-[20px] top-0  
                md:left-[250px] z-20"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="pl-[20px]  pr-6 md:pr-[50px] pt-12 md:pt-8  md:pl-[52px]  h-full md:h-auto rounded-[20px] relative backdrop-blur-md"
          >
            <p className="text-white font-[raleway] pb-2">Name *</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full text-white mb-1 h-[42.35px] rounded-md bg-[#185C8333] border border-[#185C8333] p-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mb-2">{errors.name}</p>
            )}

            <p className="text-white font-[raleway] pb-2">Email *</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="text-white w-full mb-1 h-[42.35px] rounded-md bg-[#185C8333] border border-[#185C8333] p-2"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-2">{errors.email}</p>
            )}

            <p className="text-white font-[raleway] pb-2">Contact no *</p>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              className="w-full h-[42.35px] text-white mb-1 rounded-md bg-[#185C8333] border border-[#185C8333] p-2"
            />
            {errors.contact && (
              <p className="text-red-500 text-sm mb-2">{errors.contact}</p>
            )}

            <p className="text-white font-[raleway] pb-2">Message *</p>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full text-white rounded-md bg-[#185C8333] border border-[#185C8333] p-2"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mb-2">{errors.message}</p>
            )}

            <div className="text-center flex justify-center pt-6 pb-8">
              <Button title="Get In Touch" isChevronEnabled isPrimary={false} />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default EmailSection;
