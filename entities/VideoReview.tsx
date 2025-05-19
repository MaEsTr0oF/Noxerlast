import { useRef } from "react";
import "@/styles/entities/video-review.css";

interface VideoReviewProps {
  Poster_URL: string;
  Product_ID: number;
  Video_ID: number;
  Video_URL: string;
}
function VideoReview({ video }: { video: VideoReviewProps }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayOnClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch((error) => {
        console.error("Video play failed:", error);
      });
    } else {
      video.pause();
    }
  };

  return video.Video_URL ? (
    <div id="Video-review" className="video-review-block">
      <h3 className="video-review-title">Видеообзор</h3>
      <div className="video-review-wrapper" onClick={handlePlayOnClick}>
        <div className="video-review-helper-block"></div>
        <video
          ref={videoRef}
          src={video.Video_URL}
          poster={video.Poster_URL || ""}
          controls
          playsInline
          preload={video.Poster_URL ? "none" : "auto"}
          className="video-review-content"
        ></video>
      </div>
    </div>
  ) : null;
}

export default VideoReview;
