import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MoodLightingProps {
  theme: string;
}

const themeColors = {
  Adventure: ['#ffd700', '#ff6b6b', '#4facfe', '#00f2fe'],  // Gold, Coral, Blue, Cyan
  Bedtime: ['#2d3436', '#6c5ce7', '#0984e3', '#81ecec'],    // Dark, Purple, Deep Blue, Light Blue
  Friendship: ['#ff9a9e', '#fad0c4', '#a18cd1', '#fbc2eb'], // Pink, Peach, Lavender, Light Pink
  Kindness: ['#96e6a1', '#d4fc79', '#a8edea', '#d0f7c3'],   // Green, Light Green, Mint, Soft Green
  Sharing: ['#fddb92', '#d1fdff', '#b721ff', '#21d4fd'],    // Yellow, Light Blue, Purple, Cyan
  Courage: ['#ff9a9e', '#fecfef', '#fa709a', '#fee140']     // Pink, Light Pink, Deep Pink, Yellow
};

export function MoodLighting({ theme }: MoodLightingProps) {
  const [colors, setColors] = useState(themeColors[theme as keyof typeof themeColors] || themeColors.Bedtime);

  useEffect(() => {
    setColors(themeColors[theme as keyof typeof themeColors] || themeColors.Bedtime);
  }, [theme]);

  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at 20% 20%, ${colors[0]}44 0%, transparent 60%),
             radial-gradient(circle at 80% 80%, ${colors[1]}44 0%, transparent 60%),
             radial-gradient(circle at 50% 50%, ${colors[2]}44 0%, transparent 60%),
             radial-gradient(circle at 30% 70%, ${colors[3]}44 0%, transparent 60%)`,
            `radial-gradient(circle at 80% 20%, ${colors[1]}44 0%, transparent 60%),
             radial-gradient(circle at 20% 80%, ${colors[2]}44 0%, transparent 60%),
             radial-gradient(circle at 70% 30%, ${colors[3]}44 0%, transparent 60%),
             radial-gradient(circle at 50% 50%, ${colors[0]}44 0%, transparent 60%)`
          ]
        }}
        transition={{
          duration: 30, // Increased duration
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Shimmering effect layer */}
      <motion.div
        className="absolute inset-0 mix-blend-overlay"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, ${colors[0]}22 0%, transparent 50%),
            radial-gradient(circle at 0% 0%, ${colors[1]}22 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, ${colors[2]}22 0%, transparent 50%)
          `,
          backgroundSize: '200px 200px',
        }}
        animate={{
          scale: [1, 1.05, 1], // More subtle scale
          opacity: [0.4, 0.6, 0.4], // More subtle opacity change
        }}
        transition={{
          duration: 15, // Longer duration
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Dynamic floating orbs */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-2xl"
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            backgroundColor: colors[i % colors.length] + '33',
            mixBlendMode: 'screen',
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
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`
            ],
            y: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`
            ],
            scale: [1, 1.1, 0.9, 1.2, 1], // More subtle scale changes
            opacity: [0.3, 0.5, 0.3, 0.4, 0.3], // More subtle opacity changes
          }}
          transition={{
            duration: 35 + i * 3, // Much longer duration for orbs
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.5, // Longer delay between orbs
          }}
        />
      ))}

      {/* Interactive motion effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundImage: [
            `radial-gradient(circle at 50% 50%, ${colors[0]}22 0%, transparent 70%)`,
            `radial-gradient(circle at 50% 50%, ${colors[1]}22 0%, transparent 70%)`,
            `radial-gradient(circle at 50% 50%, ${colors[2]}22 0%, transparent 70%)`,
            `radial-gradient(circle at 50% 50%, ${colors[3]}22 0%, transparent 70%)`
          ],
          scale: [1, 1.05, 0.95, 1.08, 1], // More subtle scale changes
          rotate: [0, 2, -2, 1, 0], // More subtle rotation
        }}
        transition={{
          duration: 40, // Much longer duration
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />

      {/* Twinkling stars effect for certain themes */}
      {(theme === 'Adventure' || theme === 'Bedtime') && (
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, white 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1], // More subtle opacity changes
            scale: [1, 1.05, 1], // More subtle scale changes
          }}
          transition={{
            duration: 8, // Longer duration
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      )}
    </motion.div>
  );
}