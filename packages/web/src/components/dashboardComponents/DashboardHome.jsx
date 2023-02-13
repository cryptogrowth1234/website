import React from "react";
import laptop from "../../assets/img/laptop.svg";
import { AuthContext } from "../../context/AuthContext";

const DashboardHome = () => {
  const { user, disableContextMenu } = React.useContext(AuthContext);
  return (
    <>
      <div className='grid grid-cols-12 gap-4 p-4  w-full '>
        <div className='col-span-12 lg:col-span-6 p-2 py rounded-lg bg-paint flex flex-col md:flex-row justify-around items-start md:items-center'>
          <div className='w-full md:w-6/12 lg:w-3/5 flex flex-col space-y-2 h-full p-4'>
            <span className='text-sm uppercase'>Account Balance</span>
            <span className='text-gray-400 text-2xl'>$ {user?.accountBal}</span>
            <hr style={{ color: "goldenrod" }} />
            <div className='flex justify-between py-2'>
              <div className='flex flex-col space-y-2'>
                <span className='text-sm'>Username</span>
                <span className='text-xs text-gray-400'>{user?.username}</span>
              </div>
              <div className='flex flex-col space-y-2'>
                <span className='text-sm'>Email</span>
                <span className='text-xs text-gray-400'>Private</span>
              </div>
            </div>
          </div>
          <div className='hidden md:flex w-full md:w-6/12 flex-row-reverse  lg:w-2/5 h-44 p-4'>
            <img src={laptop} className='object-cover h-full' alt='' />
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 lg:col-span-3 p-3 rounded-lg  bg-paint flex flex-col space-y-4 justify-between'>
          <div className=' flex flex-col space-y-1'>
            <span className='text-xs uppercase '>Total Deposited</span>
            <span className='text-gray-400 text-2xl'>
              $
              {user?.deposits.reduce(function (a, b) {
                return a + b;
              }, 0)}
            </span>
          </div>
          <div className='flex flex-col'>
            <ul>
              <li className='flex justify-between'>
                <span className='text-sm'>Last Deposit</span>
                <span className='text-left mx-2'>
                  {"$"}
                  {user?.deposits[user?.deposits.length - 1]}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 lg:col-span-3 p-3 rounded-lg  bg-paint flex flex-col space-y-4 justify-between'>
          <div className=' flex flex-col space-y-1'>
            <span className='text-xs uppercase '>Total Earned</span>
            <span className='text-gray-400 text-2xl'>
              {"$" +
                user?.earnings.reduce(function (a, b) {
                  return a + b;
                }, 0)}
            </span>
          </div>
          <div className='flex flex-col'>
            <ul>
              <li className='flex justify-between'>
                <span className='text-sm'>Last Earnings</span>
                <span className='text-left mx-2'>
                  {"$"}
                  {user?.earnings[user?.earnings.length - 1]}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className='col-span-12 rounded-lg bg-paint flex flex-col h-auto '>
          <iframe
            title='widget'
            id='fraDisabled'
            onLoad={disableContextMenu}
            src='https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=6&pref_coin_id=1505&graph=yes'
            width='100%'
            height='410px'
            scrolling='auto'
            marginwidth='0'
            marginheight='0'
            frameborder='0'
            border='0'
            style={{ border: 0, margin: 0, padding: 0 }}
          ></iframe>
          <div
            id='coinmarketcap-widget-coin-price-block'
            coins='1,1027,825,1839,5426,3408'
            currency='USD'
            theme='dark'
            transparent='true'
            show-symbol-logo='true'
          ></div>
        </div>
        <div className='col-span-12 lg:col-span-6 rounded-lg bg-paint flex flex-col h-96 '>
          <div className='text-white flex flex-row bg-coincap p-2 rounded-t-lg space-x-2 sticky '>
            <span>
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
                  strokeWidth='2'
                  d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
                ></path>
              </svg>
            </span>
            <span className='uppercase text-1xl'>DEPOSIT</span>
          </div>
          <div className='overflow-y-scroll'>
            {JSON.stringify(user?.deposits) === `[]` ? (
              <div className='py-4 px-2 '>
                <span className=''>No previous investment made</span>
              </div>
            ) : (
              <div className=''>
                <span className=' px-2 text-coincap'>
                  You have deposited the following:
                </span>

                <ol className='list-decimal px-16'>
                  {user?.deposits.map((deposit, index) => (
                    <li
                      key={index}
                      className='py-2 text-gray-50 text-xl font-semibold'
                    >
                      ${deposit}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>
        <div className='col-span-12 lg:col-span-6 rounded-lg bg-paint flex flex-col h-96'>
          <div className='text-white flex flex-row bg-coincap p-2 rounded-t-lg space-x-2'>
            <span>
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
                  strokeWidth='2'
                  d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
                ></path>
              </svg>
            </span>
            <span className='uppercase text-1xl'>WITHDRAWAL</span>
          </div>
          <div className='py-4 px-2'>
            <span className=''>No previous withdrawal made</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
