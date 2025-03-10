import { type Story, type InsertStory } from "@shared/schema";

export interface IStorage {
  createStory(story: InsertStory): Promise<Story>;
  getStory(id: number): Promise<Story | undefined>;
}

export class MemStorage implements IStorage {
  private stories: Map<number, Story>;
  private currentId: number;

  constructor() {
    this.stories = new Map();
    this.currentId = 1;
  }

  async createStory(insertStory: InsertStory): Promise<Story> {
    try {
      const id = this.currentId++;
      const story: Story = { 
        ...insertStory, 
        id,
        language: insertStory.language || 'en'  // Ensure language has a default value
      };
      this.stories.set(id, story);
      return story;
    } catch (error) {
      console.error('Error in createStory:', error);
      throw error;
    }
  }

  async getStory(id: number): Promise<Story | undefined> {
    try {
      return this.stories.get(id);
    } catch (error) {
      console.error('Error in getStory:', error);
      throw error;
    }
  }
}

export const storage = new MemStorage();