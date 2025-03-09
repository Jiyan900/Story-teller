import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MoodLightingProps {
  theme: string;
}

const themeColors = {
  Adventure: ['#0B0B3B', '#4A148C', '#6200EA', '#FFD700'],  // Deep Space Purple with Gold
  Bedtime: ['#1A237E', '#311B92', '#4527A0', '#B39DDB'],    // Night Sky Blues
  Friendship: ['#4A148C', '#6A1B9A', '#8E24AA', '#E1BEE7'], // Cosmic Purple
  Kindness: ['#1A237E', '#0D47A1', '#1565C0', '#90CAF9'],   // Nebula Blue
  Sharing: ['#311B92', '#4527A0', '#512DA8', '#D1C4E9'],    // Galaxy Purple
  Courage: ['#0B0B3B', '#1A237E', '#283593', '#FFD700']     // Deep Space with Gold
};

export function MoodLighting({ theme }: MoodLightingProps) {
  const [colors, setColors] = useState(themeColors[theme as keyof typeof themeColors] || themeColors.Bedtime);

  useEffect(() => {
    setColors(themeColors[theme as keyof typeof themeColors] || themeColors.Bedtime);
  }, [theme]);

  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {/* Starfield background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at ${[...Array(100)].map(() => 
              `${Math.random() * 100}% ${Math.random() * 100}%`
            ).join(', ')}, rgba(255, 255, 255, 0.3) 2px, transparent 0)
          `,
          backgroundSize: '400px 400px',
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Nebula effects */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{
          background: [
            `radial-gradient(circle at 30% 50%, ${colors[0]}dd 0%, transparent 50%),
             radial-gradient(circle at 70% 50%, ${colors[1]}dd 0%, transparent 50%),
             radial-gradient(circle at 50% 20%, ${colors[2]}dd 0%, transparent 50%),
             radial-gradient(circle at 50% 80%, ${colors[3]}dd 0%, transparent 50%)`,
            `radial-gradient(circle at 70% 50%, ${colors[1]}dd 0%, transparent 50%),
             radial-gradient(circle at 30% 50%, ${colors[2]}dd 0%, transparent 50%),
             radial-gradient(circle at 50% 80%, ${colors[3]}dd 0%, transparent 50%),
             radial-gradient(circle at 50% 20%, ${colors[0]}dd 0%, transparent 50%)`
          ]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />

      {/* Cosmic dust particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.3)',
          }}
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: 0,
          }}
          animate={{
            x: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`
            ],
            y: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`
            ],
            scale: [1, 2, 1],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 20 + i,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Cosmic energy waves */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            conic-gradient(from 0deg at 50% 50%,
              ${colors[0]}00 0%,
              ${colors[1]}88 25%,
              ${colors[2]}88 50%,
              ${colors[3]}88 75%,
              ${colors[0]}00 100%)
          `,
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />

      {/* Larger bright stars */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            backgroundColor: 'white',
            boxShadow: '0 0 15px 5px rgba(255, 255, 255, 0.5)',
          }}
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
    </motion.div>
  );
}