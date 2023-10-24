import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Moviecard from './Moviecard'
import { getAllMovies } from '../service/allApi'

function View() {
  const[allMovies,setallMovies]=useState([])

  const getfullmovies=async()=>{
    const {data} = await getAllMovies()
    setallMovies(data);
    console.log(allMovies);
  
  }
  useEffect(()=>{
    getfullmovies()
  },[])
  return (
    <>
    <Row>
    {allMovies.length>0 ?
      allMovies.map(eachmovie=>(
      
        <Col sm={12} md={12} lg={6} xl={6}  >

        
    <Moviecard movies={eachmovie} />
  
  
        </Col>
      ))
      :<p className='text-danger'>Nothing</p>
      
}
      
      
      
    </Row>
    </>
  )
}

export default View