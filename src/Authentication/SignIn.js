import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React , {useState}from 'react'
import { useForm} from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SignUp.css'
import {Link , useNavigate} from 'react-router-dom'
import axios from 'axios'


function SignIn() {
    const {register , handleSubmit , formState :{errors}} = useForm()
    const navigate = useNavigate()

    const [data , setData] = useState({
        email : "",
        password : "",
      })

    const handleChange = (e)=>{
       setData({...data , [e.target.name]: e.target.value})
      }

      const handleSignIn = async()=>{

        await axios.post( "https://apod.onrender.com/api/v1/user/signIn" , data).then((res)=>{
          localStorage.setItem('token' , res.data.token)
           navigate('/Dashboard')
         }).catch(err=>alert(err.response.data.message))
        }

  return (
    <>
   

    <div className='main'>
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" style={{color:"white"}}>Welcome To  <span style={{color:'red', fontWeight:'bold'}}>AI DIGITAL</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/" style={{color:"white" ,  fontWeight:"bold"}}>
            SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  
   <div className='form1'>
   <Form className='form2'>
    <h2 style={{textAlign:'center'}}>Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control  type="text" placeholder="Enter Email" {...register('email' , {
          required :{value: true , message :"Mandatory Field"},
          minLength :{value : 12, message :"Must be greate than 12 character"},
          maxLength : {value : 30 , message : "Must be less than 30 character"}
        }
       )} onChange={handleChange} />
        <label style={{color:"red"}} >{errors?.email?.message}</label>
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register('password' , {
          required: {value :true , message:"Mandatory Field"},
          minLength: {value :5 , message : "Must be greate than 5 character"}
        })} onChange={handleChange} />
          <label style={{color:"red"}}>{errors?.password?.message}</label>
      </Form.Group>
     
      <Button variant="primary" type="submit"  onClick={handleSubmit(handleSignIn)}>
        Submit
      </Button>
      <h6 style={{marginTop:'1rem'}} >Don't Have Account? </h6>
     <Link to={'/'} ><h6 >SignUp</h6></Link>
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

export default SignIn