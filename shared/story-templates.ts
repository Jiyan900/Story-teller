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
13:
14:One sunny morning, while playing near the crystal-clear stream, {name} heard gentle rustling in the bushes. To their surprise, they discovered other young animals who were also looking for friendship.
15:
16:Together with their new friends, {name} went on amazing adventures. They built cozy hideouts from fallen leaves, shared delicious berries, and told funny stories under the twinkling stars.
17:
18:As days passed, {name} learned that true friendship means being there for each other, sharing both happy and challenging moments. The little {animal} realized that everyone has something special to offer, and that's what makes friendship so magical.
19:
20:Every evening, when the moon rose high in the sky, {name} would gather with their forest friends to share stories about their day. They would laugh, play, and dream about tomorrow's adventures.
21:
22:The forest became a happier place because of {name}'s kindness and friendly nature. Other animals often said that meeting {name} was like finding a treasure - a true friend who made every day brighter.
23:
24:And so, {name} the {animal} discovered that the best gift in the world is having good friends who care about you, just as you care about them.
25:
26:Sweet dreams, little one. Remember, just like {name}, you too can make wonderful friends by being kind and sharing your heart with others.`,
            hindiTemplate: `एक समय की बात है, एक जादुई जंगल में एक छोटा {animal} रहता था जिसका नाम {name} था।
28:
29:{name} एक बहुत ही खास {animal} था जो नए दोस्त बनाना पसंद करता था, लेकिन कभी-कभी थोड़ा शर्मीला महसूस करता था।
30:
31:एक सुनहरी सुबह, क्रिस्टल जैसी स्वच्छ नदी के पास खेलते हुए, {name} को झाड़ियों में हलकी सरसराहट सुनाई दी। उन्हें आश्चर्य हुआ जब उन्होंने देखा कि अन्य युवा जानवर भी दोस्ती की तलाश में थे।
32:
33:अपने नए दोस्तों के साथ, {name} ने अद्भुत साहसिक कार्यों में हिस्सा लिया। उन्होंने गिरी हुई पत्तियों से आरामदायक छिपने की जगह बनाई, स्वादिष्ट बेरीज़ साझा कीं, और टिमटिमाते तारों के नीचे मजेदार कहानियां सुनाईं।
34:
35:जैसे-जैसे दिन बीते, {name} ने सीखा कि सच्ची दोस्ती का मतलब है एक-दूसरे के लिए मौजूद रहना, खुशी और चुनौतीपूर्ण पलों को साझा करना। छोटे {animal} को एहसास हुआ कि हर किसी में कुछ खास है, और यही दोस्ती को जादुई बनाता है।
36:
37:हर शाम, जब चांद आसमान में ऊंचा उठता, {name} अपने जंगल के दोस्तों के साथ दिन की कहानियां साझा करने के लिए इकट्ठा होता। वे हंसते, खेलते और कल के साहसिक कार्यों के सपने देखते।
38:
39:{name} की दयालुता और मैत्रीपूर्ण स्वभाव की वजह से जंगल एक खुशहाल जगह बन गया। अन्य जानवर अक्सर कहते थे कि {name} से मिलना खजाना पाने जैसा था - एक सच्चा दोस्त जो हर दिन को और भी खूबसूरत बनाता है।
40:
41:और इस तरह, {name} नाम के {animal} ने पाया कि दुनिया का सबसे बड़ा तोहफा है अच्छे दोस्तों का होना जो आपकी परवाह करते हैं, जैसे आप उनकी परवाह करते हैं।
42:
43:शुभ रात्रि, छोटे। याद रखो, {name} की तरह, तुम भी दूसरों के प्रति दयालु बनकर और अपना दिल साझा करके अद्भुत दोस्त बना सकते हो।`,
            minLength: 1000
        },
        {
            template: `By the sparkling ocean waves, there lived a curious {animal} named {name}. Unlike other {animal}s, {name} loved spending time near the water's edge, watching the colorful fish dance in the tide pools.
48:
49:One particularly sunny morning, {name} noticed a small seahorse who seemed lost and confused. Although {name} had never spoken to a sea creature before, they knew that making new friends meant being brave enough to take the first step.
50:
51:With gentle movements, {name} approached the seahorse and offered to help. The seahorse, whose name was Pearl, explained that the strong currents had swept her far from her family's coral reef. {name} promised to help Pearl find her way home.
52:
53:Together, they embarked on a wonderful journey along the shoreline. Along the way, they met friendly crabs who gave them directions, playful dolphins who offered them rides, and wise old turtles who shared shortcuts through the safer currents.
54:
55:What started as a mission to help someone in need turned into an amazing adventure of friendship. {name} and Pearl discovered that even though they were very different, their hearts were the same - full of kindness and joy in helping others.
56:
57:When they finally found Pearl's family, they were so grateful to {name} that they invited the {animal} to visit them anytime. From that day forward, {name} had not just one new friend, but an entire ocean full of them.
58:
59:Every sunrise, you could find {name} by the shore, sharing stories with Pearl and their other sea friends, proving that friendship knows no boundaries - not even between land and sea.
60:
61:Sweet dreams, little one. Remember that like {name}, sometimes the most wonderful friendships begin with a simple act of kindness.`,
            hindiTemplate: `चमकते समुद्र की लहरों के पास एक जिज्ञासु {animal} रहता था जिसका नाम {name} था।
