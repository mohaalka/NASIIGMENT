import React from 'react'
import {useState, useEffect} from 'react';
import{Link, useNavigate}from 'react-router-dom'
import axios from 'axios';

function EnterData() {

  const [formData, setformData] = useState(

    {
      _id:"",
      jobName: "",
      jobDesc: "",
      jobSalary: "",
      JobLocation: "",
    }

  );

  const navigate= useNavigate()


  const handleChange =({target})=>{
    const {value,name}=target

    setformData(prev=>(
      {
        ...prev,[name]:value
      }
    ))
  }

  const onSubmit= async(e)=>{
    e.preventDefault();

    try {
      const {data}=  await axios.post(`http://localhost:9000/api/job/`,{
        jobName:formData.jobName,
        jobDesc:formData.jobDesc,
        JobLocation:formData.JobLocation,
        jobSalary:formData.jobSalary,
      })



          navigate("/jobPortal")
      
      
    } catch (error) {
      
    }
    

  }

  return (

    <div className='Card'>
      <div className='card-body p-2 form-control bg-light text-center mt-5'>
      <h2 class="text-uppercase text-center mb-3 mt-1 ">Enter Data to DB</h2>

      <form  className='d-flex align-items-center' onSubmit={(e)=>onSubmit(e)}>
      <div class="row col-12">
                    <div class="col-md-12 mb-4 pb-2">

                      <div class="form-outline">
                        <input type="" id="form3Examplev2" name='jobName' onChange={(e)=>handleChange(e)} placeholder='Enter JobName' value={formData.jobName} class="form-control form-control-lg" required />
                        <div class="mt-4">
                          <textarea class="form-control" name='jobDesc' value={formData.jobDesc}  rows="7" onChange={(e)=>handleChange(e)} placeholder="Message sent to the employer" required></textarea>
                       </div>
                      </div>
                    </div>

                      <div class="col-lg-6 mb-3">
                      <div class="form-outline">
                        <input type="" id="form3Examplev2" name='jobSalary' onChange={(e)=>handleChange(e)} placeholder='Enter Sallary...' value={formData.jobSalary} class="form-control form-control-lg" required />
                      </div>
                      </div>

                      <div class="col-md-6 mb-3">
                      <div class="form-outline">
                        <input type="" id="form3Examplev2" name='JobLocation' value={formData.JobLocation} onChange={(e)=>handleChange(e)} placeholder='Enter Loc....' class="form-control form-control-lg" required/>
                      </div>
                      </div>
                      <div class="d-flex justify-content-center">
                         <button type="submit"
                         class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Insert Data</button>
                       </div>
                      {/* <button type='submit' className='btnInset'>Insert Data</button> */}
                  
        </div>
      </form>
    </div>
    </div>

  )
}

export default EnterData