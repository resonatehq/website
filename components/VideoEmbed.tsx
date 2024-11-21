import React from "react";

const VideoEmbed: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center mb-24">
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
      <p className="text-2xl mt-12">
        Subscribe to Resonate HQ and stay in the loop!
      </p>
      <a href="https://resonatehq.io/subscribe">
        <button className="mt-12 inline-flex items-center justify-center rounded-md text-xl px-6 py-2 bg-stone-900 text-white hover:bg-stone-700">
          Subscribe
        </button>
      </a>
    </div>
  );
};

export default VideoEmbed;
