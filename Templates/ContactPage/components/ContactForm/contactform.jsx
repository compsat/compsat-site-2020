import {  FormField } from "./styles";

const ContactForm = () => (
  <div>
    <h3>Send us a message!</h3>
    <form>
      <FormField>
        Full Name*
        <input type="text" name="name" />
      </FormField>

      <FormField>
        Email*
        <input type="text" name="email" />
      </FormField>

      <FormField>
        Message*
        <textarea type="text" name="message" />
      </FormField>

      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default ContactForm;
