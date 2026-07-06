
"use client";

import CrystalCake from "./CrystalCake";
import { useEffect, useRef, useState } from "react";
import StarBackground from "./StarBackground";
import SceneCandle from "./SceneCandle";

export default function SceneOpening({ onNext }: { onNext: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="relative w-full h-screen overflow-hidden cursor-pointer">
      {/* 星空背景 */}
      <StarBackground/>

      {/* 暗层氛围 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />

      {/* 中央内容 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">

        {/* 主标题（法式艺术感 + 放大） */}
        <h1
           className="text-5xl md:text-7xl text-white/85"
           style={{
             fontFamily: "Cormorant Garamond, serif",
             letterSpacing: "0.08em",
            }}
           >
            HAPPY BIRTHDAY
        </h1>

        {/* 副标题 */}
        <p className="mt-6 text-sm tracking-[0.3em] text-white/40">
          Reya to Jasmine
        </p>

        {/* 💎 钻石蛋糕（点击核心） */}
        <div
          onClick={onNext}
          className="mt-10"
        >
          <CrystalCake />
        </div>

      </div>
    </div>
  );

}