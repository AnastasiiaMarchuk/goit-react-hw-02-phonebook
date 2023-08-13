import { FiTrash } from 'react-icons/fi';

export const ContactList = ({ newList, removeContact }) => {
  return (
    <div>
      <ul>
        {newList.map(contact => {
          return (
            <li key={contact.id}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
              <button onClick={() => removeContact(contact.id)}>
                <FiTrash size={21} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
