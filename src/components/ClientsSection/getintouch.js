import React from "react";
import { useInView } from "react-intersection-observer";

const Getintouch = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div id="Contact" ref={ref} className={inView ? "show" : "hide"}>
      <div className="getintouchWraper">
        <div>
          <h1>Get in Touch</h1>
          <p>receive all the news and discount coupons from us</p>
        </div>
        <div className="forms">
          <form action="/action_page.php" />

          <input type="text" id="fname" name="firstname" placeholder="Name" />
          <form action="/action_page.php" />

          <input type="text" id="email" name="youremail" placeholder="Email" />
          <form action="/action_page.php" />

          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Phone number"
          />
          <input type="submit" value="Submit"></input>
        </div>
      </div>
    </div>
  );
};

export default Getintouch;
