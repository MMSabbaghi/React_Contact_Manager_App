import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Seaerch from "./Seaerch";
import { getAllContacts, deleteContact } from "../services/contacts.services";

const ContactList = ({ history }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(getAllContacts());
  }, []);

  const filterContacts = (searchQuery) => {
    setContacts(
      getAllContacts().filter((c) =>
        c.name.trim().toLowerCase().includes(searchQuery.trim().toLowerCase())
      )
    );
  };

  const removeHandler = (id) => {
    deleteContact(id);
    setContacts((prevState) => prevState.filter((c) => c.id !== id));
  };

  return (
    <div className="contact_list">
      <div className="top">
        <h3> Contacts </h3>
        <Link to="/contact-form"> + add new contact </Link>
      </div>
      <Seaerch placeholder="search contact..." onChange={filterContacts} />
      <div>
        {!!contacts.length ? (
          contacts.map((contact) => (
            <Contact
              key={contact.id}
              onDelete={() => removeHandler(contact.id)}
              onEdit={() =>
                history.push({
                  pathname: "/contact-form",
                  state: { ...contact },
                })
              }
              contact={contact}
            />
          ))
        ) : (
          <h3 className="empty_list">No contacts found ! </h3>
        )}
      </div>
    </div>
  );
};

export default ContactList;
