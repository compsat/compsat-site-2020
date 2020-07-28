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
      <img src="/static/img/logo.svg" alt="CompSAt Logo" />
      <FooterSocialsWrapper>
        <img src="/static/img/mail.svg" alt="Mail Icon" />
        <img src="/static/img/fb.svg" alt="FB Icon" />
        <img src="/static/img/twitter.svg" alt="Twitter Icon" />
      </FooterSocialsWrapper>
    </FooterHeadingWrapper>
    <FooterMenuWrapper>
      <a href="/about">About CompSAt</a>
      <a href="/contact-us">Contact Us</a>
      <a href="/our-works">Our Works</a>
    </FooterMenuWrapper>
    <FooterDivider />
    <FooterOrgInfo>
      <p>
        Room 303, MVP Center for Student Leadership, Ateneo de Manila
        University, Katipunan, Quezon City
      </p>

      <a href="mailto:hello@compsat.org">hello@compsat.org</a>

      <p class="copyright">CompSAt © 2020</p>
    </FooterOrgInfo>
  </FooterMobileWrapper>
);

export default Footer;
