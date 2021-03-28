import React from "react";

function TableData(props) {
  return (
    <tr key={props.data.id}>
      <td>
        <img src={props.data.thumbnailUrl} alt="Dummy" width="80" height="80" />
      </td>
      <td>{props.data.id}</td>
      <td>{props.data.url}</td>
      <td>{props.data.title}</td>
    </tr>
  );
}

export default TableData;
