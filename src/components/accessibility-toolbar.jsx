"use client";

import { useEffect, useState } from "react";
import {
  AArrowDown,
  AArrowUp,
  Droplet,
  MonitorOff,
  PersonStanding,
  RotateCcw,
  Volume2,
  Moon,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useTheme } from "next-themes"
import { is } from "zod/v4/locales";

const MIN_FONT_SIZE = 12;
const MAX_FONT_SIZE = 24;
const DEFAULT_FONT_SIZE = 16;

export function AccessibilityToolbar() {
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
  const [grayScale, setGrayScale] = useState(false);
  const [invert, setInvert] = useState(false);
  const [screenReader, setScreenReader] = useState(false);
  const { setTheme } = useTheme()
  const [theme, setThemeState] = useState("light");


  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  useEffect(() => {
    document.documentElement.classList.toggle("grayscale", grayScale);
  }, [grayScale]);

  useEffect(() => {
    document.documentElement.classList.toggle("invert", invert);
  }, [invert]);

  useEffect(() => {
    if (!screenReader) {
      window.speechSynthesis.cancel();
      return;
    }

    const utterance = new SpeechSynthesisUtterance("Lector de pantalla activado");
    utterance.lang = "es-ES";
    window.speechSynthesis.speak(utterance);

    const handleMouseOver = (e) => {
      const target = e.target;

      const elementWithAria = target.closest("[aria-label]");
      const ariaLabel = elementWithAria ? elementWithAria.getAttribute("aria-label") : null;

      const imgElement = target.tagName === "IMG" ? target : target.querySelector("img");
      const altText = imgElement ? imgElement.getAttribute("alt") : null;

      let textToRead = "";

      if (ariaLabel) {
        textToRead = ariaLabel;
      } else if (altText) {
        textToRead = altText;
      } else {
        const validTags = ["P", "H1", "H2", "H3", "H4", "H5", "H6", "SPAN", "A", "BUTTON", "LABEL"];
        if (validTags.includes(target.tagName) && target.innerText.trim() !== "") {
          textToRead = target.innerText;
        }
      }

      if (textToRead) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = "es-ES";
        window.speechSynthesis.speak(utterance);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      window.speechSynthesis.cancel();
    };
  }, [screenReader]);

  const accessibilityButtons = [
    {
      icon: <Moon fill="currentColor" />,
      title: "Tema Oscuro",
      onClick: () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        setThemeState(newTheme);
      },
      isActive: theme === "dark",
    },
    {
      icon: <AArrowUp />,
      title: "Aumentar texto",
      onClick: () => setFontSize((prev) => Math.min(prev + 2, MAX_FONT_SIZE)),
      isActive: fontSize > DEFAULT_FONT_SIZE,
    },
    {
      icon: <AArrowDown />,
      title: "Reducir texto",
      onClick: () => setFontSize((prev) => Math.max(prev - 2, MIN_FONT_SIZE)),
      isActive: fontSize < DEFAULT_FONT_SIZE,
    },
    {
      icon: <RotateCcw />,
      title: "Texto estándar",
      onClick: () => setFontSize(DEFAULT_FONT_SIZE),
      isActive: fontSize === DEFAULT_FONT_SIZE,
    },
    {
      icon: <Droplet fill="currentColor" />,
      title: "Desaturar",
      onClick: () => setGrayScale((prev) => !prev),
      isActive: grayScale,
    },
    {
      icon: <MonitorOff fill="currentColor" />,
      title: "Invertir color",
      onClick: () => setInvert((prev) => !prev),
      isActive: invert,
    },
    {
      icon: <Volume2 fill="currentColor" />,
      title: "Lector de pantalla",
      onClick: () => setScreenReader((prev) => !prev),
      isActive: screenReader,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="botón de herramientas de accesibilidad"
        className="fixed bottom-3 right-3 md:bottom-6 md:right-6 z-50 flex justify-center items-center gap-2 bg-green-800 hover:bg-green-700 p-2 rounded-full size-15 shadow-lg cursor-pointer">
        <PersonStanding strokeWidth={2} className="size-8 text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="h-[75dvh] min-w-[90svw] sm:min-w-120 lg:h-[70dvh] p-5 flex flex-col gap-5 bg-accent">
        <h2 className="text-lg">Menú de accesibilidad</h2>
        <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-3 md:grid-rows-3 w-full h-full gap-5 bg-accent rounded-md">
          {accessibilityButtons.map((btn, index) => (
            <button
              key={index}
              type="button"
              onClick={btn.onClick}
              aria-pressed={btn.isActive}
              className={`rounded-lg gap-2 p-3 h-full max-h-40 font-bold text-sm flex flex-col items-center justify-center cursor-pointer border-2 bg-accent
                ${btn.isActive
                  ? "dark:border-green-400/50 dark:text-green-400 border-green-800/60 text-green-800 fill-green-800 shadow-lg shadow-green-800/20 dark:bg-green-950/20 bg-background"
                  : "border dark:text-white/50 bg-background/50 hover:border-green-800 hover:text-green-800"
                }`}
            >
              <span>{btn.icon}</span>
              <span className="font-normal">{btn.title}</span>
            </button>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AccessibilityToolbar;