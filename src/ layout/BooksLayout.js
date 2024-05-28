import React from "react";
import {Link} from "react-router-dom";


const BooksLayout = () => {
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
            </ul>
        </>
    )
}

export default BooksLayout