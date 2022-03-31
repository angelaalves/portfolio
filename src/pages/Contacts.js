import React from "react";
import Button from "../components/Button";
import PageWrapper from "../components/PageWrapper";
const Contacts = () => {
  return (
    <PageWrapper
      title="Contacts"
      id="contacts"
      content={
        <div className="Contacts">
          <p className="Title Blue"> Want to talk?</p>
          <p className="Text ContactsText">
            Feel free to reach up specially If you are from Switzerland and want
            an awesome frontend developer in your team :)
          </p>
          <button
            className="Button ContactsButton"
            onClick={() => {
              console.log("open email");
            }}
          >
            <text className="ButtonText">Say Hello!</text>
          </button>
        </div>
      }
    />
  );
};
export default Contacts;
