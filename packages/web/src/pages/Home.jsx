// import "../assets/css/bootstrap.min.css";
import "../assets/owlcarousel/css/owl.carousel.css";
import "../assets/owlcarousel/css/owl.theme.css";
import "../assets/css/slicknav.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/animate.css";
import "../assets/css/popup.css";
import "../assets/css/style-two.css";
import "../assets/css/responsive.css";
import logo from "../assets/img/logo.png";
import about2 from "../assets/img/about2.png";
import blockchain from "../assets/img/blockchain.png";
import payment from "../assets/img/payment.png";
import order from "../assets/img/order.png";
import chatOne from "../assets/img/01-Chat.png";
import chatTwo from "../assets/img/02-Chat.png";
import partnerLogoOne from "../assets/img/partner/logo-1.jpg";
import partnerLogoTwo from "../assets/img/partner/logo-2.jpg";
import partnerLogoThree from "../assets/img/partner/logo-3.jpg";
import partnerLogoFour from "../assets/img/partner/logo-4.jpg";
import partnerLogoFive from "../assets/img/partner/logo-5.jpg";
import { Link } from "react-router-dom";
import Faq from "../components/Faq";
import { ParticleComponent } from "../components/ParticleComponent";

const Home = () => {
  return (
    <div id='home'>
      <ParticleComponent />
      <div>
        <div id='navigation' className='fixed-top navbar-light site-navigation'>
          <div className='container'>
            <div
              className='row'
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 20,
                paddingRight: 20,
              }}
            >
              <div className=''>
                <div className='site-logo'>
                  <Link to='/' className='navbar-logo'>
                    <img src={logo} alt='Logo' />
                  </Link>
                </div>
              </div>
              <div className=''>
                <div className='header_right'>
                  <nav id='main-menu' className='ml-auto'>
                    <ul>
                      <li>
                        <a href='#home'>Home</a>
                      </li>
                      <li>
                        <a href='#about'>About</a>
                      </li>
                      <li>
                        <a href='#token_sale'>Token sale</a>
                      </li>
                      <li>
                        <a href='#faq'>faq</a>
                      </li>
                      <li>
                        <a href='#contact'>Contact</a>
                      </li>
                      <li>
                        <Link to='/login' className='block-menu'>
                          Login
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <div id='mobile_menu'>
                    <svg
                      className='w-6 h-6'
                      style={{
                        width: 30,
                        height: 30,
                      }}
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id='home' className='home_bg'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12 col-sm-12 col-xs-12 text-center'>
                <div className='hero-text'>
                  <h2>We’re reinventing the global equity blockchian.</h2>
                  <p>
                    We offers users a fully operational long-term rental
                    platform. It plans to leverages blockchain technology to
                    ensure seamless rental experience and wants to help tenants
                    unfreeze millions of dollars.
                  </p>
                  <div className='home_btn'>
                    <Link
                      to='/register'
                      className='btn_one wow bounceIn'
                      data-wow-delay='.6s'
                    >
                      Get started
                    </Link>
                    <a
                      href='#chooseUs'
                      className='btn_two wow bounceIn'
                      data-wow-delay='.8s'
                    >
                      learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='about' className='about_us section-padding'>
          <div className='container'>
            <div className='row'>
              <div
                className='col-lg-6 col-sm-12 col-xs-12 wow fadeInUp'
                data-wow-duration='1s'
                data-wow-delay='0.2s'
                data-wow-offset='0'
              >
                <div className='about-text'>
                  <h2>
                    Display trends of cryptocurrency and other rapidly changing
                    rates and numbers with Coincap template.
                  </h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour.It plans to leverages blockchain
                    technology to ensure seamless rental experience and wants to
                    help tenants unfreeze millions of dollars.
                  </p>
                  <p>
                    We offers users a fully operational long-term rental
                    platform. It plans to leverages blockchain technology to
                    ensure seamless rental experience and wants to help tenants
                    unfreeze millions of dollars tied up in rental tenants
                    deposits.
                  </p>
                  <div className='about_btn'>
                    <a
                      href='https://www.youtube.com/watch?v=CMPebxJjE8o'
                      target='_blank'
                      rel='noreferrer'
                    >
                      {" "}
                      <div className='video_btn'>
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
                            d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span className='video-title'>Watch Video</span>
                      </div>{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div
                className='col-lg-6 col-sm-12 col-xs-12 text-center wow fadeInUp'
                data-wow-duration='1s'
                data-wow-delay='0.2s'
                data-wow-offset='0'
              >
                <div className='about-img'>
                  <img src={about2} className='item-bounce img-fluid' alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='why_choose_us section-padding' id='chooseUs'>
          <div className='container'>
            <div className='section-title text-center'>
              <h2>Why Choose us?</h2>
              <span></span>
              <p>There's no faster, safer place to buy cryptocurrency</p>
            </div>
            <div className='row text-center'>
              <div
                className='col-lg-4 col-sm-4 col-xs-12 wow fadeInLeft'
                data-wow-duration='1s'
                data-wow-delay='0.1s'
                data-wow-offset='0'
              >
                <div className='single_about'>
                  <img src={blockchain} alt='icon' />
                  <h4>Wide choice of crypto</h4>
                  <p>
                    Get access to a selection of the world's leading
                    cryptocurrencies including BTC, ETH , BCH and more
                  </p>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-4 col-xs-12 wow fadeInLeft'
                data-wow-duration='1s'
                data-wow-delay='0.2s'
                data-wow-offset='0'
              >
                <div className='single_about'>
                  <img src={payment} alt='icon' />
                  <h4>Your preffered payments method</h4>
                  <p>
                    Choosee from your credit card , payment app, or bank account
                  </p>
                </div>
              </div>
              <div
                className='col-lg-4 col-sm-4 col-xs-12 wow fadeInLeft'
                data-wow-duration='1s'
                data-wow-delay='0.3s'
                data-wow-offset='0'
              >
                <div className='single_about'>
                  <img src={order} alt='icon' />
                  <h4>Get your crypto fast</h4>
                  <p>
                    Register, make your payment in seconds - and get your crypto
                    just minutes later
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='token_sale' className='token_sale_area section-padding'>
          <div className='container'>
            <div className='section-title text-center'>
              <h2 className='section-title-white'>Pre-Sale & Values</h2>
              <span></span>
              {/* <p className='section-title-white'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat.
              </p> */}
            </div>
            <div className='row token_mb'>
              <div
                className='col-lg-3 col-sm-12 col-xs-12 wow fadeInUp'
                data-wow-duration='1s'
                data-wow-delay='0.2s'
                data-wow-offset='0'
              >
                <div className='pre_sale_area'>
                  <div className='single_presale'>
                    <h5>Private Pre-Sale</h5>
                    <p>April 20, {new Date().getFullYear()}</p>
                  </div>
                  <div className='single_presale'>
                    <h5>Pre-Sale</h5>
                    <p>April 21, {new Date().getFullYear()}</p>
                  </div>
                  <div className='single_presale'>
                    <h5>Crowdsale</h5>
                    <p>Apr 28, {new Date().getFullYear()}</p>
                  </div>
                </div>
              </div>
              <div
                className='col-lg-3 col-sm-12 col-xs-12 wow fadeInUp'
                data-wow-duration='1s'
                data-wow-delay='0.3s'
                data-wow-offset='0'
              >
                <div className='pre_sale_area'>
                  <div className='single_presale brright'>
                    <h5>Low - High 14h</h5>
                    <p>$ 3,155.63 - $ 5,124.62</p>
                  </div>
                  <div className='single_presale brright'>
                    <h5>Total Token Sale</h5>
                    <p>412,573 BCC (4.2%)</p>
                  </div>
                  <div className='single_presale brright'>
                    <h5>Acceptable Currency </h5>
                    <p>BTC, ETH, LTC</p>
                  </div>
                </div>
              </div>
              <div
                className='col-lg-6 col-sm-12 col-xs-12 text-center wow fadeInLeft'
                data-wow-duration='1s'
                data-wow-delay='0.1s'
                data-wow-offset='0'
              >
                <div className='buy-icons'>
                  <div className='ca-starts-in'>
                    <h3>
                      Token will start on May <br />
                      Fifteen {new Date().getFullYear()}
                    </h3>
                    <div className='timer-area'>
                      <div data-countdown='{new Date().getFullYear()}/10/25'></div>
                    </div>
                  </div>
                  <h4>Pre Sale Starting In</h4>
                  <p className='btn_one'>Buy token now</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='bitcoin' className='bitcoin_area'>
          <div className='container'>
            <div className='row'>
              <div
                className='col-lg-10 offset-lg-1 col-sm-12 col-xs-12 text-center wow fadeInLeft'
                data-wow-duration='1s'
                data-wow-delay='0.1s'
                data-wow-offset='0'
              >
                <div className='currency_content'>
                  <h1>Crypto/Bitcoin Currency Converter</h1>
                  <p>
                    Lorem Idivsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <iframe
                    src='https://widget.coinlib.io/widget?type=converter&theme=dark'
                    style={{
                      borderRadius: "10px",
                      width: "100%",
                      height: "310px",
                      margin: "0",
                      border: "0",
                      padding: "0",
                    }}
                    title='currency claculator'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='token_img_area section-padding'>
          <div className='container'>
            <div className='row text-center'>
              <div
                className='col-lg-6 col-sm-12 col-xs-12 wow fadeInUp'
                data-wow-duration='1s'
                data-wow-delay='0.2s'
                data-wow-offset='0'
              >
                <div className='token-img'>
                  <h4>Token Distribution</h4>
                  <img src={chatOne} className='img-fluid' alt='' />
                </div>
              </div>
              <div
                className='col-lg-6 col-sm-12 col-xs-12 text-center wow fadeInUp'
                data-wow-duration='1s'
                data-wow-delay='0.2s'
                data-wow-offset='0'
              >
                <div className='fund-img'>
                  <h4>Use of fund</h4>
                  <img src={chatTwo} className='img-fluid' alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='faq' className='faq1-area'>
          <div className='container'>
            <div className='section-title text-center'>
              <h2>Frequently Asked Questions</h2>
              <span></span>
              {/* <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat.
              </p> */}
            </div>
            <Faq />
            {/* <div className='row'>
            <div
              className='col-lg-10 offset-lg-1 col-12 wow fadeInUp'
              data-wow-duration='1s'
              data-wow-delay='0.3s'
              data-wow-offset='0'
            >
              <ul
                className='faq-tab-menus nav nav-tabs'
                id='myTab'
                role='tablist'
              >
                <li className='nav-item'>
                  <a
                    className='nav-link active'
                    id='development-tab'
                    data-toggle='tab'
                    href='#development'
                    role='tab'
                    aria-selected='true'
                  >
                    Development
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    id='profile-tab'
                    data-toggle='tab'
                    href='#design'
                    role='tab'
                    aria-selected='false'
                  >
                    Design
                  </a>
                </li>
                <li className='nav-item'>
                  <a
                    className='nav-link'
                    id='compatibility-tab'
                    data-toggle='tab'
                    href='#compatibility'
                    role='tab'
                    aria-selected='false'
                  >
                    Compatibility
                  </a>
                </li>
              </ul>
              <div className='faq-tab-content tab-content' id='myTabContent'>
                <div
                  className='tab-pane fade show active'
                  id='development'
                  role='tabpanel'
                >
                  <div className='faq_tab' id='accordion_1'>
                    <div className='card active'>
                      <div className='card-header' id='headingOne'>
                        <h5 className='mb-0'>
                          <button
                            className='btn btn-link'
                            data-toggle='collapse'
                            data-target='#collapseOne'
                            aria-expanded='true'
                            aria-controls='collapseOne' 
                          >
                            What is cryptocurrency?
                          </button>
                        </h5>
                      </div>
                      <div
                        id='collapseOne'
                        className='collapse show'
                        aria-labelledby='headingOne'
                        data-parent='#accordion_1'
                      >
                        <div className='card-body'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever.
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-header' id='headingTwo'>
                        <h5 className='mb-0'>
                          <button
                            className='btn btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#collapseTwo'
                            aria-expanded='false'
                            aria-controls='collapseTwo'
                          >
                            What are the best cryptocurrency for buy?
                          </button>
                        </h5>
                      </div>
                      <div
                        id='collapseTwo'
                        className='collapse'
                        aria-labelledby='headingTwo'
                        data-parent='#accordion_1'
                      >
                        <div className='card-body'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever.
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-header' id='headingThree'>
                        <h5 className='mb-0'>
                          <button
                            className='btn btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#collapseThree'
                            aria-expanded='false'
                            aria-controls='collapseThree'
                          >
                            How to buy cryptocurrency?
                          </button>
                        </h5>
                      </div>
                      <div
                        id='collapseThree'
                        className='collapse'
                        aria-labelledby='headingThree'
                        data-parent='#accordion_1'
                      >
                        <div className='card-body'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever.
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-header' id='headingFour'>
                        <h5 className='mb-0'>
                          <button
                            className='btn btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#collapseFour'
                            aria-expanded='false'
                            aria-controls='collapseFour'
                          >
                            What is the refund policy?
                          </button>
                        </h5>
                      </div>
                      <div
                        id='collapseFour'
                        className='collapse'
                        aria-labelledby='headingFour'
                        data-parent='#accordion_1'
                      >
                        <div className='card-body'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='tab-pane fade' id='design' role='tabpanel'>
                  <div className='faq_tab' id='accordion_2'>
                    <div className='card'>
                      <div className='card-header' id='heading2Two'>
                        <h5 className='mb-0'>
                          <button
                            className='btn btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#collapse2Two'
                            aria-expanded='false'
                            aria-controls='collapse2Two'
                          >
                            What is cryptocurrency?
                          </button>
                        </h5>
                      </div>
                      <div
                        id='collapse2Two'
                        className='collapse'
                        aria-labelledby='heading2Two'
                        data-parent='#accordion_2'
                      >
                        <div className='card-body'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever.
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-header' id='heading2Three'>
                        <h5 className='mb-0'>
                          <button
                            className='btn btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#collapse2Three'
                            aria-expanded='false'
                            aria-controls='collapse2Three'
                          >
                            What are the best cryptocurrency for buy?
                          </button>
                        </h5>
                      </div>
                      <div
                        id='collapse2Three'
                        className='collapse'
                        aria-labelledby='heading2Three'
                        data-parent='#accordion_2'
                      >
                        <div className='card-body'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever.
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-header' id='heading3Four'>
                        <h5 className='mb-0'>
                          <button
                            className='btn btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#collapse2Four'
                            aria-expanded='false'
                            aria-controls='collapse2Four'
                          >
                            How to buy cryptocurrency?
                          </button>
                        </h5>
                      </div>
                      <div
                        id='collapse2Four'
                        className='collapse'
                        aria-labelledby='heading3Four'
                        data-parent='#accordion_2'
                      >
                        <div className='card-body'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className='tab-pane fade'
                  id='compatibility'
                  role='tabpanel'
                >
                  <div className='faq_tab' id='accordion_3'>
                    <div className='card'>
                      <div className='card-header' id='heading4Three'>
                        <h5 className='mb-0'>
                          <button
                            className='btn btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#collapse3Three'
                            aria-expanded='false'
                            aria-controls='collapse3Three'
                          >
                            What are the best cryptocurrency for buy?
                          </button>
                        </h5>
                      </div>
                      <div
                        id='collapse3Three'
                        className='collapse'
                        aria-labelledby='heading4Three'
                        data-parent='#accordion_3'
                      >
                        <div className='card-body'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever.
                        </div>
                      </div>
                    </div>
                    <div className='card'>
                      <div className='card-header' id='heading4Four'>
                        <h5 className='mb-0'>
                          <button
                            className='btn btn-link collapsed'
                            data-toggle='collapse'
                            data-target='#collapse3Four'
                            aria-expanded='false'
                            aria-controls='collapse3Four'
                          >
                            What is the refund policy?
                          </button>
                        </h5>
                      </div>
                      <div
                        id='collapse3Four'
                        className='collapse'
                        aria-labelledby='heading4Four'
                        data-parent='#accordion_3'
                      >
                        <div className='card-body'>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </section>
        <section id='contact' className='contact_us section-padding'>
          <div className='container'>
            <div className='section-title text-center'>
              <h2>Get In Touch</h2>
              <span></span>
            </div>
            <div className='row'>
              <div
                className='col-lg-5 col-sm-6 col-xs-12 wow fadeInUp'
                data-wow-duration='1s'
                data-wow-delay='0.2s'
                data-wow-offset='0'
              >
                <h4 className='contact_title'>
                  Contact with us for <br /> more information.
                </h4>
                <div className='single_address'>
                  <div className='address_br'>
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
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <p>cryptogrowth1234@gmail.com</p>
                </div>
                <div className='single_address'>
                  <div className='address_br'>
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
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <p>71-75 Shelton Street, London, United Kingdom</p>
                </div>
                <div className='single_address'>
                  <div className='address_br'>
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
                        d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                      />
                    </svg>
                  </div>
                  <p>Mon to Sat 9:00am to 5:00pm</p>
                </div>
              </div>
              <div className='col-lg-7 col-sm-12 col-xs-12'>
                <div className='contact'>
                  <form className='form' name='enq'>
                    <div className='row'>
                      <div className='form-group col-md-6'>
                        <input
                          type='text'
                          name='name'
                          className='form-control'
                          placeholder='Name'
                          required
                        />
                      </div>
                      <div className='form-group col-md-6'>
                        <input
                          type='email'
                          name='email'
                          className='form-control'
                          placeholder='Email'
                          required
                        />
                      </div>
                      <div className='form-group col-md-12'>
                        <input
                          type='text'
                          name='subject'
                          className='form-control'
                          placeholder='Subject'
                          required
                        />
                      </div>
                      <div className='form-group col-md-12'>
                        <textarea
                          rows={6}
                          name='message'
                          className='form-control'
                          placeholder='Your Message'
                          required
                        ></textarea>
                      </div>
                      <div className='col-md-12 text-center'>
                        <button
                          type='submit'
                          value='Send message'
                          name='submit'
                          id='submitButton'
                          className='btn_one'
                          title='Submit Your Message!'
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='partner-logo section-padding'>
          <div className='container'>
            <div className='row text-center partner_bg'>
              <div className='col-lg-2 col-sm-3 col-xs-12'>
                <div className='partner'>
                  <img src={partnerLogoOne} alt='partnerLogo' />
                </div>
              </div>
              <div className='col-lg-2 col-sm-3 col-xs-12'>
                <div className='partner'>
                  <img src={partnerLogoTwo} alt='partnerLogo' />
                </div>
              </div>
              <div className='col-lg-2 col-sm-3 col-xs-12'>
                <div className='partner'>
                  <img src={partnerLogoThree} alt='partnerLogo' />
                </div>
              </div>
              <div className='col-lg-2 col-sm-3 col-xs-12'>
                <div className='partner'>
                  <img src={partnerLogoFour} alt='partnerLogo' />
                </div>
              </div>
              <div className='col-lg-2 col-sm-3 col-xs-12'>
                <div className='partner'>
                  <img src={partnerLogoOne} alt='partnerLogo' />
                </div>
              </div>
              <div className='col-lg-2 col-sm-3 col-xs-12'>
                <div className='partner'>
                  <img src={partnerLogoFive} alt='partnerLogo' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>
          <div className='container'>
            <div className='row text-center'>
              <div className='col-lg-6 offset-lg-3 col-sm-12 col-xs-12 text-center'>
                <div className='newsletter-form'>
                  <h2>Subscribe for get updates</h2>
                  <form action='#' className='subscribe'>
                    <input
                      type='text'
                      className='subscribe__input'
                      placeholder='Enter your Email'
                    />
                    <button type='button' className='subscribe__btn'>
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className='col-lg-12 col-sm-12 col-xs-12'>
                <div className='footer_profile'>
                  <ul>
                    <li>
                      <i className='fa fa-facebook'></i>
                    </li>
                    <li>
                      <i className='fa fa-twitter'></i>
                    </li>
                    <li>
                      <i className='fa fa-instagram'></i>
                    </li>
                    <li>
                      <i className='fa fa-linkedin'></i>
                    </li>
                    <li>
                      <i className='fa fa-pinterest'></i>
                    </li>
                    <li>
                      <i className='fa fa-youtube'></i>
                    </li>
                  </ul>
                </div>
                <div className='footer_copyright'>
                  <p>
                    &copy; {new Date().getFullYear()} Crypto Growth. All Rights
                    Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
