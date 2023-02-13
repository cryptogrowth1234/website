import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const NoWithdrawModal = ({ isOpen, closeModal, modalPrice, modalType }) => {
  return (
    <>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-50 overflow-y-auto'
          onClose={closeModal}
        >
          <div className='min-h-screen px-4 text-center'>
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

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className='block mx-auto absolute top-10 ' aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium leading-6 text-gray-900'
                >
                  Withdrawal Failed
                </Dialog.Title>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>
                    {/* {modalType !== "profit" ? ( */}
                    {
                      //   modalPrice === 0 ? (
                      //     <span>You don't have any funds here.</span>
                      //   ) : (
                      //     <span>
                      //       Your withdraw failed because you can withdraw less
                      //       than $ {modalPrice}
                      //     </span>
                      //   )
                      modalPrice === 0 ? (
                        <span>You don't have any funds here.</span>
                      ) : (
                        <span>
                          You've not completed the minimum time to invest , to
                          boost up your account kindly deposit up to $15,000
                          more for your first withdrawal .
                        </span>
                      )
                    }
                    {/* } */}
                  </p>
                </div>

                <div className='mt-4'>
                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-yellow-900 bg-yellow-100 border border-transparent rounded-md hover:bg-yellow-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NoWithdrawModal;
