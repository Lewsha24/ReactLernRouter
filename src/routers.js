import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BookList from "./pages/BookList";
import Book from "./pages/Book";
import notFound from "./pages/NotFound";
import NewBook from "./pages/NewBook";
import BooksLayout from "./ layout/BooksLayout";

export const publicRoutes = [
    {
        path: '/',
        Component: Home,
        key: 'home'
    },
    {
        path: '/about',
        Component: About,
        key: 'about'
    },
    {
        path: '/contact',
        Component: Contact,
        key: 'contact'
    },
    {
        path: '/bookList',
        Component: BookList,
        key: 'bookList'
    },
    // {
    //     path: '/books',
    //     Component: BooksLayout,
    //     key: 'books'
    // },
    {
        path: '/books/:id',
        Component: Book,
        key: 'books'
    },
    {
        path: '/books/new',
        Component: NewBook,
        key: 'new'
    },
    {
        path: '*',
        Component: notFound,
        key: 'notFound'
    },
]