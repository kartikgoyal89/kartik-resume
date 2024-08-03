import React from "react";
import SectionTitle from "../../components/SectionTitle";
import contact from "../../assets/contact.png";

const Contact = () => {
  const user = {
    name: "Kartik Goyal",
    email: "kartikgoyal794@gmail.com",
    mobile: "+91-7669835303",
    age: "21",
    gender: "male",
    city: "New Delhi",
    country: "INDIA",
  };
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex md:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-tertiary text-2xl ">{"{"}</h1>
          {Object.keys(user).map((key, idx) => (
            <h1 key={idx}>
              <span className="text-tertiary text-md contact-key">
                " {key} "
              </span>{" "}
              <span className="text-tertiary me-5">:</span>
              <span className="text-tertiary text-md contact-key">
                "{user[key]}"
              </span>
            </h1>
          ))}
          <h1 className="text-tertiary text-2xl">{"}"}</h1>
        </div>
        <div>
          <img
            src={contact}
            alt="contact-img"
            width="500px"
            height="300px"
            className="contact-img pb-10 ml-20 sm:ml-0 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
