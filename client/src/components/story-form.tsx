import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { storyFormSchema, type InsertStory, animals, storyThemes } from "@shared/schema";
import { generateStory } from "@shared/story-templates";
import { apiRequest } from "@/lib/queryClient";

export function StoryForm() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const form = useForm<InsertStory>({
    resolver: zodResolver(storyFormSchema),
    defaultValues: {
      childName: "",
      animal: undefined,
      theme: undefined,
      content: "",
      language: "en" 
    },
  });

  async function onSubmit(values: InsertStory) {
    try {
      const content = generateStory(values);
      const response = await apiRequest("POST", "/api/stories", { ...values, content });
      const story = await response.json();
      setLocation(`/story/${story.id}`);
    } catch (error) {
      console.error("Error creating story:", error);
      toast({
        title: "Error",
        description: "Failed to create story. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-md mx-auto bg-white/90 backdrop-blur-sm shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-primary">
            Create a Magical Story
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="childName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Child's Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter name..." 
                        {...field} 
                        className="h-12 text-base px-4"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="animal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Favorite Animal</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select an animal" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="max-h-[300px]">
                        {animals.map((animal) => (
                          <SelectItem 
                            key={animal} 
                            value={animal}
                            className="py-3 text-base cursor-pointer hover:bg-primary/10 focus:bg-primary/10"
                          >
                            {animal}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="theme"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Story Theme</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select a theme" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="max-h-[300px]">
                        {storyThemes.map((theme) => (
                          <SelectItem 
                            key={theme} 
                            value={theme}
                            className="py-3 text-base cursor-pointer hover:bg-primary/10 focus:bg-primary/10"
                          >
                            {theme}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Added Language Selection Field */}
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Story Language</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Select a language" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="max-h-[300px]">
                        <SelectItem 
                          value="en"
                          className="py-3 text-base cursor-pointer hover:bg-primary/10 focus:bg-primary/10"
                        >
                          English
                        </SelectItem>
                        <SelectItem 
                          value="hi"
                          className="py-3 text-base cursor-pointer hover:bg-primary/10 focus:bg-primary/10"
                        >
                          हिंदी (Hindi)
                        </SelectItem>
                        <SelectItem 
                          value="as"
                          className="py-3 text-base cursor-pointer hover:bg-primary/10 focus:bg-primary/10"
                        >
                          অসমীয়া (Assamese)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />


              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 h-12 text-base"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Creating..." : "Generate Story"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}