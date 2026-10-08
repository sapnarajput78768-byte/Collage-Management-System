import { courses } from "../../data/courses";
import CourseCard from "../CourseCard";
import Button from "../Button";

function PopularCourses() {

  const popularCourses = courses.slice(0, 3);

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <p className="text-blue-700 font-semibold">
            OUR PROGRAMS
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Popular Courses
          </h2>

          <p className="text-gray-600 mt-4">
            Explore our most popular academic programs.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {popularCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

        </div>

        <div className="text-center mt-10">

          <Button
            to="/courses"
            variant="outline"
          >
            View All Courses
          </Button>

        </div>

      </div>

    </section>
  );
}

export default PopularCourses;