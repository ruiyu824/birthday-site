"use client";

import { useState } from "react";
import SceneOpening from "@/components/SceneOpening";
import SceneMemory from "@/components/SceneMemory";
import SceneCandle from "@/components/SceneCandle";
import StarBackground from "@/components//StarBackground";
import BackgroundMusic from "@/components/BackgroundMusic";


import { Great_Vibes } from "next/font/google";
import { div } from "three/tsl";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  const [scene, setScene] = useState(0);

  const nextScene = () => {
    setScene((prev) => Math.min(prev + 1, 7));
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      
        <BackgroundMusic />

        {scene === 0 && <SceneOpening onNext={() => setScene(1)} />}
        {scene === 1 && (<SceneMemory onNext={() => setScene(2)} />)}

        {scene === 2 && (<SceneCandle 
           onNext={() => setScene(3)} 
           onBack={() => setScene(1)}
          /> )}


        {scene === 3 && (
          <ScenePlaceholder title="Scene 4: 吹蜡烛剪影" />
        )}

      {/* 控制按钮（之后会变成交互） */}
      
    </main>
  );
}

/* 临时占位组件（后面会拆成真正 Scene 文件） */
function ScenePlaceholder({ title }: { title: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <h1 className="text-lg tracking-widest opacity-60">
        {title}
      </h1>
    </div>
  );
}
