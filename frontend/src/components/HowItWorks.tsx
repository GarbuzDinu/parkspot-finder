import availabilityImg from "@/assets/Interface Testing.svg";
import reserveImg from "@/assets/Work Chat.svg";
import paymentImg from "@/assets/Deadline.svg";

const steps = [
  {
    image: availabilityImg,
    title: "Verifică disponibilitatea",
    description:
      "Deschide aplicația, alege locația și vezi câte locuri disponibile sunt în acest moment.",
  },
  {
    image: reserveImg,
    title: "Rezervă un loc",
    description:
      "Ai un eveniment special și trebuie să te asiguri că găsești loc de parcare? Asigură-te rezervând un loc în avans.",
  },
  {
    image: paymentImg,
    title: "Plătește online",
    description:
      "Plătești, rezervi, verifici disponibilitatea – toate direct din buzunarul tău.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Cum lucrează?
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 px-8 py-10 text-center"
            >
              {/* Image */}
              <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-black mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;