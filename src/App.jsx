import Header from './components/Header';
import Footer from './components/Footer';
import CourseList from './course/CourseList';
import ListCtegoreis from './caegoreis/ListCtegories'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function HomePage() {
  return <h1>Home Page</h1>;
}

function CoursesPage() {
  return <CourseList />;
}
function CoursesCtegoreis() {
  return <ListCtegoreis />;
}



function App() {
  return (
    <>
      <Header />

      <Router>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/category">category</Link>

      </nav>


        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/courses' element={<CoursesPage />} />
          <Route path='/category' element={<CoursesCtegoreis />} />

        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
