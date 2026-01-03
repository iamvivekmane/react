import { MouseEvent } from "react";
function ListGroup() {
  const items = ["New York", "San Fransisco", "London", "Paris"];

  // Specify the HTML element type for better Type safety
  const handleClick = (event: MouseEvent<HTMLLIElement>) => {
    console.log(event);
  };

  return (
    <>
      <h1>List</h1>
      {/* Conditional Rendering */}
      {items.length === 0 && <p>No items found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item} // Ideally use a unique ID if available
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
