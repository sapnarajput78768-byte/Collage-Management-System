import Button from "./Button";

function CourseCard({ course }) {
  return (
    <div className="border rounded-xl overflow-hidden hover:shadow-xl transition bg-white">

      {/* Course Icon */}
      <div className="bg-blue-100 h-40 flex items-center justify-center text-6xl">
        {course.icon}
      </div>

      {/* Course Content */}
      <div className="p-6">

        <span className="text-sm text-blue-700 font-medium">
          {course.category}
        </span>

        <h3 className="text-2xl font-bold mt-2">
          {course.name}
        </h3>

        <p className="text-gray-600 mt-2">
          {course.fullName}
        </p>

        <div className="flex justify-between mt-5 text-sm">

          <span>
            Duration: {course.duration}
          </span>

          <span className="font-semibold text-blue-700">
            {course.fees}
          </span>

        </div>

        <Button
          to={`/courses/${course.id}`}
          className="w-full text-center mt-5"
        >
          View Details
        </Button>

      </div>
    </div>
  );
}

export default CourseCard;