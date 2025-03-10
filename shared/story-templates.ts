import { type InsertStory } from "./schema";

type Template = {
    template: string;
    hindiTemplate?: string;
    minLength: number;
};

export function generateStory(story: InsertStory): string {
    try {
        if (!story || !story.theme || !story.childName || !story.animal) {
            console.error('Missing story parameters:', { story });
            throw new Error("Missing required story parameters");
        }

        const templates = {
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
                    hindiTemplate: `एक रहस्यमयी भूमि के दिल में, एक साहसी {animal} रहता था जिसका नाम {name} था। {name} हमेशा से अज्ञात की खोज और छिपे हुए खजाने की खोज का सपना देखता था।

एक सुबह, {name} को एक विशाल मशरूम के नीचे एक पुराना नक्शा मिला। नक्शे में एक किंवदंती इंद्रधनुषी झरने का रास्ता दिखाया गया था, जहां जादुई प्राणियों के एकत्र होने और खेलने की बात कही जाती थी।

आगे की साहसिक यात्रा के लिए उत्साहित, {name} ने नाश्ते का एक छोटा बैग पैक किया और यात्रा पर निकल पड़ा। रास्ते में, उन्होंने झूलते रस्सी के पुल पार किए, ऊंचे पेड़ों पर चढ़े, और चमकदार गुफाओं से होकर गुजरे।

यात्रा के दौरान, {name} अन्य बहादुर जानवरों से मिला जो इस खोज में शामिल हो गए। साथ मिलकर, उन्होंने प्राचीन वन आत्माओं द्वारा छोड़ी गई पहेलियां सुलझाईं और चुनौतीपूर्ण बाधाओं को पार करने में एक-दूसरे की मदद की।

जैसे-जैसे वे जादुई जंगल में गहराई में जाते गए, {name} और उनके साथियों ने अद्भुत रहस्यों की खोज की। उन्होंने धुनें गाने वाले चमकीले फूल, दोस्ताना बादल जो उन्हें सवारी देते, और नृत्य करने वाली जुगनुओं का एक समूह पाया जो उनका रास्ता रोशन करता था।

अंत में, एक रोमांचक यात्रा के बाद, {name} और दोस्त इंद्रधनुषी झरने तक पहुंचे। दृश्य उनकी कल्पना से भी अधिक सुंदर था - इंद्रधनुष के सभी रंगों में पानी गिर रहा था, हवा में जादुई चमक पैदा कर रहा था।

साहसी यात्री पूरे दिन इंद्रधनुषी धुंध में खेलते रहे, जादुई प्राणियों के साथ नई दोस्ती बनाई, और अपनी अद्भुत यात्रा की कहानियां साझा कीं।

उस रात, जब {name} अपने नए दोस्तों के साथ घर की ओर चला, उसे एहसास हुआ कि सबसे बड़ा खजाना नक्शे के अंत में नहीं था - वह था साहसिक यात्रा और रास्ते में बनी दोस्तियां।

शुभ रात्रि, बहादुर। याद रखो कि {name} की तरह, तुम भी हर साहसिक कार्य में जादू और आश्चर्य पा सकते हो।`,
                    minLength: 1000
                }
            ],
            Bedtime: [
                {
                    template: `As the stars began to twinkle in the night sky, there was a sleepy {animal} named {name} who was getting ready for bed. {name} had a special bedtime routine that made going to sleep a magical adventure.

First, {name} would gather their favorite soft blanket and fluffy pillow, making their bed as cozy as a cloud. Then, they would listen to the gentle lullaby of the evening breeze rustling through the leaves.

As {name} snuggled into their warm bed, they would watch the moonlight dance on their bedroom wall, creating shapes that looked like sleeping butterflies and dreaming clouds.

The night was filled with peaceful sounds - the soft hooting of owls, the gentle chirping of crickets, and the sweet whispers of the stars telling bedtime stories to each other.

{name} knew that sleep was a wonderful time when their mind could float away on dreams as light as feathers and as sweet as honey. Every night brought new dreams filled with flying through rainbow skies or floating on marshmallow clouds.

As their eyes grew heavy, {name} would think about all the happy moments from their day - the friends they played with, the games they enjoyed, and the warm hugs they shared.

Soon, {name} would drift off to sleep with a smile, knowing that tomorrow would bring new adventures, but for now, it was time to rest and dream sweet dreams.

Goodnight, little one. Like {name}, may your dreams be filled with wonder and your sleep be peaceful and warm.`,
                    hindiTemplate: `जैसे ही रात के आसमान में तारे टिमटिमाने लगे, एक नींद भरा {animal} था जिसका नाम {name} था, जो सोने की तैयारी कर रहा था। {name} की एक खास बेडटाइम दिनचर्या थी जो सोने को एक जादुई साहसिक कार्य बना देती थी।

सबसे पहले, {name} अपना पसंदीदा नरम कंबल और मुलायम तकिया इकट्ठा करता, अपने बिस्तर को बादल जैसा आरामदायक बनाता। फिर, वह शाम की हवा की कोमल लोरी को सुनता जो पत्तियों के बीच से गुजरती थी।

जैसे ही {name} अपने गर्म बिस्तर में दुबकता, वह अपनी बेडरूम की दीवार पर चांदनी का नृत्य देखता, जो सोते हुए तितलियों और सपने देखते बादलों जैसी आकृतियां बनाती।

रात शांतिपूर्ण आवाजों से भरी होती - उल्लुओं की मृदु आवाज, झींगुरों की कोमल चहचहाहट, और एक-दूसरे को सोने की कहानियां सुनाते तारों की मीठी फुसफुसाहट।

{name} जानता था कि नींद एक अद्भुत समय होता है जब उनका दिमाग पंखों जैसे हल्के और शहद जैसे मीठे सपनों में तैर सकता है। हर रात नए सपने लेकर आती - इंद्रधनुषी आसमान में उड़ने या मार्शमैलो के बादलों पर तैरने के।

जैसे-जैसे उनकी आंखें भारी होती जातीं, {name} अपने दिन के सभी खुशी के पलों के बारे में सोचता - जिन दोस्तों के साथ खेला, जो खेल खेले, और जो गर्म गले मिले।

जल्द ही, {name} मुस्कुराते हुए नींद में खो जाता, यह जानते हुए कि कल नए साहसिक कार्य लेकर आएगा, लेकिन अभी, आराम करने और मीठे सपने देखने का समय था।

शुभ रात्रि, छोटे। {name} की तरह, आपके सपने भी आश्चर्य से भरे हों और आपकी नींद शांतिपूर्ण और गर्म हो।`,
                    minLength: 1000
                }
            ]
        };

        const allTemplates = templates[story.theme as keyof typeof templates];
        if (!allTemplates || allTemplates.length === 0) {
            console.error('No templates found for theme:', story.theme);
            throw new Error(`No templates found for theme: ${story.theme}`);
        }

        const template = allTemplates[Math.floor(Math.random() * allTemplates.length)];
        let content = story.language === 'hi' ? template.hindiTemplate : template.template;

        if (!content) {
            console.error('No template found for language:', story.language);
            throw new Error(`No template found for language: ${story.language}`);
        }

        content = content.replace(/{name}/g, story.childName);
        content = content.replace(/{animal}/g, story.animal);

        return content;
    } catch (error) {
        console.error('Error generating story:', error);
        throw error;
    }
}