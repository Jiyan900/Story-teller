import { StoryForm } from "@/components/story-form";

export default function Home() {
  return (
    <div 
      className="min-h-screen py-12 px-4"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1515339760107-1952b7a08454')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-primary">
          Magical Stories
        </h1>
        <p className="text-lg text-center mb-12 text-muted-foreground">
          Create a personalized magical story with your child's favorite animal!
        </p>
        <StoryForm />
      </div>
    </div>
  );
}