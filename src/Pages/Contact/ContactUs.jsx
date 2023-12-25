import { FaAddressBook, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://getform.io/f/8c8c66ef-5080-4fc5-ae28-d933f538786a", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your message send successfully",
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Sorry, Your message not send",
      });
    }
  };
  return (
    <div
      className="my-20 bg-yellow-50 py-20"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1500"
    >
      <h1 className="mx-auto text-center border-red-100 text-5xl font-bold text-black border-b-4 w-96 pb-2">
        CONTACT US
      </h1>
      <p className="text-center text-lg font-bold text-lime-600">
        Lets Talk About Ideas
      </p>

      <section className="px-20 py-32 md:flex lg:flex justify-between gap-8">
        <div className="">
          <div className="flex flex-col justify-center items-start gap-20">
            <h1 className="text-4xl font-bold text-black">Lets Connect</h1>
            <div>
              <div className="mt-10">
                <div className="flex justify-start items-center gap-4 mb-8">
                  <span className="text-4xl text-orange-500">
                    <FaAddressBook />
                  </span>
                  <div>
                    <h4 className="text-xl font-semibold">Address</h4>
                    <p className="text-lg">Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-4 mb-8">
                  <span className="text-4xl text-orange-500">
                    <MdEmail />
                  </span>
                  <div>
                    <h4 className="text-xl font-semibold">Email</h4>
                    <p className="text-lg">codermahdihasan@gmail.com</p>
                  </div>
                </div>
                <div className="flex justify-start items-center gap-4 mb-8">
                  <span className="text-4xl text-orange-500">
                    <FaPhone />
                  </span>
                  <div>
                    <h4 className="text-xl font-semibold">Phone</h4>
                    <p className="text-lg">+8801890385489</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg text-black">
              Please fill out the form on this section to <br /> contactUs with
              me or call between 9:00 A.M <br /> and 8.00 P.M ET, Monday through
              Friday.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-center items-start gap-20">
            <h1 className="text-4xl font-bold text-black">Let’s Message US</h1>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="label">
                <span className="label-text text-lg font-bold">Your name</span>
              </div>
              <input
                required
                onChange={handleChange}
                value={formData.name}
                type="text"
                name="name"
                placeholder="Your Name"
                id="name"
                className="input input-bordered border-3 border-black md:w-[480px] lg:w-[480px] mb-3 blok"
              />
              <div className="label">
                <span className="label-text text-lg font-bold">Your Email</span>
              </div>
              <input
                required
                onChange={handleChange}
                value={formData.email}
                type="email"
                name="email"
                placeholder="Your email"
                id="email"
                className="input input-bordered md:w-[480px] lg:w-[480px] border-3 border-black blok mb-3"
              />
              <div className="label">
                <span className="label-text text-lg font-bold">Subject</span>
              </div>
              <input
                required
                onChange={handleChange}
                value={formData.subject}
                type="subject"
                name="subject"
                placeholder="Your subject"
                id="subject"
                className="input input-bordered md:w-[480px] lg:w-[480px] border-3 border-black blok mb-3"
              />
              <div className="label">
                <span className="label-text text-lg font-bold">
                  Your Message (optional)
                </span>
              </div>
              <textarea
                onChange={handleChange}
                value={formData.message}
                className="textarea border-3 border-black md:w-[480px] lg:w-[480px] blok"
                name="message"
                placeholder="Please Your Message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>

              <button className="btn-outline btn-ghost text-lg mt-6 font-bold border-b-4 btn rounded">
                <input type="submit" value="Send Message" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
