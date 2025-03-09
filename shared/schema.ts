import { pgTable, text, serial, integer, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const stories = pgTable("stories", {
  id: serial("id").primaryKey(),
  childName: text("child_name").notNull(),
  animal: text("animal").notNull(),
  theme: text("theme").notNull(),
  content: text("content").notNull(),
  language: text("language").notNull().default('en'), // Add language field
});

export const insertStorySchema = createInsertSchema(stories).pick({
  childName: true,
  animal: true,
  theme: true,
  content: true,
  language: true,
});

export type InsertStory = z.infer<typeof insertStorySchema>;
export type Story = typeof stories.$inferSelect;

export const storyThemes = [
  "Friendship",
  "Kindness",
  "Courage",
  "Sharing",
  "Bedtime",
  "Adventure"
] as const;

export const animals = [
  "Lion",
  "Elephant",
  "Giraffe",
  "Penguin",
  "Rabbit",
  "Bear",
  "Fox",
  "Owl",
  "Turtle",
  "Monkey"
] as const;

export const storyFormSchema = insertStorySchema.extend({
  childName: z.string().min(2, "Name must be at least 2 characters"),
  animal: z.enum(animals, {
    required_error: "Please select an animal",
  }),
  theme: z.enum(storyThemes, {
    required_error: "Please select a theme",
  }),
  language: z.enum(['en', 'hi', 'bn'], {
    required_error: "Please select a language",
  }).default('en'),
});