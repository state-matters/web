const GenericList = ({ items, value }) => {
  const rows = items.map(
    item => {
      return (
        <li>
          {item.fields[value]}
        </li>
      );
    }
  );
  return (
    <ul>
      {rows}
    </ul>
  );
}

export default GenericList
