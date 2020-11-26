import { ContactDetailsWrapper, ContactInfo, Platform } from "./styles";

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
      <p>Room 303, MVP Center for Student Leadership, Ateneo de Manila University, Katipunan, Quezon City</p>
    </ContactInfo>

    <ContactInfo>
      <Platform>
        <img
          src="/static/img/logo_white_bullet.svg"
          alt="Bullet Point: CompSAt Logo"
        />
        <p>Email</p>
      </Platform>
      <p>hello@compsat.org</p>
    </ContactInfo>

    <ContactInfo>
      <Platform>
        <img
          src="/static/img/logo_white_bullet.svg"
          alt="Bullet Point: CompSAt Logo"
        />
        <p>Facebook</p>
      </Platform>
      <p>facebook.com/CompSAteneo</p>
    </ContactInfo>

    <ContactInfo>
      <Platform>
        <img
          src="/static/img/logo_white_bullet.svg"
          alt="Bullet Point: CompSAt Logo"
        />
        <p>Twitter</p>
      </Platform>
      <p>twitter.com/CompSAt</p>
    </ContactInfo>

    <ContactInfo>
      <Platform>
        <img
          src="/static/img/logo_white_bullet.svg"
          alt="Bullet Point: CompSAt Logo"
        />
        <p>Cellphone Number</p>
      </Platform>
      <p>0908-343-5801</p>
    </ContactInfo>
  </ContactDetailsWrapper>
);

export default ContactDetails;
