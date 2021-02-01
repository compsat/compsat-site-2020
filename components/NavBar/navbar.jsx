import {
  NavMobileWrapper,
  NavDesktopWrapper,
  NavWrapper,
  MobileMenuContainer,
  PseudoButton,
  Hamburger,
  CrossButton,
} from "./styles";
import Link from "next/link";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const NavBar = () => {
  const [clicked, setClick] = useState(false);
  const handleClick = () => {
    setClick(!clicked);
    const html = document.querySelector("html");
    clicked ? (html.style.overflow = null) : (html.style.overflow = "hidden");
    clicked ? (html.style.overflow = null) : (html.style.overflow = "hidden");
  };
  return (
    <NavWrapper>
      <NavMobileWrapper>
        <img src="/static/img/logo.svg" alt="CompSAt Logo" />
        <Hamburger onClick={handleClick}>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.58081 12H21.5808"
              stroke="#F6F6F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.58081 6H17.5808"
              stroke="#F6F6F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.58081 18H21.5808"
              stroke="#F6F6F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Hamburger>
        <CSSTransition
          in={clicked}
          timeout={300}
          classNames="is-active"
          unmountOnExit
          onEnter={() => setClick(true)}
          onExited={() => setClick(false)}
        >
          <MobileMenuContainer>
            <CrossButton onClick={handleClick}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.63599 5.63604L18.3639 18.364"
                  stroke="#f6f6f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.63599 18.364L18.3639 5.63604"
                  stroke="#f6f6f6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </CrossButton>
            <PseudoButton onClick={handleClick}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </PseudoButton>
            <PseudoButton onClick={handleClick}>
              <Link href="/about" onClick={() => setClick(false)}>
                <a>About Us</a>
              </Link>
            </PseudoButton>
            <PseudoButton onClick={handleClick}>
              <Link href="/events" onClick={() => setClick(false)}>
                <a>Event</a>
              </Link>
            </PseudoButton>
            <PseudoButton onClick={handleClick}>
              <Link href="/services" onClick={() => setClick(false)}>
                <a>Services</a>
              </Link>
            </PseudoButton>
            <PseudoButton onClick={handleClick}>
              <Link href="/client-sites" onClick={() => setClick(false)}>
                <a>Client Sites</a>
              </Link>
            </PseudoButton>
            <PseudoButton onClick={handleClick}>
              <Link href="/microsites" onClick={() => setClick(false)}>
                <a>Microsites</a>
              </Link>
            </PseudoButton>
            <PseudoButton onClick={handleClick}>
              <Link href="/contact-us" onClick={() => setClick(false)}>
                <a>Contact Us</a>
              </Link>
            </PseudoButton>
          </MobileMenuContainer>
        </CSSTransition>
      </NavMobileWrapper>
      <NavDesktopWrapper>
        <img src="/static/img/logo.svg" alt="CompSAt Logo" />
        <div className="links">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About Us</a>
          </Link>
          <Link href="/events">
            <a>Events</a>
          </Link>
          <Link href="/services">
            <a>Services</a>
          </Link>
          <Link href="/client-sites">
            <a>Client Sites</a>
          </Link>
          <Link href="/microsites">
            <a>Microsites</a>
          </Link>
          <Link href="/contact-us">
            <a>Contact Us</a>
          </Link>
        </div>
      </NavDesktopWrapper>
    </NavWrapper>
  );
};

export default NavBar;
