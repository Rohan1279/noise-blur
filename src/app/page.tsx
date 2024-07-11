"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [blurValue, setBlurValue] = useState("10px");
  const [baseFrequency, setBaseFrequency] = useState("0.65");
  const [blendMode, setBlendMode] = useState("screen"); // Step 2: useState for blend mode

  // Step 1: Array of blend modes
  const blendModes = [
    "none",
    "normal",
    "multiply",
    "screen",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity",
  ];

  console.log(baseFrequency);

  return (
    <main
      style={{
        backgroundImage: `url("/background.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex min-h-screen flex-col items-center justify-evenly "
    >
      <h1 className="text-7xl font-extrabold">NOISE BLUR</h1>
      <div
        style={{
          backdropFilter: `blur(${blurValue})`,
          WebkitBackdropFilter: `blur(${blurValue})`,
        }}
        className={`size-96 rounded-xl  overflow-hidden `}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="size-96">
          <filter id="noise" x="0" y="0">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={baseFrequency}
              numOctaves="3"
              stitchTiles="stitch"
            />
            {blendMode !== "none" && (
              <feBlend
                mode={blendMode}
                in="SourceGraphic"
                className="transition-all"
              />
            )}

            {/* Updated to use blendMode state */}
          </filter>
          <rect className="size-96" filter="url(#noise)" opacity="0.5" />
        </svg>
      </div>
      <div className="flex-col justify-between items-center w-[570px] h-32  text-left space-y-3">
        {/* Dropdown for selecting blend mode */}
        <div className="flex justify-center gap-x-3 text-black  w-fit">
          <span className="text-white">Blend Mode</span>
          <select
            value={blendMode}
            onChange={(e) => setBlendMode(e.target.value)}
            className="w-96 rounded-md"
          >
            {blendModes.map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>
        </div>
        {/* Existing range sliders for blur level and base frequency */}
        <div className="flex justify-center gap-x-3  w-fit">
          <span>Blur Level</span>
          <input
            type="range"
            min="10"
            max="100"
            defaultValue="50"
            className="w-96"
            onChange={(e) => setBlurValue(`${e.target.value}px`)}
          />
          <span>{blurValue}</span>
        </div>
        <div className="flex justify-center gap-x-3  w-fit">
          <span>Base Frequency</span>
          <input
            type="range"
            role="slider"
            min="0"
            max="10"
            defaultValue="0.65"
            step="0.01"
            className="w-96"
            onChange={(e) => setBaseFrequency(`${e.target.value}`)}
          />
          <span>{baseFrequency}</span>
        </div>
      </div>
    </main>
  );
}
