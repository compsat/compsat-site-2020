const ContactForm = () => (
  <div>
    <h3>Send us a message!</h3>
    <form>
      <label>
        Full Name*
        <input type="text" name="name" />
      </label>

      <label>
        Email*
        <input type="text" name="email" />
      </label>

      <label>
        Message*
        <input type="text" name="message" />
      </label>

      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default ContactForm;
