import { type InsertStory } from "./schema";

type Template = {
  template: string;
  minLength: number;
};

const templates: Record<string, Template[]> = {
  Friendship: [
    {
      template: `Once upon a time, in a magical forest, there lived a young {animal} named {name}. {name} was a very special {animal} who loved making new friends, but sometimes felt a little shy.

One sunny morning, while playing near the crystal-clear stream, {name} heard gentle rustling in the bushes. To their surprise, they discovered other young animals who were also looking for friendship.

Together with their new friends, {name} went on amazing adventures. They built cozy hideouts from fallen leaves, shared delicious berries, and told funny stories under the twinkling stars.

As days passed, {name} learned that true friendship means being there for each other, sharing both happy and challenging moments. The little {animal} realized that everyone has something special to offer, and that's what makes friendship so magical.

Every evening, when the moon rose high in the sky, {name} would gather with their forest friends to share stories about their day. They would laugh, play, and dream about tomorrow's adventures.

The forest became a happier place because of {name}'s kindness and friendly nature. Other animals often said that meeting {name} was like finding a treasure - a true friend who made every day brighter.

And so, {name} the {animal} discovered that the best gift in the world is having good friends who care about you, just as you care about them.

Sweet dreams, little one. Remember, just like {name}, you too can make wonderful friends by being kind and sharing your heart with others.`,
      minLength: 1000
    }
  ],
  // Copy rest of the templates from client/src/lib/story-templates.ts
  Adventure: [
    {
      template: `Deep in the heart of a mysterious land, there lived an adventurous {animal} named {name}. {name} had always dreamed of exploring the unknown and discovering hidden treasures.

One morning, {name} found an old map tucked beneath a giant mushroom. The map showed the way to a legendary rainbow waterfall, where magical creatures were said to gather and play.

Excited about the adventure ahead, {name} packed a small bag with snacks and set off on the journey. Along the way, they crossed swaying rope bridges, climbed towering trees, and navigated through sparkling caves.

During the journey, {name} met other brave animals who joined the quest. Together, they solved riddles left by ancient forest spirits and helped each other overcome challenging obstacles.

As they traveled deeper into the enchanted forest, {name} and their companions discovered wonderful secrets. They found glowing flowers that sang melodies, friendly clouds that gave them rides, and even a group of dancing fireflies that lit their path.

Finally, after an exciting journey, {name} and friends reached the rainbow waterfall. The sight was more beautiful than they could have imagined - water cascading in all colors of the rainbow, creating magical sparkles in the air.

The adventurers spent the rest of the day playing in the rainbow mist, making new friends with the magical creatures, and sharing stories of their amazing journey.

That night, as {name} headed home with their new friends, they realized that the greatest treasure wasn't at the end of the map - it was the adventure itself and the friendships they made along the way.

Sweet dreams, brave one. Remember that like {name}, you too can find magic and wonder in every adventure, big or small.`,
      minLength: 1000
    }
  ],
  // Add other themes similarly
};

export function generateStory(storyData: Omit<InsertStory, "content">): string {
  const themeTemplates = templates[storyData.theme];
  if (!themeTemplates || themeTemplates.length === 0) {
    throw new Error(`No templates available for theme: ${storyData.theme}`);
  }

  // Randomly select a template for the theme
  const template = themeTemplates[Math.floor(Math.random() * themeTemplates.length)];

  return template.template
    .replace(/{name}/g, storyData.childName)
    .replace(/{animal}/g, storyData.animal.toLowerCase());
}
