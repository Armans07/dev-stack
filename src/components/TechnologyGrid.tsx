
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "./types/technology";
import YourStack from "./YourStack";

type TechnologyGridProps = {
  technologies: Technology[];
  stack: Technology[];
  onAdd: (technology: Technology) => void;
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const TechnologyGrid = ({
  technologies,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}: TechnologyGridProps) => {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <div className="mb-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500">
            Technologies
          </p>

          <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-1 text-[10px] text-gray-400 sm:text-xs">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_250px]">
          
          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => {
              const isAdded = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={isAdded}
                  onAdd={onAdd}
                />
              );
            })}
          </div>

          {/* Your Stack */}
          <YourStack
            stack={stack}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologyGrid;