import React from "react";
import Square from "./Square";

const Board = ({squares, onClick}) => (
    <div className="board">
        {squares.map((square, i) => (
            <Square key={i} value={square} clicked={() => onClick(i)} />
        ))}
    </div>
);

export default Board;