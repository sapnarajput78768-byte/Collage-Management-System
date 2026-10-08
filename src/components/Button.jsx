import { Link } from "react-router-dom";

function Button({
  children,
  to,
  variant = "primary",
  className = "",
}) {
  const baseClasses =
    "inline-block px-6 py-3 rounded-lg font-medium transition";

  const variants = {
    primary:
      "bg-blue-700 text-white hover:bg-blue-800",

    outline:
      "border border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white",

    white:
      "bg-white text-blue-700 hover:bg-gray-100",
  };

  const finalClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={finalClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={finalClasses}>
      {children}
    </button>
  );
}

export default Button;