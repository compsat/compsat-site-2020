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
import { Formik } from "formik";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  return (
    <ContactFormWrapper>
      {error && (
        <ErrorMessage>
          <img src="/static/img/warning_white.svg" alt="Warning Symbol" />
          <p>Something went wrong. Please try again.</p>
        </ErrorMessage>
      )}

      {success && (
        <ConfirmationMessage>
          <img src="/static/img/check_green.svg" alt="Check Symbol" />
          <p>Your message was sent. Thank you very much!</p>
        </ConfirmationMessage>
      )}

      <FormContent>
        <h3>Send us a message!</h3>
        <Formik
          initialValues={{ email: "", name: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (!values.name) {
              errors.name = "Required";
            } else if (!values.message) {
              errors.message = "Required";
            }
            return errors;
          }}
          onSubmit={(values, actions) => {
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact", ...values }),
            })
              .then(() => {
                setSuccess(true);
                actions.resetForm();
              })
              .catch(() => {
                setError(false);
              })
              .finally(() => actions.setSubmitting(false));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              name="contact"
              method="POST"
              data-netlify={true}
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <FormField>
                Full Name*
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && (
                  <WarningMessage>
                    <img
                      src="/static/img/warning_red.svg"
                      alt="Warning Symbol"
                    />
                    <p>Name is required.</p>
                  </WarningMessage>
                )}
              </FormField>

              <FormField>
                Email*
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <WarningMessage>
                    <img
                      src="/static/img/warning_red.svg"
                      alt="Warning Symbol"
                    />
                    <p>Email format is incorrect.</p>
                  </WarningMessage>
                )}
              </FormField>

              <FormField>
                Message*
                <textarea
                  type="text"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
                {errors.message && touched.message && (
                  <WarningMessage>
                    <img
                      src="/static/img/warning_red.svg"
                      alt="Warning Symbol"
                    />
                    <p>Message is required.</p>
                  </WarningMessage>
                )}
              </FormField>

              <ButtonRight>
                <PrimaryButton type="submit" disabled={isSubmitting}>
                  Submit
                </PrimaryButton>
              </ButtonRight>
            </form>
          )}
        </Formik>
      </FormContent>
    </ContactFormWrapper>
  );
};

export default ContactForm;
