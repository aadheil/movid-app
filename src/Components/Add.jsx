import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadAMovie } from '../service/allApi';
function Add() {
    const [movie,setmovie]=useState({
        id:"",moviename:"",caption:"",url:"",year:"",genre:"",embedlink:""
      })
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showtwo, setShowtwo] = useState(false);

  const handleClosetwo = () => setShowtwo(false);
  const handleShowtwo = () => setShowtwo(true);
  const[password,setpassword]=useState()
  const handleAddButton=()=>{

    handleShowtwo()
    
    
  }
  const handlePasswordSubmit=()=>{
    handleClosetwo()
 if(password==1234){
    
    handleShow()
 }
 else{
    toast.error("Wrong Password !!! Contact Admin For Password")
 }
  }

  const handleMovieUpload =async()=>{
    const {id,moviename,url,year,genre,embedlink,caption}=movie
  if(id && moviename && url && year && genre && embedlink &&caption){
    const response = await uploadAMovie(movie)
    handleClose()
    toast.success("Movie Details Uploaded Successfully")
  }
  else{
    toast.warning("Please fill the form completely")

  }
  
}

  return (
    <>
    <div className='d-flex align-items-center'>
      <h5 className='text-danger'>Add New Movie</h5>
      <button onClick={handleAddButton} className='btn'><i className='fa-solid fa-circle-plus fs-3 text-success'></i></button>


    </div>
    {/* modal for password */}
    <Modal show={showtwo} onHide={handleClosetwo}>
        
        <Modal.Body>
            
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter The Password" onChange={(e)=>setpassword(e.target.value)}/>
      </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosetwo}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePasswordSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>


    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Movie ID" onChange={(e)=>setmovie({...movie,id:e.target.value})}   />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Movie Name" onChange={(e)=>setmovie({...movie,moviename:e.target.value})}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Movie Name" onChange={(e)=>setmovie({...movie,caption:e.target.value})}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Movie Image URl" onChange={(e)=>setmovie({...movie,url:e.target.value})}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Release Year" onChange={(e)=>setmovie({...movie,year:e.target.value})}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Movie Genre" onChange={(e)=>setmovie({...movie,genre:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Movie Trailer Embed Link" onChange={(e)=>setmovie({...movie,embedlink:e.target.value})} />
      </Form.Group>
      </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleMovieUpload}  >Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      
position="top-center"

autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
      {/* onChange={(e)=>setvideo({...video,id:e.target.value})} */}
      </>
  )
}

export default Add