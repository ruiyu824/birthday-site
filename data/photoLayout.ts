export function getPhotoLayout(index: number, total: number) {
  const angle = (index / total) * Math.PI * 2;

  const radiusX = 34 + (index % 3) * 8;
  const radiusY = 16 + (index % 3) * 6;

  // ⭐ 关键：安全边界
  const safeMarginX = 12; // 左右留白
  const safeMarginY = 15; // 上下留白

  const centerX = 50;
  const centerY = 50;

  const x = centerX + Math.cos(angle) * radiusX;
  const y = centerY + Math.sin(angle) * radiusY;

  // ⭐ clamp 限制范围（防止跑出去）
  const safeX = Math.max(safeMarginX, Math.min(100 - safeMarginX, x));
  const safeY = Math.max(safeMarginY, Math.min(100 - safeMarginY, y));

  return {
    x: safeX,
    y: safeY,

    size: 60 + (index % 4) * 8,

    rotate: (Math.random() - 0.5) * 30,
  };
}