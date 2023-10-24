import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Form, Modal, Row } from 'react-bootstrap'
import './moviecard.css'
import { Rating } from 'react-simple-star-rating'
import { deleteAReview, getMovieRating, getReviews, rateAMovie, uploadReview } from '../service/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Moviecard({movies}) {
  const[averageRating,setaverageRating]=useState()
const[modalsubmitResponse,setmodalsubmitResponse]=useState(1)
  const[details,setdetails]=useState(true)
  const[trailer,settrailer]=useState(false)
  const[rrate,setrrate]=useState(false)
  const [rating, setRating] = useState(0)
  const [ratingvalue, setRatingvalue] = useState(0)
  const[alratings,setalratings]=useState([])
const[rateforone,setrateforone]=useState([])
const[reviewdiv,setreviewdiv]=useState(false)
  const [ratings,setratings]=useState({
    id:"",movienamerat:"",ratingr:""
  })

  const [review,setreview]=useState({
    id:"",movienamer:"",reviewr:""
  })
  const[reviewforamovie,setreviewforamovie]=useState([])
  const[ratesamovie,setratesamovie]=useState([])

  const [reviewres,setreviewres]=useState([])
  const [ratingcome,setratingcome]=useState([])
  const [showtwo, setShowtwo] = useState(false);
  const handleClosetwo = () => setShowtwo(false);
  const handleShowtwo = () => setShowtwo(true);

  const [showtwoo, setShowtwoo] = useState(false);
  const handleClosetwoo = () => setShowtwoo(false);
  const handleShowtwoo = () => setShowtwoo(true);
const[sumofrate,setsumofrate]=useState([])
  const handletrailers=()=>{
    setdetails(false)
    setrrate(false)
    settrailer(true)
    setreviewdiv(false)

  }
  const handlemovieDetails=()=>{
    setdetails(true)
    settrailer(false)
    setrrate(false)
    setreviewdiv(false)


    
  }
  const handleReviewsforcontainer=async()=>{
  setdetails(false)
  settrailer(false)
  setrrate(false)
  setreviewdiv(true)
  const {data}=await getReviews()

setreviewres(data)
setreviewforamovie(reviewres.filter(item=>item.movienamer==movies.moviename))
}

  const handleReviews=async(name)=>{
   

const {data}=await getReviews()

setreviewres(data)
setreviewforamovie(reviewres.filter(item=>item.movienamer==movies.moviename))


console.log(reviewforamovie);


  }

  const handleratingg=()=>{
    setrrate(true)
    // setdetails(false)
    // settrailer(false)
    handleShowtwo()
  }

 const handlereviewModal=()=>{
    handleShowtwoo()


  }

  const afterReviewAdded=async()=>{
    
    handleReviewsforcontainer(movies.moviename)
    
    setmodalsubmitResponse(s=>s+1)
    review.movienamer=movies.moviename
    const {id,movienamer,reviewr}=review
    

  if(id && movienamer && reviewr){
    const response = await uploadReview(review)
    
    handleReviews()
    handleReviewsforcontainer(movies.moviename)
    handleClosetwoo()
    
    
   
  }
  else{
    toast.warning("Please Enter ID & Review Correctly")
  }
  }
  

  const handleRating = (rate) => {

    setRating(rate)
    var xy=rate
    setRatingvalue(xy)
   
    // other logic
  }
  const onPointerEnter = () => console.log('Enter')
  const onPointerLeave = () => {
    
  }
  const onPointerMove = (value, index) => console.log(value, index)
  
  const handleAfterRated=async()=>{
    
    
    ratings.movienamerat=movies.moviename
    ratings.ratingr=rating
    const {id,movienamerat,ratingr}=ratings
    

  if(id && movienamerat && ratingr){
    // const response = await rateAMovie(ratings)
    // alert(ratings.ratingr)
    handleClosetwo()
    await rateAMovie(ratings)
  }
  else{
    toast.warning("Please Enter The ID & Rating Correctly ")
    

  }

    
  }
const geteveryratings=async()=>{
  const {data}=await getMovieRating()
var sumc
var sumr
var sumf
  setratingcome(data)
  setratesamovie(ratingcome.filter(item=>item.movienamerat==movies.moviename))
  if(ratesamovie.length>0){
      
    
setsumofrate(ratesamovie.map(item=>item.ratingr))
console.log(sumofrate);
if(sumofrate.length>1){

sumc=(sumofrate.reduce((a,b)=>a+b))/sumofrate.length
sumr=sumc.toFixed(1)
setaverageRating(sumr)
// console.log(sumc);
}
//     sumc=eachrating.ratingr,
//     sumr=sumofrate,
//     sumf=sumc+sumr,
// setsumofrate(sumf)


      
    
    
    
}
  
  // console.log(ratesamovie);
  // if(ratesamovie.length>0){
  //     ratesamovie?.reduce((a,b)=>setsumofrate(a.ratingr+b.ratingr))
  // }
      
     
    
}
  // const getFullRates=async()=>{
  //   const {data} = await getMovieRating()
  //   setalratings(data);
  //   console.log(alratings);
  // }
  // useEffect(()=>{
  //   getFullRates()
  // },[])
  // const handlerateeee=()=>{
  // setrateforone(alratings.filter((item)=>item.id=="1"))
  // console.log(rateforone)
  // getFullRates()
  // }
  
