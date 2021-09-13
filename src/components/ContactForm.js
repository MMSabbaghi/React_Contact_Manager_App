import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addNewContact, updateContact } from "../services/contacts.services";
import { BiLeftArrowAlt } from "react-icons/bi";

const ContactForm = ({ location, history }) => {
  const selectedContact = location.state;

  const initialContact = { email: "", name: "" };
  const [contact, setContact] = useState(initialContact);

  useEffect(() => {
    if (selectedContact) setContact(selectedContact);
  }, [selectedContact]);

  const submitHandler = (e) => {
    e.preventDefault();
    selectedContact ? updateContact(contact) : addNewContact(contact);
    history.push("/");
    setContact(initialContact);
  };

  const changeInputHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
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
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={changeInputHandler}
          className="text_input"
        />
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
