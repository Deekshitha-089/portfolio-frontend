import { Play } from "lucide-react";
import { useState } from "react";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-32 bg-black overflow-hidden flex items-center justify-center min-h-[500px]">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 opacity-50">
        {/* Unsplash tech video/image background */}
        {/* abstract technology network connection */}
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80" 
          alt="Tech Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
          See the code in <span className="text-[#8fdde7]">Action</span>
        </h2>
        
        {!isPlaying ? (
          <button 
            onClick={() => setIsPlaying(true)}
            className="group relative inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:scale-110 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-[#ffc2c7] rounded-full opacity-20 animate-ping" />
            <Play className="w-8 h-8 text-white ml-1 fill-white" />
          </button>
        ) : (
          <div className="w-full aspect-video bg-black/80 rounded-xl flex items-center justify-center border border-white/10">
            <p className="text-white/60">Video Player Component Placeholder</p>
          </div>
        )}
      </div>
    </section>
  );
}
