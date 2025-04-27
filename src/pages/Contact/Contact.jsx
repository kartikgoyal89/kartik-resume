import React from "react";
import SectionTitle from "../../components/SectionTitle";
import contact from "../../assets/contact.png";
import "./contact.css";

const Contact = () => {
  const user = {
    name: "Kartik Goyal",
    email: "kartikgoyal794@gmail.com",
    mobile: "+91-7669835303",
    age: "22",
    gender: "male",
    city: "New Delhi",
    country: "INDIA",
  };
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="w-full hello-container flex md:flex-col items-center justify-between">
        <div className="flex object-info flex-col gap-1">
          <h1 className="text-tertiary text-2xl font-[500]  ">{"{"}</h1>
          {Object.keys(user).map((key, idx) => (
            <h1 key={idx} className="my-info">
              <span className=" font-[500] text-tertiary contact-key">
                " {key} "
              </span>{" "}
              <span className=" text-tertiary text-xl me-5">:</span>
              <span className=" font-[500] bold text-tertiary contact-key transition-all hover:text-secondary duration-200">
                "{user[key]}"
              </span>
            </h1>
          ))}
          <h1 className="text-tertiary text-2xl font-[500]  ">{"}"}</h1>
        </div>
        <div className="hello-img">
          <img
            src={contact}
            alt="contact-img"
            width="500px"
            height="350px"
            className="contact-img pb-10  sm:ml-0 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
