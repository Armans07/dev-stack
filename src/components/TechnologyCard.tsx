import type { Technology } from "../types/technology";

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
      className={`rounded-xl p-[1px] transition-all duration-200 ${
        isAdded
          ? "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`relative h-full rounded-xl border bg-white p-3 ${
          isAdded
            ? "border-transparent"
            : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
        }`}
      >
        {/* Selected Check */}
        {isAdded && (
          <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-[11px] font-bold text-white shadow">
            ✓
          </div>
        )}

        {/* Top */}
        <div className="flex items-start justify-between">
          {/* Icon */}
          <div className="flex h-8 w-8 items-center justify-center">
            <img
              src={technology.icon}
              alt={technology.name}
              className="h-7 w-7 object-contain"
            />
          </div>

          {/* Badge */}
          <span className="rounded-full bg-purple-50 px-2 py-1 text-[8px] font-semibold text-purple-600">
            {technology.badge}
          </span>
        </div>

        {/* Name */}
        <h3 className="mt-2 text-[13px] font-bold text-gray-900">
          {technology.name}
        </h3>

        {/* Description */}
        <p className="mt-1 min-h-[42px] text-[8px] leading-3 text-gray-500">
          {technology.description}
        </p>

        {/* Category + Difficulty + Rating */}
        <div className="mt-2 flex items-center justify-between gap-1">
          <div className="flex min-w-0 items-center gap-1">
            <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[7px] font-medium text-gray-600">
              {technology.category}
            </span>

            <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[7px] font-medium text-blue-600">
              {technology.difficulty}
            </span>
          </div>

          {/* Rating */}
          <div className="flex shrink-0 items-center gap-0.5">
            <span className="text-[10px] text-yellow-500">★</span>
            <span className="text-[8px] font-semibold text-gray-700">
              {technology.rating}
            </span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`mt-2.5 w-full rounded-md py-1.5 text-[9px] font-semibold transition ${
            isAdded
              ? "cursor-not-allowed border border-gray-300 bg-gray-100 text-gray-400"
              : "bg-[#111827] text-white hover:bg-gray-800 active:scale-[0.98]"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;