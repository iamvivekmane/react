import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "San Fransisco", "London", "Paris"];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Items not found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            // onClick={() => console.log(item, index)}
            // onClick={(e) => console.log(e)}
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
