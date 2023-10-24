import React from 'react'
import Add from '../Components/Add'
import View from '../Components/View'

function Home() {
  return (
    <>
    <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
      <Add />
      

    </div>
    <div className='mt-5 mb-5 container-fluid d-flex justify-content-evenly'>
      <div className='all-videos col-lg-12 ' >
        <h3 className='text-success'>New Movies</h3>
        <View />
      </div>
      {/* <div className='col-lg-1'></div>
      <div className='col-lg-3'>
      

      </div> */}
    </div>

    </>
  )
}

export default Home