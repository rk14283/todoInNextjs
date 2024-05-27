// components/TopicsContext.jsx
"use client";

import { createContext, useContext, useState, useEffect } from "react";

const TopicsContext = createContext();

export const useTopics = () => useContext(TopicsContext);

export const TopicsProvider = ({ children }) => {
  const [topics, setTopics] = useState([]);

  const fetchTopics = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }

      const data = await res.json();
      setTopics(data);
    } catch (error) {
      console.error("Error loading topics:", error);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  return (
    <TopicsContext.Provider value={{ topics, setTopics, fetchTopics }}>
      {children}
    </TopicsContext.Provider>
  );
};
