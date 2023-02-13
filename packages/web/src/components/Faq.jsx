import { Disclosure } from "@headlessui/react";

export default function Faq() {
  let posts = [
    {
      question:
        "What is cryptogrowthinvestment, and what are the activities of the company?",
      answer:
        "cryptogrowthinvestment is a prominent representative of the international financial market, cryptocurrency trading and mining, it is a developer of hardware and offers safe investments in this area.",
    },
    {
      question: "Is cryptogrowthinvestment a registered and legal company?",
      answer:
        "Yes, cryptogrowthinvestment is registered in the United Kingdom as 'cryptogrowthinvestment' with a registration number of #11758795.",
    },
    {
      question: "Who can be your customer?",
      answer:
        "Any interested person can become the investor of cryptogrowthinvestment, no matter how well he or she understands the scope of our business and technical aspects of cryptocurrency mining as a whole.",
    },
    {
      question: "Is your business established for a long term?",
      answer:
        "The company develops long-term relationships with customers and partners. Our business plan includes the phased development over the next 10 years, until at least 2029.",
    },
    {
      question: "Can I lose money by investing here?",
      answer:
        "No, you can't lose money. We make every effort to ensure the safety of your assets. Also we have a reserve fund, that ensures the safety of your deposits.",
    },
    {
      question: "How do I open my cryptogrowthinvestment account?",
      answer:
        "It's quite easy and convenient. Follow this link, fill in the registration form and then press .Register'.",
    },
    {
      question: "How can I make a deposit?",
      answer:
        "In the 'Deposit' section of your account, select the necessary investment plan, enter the amount, select the payment source (send the amount from your wallet or invest from the account balance) and click on Send button.",
    },
    {
      question: "What payment tool can I use for investments and earnings?",
      answer:
        "We accept Bitcoin, Ethereum, Bitcoin cash, PayPal, Cash-app, Venmo, Zelle, Perfect money, Jazz cash, Easypiasa, Google pay, Phonepe, Skrill, selrry account, Money gram, Western union, Airtel mobile pay, Apple Pay, MTN mobile pay, Chipper cash, Paytm, Azimo, Chase Quickpay, Paga Wallet",
    },
    {
      question: "How much can I invest here?",
      answer:
        "Each of your deposits can be from 0.001 BTC to 500 BTC maximum. The number of deposits is not limited.",
    },
    {
      question: "How many deposits can I have simultaneously?",
      answer:
        "You can have many deposits, we do not limit their number. Each of your deposits has unique conditions, proper time of profit accrual and profit margins.",
    },
    {
      question: "Do you make payments on weekends?",
      answer: "Yes, profits are also accrued on Saturdays and Sundays.",
    },
  ];
  return (
    <div className='faq-tab-content tab-content' id='myTabContent'>
      {posts.map((post, index) => (
        <Disclosure as='div' className='faq_tab' key={index}>
          {({ open }) => (
            <>
              <div className='card active'>
                <Disclosure.Button className='card-header' id='headingOne'>
                  <h5 className='mb-0 btn btn-link'>{post.question}</h5>
                  <svg
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-purple-500`}
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 15l7-7 7 7'
                    />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel
                  className='collapse show'
                  aria-labelledby='headingOne'
                  data-parent='#accordion_1'
                >
                  <div className='card-body'>{post.answer}</div>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
