import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Story } from "@shared/schema";

interface StoryCardProps {
  story: Story;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const paragraphVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function StoryCard({ story }: StoryCardProps) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <Card className="max-w-4xl mx-auto my-8 bg-white/80 backdrop-blur-sm shadow-lg border-primary/20">
        <CardHeader>
          <motion.div variants={titleVariants}>
            <CardTitle className="text-3xl font-bold text-primary text-center">
              A Story for {story.childName}
            </CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent>
          <motion.div 
            className="prose prose-lg max-w-none"
            variants={containerVariants}
          >
            {story.content.split("\n\n").map((paragraph, index) => (
              <motion.p
                key={index}
                variants={paragraphVariants}
                className="mb-4 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}