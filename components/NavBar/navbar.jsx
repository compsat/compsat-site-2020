import { NavMobileWrapper, NavDesktopWrapper, NavWrapper } from "./styles";
import Link from "next/link";

const NavBar = () => (
  <NavWrapper>
    <NavMobileWrapper>
      <img src="/static/img/logo.svg" alt="CompSAt Logo" />
      <img src="/static/img/hamburger.svg" alt="Hamburger Icon" />
    </NavMobileWrapper>
    <NavDesktopWrapper>
      <img src="/static/img/logo.svg" alt="CompSAt Logo" />
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/events">Events</Link>
        <Link href="/services">Services</Link>
        <Link href="/client-sites">Client Sites</Link>
        <Link href="/microsites">Microsites</Link>
        <Link href="/contact-us">Contact Us</Link>
      </div>
    </NavDesktopWrapper>
  </NavWrapper>
);

export default NavBar;
