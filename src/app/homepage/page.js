"use client"; // This is a client component 👈🏽

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { useRouter } from "next/navigation";
import Wrapper from "./component/Wrapper";
import "./assets/css/tailwind.css";
import "./assets/scss/tailwind.scss";
import "./assets/scss/icons.scss";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function Home() {
  const [isOpen, setMenu] = useState(true);
  const [scroll, setScroll] = useState(false);
  const router = useRouter();
  const toggleMenu = () => {
    setMenu(!isOpen);
  };

  return (
    <>
      <Wrapper>
        <div>
          <nav className={`${scroll ? "is-sticky" : ""} navbar`} id="navbar">
            <div className="container flex flex-wrap items-center justify-end">
              <Link className="navbar-brand" href="index.html">
                <span className="inline-block dark:hidden">
                  <Image
                    src={"/images/logo-dark.png"}
                    className="l-dark"
                    alt=""
                    width="150"
                    height={24}
                  />
                  <Image
                    src={"/images/logo.png"}
                    className="l-light"
                    alt=""
                    width="150"
                    height={24}
                  />
                </span>
                <Image
                  src={"/images/logo.png"}
                  className="hidden dark:inline-block"
                  alt=""
                  height={24}
                  width="150"
                />
              </Link>

              <div className="nav-icons flex items-center lg_992:order-2 ms-auto">
                
                <button
                  type="button"
                  className="collapse-btn inline-flex items-center ms-3 text-dark dark:text-white lg_992:hidden"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Navigation Menu</span>
                  <i className="mdi mdi-menu mdi-24px"></i>
                </button>
              </div>

              <div
                className={`${
                  isOpen === true ? "hidden" : "block"
                } navigation lg_992:order-1 lg_992:flex`}
                id="menu-collapse"
              >
                <ul className="navbar-nav nav-light" id="navbar-navlist">
                  <Link
                    className="nav-item"
                    to="home"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Home</span>
                  </Link>
                
                  <Link
                    className="nav-item"
                    to="contact"
                    activeclassname="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <span className="nav-link">Contact us</span>
                  </Link>
                </ul>
              </div>
            </div>
          </nav>
          <section
            style={{ backgroundImage: `url(/images/bg/1.jpg)` }}
            className="py-36 lg:py-64 w-full table relative bg-center bg-cover"
            id="home"
          >
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div className="container relative">
              <div className="grid grid-cols-1 mt-12">
                <h4 className="text-white lg:text-5xl text-4xl lg:leading-normal leading-normal font-medium mb-7 position-relative">
                  Unlock Your Career Potential: Where Job Seekers and Employers
                  Connect Efficiently. <br />
                </h4>

                <p className="text-white opacity-50 mb-0 max-w-2xl text-lg">
                  Unlock Your Next Career Move or Find the Perfect Candidate
                  Effortlessly with Our Advanced Matching Platform.
                </p>
                <div className="relative mt-10">
                  <Link to=""
                    onClick={() => router.push('/auth/login')} 
                    className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <Contact />

          <Footer />
        </div>
      </Wrapper>
    </>
  );
}

export default Home;
