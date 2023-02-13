import React, { useContext, useEffect, useState } from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import logo from "../assets/img/logo.png";
import { Link, useHistory } from "react-router-dom";
import useQuery from "../hooks/useQuery";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { serverUrl } from "../config";

const Register = () => {
  const { replace } = useHistory();
  const query = useQuery();

  const { user, setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const [formInput, setFormInput] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    if (user !== null) {
      replace("/dashboard");
    }
  }, [user, replace]);

  const sendEmail = (email) => {
    axios
      .post(`${serverUrl}/auth/sendVerifyEmail?email=${email}`)
      .then((res) => {
        if (res.status === 200) {
          setError(null);
        } else {
          setError(res.data.msg);
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post(`${serverUrl}/auth/register?ref=${query.get("ref")}`, formInput)
      .then((res) => {
        if (res.status === 200) {
          replace("/verifyEmail");
          setUser(res.data);
          sendEmail(res.data?.email);
        }
        setError(res.data.msg);
      })
      .catch((err) => {
        console.log("Login error: ", err);
      });
  };
  return (
    <section className='fxt-template-animation fxt-template-layout1'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6 col-12 fxt-none-767 fxt-bg-img'></div>
          <div className='col-md-6 col-12 fxt-bg-color'>
            <div className='fxt-content'>
              <div className='fxt-header'>
                <Link to='/' className='fxt-logo'>
                  <img src={logo} alt='Logo' />
                </Link>
                <div className='fxt-page-switcher'>
                  <Link
                    to='/login'
                    className='switcher-text1 switcher-text1-inactive'
                  >
                    Log In
                  </Link>
                  <Link
                    to='/register'
                    className='switcher-text1 switcher-text1-active'
                  >
                    Register
                  </Link>
                </div>
              </div>
              <div className='fxt-form'>
                <h2>Register</h2>
                <p>Create an account free and enjoy it</p>
                <form onSubmit={submitForm}>
                  <div className='form-group'>
                    <div className='fxt-transformY-50 fxt-transition-delay-1'>
                      <input
                        type='name'
                        className='form-control'
                        name='fullname'
                        placeholder='Enter your full name'
                        required
                        onChange={(e) => {
                          setFormInput({
                            ...formInput,
                            fullname: e.target.value,
                          });
                        }}
                      />
                      <i className='flaticon-user'></i>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='fxt-transformY-50 fxt-transition-delay-1'>
                      <input
                        type='name'
                        className='form-control'
                        name='name'
                        placeholder='Username'
                        required
                        onChange={(e) => {
                          setFormInput({
                            ...formInput,
                            username: e.target.value,
                          });
                        }}
                      />
                      <i className='flaticon-user'></i>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='fxt-transformY-50 fxt-transition-delay-2'>
                      <input
                        type='email'
                        className='form-control'
                        name='email'
                        placeholder='Email Address'
                        required
                        onChange={(e) => {
                          setFormInput({
                            ...formInput,
                            email: e.target.value,
                          });
                        }}
                      />
                      <i className='flaticon-envelope'></i>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='fxt-transformY-50 fxt-transition-delay-3'>
                      <input
                        type='password'
                        className='form-control'
                        name='password'
                        placeholder='Password'
                        required
                        onChange={(e) => {
                          setFormInput({
                            ...formInput,
                            password: e.target.value,
                          });
                        }}
                      />
                      <i className='flaticon-padlock'></i>
                    </div>
                  </div>
                  <p className='text-red-700 font-bold self-start capitalize'>
                    {error && error}
                  </p>
                  <div className='form-group'>
                    <div className='fxt-transformY-50 fxt-transition-delay-4'>
                      <button
                        type='submit'
                        className='fxt-btn-fill cursor-pointer'
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
