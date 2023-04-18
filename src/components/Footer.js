import React, { useState } from "react";
import Modal from "./Modal";
const Footer = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <footer className="footer">
        <div className="attribution">
          Challenge by{" "}
          <a className='link' href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend  Mentor
          </a>
          . Coded by <a className='link' href="https://portfolio-2023-lac-nine.vercel.app/" target="_blank">Julián Martinez</a>.
        </div>
        <button className="rules" onClick={toggle}>
          Rules
        </button>
      </footer>
      {modal ? <Modal toggle={toggle} /> : null}
    </>
  );
};

export default Footer;
