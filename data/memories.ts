const totalImages = 77;

export const imageMemories = Array.from({ length: totalImages }).map((_, i) => ({
  id: i + 1,
  type: "image",
  src: `/memory/M${i + 1}.JPG`,
}));

  // 视频（手动加）
  const videoMemories = [
  { id: 78,
    type: "video",
    src: "/memory/V1.mp4",},
  { id: 79,
    type: "video",
    src: "/memory/V2.mp4",},
  { id: 80,
    type: "video",
    src: "/memory/V3.mp4",},
  ];

  // 合并
export const memories = [
  ...imageMemories,
  ...videoMemories,
];