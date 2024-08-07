// src/components/Main.js
import React from "react";

const Main = () => {
  return (
    <main className="relative h-screen flex items-center justify-center text-center">
      {/* 背景動画 */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/background.mp4"
        autoPlay
        loop
        muted
      />
      {/* コンテンツ */}
      <div className="relative z-10">
        <h2 className="text-5xl font-bold mb-4 text-white">
          Indulge in Culinary Elegance
        </h2>
        <p className="text-xl text-white">
          Discover a gourmet experience like no other.
        </p>
      </div>
      {/* オーバーレイ */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </main>
  );
};

export default Main;
