export const Filter = ({ filter, findContact }) => {
  return (
    <div>
      <p>Find contact by name</p>
      <input type="text" value={filter} onChange={findContact} />
    </div>
  );
};
