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
    <div className="px-4 mt-16  mb-[100px]">
      <ToastContainer />
      <section className="flex justify-center mt-4 ">
        <div className="">
          <img
            className="hidden md:block rounded-[20px] "
            src="/assets/get-in-touch-images/getInTouch.svg"
            alt="background poster"
          />
        </div>

        <div className="  bg-[] rounded-[20px]  md:w-[450px]">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="pl-[20px]  pr-6 md:pr-[50px] md:pl-[52px]  h-full md:h-auto rounded-[20px] relative"
          >
            {/* <p className="text-white font-[raleway] pb-2">Name *</p> */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full h-[55.35px] rounded-2xl p-2 mb-6"
              placeholder="Name *"
            />
            {errors.name && (
              <p className="mb-2 text-sm text-red-500">{errors.name}</p>
            )}

            {/* <p className="text-white font-[raleway] pb-2">Email *</p> */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className=" w-full h-[55.35px] rounded-2xl bg-[#] border border-[#] p-2 mb-6"
              placeholder="Email *"
            />
            {errors.email && (
              <p className="mb-2 text-sm text-red-500">{errors.email}</p>
            )}

            {/* <p className="text-white font-[raleway] pb-2">Contact no *</p> */}
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              className="w-full h-[55.35px]  mb-6 rounded-2xl bg-[#] border border-[#] p-2"
              placeholder="Contact no *"
            />
            {errors.contact && (
              <p className="mb-2 text-sm text-red-500">{errors.contact}</p>
            )}

            {/* <p className="text-white font-[raleway] pb-2">Message *</p> */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full rounded-2xl bg-[#] p-2 h-[108px]"
              placeholder="Message *"
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}

            <div className="flex pt-[50px] text-center pt- ">
              {/* <Button title="Get In Touch" isChevronEnabled isPrimary={false} /> */}
              <button className="text-white bg-[#FED21C] px-12 py-2 rounded-2xl">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default EmailSection;
