"use client"

import { useState, useEffect } from "react";
import DynamicIcon from "./DynamicIcon";

export default function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    try {
      // 1. Verificar localStorage
      const savedTheme = localStorage.getItem("theme")

      // 2. Verificar preferencia del sistema
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

      // 3. Determinar el tema inicial
      let initialTheme: boolean
      if (savedTheme !== null) {
        initialTheme = savedTheme === "dark"
      } else {
        initialTheme = systemPrefersDark
      }

      setDarkMode(initialTheme)
      document.documentElement.classList.toggle("dark", initialTheme)
    } catch (error) {
      // Fallback si localStorage no está disponible
      console.warn("Theme toggle: localStorage not available", error)
      setDarkMode(false)
    }
  }, [])

  useEffect(() => {
    if (!isMounted) return

    try {
      document.documentElement.classList.toggle("dark", darkMode)
      localStorage.setItem("theme", darkMode ? "dark" : "light")
    } catch (error) {
      console.warn("Theme toggle: Could not save theme preference", error)
    }
  }, [darkMode, isMounted])

  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
  }

  if (!isMounted) {
    // Renderizar placeholder mientras se determina el tema
    return <div className="rounded-full p-2 w-10 h-10 bg-gray-100 dark:bg-gray-800 animate-pulse" />
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full p-2 transition-colors text-amber-700 hover:bg-amber-100/50 dark:text-amber-300 dark:hover:bg-amber-950/30"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <DynamicIcon icon={darkMode ? "Sun" : "Moon"} />
    </button>
  )
}
