function StatCard({ number, label }) {
  return (
    <div className="text-center p-6">
      <h2 className="text-3xl font-bold text-blue-700">
        {number}
      </h2>

      <p className="text-gray-600 mt-2">
        {label}
      </p>
    </div>
  );
}

export default StatCard;