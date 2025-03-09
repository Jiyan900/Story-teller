import { type InsertStory } from "@shared/schema";

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
  Kindness: [
    {
      template: `In a beautiful meadow where flowers danced in the breeze, there lived a gentle {animal} named {name}. {name} had the biggest heart in all the land and loved helping others.

One day, {name} noticed that some of the smaller animals were having trouble reaching the sweetest berries that grew high up in the trees. Without hesitation, {name} decided to help them.

Using their special {animal} abilities, {name} found creative ways to help everyone get their share of the delicious berries. They made sure no one was left out, and soon the meadow was filled with happy animals enjoying their treats.

Word spread about {name}'s kindness, and soon animals from all around would come seeking help. Whether it was helping a lost butterfly find its way home, or sharing an umbrella with a wet rabbit during rain, {name} was always there to lend a helping hand.

The other animals started following {name}'s example. They learned that being kind not only made others happy but filled their own hearts with joy too. The meadow became known as the kindest place in all the land.

Every evening, {name} would sit under the stars, surrounded by grateful friends who had been touched by their kindness. They would share stories and laugh together, creating memories that would last forever.

As time went by, {name} discovered that even the smallest acts of kindness could make the biggest difference. A simple smile, a helping hand, or a friendly word could brighten someone's entire day.

And so, {name} the {animal} continued spreading kindness wherever they went, making the world a better place, one good deed at a time.

Remember, little one, just like {name}, you too have the power to make the world a kinder place with your actions and words.`,
      minLength: 1000
    }
  ],
  // Add more templates for other themes...
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
