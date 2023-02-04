import axios from 'axios';
import React,{useState}from 'react'
import { useEffect } from 'react';
import { FaPen} from "react-icons/fa";
import {Link, useParams,useNavigate} from 'react-router-dom'

export default function UpdateData() {

  const params =useParams();

  const navigate= useNavigate()


  const [formData, setformData] = useState(

      {
        _id:"",
        jobName: "",
        jobDesc: "",
        jobSalary: "",
        JobLocation: "",
      }
  );

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
    // window.confirm("hello")

    try {
      const {data}=  await axios.put(`http://localhost:9000/api/job/${formData._id}`,{
        jobName:formData.jobName,
        jobDesc:formData.jobDesc,
        JobLocation:formData.JobLocation,
        jobSalary:formData.jobSalary,
      })


          navigate("/jobPortal")
      
      
    } catch (error) {
      
    }
    

  }

  const getData = async(id)=>{
    try {
      const {data}= await axios.get(`http://localhost:9000/api/job/${id}`);
  
      setformData(data.data);

    } catch (error) {
      
    }

    
  };
  useEffect(()=>{
    getData(params.id);
  },[]);
  
  console.log("formData ",formData);

  return (
    <div className='Card'>
      <div className='card-body p-2 form-control bg-light text-center mt-5'>
      <h2 class="text-uppercase text-center mb-2 mt-2 ">Update your Data</h2>

      <form  className='d-flex align-items-center' onSubmit={(e)=>onSubmit(e)}>
      <div class="row col-12">
                    <div class="col-md-12 mb-4 pb-2">

                      <div class="form-outline">
                        <input type="" onChange={(e)=>handleChange(e)} name='jobName' value={formData && formData.jobName} id="form3Examplev2" placeholder='Enter JobName' class="form-control form-control-lg" required />
                        <div class="mt-4">
                          <textarea class="form-control" onChange={(e)=>handleChange(e)} name='jobDesc' value={formData && formData.jobDesc}  rows="7" placeholder="Message sent to the employer" required></textarea>
                       </div>
                      </div>
                    </div>

                      <div class="col-lg-6 mb-4">
                      <div class="form-outline">
                        <input type="" id="form3Examplev2" onChange={(e)=>handleChange(e)} name='jobSalary'  value={formData && formData.jobSalary}  placeholder='Enter Sallary...' class="form-control form-control-lg" required />
                      </div>
                      </div>

                      <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input type="" onChange={(e)=>handleChange(e)} name='JobLocation' id="form3Examplev2" value={formData && formData.JobLocation}  placeholder='Enter Loc....' class="form-control form-control-lg" required />
                      </div>
                      </div>
                      <div class="d-flex justify-content-center">
                         <button type="submit"
                         class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Update Data</button>
                       </div>
                     
                  
        </div>
      </form>
    </div>
    </div>

  )
}
