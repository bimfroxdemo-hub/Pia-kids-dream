import { useEffect, useState } from "react";
import flower from "../assets/flower.png";

function BackgroundShapes() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const flowers = [
    { top: "15%", left: "10%", size: 120, rotate: -10 },
    { top: "70%", left: "80%", size: 130, rotate: 20 },
    { top: "50%", left: "40%", size: 90, rotate: 0 },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* 🌈 SOFT BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-pink-50 opacity-60" />

      {/* 💫 BLOBS */}
      <div
        className="absolute top-20 left-1/3 w-[300px] h-[300px] bg-pink-200 blur-3xl opacity-20"
        style={{ transform: `translate(${mouse.x}px, ${mouse.y}px)` }}
      />

      <div
        className="absolute bottom-10 right-1/4 w-[250px] h-[250px] bg-purple-200 blur-3xl opacity-20"
        style={{ transform: `translate(${-mouse.x}px, ${-mouse.y}px)` }}
      />

      {/* 🌸 FLOWERS */}
      {flowers.map((f, i) => (
        <img
          key={i}
          src={flower}
          className="absolute opacity-30"
          style={{
            top: f.top,
            left: f.left,
            width: `${f.size}px`,
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundShapes;