import axios from 'axios';
import React from 'react'
import {useState, useEffect} from 'react';
import{Link, useNavigate}from 'react-router-dom'

function Login() {

    const [LoginData, setLoginData] = useState(

        {
          _id:"",
          email: "",
          password: "",
        }
    
      );
    
      const navigate= useNavigate()
    
    
      const handleChange =({target})=>{
        const {value,name}=target
    
        setLoginData(prev=>(
          {
            ...prev,[name]:value
          }
        ))
      }
    
      const onSubmit= async(e)=>{
        e.preventDefault();

    
        try {
          const {data}=  await axios.post(`http://localhost:9000/api/auth/`,{
            email:LoginData.email,
            password:LoginData.password,
          })
  
  
          localStorage.setItem("email",data.data.email)
    
            navigate("/");
          
          
        } catch (error) {
        }
        
    
      }

  return (
    <div className='Card'>
      <div className='card-body p-2 form-control bg-light text-center'>
      <h2 class="text-uppercase text-center mb-2 mt-2 ">LOGIN FORM</h2>

      <form  className='d-flex align-items-center' onSubmit={(e)=>onSubmit(e)}>
      <div class="row col-12">
                    <div class="col-md-12 mb-4 pb-2">

                        <div class="form-outline mb-5">
                           <input type="email"  id="form3Examplev2"  value={LoginData.email} onChange={(e)=>handleChange(e)} name='email' placeholder='Enter Email' class="form-control form-control-lg" required />
                        </div>

                      <div class="form-outline">
                        <input type="password"  value={LoginData.password} onChange={(e)=>handleChange(e)}  id="form3Examplev2" name='password'  placeholder='Enter password' class="form-control form-control-lg" required/>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center">
                       <button type="submit"
                       class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                   </div>
                    <p class="text-center text-muted mt-3 mb-4"> Register New Acount <a href="#!"
                    class="fw-bold text-body text-success"><u> 
                      <Link to ={'/registerform'}>
                      Register!</Link></u></a></p>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login