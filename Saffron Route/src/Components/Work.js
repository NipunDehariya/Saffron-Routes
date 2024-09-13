import React from "react";
import first from "../Assets/cht22.gif";
import second from "../Assets/location.gif";
import third from "../Assets/ticketsss.gif";

const Work = () => {
  const workInfoData = [
    {
      image: first,
      title: "Ask the Destination",
      text: "Chatbot can help you to pick your next  destination",
    },
    {
      image: second,
      title: "Know the Destination ",
      text: "get familiar with the destination",
    },
    {
      image: third,
      title: "Book the Destination",
      text: "Directly book your passes through the chatbot",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">What you get</h1>
        <p className="primary-text">
          We help you to find the perfect destination, book your tickets, and enjoy your meals. Our chatbot is ready to help you.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
