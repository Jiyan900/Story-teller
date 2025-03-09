import { type InsertStory } from "./schema";

type Template = {
    template: string;
    hindiTemplate?: string;
    minLength: number;
  };

  const templates: Record<string, Template[]> = {
    Friendship: [
      // Original template kept as first option
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
      },
      // New beach-themed friendship story
      {
        template: `By the sparkling ocean waves, there lived a curious {animal} named {name}. Unlike other {animal}s, {name} loved spending time near the water's edge, watching the colorful fish dance in the tide pools.

One particularly sunny morning, {name} noticed a small seahorse who seemed lost and confused. Although {name} had never spoken to a sea creature before, they knew that making new friends meant being brave enough to take the first step.

With gentle movements, {name} approached the seahorse and offered to help. The seahorse, whose name was Pearl, explained that the strong currents had swept her far from her family's coral reef. {name} promised to help Pearl find her way home.

Together, they embarked on a wonderful journey along the shoreline. Along the way, they met friendly crabs who gave them directions, playful dolphins who offered them rides, and wise old turtles who shared shortcuts through the safer currents.

What started as a mission to help someone in need turned into an amazing adventure of friendship. {name} and Pearl discovered that even though they were very different, their hearts were the same - full of kindness and joy in helping others.

When they finally found Pearl's family, they were so grateful to {name} that they invited the {animal} to visit them anytime. From that day forward, {name} had not just one new friend, but an entire ocean full of them.

Every sunrise, you could find {name} by the shore, sharing stories with Pearl and their other sea friends, proving that friendship knows no boundaries - not even between land and sea.

Sweet dreams, little one. Remember that like {name}, sometimes the most wonderful friendships begin with a simple act of kindness.`,
        hindiTemplate: `चमकते समुद्र की लहरों के पास एक जिज्ञासु {animal} रहता था जिसका नाम {name} था।

अन्य {animal} की तुलना में, {name} पानी के किनारे समय बिताना पसंद करता था, ज्वार के कुंडों में रंगीन मछलियों को नाचते हुए देखता था।

एक विशेष सुनहरी सुबह, {name} ने एक छोटा समुद्री घोड़ा देखा जो खोया और भ्रमित लग रहा था। हालांकि {name} ने कभी किसी समुद्री जीव से बात नहीं की थी, वह जानता था कि नए दोस्त बनाने का मतलब है पहला कदम उठाने के लिए बहादुर होना।

धीमी गति से, {name} समुद्री घोड़े के पास गया और मदद की पेशकश की। समुद्री घोड़े ने, जिसका नाम मोती था, बताया कि तेज धाराओं ने उसे उसके परिवार के प्रवाल भित्ति से दूर बहा दिया था। {name} ने मोती को घर का रास्ता खोजने में मदद करने का वादा किया।

साथ मिलकर, वे समुद्र तट के किनारे एक शानदार यात्रा पर निकले। रास्ते में, उन्हें दिशा-निर्देश देने वाले दोस्ताना केकड़े, सवारी की पेशकश करने वाले खुशमिजाज डॉल्फिन, और सुरक्षित धाराओं के माध्यम से शॉर्टकट साझा करने वाले बुद्धिमान पुराने कछुए मिले।

जो किसी की मदद करने के मिशन के रूप में शुरू हुआ था, वह दोस्ती का एक अद्भुत साहसिक कार्य बन गया। {name} और मोती ने पाया कि भले ही वे बहुत अलग थे, उनके दिल एक जैसे थे - दूसरों की मदद करने में दया और खुशी से भरे हुए।

जब उन्होंने आखिरकार मोती के परिवार को खोज लिया, तो वे {name} के प्रति इतने आभारी थे कि उन्होंने {animal} को कभी भी उनसे मिलने के लिए आमंत्रित किया। उस दिन से, {name} के पास सिर्फ एक नया दोस्त नहीं था, बल्कि पूरा समुद्र दोस्तों से भरा था।

हर सूर्योदय पर, आप {name} को समुद्र तट पर पा सकते थे, मोती और अपने अन्य समुद्री दोस्तों के साथ कहानियां साझा करते हुए, यह साबित करते हुए कि दोस्ती कोई सीमा नहीं जानती - यहां तक कि जमीन और समुद्र के बीच भी नहीं।

शुभ रात्रि, छोटे। याद रखो कि {name} की तरह, कभी-कभी सबसे अद्भुत दोस्तियां दया के एक साधारण कार्य से शुरू होती हैं।`,
        minLength: 1000
      },
      // New mountain-themed friendship story
      {
        template: `High up in the snowy mountains, where the clouds tickled the peaks, lived a brave {animal} named {name}. Though the mountain air was chilly, {name}'s heart was always warm with dreams of making friends in this vast, beautiful place.

One winter morning, {name} heard a soft whimper coming from behind a large snow drift. Carefully making their way through the snow, they discovered a young mountain goat who had gotten separated from their herd during the previous night's snowfall.

{name} knew the mountains could be dangerous alone, so without hesitation, they offered to help the young goat find their family. The goat, who introduced himself as Alpine, was overjoyed to have a companion on his journey home.

Together, {name} and Alpine navigated the mountain paths. They helped each other across icy streams, shared warm shelter during snowfall, and encouraged one another when the path seemed too steep. Along the way, they met wise eagles who guided them from above, friendly marmots who shared their burrows during rest stops, and gentle deer who showed them the safest paths through the valleys.

As they traveled, {name} and Alpine shared stories and laughter, finding that their differences made their friendship even more special. {name} learned about life in the high peaks from Alpine, while Alpine was fascinated by {name}'s tales of life in other parts of the mountain.

When they finally found Alpine's herd, the mountain goats were so impressed by {name}'s kindness that they declared the {animal} an honorary member of their family. From that day forward, {name} had a whole herd of friends to share adventures with in the mountains.

Throughout all seasons, {name} and Alpine remained the closest of friends, showing everyone that the strongest friendships can bloom even in the coldest places, warmed by the heat of caring hearts.

Sweet dreams, little one. Like {name}, remember that helping others can lead to the most wonderful and unexpected friendships.`,
        hindiTemplate: `बर्फीली पहाड़ियों की ऊंचाइयों पर, जहां बादल चोटियों को गुदगुदाते थे, एक बहादुर {animal} रहता था जिसका नाम {name} था। हालांकि पहाड़ी हवा ठंडी थी, {name} का दिल हमेशा इस विशाल, सुंदर जगह में दोस्त बनाने के सपनों से गरम रहता था।

एक सर्दी की सुबह, {name} ने एक बड़े बर्फ के ढेर के पीछे से एक हल्की सी सिसकी सुनी। सावधानी से बर्फ के बीच से रास्ता बनाते हुए, उन्होंने एक युवा पहाड़ी बकरी को खोजा जो पिछली रात की बर्फबारी के दौरान अपने झुंड से बिछड़ गया था।

{name} जानता था कि अकेले पहाड़ खतरनाक हो सकते हैं, इसलिए बिना किसी हिचकिचाहट के, उन्होंने युवा बकरी को उनका परिवार खोजने में मदद करने की पेशकश की। बकरी, जिसने खुद को अल्पाइन के रूप में पेश किया, घर की यात्रा में एक साथी पाकर बहुत खुश था।

साथ मिलकर, {name} और अल्पाइन ने पहाड़ी रास्तों को नेविगेट किया। उन्होंने बर्फीली नदियों को पार करने में एक-दूसरे की मदद की, बर्फबारी के दौरान गर्म आश्रय साझा किया, और एक-दूसरे को प्रोत्साहित किया जब रास्ता बहुत खड़ा लगता था। रास्ते में, उन्हें ऊपर से मार्गदर्शन करने वाले बुद्धिमान चील, आराम के दौरान अपनी मांद साझा करने वाले दोस्ताना मारमोट, और घाटियों के माध्यम से सबसे सुरक्षित रास्ते दिखाने वाले कोमल हिरण मिले।

यात्रा के दौरान, {name} और अल्पाइन ने कहानियां और हंसी साझा की, यह पाते हुए कि उनकी भिन्नताएं उनकी दोस्ती को और भी खास बनाती हैं। {name} ने अल्पाइन से ऊंची चोटियों में जीवन के बारे में सीखा, जबकि अल्पाइन {name} के पहाड़ के अन्य हिस्सों में जीवन की कहानियों से मंत्रमुग्ध था।

जब उन्होंने आखिरकार अल्पाइन का झुंड खोज लिया, तो पहाड़ी बकरियां {name} की दयालुता से इतनी प्रभावित हुईं कि उन्होंने {animal} को अपने परिवार का मानद सदस्य घोषित कर दिया। उस दिन से, {name} के पास पहाड़ों में साहसिक कार्यों को साझा करने के लिए एक पूरा झुंड दोस्त था।

सभी मौसमों में, {name} और अल्पाइन सबसे करीबी दोस्त बने रहे, सभी को दिखाते हुए कि सबसे मजबूत दोस्तियां सबसे ठंडी जगहों में भी खिल सकती हैं, देखभाल करने वाले दिलों की गर्मी से।

शुभ रात्रि, छोटे। {name} की तरह, याद रखो कि दूसरों की मदद करने से सबसे अद्भुत और अप्रत्याशित दोस्तियां हो सकती हैं।`,
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

शुभ रात्रि, बहादुर। याद रखो कि {name} की तरह, तुम भी हर साहसिक कार्य में, चाहे वह छोटा हो या बड़ा, जादू और आश्चर्य पा सकते हो।`,
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
        hindiTemplate: `जैसे ही सूरज शांत जंगल में ढलने लगा, एक नींद भरा छोटा {animal} जिसका नाम {name} था, सोने की तैयारी कर रहा था। {name} को सोने का समय बहुत पसंद था क्योंकि इसका मतलब था आरामदायक पल और मीठे सपने।

{name} की अपनी खास सोने की दिनचर्या थी। पहले, वह पास की नदी में गर्म स्नान करता, कोमल पानी को दिन के साहसिक कार्यों को धोने देता। फिर, वह नरम पत्तों से सूखता और अपना पसंदीदा तारों वाला नाइट सूट पहनता।

छोटे {animal} का घोंसला पूरे जंगल में सबसे आरामदायक जगह थी। यह सबसे नरम मॉस से सजा था और टिमटिमाते जुगनुओं से सजाया गया था जो अपनी कोमल रोशनी प्रदान करते थे। {name} ने पास रखने के लिए खास खजाने इकट्ठे किए थे - चिकने पत्थर, सुंदर पंख, और बादल की रूई से बनी एक पसंदीदा रजाई।

जैसे ही {name} अपने बिस्तर में आराम से लेटा, शाम का संगीत शुरू हो गया। झींगुर अपनी लोरी गाते, उल्लू दूर से धीमे से गूंजते, और हवा पत्तों के बीच से मीठी धुनें गुनगुनाती। हर चीज शांत और सुकून भरी थी।

चांद शाखाओं के बीच से झांकता, {name} के बिस्तर पर चांदी की चमक बिखेरता। छोटे तारे नींद भरे {animal} को आंख मारते, जैसे अपने नीचे के दोस्त को शुभरात्रि कह रहे हों।

{name} की आंखें भारी होने लगीं जैसे वह दिन भर के मजे के बारे में सोचता। उसे दोस्तों के साथ खेलने, स्वादिष्ट खाने ढूंढने, और जंगल के बारे में नई चीजें सीखने की याद आई। अब आराम करने और कल के साहसिक कार्यों के सपने देखने का समय था।

रात ने {name} को गर्म आलिंगन की तरह लपेट लिया, और उसे सुरक्षित और प्यारा महसूस हुआ। उसकी सांसें धीमी और स्थिर हो गईं जैसे नींद धीरे-धीरे आने लगी। रात की शांति में, {name} सपनों की दुनिया में चला गया, जहां जादुई साहसिक कार्य उसका इंतजार कर रहे थे।

शुभ रात्रि, प्यारे। {name} की तरह, तुम्हें भी सबसे आरामदायक नींद और सबसे मीठे सपने मिलें।`,
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
        hindiTemplate: `एक बार एक विचारशील {animal} था जिसका नाम {name} था जो एक सुंदर बगीचे में रहता था। {name} को सबसे स्वादिष्ट फल और सब्जियां उगाने की विशेष प्रतिभा थी।

{name} का बगीचा रसीले बेर, कुरकुरे गाजर, और मीठे सेब से भरा था। हर दिन, {name} प्यार और देखभाल से पौधों की देखभाल करता, यह सुनिश्चित करता कि हर एक को पर्याप्त पानी और धूप मिले।

एक गर्मी के दिन, {name} ने देखा कि पड़ोस के कुछ जानवरों के पास पर्याप्त भोजन नहीं था। कुछ ऊंचे फलदार पेड़ों तक पहुंचने के लिए बहुत छोटे थे, जबकि अन्य को अपना बगीचा कैसे उगाया जाए, यह नहीं पता था।

सारा स्वादिष्ट खाना अपने पास रखने के बजाय, {name} के पास एक शानदार विचार आया। उन्होंने एक बगीचे की पार्टी की मेजबानी करने और फसल को साझा करने के लिए सभी को आमंत्रित करने का फैसला किया। {name} ने पूरा दिन सबसे पके हुए फल और ताजी सब्जियां तोड़ने में बिताया।

अगली सुबह, चारों ओर से जानवर {name} के बगीचे में आए। {name} ने उन्हें पौधों को नुकसान पहुंचाए बिना बेर कैसे तोड़ें, गाजर निकालने का सबसे अच्छा तरीका दिखाया, और बीज साझा किए ताकि दूसरे अपना बगीचा शुरू कर सकें।

जैसे सभी ने साथ में भोजन का आनंद लिया, कुछ जादुई हुआ। जानवर अपनी खास प्रतिभाएं भी साझा करने लगे। पक्षियों ने गाने सिखाए, खरगोशों ने अपनी सर्वश्रेष्ठ कूदने की चालें दिखाईं, और गिलहरियों ने अपनी गुप्त मेवा खोजने की तकनीकें साझा कीं।

{name} का बगीचा एक ऐसी जगह बन गया जहां सभी न केवल भोजन, बल्कि दोस्ती, ज्ञान और खुशी साझा करने के लिए एकत्र होते थे। हर दिन, और अधिक जानवर साझा करने के लिए चीजें लाते, जिससे बगीचा प्यार और उदारता से भरा जाता।

बगीचा और भी फला-फूला क्योंकि जब सभी साझा करते और मिलकर काम करते, तो हमेशा सभी के लिए पर्याप्त होता था। {name} ने सीखा कि साझा करने से न केवल दूसरों की मदद होती है बल्कि उनका अपना दिल भी बड़ा हो जाता है।

शुभ रात्रि, उदार। याद रखो कि {name} की तरह, जब आप दूसरों के साथ साझा करते हैं, तो आप दुनिया को सभी के लिए एक बेहतर और खुशहाल जगह बनाने में मदद करते हैं।`,
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
        hindiTemplate: `दुनिया के एक आरामदायक कोने में एक युवा {animal} रहता था जिसका नाम {name} था। हालांकि {name} छोटा था, उसके दिल में खोजी जाने वाली साहस से भरी थी।

एक दिन, जंगल में एक बड़ा तूफान आया, और कई छोटे जानवर डर गए। हालांकि {name} भी थोड़ा घबराया हुआ था, लेकिन वह जानता था कि उसे अपने दोस्तों की मदद के लिए बहादुर बनना होगा।

{name} को याद आया कि उसकी दादी हमेशा कहती थीं: "साहस का मतलब डरा नहीं होना नहीं है; बल्कि डर के बावजूद सही काम करना है।" अपने दिल में इन बुद्धिमान शब्दों के साथ, {name} ने कार्रवाई करने का फैसला किया।

अपनी चतुर {animal} कौशल का उपयोग करते हुए, {name} ने एक बड़ा खोखला पेड़ खोजा जहां सभी सुरक्षित और सूखे रह सकते थे। उन्होंने बारिश में कई यात्राएं कीं, अन्य जानवरों को आश्रय तक पहुंचाने में मदद की, यह सुनिश्चित किया कि तूफान में कोई भी अकेला न छूटे।

खोखले पेड़ के अंदर, {name} ने मजेदार कहानियां सुनाईं और खेल खेले ताकि सभी का मनोबल ऊंचा रहे। उन्होंने अपनी पसंदीदा बेर साझा कीं और दूसरों को पत्तियों से नरम बिस्तर बनाना सिखाया, जिससे डरावनी स्थिति एक आरामदायक पजामा पार्टी जैसी लगने लगी।

जैसे बाहर तूफान गरजता रहा, कुछ अद्भुत हुआ। जानवरों को एहसास हुआ कि एक साथ होने से वे मजबूत बन जाते हैं, और {name} की बहादुरी ने एक डरावने अनुभव को एक साहसिक कार्य में बदल दिया।

जब आखिरकार तूफान थम गया, और सूरज बादलों से झांकने लगा, सभी जानवरों ने {name} के साहस का जश्न मनाया। उन्हें एहसास हुआ कि कभी-कभी सबसे बड़े नायक सबसे छोटे पैकेज में आते हैं, और हर किसी के अंदर बहादुरी होती है।

उस दिन से, {name} को जंगल में न केवल एक बहादुर {animal} के रूप में जाना जाता था, बल्कि ऐसे किसी के रूप में भी जाना जाता था जो दूसरों को अपना साहस खोजने में मदद करता था।

याद रखो, छोटे, {name} की तरह, तुम्हारे पास तुम्हारी जानकारी से कहीं ज्यादा साहस है। कभी-कभी बहादुर होने का मतलब दूसरों की मदद करना होता है, भले ही तुम खुद थोड़ा डरे हुए हो।`,
        minLength: 1000
      }
    ]
  };

export function generateStory(storyData: Omit<InsertStory, "content">): string {
  const themeTemplates = templates[storyData.theme];
  if (!themeTemplates) {
    throw new Error(`No templates available for theme: ${storyData.theme}`);
  }

  const template = themeTemplates[Math.floor(Math.random() * themeTemplates.length)];

  const selectedTemplate = storyData.language === 'hi' ? template.hindiTemplate : template.template;

  if (!selectedTemplate) {
    throw new Error(`No template available for language: ${storyData.language}`);
  }

  // Replace placeholders with actual values
  return selectedTemplate
    .replace(/{name}/g, storyData.childName)
    .replace(/{animal}/g, storyData.language === 'hi' ? translateAnimalToHindi(storyData.animal) : storyData.animal);
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