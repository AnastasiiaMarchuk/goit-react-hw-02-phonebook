import { FiTrash } from 'react-icons/fi';
import { BsPersonCircle } from 'react-icons/bs';
import {
  Button,
  Item,
  LineWithShadow,
  List,
  Name,
  Number,
  Title,
  TitlesWrapper,
} from './ContactList.styled';

export const ContactList = ({ newList, removeContact }) => {
  return (
    <>
      <LineWithShadow />
      <TitlesWrapper>
        <Title>Name</Title>
        <Title>Number</Title>
      </TitlesWrapper>
      <LineWithShadow />
      <List>
        {newList.map(contact => {
          return (
            <Item key={contact.id}>
              <BsPersonCircle size={21} color="#fff" />
              <Name>{contact.name}</Name>
              <Number>{contact.number}</Number>
              <Button onClick={() => removeContact(contact.id)}>
                <FiTrash size={21} />
              </Button>
            </Item>
          );
        })}
      </List>
    </>
  );
};
