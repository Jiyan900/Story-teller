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
      transition={{ duration: 1 }}
    >
      {/* Main gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at 20% 20%, ${colors[0]}33 0%, transparent 50%),
             radial-gradient(circle at 80% 80%, ${colors[1]}33 0%, transparent 50%),
             radial-gradient(circle at 50% 50%, ${colors[2]}33 0%, transparent 50%),
             radial-gradient(circle at 30% 70%, ${colors[3]}33 0%, transparent 50%)`,
            `radial-gradient(circle at 80% 20%, ${colors[1]}33 0%, transparent 50%),
             radial-gradient(circle at 20% 80%, ${colors[2]}33 0%, transparent 50%),
             radial-gradient(circle at 70% 30%, ${colors[3]}33 0%, transparent 50%),
             radial-gradient(circle at 50% 50%, ${colors[0]}33 0%, transparent 50%)`
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />

      {/* Floating orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-xl"
          style={{
            width: Math.random() * 200 + 100,
            height: Math.random() * 200 + 100,
            backgroundColor: colors[i % colors.length] + '22',
          }}
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
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
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      ))}

      {/* Pulsing overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at 50% 50%, ${colors[0]}11 0%, transparent 70%)`,
            `radial-gradient(circle at 50% 50%, ${colors[1]}11 0%, transparent 70%)`,
            `radial-gradient(circle at 50% 50%, ${colors[2]}11 0%, transparent 70%)`,
            `radial-gradient(circle at 50% 50%, ${colors[3]}11 0%, transparent 70%)`
          ],
          scale: [1, 1.1, 1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}