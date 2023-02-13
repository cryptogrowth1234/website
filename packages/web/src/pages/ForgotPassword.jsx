import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import logo from "../assets/img/logo.png";
import { serverUrl } from "../config";
import { AuthContext } from "../context/AuthContext";
const ForgotPassword = () => {
  const { user, setForgotPasswordEmail } = useContext(AuthContext);
  const { replace } = useHistory();
  const [email, setemail] = useState(null);
  const [error, setError] = useState(null);
  const [message, setmessage] = useState(null);
  useEffect(() => {
    if (user !== null) {
      replace("/dashboard");
    }
  }, [user, replace]);
  const sendEmail = (e) => {
    e.preventDefault();
    axios
      .post(`${serverUrl}/auth/sendForgotPasswordEmail?email=${email}`)
      .then((res) => {
        if (res.status === 200) {
          setError(null);
          setmessage(res.data.msg);
          setForgotPasswordEmail(email);
          replace("/otp");
        } else {
          setError(res.data.msg);
          setmessage(null);
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };
  return (
    <section className='fxt-template-animation fxt-template-layout1'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6 col-12 fxt-bg-color'>
            <div className='fxt-content'>
              <div className='fxt-header'>
                <a href='/login' className='fxt-logo'>
                  <img src={logo} alt='Logo' />
                </a>
                <div className='fxt-page-switcher'>
                  <a href='/login' className='switcher-text1'>
                    Log In
                  </a>
                  <a href='/register' className='switcher-text1'>
                    Register
                  </a>
                </div>
              </div>
              <div className='fxt-form'>
                <h2>Forgot Password</h2>
                <p>For recover your password</p>
                <form onSubmit={sendEmail}>
                  <div className='form-group'>
                    <div className='fxt-transformY-50 fxt-transition-delay-1'>
                      <input
                        type='email'
                        className='form-control'
                        placeholder='Email Address'
                        required='required'
                        onChange={(e) => {
                          setemail(e.target.value);
                        }}
                      />
                      <i className='flaticon-envelope'></i>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='fxt-transformY-50 fxt-transition-delay-2'>
                      <button type='submit' className='fxt-btn-fill'>
                        Send Me Email
                      </button>
                    </div>
                  </div>
                </form>
                <span className='text-md text-red-600'>{error}</span>
                <span className='text-md text-green-600'>{message}</span>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-12 fxt-none-767 fxt-bg-img'></div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