63:
64:अन्य {animal} की तुलना में, {name} पानी के किनारे समय बिताना पसंद करता था, ज्वार के कुंडों में रंगीन मछलियों को नाचते हुए देखता था।
65:
66:एक विशेष सुनहरी सुबह, {name} ने एक छोटा समुद्री घोड़ा देखा जो खोया और भ्रमित लग रहा था। हालांकि {name} ने कभी किसी समुद्री जीव से बात नहीं की थी, वह जानता था कि नए दोस्त बनाने का मतलब है पहला कदम उठाने के लिए बहादुर होना।
67:
68:धीमी गति से, {name} समुद्री घोड़े के पास गया और मदद की पेशकश की। समुद्री घोड़े ने, जिसका नाम मोती था, बताया कि तेज धाराओं ने उसे उसके परिवार के प्रवाल भित्ति से दूर बहा दिया था। {name} ने मोती को घर का रास्ता खोजने में मदद करने का वादा किया।
69:
70:साथ मिलकर, वे समुद्र तट के किनारे एक शानदार यात्रा पर निकले। रास्ते में, उन्हें दिशा-निर्देश देने वाले दोस्ताना केकड़े, सवारी की पेशकश करने वाले खुशमिजाज डॉल्फिन, और सुरक्षित धाराओं के माध्यम से शॉर्टकट साझा करने वाले बुद्धिमान पुराने कछुए मिले।
71:
72:जो किसी की मदद करने के मिशन के रूप में शुरू हुआ था, वह दोस्ती का एक अद्भुत साहसिक कार्य बन गया। {name} और मोती ने पाया कि भले ही वे बहुत अलग थे, उनके दिल एक जैसे थे - दूसरों की मदद करने में दया और खुशी से भरे हुए।
73:
74:जब उन्होंने आखिरकार मोती के परिवार को खोज लिया, तो वे {name} के प्रति इतने आभारी थे कि उन्होंने {animal} को कभी भी उनसे मिलने के लिए आमंत्रित किया। उस दिन से, {name} के पास सिर्फ एक नया दोस्त नहीं था, बल्कि पूरा समुद्र दोस्तों से भरा था।
75:
76:हर सूर्योदय पर, आप {name} को समुद्र तट पर पा सकते थे, मोती और अपने अन्य समुद्री दोस्तों के साथ कहानियां साझा करते हुए, यह साबित करते हुए कि दोस्ती कोई सीमा नहीं जानती - यहां तक कि जमीन और समुद्र के बीच भी नहीं।
77:
78:शुभ रात्रि, छोटे। याद रखो कि {name} की तरह, कभी-कभी सबसे अद्भुत दोस्तियां दया के एक साधारण कार्य से शुरू होती हैं।`,
            minLength: 1000
        },
        {
            template: `High up in the snowy mountains, where the clouds tickled the peaks, lived a brave {animal} named {name}. Though the mountain air was chilly, {name}'s heart was always warm with dreams of making friends in this vast, beautiful place.
83:
84:One winter morning, {name} heard a soft whimper coming from behind a large snow drift. Carefully making their way through the snow, they discovered a young mountain goat who had gotten separated from their herd during the previous night's snowfall.
85:
86:{name} knew the mountains could be dangerous alone, so without hesitation, they offered to help the young goat find their family. The goat, who introduced himself as Alpine, was overjoyed to have a companion on his journey home.
87:
88:Together, {name} and Alpine navigated the mountain paths. They helped each other across icy streams, shared warm shelter during snowfall, and encouraged one another when the path seemed too steep. Along the way, they met wise eagles who guided them from above, friendly marmots who shared their burrows during rest stops, and gentle deer who showed them the safest paths through the valleys.
89:
90:As they traveled, {name} and Alpine shared stories and laughter, finding that their differences made their friendship even more special. {name} learned about life in the high peaks from Alpine, while Alpine was fascinated by {name}'s tales of life in other parts of the mountain.
91:
92:When they finally found Alpine's herd, the mountain goats were so impressed by {name}'s kindness that they declared the {animal} an honorary member of their family. From that day forward, {name} had a whole herd of friends to share adventures with in the mountains.
93:
94:Throughout all seasons, {name} and Alpine remained the closest of friends, showing everyone that the strongest friendships can bloom even in the coldest places, warmed by the heat of caring hearts.
95:
96:Sweet dreams, little one. Like {name}, remember that helping others can lead to the most wonderful and unexpected friendships.`,
            hindiTemplate: `बर्फीली पहाड़ियों की ऊंचाइयों पर, जहां बादल चोटियों को गुदगुदाते थे, एक बहादुर {animal} रहता था जिसका नाम {name} था। हालांकि पहाड़ी हवा ठंडी थी, {name} का दिल हमेशा इस विशाल, सुंदर जगह में दोस्त बनाने के सपनों से गरम रहता था।
