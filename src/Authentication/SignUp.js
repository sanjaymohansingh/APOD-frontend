import React , {useState}from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignUp.css'
import {Link , useNavigate} from 'react-router-dom'
import { useForm} from 'react-hook-form';
import axios from 'axios'
import Navbars from './Navbar';



function SignUp() {
   
    const {register , handleSubmit , formState :{errors}} = useForm()
    const navigate = useNavigate()

    const [data , setData] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : ""
      })
      
      const handleChange = (e)=>{
        setData({...data , [e.target.name]: e.target.value})
      }
      
      const handleSignUp = async(state)=>{
        if(state.password !== state.confirmPassword)return alert(`Password Doesn't match`)
        await axios.post( "https://apod.onrender.com/api/v1/user/signUp" , data).then((res)=>{
         localStorage.setItem('token' , res.data.token)
         navigate('/Dashboard') 
        })
       }

  return (
   <>
  
   <div className='main'>
   <Navbars/>
   <div className='form1'>
   <Form className='form2'>
    <h2 style={{textAlign:'center'}}>SignUp</h2>
   <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control  type="text" placeholder="Enter Name" {...register('name' , {
          required :{value: true , message :"Mandatory Field"},
          minLength :{value : 3, message :"Must be greate than 3 character"},
          maxLength : {value : 18 , message : "Must be less than 18 character"}
        }
       )} onChange={handleChange} />
        <label style={{color:"red"}} >{errors?.name?.message}</label>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="text" placeholder="Create Email" {...register('email' , {
          required :{value: true , message :"Mandatory Field"},
          minLength :{value : 12, message :"Must be greate than 12 character"},
          maxLength : {value : 30 , message : "Must be less than 30 character"}
        }
       )} onChange={handleChange} />
        <label style={{color:"red"}} >{errors?.email?.message}</label>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register('password' , {
          required: {value :true , message:"Mandatory Field"},
          minLength: {value :5 , message : "Must be greate than 5 character"}
        })} onChange={handleChange} />
          <label style={{color:"red"}}>{errors?.password?.message}</label>
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="confirmPassword"  {...register('confirmPassword' , {
          required: {value :true , message:"Mandatory Field"},
          minLength: {value :5 , message : "Must be greate than 5 character"}
        })}  onChange={handleChange}  />
          <label style={{color:"red"}}>{errors?.confirmPassword?.message}</label>
          <Button variant="primary" type="submit"  onClick={handleSubmit(handleSignUp)}>
        Submit
      </Button>
      <h6  >Already Have Account? </h6>
     <Link to={'/Signin'} ><h6 >Login</h6></Link>
      </Form.Group>
    </Form>
    <div className='img'>
        <p>
        As the hype around AI has accelerated, vendors have been scrambling to promote how their products and services use AI. Often what they refer to as AI is simply one component of AI, such as machine learning. AI requires a foundation of specialized hardware and software for writing and training machine learning algorithms. No one programming language is synonymous with AI, but a few, including Python, R and Java, are popular.</p>

<p >In general, AI systems work by ingesting large amounts of labeled training data, analyzing the data for correlations and patterns, and using these patterns to make predictions about future states. In this way, a chatbot that is fed examples of text chats can learn to produce lifelike exchanges with people, or an image recognition tool can learn to identify and describe objects in images by reviewing millions of examples.
</p>
    </div>
    </div>
 
    </div>
    
   </>
  )
}

export default SignUp