// App.jsx
import Header from './components/Header';
import Footer from './components/Footer';
import CourseList from './course/CourseList';
import ListCategories from './caegoreis/ListCtegories';
import StatisticPage from './course/StatisticPage'; 

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function HomePage() {
  return <h1>Page d'accueil</h1>;
}

function CoursesPage() {
  return <CourseList />;
}

function CoursesCategories() {
  return <ListCategories />;
}

function App() {
  return (
    <>
      <Header />

      <Router>
        <nav className="space-x-4">
          <Link to="/">Accueil</Link>
          <Link to="/courses">Cours</Link>
          <Link to="/category">Catégories</Link>
          <Link to="/statistic">Statistiques</Link>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/category" element={<CoursesCategories />} />
          <Route path="/statistic" element={<StatisticPage />} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
