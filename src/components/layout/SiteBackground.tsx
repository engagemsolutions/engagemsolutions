'use client';

import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';

export default function SiteBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPreference = () => {
      if (preference.matches) video.pause();
      else void video.play().catch(() => setPlaying(false));
    };
    syncPreference();
    preference.addEventListener('change', syncPreference);
    return () => preference.removeEventListener('change', syncPreference);
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play().catch(() => setPlaying(false));
    else video.pause();
  };

  return <>
    <div className="site-video-background" aria-hidden="true">
      <video ref={videoRef} muted loop playsInline preload="auto" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
        <source src="/videos/site-background.mp4" type="video/mp4" />
      </video>
      <div className="site-video-overlay" />
    </div>
    <button type="button" className="background-playback" onClick={togglePlayback} aria-label={playing ? 'Pause background video' : 'Play background video'} title={playing ? 'Pause background video' : 'Play background video'}>
      {playing ? <Pause size={14} /> : <Play size={14} />}<span>Background</span>
    </button>
  </>;
}
