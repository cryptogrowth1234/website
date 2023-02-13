import doubleArrowVerticalSymbol from "../../assets/img/double-horizontal-arrow.svg";
import { RadioGroup, Listbox, Transition } from "@headlessui/react";
import React, { useEffect, useState, Fragment } from "react";
import { AuthContext } from "../../context/AuthContext";
// import axios from "axios";
// import { serverUrl } from "../../config";
const people = [
  { name: "Bitcoin" },
  { name: "Ethereum" },
  { name: "Bitcoin cash" },
  { name: "PayPal" },
  { name: "Cash-app" },
  { name: "Venmo" },
  { name: "Zelle" },
  { name: "Perfect money" },
  { name: "Jazz cash" },
  { name: "Easypiasa" },
  { name: "Google pay" },
  { name: "Phonepe" },
  { name: "Skrill" },
  { name: "selrry account" },
  { name: "Money gram" },
  { name: "Western union" },
  { name: "Airtel mobile pay" },
  { name: "Apple Pay" },
  { name: "MTN mobile pay" },
  { name: "Chipper cash" },
  { name: "Paytm" },
  { name: "Azimo" },
  { name: "Chase Quickpay" },
  { name: "Paga Wallet" },
];
const MakeADeposit = () => {
  const { user } = React.useContext(AuthContext);
  const [formInput, setFormInput] = useState({
    payername: "",
    price: "",
    email: user.email,
    username: user.username,
    userId: user._id,
  });
  const [selected, setSelected] = useState(people[0]);
  var [plan, setPlan] = useState("amateur");
  const [price, setprice] = useState(0);
  // const [pendingPayment, setPendingPayment] = React.useState([]);

  // const getMyPayment = () => {
  //   fetch(`${serverUrl}/getMyPayment?id=${user?._id}`, {})
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setPendingPayment(reverseAnArray(json));
  //     });
  // };

  const sendMess = async (e) => {
    e.preventDefault();
    window.tidioChatApi.messageFromVisitor(`
        Hi, I will like to make a deposit of $${price} on the ${plan} plan with ${selected.name}. 
      `);
  };
  // const reverseAnArray = (arr) => {
  //   return arr.slice().reverse();
  // };
  // useEffect(() => {
  //   fetch(`${serverUrl}/getMyPayment?id=${user?._id}`, {})
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setPendingPayment(reverseAnArray(json));
  //     });
  // }, [user, formInput]);
  useEffect(() => {
    if (price >= 50 && price < 500) {
      setPlan("amateur");
    } else if (price >= 500 && price <= 4000) {
      setPlan("regular");
    } else if (price >= 5000 && price <= 30000) {
      setPlan("masters");
    }
  }, [price]);
  return (
    <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-12 text-white flex flex-row bg-coincap mt-5 p-2 lg:rounded-t-lg space-x-2 items-center'>
        <svg
          className='w-12 h-12 lg:w-6 lg:h-6'
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
        <span className='text-left capitalize'>
          Bitcoin Investment and Signal Plans limited seats , come fast and grab
          profit
        </span>
      </div>
      <RadioGroup
        value={plan}
        onChange={setPlan}
        as='div'
        className='grid grid-cols-12 gap-4 col-span-12 p-4'
      >
        <RadioGroup.Option
          className='col-span-12 lg:col-span-4'
          value='amateur'
        >
          {({ checked }) => (
            <div
              className={checked ? "border-2 border-coincap rounded-lg" : ""}
            >
              <div className='p-4 rounded-lg bg-paint flex flex-col'>
                <span className='text-xl uppercase text-center'>
                  Amateur Plans
                </span>
                <div className='flex flex-row items-center justify-center'>
                  <span>Get 75% after 48hours</span>
                </div>
                <div className='flex flex-row items-center justify-center space-x-2'>
                  <span>Min. $50</span>
                  <img
                    src={doubleArrowVerticalSymbol}
                    alt=''
                    className='w-6 h-6'
                  />
                  <span>Max. $500</span>
                </div>
              </div>
            </div>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option
          className='col-span-12 lg:col-span-4'
          value='regular'
        >
          {({ checked }) => (
            <div
              className={checked ? "border-2 border-coincap rounded-lg" : ""}
            >
              <div className='p-4 rounded-lg bg-paint flex flex-col'>
                <span className='text-xl uppercase text-center'>
                  Regular Plans
                </span>
                <div className='flex flex-row items-center justify-center'>
                  <span>Get 75% after 24hours</span>
                </div>
                <div className='flex flex-row items-center justify-center space-x-2'>
                  <span>Min. $500</span>
                  <img
                    src={doubleArrowVerticalSymbol}
                    alt=''
                    className='w-6 h-6'
                  />
                  <span>Max. $4,000</span>
                </div>
              </div>
            </div>
          )}
        </RadioGroup.Option>
        <RadioGroup.Option
          className='col-span-12 lg:col-span-4'
          value='masters'
        >
          {({ checked }) => (
            <div
              className={checked ? "border-2 border-coincap rounded-lg" : ""}
            >
              <div className='p-4 rounded-lg bg-paint flex flex-col'>
                <span className='text-xl uppercase text-center'>
                  Master's Plans
                </span>
                <div className='flex flex-row items-center justify-center'>
                  <span>Get 90% after 24hours</span>
                </div>
                <div className='flex flex-row items-center justify-center space-x-2'>
                  <span>Min. $5,000</span>
                  <img
                    src={doubleArrowVerticalSymbol}
                    alt=''
                    className='w-6 h-6'
                  />
                  <span>Max. $30,000</span>
                </div>
              </div>
            </div>
          )}
        </RadioGroup.Option>
      </RadioGroup>
      <div className='col-span-12 lg:col-span-6 px-10 flex flex-col space-y-4'>
        <form onSubmit={sendMess} className='space-y-4'>
          <span className='uppercase'>Select payment and enter deposit</span>{" "}
          <br />
          <input
            type='text'
            name=''
            id=''
            required
            placeholder='Enter payer name'
            className='h-8 w-full p-2 text-gray-800 bg-gray-50  rounded-lg mt-2 '
            onChange={(e) => {
              setFormInput({
                ...formInput,
                payername: e.target.value,
              });
            }}
          />
          <span className='text-xs uppercase'>
            Note: This is the name to be expected from the payment info.
          </span>
          <input
            type='number'
            name=''
            min='50'
            max='30000'
            value={price}
            placeholder='Enter the amount you want to deposit'
            onChange={(e) => {
              setprice(parseInt(e.target.value));
              setFormInput({
                ...formInput,
                price: e.target.value,
              });
            }}
            id=''
            className='h-8 w-full p-2 text-gray-800 bg-gray-50  rounded-lg '
            required
          />
          <Listbox
            value={selected}
            onChange={setSelected}
            as='div'
            className='w-full'
          >
            <div className='relative'>
              <Listbox.Button className='relative w-full py-2 pl-3 pr-10 text-left bg-white text-gray-800 rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm'>
                <span className='block truncate'>{selected.name}</span>
                <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
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
                      d='M8 9l4-4 4 4m0 6l-4 4-4-4'
                    ></path>
                  </svg>
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                enter='transition ease-out duration-300 '
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition ease-in duration-300 '
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Listbox.Options className='z-10 w-full py-1 my-2 lg:mb-20 overflow-auto text-base bg-white text-gray-800 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm '>
                  {people.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `${active ? "text-gray-50 bg-coincap" : "text-gray-800"}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                      value={person}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            {person.name}
                          </span>
                          {selected ? (
                            <span
                              className={`${
                                active ? "text-gray-600" : "text-gray-600"
                              }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
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
                                  d='M5 13l4 4L19 7'
                                ></path>
                              </svg>
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          <input
            type='submit'
            value='send'
            className='bg-coincap uppercase px-6 py-2 rounded-lg w-full text-center mb-32 lg:mb-2'
          />
        </form>
      </div>
      {/* <div className='col-span-12 lg:col-span-6 px-10 flex flex-col space-y-4 h-72 overflow-y-scroll'>
        <span className='capitalize text-gray-50'>All pending payments</span>
        {pendingPayment.map((payment, index) => (
          <ul key={index} className='hover:bg-paint'>
            <span className='flex justify-between'>
              <li>Payer name : {payment.payername}</li>
              <li>
                Price : {"$"}
                {payment.price}
              </li>
            </span>
          </ul>
        ))}
      </div> */}
    </div>
  );
};

export default MakeADeposit;
