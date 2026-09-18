'use client';

export default function SiteBackground() {
  return <div className="site-video-background" aria-hidden="true">
    <video autoPlay muted loop playsInline preload="auto" disablePictureInPicture disableRemotePlayback>
      <source src="/videos/site-background.mp4" type="video/mp4" />
    </video>
    <div className="site-video-overlay" />
  </div>;
}
