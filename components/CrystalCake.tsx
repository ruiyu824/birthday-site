"use client";

interface CrystalCakeProps {
  onClick?: () => void;
}


const particles = [
  { x: 20, y: 30, color: "#6EE7B7", size: 3, duration: 4 },
  { x: 35, y: 60, color: "#D8B4FE", size: 4, duration: 5 },
  { x: 60, y: 25, color: "#6EE7B7", size: 2.5, duration: 6 },
  { x: 75, y: 50, color: "#D8B4FE", size: 3.5, duration: 4.5 },
  { x: 50, y: 70, color: "#6EE7B7", size: 4, duration: 5.2 },
  { x: 80, y: 35, color: "#D8B4FE", size: 2.8, duration: 6.2 },
  { x: 30, y: 80, color: "#6EE7B7", size: 3.2, duration: 4.8 },
  { x: 65, y: 65, color: "#D8B4FE", size: 4.2, duration: 5.5 },
  { x: 45, y: 20, color: "#6EE7B7", size: 3, duration: 4.3 },
  { x: 55, y: 45, color: "#D8B4FE", size: 2.5, duration: 6.1 },
];

export default function CrystalCake({ onClick }: CrystalCakeProps) {
  return (
    <div
      onClick={onClick}
      className="
        relative
        w-[340px]
        h-[430px]
        cursor-pointer
        select-none
        transition-all
        duration-700
        hover:scale-[1.03]
      "
    >
      
      {/* 🌌 背景呼吸光（紫+绿） */}
      <div
        className="
          absolute inset-0
          rounded-full
          blur-3xl
          opacity-70
          animate-pulse
        "
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(34,197,94,0.18) 50%, transparent 75%)",
        }}
      />

      {/* ✨ 星尘粒子（稳定版） */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-pulse"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: p.color,
            opacity: 0.8,
            filter: "blur(0.5px)",
            animationDuration: `${p.duration}s`,
            boxShadow: `0 0 6px ${p.color}`,
          }}
        />
      ))}

      {/* 🕯️ 蜡烛 */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0">
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-3 w-8 h-8 rounded-full blur-xl opacity-70 animate-pulse"
          style={{
            background:
              "radial-gradient(circle,#7CFFB2,#B26DFF55,transparent)",
          }}
        />

        <div
          className="relative w-5 h-28 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom,#e9d5ff,#9f7aea,#6d28d9)",
            boxShadow: "0 0 25px rgba(168,85,247,.6)",
          }}
        />

        <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-[3px] h-3 bg-black rounded-full" />
      </div>

      {/* 💎 上层蛋糕 */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 top-24
          w-44 h-24 rounded-[28px]
          border border-white/20
        "
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(180,120,255,0.20), rgba(90,60,200,0.30))",
          backdropFilter: "blur(14px)",
          boxShadow:
            "0 0 35px rgba(160,90,255,.35), inset 0 0 25px rgba(255,255,255,.12)",
        }}
      />

      {/* 💎 下层蛋糕（稍微更大+更亮一点） */}
      <div
        className="
          absolute left-1/2 -translate-x-1/2 bottom-14
          w-72 h-36 rounded-[38px]
          border border-white/20
        "
        style={{
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.10), rgba(160,90,255,0.22), rgba(70,40,160,0.40))",
          backdropFilter: "blur(18px)",
          boxShadow:
            "0 0 80px rgba(160,90,255,.35), inset 0 0 45px rgba(255,255,255,.12)",
        }}
      />

      {/* 💚 内部魔法核心（绿色+紫色能量） */}
      <div
        className="
          absolute left-1/2 bottom-20 -translate-x-1/2
          w-48 h-20
          blur-2xl opacity-80
          animate-pulse
        "
        style={{
          background:
            "radial-gradient(circle, rgba(60,255,180,.85), rgba(168,85,247,.5), transparent)",
        }}
      />

      {/* 🪐 圆弧Green Saturn Ring - FRONT SIDE (fake occlusion) */}
      <div
        className="absolute"
        style={{
          left: "50%",
          top: "50%",
          width: "1000px",
          height: "700px",
          borderRadius: "50%",
          transform: "translate(-50%, -50%) rotateX(73deg) rotateZ(-40deg)",
          background: "radial-gradient(circle, transparent 0 58%, rgba(0,0,0,0.0) 60%, rgba(0,0,0,0.0) 60%, rgba(110,231,183,0.9) 65%, rgba(110,231,183,0.25) 70%, transparent 75%)",
          filter: "blur(0.2px)",
          boxShadow: "0 0 80px rgba(91, 165, 135, 0.25)",
          zIndex: 1,
          pointerEvents: "none",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 70%, black 100%)",
        }}
      />


      {/* 🌑 阴影（让它“浮起来”） */}
      <div
        className="
          absolute bottom-4 left-1/2 -translate-x-1/2
          w-56 h-10
          rounded-full blur-xl
        "
        style={{
          background: "rgba(0,0,0,0.45)",
        }}
      />
    </div>
  );
}

