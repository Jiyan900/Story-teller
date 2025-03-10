import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertStorySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/stories", async (req, res) => {
    console.log('Received story creation request:', req.body);

    const result = insertStorySchema.safeParse(req.body);
    if (!result.success) {
      console.error('Invalid story data:', result.error);
      return res.status(400).json({ message: "Invalid story data", errors: result.error.format() });
    }

    try {
      console.log('Validated story data:', result.data);
      const story = await storage.createStory(result.data);
      console.log('Story created successfully:', story);
      res.json(story);
    } catch (error) {
      console.error('Error creating story:', error);
      res.status(500).json({ message: "Failed to create story" });
    }
  });

  app.get("/api/stories/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    console.log('Fetching story with ID:', id);

    if (isNaN(id)) {
      console.error('Invalid story ID:', req.params.id);
      return res.status(400).json({ message: "Invalid story ID" });
    }

    try {
      const story = await storage.getStory(id);
      if (!story) {
        console.log('Story not found for ID:', id);
        return res.status(404).json({ message: "Story not found" });
      }
      console.log('Story fetched successfully:', story);
      res.json(story);
    } catch (error) {
      console.error('Error fetching story:', error);
      res.status(500).json({ message: "Failed to fetch story" });
    }
  });

  return createServer(app);
}