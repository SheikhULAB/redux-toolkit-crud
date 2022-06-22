import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AddBook from './features/books/AddBook';
import BooksView from './features/books/BooksView';
import EditBook from './features/books/EditBook';
import Error from './pages/Error';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <main>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path='/show-books' element={<BooksView />} />
         <Route path='/add-books' element={<AddBook />} />
         <Route path='/edit-book' element={<EditBook />} />
         <Route path='*' element={<Error />} />
       </Routes>
       </main> 
       <Footer />
    </BrowserRouter>
  );
}

export default App;
