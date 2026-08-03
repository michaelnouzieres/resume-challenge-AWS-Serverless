import { useEffect, useState } from "react";

export default function Stats() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    incrementVisitorCount();
  }, []);

  async function incrementVisitorCount() {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/visitor-count`,
      {
        method: "POST",
      },
    );

    const data = await response.json();
    setCount(data.counter);
  }

  return (
    <section className="max-w-5xl mx-auto py-5  grid gap-6 lg:grid-cols-2 lg:items-center text-white text-center lg:text-justify">
      <h1 className="text-4xl font-bold">Total visits to my website!</h1>
      <p className="text-lg">{count}</p>
    </section>
  );
}
