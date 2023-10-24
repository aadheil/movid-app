import React from 'react'
import Landingpage from './Pages/Landingpage'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Header/>

      <Routes>
        
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Home/>}/>
      

      </Routes>
      <Footer/>
      
    
    </>
  )
}

export default App























































// import React, { useState } from 'react'
// import { postaBlog } from './service/allApi'
// import { Button, Modal, Form } from 'react-bootstrap';

// function App() {
//   const[blog,setblog]=useState({
//     id:"",blogDetails:"",url:""
//   })
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const handlePost=async()=>{
//     const{id,blogDetails,url}=blog
//     const response=await postaBlog(blog)
    
//   }
//   return (
//     <div>
//        <button onClick={handleShow} className='btn'>add</button>
//        <Modal
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Upload A Blog</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>

//         <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Control type="text" placeholder="Enter Blog ID" onChange={(e)=>setblog({...blog,id:e.target.value})} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Control type="text" placeholder="Write The Blog" onChange={(e)=>setblog({...blog,blogDetails:e.target.value})} />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Control type="text" placeholder="Enter Blog Image URl" onChange={(e)=>setblog({...blog,url:e.target.value})} />
//       </Form.Group>
//       {/* <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Control type="text" placeholder="Enter Youtube Video Link"  onChange={extractLink}/>
//       </Form.Group> */}
//       </Form>

//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handlePost} >Upload</Button>
//         </Modal.Footer>
//       </Modal>
//       <button>post blog</button>
//     </div>
//   )
// }

// export default App