98:
99:एक सर्दी की सुबह, {name} ने एक बड़े बर्फ के ढेर के पीछे से एक हल्की सी सिसकी सुनी। सावधानी से बर्फ के बीच से रास्ता बनाते हुए, उन्होंने एक युवा पहाड़ी बकरी को खोजा जो पिछली रात की बर्फबारी के दौरान अपने झुंड से बिछड़ गया था।
100:
101:{name} जानता था कि अकेले पहाड़ खतरनाक हो सकते हैं, इसलिए बिना किसी हिचकिचाहट के, उन्होंने युवा बकरी को उनका परिवार खोजने में मदद करने की पेशकश की। बकरी, जिसने खुद को अल्पाइन के रूप में पेश किया, घर की यात्रा में एक साथी पाकर बहुत खुश था।
102:
103:साथ मिलकर, {name} और अल्पाइन ने पहाड़ी रास्तों को नेविगेट किया। उन्होंने बर्फीली नदियों को पार करने में एक-दूसरे की मदद की, बर्फबारी के दौरान गर्म आश्रय साझा किया, और एक-दूसरे को प्रोत्साहित किया जब रास्ता बहुत खड़ा लगता था। रास्ते में, उन्हें ऊपर से मार्गदर्शन करने वाले बुद्धिमान चील, आराम के दौरान अपनी मांद साझा करने वाले दोस्ताना मारमोट, और घाटियों के माध्यम से सबसे सुरक्षित रास्ते दिखाने वाले कोमल हिरण मिले।
104:
105:यात्रा के दौरान, {name} और अल्पाइन ने कहानियां और हंसी साझा की, यह पाते हुए कि उनकी भिन्नताएं उनकी दोस्ती को और भी खास बनाती हैं। {name} ने अल्पाइन से ऊंची चोटियों में जीवन के बारे में सीखा, जबकि अल्पाइन {name} के पहाड़ के अन्य हिस्सों में जीवन की कहानियों से मंत्रमुग्ध था।
106:
107:जब उन्होंने आखिरकार अल्पाइन का झुंड खोज लिया, तो पहाड़ी बकरियां {name} की दयालुता से इतनी प्रभावित हुईं कि उन्होंने {animal} को अपने परिवार का मानद सदस्य घोषित कर दिया। उस दिन से, {name} के पास पहाड़ों में साहसिक कार्यों को साझा करने के लिए एक पूरा झुंड दोस्त था।
108:
109:सभी मौसमों में, {name} और अल्पाइन सबसे करीबी दोस्त बने रहे, सभी को दिखाते हुए कि सबसे मजबूत दोस्तियां सबसे ठंडी जगहों में भी खिल सकती हैं, देखभाल करने वाले दिलों की गर्मी से।
110:
111:शुभ रात्रि, छोटे। {name} की तरह, याद रखो कि दूसरों की मदद करने से सबसे अद्भुत और अप्रत्याशित दोस्तियां हो सकती हैं।`,
            minLength: 1000
        }
    ],
    Kindness: [
        {
            template: `In a beautiful meadow where flowers danced in the breeze, there lived a gentle {animal} named {name}. {name} had the biggest heart in all the land and loved helping others.
118:
119:One day, {name} noticed that some of the smaller animals were having trouble reaching the sweetest berries that grew high up in the trees. Without hesitation, {name} decided to help them.
120:
121:Using their special {animal} abilities, {name} found creative ways to help everyone get their share of the delicious berries. They made sure no one was left out, and soon the meadow was filled with happy animals enjoying their treats.
122:
123:Word spread about {name}'s kindness, and soon animals from all around would come seeking help. Whether it was helping a lost butterfly find its way home, or sharing an umbrella with a wet rabbit during rain, {name} was always there to lend a helping hand.
124:
125:The other animals started following {name}'s example. They learned that being kind not only made others happy but filled their own hearts with joy too. The meadow became known as the kindest place in all the land.
126:
127:Every evening, {name} would sit under the stars, surrounded by grateful friends who had been touched by their kindness. They would share stories and laugh together, creating memories that would last forever.
128:
129:As time went by, {name} discovered that even the smallest acts of kindness could make the biggest difference. A simple smile, a helping hand, or a friendly word could brighten someone's entire day.
130:
131:And so, {name} the {animal} continued spreading kindness wherever they went, making the world a better place, one good deed at a time.
132:
133:Remember, little one, just like {name}, you too have the power to make the world a kinder place with your actions and words.`,
            hindiTemplate: `एक सुंदर मैदान में जहाँ फूल हवा में नाचते थे, एक दयालु {animal} रहता था जिसका नाम {name} था। {name} के पास पूरी धरती में सबसे बड़ा दिल था और वह दूसरों की मदद करना पसंद करता था।
135:
136:एक दिन, {name} ने देखा कि कुछ छोटे जानवरों को पेड़ों पर ऊंचाई पर लगे मीठे बेर तक पहुंचने में परेशानी हो रही थी। बिना किसी हिचकिचाहट के, {name} ने उनकी मदद करने का फैसला किया।
137:
138:अपनी विशेष {animal} क्षमताओं का उपयोग करते हुए, {name} ने हर किसी को स्वादिष्ट बेर का हिस्सा दिलाने के रचनात्मक तरीके खोजे। उन्होंने सुनिश्चित किया कि कोई भी छूटे नहीं, और जल्द ही मैदान खुश जानवरों से भर गया जो अपने मिठाइयों का आनंद ले रहे थे।
139:
140:{name} की दयालुता की खबर फैल गई, और जल्द ही चारों ओर से जानवर मदद मांगने आने लगे। चाहे खोई हुई तितली को घर का रास्ता खोजने में मदद करना हो, या बारिश के दौरान गीले खरगोश के साथ छाता साझा करना हो, {name} हमेशा मदद के लिए तैयार रहता था।
141:
142:अन्य जानवर {name} के उदाहरण का अनुसरण करने लगे। उन्होंने सीखा कि दयालु होने से न केवल दूसरे खुश होते हैं बल्कि उनका अपना दिल भी खुशी से भर जाता है। मैदान को पूरी धरती में सबसे दयालु स्थान के रूप में जाना जाने लगा।
143:
144:हर शाम, {name} तारों के नीचे बैठता था, आभारी दोस्तों से घिरा हुआ जो उनकी दयालुता से प्रभावित हुए थे। वे कहानियां साझा करते और एक साथ हंसते, ऐसी यादें बनाते जो हमेशा के लिए रहेंगी।
145:
146:जैसे-जैसे समय बीता, {name} ने खोजा कि दयालुता के छोटे से कार्य भी सबसे बड़ा अंतर ला सकते हैं। एक सरली सी मुस्कान, मदद का हाथ, या एक दोस्ताना शब्द किसी के पूरे दिन को रोशन कर सकता है।
147:
148:और इस तरह, {name} नाम का {animal} जहां भी जाता, दयालुता फैलाता रहा, एक अच्छे काम के साथ दुनिया को बेहतर बनाता रहा।
149:
150:याद रखो, छोटे, {name} की तरह, तुम्हारे पास भी अपने कार्यों और शब्दों से दुनिया को एक दयालु स्थान बनाने की शक्ति है।`,
            minLength: 1000
        },
        {
            template: `In a bustling city park, there lived a gentle {animal} named {name}. Unlike the other city animals who were always in a rush, {name} was known for taking time to notice when someone needed help.
