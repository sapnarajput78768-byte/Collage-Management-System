import StatCard from "../StatCard";
import { stats } from "../../data/homeData";

function Stats() {
  return (
    <section className="bg-white py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              number={stat.number}
              label={stat.label}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;