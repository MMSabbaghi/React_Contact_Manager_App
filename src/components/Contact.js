import { BiUserCircle, BiTrashAlt, BiEditAlt } from "react-icons/bi";

const Contact = ({ contact, onEdit, onDelete }) => {
  return (
    <div className="contact">
      <div className="contact_info">
        <BiUserCircle size="35px" />
        <div>
          <h4>{contact.name} </h4>
          <p> {contact.email} </p>
        </div>
      </div>
      <div>
        <button className="edit_btn" onClick={onEdit}>
          <BiEditAlt />
        </button>
        <button className="delete_btn" onClick={onDelete}>
          <BiTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default Contact;
