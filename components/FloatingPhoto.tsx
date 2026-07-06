"use client";

import Image from "next/image";

interface FloatingPhotoProps {
  src: string;
  x: number;
  y: number;
  size: number;
  rotate: number;
  index?: number;

  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function FloatingPhoto({
  src,
  x,
  y,
  size,
  rotate,
  index = 0,
  onMouseEnter,
  onMouseLeave,
}: FloatingPhotoProps) {
    // ⭐ 稳定随机（不会每次刷新变）
    const stableSeed = Math.sin(index * 999) * 10;
    // ⭐ 轻微方向扰动（左/右倾）
    const finalRotate = rotate + stableSeed;
    // ⭐ 大小分层（拉开差距！关键）
    const scaleFactor =
        index % 7 === 0 ? 1.35 :
        index % 5 === 0 ? 1.15 :
        index % 3 === 0 ? 0.95 :
        0.75;
    const finalSize = size * scaleFactor;

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute transition-all duration-500 hover:scale-300 hover:z-2 cursor-pointer"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(-35%, -30%) rotate(${finalRotate}deg)`,
      }}
    >

    <div
        className="animate-float-slow"
    >
      <div
        className=" relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl"
        style={{
          width: finalSize,
          filter:'brightness(0.78) contrast(1.08) saturate(0.85)',
          boxShadow:
            "0 15px 35px rgba(0,0,0,0.35)",
          animationDelay: `${(index % 11) * 0.3}s`,
        }}
      >
        <Image
          src={src}
          alt=""
          width={500}
          height={300}
          className="object-cover"
        />

        {/* 🌙 轻微遮罩（提升高级感的关键） */}
        <div className="absolute inset-0 bg-black/6" />
      </div>
    </div>
    </div>
  );
}