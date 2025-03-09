import { motion, AnimatePresence } from "framer-motion";
import { StoryCard } from "@/components/ui/story-card";
import { type Story } from "@shared/schema";
import { Star, Moon, Cloud, Sun } from "lucide-react";

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

const fadeInScale = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.5 },
};

function DecoElement({ 
  Icon, 
  className, 
  animate,
  size = 24,
  color = "currentColor" 
}: { 
  Icon: typeof Star;
  className: string;
  animate: typeof floatingAnimation | typeof rotateAnimation;
  size?: number;
  color?: string;
}) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={animate}
    >
      <Icon size={size} className="text-primary/40" color={color} />
    </motion.div>
  );
}

export function StoryDisplay({ story }: StoryDisplayProps) {
  return (
    <AnimatePresence>
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Decorative elements */}
        <DecoElement
          Icon={Star}
          className="top-[-20px] left-[10%]"
          animate={floatingAnimation}
          size={32}
        />
        <DecoElement
          Icon={Moon}
          className="top-[20%] right-[-40px]"
          animate={rotateAnimation}
          size={40}
        />
        <DecoElement
          Icon={Cloud}
          className="bottom-[30%] left-[-30px]"
          animate={floatingAnimation}
          size={36}
        />
        <DecoElement
          Icon={Sun}
          className="top-[40%] left-[-20px]"
          animate={rotateAnimation}
          size={28}
        />
        <DecoElement
          Icon={Star}
          className="bottom-[-10px] right-[20%]"
          animate={floatingAnimation}
          size={24}
        />

        {/* Main story content */}
        <motion.div
          {...fadeInScale}
          className="relative z-10"
        >
          <StoryCard story={story} />
        </motion.div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
          >
            {/* Create a subtle pattern with CSS */}
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, var(--primary) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
