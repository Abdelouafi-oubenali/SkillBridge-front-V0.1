import { useState, useEffect } from 'react';
import axios from 'axios';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [newCourseTitle, setTitle] = useState("");
  const [courseContent, setContent] = useState("");
  const [courseCategory, setCategory] = useState("");
  const [courseTags, setCourseTags] = useState([]);
  const [editCourseId, setEditCourseId] = useState(null);
  const [showForm, setShowForm] = useState(false); 
  const token = 'Bearer 9|C49wSDdMUBcJ6upuz01UVWkwQjZez5IQGs3SPF6Vc81a0f56';

  const fetchCourses = () => {
    axios.get('http://localhost:8000/api/V1/courses', {
      headers: { 'Authorization': token },
    })
    .then(response => {
      setCourses(response.data);
    })
    .catch(error => {
      console.error('Erreur:', error);
    });
  };

  const fetchCategories = () => {
    axios.get('http://localhost:8000/api/V1/categories', {
      headers: {'Authorization': token },
    })
    .then(response => {
      setCategories(response.data);
    })
    .catch(error => {
      console.error('Erreur categories:', error);
    });
  };

  const fetchTags = () => {
    axios.get('http://localhost:8000/api/V1/tags', {
      headers: { 'Authorization': token },
    })
    .then(response => {
      setTags(response.data);
    })
    .catch(error => {
      console.error('Erreur tags:', error);
    });
  };

  useEffect(() => {
    fetchCourses();
    fetchCategories();
    fetchTags();
  }, []);

  const addCourse = () => {
    if (newCourseTitle.trim() === "") return;

    axios.post('http://localhost:8000/api/V1/courses', {
      title: newCourseTitle,
      content: courseContent,
      category_id: courseCategory,
      tags: courseTags
    }, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      resetForm();
      fetchCourses();
      setShowForm(false);
    })  
    .catch(error => {
      console.error("Erreur lors de l'ajout:", error);
    });
  };

  const updateCourse = (id) => {
    axios.put(`http://localhost:8000/api/V1/courses/${id}`, {
      title: newCourseTitle,
      content: courseContent,
      category_id: courseCategory,
      tags: courseTags
    }, {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      resetForm();
      fetchCourses();
      setShowForm(false); 
    })
    .catch(error => {
      console.error("Erreur lors de la mise à jour:", error);
    });
  };

  const deleteCourse = (id) => {
    axios.delete(`http://localhost:8000/api/V1/courses/${id}`, {
      headers: { 'Authorization': token },
    })
    .then(() => {
      fetchCourses();
    })
    .catch(error => {
      console.error("Erreur lors de la suppression:", error);
    });
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setCategory("");
    setCourseTags([]);
    setEditCourseId(null);
  };

  const handleTagsChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setCourseTags(selectedOptions);
  };

  return (
    <div className="p-5">
      <div className="flex justify-center mb-10">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
        >
          {showForm ? "Fermer" : "Ajouter un cours"}
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mx-4">
            <h2 className="text-2xl font-bold mb-4 text-center">{editCourseId ? "Mettre à jour un cours" : "Ajouter un nouveau cours"}</h2>
            <input 
              value={newCourseTitle} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Titre du cours" 
              className="border p-2 mb-4 w-full rounded"
            />
            <input 
              value={courseContent} 
              onChange={(e) => setContent(e.target.value)} 
              placeholder="Contenu du cours" 
              className="border p-2 mb-4 w-full rounded"
            />

            {/* Select Category */}
            <select 
              value={courseCategory}
              onChange={(e) => setCategory(e.target.value)}
              className="border p-2 mb-4 w-full rounded"
            >
              <option value="">Sélectionner une catégorie</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>

            {/* Select Multiple Tags */}
            <select
              multiple
              value={courseTags}
              onChange={handleTagsChange}
              className="border p-2 mb-6 w-full rounded"
            >
              {tags.map((tag) => (
                <option key={tag.id} value={tag.id}>{tag.name}</option>
              ))}
            </select>

            <button 
              onClick={editCourseId ? () => updateCourse(editCourseId) : addCourse}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded w-full"
            >
              {editCourseId ? "Mettre à jour" : "Ajouter"}
            </button>
          </div>
        </div>
      )}

      {/* Liste des cours */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 bg-gray-200 relative">
              <img 
                src={course.image || "/api/placeholder/400/320"} 
                alt={course.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                {course.price ? `${course.price} €` : "29.99 €"}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{course.title}</h3>
              <p className="text-gray-600 mb-4">
                {course.content || "Aucune description disponible."}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {course.tags && course.tags.map((tag, idx) => (
                  <span key={idx} className="bg-gray-200 text-gray-700 text-sm px-2 py-1 rounded">
                    #{tag.name}
                  </span>
                ))}
              </div>

              <button 
                onClick={() => {
                  setEditCourseId(course.id);
                  setTitle(course.title);
                  setContent(course.content);
                  setCategory(course.category_id);
                  setCourseTags(course.tags.map(tag => tag.id));
                  setShowForm(true); 
                }}
                className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Modifier
              </button>
              <button 
                onClick={() => deleteCourse(course.id)}
                className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CourseList;
