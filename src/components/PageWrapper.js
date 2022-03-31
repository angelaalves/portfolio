import React from "react";

const PageWrapper = ({ title, id, content }) => {
  return (
    <div id={id}>
      <h5 className="Identifier">{title} </h5>
      <div className="Wrapper">{content}</div>
    </div>
  );
};
export default PageWrapper;
