import {  ContactFormWrapper, ErrorMessage, FormContent, FormField, WarningMessage, ButtonRight } from "./styles";
import PrimaryButton from "../../../../components/PrimaryButton";

const ContactForm = () => (
  <ContactFormWrapper>
    <ErrorMessage>
      <img
        src="/static/img/warning_white.svg"
        alt="Warning Symbol"
      />
      <p>Something went wrong. Please try again.</p>
    </ErrorMessage>
    <FormContent>
      <h3>Send us a message!</h3>
      <form>
        <FormField>
          Full Name*
          <input type="text" name="name" />
          <WarningMessage>
            <img
              src="/static/img/warning_red.svg"
              alt="Warning Symbol"
            />
            <p>Name is required.</p>
          </WarningMessage>
        </FormField>

        <FormField>
          Email*
          <input type="text" name="email" />
          <WarningMessage>
            <img
              src="/static/img/warning_red.svg"
              alt="Warning Symbol"
            />
            <p>Email format is incorrect.</p>
          </WarningMessage>
        </FormField>

        <FormField>
          Message*
          <textarea type="text" name="message" />
          <WarningMessage>
            <img
              src="/static/img/warning_red.svg"
              alt="Warning Symbol"
            />
            <p>Message is required.</p>
          </WarningMessage>
        </FormField>

        <ButtonRight><PrimaryButton>Submit</PrimaryButton></ButtonRight>
      </form>
    </FormContent>
  </ContactFormWrapper>
);

export default ContactForm;
