import Button from "../Button";

function CTA() {
  return (
    <section className="bg-blue-700 py-16">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Start Your Journey With Us
        </h2>

        <p className="text-blue-100 mt-4 text-lg">
          Take the first step towards a brighter future.
        </p>

        <Button
          to="/admission"
          variant="white"
          className="mt-8"
        >
          Apply For Admission
        </Button>

      </div>

    </section>
  );
}

export default CTA;