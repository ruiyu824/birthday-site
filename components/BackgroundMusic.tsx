"use client";

import { useEffect, useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 音量（可以以后调整）
    audio.volume = 0.2;

    // 第一次点击页面后播放
    const startMusic = () => {
      audio.play().catch(() => {});
      window.removeEventListener("pointerdown", startMusic);
    };

    window.addEventListener("pointerdown", startMusic);

    return () => {
      window.removeEventListener("pointerdown", startMusic);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/Disneysong.mp3"
      loop
      preload="auto"
    />
  );
}