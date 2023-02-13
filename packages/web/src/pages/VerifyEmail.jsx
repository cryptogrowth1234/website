import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import logo from "../assets/img/logo.png";
import email from "../assets/img/email.png";
import { useContext, useEffect, useState } from "react";
import { serverUrl } from "../config";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useHistory } from "react-router";

const VerifyEmail = () => {
  const { user } = useContext(AuthContext);
  const [number, setnumber] = useState(null);
  const { replace } = useHistory();
  const [error, setError] = useState(null);
  const [message, setmessage] = useState(null);
  useEffect(() => {
    if (user?.isEmailVerified) {
      replace("/dashboard");
    }
  }, [user, replace]);
  const sendEmail = (e) => {
    e.preventDefault();
    axios
      .post(`${serverUrl}/auth/sendVerifyEmail?email=${user?.email}`)
      .then((res) => {
        if (res.status === 200) {
          setError(null);
          setmessage(res.data.msg);
        } else {
          setError(res.data.msg);
          setmessage(null);
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  const verifyEmail = (e) => {
    e.preventDefault();
    axios
      .post(`${serverUrl}/auth/VerifyEmail?email=${user?.email}`, { number })
      .then((res) => {
        if (res.status === 200) {
          setError(null);
          setmessage(res.data.msg);
          replace("/dashboard");
          window.location.reload();
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
    <div>
      <section className='fxt-template-animation fxt-template-layout1 loaded'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6 col-12 fxt-bg-color'>
              <div className='fxt-content'>
                <div className='fxt-header'>
                  <a href='/' className='fxt-logo'>
                    <img src={logo} alt='Logo' />
                  </a>
                </div>
                <div className='fxt-form'>
                  <img src={email} className='fxt-otp-logo' alt='Otp Logo' />
                  <h2>Verify your Email Address</h2>
                  <p>
                    We’ve sent a verification code to<span>{user?.email}</span>
                  </p>
                  <label>Enter OTP Code Here</label>
                  <form id='otp-form' onSubmit={verifyEmail}>
                    <div className='fxt-transformY-50 fxt-transition-delay-1'>
                      <div className='fxt-form-row'>
                        <input
                          type='text'
                          className='fxt-form-col otp-input form-control'
                          maxLength='6'
                          required='required'
                          placeholder='Enter the Otp Code Here'
                          onChange={(e) => {
                            setnumber(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className='fxt-form-btn fxt-transformY-50 fxt-transition-delay-4'>
                      <button type='submit' className='fxt-btn-fill mb-0'>
                        Next
                      </button>
                    </div>
                  </form>
                </div>
                <div className='fxt-footer'>
                  <div className='fxt-transformY-50 fxt-transition-delay-7'>
                    <p>
                      Not received your code?
                      <button className='fxt-btn-resend' onClick={sendEmail}>
                        Resend code
                      </button>
                    </p>
                  </div>
                  <span className='text-red-600 text-lg'>{error}</span>
                  <span className='text-md text-green-600'>{message}</span>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-12 fxt-none-767 fxt-bg-img'></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerifyEmail;
