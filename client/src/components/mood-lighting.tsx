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
      {/* Dense starfield background with multiple layers */}
      {[...Array(3)].map((_, layerIndex) => (
        <motion.div
          key={`starfield-${layerIndex}`}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(${1 + layerIndex}px ${1 + layerIndex}px at ${[...Array(200)].map(() => 
                `${Math.random() * 100}% ${Math.random() * 100}%`
              ).join(', ')}, rgba(255, 255, 255, ${0.3 - layerIndex * 0.1}) ${2 + layerIndex}px, transparent 0)
            `,
            backgroundSize: `${400 + layerIndex * 200}px ${400 + layerIndex * 200}px`,
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 20 + layerIndex * 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Deep space nebula effects with multiple layers */}
      <motion.div
        className="absolute inset-0 opacity-40 mix-blend-screen"
        animate={{
          background: [
            `radial-gradient(circle at 30% 50%, ${colors[0]}ee 0%, transparent 70%),
             radial-gradient(circle at 70% 50%, ${colors[1]}ee 0%, transparent 70%),
             radial-gradient(circle at 50% 20%, ${colors[2]}ee 0%, transparent 70%),
             radial-gradient(circle at 50% 80%, ${colors[3]}ee 0%, transparent 70%)`,
            `radial-gradient(circle at 70% 50%, ${colors[1]}ee 0%, transparent 70%),
             radial-gradient(circle at 30% 50%, ${colors[2]}ee 0%, transparent 70%),
             radial-gradient(circle at 50% 80%, ${colors[3]}ee 0%, transparent 70%),
             radial-gradient(circle at 50% 20%, ${colors[0]}ee 0%, transparent 70%)`
          ]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Realistic cosmic dust particles with depth */}
      {[...Array(50)].map((_, i) => {
        const size = Math.random() * 4 + 1;
        const depth = Math.random();
        return (
          <motion.div
            key={`dust-${i}`}
            className="absolute rounded-full blur-sm"
            style={{
              width: size,
              height: size,
              backgroundColor: `rgba(255, 255, 255, ${0.3 + depth * 0.5})`,
              boxShadow: `0 0 ${10 + depth * 10}px ${2 + depth * 3}px rgba(255, 255, 255, ${0.3 + depth * 0.2})`,
              zIndex: Math.floor(depth * 10),
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
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 30 + depth * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
              delay: i * 0.2,
            }}
          />
        );
      })}

      {/* Cosmic energy waves with realistic glow */}
      <motion.div
        className="absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage: `
            conic-gradient(from 0deg at 50% 50%,
              ${colors[0]}00 0%,
              ${colors[1]}aa 25%,
              ${colors[2]}aa 50%,
              ${colors[3]}aa 75%,
              ${colors[0]}00 100%)
          `,
          filter: 'blur(40px)',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />

      {/* Bright stars with realistic twinkling */}
      {[...Array(20)].map((_, i) => {
        const size = Math.random() * 3 + 2;
        return (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: 'white',
              boxShadow: `0 0 ${size * 5}px ${size}px rgba(255, 255, 255, 0.8),
                         0 0 ${size * 2}px ${size / 2}px rgba(255, 255, 255, 0.6)`,
            }}
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.3, 0.8, 1.2, 1],
              opacity: [0.7, 1, 0.6, 0.9, 0.7],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        );
      })}
    </motion.div>
  );
}