155:
156:One rainy morning, {name} spotted a tiny lost sparrow taking shelter under a leaf. The poor bird was shivering and couldn't find its way home because the rain had made all the buildings look different. Without hesitation, {name} offered to help.
157:
158:Using their knowledge of the city, {name} led the sparrow from building to building, carefully avoiding the busy streets. They asked other animals for directions and shared their umbrella with anyone they met who was caught in the rain.
159:
160:Along their journey, more animals joined them - a damp squirrel, a wet rabbit, and even a dripping wet mouse. {name} made sure everyone stayed warm and safe under their big umbrella as they searched for the sparrow's home.
161:
162:Finally, they found the sparrow's nest high up in an old oak tree. The sparrow's family was overjoyed to see their little one return. They were so grateful to {name} that they spread the word about their kindness throughout the park.
163:
164:From that day on, whenever it rained in the park, animals would gather under {name}'s umbrella, sharing stories and helping others find their way. The park became known as a place where no one ever had to face a stormy day alone.
165:
166:{name} discovered that a simple act of kindness, like sharing an umbrella, could create a ripple of goodness that spread throughout the entire park. Their small gesture had turned strangers into friends and made the busy city feel more like home.
167:
168:Sweet dreams, caring one. Remember that like {name}, your kindness can bring warmth and light to others, even on the rainiest of days.`,
            hindiTemplate: `एक व्यस्त शहर के पार्क में एक दयालु {animal} रहता था जिसका नाम {name} था। अन्य शहरी जानवरों की तरह जो हमेशा जल्दी में रहते थे, {name} किसी को मदद की जरूरत होने पर ध्यान देने के लिए जाना जाता था।
170:
171:एक बारिश की सुबह, {name} ने एक पत्ते के नीचे शरण लेते हुए एक छोटी खोई हुई चिड़िया को देखा। बेचारी चिड़िया कांप रही थी और बारिश के कारण सभी इमारतें अलग दिखने के कारण अपना घर नहीं ढूंढ पा रही थी। बिना किसी हिचकिचाहट के, {name} ने मदद करने की पेशकश की।
172:
173:शहर के बारे में अपने ज्ञान का उपयोग करते हुए, {name} चिड़िया को एक इमारत से दूसरी इमारत तक ले गया, व्यस्त सड़कों से सावधानी से बचते हुए। उन्होंने दिशाओं के लिए अन्य जानवरों से पूछा और बारिश में फंसे किसी भी व्यक्ति के साथ अपनी छतरी साझा की।
174:
175:उनकी यात्रा के दौरान, और जानवर उनके साथ जुड़ गए - एक नम गिलहरी, एक गीला खरगोश, और यहां तक कि एक भीगा हुआ चूहा। चिड़िया के घर की तलाश करते समय {name} ने सुनिश्चित किया कि हर कोई उनकी बड़ी छतरी के नीचे गरम और सुरक्षित रहे।
176:
177:आखिरकार, उन्होंने एक पुराने बलूत के पेड़ पर ऊंचाई पर चिड़िया का घोंसला खोज लिया। चिड़िया का परिवार अपने छोटे को वापस देखकर बहुत खुश था। वे {name} की दयालुता के लिए इतने आभारी थे कि उन्होंने पूरे पार्क में उनकी दयालुता के बारे में बात फैला दी।
178:
179:उस दिन से, जब भी पार्क में बारिश होती, जानवर {name} की छतरी के नीचे इकट्ठा होते, कहानियां साझा करते और दूसरों को रास्ता खोजने में मदद करते। पार्क एक ऐसी जगह के रूप में जाना जाने लगा जहां किसी को भी तूफानी दिन का सामना अकेले नहीं करना पड़ता था।
180:
181:{name} ने पाया कि दयालुता का एक साधारण कार्य, जैसे छतरी साझा करना, अच्छाई की एक लहर पैदा कर सकता है जो पूरे पार्क में फैल जाती है। उनके छोटे से इशारे ने अजनबियों को दोस्त बना दिया और व्यस्त शहर को घर जैसा महसूस कराया।
182:
183:शुभ रात्रि, देखभाल करने वाले। याद रखो कि {name} की तरह, आपकी दयालुता सबसे बारिश वाले दिनों में भी दूसरों के लिए गर्मी और रोशनी ला सकती है।`,
            minLength: 1000
        }
    ],
    Adventure: [
        {
            template: `Deep in the heart of a mysterious land, there lived an adventurous {animal} named {name}. {name} had always dreamed of exploring the unknown and discovering hidden treasures.
190:
191:One morning, {name} found an old map tucked beneath a giant mushroom. The map showed the way to a legendary rainbow waterfall, where magical creatures were said to gather and play.
192:
193:Excited about the adventure ahead, {name} packed a small bag with snacks and set off on the journey. Along the way, they crossed swaying rope bridges, climbed towering trees, and navigated through sparkling caves.
194:
195:During the journey, {name} met other brave animals who joined the quest. Together, they solved riddles left by ancient forest spirits and helped each other overcome challenging obstacles.
196:
197:As they traveled deeper into the enchanted forest, {name} and their companions discovered wonderful secrets. They found glowing flowers that sang melodies, friendly clouds that gave them rides, and even a group of dancing fireflies that lit their path.
198:
199:Finally, after an exciting journey, {name} and friends reached the rainbow waterfall. The sight was more beautiful than they could have imagined - water cascading in all colors of the rainbow, creating magical sparkles in the air.
200:
201:The adventurers spent the rest of the day playing in the rainbow mist, making new friends with the magical creatures, and sharing stories of their amazing journey.
202:
203:That night, as {name} headed home with their new friends, they realized that the greatest treasure wasn't at the end of the map - it was the adventure itself and the friendships they made along the way.
204:
205:Sweet dreams, brave one. Remember that like {name}, you too can find magic and wonder in every adventure, big or small.`,
            hindiTemplate: `एक रहस्यमयी भूमि के दिल में, एक साहसी {animal} रहता था जिसका नाम {name} था।
