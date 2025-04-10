function CourseCard({ title, description }) {
    return (
      <div className="border border-gray-300 p-4 m-2 rounded-lg">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  }
  
  export default CourseCard;
  

