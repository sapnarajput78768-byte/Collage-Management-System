import Button from "../Button";

function Hero() {
  return (
    <section className="bg-blue-50">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>

            <p className="text-blue-700 font-semibold mb-4">
              WELCOME TO OUR COLLEGE
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Build Your Future

              <span className="text-blue-700 block">
                With Quality Education
              </span>
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              Empowering students with knowledge, skills and
              opportunities to build a successful future.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Button to="/courses">
                Explore Courses
              </Button>

              <Button
                to="/admission"
                variant="outline"
              >
                Apply Now
              </Button>

            </div>

          </div>

          {/* Right */}
          <div>

            <div className="h-80 md:h-[450px] rounded-2xl overflow-hidden shadow-xl bg-blue-200 flex items-center justify-center">

              <div className="text-center text-blue-700">

                <div className="text-6xl mb-4">
                  🏫
                </div>

                <p className="font-semibold">
                  Our College Campus
                </p>

                <p className="text-sm mt-2">
                  College Image
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;