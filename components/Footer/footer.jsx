import {
  FooterMobileWrapper,
  FooterHeadingWrapper,
  FooterSocialsWrapper,
  FooterMenuWrapper,
  FooterDivider,
  FooterOrgInfo,
} from "./styles";

const Footer = () => (
  <FooterMobileWrapper>
    <FooterHeadingWrapper>
      <a href="/">
        <img src="/static/img/logo.svg" alt="CompSAt Logo" />
      </a>
      <FooterSocialsWrapper>
        <a href="mailto:hello@compsat.org">
          <img src="/static/img/mail.svg" alt="Mail Icon" />
        </a>
        <a href="https://www.facebook.com/CompSAteneo">
          <img src="/static/img/fb.svg" alt="FB Icon" />
        </a>
        <a href="https://twitter.com/CompSAt">
          <img src="/static/img/twitter.svg" alt="Twitter Icon" />
        </a>
      </FooterSocialsWrapper>
    </FooterHeadingWrapper>
    <FooterMenuWrapper>
      <a href="/about">About CompSAt</a>
      <a href="/contact-us">Contact Us</a>
      <a href="/client-sites">Our Works</a>
    </FooterMenuWrapper>
    <FooterDivider />
    <FooterOrgInfo>
      <p>
        Room 303, MVP Center for Student Leadership, Ateneo de Manila
        University, Katipunan, Quezon City
      </p>

      <a href="mailto:hello@compsat.org">hello@compsat.org</a>

      <p className="copyright">CompSAt © 2020</p>
    </FooterOrgInfo>
  </FooterMobileWrapper>
);

export default Footer;
