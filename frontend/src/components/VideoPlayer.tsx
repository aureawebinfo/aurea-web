// import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  src: string;
  variant?: "horizontal" | "vertical";
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
}

export default function VideoPlayer({
  src,
  variant = "horizontal",
  autoPlay = true,
  muted = false,
  loop = true,
  className = "",
}: VideoPlayerProps) {
  // proporción áurea en Tailwind
  const aspectClass =
    variant === "horizontal" ? "aspect-[1.618/1]" : "aspect-[1/1.618]";

  return (
    <div
      className={`relative w-full max-w-6xl mx-auto rounded-2xl shadow-2xl overflow-hidden ${aspectClass} ${className}`}
    >
      <ReactPlayer
        src={src}
        width="100%"
        height="100%"
        controls
        autoPlay
        playing={autoPlay}
        muted={muted}
        loop={loop}
        className="rounded-2xl"
      />
    </div>
  );
}
