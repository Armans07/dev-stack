import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import TechnologyGrid from "./components/TechnologyGrid";

import type { Technology } from "./components/types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load technology data
  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error: Error) => {
        console.log(error);
        setLoading(false);
        toast.error("Failed to load technologies");
      });
  }, []);

  // Add technology
  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.find(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning("This technology is already in your stack");
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack`);
  };

  // Remove one technology
  const handleRemove = (id: string) => {
    const newStack = stack.filter((item) => item.id !== id);

    setStack(newStack);
    toast.info("Technology removed from your stack");
  };

  // Remove all
  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed");
  };

  return (
    <>
      <Navbar />

      <Hero />

      {loading ? (
        <div className="flex min-h-[400px] items-center justify-center">
          <p className="text-lg font-medium text-gray-500">
            Loading technologies...
          </p>
        </div>
      ) : (
        <TechnologyGrid
          technologies={technologies}
          stack={stack}
          onAdd={handleAdd}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      )}

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;