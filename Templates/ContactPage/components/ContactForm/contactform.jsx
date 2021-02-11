import React, { useState } from "react";
import {
  ContactFormWrapper,
  ErrorMessage,
  ConfirmationMessage,
  FormContent,
  FormField,
  WarningMessage,
  ButtonRight,
} from "./styles";
import PrimaryButton from "../../../../components/PrimaryButton";

const ContactForm = () => {
  const [isSuccess, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  }

  return (
    <ContactFormWrapper>
      {/* <ErrorMessage>
        <img src="/static/img/warning_white.svg" alt="Warning Symbol" />
        <p>Something went wrong. Please try again.</p>
      </ErrorMessage> */}

      <ConfirmationMessage isSuccess={isSuccess}>
        <img src="/static/img/check_green.svg" alt="Check Symbol" />
        <p>Your message was sent. Thank you very much!</p>
      </ConfirmationMessage>

      <FormContent>
        <h3>Send us a message!</h3>
        <form data-netlify="true" method="POST" name="contact" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <FormField>
            Full Name*
            <input type="text" name="name" />
            {/* <WarningMessage>
              <img src="/static/img/warning_red.svg" alt="Warning Symbol" />
              <p>Name is required.</p>
            </WarningMessage> */}
          </FormField>

          <FormField>
            Email*
            <input type="email" name="email" />
            {/* <WarningMessage>
              <img src="/static/img/warning_red.svg" alt="Warning Symbol" />
              <p>Email format is incorrect.</p>
            </WarningMessage> */}
          </FormField>

          <FormField>
            Message*
            <textarea type="text" name="message" />
            {/* <WarningMessage>
              <img src="/static/img/warning_red.svg" alt="Warning Symbol" />
              <p>Message is required.</p>
            </WarningMessage> */}
          </FormField>

          <ButtonRight>
            <PrimaryButton>Submit</PrimaryButton>
          </ButtonRight>
        </form>
      </FormContent>
    </ContactFormWrapper>
  );
};

export default ContactForm;
