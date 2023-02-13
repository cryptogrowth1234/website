import { useContext, useState } from "react";
import referralImg from "../../assets/img/concept-of-online-referral-program.png";
import { AuthContext } from "../../context/AuthContext";
const Referral = () => {
  const localUser = useContext(AuthContext);
  const user = localUser.user;

  const refLink = useState(
    `https://cryptogrowthinvestment.com/register?ref=${user?.username}`
  )[0];
  const [copyState, setCopyState] = useState(false);
  return (
    <div className='w-full rounded-lg flex flex-col mt-5 '>
      <div className='text-white flex flex-row bg-coincap p-2 lg:rounded-t-lg space-x-2 items-center'>
        <span>
          <svg
            className='w-10 h-10 lg:w-6 lg:h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
            />
          </svg>
        </span>
        <span className='uppercase text-1xl'>Referral</span>
      </div>
      <div className='p-4 space-y-4'>
        <span className='text-lg lg:pr-10 pl-5 flex justify-between'>
          <span className='italic'>
            {user?.referral < 1
              ? "You have not referred anyone yet"
              : "Your referral earnings are"}
          </span>
          <span className='text-2xl'>${user?.referral * 100}</span>
        </span>
        <form className='flex flex-row w-full'>
          <input
            type='text'
            name=''
            className='bg-gray-800 bg-opacity-80 px-4 py-2 w-full lg:w-6/12 outline-none rounded-l-lg'
            value={refLink}
            onChange={() => {
              console.log("");
            }}
            id=''
          />
          <button
            type='button'
            className='py-2 px-2 bg-coincap text-sm capitalize rounded-r-lg'
            onClick={() => {
              navigator.clipboard.writeText(refLink);
              setCopyState(true);
            }}
          >
            {copyState ? (
              "copied"
            ) : (
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
                  d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3'
                ></path>
              </svg>
            )}
          </button>
        </form>
      </div>
      <div className='flex flex-col lg:flex-row justify-around px-6'>
        <div className='space-y-4'>
          <span className='text-base'>
            Join our Referral/affiliate program and get paid ! With
            Optimalcointrade investment's Referral/affiliate program, you will
            be able to generate commissions with us! We serve 98 countries
            worldwide, so you can promote Optimalcointrade in any country you
            want.
          </span>
          <ul className='text-sm space-y-2 list-disc'>
            <li>
              Earn 10% of Optimalcointrade commission on ALL of your referral's.
            </li>
            <li>
              Our Referral/affiliate program has NO LIMITATIONS! The more
              customers you refer, the more bitcoin you earn
            </li>
            <li>
              Earnings are paid when those you refer invest into the system.
              (10% of their investment will be credited to your account)
            </li>
          </ul>
        </div>
        <img src={referralImg} alt='' />
      </div>
    </div>
  );
};

export default Referral;
