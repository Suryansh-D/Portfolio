import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedComponent = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Frontend Development", "UI/UX" , "Video Editing","Unity Development","Content Creation" , "Digital Marketing","DBMS"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return <span ref={typedElement}></span>;
};

export default TypedComponent;
