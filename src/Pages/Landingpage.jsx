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

    
   
    </>
  )
}

export default Landingpage