207:
208:{name} हमेशा से अज्ञात की खोज और छिपे हुए खजाने की खोज का सपना देखता था।
209:
210:एक सुबह, {name} को एक विशाल मशरूम के नीचे एक पुराना नक्शा मिला। नक्शे में एक किंवदंती इंद्रधनुषी झरने का रास्ता दिखाया गया था, जहां जादुई प्राणियों के एकत्र होने और खेलने की बात कही जाती थी।
211:
212:आगे की साहसिक यात्रा के लिए उत्साहित, {name} ने नाश्ते का एक छोटा बैग पैक किया और यात्रा पर निकल पड़ा। रास्ते में, उन्होंने झूलते रस्सी के पुल पार किए, ऊंचे पेड़ों पर चढ़े, और चमकदार गुफाओं से होकर गुजरे।
213:
214:यात्रा के दौरान, {name} अन्य बहादुर जानवरों से मिला जो इस खोज में शामिल हो गए। साथ मिलकर, उन्होंने प्राचीन वन आत्माओं द्वारा छोड़ी गई पहेलियां सुलझाईं और चुनौतीपूर्ण बाधाओं को पार करने में एक-दूसरे की मदद की।
215:
216:जैसे-जैसे वे जादुई जंगल में गहराई में जाते गए, {name} और उनके साथियों ने अद्भुत रहस्यों की खोज की। उन्होंने धुनें गाने वाले चमकीले फूल, दोस्ताना बादल जो उन्हें सवारी देते, और नृत्य करने वाली जुगनुओं का एक समूह पाया जो उनका रास्ता रोशन करता था।
217:
218:अंत में, एक रोमांचक यात्रा के बाद, {name} और दोस्त इंद्रधनुषी झरने तक पहुंचे। दृश्य उनकी कल्पना से भी अधिक सुंदर था - इंद्रधनुष के सभी रंगों में पानी गिर रहा था, हवा में जादुई चमक पैदा कर रहा था।
219:
220:साहसी यात्री पूरे दिन इंद्रधनुषी धुंध में खेलते रहे, जादुई प्राणियों के साथ नई दोस्ती बनाई, और अपनी अद्भुत यात्रा की कहानियां साझा कीं।
221:
222:उस रात, जब {name} अपने नए दोस्तों के साथ घर की ओर चला, उसे एहसास हुआ कि सबसे बड़ा खजाना नक्शे के अंत में नहीं था - वह था साहसिक यात्रा और रास्ते में बनी दोस्तियां।
223:
224:शुभ रात्रि, बहादुर। याद रखो कि {name} की तरह, तुम भी हर साहसिक कार्य में, चाहे वह छोटा हो या बड़ा, जादू और आश्चर्य पा सकते हो।`,
            minLength: 1000
        },
        {
            template: `High in the clouds above a mysterious floating island, there lived a brave {animal} named {name}. {name} had heard tales of a magical crystal that could make the impossible possible, hidden somewhere among the floating islands of the sky kingdom.
