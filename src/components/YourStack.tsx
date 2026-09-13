import type { Technology } from "./types/technology";

type YourStackProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="h-fit rounded-xl border border-gray-200 bg-white p-3 shadow-sm">

      {/* Header */}
      <div className="border-b border-gray-100 pb-3">
        <h2 className="text-sm font-bold text-gray-900">
          Your Stack
        </h2>

        <p className="mt-1 text-[8px] text-gray-400">
          {stack.length}{" "}
          {stack.length === 1
            ? "Technology selected"
            : "Technologies selected"}
        </p>
      </div>

      {/* Empty Stack */}
      {stack.length === 0 ? (
        <div className="flex min-h-[120px] items-center justify-center">
          <p className="rounded-xl border-2 border-dotted border-gray-300 p-5 text-xs text-gray-400">
            Your stack is empty
          </p>
        </div>
      ) : (
        <div className="mt-3 space-y-2">

          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2"
            >

              {/* Icon */}
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-6 w-6 object-contain"
              />

              {/* Name + Category */}
              <div className="flex-1">
                <h4 className="text-[9px] font-bold text-gray-800">
                  {technology.name}
                </h4>

                <p className="text-[7px] text-gray-400">
                  {technology.category}
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => onRemove(technology.id)}
                className="text-sm text-gray-400 hover:text-red-500"
              >
                ×
              </button>

            </div>
          ))}

        </div>
      )}

      {/* Remove All */}
      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-4 w-full rounded border border-red-200 py-2 text-xs font-semibold text-red-500 hover:bg-red-50"
        >
          Remove All
        </button>
      )}

    </aside>
  );
};

export default YourStack;