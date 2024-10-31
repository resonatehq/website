import React from "react";
import { amarante } from "@/styles/fonts";

const VideoEmbed: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center mb-24">
      <h2 className="text-3xl md:text-5xl pb-2">
        <span className={amarante.className}>How it works</span>
      </h2>

      {/* YouTube Video Embed */}
      <div className="relative overflow-hidden pb-[56.25%] mb-8 mt-8">
        <iframe
          src="https://www.youtube.com/embed/UGVueBG3ND0"
          title="YouTube video player"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p>Subscribe to Resonate HQ and stay in the loop!</p>
      <a href="https://resonatehq.io/subscribe">
        <button className="mt-4 inline-flex items-center justify-center rounded-md px-3 py-2 bg-zinc-900 text-white hover:bg-zinc-500">
          Subscribe
        </button>
      </a>
    </div>
  );
};

export default VideoEmbed;