229:
230:One starlit evening, while watching shooting stars streak across the night sky, {name} noticed something unusual - a glowing map appearing in the trail of stardust. The map showed a path through the floating islands, leading to what looked like a crystal palace in the clouds.
231:
232:Excited by this magical discovery, {name} prepared for their sky adventure. They gathered floating berries that would help them hop between islands, collected glowing cloud-cotton for light, and borrowed a pair of wind-riding goggles from their wise owl friend.
233:
234:The journey through the sky kingdom was more amazing than {name} could have imagined. They bounced on bouncy cloud trampolines, slid down rainbow bridges, and hitched rides on friendly passing comets. Each floating island held new wonders - singing flowers that floated in mid-air, crystal butterflies that left trails of sparkles, and even a group of cloud-shaping dragons who helped guide the way.
235:
236:As {name} traveled higher and higher, they encountered other sky explorers who joined their quest. Together, they solved the riddles of the wind spirits, danced with aurora lights, and helped lost star fragments find their way back to their constellations.
237:
238:Finally, after crossing a bridge made of moonbeams, {name} and their new friends reached the crystal palace. But instead of finding just one magical crystal, they discovered something even more wonderful - a garden of growing crystals, each one containing different types of magic.
239:
240:The guardian of the crystal palace appeared - a wise phoenix who had been watching their journey. The phoenix explained that the real magic wasn't in the crystals themselves, but in the courage, kindness, and friendship {name} had shown throughout their adventure.
241:
242:As a reward for their brave and caring heart, the phoenix gave {name} a small crystal to take home. But {name} realized they had already received the greatest gift - an amazing adventure and new friends who made the whole sky kingdom feel like home.
243:
244:Sweet dreams, brave adventurer. Remember that like {name}, the greatest treasures are often found not at the journey's end, but in the magical moments and friendships we make along the way.`,
            hindiTemplate: `रहस्यमयी उड़ते द्वीप के ऊपर बादलों में, एक बहादुर {animal} रहता था जिसका नाम {name} था। {name} ने एक जादुई क्रिस्टल की कहानियां सुनी थीं जो असंभव को संभव बना सकता था, जो आकाश राज्य के उड़ते द्वीपों के बीच कहीं छिपा था।
246:
247:एक तारों भरी शाम, जब रात के आसमान में टूटते तारों को देख रहे थे, {name} ने कुछ असामान्य देखा - तारों की धूल के पीछे एक चमकता हुआ नक्शा दिखाई दिया। नक्शे में उड़ते द्वीपों के बीच एक रास्ता दिखाया गया था, जो बादलों में एक क्रिस्टल महल की तरफ ले जाता था।
248:
249:इस जादुई खोज से उत्साहित, {name} ने अपनी आकाशीय साहसिक यात्रा के लिए तैयारी की। उन्होंने उड़ने वाली बेरियां इकट्ठा कीं जो उन्हें द्वीपों के बीच कूदने में मदद करेंगी, रोशनी के लिए चमकता हुआ बादल-कपास इकट्ठा किया, और अपने बुद्धिमान उल्लू दोस्त से हवा में उड़ने वाला चश्मा उधार लिया।
250:
251:आकाश राज्य के माध्यम से यात्रा {name} की कल्पना से भी अधिक अद्भुत थी। वे उछलते बादल ट्रैम्पोलीन पर कूदे, इंद्रधनुष के पुलों पर फिसले, और दोस्ताना धूमकेतुओं पर सवारी की। हर उड़ते द्वीप में नए चमत्कार थे - हवा में तैरते गाते फूल, क्रिस्टल तितलियां जो चमक की लकीरें छोड़ती थीं, और यहां तक कि बादल-आकार देने वाले ड्रैगन जो रास्ता दिखाने में मदद करते थे।
252:
253:जैसे-जैसे {name} ऊपर और ऊपर यात्रा करते गए, उन्हें अन्य आकाश खोजी मिले जो उनकी खोज में शामिल हो गए। साथ मिलकर, उन्होंने हवा की आत्माओं की पहेलियां सुलझाईं, ऑरोरा रोशनी के साथ नृत्य किया, और खोए हुए तारों के टुकड़ों को उनके नक्षत्रों में वापस जाने में मदद की।
254:
255:आखिरकार, चांदनी की किरणों से बने पुल को पार करने के बाद, {name} और उनके नए दोस्त क्रिस्टल महल तक पहुंचे। लेकिन सिर्फ एक जादुई क्रिस्टल की बजाय, उन्होंने कुछ और भी अद्भुत खोजा - बढ़ते क्रिस्टल का एक बगीचा, जिसमें हर एक में अलग-अलग प्रकार का जादू था।
256:
257:क्रिस्टल महल का रक्षक प्रकट हुआ - एक बुद्धिमान फीनिक्स जो उनकी यात्रा को देख रहा था। फीनिक्स ने समझाया कि असली जादू क्रिस्टल में नहीं था, बल्कि {name} ने अपनी साहसिक यात्रा के दौरान जो साहस, दयालुता और दोस्ती दिखाई थी, उसमें था।
258:
259:उनके बहादुर और देखभाल करने वाले दिल के लिए इनाम के रूप में, फीनिक्स ने {name} को घर ले जाने के लिए एक छोटा क्रिस्टल दिया। लेकिन {name} को एहसास हुआ कि उन्हें पहले ही सबसे बड़ा उपहार मिल चुका था - एक अद्भुत साहसिक यात्रा और नए दोस्त जिन्होंने पूरे आकाश राज्य को घर जैसा महसूस कराया।
260:
261:शुभ रात्रि, बहादुर साहसी। याद रखो कि {name} की तरह, सबसे बड़े खजाने अक्सर यात्रा के अंत में नहीं, बल्कि रास्ते में बनाए गए जादुई पलों और दोस्तियों में मिलते हैं।`,
            minLength: 1000
        }
    ],
    Bedtime: [
        {
            template: `As the sun began to set in the peaceful woodland, a sleepy little {animal} named {name} was getting ready for bed. {name} loved bedtime because it meant cozy moments and sweet dreams ahead.
268:
269:{name} had their own special bedtime routine. First, they would take a warm bath in the nearby stream, letting the gentle water wash away the day's adventures. Then, they would dry off with soft leaves and put on their favorite starry pajamas.
270:
271:The little {animal}'s nest was the coziest spot in all the forest. It was lined with the softest moss and decorated with twinkling fireflies who offered their gentle light. {name} had collected special treasures to keep nearby - smooth pebbles, pretty feathers, and a favorite blanket made of the warmest cloud fluff.
272:
273:As {name} snuggled into their bed, the evening chorus began. Crickets played their lullaby, owls hooted softly in the distance, and the wind whispered sweet melodies through the leaves. Everything was peaceful and calm.
274:
275:The moon peeked through the branches, casting a silver glow over {name}'s bed. Tiny stars winked down at the sleepy {animal}, as if saying goodnight to their friend below.
276:
277:{name}'s eyes grew heavy as they thought about all the fun they had during the day. They remembered playing with friends, finding tasty treats, and learning new things about the forest. Now it was time to rest and dream about tomorrow's adventures.
278:
279:The night wrapped around {name} like a warm hug, and they felt safe and loved. Their breathing became slow and steady as sleep began to take over. In the quiet of the night, {name} drifted off to dreamland, where magical adventures awaited.
280:
281:Sweet dreams, precious one. Like {name}, may you have the coziest sleep and the sweetest dreams tonight.`,
            hindiTemplate: `जैसे ही सूरज शांत जंगल में ढलने लगा, एक नींद भरा छोटा {animal} जिसका नाम {name} था, सोने की तैयारी कर रहा था। {name} को सोने का समय बहुत पसंद था क्योंकि इसका मतलब था आरामदायक पल और मीठे सपने।
283:
284:{name} की अपनी खास सोने की दिनचर्या थी। पहले, वह पास की नदी में गर्म स्नान करता, कोमल पानी को दिन के साहसिक कार्यों को धोने देता। फिर, वह नरम पत्तों से सूखता और अपना पसंदीदा तारों वाला नाइट सूट पहनता।
285:
286:छोटे {animal} का घोंसला पूरे जंगल में सबसे आरामदायक जगह थी। यह सबसे नरम मॉस से सजा था और टिमटिमाते जुगनुओं से सजाया गया था जो अपनी कोमल रोशनी प्रदान करते थे। {name} ने पास रखने के लिए खास खजाने इकट्ठे किए थे - चिकने पत्थर, सुंदर पंख, और बादल की रूई से बनी एक पसंदीदा रजाई।
287:
288:जैसे ही {name} अपने बिस्तर में आराम से लेटा, शाम का संगीत शुरू हो गया। झींगुर अपनी लोरी गाते, उल्लू दूर से धीमे से गूंजते, और हवा पत्तों के बीच से मीठी धुनें गुनगुनाती। हर चीज शांत और सुकून भरी थी।
289:
290:चांद शाखाओं के बीच से झांकता, {name} के बिस्तर पर चांदी की चमक बिखेरता। छोटे तारे नींद भरे {animal} को आंख मारते, जैसे अपने नीचे के दोस्त को शुभरात्रि कह रहे हों।
291:
292:{name} की आंखें भारी होने लगीं जैसे वह दिन भर के मजे के बारे में सोचता। उसे दोस्तों के साथ खेलने, स्वादिष्ट खाने ढूंढने, और जंगल के बारे में नई चीजें सीखने की याद आई। अब आराम करने और कल के साहसिक कार्यों के सपने देखने का समय था।
293:
294:रात ने {name} को गर्म आलिंगन की तरह लपेट लिया, और उसे सुरक्षित और प्यारा महसूस हुआ। उसकी सांसें धीमी और स्थिर हो गईं जैसे नींद धीरे-धीरे आने लगी। रात की शांति में, {name} सपनों की दुनिया में चला गया, जहां जादुई साहसिक कार्य उसका इंतजार कर रहे थे।
295:
296:शुभ रात्रि, प्यारे। {name} की तरह, तुम्हें भी सबसे आरामदायक नींद और सबसे मीठे सपने मिलें।`,
            minLength: 1000
        }
    ],
    Sharing: [
        {
            template: `Once there was a thoughtful {animal} named {name} who lived in a beautiful garden. {name} had a special talent for growing the most delicious fruits and vegetables in all the land.
303:
304:{name}'s garden was filled with juicy berries, crunchy carrots, and sweet apples. Every day, {name} would tend to the plants with love and care, making sure each one got enough water and sunshine.
305:
306:One summer day, {name} noticed that some of the other animals in the neighborhood didn't have enough food. Some were too small to reach the tall fruit trees, while others didn't know how to grow their own gardens.
307:
308:Instead of keeping all the delicious food to themselves, {name} had a wonderful idea. They decided to host a garden party and invite everyone to share in the harvest. {name} spent the whole day picking the ripest fruits and freshest vegetables.
309:
310:The next morning, animals from all around came to {name}'s garden. {name} taught them how to pick berries without hurting the plants, showed them the best way to dig up carrots, and shared seeds so others could start their own gardens.
311:
312:As everyone shared the feast together, something magical happened. The animals began sharing their own special talents too. The birds taught songs, the rabbits showed their best jumping tricks, and the squirrels shared their secret nut-finding techniques.
313:
314:{name}'s garden became a place where everyone came together to share not just food, but friendship, knowledge, and joy. Every day, more animals would bring things to share, making the garden grow with love and generosity.
315:
316:The garden flourished even more because when everyone shared and worked together, there was always enough for all. {name} learned that sharing not only helped others but made their own heart grow bigger too.
317:
318:Sweet dreams, generous one. Remember that like {name}, when you share with others, you help make the world a better and happier place for everyone.`,
            hindiTemplate: `एक बार एक विचारशील {animal} था जिसका नाम {name} था जो एक सुंदर बगीचे में रहता था। {name} को सबसे स्वादिष्ट फल और सब्जियां उगाने की विशेष प्रतिभा थी।
320:
321:{name} का बगीचा रसीले बेर, कुरकुरे गाजर, और मीठे सेब से भरा था। हर दिन, {name} प्यार और देखभाल से पौधों की देखभाल करता, यह सुनिश्चित करता कि हर एक को पर्याप्त पानी और धूप मिले।
322:
323:एक गर्मी के दिन, {name} ने देखा कि पड़ोस के कुछ जानवरों के पास पर्याप्त भोजन नहीं था। कुछ ऊंचे फलदार पेड़ों तक पहुंचने के लिए बहुत छोटे थे, जबकि अन्य को अपना बगीचा कैसे उगाया जाए, यह नहीं पता था।
324:
325:सारा स्वादिष्ट खाना अपने पास रखने के बजाय, {name} के पास एक शानदार विचार आया। उन्होंने एक बगीचे की पार्टी की मेजबानी करने और फसल को साझा करने के लिए सभी को आमंत्रित करने का फैसला किया। {name} ने पूरा दिन सबसे पके हुए फल और ताजी सब्जियां तोड़ने में बिताया।
326:
327:अगली सुबह, चारों ओर से जानवर {name} के बगीचे में आए। {name} ने उन्हें पौधों को नुकसान पहुंचाए बिना बेर कैसे तोड़ें, गाजर निकालने का सबसे अच्छा तरीका दिखाया, और बीज साझा किए ताकि दूसरे अपना बगीचा शुरू कर सकें।
328:
329:जैसे सभी ने साथ में भोजन का आनंद लिया, कुछ जादुई हुआ। जानवर अपनी खास प्रतिभाएं भी साझा करने लगे। पक्षियों ने गाने सिखाए, खरगोशों ने अपनी सर्वश्रेष्ठ कूदने की चालें दिखाईं, और गिलहरियों ने अपनी गुप्त मेवा खोजने की तकनीकें साझा कीं।
330:
331:{name} का बगीचा एक ऐसी जगह बन गया जहां सभी न केवल भोजन, बल्कि दोस्ती, ज्ञान और खुशी साझा करने के लिए एकत्र होते थे। हर दिन, और जानवर साझा करने के लिए चीजें लाते, जिससे बगीचा प्यार और उदारता से बढ़ता गया।
332:
333:बगीचा और भी फला-फूला क्योंकि जब सभी ने साझा किया और मिलकर काम किया, तो सभी के लिए हमेशा पर्याप्त था। {name} ने सीखा कि साझा करने से न केवल दूसरों की मदद होती है बल्कि उनका अपना दिल भी बड़ा हो जाता है।
334:
335:शुभ रात्रि, उदार। याद रखो कि {name} की तरह, जब आप दूसरों के साथ साझा करते हैं, तो आप सभी के लिए दुनिया को एक बेहतर और खुशहाल जगह बनाने में मदद करते हैं।`,
            minLength: 1000
        }
    ],
    Courage: [
        {
            template: `In a cozy corner of the world lived a young {animal} named {name}. Although {name} was small, they had a heart full of courage waiting to be discovered.
342:
343:One day, a big storm came to the forest, and many of the smaller animals were scared. Even though {name} felt a little nervous too, they knew they had to be brave to help their friends.
344:
345:{name} remembered what their grandmother always said: "Courage isn't about not being scared; it's about doing what's right even when you are scared." With these wise words in their heart, {name} decided to take action.
346:
347:Using their clever {animal} skills, {name} found a large hollow tree where everyone could stay safe and dry. They made several trips through the rain, helping guide other animals to the shelter, making sure no one was left alone in the storm.
348:
349:Inside the hollow tree, {name} told funny stories and played games to help keep everyone's spirits up. They shared their favorite berries and taught others how to make soft beds from leaves, making the scary situation feel more like a cozy sleepover.
350:
351:As the storm raged outside, something amazing happened. The animals realized that being together made them stronger, and that {name}'s bravery had turned a frightening experience into an adventure.
352:
353:When the storm finally passed, and the sun peeked through the clouds, all the animals celebrated {name}'s courage. They realized that sometimes the biggest heroes come in the smallest packages, and that everyone has bravery inside them.
354:
355:From that day on, {name} was known throughout the forest not just as a brave {animal}, but as someone who helped others find their own courage too.
356:
357:Remember, little one, just like {name}, you have more courage than you know. Sometimes being brave means helping others, even when you're a little scared yourself.`,
            hindiTemplate: `दुनिया के एक आरामदायक कोने में एक युवा {animal} रहता था जिसका नाम {name} था। हालांकि {name} छोटा था, उसके दिल में खोजी जाने वाली साहस से भरी थी।
359:
360:एक दिन, जंगल में एक बड़ा तूफान आया, और कई छोटे जानवर डर गए। हालांकि {name} भी थोड़ा घबराया हुआ था, लेकिन वह जानता था कि उसे अपने दोस्तों की मदद के लिए बहादुर बनना होगा।
361:
362:{name} को याद आया कि उसकी दादी हमेशा कहती थीं: "साहस का मतलब डरा नहीं होना नहीं है; बल्कि डर के बावजूद सही काम करना है।" अपने दिल में इन बुद्धिमान शब्दों के साथ, {name} ने कार्रवाई करने का फैसला किया।
363:
364:अपनी चतुर {animal} कौशल का उपयोग करते हुए, {name} ने एक बड़ा खोखला पेड़ खोजा जहां सभी सुरक्षित और सूखे रह सकते थे। उन्होंने बारिश में कई यात्राएं कीं, अन्य जानवरों को आश्रय तक पहुंचाने में मदद की, यह सुनिश्चित किया कि तूफान में कोई भी अकेला न छूटे।
365:
366:खोखले पेड़ के अंदर, {name} ने मजेदार कहानियां सुनाईं और खेल खेले ताकि सभी का मनोबल ऊंचा रहे। उन्होंने अपनी पसंदीदा बेर साझा कीं और दूसरों को पत्तियों से नरम बिस्तर बनाना सिखाया, जिससे डरावनी स्थिति एक आरामदायक पजामा पार्टी जैसी लगने लगी।
367:
368:जैसे बाहर तूफान गरजता रहा, कुछ अद्भुत हुआ। जानवरों को एहसास हुआ कि एक साथ होने से वे मजबूत बन जाते हैं, और {name} की बहादुरी ने एक डरावने अनुभव को एक साहसिक कार्य में बदल दिया।
369:
370:जब आखिरकार तूफान थम गया, और सूरज बादलों से झांकने लगा, सभी जानवरों ने {name} के साहस का जश्न मनाया। उन्हें एहसास हुआ कि कभी-कभी सबसे बड़े नायक सबसे छोटे पैकेज में आते हैं, और हर किसी के अंदर बहादुरी होती है।
371:
372:उस दिन से, {name} को जंगल में न केवल एक बहादुर {animal} के रूप में जाना जाता था, बल्कि ऐसे किसी के रूप में भी जाना जाता था जो दूसरों को अपना साहस खोजने में मदद करता था।
373:
374:याद रखो, छोटे, {name} की तरह, तुम्हारे पास तुम्हारी जानकारी से कहीं ज्यादा साहस है। कभी-कभी बहादुर होने का मतलब दूसरों की मदद करना होता है, भले ही तुम खुद थोड़ा डरे हुए हो।`,
            minLength: 1000
        }
    ]
};

export function generateStory(values: InsertStory): string {
    const themeTemplates = templates[values.theme as keyof typeof templates];
    if (!themeTemplates || themeTemplates.length === 0) {
        throw new Error(`No templates found for theme: ${values.theme}`);
    }

    // Select a random template from available ones for this theme
    const templateData = themeTemplates[Math.floor(Math.random() * themeTemplates.length)];
    const template = values.language === 'hi' ? templateData.hindiTemplate : templateData.template;

    if (!template) {
        throw new Error(`No template found for language: ${values.language}`);
    }

    // Replace placeholders with actual values
    return template
        .replace(/{name}/g, values.childName)
        .replace(/{animal}/g, values.animal);
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