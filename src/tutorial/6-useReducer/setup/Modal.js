import React, { useEffect } from 'react';

const Modal = ({modalContent ,closemodal}) => {
  useEffect(() => {
    setTimeout(()=>{
      closemodal()
    },3000)
  })
  return <div className="modal"><p>{modalContent}</p></div>;
};

export default Modal;
