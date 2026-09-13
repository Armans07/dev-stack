import type { Technology } from "./types/technology";

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div
      className={`rounded-xl p-[1px] ${
        isAdded
          ? "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600"
          : "bg-gray-200"
      }`}
    >
      <div className="h-full rounded-xl bg-white p-3">

        {/* Icon and Badge */}
        <div className="flex items-center justify-between">

          <img
            src={technology.icon}
            alt={technology.name}
            className="h-7 w-7 object-contain"
          />

          <span className="rounded-full bg-purple-50 px-2 py-1 text-[8px] text-purple-600">
            {technology.badge}
          </span>

        </div>

        {/* Name */}
        <h3 className="mt-2 text-sm font-bold text-gray-900">
          {technology.name}
        </h3>

        {/* Description */}
        <p className="mt-1 min-h-[40px] text-[9px] leading-4 text-gray-500">
          {technology.description}
        </p>

        {/* Category and Difficulty */}
        <div className="mt-2 flex items-center gap-1">

          <span className="rounded bg-gray-100 px-2 py-1 text-[7px] text-gray-600">
            {technology.category}
          </span>

          <span className="rounded bg-blue-50 px-2 py-1 text-[7px] text-blue-600">
            {technology.difficulty}
          </span>

        </div>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1">
          <span className="text-yellow-500">★</span>

          <span className="text-[9px] font-semibold">
            {technology.rating}
          </span>
        </div>

        {/* Button */}
        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`mt-3 w-full rounded-md py-2 text-[9px] font-semibold ${
            isAdded
              ? "cursor-not-allowed border border-pink-300 bg-gray-100 text-pink-500"
              : "bg-gray-900 text-white hover:bg-gray-800"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>

      </div>
    </div>
  );
};

export default TechnologyCard;