useEffect(()=>{
  handleReviews()
  },[reviewforamovie])

  useEffect(()=>{
    geteveryratings()
    },[ratesamovie])
 



    const handleDelete=async(idForDelete)=>{
      
    
      // alert(idForDelete)
      const response = await deleteAReview(idForDelete)
      // setdeleteVideoStatus(s=>s+1)
  
     
      // dlAllUloadedVideos(idForDelete)
    }
            
  return (
    <>
    
    <div className="card" >
    
    <div className="card__inner ">
      <header className="card__header">
        <nav className="card__nav ">
          <ul className="list list--nav ">
            <li><a className='movie'  onClick={handlemovieDetails}>Movie</a></li>
            <li><a className='trailer'  onClick={handletrailers}>Trailer</a></li>
            <li><a className='review' onClick={()=>handleReviewsforcontainer(movies.moviename)} >Reviews</a></li>
          </ul>
        </nav>
      </header>
      {details&&
      
      <div className='movieDetailsContainer'>
        
      <div style={{height:'10%'}}></div>
      <main className="card__body d-flex justify-content-evenly mt-4 " style={{height:'80%'}}>
       <div className='cardimg ms-1' style={{width:'40%'}}> <img className='img-fluid rounded border' src={movies.url} alt="" style={{height:'300px',width:'100%'}} /></div>
       <div style={{width:'10%'}}></div>

        <div className="card__info" style={{width:'50%'}}>
          <h1 className="card__title text-success">{movies.moviename}</h1>
      
          <p className="card__slug">{movies?.caption.slice(0,116)}...</p>
          {/* <div><button className="card__btn" value="Watch trailer">Write A review</button></div>  */}
        <div className='justify-content-evenly d-flex mt-4'>
         <div><button onClick={handleratingg} className="card__btn text-center p-1" value="rate"><i className=" p-1 fa-solid fa-star text-warning"></i><span className='text-warning'>Rate Now</span></button></div> 
  
          <div className="flex-column">
          {/* <div><button onClick={geteveryratings} className="card__btn text-center p-1" value="rate"><i className=" p-1 fa-solid fa-star text-warning"></i><span className='text-warning'>View Rating</span></button></div>  */}
            <div className='text-center'>
              <i className="fa-solid fa-star text-warning p-1"></i>Movid Rating<span className='text-warning'></span>
            
        {sumofrate.length>1?
    <p className='ms-4 mt-3 text-light'>{averageRating}/5</p>
    :<p className='ms-4 text-danger'>0</p>
        }
  
        
     
              
              
              </div>
          </div>
          </div>
          
        </div>
        
      </main>
      
      
      <footer className=" card__footer d-flex justify-content-evenly" style={{height:'10%'}}>
        {/* <ul className="list list--info d-flex justify-content-evenly mt-5"> */}
        {/* <button className='btn btn-success' onClick={handlerateeee}>hi</button> */}
          <div>Release Year: <span className='text-success'>{movies.year}</span></div>
          {/* <li></li> */}
          <div>Genre: <span className='text-success'>{movies.genre}</span></div>
        {/* </ul> */}
      </footer>
      </div>}


      {trailer&&
      
      <div className='MovieTrailer' >
      
      <main className="card__body mt-4 " style={{width:'100%',height:'80%'}}>
      <iframe className='' style={{width:'100%',height:'100%'}} src={movies.embedlink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </main>
      </div>}


      {reviewdiv&&
      
      <div className='MovieReviews'>
      
      <main className="card__body mt-4 " style={{width:'100%',height:'80%'}}>
      <div className='text-center'>
        <button onClick={handlereviewModal} className="card__btn text-center p-1" value="review">Add Review</button></div>
      
      <h4 className='ms-4 mt-3 text-success'>Reviews</h4>
      {reviewforamovie.length>0 ?
      
      reviewforamovie.map(eachreview=>(
      
        

    <div className='d-flex justify-content-between'>
    <p className='ms-4 mt-3 text-light'>{eachreview.reviewr}</p>
    <button  className="btn" onClick={()=>handleDelete(eachreview?.id)}><i className='fa-solid fa-trash text-danger'></i></button>

    </div>
        
      ))
      :<p className='ms-4 text-danger'>No Reviews</p>
      
}
      </main>
      </div>}


      
<Modal show={showtwo} onHide={handleClosetwo}>
        
        <Modal.Body className='mt-5'>
            
            <Form className='text-center'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Review ID" onChange={(e)=>setratings({...ratings,id:e.target.value})}   />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label type="text" placeholder="Enter Review ID"    />{movies.moviename}
      </Form.Group>
            <Rating className='text-center'
        onClick={handleRating}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        
        
      />
      <h2>{ratingvalue}/5</h2>
            </Form>
        </Modal.Body>
        <Modal.Footer >
          <Button className='text-center' variant="secondary" onClick={handleClosetwo}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAfterRated}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>


      <Modal show={showtwoo} onHide={handleClosetwoo}>
        
        <Modal.Body className='mt-5'>
            
            <Form className='text-center'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Review ID" onChange={(e)=>setreview({...review,id:e.target.value})}   />
      </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label type="text" placeholder="Enter The Password" />Movie Name:{movies.moviename}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <textarea placeholder='Post Your Reviews' name="" id="" cols="45" rows="7" onChange={(e)=>setreview({...review,reviewr:e.target.value})}></textarea>
      </Form.Group>

            </Form>
        </Modal.Body>
        <Modal.Footer >
          <Button className='text-center' variant="secondary" onClick={handleClosetwoo}>
            Close
          </Button>
          <Button variant="primary" onClick={afterReviewAdded}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  </div>

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
  </>
    
  )
}

export default Moviecard