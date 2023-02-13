import React, { useContext, useEffect, useState } from "react";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import logo from "../assets/img/logo.png";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { serverUrl } from "../config";

const Login = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const { replace } = useHistory();

  const { user, setUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user !== null) {
      replace("/dashboard");
    }
  }, [user, replace]);

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post(`${serverUrl}/auth/login`, formInput)
      .then(
        (res) => {
          if (res.status === 200) {
            setUser(res.data);
          }
          setError(res.data.msg);
        },
        (rej) => {
          console.log("rejection", rej);
        }
      )
      .catch((err) => {
        console.log("Login error: ", err);
        setError(err);
      });
  };

  return (
    <section className='fxt-template-animation fxt-template-layout1 login'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6 col-12 fxt-bg-color'>
            <div className='fxt-content'>
              <div className='fxt-header'>
                <Link to='/' className='fxt-logo'>
                  <img src={logo} alt='Logo' />
                </Link>
                <div className='fxt-page-switcher'>
                  <Link
                    to='/login'
                    className='switcher-text1 switcher-text1-active'
                  >
                    Log In
                  </Link>
                  <Link
                    to='/register'
                    className='switcher-text1 switcher-text1-inactive'
                  >
                    Register
                  </Link>
                </div>
              </div>
              <div className='fxt-form'>
                <h2>Log In</h2>
                <p>Log in to continue in our website</p>
                <form onSubmit={submitForm}>
                  <div className='form-group'>
                    <div className='fxt-transformY-50 fxt-transition-delay-1'>
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
                    <div className='fxt-transformY-50 fxt-transition-delay-2'>
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
                  <div className='form-group'>
                    <div className='fxt-transformY-50 fxt-transition-delay-3'>
                      <div className='fxt-content-between flex flex-row items-center justify-between'>
                        <button
                          type='submit'
                          className='fxt-btn-fill cursor-pointer'
                        >
                          Log in
                        </button>
                        <a
                          href='/forgotPassword'
                          className='hover:text-blue-600'
                        >
                          Forgot Password
                        </a>
                      </div>
                      <p className='text-red-700 font-bold self-start capitalize'>
                        {error && error}
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='col-md-6 col-12 fxt-none-767 fxt-bg-img'></div>
        </div>
      </div>
    </section>
  );
};

export default Login;
