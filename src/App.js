import React from "react";
import {Link, NavLink, Route, Routes, useLocation, useRoutes} from 'react-router-dom';
import './App.css';
import {publicRoutes} from "./routers";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import BooksLayout from "./ layout/BooksLayout";


function App() {
    const location = useLocation();
    console.log(location)
    // Есть еще такой способ создания роутеров. Тоже очень полезно и быстро , без сложностей
    const element = useRoutes([
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/books',
            element: <BooksLayout/>,
            children: [
                {
                    index: true,
                    element: <BookList/>
                }
            ]
        }
    ])
  return (
      <>
          <ul>
              {publicRoutes.map(({ path, key}) =>
                  <li>
                      <Link to={path} key={key}>
                          {/* <Link to={path} key={key} replace>*/}
                          {/*replace удаляет историю */}
                          {/*reloadDocument*/}
                          {/*перезагружает страницу*/}
                          {/*state={}*/}
                          {/*помогает передавать данные между компонентами*/}
                          {key}
                      </Link>
                  </li>
              )}
              <NavLink to="/bookList" state="hi">
                    NavLink
              </NavLink>
                {/*<div>*/}
                {/*    {location.state}*/}
                {/*</div>*/}
          </ul>
          {/*{element}*/}
        <Routes>
            {publicRoutes.map(({path, Component, key}) =>
                <Route path={path} key={key} element={<Component/>}/>
            )}
        </Routes>
      </>
  );
}

export default App;
