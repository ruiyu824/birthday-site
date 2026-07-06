"use client";

import { useState } from "react";
import StarBackground from "./StarBackground";
import Image from "next/image";
import FloatingPhoto from "./FloatingPhoto";
import { memories } from "@/data/memories";
import { getPhotoLayout } from "@/data/photoLayout";
import { memoryTexts } from "@/data/memoryTexts";


interface SceneMemoryProps {onNext: () => void;}

export default function SceneMemory({onNext,}: SceneMemoryProps) {
  const pageSize = 20;
  const [page, setPage] = useState(0);
  const startIndex = page * pageSize;
  const [hoverText, setHoverText] = useState("");
  const currentPhotos = memories.slice(startIndex,startIndex + pageSize);

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* 星空 */}
      <StarBackground />

      {/* 两个女孩剪影 */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">

        <Image
          src="/image/BG2.JPG"
          alt="Silhouette"
          fill
          priority
          className="opacity-70"
        />

      </div>
    
      {/* 浮动照片 */}
      <div className="absolute inset-0 z-20">
        {currentPhotos.map((item, index) => {
          const layout = getPhotoLayout(index, currentPhotos.length);

          if (item.type === "video") {
            return (
              <video
                key={item.id}
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="absolute object-cover rounded-2xl border border-white/20 shadow-2xl"
                style={{
                  width: layout.size,
                  height: layout.size * 1.2,
                  left: `${layout.x}%`,
                  top: `${layout.y}%`,
                  transform: "translate(-50%, -50%)",}}
              />
            );
          }

          return (
            <FloatingPhoto
              key={item.id}
              src={item.src}
              x={layout.x}
              y={layout.y}
              size={layout.size}
              rotate={layout.rotate}
              index={index}

              onMouseEnter={() => setHoverText(memoryTexts[item.id] ?? "") }
              onMouseLeave={() => setHoverText("") }
            />
          );
        })}
      </div>

      <button
        onClick={() => {
          if ((page + 1) * pageSize < memories.length) {
            setPage(page + 1);
          } else {onNext();
          }
        }}
        className="
          absolute bottom-10 right-10 z-50
          px-5 py-2
          rounded-full
          bg-white/10 backdrop-blur
          border
          border-white/20
          hover:bg-white/20
          transition
        "
      >
        ✨ →
      </button>
      
      {page > 0 && (
      <button
        onClick={() => setPage(page - 1)}
        className="
          absolute bottom-10 left-10 z-50 px-5 py-2 rounded-full
          bg-white/10 backdrop-blur border border-white/20
          text-white"
      >
        ← ✨
      </button>
    )}

      {hoverText && (
        <div
          className="
            absolute top-12 left-12 z-50
            pointer-events-none animate-fadeIn
          "
        >
          <p
            className="
              max-w-md text-left text-xl text-white/85
              font-medium leading-loose tracking-wide "
            style={{
              fontFamily: '"LXGW WenKai", "Noto Sans SC", sans-serif',}}
          >
            {hoverText}
          </p>
        </div>
      )}

    </div>
  );
}
