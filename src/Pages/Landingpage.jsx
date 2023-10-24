import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import './landing.css'
import Footer from '../Components/Footer'
function Landingpage() {
    const navigateByUrl = useNavigate()
    const navigate=()=>{
      navigateByUrl('/home')
  
  
    }
          
  return (
    <>
    <div className='back d-flex w-100 justify-content-center align-items-center' style={{height:'671px'}}>
        <div>
            <h2 className='text-center text-danger'>MoviD</h2>
            <p className='mt-5 text-center text-light'>MoviD Helps Users To Find the Reviews And Ratings For Movies. <br />
            And Also User Can Post Their Reviews And Ratings</p>
            <div className='text-center'>
            <Link  to={'/home'} className='btn btn-success mt-5 text-center'>Click To Know More</Link>

            </div>
        </div>
        

    </div>

   
      <div className="row mb-5 mt-4">
        <div className="col">

        <Card style={{ width: '18rem' }} className='shadow'>
      <Card.Img style={{width:'100%',height:'200px'}} variant="top" src="https://media.istockphoto.com/vectors/back-row-view-of-a-cinema-screen-vector-id96611482?k=6&m=96611482&s=612x612&w=0&h=BXbF4C9zzmv0XSzns3cHa6nkXMSDPyRCh4cLqwfIuGk=" />
      <Card.Body>
        <Card.Title className='text-success'>Know About A Movie</Card.Title>
        <Card.Text className='text-light'>
          You can simply know about a movie and decide wheather it worth to watch.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

        </div>


        <div className="col">

        <Card style={{ width: '18rem' }}>
      <Card.Img style={{width:'100%',height:'200px'}} variant="top" src="https://www.psychiatryadvisor.com/wp-content/uploads/sites/8/2019/05/girl-watching-video-on-mobile-phone_SH_379989589.jpg" />
      <Card.Body>
        <Card.Title className='text-success'>Watch Trailer</Card.Title>
        <Card.Text className='text-light'>
          You can watch trailers of newly released movies
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

        </div>


        <div className="col">

        <Card style={{ width: '18rem' }}>
      <Card.Img style={{width:'100%',height:'200px'}} variant="top" src="https://img.freepik.com/free-vector/feedback-concept-illustration_114360-4928.jpg?t=st=1698137757~exp=1698138357~hmac=c411dafd0306db030b87efbfda55dd2e8af6e732de1cda8e4d06fa7575672bc4" />
      <Card.Body>
        <Card.Title className='text-success'>Reviews</Card.Title>
        <Card.Text className='text-light'>
         You can write your own reviews about a movie and can watch the reviews of other users
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>


        </div>


        <div className="col">

        <Card style={{ width: '18rem' }}>
      <Card.Img style={{width:'100%',height:'200px'}} variant="top" src="https://img.freepik.com/free-vector/client-review-web-screen-successful-4-4-star-business-opinion_1150-37483.jpg?w=1060&t=st=1698137460~exp=1698138060~hmac=afbd3f4b6cea43349c4b55bd986c9ed4586f145f3ea689f9fb54dd5417763e11" />
      <Card.Body>
        <Card.Title className='text-success'>Ratings</Card.Title>
        <Card.Text className='text-light'>
          You can add your ratings for a movie and you can also see the overall ratings of a movie
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

        </div>

      </div>

    

    
   
    </>
  )
}

export default Landingpage