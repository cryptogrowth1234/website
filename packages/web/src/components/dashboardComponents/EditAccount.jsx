import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment, useContext, useState } from "react";
import { useHistory } from "react-router";
import { serverUrl } from "../../config";
import { AuthContext } from "../../context/AuthContext";

const EditAccount = ({ isOpen, setIsOpen }) => {
  const { user, setUser } = useContext(AuthContext);
  const { replace } = useHistory();
  function closeModal() {
    setIsOpen(false);
  }
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [formInput, setFormInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    username: user?.username,
    password: user?.password,
    oldPassword: "",
  });
  const [error, setError] = useState(null);

  const editDetails = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Both password does not match");
    }
    if (password.length < 7 && confirmPassword.length < 7) {
      return setError("Your password is not strong enough!");
    }
    var confirmEditDetails = window.confirm(
      `Are you sure you want to change your details to the following: \n Full name : ${formInput.fullname} \n Username : ${formInput.username} \n Email : ${formInput.email}`
    );
    if (!confirmEditDetails) {
      return closeModal();
    }
    axios
      .post(`${serverUrl}/auth/editDetails?oldEmail=${user?.email}`, formInput)
      .then(
        (res) => {
          if (res.status === 200) {
            setUser(res.data);
            replace("/login");
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
    <>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-50 flex justify-self-start'
          onClose={closeModal}
        >
          <div className='text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='w-full h-full max-w-md p-6 overflow-hidden text-left transition-all transform bg-white shadow-xl'>
                <div className='flex flex-row justify-between'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'
                  >
                    Edit your account
                  </Dialog.Title>
                  <svg
                    className='w-6 h-6 cursor-pointer'
                    fill='none'
                    onClick={closeModal}
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </div>
                <form className='mt-2' onSubmit={editDetails}>
                  <div className='flex flex-row  space-x-4 items-center justify-between mt-3'>
                    <p className='text-lg text-gray-900 mt-2'>Full Name:</p>
                    <input
                      required={true}
                      type='text'
                      className='text-lg border-b-2 border-blue-500 outline-none '
                      name='fullname'
                      placeholder={user?.fullname}
                      onChange={(e) => {
                        setFormInput({
                          ...formInput,
                          fullname: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='flex flex-row  space-x-4 items-center justify-between mt-3'>
                    <p className='text-lg text-gray-900 mt-2'>Username:</p>
                    <input
                      required={true}
                      type='text'
                      className='text-lg border-b-2 border-blue-500 outline-none '
                      name='username'
                      placeholder={user?.username}
                      onChange={(e) => {
                        setFormInput({
                          ...formInput,
                          username: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='flex flex-row  space-x-4 items-center justify-between mt-3'>
                    <p className='text-lg text-gray-900 mt-2'>Email:</p>
                    <input
                      required={true}
                      type='email'
                      className='text-lg border-b-2 border-blue-500 outline-none '
                      name='email'
                      placeholder={user?.email}
                      onChange={(e) => {
                        setFormInput({
                          ...formInput,
                          email: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='flex flex-row  space-x-4 items-center justify-between mt-3'>
                    <p className='text-lg text-gray-900 mt-2'>Old Password:</p>
                    <input
                      required={true}
                      type='password'
                      className='text-lg border-b-2 border-blue-500 outline-none '
                      name='oldPassword'
                      onChange={(e) => {
                        setFormInput({
                          ...formInput,
                          oldPassword: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='flex flex-row  space-x-4 items-center justify-between mt-3'>
                    <p className='text-lg text-gray-900 mt-2'>New Password:</p>
                    <input
                      required={true}
                      type='password'
                      className='text-lg border-b-2 border-blue-500 outline-none '
                      name='password'
                      onChange={(e) => {
                        setpassword(e.target.value);
                      }}
                    />
                  </div>
                  <div className='flex flex-row  space-x-4 items-center justify-between mt-3'>
                    <p className='text-lg text-gray-900 mt-2'>
                      Confirm Password:
                    </p>
                    <input
                      required={true}
                      type='password'
                      className='text-lg border-b-2 border-blue-500 outline-none '
                      name='password'
                      onChange={(e) => {
                        setconfirmPassword(e.target.value);
                        setFormInput({
                          ...formInput,
                          password: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <p className='text-red-600'>{error}</p>
                  <button
                    type='submit'
                    className='inline-flex w-full mt-4 justify-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                  >
                    Submit
                  </button>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditAccount;
