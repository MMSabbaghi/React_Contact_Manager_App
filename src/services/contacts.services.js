function saveContcats(contacts) {
  try {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  } catch (error) {}
}

export function getAllContacts() {
  try {
    let contacts = JSON.parse(localStorage.getItem("contacts"));
    return contacts || [];
  } catch (error) {
    return [];
  }
}

export function getContactById(id) {
  let contacts = getAllContacts();
  return contacts.find((c) => +c.id === +id);
}

export function addNewContact(contact) {
  try {
    let contacts = getAllContacts();
    contacts.push({ id: Math.floor(Math.random() * 10000), ...contact });
    saveContcats(contacts);
  } catch (error) {}
}

export function updateContact(contact) {
  try {
    let contacts = getAllContacts();
    let contactIndex = contacts.findIndex((c) => +c.id === +contact.id);
    contacts[contactIndex] = { id: contact.id, ...contact };
    saveContcats(contacts);
  } catch (error) {}
}

export function deleteContact(id) {
  try {
    let contacts = getAllContacts();
    contacts = contacts.filter((c) => +c.id !== +id);
    saveContcats(contacts);
  } catch (error) {}
}
