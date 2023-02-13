import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import logo from "../assets/img/logo.png";
import otpIcon from "../assets/img/otp-icon.png";
import { serverUrl } from "../config";
import { AuthContext } from "../context/AuthContext";
const Otp = () => {
  const { replace } = useHistory();
  const { user, setUser, forgotPasswordEmail } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [message, setmessage] = useState(null);
  const [password, setPassword] = useState(null);
  useEffect(() => {
    if (user !== null) {
      replace("/dashboard");
    }
  }, [user, replace]);
  useEffect(() => {
    if (!forgotPasswordEmail) {
      return replace("/forgotPassword");
    }
  }, [forgotPasswordEmail, replace]);
  const [formInput, setFormInput] = useState({
    Otp: "",
    password: "",
  });

  const verifyOtp = (e) => {
    e.preventDefault();
    if (!formInput.Otp) {
      return setError("Please enter OTP");
    }
    if (!formInput.password) {
      return setError("Please enter password");
    }
    if (formInput.password.length < 6) {
      return setError("Password must be atleast 6 characters");
    }
    if (password !== formInput.password) {
      return setError("Password and confirm password must be same");
    }
    axios
      .post(
        `${serverUrl}/auth/forgotPassword?email=${forgotPasswordEmail}`,
        formInput
      )
      .then((res) => {
        if (res.status === 200) {
          setError(null);
          setUser(res.data);
          replace("/dashboard");
        }
        setError(res.data.msg);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    axios
      .post(
        `${serverUrl}/auth/sendForgotPasswordEmail?email=${forgotPasswordEmail}`
      )
      .then((res) => {
        if (res.status === 200) {
          setError(null);
          setmessage(res.data.msg);
          setTimeout(() => {
            replace("/otp");
          }, 1000);
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
                <img src={otpIcon} className='fxt-otp-logo' alt='Otp Logo' />
                <h2>Two-Step Verification</h2>
                <p>
                  We’ve sent a verification code to
                  <span>{forgotPasswordEmail}</span>
                </p>
                <label>Enter OTP Code Here</label>
                <form id='otp-form' onSubmit={verifyOtp}>
                  <div className='fxt-transformY-50 fxt-transition-delay-1'>
                    <div className='fxt-form-row'>
                      <input
                        type='text'
                        className='fxt-form-col otp-input form-control'
                        maxLength='6'
                        placeholder='Enter the Otp Code Here'
                        onChange={(e) => {
                          setFormInput({
                            ...formInput,
                            Otp: e.target.value,
                          });
                        }}
                      />
                      <input
                        type='password'
                        className='fxt-form-col otp-input form-control'
                        minLength='6'
                        placeholder='Enter your new Password'
                        onChange={(e) => {
                          setFormInput({
                            ...formInput,
                            password: e.target.value,
                          });
                        }}
                      />
                      <input
                        type='password'
                        className='fxt-form-col otp-input form-control'
                        minLength='6'
                        placeholder='Confirm Password'
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <span className='text-red-600 text-lg'>{error}</span>
                    <span className='text-md text-green-600'>{message}</span>
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
              </div>
            </div>
          </div>
          <div className='col-md-6 col-12 fxt-none-767 fxt-bg-img'></div>
        </div>
      </div>
    </section>
  );
};

export default Otp;
