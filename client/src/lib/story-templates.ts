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
  Bedtime: [
    {
      template: `As the sun began to set in the peaceful woodland, a sleepy little {animal} named {name} was getting ready for bed. {name} loved bedtime because it meant cozy moments and sweet dreams ahead.

{name} had their own special bedtime routine. First, they would take a warm bath in the nearby stream, letting the gentle water wash away the day's adventures. Then, they would dry off with soft leaves and put on their favorite starry pajamas.

The little {animal}'s nest was the coziest spot in all the forest. It was lined with the softest moss and decorated with twinkling fireflies who offered their gentle light. {name} had collected special treasures to keep nearby - smooth pebbles, pretty feathers, and a favorite blanket made of the warmest cloud fluff.

As {name} snuggled into their bed, the evening chorus began. Crickets played their lullaby, owls hooted softly in the distance, and the wind whispered sweet melodies through the leaves. Everything was peaceful and calm.

The moon peeked through the branches, casting a silver glow over {name}'s bed. Tiny stars winked down at the sleepy {animal}, as if saying goodnight to their friend below.

{name}'s eyes grew heavy as they thought about all the fun they had during the day. They remembered playing with friends, finding tasty treats, and learning new things about the forest. Now it was time to rest and dream about tomorrow's adventures.

The night wrapped around {name} like a warm hug, and they felt safe and loved. Their breathing became slow and steady as sleep began to take over. In the quiet of the night, {name} drifted off to dreamland, where magical adventures awaited.

Sweet dreams, precious one. Like {name}, may you have the coziest sleep and the sweetest dreams tonight.`,
      minLength: 1000
    }
  ],
  Courage: [
    {
      template: `In a cozy corner of the world lived a young {animal} named {name}. Although {name} was small, they had a heart full of courage waiting to be discovered.

One day, a big storm came to the forest, and many of the smaller animals were scared. Even though {name} felt a little nervous too, they knew they had to be brave to help their friends.

{name} remembered what their grandmother always said: "Courage isn't about not being scared; it's about doing what's right even when you are scared." With these wise words in their heart, {name} decided to take action.

Using their clever {animal} skills, {name} found a large hollow tree where everyone could stay safe and dry. They made several trips through the rain, helping guide other animals to the shelter, making sure no one was left alone in the storm.

Inside the hollow tree, {name} told funny stories and played games to help keep everyone's spirits up. They shared their favorite berries and taught others how to make soft beds from leaves, making the scary situation feel more like a cozy sleepover.

As the storm raged outside, something amazing happened. The animals realized that being together made them stronger, and that {name}'s bravery had turned a frightening experience into an adventure.

When the storm finally passed, and the sun peeked through the clouds, all the animals celebrated {name}'s courage. They realized that sometimes the biggest heroes come in the smallest packages, and that everyone has bravery inside them.

From that day on, {name} was known throughout the forest not just as a brave {animal}, but as someone who helped others find their own courage too.

Remember, little one, just like {name}, you have more courage than you know. Sometimes being brave means helping others, even when you're a little scared yourself.`,
      minLength: 1000
    }
  ],
  Sharing: [
    {
      template: `Once there was a thoughtful {animal} named {name} who lived in a beautiful garden. {name} had a special talent for growing the most delicious fruits and vegetables in all the land.

{name}'s garden was filled with juicy berries, crunchy carrots, and sweet apples. Every day, {name} would tend to the plants with love and care, making sure each one got enough water and sunshine.

One summer day, {name} noticed that some of the other animals in the neighborhood didn't have enough food. Some were too small to reach the tall fruit trees, while others didn't know how to grow their own gardens.

Instead of keeping all the delicious food to themselves, {name} had a wonderful idea. They decided to host a garden party and invite everyone to share in the harvest. {name} spent the whole day picking the ripest fruits and freshest vegetables.

The next morning, animals from all around came to {name}'s garden. {name} taught them how to pick berries without hurting the plants, showed them the best way to dig up carrots, and shared seeds so others could start their own gardens.

As everyone shared the feast together, something magical happened. The animals began sharing their own special talents too. The birds taught songs, the rabbits showed their best jumping tricks, and the squirrels shared their secret nut-finding techniques.

{name}'s garden became a place where everyone came together to share not just food, but friendship, knowledge, and joy. Every day, more animals would bring things to share, making the garden grow with love and generosity.

The garden flourished even more because when everyone shared and worked together, there was always enough for all. {name} learned that sharing not only helped others but made their own heart grow bigger too.

Sweet dreams, generous one. Remember that like {name}, when you share with others, you help make the world a better and happier place for everyone.`,
      minLength: 1000
    }
  ]
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