function ListGroup() {
  let items = ["New York", "San Fransisco", "London", "Paris"];
  // items = [];

  //   conditional rendering
  //   if (items.length === 0) {
  //     return (
  //       <>
  //         <h1>List</h1> <p>Items not found.</p>
  //       </>
  //     );
  //   }

  // const getMessage = () => {
  //   return items.length === 0 ? <p>Items not found </p> : null;
  // };

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Items not found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
