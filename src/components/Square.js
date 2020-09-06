import React from "react";

const Square = ({value, clicked}) => {
    const style = value ? `squares ${value}` : `squares`;
    return <button className={style} onClick={clicked}>{value}</button>
};

export default Square;