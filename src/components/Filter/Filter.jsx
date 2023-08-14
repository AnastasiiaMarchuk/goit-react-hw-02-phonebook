import { Input, Label } from './Filter.styled';

export const Filter = ({ filter, findContact }) => {
  return (
    <>
      <Label>
        Find contact by name{' '}
        <Input
          type="text"
          value={filter}
          onChange={findContact}
          placeholder={'search'}
        />
      </Label>
    </>
  );
};
