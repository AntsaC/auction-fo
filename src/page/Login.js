import "./login.css";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from "react";
import { Authentificable } from "../service/liste";

function Login(props) {
  var { id } = useParams();
  var name = useRef();
  var pwd = useRef();
  if (props.value != null) {
    id = props.value;
  }
  
  const [is, setIs] = useState();
  const navigate = useNavigate();
  const handleClose = () => setIs(true);
  const subLogin = () => {
    Authentificable({ username: name.current.value, password: pwd.current.value }).then(function (response) {
     // console.log(response.data.data);
     
      localStorage.setItem("token", JSON.stringify(response.data.data));
      ///handleClose();
      navigate("/fiche/" + id);
    }).catch(function (error) {
      alert(error.response.data.error.message);
    });
  }
  useEffect(function(){
    if(localStorage.getItem("token") != null){
      navigate("/fiche/" + id);
    }
  },[])


  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Login</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Username"
			  value="Jonhs"
              ref={name} 
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
			  value="jonhs"
              ref={pwd}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" className="btn btn-primary" onClick={subLogin}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login;