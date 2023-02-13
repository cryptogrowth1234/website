import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState, useContext, useEffect } from "react";
import moment from "moment";
import { AuthContext } from "../context/AuthContext";
export default function Profile({ editAccount }) {
  const { user, logout } = useContext(AuthContext);
  const [time, setTime] = useState(moment().format("YYYY-MM-DD, h:mm:ss a"));
  useEffect(() => {
    setInterval(() => {
      setTime(moment().format("YYYY-MM-DD, h:mm:ss a"));
    }, 1000);
    return () => {};
  }, [setTime]);
  return (
    <div className='lg:w-80 w-60 h-full text-white flex  justify-center lg:justify-start items-center '>
      <span className='text-xs font-semibold hidden lg:flex '>{time}</span>
      <Menu as='div' className='relative text-left w-2/5 inline-block ml-3'>
        <div className='flex space-x-4'>
          <Menu.Button className='flex space-x-2 justify-around w-full px-2 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <span className='w-8/12 h-5 overflow-hidden'>{user?.username}</span>
            <svg
              className='w-5 h-5 shadow-lg  ml-2 -mr-1 text-violet-200 hover:text-violet-100 z-50'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'
              ></path>
            </svg>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-gray-900 hover:bg-opacity-80`}
                    onClick={editAccount}
                  >
                    {active ? <EditActiveIcon /> : <EditInactiveIcon />}
                    Edit Account
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-gray-900 hover:bg-opacity-80`}
                    onClick={logout}
                  >
                    {active ? <LogoutActiveIcon /> : <LogoutInactiveIcon />}
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function LogoutActiveIcon() {
  return (
    <svg
      className='w-5 h-5 mr-2'
      aria-hidden='true'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill='#8B5CF6'
        stroke='#C4B5FD'
        strokeWidth='2'
        d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
      ></path>
    </svg>
  );
}

function LogoutInactiveIcon() {
  return (
    <svg
      className='w-5 h-5 mr-2'
      aria-hidden='true'
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill='#EDE9FE'
        stroke='#A78BFA'
        strokeWidth='2'
        d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
      ></path>
    </svg>
  );
}

function EditInactiveIcon() {
  return (
    <svg
      className='w-5 h-5 mr-2'
      aria-hidden='true'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 13V16H7L16 7L13 4L4 13Z'
        fill='#EDE9FE'
        stroke='#A78BFA'
        strokeWidth='2'
      />
    </svg>
  );
}

function EditActiveIcon() {
  return (
    <svg
      className='w-5 h-5 mr-2'
      aria-hidden='true'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 13V16H7L16 7L13 4L4 13Z'
        fill='#8B5CF6'
        stroke='#C4B5FD'
        strokeWidth='2'
      />
    </svg>
  );
}
