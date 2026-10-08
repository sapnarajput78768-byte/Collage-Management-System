import { facilities } from "../../data/homeData";

function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <p className="text-blue-700 font-semibold">
            WHY CHOOSE US
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Education That Builds Your Future
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide quality education, modern facilities and
            opportunities that help students achieve their career goals.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white p-7 rounded-xl shadow-sm hover:shadow-lg transition"
            >

              <div className="text-4xl mb-4">
                {facility.icon}
              </div>

              <h3 className="text-xl font-bold">
                {facility.title}
              </h3>

              <p className="text-gray-600 mt-3">
                {facility.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;