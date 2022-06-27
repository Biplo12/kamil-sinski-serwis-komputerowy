import React from "react";
import whyme from "../../Assets/Images/CrossSection/whyme.png";
const WhyMe = () => {
  return (
    <div className="whyme-container" id="dlaczego-ja">
      <div className="whyme-left">
        <img src={whyme} alt="whyme section" />
      </div>
      <div className="whyme-right">
        <h1>
          DLACZEGO <span>JA</span>?
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          atque tempore eius, autem ex neque quaerat perspiciatis vero deserunt,
          cumque quisquam quia totam aperiam possimus aliquam inventore numquam
          asperiores animi.
        </p>
      </div>
    </div>
  );
};

export default WhyMe;
