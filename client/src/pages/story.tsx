import { useQuery } from "@tanstack/react-query";
import { useParams } from "wouter";
import { StoryDisplay } from "@/components/story-display";
import { MoodLighting } from "@/components/mood-lighting";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { type Story } from "@shared/schema";

export default function StoryPage() {
  const { id } = useParams<{ id: string }>();

  const { data: story, isLoading, error } = useQuery<Story>({
    queryKey: [`/api/stories/${id}`],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (error || !story) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Story not found</h1>
        <Link href="/">
          <Button>Create a New Story</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <MoodLighting theme={story.theme} />
      <StoryDisplay story={story} />
      <div className="text-center mt-8">
        <Link href="/">
          <Button className="bg-primary/90 hover:bg-primary">
            Create Another Story
          </Button>
        </Link>
      </div>
    </div>
  );
}