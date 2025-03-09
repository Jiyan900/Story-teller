import { motion, AnimatePresence } from "framer-motion";
import { StoryCard } from "@/components/ui/story-card";
import { MoodLighting } from "@/components/mood-lighting";
import { type Story } from "@shared/schema";
import { Star, Moon, Cloud, Sun, Sparkles, Stars } from "lucide-react";

interface StoryDisplayProps {
  story: Story;
}

const floatingAnimation = {
  y: ["-10%", "10%"],
  transition: {
    duration: 4,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse" as const,
  },
};

const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    ease: "linear",
    repeat: Infinity,
  },
};

const sparkleAnimation = {
  scale: [0.8, 1.2, 0.8],
  opacity: [0.3, 1, 0.3],
  transition: {
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

const pageTransition = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    }
  }
};

function DecoElement({ 
  Icon, 
  className, 
  animate,
  size = 24,
  color = "currentColor",
  delay = 0
}: { 
  Icon: typeof Star;
  className: string;
  animate: typeof floatingAnimation | typeof rotateAnimation | typeof sparkleAnimation;
  size?: number;
  color?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={animate}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay,
        duration: 0.5,
        ease: "easeOut"
      }}
    >
      <Icon size={size} className="text-primary/40" color={color} />
    </motion.div>
  );
}

export function StoryDisplay({ story }: StoryDisplayProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        className="relative w-full max-w-4xl mx-auto"
        {...pageTransition}
      >
        {/* Background effects */}
        <MoodLighting theme={story.theme} />

        {/* Decorative elements with staggered animations */}
        <DecoElement
          Icon={Star}
          className="top-[-20px] left-[10%]"
          animate={floatingAnimation}
          size={32}
          delay={0.2}
        />
        <DecoElement
          Icon={Stars}
          className="top-[10%] right-[-20px]"
          animate={sparkleAnimation}
          size={28}
          delay={0.4}
        />
        <DecoElement
          Icon={Moon}
          className="top-[20%] right-[-40px]"
          animate={rotateAnimation}
          size={40}
          delay={0.6}
        />
        <DecoElement
          Icon={Cloud}
          className="bottom-[30%] left-[-30px]"
          animate={floatingAnimation}
          size={36}
          delay={0.8}
        />
        <DecoElement
          Icon={Sun}
          className="top-[40%] left-[-20px]"
          animate={rotateAnimation}
          size={28}
          delay={1.0}
        />
        <DecoElement
          Icon={Sparkles}
          className="bottom-[20%] right-[-20px]"
          animate={sparkleAnimation}
          size={24}
          delay={1.2}
        />
        <DecoElement
          Icon={Star}
          className="bottom-[-10px] right-[20%]"
          animate={floatingAnimation}
          size={24}
          delay={1.4}
        />

        {/* Main story content */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut"
          }}
        >
          <StoryCard story={story} />
        </motion.div>

        {/* Animated background decoration */}
        <motion.div 
          className="absolute inset-0 -z-10 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 50%, var(--primary) 1px, transparent 1px),
                radial-gradient(circle at 0% 0%, var(--primary) 2px, transparent 2px),
                radial-gradient(circle at 100% 100%, var(--primary) 2px, transparent 2px)
              `,
              backgroundSize: '50px 50px, 100px 100px, 70px 70px',
            }}
            animate={{
              backgroundPosition: [
                '0 0, 0 0, 0 0',
                '25px 25px, 50px 50px, -35px -35px'
              ]
            }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}