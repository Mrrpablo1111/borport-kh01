import React, { useEffect } from "react";
import "./Category.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Category = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  });
  return (
    <section
      data-aos="fade-right"
      data-delay-aos="200"
      className="travel forum-font"
    >
      <div className="container">
        <div className="box">
          <img src="./planning.png" alt="" />
          <div className="content">
            <h4>seamless travel planning</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore omnis vitae praesentium itaque iure eveniet, neque sunt
              consequuntur! Perferendis dolorem reprehenderit iste quas quam
              laudantium officiis velit rem, odit eos.
            </p>
          </div>
        </div>
        <div className="box">
          <img src="./trust.png" alt="" />
          <div className="content">
            <h4>seamless travel planning</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore omnis vitae praesentium itaque iure eveniet, neque sunt
              consequuntur! Perferendis dolorem reprehenderit iste quas quam
              laudantium officiis velit rem, odit eos.
            </p>
          </div>
        </div>
        <div className="box">
          <img src="./map.png" alt="" />
          <div className="content">
            <h4>seamless travel planning</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore omnis vitae praesentium itaque iure eveniet, neque sunt
              consequuntur! Perferendis dolorem reprehenderit iste quas quam
              laudantium officiis velit rem, odit eos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
