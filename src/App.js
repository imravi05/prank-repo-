import React, { useState, useRef } from 'react';

// Replace this with your GitHub raw file URL, e.g.:
// https://raw.githubusercontent.com/<user>/<repo>/<branch>/path/to/video.mp4
const GITHUB_VIDEO_URL = "https://raw.githubusercontent.com/imravi05/prank-repo-/7aa4f664dbd4b42048000904ed90dbcc2632f459/src/video/Video-67.mp4";

export default function CuteOrHorrorPrank() {
  const [isPranked, setIsPranked] = useState(false);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [afterVideo, setAfterVideo] = useState(false);

  const handleVideoEnded = () => {
    setIsMuted(false);
    setAfterVideo(true);
    if (videoRef.current) {
      try { videoRef.current.muted = false; } catch (e) {}
    }
  };

  const currentTheme = isPranked ? horrorColors : funnyColors;

  return (
    <div style={{ ...styles.container, ...currentTheme.background, ...(afterVideo ? styles.afterVideoBackground : {}) }}>
      
      {/* Dynamic Keyframes injected into the document head */}
      <style>
        {`
          /* Funny animations */
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes floatUp {
            0% { transform: translateY(105vh) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-20vh) rotate(20deg); opacity: 0.8; }
          }
          @keyframes fallAndSway {
            0% { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(105vh) translateX(50px) rotate(360deg); opacity: 0; }
          }
          
          /* Horror animations */
          @keyframes staticNoise {
            0% { background-position: 0 0; }
            100% { background-position: 100% 100%; }
          }
          @keyframes redGlitch {
            0%, 100% { color: #ff0000; text-shadow: -2px 0 #000, 2px 0 #fff; }
            50% { color: #880000; text-shadow: 2px 0 #000, -2px 0 #f00; }
          }
        `}
      </style>

      {/* Floating Balloons and Falling Petals - Only rendered when not pranked */}
     {/* Floating Balloons and Falling Petals - Only rendered when not pranked */}
{!isPranked && (
  <>
    {/* Balloons */}
    {/* <div style={styles.balloonContainer}>
      <div style={{ ...styles.balloon, left: '10%', animationDelay: '0s', backgroundColor: '#f43f5e' }}>🎈</div>
      <div style={{ ...styles.balloon, left: '25%', animationDelay: '1.5s', backgroundColor: '#3b82f6' }}>🎈</div>
      <div style={{ ...styles.balloon, left: '45%', animationDelay: '0.5s', backgroundColor: '#10b981' }}>🎈</div>
      <div style={{ ...styles.balloon, left: '65%', animationDelay: '2s', backgroundColor: '#eab308' }}>🎈</div>
      <div style={{ ...styles.balloon, left: '80%', animationDelay: '1s', backgroundColor: '#a855f7' }}>🎈</div>
    </div> */}

    {/* Falling Petals */}
    <div style={styles.petalContainer}>
      <div style={{ ...styles.petal, left: '5%', animationDelay: '0s', animationDuration: '6s' }}>🌸</div>
      <div style={{ ...styles.petal, left: '20%', animationDelay: '0.7s', animationDuration: '8s' }}>🌸</div>
      <div style={{ ...styles.petal, left: '40%', animationDelay: '0.3s', animationDuration: '7s' }}>🌸</div>
      <div style={{ ...styles.petal, left: '60%', animationDelay: '1.2s', animationDuration: '9s' }}>🌸</div>
      <div style={{ ...styles.petal, left: '75%', animationDelay: '0.5s', animationDuration: '6s' }}>🌸</div>
      <div style={{ ...styles.petal, left: '90%', animationDelay: '1s', animationDuration: '8s' }}>🌸</div>
    </div>
  </>
)}

      {!isPranked ? (
        // * * * FUNNY BEFORE SCREEN * * *
        <div style={styles.card}>
          <div style={styles.funnyIcon}>🎁</div>
          <h1 style={{ ...styles.title, ...currentTheme.titleFont }}>
            SUPER HAPPY FUN GIFT!
          </h1>
          <p style={{ ...styles.subtitle, ...currentTheme.subFont }}>
            Click the big button below and get a FREE surprise cute kitten or puppy picture instantly! 
            Do you love smiles? We do! Yay!
          </p>
          <button 
            style={{ ...styles.button, ...currentTheme.buttonColor }} 
            onClick={() => setIsPranked(true)}
          >
            Claim Gift Now! ✨
          </button>
        </div>
      ) : (
        // * * * HORROR AFTER SCREEN * * *
        <div style={styles.videoContainer}>
          <div style={{ ...styles.horrorStaticOverlay, ...(afterVideo ? styles.horrorOverlayAfter : {}) }}></div>
          <h1 style={{ ...styles.horrorTitle, ...currentTheme.titleFont }}>
            A GIFT FROM RAVI......
          </h1>
          <video
            ref={videoRef}
            style={{ ...styles.video, ...(afterVideo ? styles.videoAfter : {}) }}
            src={GITHUB_VIDEO_URL}
            title="Surprise"
            controls
            autoPlay
            playsInline
            muted={isMuted}
            onEnded={handleVideoEnded}
          />
          
          <button 
            style={styles.resetButton} 
            onClick={() => setIsPranked(false)}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

// --- Dynamic Color and Font Definitions ---

const funnyColors = {
  background: { 
    backgroundColor: '#fffbeb',
    backgroundImage: 'radial-gradient(#ec4899 0.5px, transparent 0.5px), radial-gradient(#ec4899 0.5px, #fffbeb 0.5px)',
    backgroundSize: '20px 20px',
  },
  titleFont: { 
    color: '#be185d',
    fontFamily: '"Bubblegum Sans", "Comic Sans MS", cursive', 
    textTransform: 'none', 
    letterSpacing: 'normal' 
  },
  subFont: { 
    color: '#1f2937',
    fontFamily: '"Comic Sans MS", fantasy' 
  },
  buttonColor: { 
    backgroundColor: '#ec4899',
    animation: 'bounce 1s infinite', 
    borderRadius: '50px',
  },
};

const horrorColors = {
  background: { 
    backgroundColor: '#000000',
    transition: 'background-color 0.1s ease-in',
  },
  titleFont: { 
    color: '#ff0000',
    fontFamily: '"Creepster", "Courier New", monospace', 
    textTransform: 'uppercase', 
    letterSpacing: '4px',
    animation: 'redGlitch 0.2s infinite',
  },
  buttonColor: { display: 'none' },
};

// --- Static CSS ---

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    overflow: 'hidden',
    position: 'relative',
    transition: 'background-image 0.1s ease',
  },
  balloonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: 1,
  },
  balloon: {
    position: 'absolute',
    fontSize: '50px',
    bottom: '-100px',
    animation: 'floatUp 8s infinite linear',
    borderRadius: '50%',
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  petalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    pointerEvents: 'none',
    zIndex: 1,
  },
  petal: {
    position: 'absolute',
    fontSize: '30px',
    top: '-50px',
    animation: 'fallAndSway infinite linear',
  },
  card: {
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '40px',
    borderRadius: '24px',
    border: '4px solid #f9a8d4',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    maxWidth: '450px',
    zIndex: 2,
  },
  funnyIcon: {
    fontSize: '60px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  subtitle: {
    fontSize: '16px',
    marginBottom: '30px',
    lineHeight: '1.5',
  },
  button: {
    color: '#ffffff',
    border: 'none',
    padding: '16px 36px',
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.1s, background-color 0.2s',
  },
  videoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '900px',
    zIndex: 10,
  },
  horrorTitle: {
    fontSize: '48px',
    marginBottom: '30px',
  },
  horrorStaticOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E")`,
    animation: 'staticNoise 0.2s infinite',
    pointerEvents: 'none',
    zIndex: 5,
  },
  video: {
    width: '100%',
    aspectRatio: '16/9',
    border: '2px solid #800',
    boxShadow: '0 0 100px rgba(255, 0, 0, 0.4)',
  },
  resetButton: {
    marginTop: '30px',
    background: 'none',
    border: 'none',
    color: '#333',
    cursor: 'pointer',
    fontSize: '12px',
  },
};