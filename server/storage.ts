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
    const id = this.currentId++;
    const story: Story = { ...insertStory, id };
    this.stories.set(id, story);
    return story;
  }

  async getStory(id: number): Promise<Story | undefined> {
    return this.stories.get(id);
  }
}

export const storage = new MemStorage();
