import React,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Input } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { api } from '../../../util';
// import loginlogo from '../static/login.png'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./login.css"
import loginImg from './img/login.jpg';

const theme = createTheme();

export default function Login({signinDatas}) {
    const [mail,setMail] = useState('')
    const [otp,setOtp] = useState('')
    const [verify,setVrify] = useState(false)
    const [ip,setIp] = useState(false)
    const [ie,setIe] = useState(false)
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
useEffect(()=>{
    const location = window.location.href;
  const url = new URL(location);
  const queryParams = new URLSearchParams(url.search);
  const token = queryParams.get('ut');
  sessionStorage.clear()
  try
   {  
    let verifys =  jwtDecode(token)
    console.log(verifys)
    setVrify(verifys)
    setMail(verify.un)
    setOtp(verify.otp)
    sessionStorage.setItem('un',verifys.un)
    sessionStorage.setItem('otp',verifys.otp)
    sessionStorage.setItem('role',verifys.role)
    console.log(verifys)
  }
   catch(e)
   {
    setVrify(false)
   }
},[])
const signin = ()=>{
  setLoading(true)
  if(verify)
  {
 
    axios.post(api+'auth/login',{mail: sessionStorage.getItem('un'),otp: sessionStorage.getItem('otp'), role : sessionStorage.getItem('role')}).then((res)=>{  
      if(res.data.status.value??false)
        {
          setIp(true)
        }
        else
     {   
      sessionStorage.setItem('un',res.data.status._id)
        sessionStorage.setItem('role',res.data.status.role)
        sessionStorage.setItem('mail',res.data.status.mail)
        // toast.success("Login Success")
        navigate('/board')
      }
      setLoading(false)
    }).catch((err)=>{
      console.log("I AM FROM ERR")
      setIe(true)
      setLoading(false)
    })
  }
else
{
   axios.post(api+'auth/login',{mail,otp}).then((res)=>{
    if(res.data.status.value??false)
    {
      setIp(true)
    }
    else
{
    sessionStorage.setItem('un',res.data.status._id)
    sessionStorage.setItem('role',res.data.status.role)
    sessionStorage.setItem('mail',res.data.status.mail)
    // toast.success("Login Success")
    navigate('/board')
    }
    setLoading(false)
}).catch((err)=>{
  setIe('1px solid red') 
  setLoading(false)
})
}
}

return <div style={{"background-color": "#00316A"}}>
<nav className="navbar navbar-light bg-light">
  <span className='fw-bold' style={{cursor : 'pointer'}} onClick={()=>navigate('/')}>iDocs</span>
  </nav>
<div style={{"padding" : "111px"}}>
    <div className="row">
<div className="col-md-6">
<img src={loginImg} width="95%" alt="Login Image"/>
</div>
<div className="col-md-6" >
<div className="card" style={{"padding" : "10%", "border-radius": "10%", boxShadow: "10px"}}>
<div className="p-2 text-center fw-bold">
    Login
</div>
<div className="p-2">
<div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">
        <i className="fa-solid fa-envelope"></i>
      </span>
    </div>
    <input type="email"
            onChange={(e)=>{
              setIe(false)
              setMail(e.target.value)}}
    className="form-control" placeholder="Email ID" aria-label="Email" aria-describedby="basic-addon1"/>
  </div>
  {/* <div className='text-danger fw-bold'>{ie!='none' ? <small className='text-denger fw-bold' style={{fontSize : '10px'}}>Invalid Email</small>:<br/>}</div> */}
</div>
<div className="p-2">
<div className="input-group">
    <div className="input-group-prepend">
      <span className="input-group-text" id="basic-addon1">
        <i className="fa-solid fa-key"></i>   
      </span>
    </div>
    <input type="password"          onChange={(e)=>{
          setIp(false)
           setOtp(e.target.value)
         }}  className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
  </div>
  {/* <div className='text-danger fw-bold'>{ip!='none' ? <small className='text-denger fw-bold' style={{fontSize : '10px'}}>Invalid Password</small>:<br/>}</div> */}
</div>
<br/>
<div className="text-center">
<button style={{width : "50%"}} className="btn btn-primary" disabled={loading} onClick={()=> signin()}>
{ loading && <div class="spinner-border spinner-border-sm text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>}
      {!loading && 'Login'} 
 </button>

</div><br/>
{/* {ie!='none' ? <div  className='text-center text-danger fw-bold'><small><i class="fa-solid fa-circle-xmark"></i> Invalid Email</small></div> : <br/>}
{ip!='none' ? <div className='text-center text-danger fw-bold'><small><i class="fa-solid fa-circle-xmark"></i> Invalid Password</small></div> : <br/>} */}
{(ip || ie) ? <div className='text-center text-danger fw-bold'><small>
{(ip || ie) && <i class="fa-solid fa-circle-xmark"></i> } &nbsp;
{ip && 'Invalid Password'}
{ie && 'Invalid Emaili'}
  </small></div> : <br/>}
</div>
    </div>
</div>

</div>
</div>
}



//   return <div className='p-5'> 
//     <div className="login-body container" id="container">
//   <div className="form-container sign-in">
//     <div className='form' >
//       <h1>Login</h1>
//       <input type="email" placeholder="Email"             id="username"
//             style={{border : ie }}
//             onChange={(e)=>{
//               setIe('none')
//               setMail(e.target.value)}}/>
// {ie!='none' && <Typography variant="small" color="error">
//         Invalid Email
//       </Typography>}
//       <input type="password" placeholder="Password"
//          value={sessionStorage.getItem('otp')}
//          style={{border : ip }}
//         //  '1px solid red'
//          onChange={(e)=>{
//           setIp('none')
//            setOtp(e.target.value)
//          }} />
//          {ip!='none' &&  <Typography variant="small" color="error">
//         Invalid Password
//       </Typography>}
//       <button disabled={loading} onClick={()=> signin()}>{loading? 
//       <div class="spinner-border spinner-border-sm text-light" role="status">
//       <span class="sr-only">Loading...</span>
//     </div>
//       :'Sign In'}</button>
//     </div>
//   </div>
//   <div className="toggle-container">
//     <div className="toggle">
//       <div className="toggle-panel toggle-right">
//         <h1>iDocs</h1>
//         <p>Verification made easy</p>
//         <button className="hidden" id="register">Learn more</button>
//       </div>
//     </div>
//   </div>
// </div>
// </div>

