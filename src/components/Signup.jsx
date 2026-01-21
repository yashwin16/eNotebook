import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
    const navigate = useNavigate();
    const [credentials,setCredentials] = useState({name:"",email:"",password:"",cpassword:""})
        const handleSubmit= async (e)=>{
            e.preventDefault();
            const {name,email,password} = credentials;
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/createuser`,{
                method:"POST",
                headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name,email,password})
            });
        const json=await response.json();
        console.log(json);
        if(json.success){
            localStorage.setItem('token',json.authToken);
            navigate("/");
            props.showAlert("Account Created Successfully","success")
        }else{
            props.showAlert("Invalid Credentials","danger")
        }
    }
        const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
        }
    return (
    <div className="container mt-2">
        <h2 className="my-3">Sign Up to use eNotebook</h2>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="text" className="form-label">Name</label>
    <input type="name" value={credentials.name} onChange={onChange} className="form-control" id="name" name="name" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" value={credentials.email} onChange={onChange} className="form-control" id="email" name="email" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" value={credentials.password} onChange={onChange} className="form-control" id="password" name="password" required minLength={5}/>
    </div>
    <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" value={credentials.cpassword} onChange={onChange} className="form-control" id="cpassword" name="cpassword" required minLength={5}/>
    </div>
    <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Signup
