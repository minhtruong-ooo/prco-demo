import imgSlide from "./assets/img/pexels-pixabay-209251.jpg";
import img from "./assets/img/pexels-pixabay-459728.jpg";
import img1 from "./assets/img/bna_toan_canh_khu_cong_nghiep_vsip1852734_2512022_83c03e599c.jpeg";
import img2 from "./assets/img/3e2b0acffa3d955d91a036763ef350a3_9a32c3a529.jpg";
import img3 from "./assets/img/BWID_Hai_Phong_Lot_11_A_2d6ed9c80c.jpg";
import img4 from "./assets/img/DEEP_C1_Nam_Dinh_Vu_cbcff19614.jpg";
import img5 from "./assets/img/DEEP_C2_Nam_Dinh_Vu_Cat_Hai_c34304de4d.jpg";
import "../node_modules/animate.css/animate.min.css";

import { useInView } from "react-intersection-observer";
import { useState } from "react";

function App() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);

  const [isVisible9, setIsVisible9] = useState(false);
  const [isVisible10, setIsVisible10] = useState(false);

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.8,
    onChange: (inView) => {
      if (inView) {
        setIsVisible1(true);
      }
    },
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.8,
    onChange: (inView) => {
      if (inView) {
        setIsVisible2(true);
      }
    },
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.8,
    onChange: (inView) => {
      if (inView) {
        setIsVisible3(true);
      }
    },
  });

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.8,
    onChange: (inView) => {
      if (inView) {
        setIsVisible4(true);
      }
    },
  });

  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.8,
    onChange: (inView) => {
      if (inView) {
        setIsVisible5(true);
      }
    },
  });
  const { ref: ref7, inView: inView7 } = useInView({
    triggerOnce: true,
    threshold: 0.8,
    onChange: (inView) => {
      if (inView) {
        setIsVisible7(true);
      }
    },
  });
  const { ref: ref8, inView: inView8 } = useInView({
    triggerOnce: true,
    threshold: 0.8,
    onChange: (inView) => {
      if (inView) {
        setIsVisible8(true);
      }
    },
  });
  const { ref: ref9, inView: inView9 } = useInView({
    triggerOnce: true,
    threshold: 0.8,
    onChange: (inView) => {
      if (inView) {
        setIsVisible9(true);
      }
    },
  });
  const { ref: ref10, inView: inView10 } = useInView({
    triggerOnce: true,
    threshold: 0.8,
    onChange: (inView) => {
      if (inView) {
        setIsVisible10(true);
      }
    },
  });

  return (
    <>
      <div className="wrap">
        <header className="header">
          <div className="container-fluid">
            <a href="https://impc.vn/vi" className="logo ani-1">
              <svg
                width="162"
                height="48"
                viewBox="0 0 162 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8168 11.572V1.04688H3.10993C1.39396 1.04688 0 2.44398 0 4.17333V11.572H12.8168Z"
                  fill="#EC8922"
                ></path>
                <path
                  d="M156.471 34.6423C155.412 33.4496 153.636 33.2707 152.34 34.195C151.37 34.8808 150.332 35.4388 149.217 35.869C147.243 36.6315 145.412 37.0148 143.722 37.0148C139.599 37.0148 136.553 35.7625 134.583 33.2537C132.608 30.7449 131.6 27.7718 131.558 24.3258C131.515 20.9268 132.519 17.8855 134.583 15.2021C136.642 12.5186 139.688 11.1811 143.722 11.1811C146.586 11.1811 149.179 11.9862 151.492 13.592C152.7 14.4311 154.34 14.2522 155.386 13.2171L161.348 7.32203C156.365 2.44068 150.488 0 143.722 0C139.599 0 135.905 0.707072 132.634 2.12548C129.359 3.54388 126.744 5.41805 124.795 7.74798C122.842 10.0822 121.359 12.6634 120.338 15.496C119.317 18.3285 118.809 21.2505 118.809 24.2577C118.809 27.4864 119.287 30.4808 120.241 33.2494C121.194 36.0181 122.626 38.5269 124.533 40.7717C126.439 43.0164 129.032 44.7841 132.308 46.0705C135.583 47.3568 139.387 48 143.722 48C151.137 48 157.229 45.6275 162 40.8739L156.471 34.6423Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M44.8612 16.5428L32.8918 1.04688H19.4268V46.8234H29.0658C30.7818 46.8234 32.1758 45.4221 32.1758 43.697V19.6182L43.5605 33.4146H45.8357L57.4789 19.55V43.6927C57.4789 45.4178 58.8728 46.8192 60.5888 46.8192H70.2279V1.04688H56.8264L44.8612 16.5428Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M97.2761 1.04688H77.354V23.145C74.8118 25.9818 72.9729 29.2403 71.6807 32.4392C73.4729 30.2413 75.6931 28.0264 78.3835 25.8753C78.4513 25.8242 78.5149 25.7689 78.5827 25.7177C79.0784 25.3259 79.5911 24.934 80.1207 24.5464C80.1715 24.5081 80.2224 24.4697 80.2774 24.4314C80.8367 24.0267 81.4129 23.6221 82.0019 23.2259C82.0315 23.2047 82.0612 23.1834 82.0909 23.1621C82.7179 22.7446 83.3662 22.3272 84.0356 21.9183C86.6117 20.3423 89.4928 18.8387 92.7087 17.4544L86.7981 13.0032C86.6202 12.8712 86.7176 12.5858 86.9379 12.5858L102.882 12.59C103.064 12.59 103.174 12.7902 103.077 12.9436L94.5814 26.5313C94.4628 26.7187 94.1789 26.6506 94.1577 26.4291L93.3951 18.7918C87.4294 22.0589 77.5488 30.6204 77.3624 46.8234H87.1201C88.8361 46.8234 90.2301 45.4221 90.2301 43.697V34.4624H97.2719C103.127 34.4198 107.635 32.8396 110.8 29.7216C113.965 26.608 115.55 22.6041 115.55 17.7227C115.55 12.9734 113.965 9.00357 110.8 5.82174C107.64 2.63566 103.132 1.04688 97.2761 1.04688Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M0 46.8197H9.70263C11.4228 46.8197 12.8126 45.4184 12.8126 43.6933V14.3711H0V46.8197Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
            <div className="drawer">
              <div className="header-top">
                <div className="nav-wrap">
                  <nav className="main-nav animate__animated ani-2">
                    <ul>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">What We Do</a>
                      </li>
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="nav-dropdown-overlay"></div>
        </header>
        <div className="slider">
          <div className="slide">
            <figure
              className="img"
              style={{ backgroundImage: `url(${imgSlide})` }}
            ></figure>
          </div>
          <div className="slide-caption">
            <div className="slide-caption-inner">
              <span className="animate__animated ani-3">OUR EXPERTISE</span>
              <h1 className="animate__animated ani-4">
                In The Field Of Industrial Real Estate Development And
                Management
              </h1>
              <a href="#" className="button-link animate__animated ani-5">
                {" "}
                Find out more
                <span>
                  <svg
                    class="icon"
                    width="22"
                    height="12"
                    viewBox="0 0 22 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 6L21 6" stroke="currentColor"></path>
                    <path d="M16 1L21 6L16 11" stroke="currentColor"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="block block-1">
          <div className="grid-container">
            <div ref={ref1} className="grid-item grid-item--1 flex">
              {isVisible1 && (
                <a
                  href="#"
                  className={`text animate__animated ${
                    inView1 ? "animate__fadeInUp" : ""
                  }`}
                >
                  <h2>Clients</h2>
                  <div className="text-button">
                    <span>Take a look</span>
                    <span>
                      <svg
                        class="icon"
                        width="22"
                        height="12"
                        viewBox="0 0 22 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 6L21 6" stroke="currentColor"></path>
                        <path d="M16 1L21 6L16 11" stroke="currentColor"></path>
                      </svg>
                    </span>
                  </div>
                </a>
              )}

              <div className="image">
                <div className="video-mask">
                  <iframe
                    width="640"
                    height="320"
                    style={{ height: "auto", width: "9999px" }}
                    src="https://player.vimeo.com/video/414717145?background=1"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="grid-item grid-item--2 flex" ref={ref2}>
              {isVisible2 && (
                <a
                  href="#"
                  className={`text animate__animated ${
                    inView2 ? "animate__fadeInUp" : ""
                  }`}
                >
                  <h2>Our services</h2>
                  <div className="text-button">
                    <span>Find out more</span>
                    <span>
                      <svg
                        class="icon"
                        width="22"
                        height="12"
                        viewBox="0 0 22 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 6L21 6" stroke="currentColor"></path>
                        <path d="M16 1L21 6L16 11" stroke="currentColor"></path>
                      </svg>
                    </span>
                  </div>
                </a>
              )}

              <div className="image">
                <div className="video-mask">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={img}
                  ></img>
                </div>
              </div>
            </div>
            <div className="grid-item grid-item--3 flex" ref={ref3}>
              {isVisible3 && (
                <h3
                  className={`text animate__animated ${
                    inView3 ? "animate__fadeInUp" : ""
                  }`}
                >
                  Over 25 year experience and a proven track record.
                </h3>
              )}
            </div>
          </div>
        </div>
        <div className="block block-2">
          <div className="grid-container">
            <div className="grid-item grid-item--1 flex" ref={ref4}>
              {isVisible4 && (
                <h3
                  className={`text-brand animate__animated ${
                    inView4 ? "animate__fadeInUp" : ""
                  }`}
                >
                  VSIP I
                </h3>
              )}
              <div className="image image-color">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="grid-item grid-item--2 flex" ref={ref5}>
              {isVisible5 && (
                <h3
                  className={`text-brand animate__animated ${
                    inView5 ? "animate__fadeInUp" : ""
                  }`}
                >
                  VSIP II
                </h3>
              )}
              <div className="image image-color">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="grid-item grid-item--3 flex" ref={ref7}>
              {isVisible7 && (
                <h3
                  className={`text-brand animate__animated ${
                    inView7 ? "animate__fadeInUp" : ""
                  }`}
                >
                  VSIP III
                </h3>
              )}
              <div className="image image-color">
                <img src={img3} alt="" />
              </div>
            </div>
            <div className="grid-item grid-item--4 flex" ref={ref7}>
              {isVisible7 && (
                <h3
                  className={`text-brand animate__animated ${
                    inView7 ? "animate__fadeInUp" : ""
                  }`}
                >
                  VSIP IV
                </h3>
              )}
              <div className="image image-color">
                <img src={img4} alt="" />
              </div>
            </div>
            <div className="grid-item grid-item--4 flex" ref={ref8}>
              {isVisible8 && (
                <h3
                  className={`text-brand animate__animated ${
                    inView8 ? "animate__fadeInUp" : ""
                  }`}
                >
                  VSIP V
                </h3>
              )}
              <div className="image image-color">
                <img src={img5} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="block block-3">
          <div className="flex-box" >
            <div className="box-1 flex-box flex-col flex-justify-end flex-column">
              <div className="post-list">
                <a href="#">
                  <span>22 May 2024</span>
                  <h3>BOATSY appoints PRCO Group</h3>
                </a>
                <a href="#">
                  <span>22 May 2024</span>
                  <h3>BOATSY appoints PRCO Group</h3>
                </a>
                <a href="#">
                  <span>22 May 2024</span>
                  <h3>BOATSY appoints PRCO Group</h3>
                </a>
              </div>
            </div>
            <div className="box-2 flex-col"  ref={ref9}>
              <div className="news-image flex-box flex-column flex-justify-end">
                {isVisible9 && (
                  <a
                    href="#"
                    className={`text-news animate__animated ${
                      inView9 ? "animate__fadeInUp" : ""
                    }`}
                  >
                    <h2>Our news</h2>
                    <div className="text-button">
                      <span>View all</span>
                      <span>
                        <svg
                          class="icon"
                          width="22"
                          height="12"
                          viewBox="0 0 22 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 6L21 6" stroke="currentColor"></path>
                          <path
                            d="M16 1L21 6L16 11"
                            stroke="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </a>
                )}

                <div className="image-news">
                  <div className="video-mask">
                    <img className="img" src={img2}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block readmore-widget">
          <div className="flex-box">
            <div className="box-3 flex-col" ref={ref10}>
              <div className="flex-box flex-column flex-justify-end">
                {isVisible10 && (
                  <a
                    href="#"
                    className={`text-news animate__animated ${
                      inView10 ? "animate__fadeInUp" : ""
                    }`}
                  >
                    <h2>Why IMPC</h2>
                    <div className="text-button">
                      <span>How we can help</span>
                      <span>
                        <svg
                          class="icon"
                          width="22"
                          height="12"
                          viewBox="0 0 22 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 6L21 6" stroke="currentColor"></path>
                          <path
                            d="M16 1L21 6L16 11"
                            stroke="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </a>
                )}

                <div className="image-news">
                  <div className="video-mask">
                    <img className="img" src={img3}></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-3 flex-col" ref={ref10}>
              <div className="flex-box flex-column flex-justify-end">
                {isVisible10 && (
                  <a
                    href="#"
                    className={`text-news animate__animated ${
                      inView10 ? "animate__fadeInUp" : ""
                    }`}
                  >
                    <h2>Our offices</h2>
                    <div className="text-button">
                      <span>Take a look</span>
                      <span>
                        <svg
                          class="icon"
                          width="22"
                          height="12"
                          viewBox="0 0 22 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0 6L21 6" stroke="currentColor"></path>
                          <path
                            d="M16 1L21 6L16 11"
                            stroke="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </a>
                )}

                <div className="image-news">
                  <div className="video-mask">
                    <img className="img" src={img4}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer-container-fluid">
            <div className="footer-top flex-box flex-justify-between">
              <div className="flex-col footer-address">
                <div className="footer-address-inner">
                  <p>
                    <strong>Head Office</strong>
                    <br />
                    Royalty House,
                    <br />
                    72-74 Dean Street,
                    <br />
                    London,
                    <br />
                    W1D, 3SG
                  </p>
                </div>
              </div>
              <div className="flex-col footer-contact">
                <div className="footer-address-inner">
                  <p>
                    <strong>Contact Details</strong>
                    <br />
                    <a href="mailto:minh.tp@impc.vn">minh.tp@impc.vn</a>
                  </p>
                </div>
              </div>
              <div className="footer-nav flex-col ">
                <nav>
                  <ul className="flex-column">
                    <li class="">
                      <a rel="privacy-policy" href="#">
                        Privacy Policy
                      </a>
                    </li>
                    <li class="">
                      <a rel="privacy-policy" href="#">
                        Cookie Policy
                      </a>
                    </li>
                    <li class="">
                      <a rel="privacy-policy" href="#">
                        Turms & Conditions
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="footer-bottom flex-list flex-box flex-justify-between">
              <span>© 2024 PRCO. All rights reserved</span>
              <span>Created at Minh</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
