"use client";

import { useState } from "react";
import StarBackground from "./StarBackground";
import Image from "next/image";

interface SceneCandleProps {
  onNext: () => void;
  onBack: () => void;}

export default function SceneCandle({ onNext, onBack, }: SceneCandleProps) {
  const [step, setStep] = useState(0);

  return (
    <div className="w-full h-screen relative flex items-center justify-center bg-black">
      {/* 🌌 背景层（抽离出来的） */}
      <StarBackground />

      {/* 银河 */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
            src="/image/yinhe.png"
            alt="yinhe"
            fill
            priority
            className="object-cover opacity-50"
          />
      </div>

      {/* 🎂 中间蛋糕 */} 
      <div
        className="relative z-10 translate-y-20 cursor-pointer animate-floating"
        onClick={() => {if (step === 0) {setStep(1);}
        }}
      >
          <Image
            src="/image/bcake.png"
            alt="Cake"
            width={700}
            height={700}
            priority
            className="opacity-80"
          />
      </div>
    

      {/* 🔥 火炬（点击cake后出现） */}
      <div
        onClick={() => { if (step === 1) {setStep(2);
            setTimeout(() => { setStep(3);}, 1200);}
        }}
        className={`absolute left-10 bottom-20 cursor-pointer transition-all duration-1000 ease-out
          ${ step >= 1
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75 pointer-events-none"}
        `}
      >
        
          <div className="animate-floating">
            <Image
                src="/image/torch.png"
                alt="torch"
                width={200}
                height={400}
                priority
                className="opacity-60"
            />

        {/* 🔥 火炬火焰苗 */}
          <Image
            src="/image/fire.png"
            alt="Fire"
            width={80}
            height={120}
            priority
            className={`absolute 
              transition-all 
              duration-[1200ms] 
              ease-in-out
              ${step === 1
                  ? "left-[140px] -translate-x-1/2 -top-26"
                  : ""}
              ${step >= 2
                  ? "left-[330%] top-[-180%]"
                  : ""}
            `}
            style={{
              filter: "drop-shadow(0 0 15px orange)"}}
          />
          </div>
        </div>

        {/* 点击蜡烛火焰 */}
        {step >= 3 && step < 4 && (
          <div
            onClick={() => setStep(4)}
            className="
              absolute
              z-40
              cursor-pointer
            "
            style={{
              left: "50%",
              top: "120px",
              transform: "translateX(-50%)",
              width: "120px",
              height: "160px",

              // background: "transparent",
            }}
          />
        )}


        {step >= 4 && (
            <div
              className="
                absolute
                right-10
                top-[30%]
                -translate-y-1/2
                z-50
                transition-all
                duration-1000
                animate-fadeIn
              "
            >
              <p className="text-center text-white/70 mb-4 tracking-widest">
                There are still a few words...
              </p>

              <div
                className="
                  p-3
                  rounded-3xl
                  bg-white/5
                  backdrop-blur-md
                  border
                  border-white/20
                "
              >
                <video
                  src="/video/birthdayv.mp4"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-[400px] rounded-2xl"
                />
              </div>
            </div>
          )}
        

        <button
          onClick={onBack}
          className="
            absolute
            bottom-10
            left-10
            z-50
            px-5
            py-2
            rounded-full
            bg-white/10
            backdrop-blur
            border
            border-white/20
            hover:bg-white/20
            text-white
            transition
          "
        >
          ← ✨
        </button>
    </div>
  );
}