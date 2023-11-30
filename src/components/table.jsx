import { useState } from "react";

export const Table = () => {
    const [clickedCell, setClickedCell] = useState(null);
    
    const handleCellClick = (row, col) => {
        const cellNumber = row * 4 + col + 1;
        setClickedCell(cellNumber);
    };
    return (
        <table border="1">
      <tbody>
        {Array.from({ length: 4 }, (_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: 4 }, (_, colIndex) => (
              <td key={colIndex} onClick={() => handleCellClick(rowIndex, colIndex)}>
                {rowIndex * 4 + colIndex + 1}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      {clickedCell && <caption>Clicked Cell: {clickedCell}</caption>}
    </table>
    );
}