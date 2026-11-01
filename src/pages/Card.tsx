import { Icon } from "@iconify/react";
import { useState } from "react";

export const Card = ({ url, layout }) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const flexible = layout === "flexible";
  const wrapperClass = [
    "relative group",
    flexible ? "mb-px break-inside-avoid" : "aspect-video",
    flexible && !loaded ? "aspect-[3/4]" : "",
  ].join(" ");

  async function downloadImage(imageUrl: string, fileName = "wallpaper.jpg") {
    try {
      // Fetch image data
      const response = await fetch(imageUrl);
      if (!response.ok) throw new Error("Network response was not ok.");

      // Convert response to a blob (Binary Large Object)
      const blob = await response.blob();

      // Create a temporary local URL for the blob
      const objectURL = URL.createObjectURL(blob);

      // Createa hidden <a> element
      const anchor = document.createElement("a");
      anchor.style.display = "none";
      anchor.href = objectURL;
      anchor.download = fileName;

      // Append to DOM -> trigger click -> clean up
      document.body.appendChild(anchor);
      anchor.click();

      // Cleanup temporary resources
      document.body.removeChild(anchor);
      URL.revokeObjectURL(objectURL);
    } catch (error) {
      console.error("Image download failed:", error);
    }
  }

  return (
    <div className={wrapperClass}>
      {!loaded && !failed && (
        <div className="absolute inset-0 bg-bg2 animate-pulse" />
      )}

      {failed && (
        <div className="absolute inset-0 bg-bg2 flex items-center justify-center text-base1 text-sm">
          Oh crap this one failed 😭
        </div>
      )}

      <div
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%)",
          willChange: "opacity",
        }}
        className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
      />

      <img
        src={url}
        alt=""
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={`w-full border-2 border-transparent group-hover:border-white/20 ${
          flexible ? "h-auto" : "h-full object-cover"
        } ${failed ? "hidden" : ""}`}
      />

      <div className="absolute inset-0 items-end p-4 flex group-hover:opacity-100 opacity-0 bg-transparent">
        <button
          onClick={() => downloadImage(url)}
          className="bg-bg hover:scale-105 cursor-pointer hover:text-highlight2 transition duration-200 rounded-full flex items-center justify-center p-2 text-base1"
        >
          <Icon icon="akar-icons:download" className="size-4.5" />
        </button>
      </div>
    </div>
  );
};
