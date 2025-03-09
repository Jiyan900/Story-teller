import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CosmicInteractiveProps {
  theme: string;
}

export function CosmicInteractive({ theme }: CosmicInteractiveProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Drawing state
    let lastX = 0;
    let lastY = 0;

    const draw = (e: MouseEvent | TouchEvent) => {
      if (!isDrawing) return;
      const ctx = canvasRef.current?.getContext('2d');
      if (!ctx) return;

      let x, y;
      if (e instanceof MouseEvent) {
        x = e.clientX;
        y = e.clientY;
      } else {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
      }

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.stroke();

      [lastX, lastY] = [x, y];
    };

    const startDrawing = (e: MouseEvent | TouchEvent) => {
      setIsDrawing(true);
      if (e instanceof MouseEvent) {
        [lastX, lastY] = [e.clientX, e.clientY];
      } else {
        [lastX, lastY] = [e.touches[0].clientX, e.touches[0].clientY];
      }
    };

    const stopDrawing = () => {
      setIsDrawing(false);
    };

    // Event listeners
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('touchstart', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('touchend', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('touchstart', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('touchmove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('touchend', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    };
  }, [isDrawing]);

  const playCosmicSound = async () => {
    if (!isPlaying) {
      // Initialize AudioContext
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }

      const audioContext = audioContextRef.current;

      // Create oscillator
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();

      // Configure oscillator
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(220, audioContext.currentTime);

      // Configure gain
      gain.gain.setValueAtTime(0.1, audioContext.currentTime);

      // Connect nodes
      oscillator.connect(gain);
      gain.connect(audioContext.destination);

      // Start oscillator
      oscillator.start();
      oscillatorRef.current = oscillator;

      // Add some cosmic effects
      const lfo = audioContext.createOscillator();
      const lfoGain = audioContext.createGain();

      lfo.frequency.setValueAtTime(0.5, audioContext.currentTime);
      lfoGain.gain.setValueAtTime(5, audioContext.currentTime);

      lfo.connect(lfoGain);
      lfoGain.connect(oscillator.frequency);
      lfo.start();

      setIsPlaying(true);
    } else {
      // Stop the sound
      if (oscillatorRef.current) {
        oscillatorRef.current.stop();
        oscillatorRef.current = null;
      }
      setIsPlaying(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-10 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Interactive drawing canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-auto"
        style={{
          background: 'transparent',
        }}
      />

      {/* Controls */}
      <div className="fixed bottom-4 left-4 flex gap-4">
        {/* Clear drawing button */}
        <motion.button
          className="bg-primary/20 hover:bg-primary/30 text-white px-4 py-2 rounded-full backdrop-blur-sm pointer-events-auto"
          onClick={() => {
            const ctx = canvasRef.current?.getContext('2d');
            if (ctx) {
              ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Clear Drawing
        </motion.button>

        {/* Sound control button */}
        <motion.button
          className="bg-primary/20 hover:bg-primary/30 text-white px-4 py-2 rounded-full backdrop-blur-sm pointer-events-auto"
          onClick={playCosmicSound}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? "Mute Cosmic Sounds" : "Play Cosmic Sounds"}
        </motion.button>
      </div>
    </motion.div>
  );
}