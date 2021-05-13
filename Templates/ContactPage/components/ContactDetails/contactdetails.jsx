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
      <p>{email}</p>
    </ContactInfo>

    <ContactInfo>
      <Platform>
        <img
          src="/static/img/logo_white_bullet.svg"
          alt="Bullet Point: CompSAt Logo"
        />
        <p>Facebook</p>
      </Platform>
      <p>{fb}</p>
    </ContactInfo>

    <ContactInfo>
      <Platform>
        <img
          src="/static/img/logo_white_bullet.svg"
          alt="Bullet Point: CompSAt Logo"
        />
        <p>Twitter</p>
      </Platform>
      <p>{twitter}</p>
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
