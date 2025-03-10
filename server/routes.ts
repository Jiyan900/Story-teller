import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertStorySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/stories", async (req, res) => {
    const result = insertStorySchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ message: "Invalid story data" });
    }

    try {
      const story = await storage.createStory(result.data);
      res.json(story);
    } catch (error) {
      console.error('Error creating story:', error);
      res.status(500).json({ message: "Failed to create story" });
    }
  });

  app.get("/api/stories/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid story ID" });
    }

    try {
      const story = await storage.getStory(id);
      if (!story) {
        return res.status(404).json({ message: "Story not found" });
      }
      res.json(story);
    } catch (error) {
      console.error('Error fetching story:', error);
      res.status(500).json({ message: "Failed to fetch story" });
    }
  });

  return createServer(app);
}