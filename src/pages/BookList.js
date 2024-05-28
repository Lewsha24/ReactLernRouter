import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";


const BookList = () => {
    const [val, setVal] = useState(3)
    return (
        <>
            <h1>BookList</h1>
            <ul>
                <li>
                    <Link to="/books/harry-potter">Harry Potter</Link>
                </li>
                <li>
                    <Link to="/books/2">2</Link>
                </li>
                <li>
                    <Link to="/books/3">3</Link>
                </li>
                <li>
                    <Link to="/books/new">Новая книга</Link>
                </li>
                <input type="number" value={val} onChange={(e) => {setVal(e.target.value)}}/>
            </ul>
        </>
    )
}

export default BookList