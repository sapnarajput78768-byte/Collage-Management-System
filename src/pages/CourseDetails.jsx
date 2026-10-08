import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-blue-700">
        Course Details
      </h1>

      <p className="mt-4 text-gray-600">
        Selected Course: {id}
      </p>
    </div>
  );
}

export default CourseDetails;