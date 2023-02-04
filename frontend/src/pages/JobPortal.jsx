import React from 'react'
import {useEffect, useState} from "react";
import { FaEdit , FaRegTrashAlt , FaPlusSquare} from "react-icons/fa";
import {Link , useNavigate} from 'react-router-dom'
import axios from "axios";

 const JobPortal=()=> {
  const [jobData , setjobData]= useState([])

  const [jobDataDell , setjobDataDell]= useState([])

  const navigate = useNavigate();

  const fetchData =()=>{

    axios.get('http://localhost:9000/api/job/').then((res)=>{
      let jportal = res.data;
      setjobData(jportal.data);
    })
    
    
  }
  useEffect(()=> {
    fetchData();
  },[])


  const handleUpdate = (id)=>{

    navigate(`/updateDate/${id}`);
    
  }


const handleDelete = async(id)=>{
try {
  const {data}= await axios.delete(`http://localhost:9000/api/job/${id}`)
  window.location.reload()

} catch (error) {}

  
}
 


  // console.log("Data",jobData);
  return (
    <div>
      
      <h1 class="avB">AVALIABLE JOBS</h1>

    <Link to ={"/enterData"}>

      <h4 className='add'><FaPlusSquare/></h4>
    </Link>
      {
          jobData.map(data=>{
            return(
              
                <div className="card" key={data._id}>
                    <h3>{data.jobName}</h3>
                    <div className="desc">
                        <p>{data.jobDesc}</p>
                    </div>
                  <div className='salLoc'>
                    <h6 className="salary">${data.jobSalary}</h6>
                    <h6 className="location">{data.JobLocation}</h6>
                  </div>
                  <div className='icons'>

                  <Link to ={`/updateDate/${data._id}`}>
                    <h5 className='edit'>
                      <FaEdit/>
                    </h5>
                  </Link>
                <h5 className='dell' onClick={()=> handleDelete(data._id)}><FaRegTrashAlt/>
                 
                  </h5> 

                  </div>
                  
                </div>
            )
          
          })
        }
      
    
    </div>
    
  )
}

export default JobPortal