


import { useEffect, useState } from "react";

import "./App.css";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";

import TechnologyGrid from "./components/TechnologyGrid";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { Technology } from "./components/types/technology";



function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Load technology data from JSON
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technology data");
        }

        return response.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error: Error) => {
        console.error(error);
        setLoading(false);
        toast.error("Failed to load technologies.");
      });
  }, []);

  // Add technology to stack
  const handleAddToStack = (technology: Technology): void => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack.`
      );
      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  // Remove one technology
  const handleRemoveFromStack = (id: string): void => {
    const technology = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack.`
      );
    }
  };

  // Remove all technologies
  const handleRemoveAll = (): void => {
    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />

      <Hero />

      {/* Technology Section */}
      {loading ? (
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500"></div>

            <p className="mt-4 text-gray-600">
              Loading technologies...
            </p>
          </div>
        </div>
      ) : (
        <TechnologyGrid
          technologies={technologies}
          stack={stack}
          onAdd={handleAddToStack}
          onRemove={handleRemoveFromStack}
          onRemoveAll={handleRemoveAll}
        />
      )}

      <Footer />

      {/* Toast Notification */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;