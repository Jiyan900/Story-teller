import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MoodLightingProps {
  theme: string;
}

const themeColors = {
  Adventure: ['#ffd700', '#ff6b6b', '#4facfe'],  // Gold, Coral, Blue
  Bedtime: ['#2d3436', '#6c5ce7', '#0984e3'],    // Dark, Purple, Deep Blue
  Friendship: ['#ff9a9e', '#fad0c4', '#a18cd1'], // Pink, Peach, Lavender
  Kindness: ['#96e6a1', '#d4fc79', '#a8edea'],   // Green, Light Green, Mint
  Sharing: ['#fddb92', '#d1fdff', '#b721ff'],    // Yellow, Light Blue, Purple
  Courage: ['#ff9a9e', '#fecfef', '#fa709a']     // Pink, Light Pink, Deep Pink
};

export function MoodLighting({ theme }: MoodLightingProps) {
  const [colors, setColors] = useState(themeColors[theme as keyof typeof themeColors] || themeColors.Bedtime);

  useEffect(() => {
    setColors(themeColors[theme as keyof typeof themeColors] || themeColors.Bedtime);
  }, [theme]);

  return (
    <motion.div
      className="fixed inset-0 -z-10 opacity-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 2 }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `radial-gradient(circle at 20% 20%, ${colors[0]}33 0%, transparent 50%),
             radial-gradient(circle at 80% 80%, ${colors[1]}33 0%, transparent 50%),
             radial-gradient(circle at 50% 50%, ${colors[2]}33 0%, transparent 50%)`,
            `radial-gradient(circle at 80% 20%, ${colors[1]}33 0%, transparent 50%),
             radial-gradient(circle at 20% 80%, ${colors[2]}33 0%, transparent 50%),
             radial-gradient(circle at 50% 50%, ${colors[0]}33 0%, transparent 50%)`
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
    </motion.div>
  );
}
