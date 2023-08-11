import { useState } from 'react';

export default function BoardAssignment () {
   const [boardName, setName] = useState("no boards yet!");

   const boards = [{
      label: "Board of Taste", value: "bot1"
   }, {label: "Board of Texture", value: "bot2"}, {label: "Board of Portrayal", value: "bot3"}];

   const handleChange = (event) => {
      setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         {boards.map((board, id) => {
            return (<option key={id} value={board.value}>{board.label}</option>);
         })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}