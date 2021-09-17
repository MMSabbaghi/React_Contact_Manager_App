import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addNewContact, updateContact } from "../services/contacts.services";
import { BiLeftArrowAlt } from "react-icons/bi";

const ContactForm = ({ location, history }) => {
  const selectedContact = location.state;
  const initialContact = { email: "", name: "" };
  const [contact, setContact] = useState(initialContact);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    if (selectedContact) setContact(selectedContact);
  }, [selectedContact]);

  const validate = (values) => {
    const name = String(values.name);
    const email = String(values.email);
    const errors = {};

    if (name.length === 0) errors.name = "Name is required";
    if (name.length > 0 && name.length < 3)
      errors.name = "Contact name must be at least 3 characters long";

    if (email.length === 0) errors.email = "Email is required";
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ( email.length > 0 && !emailRegex.test(email.toLowerCase()))
      errors.email = "This email is invalid";

    return errors;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const validationErrors = validate(contact);

    if (validationErrors.name || validationErrors.email) {
      setErrors(validationErrors);
    } else {
      selectedContact ? updateContact(contact) : addNewContact(contact);
      history.push("/");
      setContact(initialContact);
    }
  };

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
    //Updates the error message if it already exists
    if (errors?.name || errors?.email) setErrors(validate(contact));
  };

  return (
    <>
      <h3 className="form_title">{selectedContact ? "Edit" : "Add"} Contact</h3>

      <form onSubmit={submitHandler} className="contact_form">
        <label htmlFor="name">name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeInputHandler}
          className="text_input"
        />
        {errors?.name && <p className="error_msg"> {errors.name} </p>}
        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          value={contact.email}
          onChange={changeInputHandler}
          className="text_input"
        />
        {errors?.email && <p className="error_msg"> {errors.email} </p>}
        <button type="submit">
          {selectedContact ? "Edit" : "Add"} contact
        </button>
      </form>
      <Link to="/" className="flex_row">
        <BiLeftArrowAlt /> back to contact list
      </Link>
    </>
  );
};

export default ContactForm;
