import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    borderRadius:10
  }
};
 

export default function App(){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [bg,setbg] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'rgb(141,105,29)';
  }
 
  function closeModal(){
    setIsOpen(false);
  }
 
    return (
      <div>
        <button 
         onMouseOver={()=>setbg(true)}
         onMouseOut={()=>setbg(false)}
         style={bg===false?btn:btn1}
        onClick={openModal}>Check Out</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <h2 ref={_subtitle => (subtitle = _subtitle)}>Check Out Successfully!</h2>
          <button onClick={closeModal}>close</button>
        
         
        </Modal>
      </div>
    );
}
 

const btn={
    height:50,
    width:330,
    fontWeight:'400',
    background:'black',
    color:'white',
   position:'absolute',
   bottom:0,
   opacity:3,

}
const btn1={
    height:50,
    width:330,
    position:'absolute',
   bottom:0,
    fontWeight:'400',
    background:'rgb(141, 105, 29)',
    color:'white',
    // marginTop:700,
    // marginLeft:500,
   opacity:3,

}