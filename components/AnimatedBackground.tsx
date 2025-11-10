'use client';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#F7F7F7]">
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] animate-blob rounded-full bg-gradient-to-r from-blue-100 to-purple-100 mix-blend-multiply blur-3xl filter" />
        <div className="animation-delay-2000 absolute top-1/3 right-1/4 h-[500px] w-[500px] animate-blob rounded-full bg-gradient-to-r from-purple-100 to-pink-100 mix-blend-multiply blur-3xl filter" />
        <div className="animation-delay-4000 absolute bottom-1/4 left-1/3 h-[500px] w-[500px] animate-blob rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 mix-blend-multiply blur-3xl filter" />
      </div>
    </div>
  );
}
