import { type InsertStory } from "./schema";

type Template = {
    template: string;
    hindiTemplate?: string;
    minLength: number;
};

export const templates: Record<string, Template[]> = {
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
            hindiTemplate: `एक समय की बात है, एक जादुई जंगल में एक छोटा {animal} रहता था जिसका नाम {name} था।

{name} एक बहुत ही खास {animal} था जो नए दोस्त बनाना पसंद करता था, लेकिन कभी-कभी थोड़ा शर्मीला महसूस करता था।

एक सुनहरी सुबह, क्रिस्टल जैसी स्वच्छ नदी के पास खेलते हुए, {name} को झाड़ियों में हलकी सरसराहट सुनाई दी। उन्हें आश्चर्य हुआ जब उन्होंने देखा कि अन्य युवा जानवर भी दोस्ती की तलाश में थे।

अपने नए दोस्तों के साथ, {name} ने अद्भुत साहसिक कार्यों में हिस्सा लिया। उन्होंने गिरी हुई पत्तियों से आरामदायक छिपने की जगह बनाई, स्वादिष्ट बेरीज़ साझा कीं, और टिमटिमाते तारों के नीचे मजेदार कहानियां सुनाईं।

जैसे-जैसे दिन बीते, {name} ने सीखा कि सच्ची दोस्ती का मतलब है एक-दूसरे के लिए मौजूद रहना, खुशी और चुनौतीपूर्ण पलों को साझा करना। छोटे {animal} को एहसास हुआ कि हर किसी में कुछ खास है, और यही दोस्ती को जादुई बनाता है।

हर शाम, जब चांद आसमान में ऊंचा उठता, {name} अपने जंगल के दोस्तों के साथ दिन की कहानियां साझा करने के लिए इकट्ठा होता। वे हंसते, खेलते और कल के साहसिक कार्यों के सपने देखते।

{name} की दयालुता और मैत्रीपूर्ण स्वभाव की वजह से जंगल एक खुशहाल जगह बन गया। अन्य जानवर अक्सर कहते थे कि {name} से मिलना खजाना पाने जैसा था - एक सच्चा दोस्त जो हर दिन को और भी खूबसूरत बनाता है।

और इस तरह, {name} नाम के {animal} ने पाया कि दुनिया का सबसे बड़ा तोहफा है अच्छे दोस्तों का होना जो आपकी परवाह करते हैं, जैसे आप उनकी परवाह करते हैं।

शुभ रात्रि, छोटे। याद रखो, {name} की तरह, तुम भी दूसरों के प्रति दयालु बनकर और अपना दिल साझा करके अद्भुत दोस्त बना सकते हो।`,
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
            hindiTemplate: `एक सुंदर मैदान में जहाँ फूल हवा में नाचते थे, एक दयालु {animal} रहता था जिसका नाम {name} था। {name} के पास पूरी धरती में सबसे बड़ा दिल था और वह दूसरों की मदद करना पसंद करता था।

एक दिन, {name} ने देखा कि कुछ छोटे जानवरों को पेड़ों पर ऊंचाई पर लगे मीठे बेर तक पहुंचने में परेशानी हो रही थी। बिना किसी हिचकिचाहट के, {name} ने उनकी मदद करने का फैसला किया।

अपनी विशेष {animal} क्षमताओं का उपयोग करते हुए, {name} ने हर किसी को स्वादिष्ट बेर का हिस्सा दिलाने के रचनात्मक तरीके खोजे। उन्होंने सुनिश्चित किया कि कोई भी छूटे नहीं, और जल्द ही मैदान खुश जानवरों से भर गया जो अपने मिठाइयों का आनंद ले रहे थे।

{name} की दयालुता की खबर फैल गई, और जल्द ही चारों ओर से जानवर मदद मांगने आने लगे। चाहे खोई हुई तितली को घर का रास्ता खोजने में मदद करना हो, या बारिश के दौरान गीले खरगोश के साथ छाता साझा करना हो, {name} हमेशा मदद के लिए तैयार रहता था।

अन्य जानवर {name} के उदाहरण का अनुसरण करने लगे। उन्होंने सीखा कि दयालु होने से न केवल दूसरे खुश होते हैं बल्कि उनका अपना दिल भी खुशी से भर जाता है। मैदान को पूरी धरती में सबसे दयालु स्थान के रूप में जाना जाने लगा।

हर शाम, {name} तारों के नीचे बैठता था, आभारी दोस्तों से घिरा हुआ जो उनकी दयालुता से प्रभावित हुए थे। वे कहानियां साझा करते और एक साथ हंसते, ऐसी यादें बनाते जो हमेशा के लिए रहेंगी।

जैसे-जैसे समय बीता, {name} ने खोजा कि दयालुता के छोटे से कार्य भी सबसे बड़ा अंतर ला सकते हैं। एक सरली सी मुस्कान, मदद का हाथ, या एक दोस्ताना शब्द किसी के पूरे दिन को रोशन कर सकता है।

और इस तरह, {name} नाम का {animal} जहां भी जाता, दयालुता फैलाता रहा, एक अच्छे काम के साथ दुनिया को बेहतर बनाता रहा।

याद रखो, छोटे, {name} की तरह, तुम्हारे पास भी अपने कार्यों और शब्दों से दुनिया को एक दयालु स्थान बनाने की शक्ति है।`,
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
            hindiTemplate: `एक रहस्यमयी भूमि के दिल में, एक साहसी {animal} रहता था जिसका नाम {name} था।

{name} हमेशा से अज्ञात की खोज और छिपे हुए खजाने की खोज का सपना देखता था।

एक सुबह, {name} को एक विशाल मशरूम के नीचे एक पुराना नक्शा मिला। नक्शे में एक किंवदंती इंद्रधनुषी झरने का रास्ता दिखाया गया था, जहां जादुई प्राणियों के एकत्र होने और खेलने की बात कही जाती थी।

आगे की साहसिक यात्रा के लिए उत्साहित, {name} ने नाश्ते का एक छोटा बैग पैक किया और यात्रा पर निकल पड़ा। रास्ते में, उन्होंने झूलते रस्सी के पुल पार किए, ऊंचे पेड़ों पर चढ़े, और चमकदार गुफाओं से होकर गुजरे।

यात्रा के दौरान, {name} अन्य बहादुर जानवरों से मिला जो इस खोज में शामिल हो गए। साथ मिलकर, उन्होंने प्राचीन वन आत्माओं द्वारा छोड़ी गई पहेलियां सुलझाईं और चुनौतीपूर्ण बाधाओं को पार करने में एक-दूसरे की मदद की।

जैसे-जैसे वे जादुई जंगल में गहराई में जाते गए, {name} और उनके साथियों ने अद्भुत रहस्यों की खोज की। उन्होंने धुनें गाने वाले चमकीले फूल, दोस्ताना बादल जो उन्हें सवारी देते, और नृत्य करने वाली जुगनुओं का एक समूह पाया जो उनका रास्ता रोशन करता था।

अंत में, एक रोमांचक यात्रा के बाद, {name} और दोस्त इंद्रधनुषी झरने तक पहुंचे। दृश्य उनकी कल्पना से भी अधिक सुंदर था - इंद्रधनुष के सभी रंगों में पानी गिर रहा था, हवा में जादुई चमक पैदा कर रहा था।

साहसी यात्री पूरे दिन इंद्रधनुषी धुंध में खेलते रहे, जादुई प्राणियों के साथ नई दोस्ती बनाई, और अपनी अद्भुत यात्रा की कहानियां साझा कीं।

उस रात, जब {name} अपने नए दोस्तों के साथ घर की ओर चला, उसे एहसास हुआ कि सबसे बड़ा खजाना नक्शे के अंत में नहीं था - वह था साहसिक यात्रा और रास्ते में बनी दोस्तियां।

शुभ रात्रि, बहादुर। याद रखो कि {name} की तरह, तुम भी हर साहसिक कार्य में जादू और आश्चर्य पा सकते हो, चाहे वह छोटा हो या बड़ा।`,
            minLength: 1000
        }
    ]
};

export function generateStory(story: InsertStory): string {
    const allTemplates = templates[story.theme];
    const template = allTemplates[Math.floor(Math.random() * allTemplates.length)];

    let content = story.language === 'hi' ? template.hindiTemplate : template.template;
    content = content.replace(/{name}/g, story.childName);
    content = content.replace(/{animal}/g, story.animal);

    return content;
}

function translateAnimalToHindi(animal: string): string {
    const animalTranslations: Record<string, string> = {
        Lion: 'शेर',
        Elephant: 'हाथी',
        Giraffe: 'जिराफ़',
        Penguin: 'पेंगुइन',
        Rabbit: 'खरगोश',
        Bear: 'भालू',
        Fox: 'लोमड़ी',
        Owl: 'उल्लू',
        Turtle: 'कछुआ',
        Monkey: 'बंदर'
    };
    return animalTranslations[animal] || animal;
}