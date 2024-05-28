import React from "react";
import {useParams} from "react-router-dom";

const Book = () => {
   const {id} = useParams()
    // если не использовать Деструктуризация
    // id это использовал Деструктуризация
    // console.log(params)
    return (
        <h1>Book {id}</h1>
    )
}

export default Book