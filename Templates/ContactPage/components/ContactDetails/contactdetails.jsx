import { ContactDetailsWrapper, ContactInfo, Platform } from "./styles";
import { attributes } from "../../../../content/contactUs.md";

let {
  address,
  email,
  fb,
  twitter,
  // cp
} = attributes;

const ContactDetails = () => (
  <ContactDetailsWrapper>
    <h1>Contact Us</h1>
    <ContactInfo>
      <Platform>
        <img
          src="/static/img/logo_white_bullet.svg"
          alt="Bullet Point: CompSAt Logo"
        />
        <p>Address</p>
      </Platform>
      <p>{address}</p>
    </ContactInfo>

    <ContactInfo>
      <Platform>
        <img
          src="/static/img/logo_white_bullet.svg"
          alt="Bullet Point: CompSAt Logo"
        />
        <p>Email</p>
      </Platform>
      <a href={`mailto:${email}`}>
        <p>{email}</p>
      </a>
    </ContactInfo>

    <ContactInfo>
      <Platform>
        <img
          src="/static/img/logo_white_bullet.svg"
          alt="Bullet Point: CompSAt Logo"
        />
        <p>Facebook</p>
      </Platform>
      <a href={fb}>
        <p>{fb}</p>
      </a>
    </ContactInfo>

    <ContactInfo>
      <Platform>
        <img
          src="/static/img/logo_white_bullet.svg"
          alt="Bullet Point: CompSAt Logo"
        />
        <p>Twitter</p>
      </Platform>
      <a href={twitter}>
        <p>{twitter}</p>
      </a>
    </ContactInfo>

    {/* <ContactInfo>
      <Platform>
        <img
          src="/static/img/logo_white_bullet.svg"
          alt="Bullet Point: CompSAt Logo"
        />
        <p>Cellphone Number</p>
      </Platform>
      <p>{cp}</p>
    </ContactInfo> */}
  </ContactDetailsWrapper>
);

export default ContactDetails;
