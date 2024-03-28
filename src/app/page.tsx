"use client";
import { useEffect, useState, useCallback } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const [todo, setTodo] = useState<Todo | null>(null); // State to hold the fetched todo
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch("/todos/1");
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      const data = await response.json();
      setTodo(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!todo && !loading) {
      fetchData();
    }
  }, [todo, loading, fetchData]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* Your other content here */}
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {/* Your other content here */}
      </div>

      {/* Display the fetched todo */}
      {todo && (
        <div className="max-w-5xl w-full p-8 border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Todo:</h2>
          <p className="text-gray-700">{todo.title}</p>
        </div>
      )}
    </main>
  );
};

export default Home;
