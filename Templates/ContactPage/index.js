import { ContactPageWrapper } from "./styles";
import ContactDetails from "./components/ContactDetails";
import ContactForm from "./components/ContactForm";

export default () => {
  return (
    <ContactPageWrapper>
      <ContactDetails />
      <ContactForm />
    </ContactPageWrapper>
  );
};
