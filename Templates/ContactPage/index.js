import { ContactPageWrapper, ContactCurve, ContactPath } from "./styles";
import ContactDetails from "./components/ContactDetails";
import ContactForm from "./components/ContactForm";
import Head from "next/head";
import { attributes } from "../../content/contactUs.md";

export default () => {
  let { title, description } = attributes;

  return (
    <ContactPageWrapper>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <ContactDetails />
      <ContactForm />
      <ContactCurve viewBox="0 0 800 400">
        <ContactPath d="M 0 75 C 200 125 500 0 800 0 L 800 400 Q 250 400 0 300"></ContactPath>
      </ContactCurve>
      <svg height="0" width="0" style={{ marginTop: "-64px" }}>
        <defs>
          <linearGradient id="contact-gradient" gradientTransform="rotate(0)">
            <stop offset="0%" stop-color="#BA1C51"></stop>
            <stop offset="48%" stop-color="#541561"></stop>
            <stop offset="65%" stop-color="#3C1364"></stop>
            <stop offset="85%" stop-color="#541561"></stop>
            <stop offset="100%" stop-color="#70175C"></stop>
          </linearGradient>
        </defs>
      </svg>
    </ContactPageWrapper>
  );
};
