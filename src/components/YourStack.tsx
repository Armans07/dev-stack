import type { Technology } from "./types/technology";


type YourStackProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <aside className="h-fit rounded-xl border border-gray-200 bg-white p-3 shadow-sm lg:sticky lg:top-24">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-gray-100 pb-3">
        <div>
          <h2 className="text-sm font-bold text-gray-900">Your Stack</h2>

          <p className="mt-0.5 text-[8px] text-gray-400">
            {stack.length} {stack.length === 1 ? "Technology" : "Technologies"}{" "}
            Selected
          </p>
        </div>

     
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="flex min-h-[220px] flex-col items-center justify-center px-4 text-center">

          <h3 className="mt-3 text-xs font-bold text-gray-800 border-2 p-8 border- ">
            Your stack is empty
          </h3>

        </div>
      ) : (
        <div className="mt-3 space-y-2">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-2 rounded-lg border border-gray-100 bg-gray-50 p-2"
            >
              {/* Icon */}
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-5 w-5 object-contain"
                />
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <h4 className="truncate text-[9px] font-bold text-gray-800">
                  {technology.name}
                </h4>

                <p className="text-[7px] text-gray-400">
                  {technology.category}
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => onRemove(technology.id)}
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                title={`Remove ${technology.name}`}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
         {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="rounded border  border-red-200 px-2 py-1 text-[7px] font-semibold text-red-500 transition hover:bg-red-50 "
          >
            Remove All
          </button>
        )}
    </aside>
  );
};

export default YourStack;
