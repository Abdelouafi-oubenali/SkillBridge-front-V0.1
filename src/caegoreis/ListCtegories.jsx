import { useState, useEffect } from "react";
import axios from "axios";

function ListCategories() {

  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios
      .get("http://localhost:8000/api/V1/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Erreur:", error);
      });
  };

  // Ajouter 
  const AddCategoris = () => {
    if (newCategory.trim() === "") return;

    axios
      .post("http://localhost:8000/api/V1/categories", {
        name: newCategory,
      })
      .then(() => {
        setNewCategory("");
        fetchCategories();
      })
      .catch((error) => {
        console.error("Erreur lors de l'ajout:", error);
      });
  };

  // Supprimer
  const DeleteCategories = (id) => {
    axios
      .delete(`http://localhost:8000/api/V1/categories/${id}`)
      .then(() => {
        fetchCategories();
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression:", error);
      });
  };

  // Commencer 
  const startEdit = (category) => {
    setEditingId(category.id);
    setEditName(category.name);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditName("");
  };

  // Sauvegarder la modification
  const saveEdit = () => {
    if (editName.trim() === "") return;

    axios
      .put(`http://localhost:8000/api/V1/categories/${editingId}`, {
        name: editName,
      })
      .then(() => {
        setEditingId(null);
        setEditName("");
        fetchCategories();
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour:", error);
      });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Gestion des Catégories</h1>

      {/* Formulaire d'ajout */}
      <div className="mb-6 flex gap-2">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Nouvelle catégorie"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={AddCategoris}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Ajouter
        </button>
      </div>

      {/* Liste des catégories */}
      <div className="border rounded-md overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700">ID</th>
              <th className="px-4 py-2 text-left text-gray-700">Nom</th>
              <th className="px-4 py-2 text-right text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-t">
                <td className="px-4 py-2 text-gray-800">{category.id}</td>
                <td className="px-4 py-2">
                  {editingId === category.id ? (
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded-md"
                    />
                  ) : (
                    <span className="text-gray-800">{category.name}</span>
                  )}
                </td>
                <td className="px-4 py-2 text-right">
                  {editingId === category.id ? (
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={saveEdit}
                        className="px-2 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                      >
                        Enregistrer
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="px-2 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600"
                      >
                        Annuler
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => startEdit(category)}
                        className="px-2 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                      >
                        Modifier
                      </button>
                      <button
                        onClick={() => DeleteCategories(category.id)}
                        className="px-2 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                      >
                        Supprimer
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}

            {categories.length === 0 && (
              <tr>
                <td colSpan="3" className="px-4 py-4 text-center text-gray-500">
                  Aucune catégorie disponible. Ajoutez votre première catégorie !
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListCategories;
