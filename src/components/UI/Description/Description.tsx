import React from "react";
import Title from "../Title/Title";
import "./description.scss";
export interface Description {
  desc: string;
  imgSrc: string;
}
function Description(props: Description) {
  return (
    <>
      <div className="desc">
        <img className="secondaryImg" src={props.imgSrc} alt="" />
        <div
          className="descData"
          dangerouslySetInnerHTML={{ __html: props.desc }}
        />
      </div>
    </>
  );
}

export default Description;
