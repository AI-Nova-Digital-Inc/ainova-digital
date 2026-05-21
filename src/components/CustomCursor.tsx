import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${clientX - 6}px, ${clientY - 6}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${clientX - 20}px, ${clientY - 20}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Only show on non-touch devices
  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor w-3 h-3 bg-blue-400 opacity-90"
        style={{ position: "fixed", top: 0, left: 0, zIndex: 9999, pointerEvents: "none", borderRadius: "50%" }}
      />
      <div
        ref={glowRef}
        className="custom-cursor w-10 h-10"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 9998,
          pointerEvents: "none",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, rgba(6,182,212,0.1) 50%, transparent 70%)",
        }}
      />
    </>
  );
}
