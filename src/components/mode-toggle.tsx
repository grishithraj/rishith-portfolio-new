"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"; // Ensure this path is correct
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

// Accept props and destructure the className
export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Load theme from localStorage or default to light mode
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Update the class on the <html> element
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className={`px-2 ${className || ""}`} // Add className from props if present
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {darkMode ? (
        <button onClick={toggleTheme}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-moon h-[1.2rem] w-[1.2rem] mb-1   dark:text-white text-neutral-800"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        </button>
      ) : (
        <button onClick={toggleTheme}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-sun h-[1.2rem] w-[1.2rem] mb-1 dark:text-white text-neutral-800"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        </button>
      )}
    </Button>
  );
}
