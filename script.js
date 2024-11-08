// The data
const sentences = [
    {
        "english": "Good morning!",
        "pronunciation": "गुड मॉर्निंग!",
        "translation": "सुप्रभात!"
    },
    {
        "english": "What time is it?",
        "pronunciation": "व्हाट टाइम इज़ इट?",
        "translation": "ये कितने बजे हैं?"
    },
    {
        "english": "Can you help me with this?",
        "pronunciation": "कैन यू हेल्प मी विद दिस?",
        "translation": "क्या आप मेरी इसमें मदद कर सकते हैं?"
    },
    {
        "english": "I’m sorry for the delay.",
        "pronunciation": "आय एम सॉरी फॉर द डिले।",
        "translation": "मुझे देरी के लिए खेद है।"
    },
    {
        "english": "Could you please repeat that?",
        "pronunciation": "कुड यू प्लीज़ रिपीट दैट?",
        "translation": "क्या आप कृपया इसे दोहरा सकते हैं?"
    },
    {
        "english": "What’s your name?",
        "pronunciation": "व्हाट्स योर नेम?",
        "translation": "तुम्हारा नाम क्या है?"
    },
    {
        "english": "How are you today?",
        "pronunciation": "हाउ आर यू टुडे?",
        "translation": "आप आज कैसे हैं?"
    },
    {
        "english": "They attend concerts.",
        "pronunciation": "दे एटेंड कॉन्सर्ट्स।",
        "translation": "वे कॉन्सर्ट में भाग लेते हैं।"
    },
    {
        "english": "You participate in marathons.",
        "pronunciation": "यू पार्टिसिपेट इन मैराथन्स।",
        "translation": "आप मैराथन में भाग लेते हैं।"
    },
    {
        "english": "Where are you from?",
        "pronunciation": "व्हेयर आर यू फ्रॉम?",
        "translation": "आप कहाँ से हैं?"
    },
    {
        "english": "Nice to meet you.",
        "pronunciation": "नाइस टू मीट यू।",
        "translation": "आपसे मिलकर अच्छा लगा।"
    },
    {
        "english": "How was your day?",
        "pronunciation": "हाउ वाज योर डे?",
        "translation": "आपका दिन कैसा था?"
    },
    {
        "english": "I’m hungry. Let’s grab something to eat.",
        "pronunciation": "आय एम हंगरी। लेट्स ग्रैब समथिंग टू ईट।",
        "translation": "मुझे भूख लगी है। चलो कुछ खाने के लिए लेते हैं।"
    },
    {
        "english": "Excuse me, where is the nearest restroom?",
        "pronunciation": "एक्सक्यूज़ मी, व्हेयर इज़ द नीयरेस्ट रेस्ट रूम?",
        "translation": "क्षमा करें, निकटतम शौचालय कहाँ है?"
    },
    {
        "english": "Can you recommend a good book?",
        "pronunciation": "कैन यू रिकमेंड अ गुड बुक?",
        "translation": "क्या आप एक अच्छी किताब की सिफारिश कर सकते हैं?"
    },
    {
        "english": "Where is the nearest ATM?",
        "pronunciation": "व्हेयर इज़ द नीयरेस्ट एटीएम?",
        "translation": "निकटतम एटीएम कहाँ है?"
    },
    {
        "english": "I’m not feeling well.",
        "pronunciation": "आय एम नॉट फीलिंग वेल।",
        "translation": "मैं ठीक महसूस नहीं कर रहा हूँ।"
    },
    {
        "english": "How was your weekend?",
        "pronunciation": "हाउ वाज योर वीकेंड?",
        "translation": "आपका वीकेंड कैसा था?"
    },
    {
        "english": "I can’t find my keys.",
        "pronunciation": "आय कांट फाइंड माय कीज़।",
        "translation": "मैं अपनी चाबियाँ नहीं ढूंढ पा रहा हूँ।"
    },
    {
        "english": "Can you give me a hand?",
        "pronunciation": "कैन यू गिव मी अ हैंड?",
        "translation": "क्या आप मेरी मदद कर सकते हैं?"
    },
    {
        "english": "That’s a great idea!",
        "pronunciation": "दैट्स अ ग्रेट आइडिया!",
        "translation": "यह एक शानदार विचार है!"
    },
    {
        "english": "I’m so excited!",
        "pronunciation": "आय एम सो एक्साइटेड!",
        "translation": "मैं बहुत उत्साहित हूँ!"
    },
    {
        "english": "What’s your favorite music genre?",
        "pronunciation": "व्हाट्स योर फेवरेट म्यूज़िक जेनर?",
        "translation": "आपका पसंदीदा संगीत शैली क्या है?"
    },
    {
        "english": "Have a safe trip!",
        "pronunciation": "हैव अ सेफ ट्रिप!",
        "translation": "आपका यात्रा सुरक्षित हो!"
    },
    {
        "english": "How much does it cost?",
        "pronunciation": "हाउ मच डज़ इट कॉस्ट?",
        "translation": "यह कितने का है?"
    },
    {
        "english": "How would you like steaks to be cooked?",
        "pronunciation": "हाउ वुड यू लाइक स्टेक्स टू बी कुक्ड?",
        "translation": "आप स्टेक किस प्रकार पकाना पसंद करेंगे?"
    },
    {
        "english": "I want to go to the metro station.",
        "pronunciation": "आय वांट टू गो टू द मेट्रो स्टेशन।",
        "translation": "मैं मेट्रो स्टेशन जाना चाहता हूँ।"
    },
    {
        "english": "I want to go to the hospital.",
        "pronunciation": "आय वांट टू गो टू द हॉस्पिटल।",
        "translation": "मैं अस्पताल जाना चाहता हूँ।"
    },
    {
        "english": "I want to introduce myself.",
        "pronunciation": "आय वांट टू इंट्रोड्यूस मायसेल्फ।",
        "translation": "मैं अपना परिचय देना चाहता हूँ।"
    },
    {
        "english": "Have you ever had a pet?",
        "pronunciation": "हैव यू एवर हैड अ पेट?",
        "translation": "क्या आपने कभी पालतू जानवर रखा है?"
    },
    {
        "english": "What is your favorite season?",
        "pronunciation": "व्हाट इज़ योर फेवरेट सीजन?",
        "translation": "आपका पसंदीदा मौसम कौन सा है?"
    },
    {
        "english": "My favorite actor is Shah Rukh Khan.",
        "pronunciation": "माय फेवरेट एक्टर इज़ शाह रुख़ खान।",
        "translation": "मेरा पसंदीदा अभिनेता शाह रुख़ खान है।"
    },
    {
        "english": "She prefers coffee.",
        "pronunciation": "शी प्रेफर्स कॉफी।",
        "translation": "उसे कॉफी पसंद है।"
    },
    {
        "english": "They met him.",
        "pronunciation": "दे मेट हिम।",
        "translation": "उन्होंने उससे मिले।"
    },
    {
        "english": "I’m sorry, I couldn’t call you.",
        "pronunciation": "आय एम सॉरी, आय कुडन्ट कॉल यू।",
        "translation": "मुझे खेद है, मैं आपको कॉल नहीं कर सका।"
    },
    {
        "english": "I sent that yesterday.",
        "pronunciation": "आय सेंट दैट येस्टर्डे।",
        "translation": "मैंने वह कल भेजा।"
    },
    {
        "english": "Make my apologies.",
        "pronunciation": "मेक माय अपोलॉजीज़।",
        "translation": "मेरी क्षमाएँ स्वीकारें।"
    },
    {
        "english": "She feels that too.",
        "pronunciation": "शी फील्स दैट टू।",
        "translation": "उसे भी ऐसा लगता है।"
    },
    {
        "english": "She learned Arabic.",
        "pronunciation": "शी लर्नड अरेबिक।",
        "translation": "उसने अरबी सीखी।"
    },
    {
        "english": "Get up early.",
        "pronunciation": "गेट अप अर्ली।",
        "translation": "जल्दी उठो।"
    },
    {
        "english": "Go and play.",
        "pronunciation": "गो एंड प्ले।",
        "translation": "जाओ और खेलो।"
    },
    {
        "english": "Listen to me.",
        "pronunciation": "लिसन टू मी।",
        "translation": "मेरी सुनो।"
    },
    {
        "english": "Do you have any homework?",
        "pronunciation": "डू यू हैव एनी होमवर्क?",
        "translation": "क्या तुम्हारे पास कोई होमवर्क है?"
    },
    {
        "english": "Have your breakfast.",
        "pronunciation": "हैव योर ब्रेकफास्ट।",
        "translation": "अपना नाश्ता करो।"
    },
    {
        "english": "What’s going on?",
        "pronunciation": "व्हाट्स गोइंग ऑन?",
        "translation": "क्या हो रहा है?"
    },
    {
        "english": "Comb your hair.",
        "pronunciation": "कोम्ब योर हेयर।",
        "translation": "अपने बालों को कंघी करो।"
    },
    {
        "english": "You may fall down.",
        "pronunciation": "यू मे फॉल डाउन।",
        "translation": "आप गिर सकते हैं।"
    },
    {
        "english": "Enjoy yourself.",
        "pronunciation": "एन्जॉय योरसेल्फ।",
        "translation": "खुद का आनंद लो।"
    },
    {
        "english": "See you next time.",
        "pronunciation": "सी यू नेक्स्ट टाइम।",
        "translation": "आपसे अगली बार मिलेंगे।"
    },
    {
        "english": "Bye, see you again!",
        "pronunciation": "बाय, सी यू अगेन!",
        "translation": "अलविदा, फिर मिलेंगे!"
    },
    {
        "english": "They go on sightseeing tours.",
        "pronunciation": "दे गो ऑन साइटसीइंग टूरस।",
        "translation": "वे दर्शनीय स्थलों की यात्रा पर जाते हैं।"
    },
    {
        "english": "You attend pottery workshops.",
        "pronunciation": "यू अटेंड पॉटरी वर्कशॉप्स।",
        "translation": "आप बर्तन बनाने की कार्यशालाओं में भाग लेते हैं।"
    },
    {
        "english": "Can you please repeat that?",
        "pronunciation": "कैन यू प्लीज़ रिपीट दैट?",
        "translation": "क्या आप कृपया इसे दोहरा सकते हैं?"
    },
    {
        "english": "What do you do for a living?",
        "pronunciation": "व्हाट डू यू डू फॉर अ लिविंग?",
        "translation": "आप जीवनयापन के लिए क्या करते हैं?"
    },
    {
        "english": "Hurrah! I won!",
        "pronunciation": "हुर्रे! आय वॉन!",
        "translation": "हुर्रे! मैंने जीत लिया!"
    },
    {
        "english": "Stop making such a noise!",
        "pronunciation": "स्टॉप मेकिंग सच अ नॉइज़!",
        "translation": "इतना शोर मत करो!"
    },
    {
        "english": "Walk carefully.",
        "pronunciation": "वॉक केयरफुली।",
        "translation": "सावधानी से चलो।"
    },
    {
        "english": "Go slow from the crowd.",
        "pronunciation": "गो स्लो फ्रॉम द क्राउड।",
        "translation": "भीड़ से धीरे चलो।"
    },
    {
        "english": "How do you feel?",
        "pronunciation": "हाउ डू यू फील?",
        "translation": "आप कैसा महसूस कर रहे हैं?"
    },
    {
        "english": "I am very strict on this matter.",
        "pronunciation": "आय एम वेरी स्ट्रिक्ट ऑन थिस मैटर।",
        "translation": "मैं इस मामले में बहुत सख्त हूँ।"
    },
    {
        "english": "I am busy at the moment.",
        "pronunciation": "आय एम बिजी एट द मोमेंट।",
        "translation": "मैं इस समय व्यस्त हूँ।"
    },
    {
        "english": "It has to be done.",
        "pronunciation": "इट हैज़ टू बी डन।",
        "translation": "यह करना होगा।"
    },
    {
        "english": "What is your favorite subject?",
        "pronunciation": "व्हाट इज़ योर फेवरेट सब्जेक्ट?",
        "translation": "आपका पसंदीदा विषय क्या है?"
    },
    {
        "english": "All my calculations went wrong.",
        "pronunciation": "ऑल माय कैल्कुलेशंस वेंट wrong।",
        "translation": "मेरी सभी गणनाएँ गलत हो गईं।"
    },
    {
        "english": "Please clean the board.",
        "pronunciation": "प्लीज़ क्लीन द बोर्ड।",
        "translation": "कृपया बोर्ड साफ करें।"
    },
    {
        "english": "Why are you late?",
        "pronunciation": "व्हाई आर यू लेट?",
        "translation": "आप देर क्यों हैं?"
    },
    {
        "english": "Are you lying?",
        "pronunciation": "आर यू लायिंग?",
        "translation": "क्या आप झूठ बोल रहे हैं?"
    },
    {
        "english": "Don’t abuse him.",
        "pronunciation": "डोंट एब्यूज हिम।",
        "translation": "उसे गाली मत दो।"
    },
    {
        "english": "Are the books put in the bag?",
        "pronunciation": "आर द बुक्स पूट इन द बैग?",
        "translation": "क्या किताबें बैग में रखी गई हैं?"
    },
    {
        "english": "Mam, I haven’t done my homework.",
        "pronunciation": "मैडम, आय हैवेन्ट डन माय होमवर्क।",
        "translation": "मैडम, मैंने अपना होमवर्क नहीं किया।"
    },
    {
        "english": "Sorry for being late.",
        "pronunciation": "सॉरी फॉर बीइंग लेट।",
        "translation": "देरी के लिए खेद है।"
    },
    {
        "english": "Who is your class teacher?",
        "pronunciation": "हू इज़ योर क्लास टीचर?",
        "translation": "आपका कक्षा शिक्षक कौन है?"
    },
    {
        "english": "You will not be able to deal with him.",
        "pronunciation": "यू विल नॉट बी एबल टू डील विद हिम।",
        "translation": "आप उसके साथ निपट नहीं पाएंगे।"
    },
    {
        "english": "Did you get my point?",
        "pronunciation": "डिड यू गेट माय पॉइंट?",
        "translation": "क्या आपने मेरा मतलब समझा?"
    },
    {
        "english": "I have a lot to talk about.",
        "pronunciation": "आय हैव अ लॉट टू टॉक अबाउट।",
        "translation": "मुझे बात करने के लिए बहुत कुछ है।"
    },
    {
        "english": "Please clean the board.",
        "pronunciation": "प्लीज़ क्लीन द बोर्ड।",
        "translation": "कृपया बोर्ड साफ करें।"
    },
    {
        "english": "Please come as soon as possible.",
        "pronunciation": "प्लीज़ कम ऐज़ सून ऐज़ पॉसिबल।",
        "translation": "कृपया जितनी जल्दी हो सके आओ।"
    },
    {
        "english": "Can you turn the volume up?",
        "pronunciation": "कैन यू टर्न द वॉल्यूम अप?",
        "translation": "क्या आप वॉल्यूम बढ़ा सकते हैं?"
    },
    {
        "english": "What do you think?",
        "pronunciation": "व्हाट डू यू थिंक?",
        "translation": "आप क्या सोचते हैं?"
    },
    {
        "english": "What did you succeed in?",
        "pronunciation": "व्हाट डिड यू सक्सीड इन?",
        "translation": "आप किस चीज़ में सफल हुए?"
    },
    {
        "english": "Sorry for the inconvenience.",
        "pronunciation": "सॉरी फॉर द इनकॉनवीनियंस।",
        "translation": "असुविधा के लिए खेद है।"
    },
    {
        "english": "Your name is on the list.",
        "pronunciation": "योर नेम इज़ ऑन द लिस्ट।",
        "translation": "आपका नाम सूची में है।"
    },
    {
        "english": "Not the least!",
        "pronunciation": "नॉट द लीस्ट!",
        "translation": "कोई बात नहीं!"
    },
    {
        "english": "What is going on?",
        "pronunciation": "व्हाट इज़ गोइंग ऑन?",
        "translation": "क्या हो रहा है?"
    },
    {
        "english": "The advantages of this are many.",
        "pronunciation": "द एडवांटेजेज ऑफ़ थिस आर मेनी।",
        "translation": "इसके कई फायदे हैं।"
    },
    {
        "english": "It is a lovely day.",
        "pronunciation": "इट इज़ अ लवली डे।",
        "translation": "आज का दिन बहुत अच्छा है।"
    },
    {
        "english": "That’s so kind of you.",
        "pronunciation": "दैट्स सो काइंड ऑफ़ यू।",
        "translation": "यह आपकी बहुत दयालुता है।"
    },
    {
        "english": "Where is your office?",
        "pronunciation": "व्हेयर इज़ योर ऑफिस?",
        "translation": "आपका ऑफिस कहाँ है?"
    },
    {
        "english": "You’re driving too fast.",
        "pronunciation": "योर ड्राइविंग टू फास्ट।",
        "translation": "आप बहुत तेज़ चला रहे हैं।"
    },
    {
        "english": "Have a good weekend.",
        "pronunciation": "हैव अ गुड वीकेंड।",
        "translation": "आपका सप्ताहांत शुभ हो।"
    },
    {
        "english": "I don’t like long talks.",
        "pronunciation": "आय डोंट लाइक लॉन्ग टॉक्स।",
        "translation": "मुझे लंबे बात करना पसंद नहीं है।"
    },
    {
        "english": "His words have weight.",
        "pronunciation": "हिज वर्ड्स हैव वेट।",
        "translation": "उसके शब्दों का वजन है।"
    },
    {
        "english": "Would you please speak slowly?",
        "pronunciation": "वुड यू प्लीज़ स्पीक स्लोली?",
        "translation": "क्या आप कृपया धीरे बोलेंगे?"
    },
    {
        "english": "What are you doing?",
        "pronunciation": "व्हाट आर यू डूइंग?",
        "translation": "आप क्या कर रहे हैं?"
    },
    {
        "english": "Rod is the logic of fools.",
        "pronunciation": "रोड इज़ द लॉजिक ऑफ़ फू्ल्स।",
        "translation": "छड़ी मूर्खों की तर्क है।"
    },
    {
        "english": "A crease is formed on the cloth.",
        "pronunciation": "अ क्रीज़ इज़ फॉर्म्ड ऑन द क्लॉथ।",
        "translation": "कपड़े पर एक क्रीज बनती है।"
    },
    {
        "english": "I shall reach by the train.",
        "pronunciation": "आय शल रीच बाय द ट्रेन।",
        "translation": "मैं ट्रेन से पहुँचूंगा।"
    },
    {
        "english": "What are you doing today?",
        "pronunciation": "व्हाट आर यू डूइंग टुडे?",
        "translation": "आप आज क्या कर रहे हैं?"
    },
    {
        "english": "It’s very thoughtful of you.",
        "pronunciation": "इट्स वेरी थॉटफुल ऑफ़ यू।",
        "translation": "यह आपकी बहुत सोच-समझकर की गई बात है।"
    },
    {
        "english": "The temperature will come down tomorrow.",
        "pronunciation": "द टेम्परेचर विल कम डाउन टुमॉरो।",
        "translation": "कल तापमान नीचे आएगा।"
    },
    {
        "english": "Have a good trip.",
        "pronunciation": "हैव अ गुड ट्रिप।",
        "translation": "आपका सफर शुभ हो।"
    },
    {
        "english": "Do you understand me?",
        "pronunciation": "डू यू अंडरस्टैंड मी?",
        "translation": "क्या आप मेरी बात समझते हैं?"
    },
    {
        "english": "What nonsense!",
        "pronunciation": "व्हाट नॉन्सेंस!",
        "translation": "क्या बकवास है!"
    },
    {
        "english": "I am going to the playground.",
        "pronunciation": "आय ऐम गोइंग टू द प्लेग्राउंड।",
        "translation": "मैं खेल के मैदान जा रहा हूँ।"
    },
    {
        "english": "It is very hot today, isn’t it?",
        "pronunciation": "इट इज़ वेरी हॉट टुडे, इज़न्ट इट?",
        "translation": "आज बहुत गर्म है, है ना?"
    },
    {
        "english": "I want more money.",
        "pronunciation": "आय वांट मोर मनी।",
        "translation": "मुझे और पैसे चाहिए।"
    },
    {
        "english": "What an idea!",
        "pronunciation": "व्हाट एन आइडिया!",
        "translation": "क्या विचार है!"
    },
    {
        "english": "Thanks for this honor.",
        "pronunciation": "थैंक्स फॉर थिस ऑनर।",
        "translation": "इस सम्मान के लिए धन्यवाद।"
    },
    {
        "english": "No, not at all.",
        "pronunciation": "नो, नॉट एट ऑल।",
        "translation": "नहीं, बिल्कुल नहीं।"
    },
    {
        "english": "You go swimming.",
        "pronunciation": "यू गो स्विमिंग।",
        "translation": "आप तैरने जाते हैं।"
    },
    {
        "english": "I need to clean my room.",
        "pronunciation": "आय नीड टू क्लीन माय रूम।",
        "translation": "मुझे अपना कमरा साफ करना है।"
    },
    {
        "english": "I need to fix my computer.",
        "pronunciation": "आय नीड टू फिक्स माय कंप्यूटर।",
        "translation": "मुझे अपना कंप्यूटर ठीक करना है।"
    },
    {
        "english": "I need to buy some groceries.",
        "pronunciation": "आय नीड टू बाय सम ग्रॉसरीज़।",
        "translation": "मुझे कुछ किराने का सामान खरीदना है।"
    },
    {
        "english": "Can you lend me a hand?",
        "pronunciation": "कैन यू लेंड मी अ हैंड?",
        "translation": "क्या आप मेरी मदद कर सकते हैं?"
    },
    {
        "english": "Can you help me with this math problem?",
        "pronunciation": "कैन यू हेल्प मी विद थिस मैथ प्रॉब्लम?",
        "translation": "क्या आप मेरी इस गणित की समस्या में मदद कर सकते हैं?"
    },
    {
        "english": "How’s your day going so far?",
        "pronunciation": "हाउज़ योर डे गोइंग सो फार?",
        "translation": "आपका दिन अब तक कैसा गुजर रहा है?"
    },
    {
        "english": "I’m really proud of you.",
        "pronunciation": "आय एम रियली प्राउड ऑफ़ यू।",
        "translation": "मैं तुम पर सच में गर्व महसूस करता हूँ।"
    },
    {
        "english": "I’m not feeling well today.",
        "pronunciation": "आय एम नॉट फीलिंग वेल टुडे।",
        "translation": "मैं आज ठीक महसूस नहीं कर रहा हूँ।"
    },
    {
        "english": "I’m so glad to see you!",
        "pronunciation": "आय एम सो ग्लैड टू सी यू!",
        "translation": "आपसे मिलकर बहुत खुशी हुई!"
    },
    {
        "english": "I’ll be there in a few minutes.",
        "pronunciation": "आय'ल बी थेर इन अ फ्यू मिनिट्स।",
        "translation": "मैं कुछ मिनटों में वहाँ पहुँचूंगा।"
    },
    {
        "english": "Let’s have a picnic.",
        "pronunciation": "लेट्स हैव अ पिकनिक।",
        "translation": "आओ हम पिकनिक मनाते हैं।"
    },
    {
        "english": "Can you pass me the remote?",
        "pronunciation": "कैन यू पास मी द रिमोट?",
        "translation": "क्या आप मुझे रिमोट दे सकते हैं?"
    },
    {
        "english": "How was your weekend?",
        "pronunciation": "हाउ वाज योर वीकेंड?",
        "translation": "आपका सप्ताहांत कैसा रहा?"
    },
    {
        "english": "What’s your favorite hobby?",
        "pronunciation": "व्हाट्स योर फेवरेट हाबी?",
        "translation": "आपका पसंदीदा शौक क्या है?"
    },
    {
        "english": "What’s your favorite TV show?",
        "pronunciation": "व्हाट्स योर फेवरेट टीवी शो?",
        "translation": "आपका पसंदीदा टीवी शो कौन सा है?"
    },
    {
        "english": "Let’s take a break.",
        "pronunciation": "लेट्स टेक अ ब्रेक।",
        "translation": "आओ हम एक ब्रेक लें।"
    },
    {
        "english": "I’m attending a wedding next week.",
        "pronunciation": "आय'म अटेंडिंग अ वेडिंग नेक्स्ट वीक।",
        "translation": "मैं अगले हफ्ते एक शादी में जा रहा हूँ।"
    },
    {
        "english": "We have backyard BBQs.",
        "pronunciation": "वी हैव बैकयार्ड बीबीक्यूज़।",
        "translation": "हमारे पास पिछवाड़े में बारबेक्यू होते हैं।"
    },
    {
        "english": "How do you spell that word?",
        "pronunciation": "हाउ डू यू स्पेल थैट वर्ड?",
        "translation": "आप उस शब्द को कैसे लिखते हैं?"
    },
    {
        "english": "Are you free this weekend?",
        "pronunciation": "आर यू फ्री थिस वीकेंड?",
        "translation": "क्या आप इस सप्ताहांत फ्री हैं?"
    },
    {
        "english": "I’m feeling stressed out.",
        "pronunciation": "आय'म फीलिंग स्ट्रेस्ड आउट।",
        "translation": "मैं बहुत तनाव में महसूस कर रहा हूँ।"
    },
    {
        "english": "Let’s go for a bike ride.",
        "pronunciation": "लेट्स गो फॉर अ बाइक राइड।",
        "translation": "आओ हम साइकिल चलाते हैं।"
    },
    {
        "english": "I’m taking a cooking class.",
        "pronunciation": "आय'म टेकिंग अ कुकिंग क्लास।",
        "translation": "मैं एक खाना पकाने की कक्षा ले रहा हूँ।"
    },
    {
        "english": "I am sorry.",
        "pronunciation": "आय एम सॉरी।",
        "translation": "मुझे खेद है।"
    },
    {
        "english": "Well done! Keep it up!",
        "pronunciation": "वेल डन! कीप इट अप!",
        "translation": "बहुत अच्छा! इसे जारी रखो!"
    },
    {
        "english": "I did not understand.",
        "pronunciation": "आय डिड नॉट अंडरस्टैंड।",
        "translation": "मैंने नहीं समझा।"
    },
    {
        "english": "What do you mean?",
        "pronunciation": "व्हाट डू यू मीन?",
        "translation": "आपका क्या मतलब है?"
    },
    {
        "english": "What are you talking about?",
        "pronunciation": "व्हाट आर यू टॉकिंग अबाउट?",
        "translation": "आप किस बारे में बात कर रहे हैं?"
    },
    {
        "english": "I am feeling tired today.",
        "pronunciation": "आय एम फीलिंग टायर्ड टुडे।",
        "translation": "मैं आज थका हुआ महसूस कर रहा हूँ।"
    },
    {
        "english": "Thank you very much.",
        "pronunciation": "थैंक्स यू वेरी मच।",
        "translation": "आपका बहुत धन्यवाद।"
    },
    {
        "english": "What can I do for you?",
        "pronunciation": "व्हाट कैन आय डू फॉर यू?",
        "translation": "मैं आपके लिए क्या कर सकता हूँ?"
    },
    {
        "english": "What is happening here?",
        "pronunciation": "व्हाट इज़ हैपेनिंग हियर?",
        "translation": "यहाँ क्या हो रहा है?"
    },
    {
        "english": "Could you please pass me the salt?",
        "pronunciation": "कुड यू प्लीज़ पास मी द सॉल्ट?",
        "translation": "क्या आप कृपया मुझे नमक दे सकते हैं?"
    },
    {
        "english": "Have a great day!",
        "pronunciation": "हैव अ ग्रेट डे!",
        "translation": "आपका दिन शुभ हो!"
    },
    {
        "english": "You are my reason for living.",
        "pronunciation": "यू आर माय रीजन फॉर लिविंग।",
        "translation": "आप मेरी जीने की वजह हैं।"
    },
    {
        "english": "Stop crying.",
        "pronunciation": "स्टॉप क्राईंग।",
        "translation": "रोना बंद करो।"
    },
    {
        "english": "When is the train leaving?",
        "pronunciation": "व्हेन इज़ द ट्रेन लीविंग?",
        "translation": "ट्रेन कब जा रही है?"
    },
    {
        "english": "It’s on the tip of my tongue.",
        "pronunciation": "इट्स ऑन द टिप ऑफ़ माय टंग।",
        "translation": "यह मेरी ज़ुबान पर है।"
    },
    {
        "english": "I don’t like tall talk.",
        "pronunciation": "आय डोंट लाइक टॉल टॉक।",
        "translation": "मुझे लंबी बात करना पसंद नहीं है।"
    },
    {
        "english": "He will not refrain from speaking.",
        "pronunciation": "ही विल नॉट रेफ्रेन फ्रॉम स्पीकिंग।",
        "translation": "वह बोलने से नहीं चूकेगा।"
    },
    {
        "english": "Do as I say.",
        "pronunciation": "डू ऐज़ आय से।",
        "translation": "जैसा मैं कहता हूँ वैसा करो।"
    },
    {
        "english": "What is your job?",
        "pronunciation": "व्हाट इज़ योर जॉब?",
        "translation": "आपकी नौकरी क्या है?"
    },
    {
        "english": "My mind is reeling.",
        "pronunciation": "माय माइंड इज़ रीलिंग।",
        "translation": "मेरा मन चकरा रहा है।"
    },
    {
        "english": "Did you get my point?",
        "pronunciation": "डिड यू गेट माय पॉइंट?",
        "translation": "क्या आप मेरी बात समझे?"
    },
    {
        "english": "Where do you live?",
        "pronunciation": "व्हेयर डू यू लिव?",
        "translation": "आप कहाँ रहते हैं?"
    },
    {
        "english": "I really appreciate it.",
        "pronunciation": "आय रियली एप्रीशिएट इट।",
        "translation": "मैं इसकी सच में सराहना करता हूँ।"
    },
    {
        "english": "Would you like a drink?",
        "pronunciation": "वुड यू लाइक अ ड्रिंक?",
        "translation": "क्या आपको एक पेय चाहिए?"
    },
    {
        "english": "How do you feel about…?",
        "pronunciation": "हाउ डू यू फील अबाउट…?",
        "translation": "आपको … के बारे में कैसा लगता है?"
    },
    {
        "english": "I’m returning your call.",
        "pronunciation": "आय'म रिटर्निंग योर कॉल।",
        "translation": "मैं आपकी कॉल वापस कर रहा हूँ।"
    },
    {
        "english": "Can you tell me…?",
        "pronunciation": "कैन यू टेल मी…?",
        "translation": "क्या आप मुझे बता सकते हैं…?"
    },
    {
        "english": "I’ll pay.",
        "pronunciation": "आय'ल पे।",
        "translation": "मैं भुगतान करूंगा।"
    },
    {
        "english": "I don’t want that.",
        "pronunciation": "आय डोंट वांट दैट।",
        "translation": "मुझे वह नहीं चाहिए।"
    },
    {
        "english": "How’s work going?",
        "pronunciation": "हाउज़ वर्क गोइंग?",
        "translation": "काम कैसा चल रहा है?"
    },
    {
        "english": "Don’t take it personally.",
        "pronunciation": "डोंट टेक इट पर्सनली।",
        "translation": "इसे व्यक्तिगत रूप से न लें।"
    },
    {
        "english": "I hate you!",
        "pronunciation": "आय हेट यू!",
        "translation": "मुझे तुमसे नफरत है!"
    },
    {
        "english": "It’s for the best.",
        "pronunciation": "इट्स फॉर द बेस्ट।",
        "translation": "यह सबसे अच्छा है।"
    },
    {
        "english": "I talked with him.",
        "pronunciation": "आय टॉक्ड विद हिम।",
        "translation": "मैंने उससे बात की।"
    },
    {
        "english": "What is your contact number?",
        "pronunciation": "व्हाट इज़ योर कॉन्टेक्ट नंबर?",
        "translation": "आपका संपर्क नंबर क्या है?"
    },
    {
        "english": "What do you want to do?",
        "pronunciation": "व्हाट डू यू वांट टू डू?",
        "translation": "आप क्या करना चाहते हैं?"
    },
    {
        "english": "Are you there?",
        "pronunciation": "आर यू थेर?",
        "translation": "क्या आप वहाँ हैं?"
    },
    {
        "english": "Write with an improved hand.",
        "pronunciation": "राइट विद एन इम्प्रूवड हैंड।",
        "translation": "सुधरे हुए हाथ से लिखें।"
    },
    {
        "english": "What would you like to have?",
        "pronunciation": "व्हाट वुड यू लाइक टू हैव?",
        "translation": "आप क्या लेना चाहेंगे?"
    },
    {
        "english": "Forget it.",
        "pronunciation": "फॉरगेट इट।",
        "translation": "इसे भूल जाओ।"
    },
    {
        "english": "Who will cooperate with you?",
        "pronunciation": "हू विल कोऑपरेट विद यू?",
        "translation": "आपके साथ कौन सहयोग करेगा?"
    },
    {
        "english": "It was nice to talk with you.",
        "pronunciation": "इट वाज़ नाइस टू टॉक विद यू।",
        "translation": "आपसे बात करके अच्छा लगा।"
    },
    {
        "english": "Can you please repeat that?",
        "pronunciation": "कैन यू प्लीज़ रिपीट थैट?",
        "translation": "क्या आप कृपया उसे दोहरा सकते हैं?"
    },
    {
        "english": "Don’t worry!",
        "pronunciation": "डोंट वरी!",
        "translation": "चिंता मत करो!"
    },
    {
        "english": "How are things going?",
        "pronunciation": "हाउ आर थिंग्स गोइंग?",
        "translation": "सब कुछ कैसा चल रहा है?"
    },
    {
        "english": "What do we call this in English?",
        "pronunciation": "व्हाट डू वी कॉल थिस इन इंग्लिश?",
        "translation": "हम इसे अंग्रेज़ी में क्या कहते हैं?"
    },
    {
        "english": "This is not a joke.",
        "pronunciation": "थिस इज़ नॉट अ जोक।",
        "translation": "यह मजाक नहीं है।"
    },
    {
        "english": "I hope so.",
        "pronunciation": "आय होप सो।",
        "translation": "मुझे आशा है।"
    },
    {
        "english": "I don’t want to.",
        "pronunciation": "आय डोंट वांट टू।",
        "translation": "मैं ऐसा नहीं चाहता।"
    },
    {
        "english": "Which date falls on Sunday?",
        "pronunciation": "व्हिच डेट फॉल्स ऑन संडे?",
        "translation": "कौन सी तारीख रविवार को है?"
    },
    {
        "english": "I am very pleased to meet you.",
        "pronunciation": "आय एम वेरी प्लीज्ड टू मीट यू।",
        "translation": "आपसे मिलकर मुझे बहुत खुशी हुई।"
    },
    {
        "english": "I am feeling tired today.",
        "pronunciation": "आय एम फीलिंग टायर्ड टुडे।",
        "translation": "मैं आज थका हुआ महसूस कर रहा हूँ।"
    },
    {
        "english": "Sorry for the inconvenience.",
        "pronunciation": "सॉरी फॉर द इनकन्वीनियंस।",
        "translation": "असुविधा के लिए क्षमा करें।"
    },
    {
        "english": "Why are you upset?",
        "pronunciation": "व्हाई आर यू अपसेट?",
        "translation": "आप क्यों परेशान हैं?"
    },
    {
        "english": "Good day to you, Sir!",
        "pronunciation": "गुड डे टू यू, सर!",
        "translation": "आपका दिन शुभ हो, सर!"
    },
    {
        "english": "Follow me.",
        "pronunciation": "फॉलो मी।",
        "translation": "मेरे पीछे आओ।"
    },
    {
        "english": "You turn.",
        "pronunciation": "यू टर्न।",
        "translation": "तुम मुड़ो।"
    },
    {
        "english": "He owes the shopkeeper fifty rupees.",
        "pronunciation": "ही ओव्स द शॉपकीपर फिफ्टी रुपीज।",
        "translation": "वह दुकानदार का पचास रुपये उधार है।"
    },
    {
        "english": "What a bother!",
        "pronunciation": "व्हाट अ बॉदर!",
        "translation": "क्या परेशानी है!"
    },
    {
        "english": "Do me a favor.",
        "pronunciation": "डू मी अ फेवर।",
        "translation": "मेरी एक मदद करो।"
    },
    {
        "english": "We will break, but not bend.",
        "pronunciation": "वी विल ब्रेक, बट नॉट बेंड।",
        "translation": "हम टूटेंगे, लेकिन झुकेंगे नहीं।"
    },
    {
        "english": "I don’t have a single paisa.",
        "pronunciation": "आय डोंट हैव अ सिंगल पैसे।",
        "translation": "मेरे पास एक पैसा भी नहीं है।"
    },
    {
        "english": "Read the sentences carefully.",
        "pronunciation": "रीड द सेंटेंस केयरफुली।",
        "translation": "वाक्यों को ध्यान से पढ़ो।"
    },
    {
        "english": "That’s so kind of you.",
        "pronunciation": "थैट्स सो काइंड ऑफ़ यू।",
        "translation": "यह आपके लिए बहुत दयालु है।"
    },
    {
        "english": "Good heavens!",
        "pronunciation": "गुड हेवन्स!",
        "translation": "हे भगवान!"
    },
    {
        "english": "It’s none of your business.",
        "pronunciation": "इट्स नन ऑफ़ योर बिज़नेस।",
        "translation": "यह तुम्हारा काम नहीं है।"
    },
    {
        "english": "I beg your pardon.",
        "pronunciation": "आय बेग योर पardon।",
        "translation": "मैं आपकी माफी चाहता हूँ।"
    },
    {
        "english": "It’s all yours.",
        "pronunciation": "इट्स ऑल योरस।",
        "translation": "यह सब आपका है।"
    },
    {
        "english": "How disgraceful!",
        "pronunciation": "हाउ डिस्ग्रेसफुल!",
        "translation": "क्या अपमानजनक है!"
    },
    {
        "english": "I’m at the office.",
        "pronunciation": "आय'म एट द ऑफिस।",
        "translation": "मैं कार्यालय में हूँ।"
    },
    {
        "english": "He had no money.",
        "pronunciation": "ही हैड नो मनी।",
        "translation": "उसके पास कोई पैसे नहीं थे।"
    },
    {
        "english": "His words have weight.",
        "pronunciation": "हिज वर्ड्स हैव वेट।",
        "translation": "उसके शब्दों का महत्व है।"
    },
    {
        "english": "Would you please speak slowly?",
        "pronunciation": "वुड यू प्लीज़ स्पीक स्लोली?",
        "translation": "क्या आप कृपया धीरे बोल सकते हैं?"
    },
    {
        "english": "It’s my pleasure.",
        "pronunciation": "इट्स माय प्लेजर।",
        "translation": "यह मेरी खुशी है।"
    },
    {
        "english": "No, I don’t want it.",
        "pronunciation": "नो, आइ डोंट वांट इट।",
        "translation": "नहीं, मुझे यह नहीं चाहिए।"
    },
    {
        "english": "But he did not budge an inch.",
        "pronunciation": "बट ही डिड नॉट बड्ज़ एन इंच।",
        "translation": "लेकिन वह एक इंच भी नहीं हिला।"
    },
    {
        "english": "Excuse me!",
        "pronunciation": "एक्सक्यूज़ मी!",
        "translation": "क्षमा करें!"
    },
    {
        "english": "Do you understand me?",
        "pronunciation": "डू यू अंडरस्टैंड मी?",
        "translation": "क्या आप मुझे समझते हैं?"
    },
    {
        "english": "There is something wrong with his brain.",
        "pronunciation": "थेर इज़ समथिंग रॉन्ग विद हिज ब्रेन।",
        "translation": "उसके दिमाग में कुछ गड़बड़ है।"
    },
    {
        "english": "You are my responsibility.",
        "pronunciation": "यू आर माय रिस्पॉन्सिबिलिटी।",
        "translation": "आप मेरी जिम्मेदारी हैं।"
    },
    {
        "english": "As you please.",
        "pronunciation": "ऐज़ यू प्लिज।",
        "translation": "जैसा आप चाहें।"
    },
    {
        "english": "Well done, dear!",
        "pronunciation": "वेल डन, डियर!",
        "translation": "शाबाश, प्रिय!"
    },
    {
        "english": "Where are you?",
        "pronunciation": "व्हेयर आर यू?",
        "translation": "आप कहाँ हैं?"
    },
    {
        "english": "How can I go to the town center?",
        "pronunciation": "हाउ कैन आइ गो टू द टाउन सेंटर?",
        "translation": "मैं टाउन सेंटर कैसे जाऊं?"
    },
    {
        "english": "He has a nasal accent.",
        "pronunciation": "ही हैज़ अ नाज़ल एक्सेंट।",
        "translation": "उसका नाक से बोलने का लहजा है।"
    },
    {
        "english": "Can I ask you something?",
        "pronunciation": "कैन आइ आस्क यू समथिंग?",
        "translation": "क्या मैं आपसे कुछ पूछ सकता हूँ?"
    },
    {
        "english": "I’m at home.",
        "pronunciation": "आय'म एट होम।",
        "translation": "मैं घर पर हूँ।"
    },
    {
        "english": "I’m sorry I can’t assist you.",
        "pronunciation": "आय'म सॉरी आय कैन्ट असिस्ट यू।",
        "translation": "मुझे खेद है कि मैं आपकी मदद नहीं कर सकता।"
    },
    {
        "english": "See you next time!",
        "pronunciation": "सी यू नेक्स्ट टाइम!",
        "translation": "फिर मिलेंगे!"
    },
    {
        "english": "Don’t involve me in this matter.",
        "pronunciation": "डोंट इन्वॉल्व मी इन दिस मैटर।",
        "translation": "इस मामले में मुझे शामिल न करें।"
    },
    {
        "english": "Do you agree with me?",
        "pronunciation": "डू यू एग्री विद मी?",
        "translation": "क्या आप मुझसे सहमत हैं?"
    },
    {
        "english": "What’s your e-mail address?",
        "pronunciation": "व्हॉट्स योर ई-मेल एड्रेस?",
        "translation": "आपका ई-मेल पता क्या है?"
    },
    {
        "english": "Good night!",
        "pronunciation": "गुड नाइट!",
        "translation": "शुभ रात्रि!"
    },
    {
        "english": "That/He is against me.",
        "pronunciation": "थैट/ही इज़ अगेंस्ट मी।",
        "translation": "वह मेरे खिलाफ है।"
    },
    {
        "english": "Have a nice day.",
        "pronunciation": "हैव अ नाइस डे।",
        "translation": "आपका दिन शुभ हो।"
    },
    {
        "english": "I am tired.",
        "pronunciation": "आय अम टायर्ड।",
        "translation": "मैं थका हुआ हूँ।"
    },
    {
        "english": "Believe me.",
        "pronunciation": "बिलीव मी।",
        "translation": "मुझ पर विश्वास करो।"
    },
    {
        "english": "You dance in classes.",
        "pronunciation": "यू डांस इन क्लासेस।",
        "translation": "आप कक्षाओं में नाचते हैं।"
    },
    {
        "english": "I go on photo shoots.",
        "pronunciation": "आय गो ऑन फोटो शूट्स।",
        "translation": "मैं फोटो शूट पर जाता हूँ।"
    },
    {
        "english": "We explore festivals.",
        "pronunciation": "वी एक्सप्लोर फेस्टिवल्स।",
        "translation": "हम त्योहारों का अन्वेषण करते हैं।"
    },
    {
        "english": "They embark on road trips.",
        "pronunciation": "दे एम्बार्क ऑन रोड ट्रिप्स।",
        "translation": "वे सड़क यात्राओं पर निकलते हैं।"
    },
    {
        "english": "You ski in winter.",
        "pronunciation": "यू स्की इन विंटर।",
        "translation": "आप सर्दियों में स्की करते हैं।"
    },
    {
        "english": "I join book clubs.",
        "pronunciation": "आय जॉइन बुक क्लब्स।",
        "translation": "मैं पुस्तक क्लबों में शामिल होता हूँ।"
    },
    {
        "english": "We watch movies.",
        "pronunciation": "वी वॉच मूवीज़।",
        "translation": "हम फिल्में देखते हैं।"
    },
    {
        "english": "They birdwatch.",
        "pronunciation": "दे बर्डवॉच।",
        "translation": "वे पक्षियों को देखते हैं।"
    },
    {
        "english": "You volunteer at shelters.",
        "pronunciation": "यू वोलेंटियर एट शेल्टर्स।",
        "translation": "आप शेल्टरों में स्वेच्छा से काम करते हैं।"
    },
    {
        "english": "I shall reach by train.",
        "pronunciation": "आय शल रीच बाय ट्रेन।",
        "translation": "मैं ट्रेन से पहुँचूंगा।"
    },
    {
        "english": "What are you doing today?",
        "pronunciation": "व्हाट आर यू डूइंग टुडे?",
        "translation": "आप आज क्या कर रहे हैं?"
    },
    {
        "english": "Go up!",
        "pronunciation": "गो अप!",
        "translation": "ऊपर जाओ!"
    },
    {
        "english": "He has a bad headache.",
        "pronunciation": "ही हैज़ अ बैड हेडेक।",
        "translation": "उसका सिरदर्द बहुत बुरा है।"
    },
    {
        "english": "It was nice meeting you.",
        "pronunciation": "इट वॉज़ नाइस मीटिंग यू।",
        "translation": "आपसे मिलकर अच्छा लगा।"
    },
    {
        "english": "What do you need?",
        "pronunciation": "व्हाट डू यू नीड?",
        "translation": "आपको क्या चाहिए?"
    },
    {
        "english": "His luck took a turn.",
        "pronunciation": "हिज लक्क टुक अ टर्न।",
        "translation": "उसकी किस्मत ने मोड़ लिया।"
    },
    {
        "english": "Get ready to go to school.",
        "pronunciation": "गेट रेडी टू गो टू स्कूल।",
        "translation": "स्कूल जाने के लिए तैयार हो जाओ।"
    },
    {
        "english": "Could you help me?",
        "pronunciation": "कुड यू हेल्प मी?",
        "translation": "क्या आप मेरी मदद कर सकते हैं?"
    },
    {
        "english": "I just made it.",
        "pronunciation": "आय जस्ट मेड इट।",
        "translation": "मैंने बस किया।"
    },
    {
        "english": "My watch is out of order.",
        "pronunciation": "माय वॉच इज़ आउट ऑफ़ ऑर्डर।",
        "translation": "मेरी घड़ी खराब है।"
    },
    {
        "english": "How are you?",
        "pronunciation": "हाउ आर यू?",
        "translation": "आप कैसे हैं?"
    },
    {
        "english": "Are you done?",
        "pronunciation": "आर यू डन?",
        "translation": "क्या आप तैयार हैं?"
    },
    {
        "english": "All worship the rising sun.",
        "pronunciation": "ऑल वर्शिप द राइजिंग सन।",
        "translation": "सभी उगते हुए सूरज की पूजा करते हैं।"
    },
    {
        "english": "Stop making so much noise.",
        "pronunciation": "स्टॉप मेकिंग सो मच नॉइज़।",
        "translation": "इतना शोर मत करो।"
    },
    {
        "english": "I don’t have time.",
        "pronunciation": "आय डोंट हैव टाइम।",
        "translation": "मेरे पास समय नहीं है।"
    },
    {
        "english": "Hurry up!",
        "pronunciation": "हैरी अप!",
        "translation": "जल्दी करो!"
    },
    {
        "english": "Is everything OK?",
        "pronunciation": "इज़ एवरीथिंग ओके?",
        "translation": "क्या सब ठीक है?"
    },
    {
        "english": "What time does the next train leave?",
        "pronunciation": "व्हाट टाइम डज़ द नेक्स्ट ट्रेन लीव?",
        "translation": "अगली ट्रेन कब जाती है?"
    },
    {
        "english": "He is still not well.",
        "pronunciation": "ही इज़ स्टिल नॉट वेल।",
        "translation": "वह अभी भी ठीक नहीं है।"
    },
    {
        "english": "What are you up to?",
        "pronunciation": "व्हाट आर यू अप टू?",
        "translation": "आप क्या कर रहे हैं?"
    },
    {
        "english": "I would love to.",
        "pronunciation": "आय वुड लव टू।",
        "translation": "मुझे खुशी होगी।"
    },
    {
        "english": "Fetch water from the well.",
        "pronunciation": "फेच वाटर फ्रॉम द वेल।",
        "translation": "कुएँ से पानी लाओ।"
    },
    {
        "english": "How can I help you?",
        "pronunciation": "हाउ कैन आय हेल्प यू?",
        "translation": "मैं आपकी कैसे मदद कर सकता हूँ?"
    },
    {
        "english": "What are your hobbies?",
        "pronunciation": "व्हाट आर योर हॉबीज़?",
        "translation": "आपके शौक क्या हैं?"
    },
    {
        "english": "I apologize.",
        "pronunciation": "आय एपॉलॉजाइज।",
        "translation": "मैं माफी चाहता हूँ।"
    },
    {
        "english": "It has rained excessively today.",
        "pronunciation": "इट हैज़ रेंड एक्सेसिवली टुडे।",
        "translation": "आज बहुत ज्यादा बारिश हुई है।"
    },
    {
        "english": "Could you give me some money?",
        "pronunciation": "कुड यू गिव मी सम मनी?",
        "translation": "क्या आप मुझे कुछ पैसे दे सकते हैं?"
    },
    {
        "english": "What’s the weather like?",
        "pronunciation": "व्हॉट्स द वेदर लाइक?",
        "translation": "मौसम कैसा है?"
    },
    {
        "english": "You are going too fast.",
        "pronunciation": "यू आर गोइंग टू फास्ट।",
        "translation": "आप बहुत तेज़ जा रहे हैं।"
    },
    {
        "english": "It’s a good beginning.",
        "pronunciation": "इट्स अ गुड बिगिनिंग।",
        "translation": "यह एक अच्छी शुरुआत है।"
    },
    {
        "english": "He / She abused me.",
        "pronunciation": "ही / शी एब्यूज़्ड मी।",
        "translation": "उसने मुझे गाली दी।"
    },
    {
        "english": "Will you now beat him to death?",
        "pronunciation": "विल यू नाउ बीट हिम टू डेथ?",
        "translation": "क्या आप अब उसे मार डालेंगे?"
    },
    {
        "english": "I’m quite exhausted today.",
        "pronunciation": "आय एम क्वाइट एक्सॉस्टेड टुडे।",
        "translation": "मैं आज बहुत थका हुआ हूँ।"
    },
    {
        "english": "Do not be childish.",
        "pronunciation": "डू नॉट बी चाइल्डिश।",
        "translation": "बच्चों की तरह मत बनो।"
    },
    {
        "english": "It’s not like that.",
        "pronunciation": "इट्स नॉट लाइक थैट।",
        "translation": "ऐसा नहीं है।"
    },
    {
        "english": "It’s a good thing.",
        "pronunciation": "इट्स अ गुड थिंग।",
        "translation": "यह एक अच्छा बात है।"
    },
    {
        "english": "It’s your choice.",
        "pronunciation": "इट्स योर चॉइस।",
        "translation": "यह आपकी पसंद है।"
    },
    {
        "english": "Who called you?",
        "pronunciation": "हू कॉल्ड यू?",
        "translation": "आपको किसने बुलाया?"
    },
    {
        "english": "May I say something?",
        "pronunciation": "मे आई से समथिंग?",
        "translation": "क्या मैं कुछ कह सकता हूँ?"
    },
    {
        "english": "Who said this?",
        "pronunciation": "हू सेड दिस?",
        "translation": "यह किसने कहा?"
    },
    {
        "english": "Do it again.",
        "pronunciation": "डू इट अगेन।",
        "translation": "इसे फिर से करें।"
    },
    {
        "english": "Get off the way.",
        "pronunciation": "गेट ऑफ द वे।",
        "translation": "रास्ते से हटें।"
    },
    {
        "english": "Relax!",
        "pronunciation": "रिलैक्स!",
        "translation": "आराम करें!"
    },
    {
        "english": "Slow down.",
        "pronunciation": "स्लो डाउन।",
        "translation": "धीमा करें।"
    },
    {
        "english": "What happened?",
        "pronunciation": "व्हाट हैपंड?",
        "translation": "क्या हुआ?"
    },
    {
        "english": "See him off.",
        "pronunciation": "सी हिम ऑफ।",
        "translation": "उसे विदाई दें।"
    },
    {
        "english": "Not you.",
        "pronunciation": "नॉट यू।",
        "translation": "आप नहीं।"
    },
    {
        "english": "He is kind.",
        "pronunciation": "ही इज़ काइंड।",
        "translation": "वह दयालु है।"
    },
    {
        "english": "Pray to God.",
        "pronunciation": "प्रे टू गॉड।",
        "translation": "भगवान से प्रार्थना करें।"
    },
    {
        "english": "Don’t worry.",
        "pronunciation": "डोंट वॉरी।",
        "translation": "चिंता मत करो।"
    },
    {
        "english": "I can’t say.",
        "pronunciation": "आय कैन्ट से।",
        "translation": "मैं नहीं कह सकता।"
    },
    {
        "english": "What is the time?",
        "pronunciation": "व्हाट इज़ द टाइम?",
        "translation": "समय क्या है?"
    },
    {
        "english": "How much?",
        "pronunciation": "हाउ मच?",
        "translation": "कितना?"
    },
    {
        "english": "Absolutely not.",
        "pronunciation": "एब्सोल्यूटली नॉट।",
        "translation": "बिल्कुल नहीं।"
    },
    {
        "english": "I wake up early.",
        "pronunciation": "आय वेक अप अर्ली।",
        "translation": "मैं जल्दी उठता हूँ।"
    },
    {
        "english": "We eat breakfast together.",
        "pronunciation": "वी ईट ब्रेकफास्ट टुगेदर।",
        "translation": "हम साथ में नाश्ता करते हैं।"
    },
    {
        "english": "They drive to work.",
        "pronunciation": "दे ड्राइव टू वर्क।",
        "translation": "वे काम पर गाड़ी चलाते हैं।"
    },
    {
        "english": "You walk to school.",
        "pronunciation": "यू वॉक टू स्कूल।",
        "translation": "आप स्कूल पैदल जाते हैं।"
    },
    {
        "english": "I brush my teeth.",
        "pronunciation": "आय ब्रश माय टीथ।",
        "translation": "मैं अपने दांतों को ब्रश करता हूँ।"
    },
    {
        "english": "We cook dinner.",
        "pronunciation": "वी कुक डिनर।",
        "translation": "हम रात का खाना बनाते हैं।"
    },
    {
        "english": "They watch TV.",
        "pronunciation": "दे वॉच टीवी।",
        "translation": "वे टीवी देखते हैं।"
    },
    {
        "english": "You listen to music.",
        "pronunciation": "यू लिसन टू म्यूज़िक।",
        "translation": "आप संगीत सुनते हैं।"
    },
    {
        "english": "I take a shower.",
        "pronunciation": "आय टेक अ शावर।",
        "translation": "मैं स्नान करता हूँ।"
    },
    {
        "english": "We clean the house.",
        "pronunciation": "वी क्लीन द हाउस।",
        "translation": "हम घर साफ करते हैं।"
    },
    {
        "english": "They visit their grandparents.",
        "pronunciation": "दे विजिट देयर ग्रैंडपेरेंट्स।",
        "translation": "वे अपने दादा-दादी से मिलने जाते हैं।"
    },
    {
        "english": "You play soccer.",
        "pronunciation": "यू प्ले सॉकर।",
        "translation": "आप फुटबॉल खेलते हैं।"
    },
    {
        "english": "I read a book.",
        "pronunciation": "आय रीड अ बुक।",
        "translation": "मैं एक किताब पढ़ता हूँ।"
    },
    {
        "english": "We go grocery shopping.",
        "pronunciation": "वी गो ग्रोसरी शॉपिंग।",
        "translation": "हम किराने का सामान खरीदने जाते हैं।"
    },
    {
        "english": "They go for a walk.",
        "pronunciation": "दे गो फॉर अ वॉक।",
        "translation": "वे टहलने जाते हैं।"
    },
    {
        "english": "You talk to your friend.",
        "pronunciation": "यू टॉक टू योर फ्रेंड।",
        "translation": "आप अपने दोस्त से बात करते हैं।"
    },
    {
        "english": "I water the plants.",
        "pronunciation": "आय वॉटर द प्लांट्स।",
        "translation": "मैं पौधों को पानी देता हूँ।"
    },
    {
        "english": "We go on vacation.",
        "pronunciation": "वी गो ऑन वेकेशन।",
        "translation": "हम छुट्टी पर जाते हैं।"
    },
    {
        "english": "They study together.",
        "pronunciation": "दे स्टडी टुगेदर।",
        "translation": "वे एक साथ पढ़ते हैं।"
    },
    {
        "english": "You go to the gym.",
        "pronunciation": "यू गो टू द जिम।",
        "translation": "आप जिम जाते हैं।"
    },
    {
        "english": "I cook dinner.",
        "pronunciation": "आय कुक डिनर।",
        "translation": "मैं रात का खाना बनाता हूँ।"
    },
    {
        "english": "We watch a movie.",
        "pronunciation": "वी वॉच अ मूवी।",
        "translation": "हम एक फिल्म देखते हैं।"
    },
    {
        "english": "They go to bed.",
        "pronunciation": "दे गो टू बेड।",
        "translation": "वे सोने जाते हैं।"
    },
    {
        "english": "You help your siblings.",
        "pronunciation": "यू हेल्प योर सिब्लिंग्स।",
        "translation": "आप अपने भाई-बहनों की मदद करते हैं।"
    },
    {
        "english": "I go for a run.",
        "pronunciation": "आय गो फॉर अ रन।",
        "translation": "मैं दौड़ने जाता हूँ।"
    },
    {
        "english": "We go hiking.",
        "pronunciation": "वी गो हाइकिंग।",
        "translation": "हम ट्रैकिंग पर जाते हैं।"
    },
    {
        "english": "They go swimming.",
        "pronunciation": "दे गो स्विमिंग।",
        "translation": "वे तैरने जाते हैं।"
    },
    {
        "english": "You meet your friends.",
        "pronunciation": "यू मीट योर फ्रेंड्स।",
        "translation": "आप अपने दोस्तों से मिलते हैं।"
    },
    {
        "english": "I go to the cinema.",
        "pronunciation": "आय गो टू द सिनेमा।",
        "translation": "मैं सिनेमा जाता हूँ।"
    },
    {
        "english": "We have a picnic.",
        "pronunciation": "वी हैव अ पिकनिक।",
        "translation": "हम पिकनिक मनाते हैं।"
    },
    {
        "english": "I commute by bus.",
        "pronunciation": "आय कम्यूट बाय बस।",
        "translation": "मैं बस से सफर करता हूँ।"
    },
    {
        "english": "We study together.",
        "pronunciation": "वी स्टडी टुगेदर।",
        "translation": "हम एक साथ पढ़ते हैं।"
    },
    {
        "english": "They play games.",
        "pronunciation": "दे प्ले गेम्स।",
        "translation": "वे खेल खेलते हैं।"
    },
    {
        "english": "You jog in the park.",
        "pronunciation": "यू जॉग इन द पार्क।",
        "translation": "आप पार्क में जॉगिंग करते हैं।"
    },
    {
        "english": "I study at the library.",
        "pronunciation": "आय स्टडी एट द लाइब्रेरी।",
        "translation": "मैं लाइब्रेरी में पढ़ाई करता हूँ।"
    },
    {
        "english": "We tidy up.",
        "pronunciation": "वी टाइडि अप।",
        "translation": "हम सफाई करते हैं।"
    },
    {
        "english": "They watch movies.",
        "pronunciation": "दे वॉच मूवीज़।",
        "translation": "वे फिल्में देखते हैं।"
    },
    {
        "english": "You walk the dog.",
        "pronunciation": "यू वॉक द डॉग।",
        "translation": "आप कुत्ते को घुमाते हैं।"
    },
    {
        "english": "I practice piano.",
        "pronunciation": "आय प्रैक्टिस पियानो।",
        "translation": "मैं पियानो का अभ्यास करता हूँ।"
    },
    {
        "english": "We ride bikes.",
        "pronunciation": "वी राइड बाइक्स।",
        "translation": "हम साइकिल चलाते हैं।"
    },
    {
        "english": "They visit museums.",
        "pronunciation": "दे विजिट म्यूज़ियम्स।",
        "translation": "वे म्यूजियमों में जाते हैं।"
    },
    {
        "english": "You attend yoga.",
        "pronunciation": "यू अटेंड योगा।",
        "translation": "आप योग कक्षा में जाते हैं।"
    },
    {
        "english": "I take photos.",
        "pronunciation": "आय टेक फोटोस।",
        "translation": "मैं तस्वीरें खींचता हूँ।"
    },
    {
        "english": "We have a BBQ.",
        "pronunciation": "वी हैव अ बीबीक्यू।",
        "translation": "हम बारबेक्यू करते हैं।"
    },
    {
        "english": "They attend concerts.",
        "pronunciation": "दे अटेंड कॉन्सर्ट्स।",
        "translation": "वे संगीत कार्यक्रमों में जाते हैं।"
    },
    {
        "english": "You take your kids out.",
        "pronunciation": "यू टेक योर किड्स आउट।",
        "translation": "आप अपने बच्चों को बाहर ले जाते हैं।"
    },
    {
        "english": "I learn languages.",
        "pronunciation": "आय लर्न लैंग्वेजेज।",
        "translation": "मैं भाषाएँ सीखता हूँ।"
    },
    {
        "english": "We camp outdoors.",
        "pronunciation": "वी कैंप आउटडोर्स।",
        "translation": "हम बाहर कैम्प करते हैं।"
    },
    {
        "english": "They volunteer.",
        "pronunciation": "दे वॉलंटियर।",
        "translation": "वे स्वयंसेवा करते हैं।"
    },
    {
        "english": "You learn cooking.",
        "pronunciation": "यू लर्न कुकिंग।",
        "translation": "आप खाना बनाना सीखते हैं।"
    },
    {
        "english": "You shop for groceries.",
        "pronunciation": "यू शॉप फॉर ग्रोसरीज़।",
        "translation": "आप किराने का सामान खरीदते हैं।"
    },
    {
        "english": "I meet friends for lunch.",
        "pronunciation": "आय मीट फ्रेंड्स फॉर लंच।",
        "translation": "मैं दोस्तों के साथ लंच करता हूँ।"
    },
    {
        "english": "We enjoy sunsets.",
        "pronunciation": "वी एनजॉय सनसेट्स।",
        "translation": "हम सूर्यास्त का आनंद लेते हैं।"
    },
    {
        "english": "They hike trails.",
        "pronunciation": "दे हाइक ट्रेल्स।",
        "translation": "वे ट्रेल्स पर चढ़ाई करते हैं।"
    },
    {
        "english": "You attend workshops.",
        "pronunciation": "यू अटेंड वर्कशॉप्स।",
        "translation": "आप कार्यशालाओं में भाग लेते हैं।"
    },
    {
        "english": "We picnic outdoors.",
        "pronunciation": "वी पिकनिक आउटडोर्स।",
        "translation": "हम बाहर पिकनिक मनाते हैं।"
    },
    {
        "english": "They fish at the lake.",
        "pronunciation": "दे फिश एट द लेक।",
        "translation": "वे झील पर मछली पकड़ते हैं।"
    },
    {
        "english": "You meditate.",
        "pronunciation": "यू मेडिटेट।",
        "translation": "आप ध्यान करते हैं।"
    },
    {
        "english": "I buy fresh produce.",
        "pronunciation": "आय बाय फ्रेश प्रोड्यूस।",
        "translation": "मैं ताजे फल और सब्जियाँ खरीदता हूँ।"
    },
    {
        "english": "We go on a cruise.",
        "pronunciation": "वी गो ऑन अ क्रूज़।",
        "translation": "हम क्रूज पर जाते हैं।"
    },
    {
        "english": "They participate in runs.",
        "pronunciation": "दे पार्टिसिपेट इन रनस।",
        "translation": "वे दौड़ में भाग लेते हैं।"
    },
    {
        "english": "You swim laps.",
        "pronunciation": "यू स्विम लैप्स।",
        "translation": "आप गोताखोरी करते हैं।"
    },
    {
        "english": "I admire art.",
        "pronunciation": "आय एडमायर आर्ट।",
        "translation": "मैं कला की प्रशंसा करता हूँ।"
    },
    {
        "english": "We host BBQs.",
        "pronunciation": "वी होस्ट बीबीक्यूज।",
        "translation": "हम बारबेक्यू का आयोजन करते हैं।"
    },
    {
        "english": "They taste wines.",
        "pronunciation": "दे टेस्‍ट वाइनस।",
        "translation": "वे वाइन चखते हैं।"
    },
    {
        "english": "I run marathons.",
        "pronunciation": "आय रन मैराथन्स।",
        "translation": "मैं मैराथन दौड़ता हूँ।"
    },
    {
        "english": "They go wine tasting.",
        "pronunciation": "दे गो वाइन टेस्‍टिंग।",
        "translation": "वे वाइन चखने जाते हैं।"
    },
    {
        "english": "You learn dance moves.",
        "pronunciation": "यू लर्न डांस मूव्स।",
        "translation": "आप डांस मूव्स सीखते हैं।"
    },
    {
        "english": "I go on photo expeditions.",
        "pronunciation": "आय गो ऑन फोटो एक्सपेडिशन्स।",
        "translation": "मैं फोटो एक्सपेडिशन पर जाता हूँ।"
    },
    {
        "english": "We enjoy potlucks.",
        "pronunciation": "वी एनजॉय पॉटलक्‍स।",
        "translation": "हम पॉटलक्स का आनंद लेते हैं।"
    },
    {
        "english": "They go on safaris.",
        "pronunciation": "दे गो ऑन सफारीज़।",
        "translation": "वे सफारी पर जाते हैं।"
    },
    {
        "english": "You learn cooking.",
        "pronunciation": "यू लर्न कुकिंग।",
        "translation": "आप खाना बनाना सीखते हैं।"
    },
    {
        "english": "I enjoy botanical gardens.",
        "pronunciation": "आय एनजॉय बोटानिकल गार्डन।",
        "translation": "मैं वनस्पति उद्यानों का आनंद लेता हूँ।"
    },
    {
        "english": "We go camping.",
        "pronunciation": "वी गो कैंपिंग।",
        "translation": "हम कैम्पिंग करते हैं।"
    },
    {
        "english": "I take photography classes.",
        "pronunciation": "आय टेक फोटोग्राफी क्लासेस।",
        "translation": "मैं फोटोग्राफी की कक्षाएं लेता हूँ।"
    },
    {
        "english": "We attend festivals.",
        "pronunciation": "वी अटेंड फेस्टिवल्स।",
        "translation": "हम त्योहारों में भाग लेते हैं।"
    },
    {
        "english": "They run for charity.",
        "pronunciation": "दे रन फॉर चैरिटी।",
        "translation": "वे चैरिटी के लिए दौड़ते हैं।"
    },
    {
        "english": "You go swimming.",
        "pronunciation": "यू गो स्विमिंग।",
        "translation": "आप तैरने जाते हैं।"
    },
    {
        "english": "I visit galleries.",
        "pronunciation": "आय विजिट गैलरीज।",
        "translation": "मैं गैलरीज़ में जाता हूँ।"
    },
    {
        "english": "We have backyard BBQs.",
        "pronunciation": "वी हैव बैकयार्ड बीबीक्यूज़।",
        "translation": "हम पिछवाड़े में बारबेक्यू करते हैं।"
    },
    {
        "english": "How dare you?",
        "pronunciation": "हाउ डेर यू?",
        "translation": "तुम्हारी हिम्मत कैसे हुई?"
    },
    {
        "english": "Let’s catch up!",
        "pronunciation": "लेट्स कैच अप!",
        "translation": "चलो मिलते हैं!"
    },
    {
        "english": "I volunteer at a garden.",
        "pronunciation": "आय वॉलंटियर एट अ गार्डन।",
        "translation": "मैं एक बगीचे में स्वयंसेवा करता हूँ।"
    },
    {
        "english": "We organize picnics.",
        "pronunciation": "वी ऑर्गनाइज़ पिकनिक्‍स।",
        "translation": "हम पिकनिक का आयोजन करते हैं।"
    },
    {
        "english": "They visit art exhibits.",
        "pronunciation": "दे विजिट आर्ट एक्जीबिट्स।",
        "translation": "वे कला प्रदर्शनी में जाते हैं।"
    },
    {
        "english": "You cook new recipes.",
        "pronunciation": "यू कुक न्यू रेसिपीज।",
        "translation": "आप नई रेसिपी बनाते हैं।"
    },
    {
        "english": "I visit parks.",
        "pronunciation": "आय विजिट पार्क्‍स।",
        "translation": "मैं पार्कों में जाता हूँ।"
    },
    {
        "english": "We host dinner parties.",
        "pronunciation": "वी होस्ट डिनर पार्टीज।",
        "translation": "हम डिनर पार्टी का आयोजन करते हैं।"
    },
    {
        "english": "They go on wildlife tours.",
        "pronunciation": "दे गो ऑन वाइल्डलाइफ टूर।",
        "translation": "वे वन्यजीवों के दौरे पर जाते हैं।"
    },
    {
        "english": "You practice instruments.",
        "pronunciation": "यू प्रैक्टिस इंस्ट्रूमेंट्स।",
        "translation": "आप वाद्य यंत्र का अभ्यास करते हैं।"
    },
    {
        "english": "I explore new trails.",
        "pronunciation": "आय एक्सप्लोर न्यू ट्रेल्स।",
        "translation": "मैं नए रास्तों की खोज करता हूँ।"
    },
    {
        "english": "We attend live performances.",
        "pronunciation": "वी अटेंड लाइव परफॉरमेंसेस।",
        "translation": "हम लाइव प्रदर्शन में भाग लेते हैं।"
    },
    {
        "english": "They engage in outdoor activities.",
        "pronunciation": "दे एंगेज इन आउटडोर एक्टिविटीज।",
        "translation": "वे बाहरी गतिविधियों में भाग लेते हैं।"
    },
    {
        "english": "You attend cooking classes.",
        "pronunciation": "यू अटेंड कुकिंग क्लासेस।",
        "translation": "आप खाना बनाने की कक्षाओं में भाग लेते हैं।"
    },
    {
        "english": "I participate in community events.",
        "pronunciation": "आय पार्टिसिपेट इन कम्युनिटी इवेंट्स।",
        "translation": "मैं सामुदायिक कार्यक्रमों में भाग लेता हूँ।"
    },
    {
        "english": "We plan family outings.",
        "pronunciation": "वी प्लान फैमिली आउटिंग्स।",
        "translation": "हम परिवार की बाहरी गतिविधियों की योजना बनाते हैं।"
    },
    {
        "english": "They try new hobbies.",
        "pronunciation": "दे ट्राई न्यू हॉबीज़।",
        "translation": "वे नए शौक आजमाते हैं।"
    },
    {
        "english": "You relax at home.",
        "pronunciation": "यू रिलैक्स एट होम।",
        "translation": "आप घर पर आराम करते हैं।"
    },
    {
        "english": "I attend cultural festivals.",
        "pronunciation": "आय अटेंड कल्चरल फेस्टिवल्स।",
        "translation": "मैं सांस्कृतिक त्योहारों में भाग लेता हूँ।"
    },
    {
        "english": "We celebrate birthdays.",
        "pronunciation": "वी सेलेब्रेट बर्थडेज़।",
        "translation": "हम जन्मदिन मनाते हैं।"
    },
    {
        "english": "They go on historical tours.",
        "pronunciation": "दे गो ऑन हिस्टोरिकल टूर।",
        "translation": "वे ऐतिहासिक स्थलों के दौरे पर जाते हैं।"
    },
    {
        "english": "You enjoy nature walks.",
        "pronunciation": "यू एनजॉय नेचर वॉक्स।",
        "translation": "आप प्रकृति की सैर का आनंद लेते हैं।"
    },
    {
        "english": "I join fitness classes.",
        "pronunciation": "आय जॉइन फिटनेस क्लासेस।",
        "translation": "मैं फिटनेस कक्षाओं में शामिल होता हूँ।"
    },
    {
        "english": "We visit local markets.",
        "pronunciation": "वी विजिट लोकल मार्केट्स।",
        "translation": "हम स्थानीय बाजारों में जाते हैं।"
    },
    {
        "english": "They take leisurely strolls.",
        "pronunciation": "दे टेक लीजरली स्ट्रोल्स।",
        "translation": "वे आराम से सैर करते हैं।"
    },
    {
        "english": "You attend art workshops.",
        "pronunciation": "यू अटेंड आर्ट वर्कशॉप्स।",
        "translation": "आप कला कार्यशालाओं में भाग लेते हैं।"
    },
    {
        "english": "I learn about local history.",
        "pronunciation": "आय लर्न अबाउट लोकल हिस्ट्री।",
        "translation": "मैं स्थानीय इतिहास के बारे में सीखता हूँ।"
    },
    {
        "english": "We have picnics in parks.",
        "pronunciation": "वी हैव पिकनिक्‍स इन पार्क्‍स।",
        "translation": "हम पार्कों में पिकनिक मनाते हैं।"
    },
    {
        "english": "They go on brewery tours.",
        "pronunciation": "दे गो ऑन ब्रूअरी टूर।",
        "translation": "वे शराब बनाने के कारखानों के दौरे पर जाते हैं।"
    },
    {
        "english": "You practice mindfulness.",
        "pronunciation": "यू प्रैक्टिस माइंडफुलनेस।",
        "translation": "आप मानसिकता का अभ्यास करते हैं।"
    },
    {
        "english": "I explore new neighborhoods.",
        "pronunciation": "आय एक्सप्लोर न्यू नेबरहूड्स।",
        "translation": "मैं नए पड़ोसों की खोज करता हूँ।"
    },
    {
        "english": "We host game nights.",
        "pronunciation": "वी होस्ट गेम नाइट्स।",
        "translation": "हम गेम नाइट्स का आयोजन करते हैं।"
    },
    {
        "english": "They attend pottery classes.",
        "pronunciation": "दे अटेंड पॉटरी क्लासेस।",
        "translation": "वे मिट्टी के बर्तन बनाने की कक्षाओं में भाग लेते हैं।"
    },
    {
        "english": "You take part in craft fairs.",
        "pronunciation": "यू टेक पार्ट इन क्राफ्ट फेयर्स।",
        "translation": "आप शिल्प मेले में भाग लेते हैं।"
    },
    {
        "english": "I explore farmers’ markets.",
        "pronunciation": "आय एक्सप्लोर फार्मर्स' मार्केट्स।",
        "translation": "मैं किसान बाजारों की खोज करता हूँ।"
    },
    {
        "english": "We organize beach outings.",
        "pronunciation": "वी ऑर्गनाइज़ बीच आउटिंग्स।",
        "translation": "हम समुद्र तट की यात्राओं का आयोजन करते हैं।"
    },
    {
        "english": "They go on city tours.",
        "pronunciation": "दे गो ऑन सिटी टूर।",
        "translation": "वे शहर के दौरे पर जाते हैं।"
    },
    {
        "english": "You attend photography workshops.",
        "pronunciation": "यू अटेंड फोटोग्राफी वर्कशॉप्स।",
        "translation": "आप फोटोग्राफी कार्यशालाओं में भाग लेते हैं।"
    },
    {
        "english": "I try new cuisines.",
        "pronunciation": "आय ट्राई न्यू क्यूजीन्‍स।",
        "translation": "मैं नए व्यंजन आजमाता हूँ।"
    },
    {
        "english": "We have movie marathons.",
        "pronunciation": "वी हैव मूवी मैराथन्स।",
        "translation": "हम मूवी मैराथन आयोजित करते हैं।"
    },
    {
        "english": "They go on camping trips.",
        "pronunciation": "दे गो ऑन कैंपिंग ट्रिप्स।",
        "translation": "वे कैंपिंग यात्रा पर जाते हैं।"
    },
    {
        "english": "I attend music festivals.",
        "pronunciation": "आय अटेंड म्यूजिक फेस्टिवल्स।",
        "translation": "मैं संगीत त्योहारों में भाग लेता हूँ।"
    },
    {
        "english": "We enjoy garden walks.",
        "pronunciation": "वी एनजॉय गार्डन वॉक्स।",
        "translation": "हम बगीचे में सैर का आनंद लेते हैं।"
    },
    {
        "english": "They go on ghost tours.",
        "pronunciation": "दे गो ऑन घोस्ट टूर।",
        "translation": "वे प्रेत भ्रमण पर जाते हैं।"
    },
    {
        "english": "You explore countryside trails.",
        "pronunciation": "यू एक्सप्लोर काउंट्रीसाइड ट्रेल्स।",
        "translation": "आप ग्रामीण रास्तों की खोज करते हैं।"
    },
    {
        "english": "I attend wellness retreats.",
        "pronunciation": "आय अटेंड वेलनेस रिट्रीट्स।",
        "translation": "मैं स्वास्थ्य रिट्रीट्स में भाग लेता हूँ।"
    },
    {
        "english": "We host barbecues.",
        "pronunciation": "वी होस्ट बारबेक्यूज।",
        "translation": "हम बारबेक्यू का आयोजन करते हैं।"
    },
    {
        "english": "They go on sightseeing tours.",
        "pronunciation": "दे गो ऑन साइटसीइंग टूर।",
        "translation": "वे पर्यटन दौरे पर जाते हैं।"
    },
    {
        "english": "You attend pottery workshops.",
        "pronunciation": "यू अटेंड पॉटरी वर्कशॉप्स।",
        "translation": "आप मिट्टी के बर्तन बनाने की कार्यशालाओं में भाग लेते हैं।"
    },
    {
        "english": "I explore local landmarks.",
        "pronunciation": "आय एक्सप्लोर लोकल लैंडमार्क्स।",
        "translation": "मैं स्थानीय स्थलों की खोज करता हूँ।"
    },
    {
        "english": "We organize hiking trips.",
        "pronunciation": "वी ऑर्गनाइज़ हाइकिंग ट्रिप्स।",
        "translation": "हम ट्रेकिंग यात्राओं का आयोजन करते हैं।"
    },
    {
        "english": "They go on wine tastings.",
        "pronunciation": "दे गो ऑन वाइन टेस्‍टिंग्‍स।",
        "translation": "वे वाइन चखने जाते हैं।"
    },
    {
        "english": "You practice meditation techniques.",
        "pronunciation": "यू प्रैक्टिस मेडिटेशन टेक्नीक्‍स।",
        "translation": "आप ध्यान की तकनीकों का अभ्यास करते हैं।"
    },
    {
        "english": "I take part in art exhibitions.",
        "pronunciation": "आय टेक पार्ट इन आर्ट एक्सहिबिशंस।",
        "translation": "मैं कला प्रदर्शनियों में भाग लेता हूँ।"
    },
    {
        "english": "We enjoy outdoor concerts.",
        "pronunciation": "वी एनजॉय आउटडोर कॉन्सर्ट्स।",
        "translation": "हम खुले में संगीत कार्यक्रम का आनंद लेते हैं।"
    },
    {
        "english": "They attend food festivals.",
        "pronunciation": "दे अटेंड फूड फेस्टिवल्स।",
        "translation": "वे खाद्य त्योहारों में भाग लेते हैं।"
    },
    {
        "english": "You explore nature reserves.",
        "pronunciation": "यू एक्सप्लोर नेचर रिजर्व्स।",
        "translation": "आप प्रकृति आरक्षित क्षेत्रों की खोज करते हैं।"
    },
    {
        "english": "I attend cooking demonstrations.",
        "pronunciation": "आय अटेंड कुकिंग डेमोंस्ट्रेशंस।",
        "translation": "मैं खाना बनाने के प्रदर्शन में भाग लेता हूँ।"
    },
    {
        "english": "We go on nature walks.",
        "pronunciation": "वी गो ऑन नेचर वॉक्स।",
        "translation": "हम प्रकृति की सैर पर जाते हैं।"
    },
    {
        "english": "They visit historical landmarks.",
        "pronunciation": "दे विजिट हिस्टोरिकल लैंडमार्क्स।",
        "translation": "वे ऐतिहासिक स्थलों पर जाते हैं।"
    },
    {
        "english": "You attend wellness workshops.",
        "pronunciation": "यू अटेंड वेलनेस वर्कशॉप्स।",
        "translation": "आप स्वास्थ्य कार्यशालाओं में भाग लेते हैं।"
    },
    {
        "english": "I commute by bus.",
        "pronunciation": "आय कम्यूट बाय बस।",
        "translation": "मैं बस से यात्रा करता हूँ।"
    },
    {
        "english": "We study together.",
        "pronunciation": "वी स्टडी टुगेदर।",
        "translation": "हम एक साथ पढ़ते हैं।"
    },
    {
        "english": "They play games.",
        "pronunciation": "दे प्ले गेम्स।",
        "translation": "वे खेल खेलते हैं।"
    },
    {
        "english": "You jog in the park.",
        "pronunciation": "यू जॉग इन द पार्क।",
        "translation": "आप पार्क में जॉगिंग करते हैं।"
    },
    {
        "english": "I study at the library.",
        "pronunciation": "आय स्टडी एट द लाइब्रेरी।",
        "translation": "मैं पुस्तकालय में पढ़ाई करता हूँ।"
    },
    {
        "english": "We tidy up.",
        "pronunciation": "वी टाइडि अप।",
        "translation": "हम साफ-सफाई करते हैं।"
    },
    {
        "english": "They watch movies.",
        "pronunciation": "दे वॉच मूवीज़।",
        "translation": "वे फिल्में देखते हैं।"
    },
    {
        "english": "You walk the dog.",
        "pronunciation": "यू वॉक द डॉग।",
        "translation": "आप कुत्ते को टहलाते हैं।"
    },
    {
        "english": "I practice piano.",
        "pronunciation": "आय प्रैक्टिस पियानो।",
        "translation": "मैं पियानो का अभ्यास करता हूँ।"
    },
    {
        "english": "We ride bikes.",
        "pronunciation": "वी राइड बाइक्स।",
        "translation": "हम साइकिल चलाते हैं।"
    },
    {
        "english": "They visit museums.",
        "pronunciation": "दे विजिट म्यूज़ियम्स।",
        "translation": "वे संग्रहालयों में जाते हैं।"
    },
    {
        "english": "You attend yoga.",
        "pronunciation": "यू अटेंड योगा।",
        "translation": "आप योग करते हैं।"
    },
    {
        "english": "I take photos.",
        "pronunciation": "आय टेक फोटोज़।",
        "translation": "मैं फोटो खींचता हूँ।"
    },
    {
        "english": "We have a BBQ.",
        "pronunciation": "वी हैव अ बीबीक्यू।",
        "translation": "हम बारबेक्यू करते हैं।"
    },
    {
        "english": "They attend concerts.",
        "pronunciation": "दे अटेंड कॉन्सर्ट्स।",
        "translation": "वे संगीत कार्यक्रमों में भाग लेते हैं।"
    },
    {
        "english": "You take your kids out.",
        "pronunciation": "यू टेक योर किड्स आउट।",
        "translation": "आप अपने बच्चों को बाहर ले जाते हैं।"
    },
    {
        "english": "I learn languages.",
        "pronunciation": "आय लर्न लैंग्वेज़।",
        "translation": "मैं भाषाएँ सीखता हूँ।"
    },
    {
        "english": "We camp outdoors.",
        "pronunciation": "वी कैम्प आउटडॉर्स।",
        "translation": "हम बाहर कैम्पिंग करते हैं।"
    },
    {
        "english": "They volunteer.",
        "pronunciation": "दे वॉलंटियर।",
        "translation": "वे स्वयंसेवा करते हैं।"
    },
    {
        "english": "You shop for groceries.",
        "pronunciation": "यू शॉप फॉर ग्रोसरीज़।",
        "translation": "आप किराने का सामान खरीदते हैं।"
    },
    {
        "english": "I meet friends for lunch.",
        "pronunciation": "आय मीट फ्रेंड्स फॉर लंच।",
        "translation": "मैं दोस्तों के साथ दोपहर का खाना खाता हूँ।"
    },
    {
        "english": "We enjoy sunsets.",
        "pronunciation": "वी एनजॉय सनसेट्स।",
        "translation": "हम सूर्यास्त का आनंद लेते हैं।"
    },
    {
        "english": "They hike trails.",
        "pronunciation": "दे हाइक ट्रेल्स।",
        "translation": "वे ट्रेल्स पर चढ़ाई करते हैं।"
    },
    {
        "english": "What is your name?",
        "pronunciation": "व्हाट इज़ योर नेम?",
        "translation": "तुम्हारा नाम क्या है?"
    },
    {
        "english": "How are you?",
        "pronunciation": "हाउ आर यू?",
        "translation": "तुम कैसे हो?"
    },
    {
        "english": "I am fine, thank you.",
        "pronunciation": "आय आम फाइन, थैंक यू।",
        "translation": "मैं ठीक हूँ, धन्यवाद।"
    },
    {
        "english": "Where do you live?",
        "pronunciation": "व्हेयर डू यू लिव?",
        "translation": "तुम कहाँ रहते हो?"
    },
    {
        "english": "What do you do?",
        "pronunciation": "व्हाट डू यू डू?",
        "translation": "तुम क्या करते हो?"
    },
    {
        "english": "I like to read books.",
        "pronunciation": "आय लाइक टू रीड बुक्स।",
        "translation": "मुझे किताबें पढ़ना पसंद है।"
    },
    {
        "english": "Do you have any pets?",
        "pronunciation": "डू यू हैव एनी पेंट्स?",
        "translation": "क्या आपके पास कोई पालतू जानवर है?"
    },
    {
        "english": "What is your favorite food?",
        "pronunciation": "व्हाट इज़ योर फेवरेट फूड?",
        "translation": "तुम्हारा पसंदीदा खाना क्या है?"
    },
    {
        "english": "Can you help me?",
        "pronunciation": "कैन यू हेल्प मी?",
        "translation": "क्या तुम मेरी मदद कर सकते हो?"
    },
    {
        "english": "I am learning English.",
        "pronunciation": "आय आम लर्निंग इंग्लिश।",
        "translation": "मैं अंग्रेजी सीख रहा हूँ।"
    },
    {
        "english": "What time is it?",
        "pronunciation": "व्हाट टाइम इज़ इट?",
        "translation": "क्या समय हुआ है?"
    },
    {
        "english": "Where are you going?",
        "pronunciation": "व्हेयर आर यू गोइंग?",
        "translation": "तुम कहाँ जा रहे हो?"
    },
    {
        "english": "I love listening to music.",
        "pronunciation": "आय लव लिस्निंग टू म्यूज़िक।",
        "translation": "मुझे संगीत सुनना पसंद है।"
    },
    {
        "english": "What do you like to do?",
        "pronunciation": "व्हाट डू यू लाइक टू डू?",
        "translation": "तुम्हें क्या करना पसंद है?"
    },
    {
        "english": "How was your day?",
        "pronunciation": "हाउ वाज़ योर डे?",
        "translation": "तुम्हारा दिन कैसा था?"
    },
    {
        "english": "I enjoy cooking.",
        "pronunciation": "आय एनजॉय कुकिंग।",
        "translation": "मुझे खाना बनाना पसंद है।"
    },
    {
        "english": "What is your favorite color?",
        "pronunciation": "व्हाट इज़ योर फेवरेट कलर?",
        "translation": "तुम्हारा पसंदीदा रंग क्या है?"
    },
    {
        "english": "Do you speak Hindi?",
        "pronunciation": "डू यू स्पीक हिंदी?",
        "translation": "क्या तुम हिंदी बोलते हो?"
    },
    {
        "english": "I want to travel the world.",
        "pronunciation": "आय वांट टू ट्रैवल द वर्ल्ड।",
        "translation": "मैं दुनिया की यात्रा करना चाहता हूँ।"
    },
    {
        "english": "What is the weather like today?",
        "pronunciation": "व्हाट इज़ द वेदर लाइक टुडे?",
        "translation": "आज मौसम कैसा है?"
    },
    {
        "english": "I have a brother and a sister.",
        "pronunciation": "आय हैव अ ब्रदर एंड अ सिस्टर।",
        "translation": "मेरे पास एक भाई और एक बहन है।"
    },
    {
        "english": "What is your job?",
        "pronunciation": "व्हाट इज़ योर जॉब?",
        "translation": "तुम्हारा काम क्या है?"
    },
    {
        "english": "I enjoy playing sports.",
        "pronunciation": "आय एनजॉय प्लेइंग स्पोर्ट्स।",
        "translation": "मुझे खेल खेलना पसंद है।"
    },
    {
        "english": "Can I ask you a question?",
        "pronunciation": "कैन आय आस्क यू अ क्वेश्चन?",
        "translation": "क्या मैं तुमसे एक सवाल पूछ सकता हूँ?"
    },
    {
        "english": "What is your dream?",
        "pronunciation": "व्हाट इज़ योर ड्रीम?",
        "translation": "तुम्हारा सपना क्या है?"
    },
    {
        "english": "I like to watch movies.",
        "pronunciation": "आय लाइक टू वॉच मूवीज़।",
        "translation": "मुझे फिल्में देखना पसंद है।"
    },
    {
        "english": "Where did you go last weekend?",
        "pronunciation": "व्हेयर डिड यू गो लास्ट वीकेंड?",
        "translation": "तुम पिछले सप्ताहांत कहाँ गए थे?"
    },
    {
        "english": "What do you want to eat?",
        "pronunciation": "व्हाट डू यू वांट टू ईट?",
        "translation": "तुम्हें क्या खाना है?"
    },
    {
        "english": "I am happy today.",
        "pronunciation": "आय आम हैप्पी टुडे।",
        "translation": "मैं आज खुश हूँ।"
    },
    {
        "english": "What is your favorite book?",
        "pronunciation": "व्हाट इज़ योर फेवरेट बुक?",
        "translation": "तुम्हारी पसंदीदा किताब क्या है?"
    },
    {
        "english": "I need to go shopping.",
        "pronunciation": "आय नीड टू गो शॉपिंग।",
        "translation": "मुझे खरीदारी के लिए जाना है।"
    },
    {
        "english": "How do you feel today?",
        "pronunciation": "हाउ डू यू फील टुडे?",
        "translation": "तुम आज कैसा महसूस कर रहे हो?"
    },
    {
        "english": "What is your hobby?",
        "pronunciation": "व्हाट इज़ योर हॉबी?",
        "translation": "तुम्हा शौक क्या है?"
    },
    {
        "english": "I like to go for walks.",
        "pronunciation": "आय लाइक टू गो फॉर वॉक्स।",
        "translation": "मुझे टहलने जाना पसंद है।"
    },
    {
        "english": "Can you recommend a good restaurant?",
        "pronunciation": "कैन यू रेकमेंड अ गुड रेस्टोरेंट?",
        "translation": "क्या तुम एक अच्छा रेस्तरां सुझा सकते हो?"
    },
    {
        "english": "What kind of music do you like?",
        "pronunciation": "व्हाट काइंड ऑफ म्यूज़िक डू यू लाइक?",
        "translation": "तुम्हें किस तरह का संगीत पसंद है?"
    },
    {
        "english": "I want to learn how to dance.",
        "pronunciation": "आय वांट टू लर्न हाउ टू डांस।",
        "translation": "मैं नृत्य करना सीखना चाहता हूँ।"
    },
    {
        "english": "How was your weekend?",
        "pronunciation": "हाउ वाज़ योर वीकेंड?",
        "translation": "तुम्हारा सप्ताहांत कैसा था?"
    },
    {
        "english": "What did you do yesterday?",
        "pronunciation": "व्हाट डिड यू डू येस्टरडे?",
        "translation": "तुमने कल क्या किया?"
    },
    {
        "english": "I am reading a fascinating book.",
        "pronunciation": "आय आम रीडिंग अ फैसिनेटिंग बुक।",
        "translation": "मैं एक दिलचस्प किताब पढ़ रहा हूँ।"
    },
    {
        "english": "What are your plans for today?",
        "pronunciation": "व्हाट आर योर प्लान्स फॉर टुडे?",
        "translation": "तुम्हारे आज के लिए क्या योजनाएँ हैं?"
    },
    {
        "english": "I have a lot of friends.",
        "pronunciation": "आय हैव अ लॉट ऑफ फ्रेंड्स।",
        "translation": "मेरे पास बहुत से दोस्त हैं।"
    },
    {
        "english": "What do you do in your free time?",
        "pronunciation": "व्हाट डू यू डू इन योर फ्री टाइम?",
        "translation": "तुम अपने खाली समय में क्या करते हो?"
    },
    {
        "english": "I enjoy going to the beach.",
        "pronunciation": "आय एनजॉय गोइंग टू द बीच।",
        "translation": "मुझे समुद्र तट पर जाना पसंद है।"
    },
    {
        "english": "Can you sing a song?",
        "pronunciation": "कैन यू सिंग अ सॉन्ग?",
        "translation": "क्या तुम एक गीत गा सकते हो?"
    },
    {
        "english": "What do you think about this?",
        "pronunciation": "व्हाट डू यू थिंक अबाउट थिस?",
        "translation": "तुम इस बारे में क्या सोचते हो?"
    },
    {
        "english": "I love spending time with my family.",
        "pronunciation": "आय लव स्पेंडिंग टाइम विद माय फैमिली।",
        "translation": "मुझे अपने परिवार के साथ समय बिताना पसंद है।"
    },
    {
        "english": "What is your favorite movie?",
        "pronunciation": "व्हाट इज़ योर फेवरेट मूवी?",
        "translation": "तुम्हारी पसंदीदा फिल्म क्या है?"
    },
    {
        "english": "I am going to the market.",
        "pronunciation": "आय अम गोइंग टू द मार्केट।",
        "translation": "मैं बाजार जा रहा हूँ।"
    },
    {
        "english": "What is the best way to learn English?",
        "pronunciation": "व्हाट इज़ द बेस्ट वे टू लर्न इंग्लिश?",
        "translation": "अंग्रेजी सीखने का सबसे अच्छा तरीका क्या है?"
    },
    {
        "english": "I like to play video games.",
        "pronunciation": "आय लाइक टू प्ले वीडियो गेम्स।",
        "translation": "मुझे वीडियो गेम खेलना पसंद है।"
    },
    {
        "english": "Can we meet tomorrow?",
        "pronunciation": "कैन वी मीट टुमॉरो?",
        "translation": "क्या हम कल मिल सकते हैं?"
    },
    {
        "english": "What is your favorite place?",
        "pronunciation": "व्हाट इज़ योर फेवरेट प्लेस?",
        "translation": "तुम्हारा पसंदीदा स्थान क्या है?"
    },
    {
        "english": "I enjoy reading newspapers.",
        "pronunciation": "आय एनजॉय रीडिंग न्यूज़पेपर्स।",
        "translation": "मुझे समाचार पत्र पढ़ना पसंद है।"
    },
    {
        "english": "What is your favorite season?",
        "pronunciation": "व्हाट इज़ योर फेवरेट सीजन?",
        "translation": "तुम्हारी पसंदीदा ऋतु क्या है?"
    },
    {
        "english": "I am excited for the holidays.",
        "pronunciation": "आय अम एक्साइटेड फॉर द हॉलीडेज।",
        "translation": "मैं छुट्टियों के लिए उत्साहित हूँ।"
    },
    {
        "english": "What do you want to learn?",
        "pronunciation": "व्हाट डू यू वांट टू लर्न?",
        "translation": "तुम क्या सीखना चाहते हो?"
    },
    {
        "english": "I am going to the gym.",
        "pronunciation": "आय अम गोइंग टू द जिम।",
        "translation": "मैं जिम जा रहा हूँ।"
    },
    {
        "english": "How do you spend your weekends?",
        "pronunciation": "हाउ डू यू स्पेंड योर वीकेंड्स?",
        "translation": "तुम अपने सप्ताहांत कैसे बिताते हो?"
    },
    {
        "english": "What is your favorite drink?",
        "pronunciation": "व्हाट इज़ योर फेवरेट ड्रिंक?",
        "translation": "तुम्हारा पसंदीदा पेय क्या है?"
    },
    {
        "english": "I like to explore new places.",
        "pronunciation": "आय लाइक टू एक्सप्लोर न्यू प्लेसिस।",
        "translation": "मुझे नए स्थानों की खोज करना पसंद है।"
    },
    {
        "english": "What are you afraid of?",
        "pronunciation": "व्हाट आर यू अफ्रेड ऑफ?",
        "translation": "तुम्हें किस बात से डर लगता है?"
    },
    {
        "english": "I want to try new foods.",
        "pronunciation": "आय वांट टू ट्राई न्यू फूड्स।",
        "translation": "मैं नए खाने की कोशिश करना चाहता हूँ।"
    },
    {
        "english": "What is your goal in life?",
        "pronunciation": "व्हाट इज़ योर गोल इन लाइफ?",
        "translation": "तुम्हारा जीवन में लक्ष्य क्या है?"
    },
    {
        "english": "I love to watch the sunset.",
        "pronunciation": "आय लव टू वॉच द सनसेट।",
        "translation": "मुझे सूर्योदय देखना पसंद है।"
    },
    {
        "english": "What do you want to do this weekend?",
        "pronunciation": "व्हाट डू यू वांट टू डू थिस वीकेंड?",
        "translation": "तुम इस सप्ताहांत क्या करना चाहते हो?"
    },
    {
        "english": "I am grateful for my friends.",
        "pronunciation": "आय एम ग्रेटफुल फॉर माय फ्रेंड्स।",
        "translation": "मैं अपने दोस्तों के लिए आभारी हूँ।"
    },
    {
        "english": "What makes you happy?",
        "pronunciation": "व्हाट मेक्स यू हैप्पी?",
        "translation": "तुम्हें क्या खुश करता है?"
    },
    {
        "english": "I enjoy gardening.",
        "pronunciation": "आय एनजॉय गार्डनिंग।",
        "translation": "मुझे बागवानी करना पसंद है।"
    },
    {
        "english": "What is your favorite sport?",
        "pronunciation": "व्हाट इज़ योर फेवरेट स्पोर्ट?",
        "translation": "तुम्हारा पसंदीदा खेल क्या है?"
    },
    {
        "english": "I want to improve my English skills.",
        "pronunciation": "आय वांट टू इम्प्रूव माय इंग्लिश स्किल्स।",
        "translation": "मैं अपनी अंग्रेजी क्षमताओं में सुधार करना चाहता हूँ।"
    },
    {
        "english": "What are you passionate about?",
        "pronunciation": "व्हाट आर यू पैशनेट अबाउट?",
        "translation": "तुम किस बारे में उत्साही हो?"
    },
    {
        "english": "I like to take photos.",
        "pronunciation": "आय लाइक टू टेक फ़ोटोज।",
        "translation": "मुझे फोटो खींचना पसंद है।"
    },
    {
        "english": "Can you tell me a story?",
        "pronunciation": "कैन यू टेल मी अ स्टोरी?",
        "translation": "क्या तुम मुझे एक कहानी बता सकते हो?"
    },
    {
        "english": "What do you usually do after work?",
        "pronunciation": "व्हाट डू यू यूज़ुअली डू आफ्टर वर्क?",
        "translation": "तुम आमतौर पर काम के बाद क्या करते हो?"
    },
    {
        "english": "I enjoy visiting museums.",
        "pronunciation": "आय एनजॉय विज़िटिंग म्यूज़ियम्स।",
        "translation": "मुझे संग्रहालयों का दौरा करना पसंद है।"
    },
    {
        "english": "What do you think is important in life?",
        "pronunciation": "व्हाट डू यू थिंक इज़ इंपोर्टेंट इन लाइफ?",
        "translation": "तुम्हारे अनुसार जीवन में क्या महत्वपूर्ण है?"
    },
    {
        "english": "I am planning a trip.",
        "pronunciation": "आय अम प्लानिंग अ ट्रिप।",
        "translation": "मैं एक यात्रा की योजना बना रहा हूँ।"
    },
    {
        "english": "What is your biggest achievement?",
        "pronunciation": "व्हाट इज़ योर बिगेस्ट अचिवमेंट?",
        "translation": "तुम्ही सबसे बड़ी उपलब्धि क्या है?"
    },
    {
        "english": "I love to cook for my family.",
        "pronunciation": "आय लव टू कुक फॉर माय फैमिली।",
        "translation": "मुझे अपने परिवार के लिए खाना बनाना पसंद है।"
    },
    {
        "english": "What do you want to achieve this year?",
        "pronunciation": "व्हाट डू यू वांट टू अचिव थिस इयर?",
        "translation": "तुम इस साल क्या हासिल करना चाहते हो?"
    },
    {
        "english": "I am looking for a new job.",
        "pronunciation": "आय अम लुकिंग फॉर अ न्यू जॉब।",
        "translation": "मैं एक नई नौकरी की तलाश में हूँ।"
    },
    {
        "english": "What is your opinion about this?",
        "pronunciation": "व्हाट इज़ योर ओपिनियन अबाउट थिस?",
        "translation": "इस बारे में तुम्हारी राय क्या है?"
    },
    {
        "english": "I enjoy spending time outdoors.",
        "pronunciation": "आय एनजॉय स्पेंडिंग टाइम आउडडॉर्स।",
        "translation": "मुझे बाहर समय बिताना पसंद है।"
    },
    {
        "english": "What do you like most about your job?",
        "pronunciation": "व्हाट डू यू लाइक मोस्ट अबाउट योर जॉब?",
        "translation": "तुम्हारे काम के बारे में तुम्हें सबसे ज्यादा क्या पसंद है?"
    },
    {
        "english": "What did you have for breakfast?",
        "pronunciation": "व्हाट डिड यू हैव फॉर ब्रेकफास्ट?",
        "translation": "तुमने नाश्ते में क्या खाया?"
    },
    {
        "english": "Do you like to go hiking?",
        "pronunciation": "डू यू लाइक टू गो हाइकिंग?",
        "translation": "क्या तुम्हें ट्रेकिंग करना पसंद है?"
    },
    {
        "english": "I want to visit my grandparents.",
        "pronunciation": "आय वांट टू विज़िट माय ग्रैंडपैरेंट्स।",
        "translation": "मैं अपने दादा-दादी से मिलने जाना चाहता हूँ।"
    },
    {
        "english": "What are you watching on TV?",
        "pronunciation": "व्हाट आर यू वॉचिंग ऑन टीवी?",
        "translation": "तुम टीवी पर क्या देख रहे हो?"
    },
    {
        "english": "I enjoy painting in my free time.",
        "pronunciation": "आय एनजॉय पेंटिंग इन माय फ्री टाइम।",
        "translation": "मुझे अपने फुर्सत के समय में पेंटिंग करना पसंद है।"
    },
    {
        "english": "Can you speak any other languages?",
        "pronunciation": "कैन यू स्पीक एनी अदर लैंग्वेजेस?",
        "translation": "क्या तुम कोई और भाषा बोल सकते हो?"
    },
    {
        "english": "What is your favorite way to relax?",
        "pronunciation": "व्हाट इज़ योर फेवरेट वे टू रिलैक्स?",
        "translation": "तुम्हें आराम करने का सबसे पसंदीदा तरीका क्या है?"
    },
    {
        "english": "I love watching documentaries.",
        "pronunciation": "आय लव वॉचिंग डॉक्यूमेंट्रीज़।",
        "translation": "मुझे डॉक्यूमेंट्रीज़ देखना पसंद है।"
    },
    {
        "english": "What kind of movies do you prefer?",
        "pronunciation": "व्हाट काइंड ऑफ मूवीज़ डू यू प्रेफर?",
        "translation": "तुम्हें किस प्रकार की फिल्में पसंद हैं?"
    },
    {
        "english": "I am taking a course in photography.",
        "pronunciation": "आय अम टेकिंग अ कोर्स इन फ़ोटोग्राफ़ी।",
        "translation": "मैं फोटोग्राफी में एक पाठ्यक्रम कर रहा हूँ।"
    },
    {
        "english": "What are your favorite hobbies?",
        "pronunciation": "व्हाट आर योर फेवरेट हॉबीज़?",
        "translation": "तुम्हारी पसंदीदा शौक क्या हैं?"
    },
    {
        "english": "Do you enjoy cooking new recipes?",
        "pronunciation": "डू यू एनजॉय कुकिंग न्यू रेसिपीज?",
        "translation": "क्या तुम्हें नई रेसिपी बनाना पसंद है?"
    },
    {
        "english": "I am planning to start a garden.",
        "pronunciation": "आय अम प्लानिंग टू स्टार्ट अ गार्डन।",
        "translation": "मैं एक बाग लगाने की योजना बना रहा हूँ।"
    },
    {
        "english": "What is the last book you read?",
        "pronunciation": "व्हाट इज़ द लास्ट बुक यू रीड?",
        "translation": "तुमने आखिरी बार कौन सी किताब पढ़ी थी?"
    },
    {
        "english": "Can you show me how to do that?",
        "pronunciation": "कैन यू शो मी हाउ टू डू दैट?",
        "translation": "क्या तुम मुझे यह करना सिखा सकते हो?"
    },
    {
        "english": "What are you grateful for today?",
        "pronunciation": "व्हाट आर यू ग्रेटफुल फॉर टुडे?",
        "translation": "तुम आज किसके लिए आभारी हो?"
    },
    {
        "english": "I want to improve my cooking skills.",
        "pronunciation": "आय वांट टू इम्प्रूव माय कुकिंग स्किल्स।",
        "translation": "मैं अपनी खाना बनाने की क्षमताओं में सुधार करना चाहता हूँ।"
    },
    {
        "english": "What is your dream vacation destination?",
        "pronunciation": "व्हाट इज़ योर ड्रीम वेकेशन डेस्टिनेशन?",
        "translation": "तुम्हारी सपनों की छुट्टियों का गंतव्य क्या है?"
    },
    {
        "english": "I enjoy learning about different cultures.",
        "pronunciation": "आय एनजॉय लर्निंग अबाउट डिफरेंट कल्चर्स।",
        "translation": "मुझे विभिन्न संस्कृतियों के बारे में सीखना पसंद है।"
    },
    {
        "english": "What is your favorite childhood memory?",
        "pronunciation": "व्हाट इज़ योर फेवरेट चाइल्डहुड मेमोरी?",
        "translation": "तुम्हारी पसंदीदा बचपन की याद क्या है?"
    },
    {
        "english": "I like to listen to podcasts.",
        "pronunciation": "आय लाइक टू लिसन टू पॉडकास्ट्स।",
        "translation": "मुझे पॉडकास्ट सुनना पसंद है।"
    },
    {
        "english": "What do you think about social media?",
        "pronunciation": "व्हाट डू यू थिंक अबाउट सोशल मीडिया?",
        "translation": "तुम सोशल मीडिया के बारे में क्या सोचते हो?"
    },
    {
        "english": "I want to learn how to play the guitar.",
        "pronunciation": "आय वांट टू लर्न हाउ टू प्ले द गिटार।",
        "translation": "मैं गिटार बजाना सीखना चाहता हूँ।"
    },
    {
        "english": "What type of food do you enjoy?",
        "pronunciation": "व्हाट टाइप ऑफ फूड डू यू एनजॉय?",
        "translation": "तुम्हें किस प्रकार का खाना पसंद है?"
    },
    {
        "english": "I love going to the movies with friends.",
        "pronunciation": "आय लव गोइंग टू द मूवीज़ विद फ्रेंड्स।",
        "translation": "मुझे दोस्तों के साथ फिल्में देखने जाना पसंद है।"
    },
    {
        "english": "What is your biggest challenge?",
        "pronunciation": "व्हाट इज़ योर बिगेस्ट चैलेंज?",
        "translation": "तुम्हारी सबसे बड़ी चुनौती क्या है?"
    },
    {
        "english": "I am excited about the upcoming event.",
        "pronunciation": "आय एम एक्साइटेड अबाउट द अपकमिंग इवेंट।",
        "translation": "मैं आने वाले कार्यक्रम के लिए उत्साहित हूँ।"
    },
    {
        "english": "What is your favorite way to exercise?",
        "pronunciation": "व्हाट इज़ योर फेवरेट वे टू एक्सरसाइज?",
        "translation": "तुम्हें व्यायाम करने का सबसे पसंदीदा तरीका क्या है?"
    },
    {
        "english": "I enjoy attending concerts.",
        "pronunciation": "आय एनजॉय अटेंडिंग कॉन्सर्ट्स।",
        "translation": "मुझे संगीत कार्यक्रमों में भाग लेना पसंद है।"
    },
    {
        "english": "What do you do to stay healthy?",
        "pronunciation": "व्हाट डू यू डू टू स्टे हेल्दी?",
        "translation": "तुम स्वस्थ रहने के लिए क्या करते हो?"
    },
    {
        "english": "I want to learn about history.",
        "pronunciation": "आय वांट टू लर्न अबाउट हिस्ट्री।",
        "translation": "मैं इतिहास के बारे में सीखना चाहता हूँ।"
    },
    {
        "english": "What is your favorite ice cream flavor?",
        "pronunciation": "व्हाट इज़ योर फेवरेट आइस क्रीम फ्लेवर?",
        "translation": "तुम्हारा पसंदीदा आइसक्रीम का स्वाद क्या है?"
    },
    {
        "english": "I enjoy doing yoga.",
        "pronunciation": "आय एनजॉय डूइंग योगा।",
        "translation": "मुझे योग करना पसंद है।"
    },
    {
        "english": "What do you do when you are bored?",
        "pronunciation": "व्हाट डू यू डू व्हेन यू आर बॉर्ड?",
        "translation": "तुम बोर होने पर क्या करते हो?"
    },
    {
        "english": "I love to write stories.",
        "pronunciation": "आय लव टू राइट स्टोरीज़।",
        "translation": "मुझे कहानियाँ लिखना पसंद है।"
    },
    {
        "english": "What is your favorite animal?",
        "pronunciation": "व्हाट इज़ योर फेवरेट एनिमल?",
        "translation": "तुम्हारा पसंदीदा जानवर क्या है?"
    },
    {
        "english": "I am interested in science.",
        "pronunciation": "आय एम इंटरेस्टेड इन साइंस।",
        "translation": "मुझे विज्ञान में रुचि है।"
    },
    {
        "english": "What do you do to relax after work?",
        "pronunciation": "व्हाट डू यू डू टू रिलैक्स आफ्टर वर्क?",
        "translation": "काम के बाद तुम आराम करने के लिए क्या करते हो?"
    },
    {
        "english": "I want to travel around the world.",
        "pronunciation": "आय वांट टू ट्रैवल अराउंड द वर्ल्ड।",
        "translation": "मैं दुनिया भर में यात्रा करना चाहता हूँ।"
    },
    {
        "english": "What is your favorite song?",
        "pronunciation": "व्हाट इज़ योर फेवरेट सॉन्ग?",
        "translation": "तुम्हारा पसंदीदा गीत क्या है?"
    },
    {
        "english": "I love to dance.",
        "pronunciation": "आय लव टू डांस।",
        "translation": "मुझे नृत्य करना पसंद है।"
    },
    {
        "english": "What is your favorite way to spend time?",
        "pronunciation": "व्हाट इज़ योर फेवरेट वे टू स्पेंड टाइम?",
        "translation": "तुम्हें समय बिताने का सबसे पसंदीदा तरीका क्या है?"
    },
    {
        "english": "I enjoy playing chess.",
        "pronunciation": "आय एनजॉय प्लेइंग चेस।",
        "translation": "मुझे शतरंज खेलना पसंद है।"
    },
    {
        "english": "What are you most proud of?",
        "pronunciation": "व्हाट आर यू मोस्ट प्राउड ऑफ?",
        "translation": "तुम किस पर सबसे ज्यादा गर्व करते हो?"
    },
    {
        "english": "I want to make new friends.",
        "pronunciation": "आय वांट टू मेक न्यू फ्रेंड्स।",
        "translation": "मैं नए दोस्त बनाना चाहता हूँ।"
    },
    {
        "english": "What is your favorite restaurant?",
        "pronunciation": "व्हाट इज़ योर फेवरेट रेस्टोरेंट?",
        "translation": "तुम्हारा पसंदीदा रेस्तरां कौन सा है?"
    },
    {
        "english": "I love exploring new places.",
        "pronunciation": "आय लव एक्सप्लोरिंग न्यू प्लेसिस।",
        "translation": "मुझे नए स्थानों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "What do you do for fun?",
        "pronunciation": "व्हाट डू यू डू फॉर फन?",
        "translation": "तुम मजे के लिए क्या करते हो?"
    },
    {
        "english": "I enjoy going to the beach.",
        "pronunciation": "आय एनजॉय गोइंग टू द बीच।",
        "translation": "मुझे समुद्र तट पर जाना पसंद है।"
    },
    {
        "english": "What is your favorite quote?",
        "pronunciation": "व्हाट इज़ योर फेवरेट कोट?",
        "translation": "तुम्हारा पसंदीदा उद्धरण क्या है?"
    },
    {
        "english": "I am looking forward to the weekend.",
        "pronunciation": "आय अम लुकिंग फॉरवर्ड टू द वीकेंड।",
        "translation": "मैं सप्ताहांत का इंतजार कर रहा हूँ।"
    },
    {
        "english": "What is your favorite holiday?",
        "pronunciation": "व्हाट इज़ योर फेवरेट हॉलीडे?",
        "translation": "तुम्हारी पसंदीदा छुट्टी कौन सी है?"
    },
    {
        "english": "I want to volunteer in my community.",
        "pronunciation": "आय वांट टू वॉलंटियर इन माय कम्युनिटी।",
        "translation": "मैं अपने समुदाय में स्वयंसेवा करना चाहता हूँ।"
    },
    {
        "english": "What do you love most about your life?",
        "pronunciation": "व्हाट डू यू लव मोस्ट अबाउट योर लाइफ?",
        "translation": "तुम्हें अपने जीवन के बारे में सबसे ज्यादा क्या पसंद है?"
    },
    {
        "english": "Hello, my name is [Your Name].",
        "pronunciation": "हैलो, माय नाम इज़ [Your Name].",
        "translation": "नमस्ते, मेरा नाम [Your Name] है।"
    },
    {
        "english": "I live in Mumbai.",
        "pronunciation": "आय लिव इन मुंबई।",
        "translation": "मैं मुंबई में रहता हूँ।"
    },
    {
        "english": "I am 30 years old.",
        "pronunciation": "आय अम 30 ईयर्स ओल्ड।",
        "translation": "मैं 30 साल का हूँ।"
    },
    {
        "english": "I work as a teacher.",
        "pronunciation": "आय वर्क ऐज़ अ टीचर।",
        "translation": "मैं एक शिक्षक के रूप में काम करता हूँ।"
    },
    {
        "english": "I enjoy reading books.",
        "pronunciation": "आय एनजॉय रीडिंग बुक्स।",
        "translation": "मुझे किताबें पढ़ना पसंद है।"
    },
    {
        "english": "I have a younger brother.",
        "pronunciation": "आय हैव अ यंगर ब्रदर।",
        "translation": "मेरा एक छोटा भाई है।"
    },
    {
        "english": "I studied biology in college.",
        "pronunciation": "आय स्टडीड बायोलॉजी इन कॉलेज।",
        "translation": "मैंने कॉलेज में जीवविज्ञान की पढ़ाई की।"
    },
    {
        "english": "I like to play cricket.",
        "pronunciation": "आय लाइक टू प्ले क्रिकेट।",
        "translation": "मुझे क्रिकेट खेलना पसंद है।"
    },
    {
        "english": "My favorite color is blue.",
        "pronunciation": "माय फेवरेट कलर इज़ ब्लू।",
        "translation": "मेरा पसंदीदा रंग नीला है।"
    },
    {
        "english": "I am learning English.",
        "pronunciation": "आय एम लर्निंग इंग्लिश।",
        "translation": "मैं अंग्रेज़ी सीख रहा हूँ।"
    },
    {
        "english": "I have a pet dog.",
        "pronunciation": "आय हैव अ पेट डॉग।",
        "translation": "मेरा एक पालतू कुत्ता है।"
    },
    {
        "english": "I enjoy cooking for my family.",
        "pronunciation": "आय एनजॉय कुकिंग फॉर माय फैमिली।",
        "translation": "मुझे अपने परिवार के लिए खाना बनाना पसंद है।"
    },
    {
        "english": "I have been to Delhi twice.",
        "pronunciation": "आय हैव बीन टू दिल्ली ट्वाइस।",
        "translation": "मैं दिल्ली दो बार गया हूँ।"
    },
    {
        "english": "My favorite food is pizza.",
        "pronunciation": "माय फेवरेट फूड इज़ पिज़्ज़ा।",
        "translation": "मुझे पिज़्ज़ा खाना पसंद है।"
    },
    {
        "english": "I like to travel to new places.",
        "pronunciation": "आय लाइक टू ट्रैवल टू न्यू प्लेसेस।",
        "translation": "मुझे नए स्थानों की यात्रा करना पसंद है।"
    },
    {
        "english": "I am a big fan of movies.",
        "pronunciation": "आय अम अ बिग फैन ऑफ मूवीज़।",
        "translation": "मैं फिल्मों का बड़ा प्रशंसक हूँ।"
    },
    {
        "english": "I enjoy spending time with friends.",
        "pronunciation": "आय एनजॉय स्पेंडिंग टाइम विद फ्रेंड्स।",
        "translation": "मुझे दोस्तों के साथ समय बिताना पसंद है।"
    },
    {
        "english": "I like to listen to music.",
        "pronunciation": "आय लाइक टू लिसन टू म्यूजिक।",
        "translation": "मुझे संगीत सुनना पसंद है।"
    },
    {
        "english": "I am passionate about photography.",
        "pronunciation": "आय एम पैशनेट अबाउट फ़ोटोग्राफ़ी।",
        "translation": "मुझे फोटोग्राफी का बहुत शौक है।"
    },
    {
        "english": "I love spending time outdoors.",
        "pronunciation": "आय लव स्पेंडिंग टाइम आउडडॉर्स।",
        "translation": "मुझे बाहर समय बिताना पसंद है।"
    },
    {
        "english": "I am a vegetarian.",
        "pronunciation": "आय एम अ वेजिटेरियन।",
        "translation": "मैं शाकाहारी हूँ।"
    },
    {
        "english": "I have lived in Mumbai all my life.",
        "pronunciation": "आय हैव लिव्ड इन मुंबई ऑल माय लाइफ।",
        "translation": "मैं अपनी पूरी जिंदगी मुंबई में रहा हूँ।"
    },
    {
        "english": "I am interested in learning new skills.",
        "pronunciation": "आय एम इंटरेस्टेड इन लर्निंग न्यू स्किल्स।",
        "translation": "मुझे नई क्षमताएँ सीखने में रुचि है।"
    },
    {
        "english": "My favorite season is winter.",
        "pronunciation": "माय फेवरेट सीज़न इज़ विंटर।",
        "translation": "मुझे सर्दी का मौसम पसंद है।"
    },
    {
        "english": "I enjoy visiting museums.",
        "pronunciation": "आय एनजॉय विज़िटिंग म्यूज़ियम्स।",
        "translation": "मुझे संग्रहालयों में जाना पसंद है।"
    },
    {
        "english": "I am a morning person.",
        "pronunciation": "आय एम अ मॉर्निंग पर्सन।",
        "translation": "मैं सुबह का व्यक्ति हूँ।"
    },
    {
        "english": "I love watching sunsets.",
        "pronunciation": "आय लव वॉचिंग संसेट्स।",
        "translation": "मुझे सूर्यास्त देखना पसंद है।"
    },
    {
        "english": "I am studying computer science.",
        "pronunciation": "आय एम स्टडिंग कंप्यूटर साइंस।",
        "translation": "मैं कंप्यूटर विज्ञान की पढ़ाई कर रहा हूँ।"
    },
    {
        "english": "I have traveled to many countries.",
        "pronunciation": "आय हैव ट्रैवल्ड टू मेनी कंट्रीज़।",
        "translation": "मैं कई देशों की यात्रा कर चुका हूँ।"
    },
    {
        "english": "I enjoy going for walks in the park.",
        "pronunciation": "आय एनजॉय गोइंग फॉर वॉक्स इन द पार्क।",
        "translation": "मुझे पार्क में टहलना पसंद है।"
    },
    {
        "english": "I like to watch documentaries about nature.",
        "pronunciation": "आय लाइक टू वॉच डॉक्यूमेंट्रीज़ अबाउट नेचर।",
        "translation": "मुझे प्रकृति के बारे में डॉक्यूमेंट्रीज़ देखना पसंद है।"
    },
    {
        "english": "I have a strong interest in technology.",
        "pronunciation": "आय हैव अ स्ट्रॉन्ग इंटरेस्ट इन टेक्नोलॉजी।",
        "translation": "मुझे प्रौद्योगिकी में गहरी रुचि है।"
    },
    {
        "english": "I like to volunteer for community services.",
        "pronunciation": "आय लाइक टू वॉलंटियर फॉर कम्युनिटी सर्विसेज।",
        "translation": "मुझे सामुदायिक सेवाओं के लिए स्वयंसेवा करना पसंद है।"
    },
    {
        "english": "I want to start my own business.",
        "pronunciation": "आय वांट टू स्टार्ट माय ओन बिजनेस।",
        "translation": "मैं अपना खुद का व्यवसाय शुरू करना चाहता हूँ।"
    },
    {
        "english": "I enjoy learning about history.",
        "pronunciation": "आय एनजॉय लर्निंग अबाउट हिस्ट्री।",
        "translation": "मुझे इतिहास के बारे में जानना पसंद है।"
    },
    {
        "english": "I like to participate in sports.",
        "pronunciation": "आय लाइक टू पार्टिसिपेट इन स्पोर्ट्स।",
        "translation": "मुझे खेलों में भाग लेना पसंद है।"
    },
    {
        "english": "I have a talent for drawing.",
        "pronunciation": "आय हैव अ टैलेंट फॉर ड्रॉइंग।",
        "translation": "मुझे चित्र बनाने का शौक है।"
    },
    {
        "english": "I love sharing stories with friends.",
        "pronunciation": "आय लव शेयेरिंग स्टोरीज़ विद फ्रेंड्स।",
        "translation": "मुझे दोस्तों के साथ कहानियाँ साझा करना पसंद है।"
    },
    {
        "english": "I am a creative person.",
        "pronunciation": "आय एम अ क्रिएटिव पर्सन।",
        "translation": "मैं एक रचनात्मक व्यक्ति हूँ।"
    },
    {
        "english": "I have an interest in fashion.",
        "pronunciation": "आय हैव अन इंटरेस्ट इन फैशन।",
        "translation": "मुझे फैशन में रुचि है।"
    },
    {
        "english": "I like to write poetry.",
        "pronunciation": "आय लाइक टू राइट पोएट्री।",
        "translation": "मुझे कविता लिखना पसंद है।"
    },
    {
        "english": "I have been learning English for six months.",
        "pronunciation": "आय हैव बीन लर्निंग इंग्लिश फॉर सिक्स मंथ्स।",
        "translation": "मैं छह महीने से अंग्रेज़ी सीख रहा हूँ।"
    },
    {
        "english": "I enjoy going to concerts.",
        "pronunciation": "आय एनजॉय गोइंग टू कॉन्सर्ट्स।",
        "translation": "मुझे कॉन्सर्ट में जाना पसंद है।"
    },
    {
        "english": "I have a good sense of humor.",
        "pronunciation": "आय हैव अ गुड सेंस ऑफ ह्यूमर।",
        "translation": "मुझे अच्छा हास्य बोध है।"
    },
    {
        "english": "I love exploring different cultures.",
        "pronunciation": "आय लव एक्सप्लोरिंग डिफरेंट कल्चर्स।",
        "translation": "मुझे विभिन्न संस्कृतियों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I am learning to play the guitar.",
        "pronunciation": "आय एम लर्निंग टू प्ले द गिटार।",
        "translation": "मैं गिटार बजाना सीख रहा हूँ।"
    },
    {
        "english": "I enjoy watching sports on television.",
        "pronunciation": "आय एनजॉय वॉचिंग स्पोर्ट्स ऑन टेलीविज़न।",
        "translation": "मुझे टेलीविज़न पर खेल देखना पसंद है।"
    },
    {
        "english": "I like to collect stamps.",
        "pronunciation": "आय लाइक टू कलेक्ट स्टैम्प्स।",
        "translation": "मुझे टिकट इकट्ठा करना पसंद है।"
    },
    {
        "english": "I want to learn how to swim.",
        "pronunciation": "आय वांट टू लर्न हाउ टू स्विम।",
        "translation": "मैं तैरना सीखना चाहता हूँ।"
    },
    {
        "english": "I enjoy gardening in my free time.",
        "pronunciation": "आय एनजॉय गार्डनिंग इन माय फ्री टाइम।",
        "translation": "मुझे अपने फुर्सत के समय में बागवानी करना पसंद है।"
    },
    {
        "english": "I love to explore new technologies.",
        "pronunciation": "आय लव टू एक्सप्लोर न्यू टेक्नोलॉजीज़।",
        "translation": "मुझे नई प्रौद्योगिकियों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I have a strong desire to learn more.",
        "pronunciation": "आय हैव अ स्ट्रॉन्ग डिज़ायर टू लर्न मोर।",
        "translation": "मुझे और सीखने की गहरी इच्छा है।"
    },
    {
        "english": "I like to spend time with family.",
        "pronunciation": "आय लाइक टू स्पेंड टाइम विद फैमिली।",
        "translation": "मुझे परिवार के साथ समय बिताना पसंद है।"
    },
    {
        "english": "I want to improve my English skills.",
        "pronunciation": "आय वांट टू इम्प्रूव माय इंग्लिश स्किल्स।",
        "translation": "मैं अपनी अंग्रेज़ी कौशल को सुधारना चाहता हूँ।"
    },
    {
        "english": "I love learning about different cuisines.",
        "pronunciation": "आय लव लर्निंग अबाउट डिफरेंट क्यूज़ीन्स।",
        "translation": "मुझे विभिन्न व्यंजनों के बारे में जानना पसंद है।"
    },
    {
        "english": "I have a dream of traveling the world.",
        "pronunciation": "आय हैव अ ड्रीम ऑफ ट्रैवलिंग द वर्ल्ड।",
        "translation": "मेरे पास दुनिया की यात्रा करने का सपना है।"
    },
    {
        "english": "I like to watch the sunrise.",
        "pronunciation": "आय लाइक टू वॉच द सनराइज।",
        "translation": "मुझे सूर्योदय देखना पसंद है।"
    },
    {
        "english": "I enjoy playing video games.",
        "pronunciation": "आय एनजॉय प्लेइंग वीडियो गेम्स।",
        "translation": "मुझे वीडियो गेम खेलना पसंद है।"
    },
    {
        "english": "I am very curious about the universe.",
        "pronunciation": "आय अम वेरी क्यूरियस अबाउट द यूनिवर्स।",
        "translation": "मुझे ब्रह्मांड के बारे में बहुत जिज्ञासा है।"
    },
    {
        "english": "I like to experiment with new recipes.",
        "pronunciation": "आय लाइक टू एक्सपेरिमेंट विद न्यू रेसिपीज़।",
        "translation": "मुझे नई रेसिपी के साथ प्रयोग करना पसंद है।"
    },
    {
        "english": "I enjoy writing in my journal.",
        "pronunciation": "आय एनजॉय राइटिंग इन माय जर्नल।",
        "translation": "मुझे अपने जर्नल में लिखना पसंद है।"
    },
    {
        "english": "I love nature and the outdoors.",
        "pronunciation": "आय लव नेचर एंड द आउडडॉर्स।",
        "translation": "मुझे प्रकृति और बाहर का शौक है।"
    },
    {
        "english": "I like to help others whenever I can.",
        "pronunciation": "आय लाइक टू हेल्प अदर्स व्हेनेवर आई कैन।",
        "translation": "मैं जब भी संभव हो, दूसरों की मदद करना पसंद करता हूँ।"
    },
    {
        "english": "I have a collection of coins from different countries.",
        "pronunciation": "आय हैव अ कलेक्शन ऑफ कॉइन्स फ्रॉम डिफरेंट कंट्रीज़।",
        "translation": "मेरे पास विभिन्न देशों के सिक्कों का संग्रह है।"
    },
    {
        "english": "I enjoy attending workshops and seminars.",
        "pronunciation": "आय एनजॉय अटेंडिंग वर्कशॉप्स एंड सेमिनार्स।",
        "translation": "मुझे कार्यशालाओं और सेमिनारों में भाग लेना पसंद है।"
    },
    {
        "english": "I love spending weekends with my family.",
        "pronunciation": "आय लव स्पेंडिंग वीकेंड्स विद माय फैमिली।",
        "translation": "मुझे सप्ताहांत अपने परिवार के साथ बिताना पसंद है।"
    },
    {
        "english": "I am a believer in lifelong learning.",
        "pronunciation": "आय एम अ बिलीवर इन लाइफलॉन्ग लर्निंग।",
        "translation": "मैं आजीवन सीखने में विश्वास करता हूँ।"
    },
    {
        "english": "I like to write stories and fiction.",
        "pronunciation": "आय लाइक टू राइट स्टोरीज़ एंड फिक्शन।",
        "translation": "मुझे कहानियाँ और कल्पना लिखना पसंद है।"
    },
    {
        "english": "I have a passion for learning languages.",
        "pronunciation": "आय हैव अ पैशन फॉर लर्निंग लैंग्वेजेज।",
        "translation": "मुझे भाषाएँ सीखने का बहुत शौक है।"
    },
    {
        "english": "I want to make a difference in the world.",
        "pronunciation": "आय वांट टू मेक अ डिफरेंस इन द वर्ल्ड।",
        "translation": "मैं दुनिया में बदलाव लाना चाहता हूँ।"
    },
    {
        "english": "I enjoy taking photographs of nature.",
        "pronunciation": "आय एनजॉय टेकिंग फोटोग्राफ़्स ऑफ नेचर।",
        "translation": "मुझे प्रकृति की तस्वीरें लेना पसंद है।"
    },
    {
        "english": "I like to attend cultural events.",
        "pronunciation": "आय लाइक टू अटेंड कल्चरल इवेंट्स।",
        "translation": "मुझे सांस्कृतिक कार्यक्रमों में भाग लेना पसंद है।"
    },
    {
        "english": "I have a goal to read 50 books this year.",
        "pronunciation": "आय हैव अ गोल टू रीड 50 बुक्स थिस इयर।",
        "translation": "मेरी इस साल 50 किताबें पढ़ने का लक्ष्य है।"
    },
    {
        "english": "I enjoy playing board games with friends.",
        "pronunciation": "आय एनजॉय प्लेइंग बोर्ड गेम्स विद फ्रेंड्स।",
        "translation": "मुझे दोस्तों के साथ बोर्ड गेम खेलना पसंद है।"
    },
    {
        "english": "The sun rises in the east.",
        "pronunciation": "द सन राइजेज़ इन द ईस्ट।",
        "translation": "सूरज पूर्व में उगता है।"
    },
    {
        "english": "Water is essential for life.",
        "pronunciation": "वॉटर इज़ एसेंशियल फॉर लाइफ।",
        "translation": "पानी जीवन के लिए आवश्यक है।"
    },
    {
        "english": "The earth orbits the sun.",
        "pronunciation": "द अर्थ ऑर्बिट्स द सन।",
        "translation": "पृथ्वी सूर्य की परिक्रमा करती है।"
    },
    {
        "english": "I like to ride my bicycle.",
        "pronunciation": "आय लाइक टू राइड माय बाइसिकल।",
        "translation": "मुझे अपनी साइकिल चलाना पसंद है।"
    },
    {
        "english": "Birds can fly in the sky.",
        "pronunciation": "बर्ड्स कैन फ्लाई इन द स्काई।",
        "translation": "पक्षी आकाश में उड़ सकते हैं।"
    },
    {
        "english": "The stars shine brightly at night.",
        "pronunciation": "द स्टार्स शाइन ब्राइटली एट नाइट।",
        "translation": "तारे रात में चमकते हैं।"
    },
    {
        "english": "I enjoy playing chess.",
        "pronunciation": "आय एनजॉय प्लेइंग चेस।",
        "translation": "मुझे शतरंज खेलना पसंद है।"
    },
    {
        "english": "She likes to paint landscapes.",
        "pronunciation": "शी लाइक्स टू पेंट लैंडस्केप्स।",
        "translation": "उसे लैंडस्केप पेंट करना पसंद है।"
    },
    {
        "english": "We should protect our environment.",
        "pronunciation": "वी शुड प्रोटेक्ट आवर एन्वायरनमेंट।",
        "translation": "हमें अपने पर्यावरण की रक्षा करनी चाहिए।"
    },
    {
        "english": "I love to eat fresh fruits.",
        "pronunciation": "आय लव टू ईट फ्रेश फ्रूट्स।",
        "translation": "मुझे ताजे फल खाना पसंद है।"
    },
    {
        "english": "The flowers bloom in spring.",
        "pronunciation": "द फ्लॉवर्स ब्लूम इन स्प्रिंग।",
        "translation": "फूल बसंत में खिलते हैं।"
    },
    {
        "english": "I enjoy watching documentaries.",
        "pronunciation": "आय एनजॉय वॉचिंग डॉक्यूमेंट्रीज़।",
        "translation": "मुझे डॉक्यूमेंट्रीज़ देखना पसंद है।"
    },
    {
        "english": "Exercise is good for health.",
        "pronunciation": "एक्सरसाइज इज़ गुड फॉर हेल्थ।",
        "translation": "व्यायाम स्वास्थ्य के लिए अच्छा है।"
    },
    {
        "english": "My birthday is in July.",
        "pronunciation": "माय बर्थडे इज़ इन जुलाई।",
        "translation": "मेरा जन्मदिन जुलाई में है।"
    },
    {
        "english": "I need to buy some groceries.",
        "pronunciation": "आय नीड टू बाय सम ग्रॉसरीज़।",
        "translation": "मुझे कुछ किराने का सामान खरीदना है।"
    },
    {
        "english": "The library is a quiet place.",
        "pronunciation": "द लाइब्रेरी इज़ अ क्वाइट प्लेस।",
        "translation": "पुस्तकालय एक शांत जगह है।"
    },
    {
        "english": "I enjoy listening to podcasts.",
        "pronunciation": "आय एनजॉय लिसनिंग टू पॉडकास्ट्स।",
        "translation": "मुझे पॉडकास्ट सुनना पसंद है।"
    },
    {
        "english": "I like to take photographs.",
        "pronunciation": "आय लाइक टू टेक फोटोग्राफ़्स।",
        "translation": "मुझे तस्वीरें लेना पसंद है।"
    },
    {
        "english": "The cake is delicious.",
        "pronunciation": "द केक इज़ डेलिशियस।",
        "translation": "केक बहुत स्वादिष्ट है।"
    },
    {
        "english": "I want to learn how to cook.",
        "pronunciation": "आय वांट टू लर्न हाउ टू कुक।",
        "translation": "मैं खाना बनाना सीखना चाहता हूँ।"
    },
    {
        "english": "Reading is a great way to relax.",
        "pronunciation": "रीडिंग इज़ अ ग्रेट वे टू रिलैक्स।",
        "translation": "पढ़ाई करना आराम करने का एक शानदार तरीका है।"
    },
    {
        "english": "The ocean is very vast.",
        "pronunciation": "द ओशियन इज़ वेरी वास्ट।",
        "translation": "महासागर बहुत विशाल है।"
    },
    {
        "english": "I love spending time at the beach.",
        "pronunciation": "आय लव स्पेंडिंग टाइम ऐट द बीच।",
        "translation": "मुझे समुद्र तट पर समय बिताना पसंद है।"
    },
    {
        "english": "I enjoy playing the piano.",
        "pronunciation": "आय एनजॉय प्लेइंग द पियानो।",
        "translation": "मुझे पियानो बजाना पसंद है।"
    },
    {
        "english": "The rain is refreshing.",
        "pronunciation": "द रेन इज़ रिफ्रेशिंग।",
        "translation": "बारिश ताज़गी भरी होती है।"
    },
    {
        "english": "I like to explore new ideas.",
        "pronunciation": "आय लाइक टू एक्सप्लोर न्यू आइडियाज़।",
        "translation": "मुझे नए विचारों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I am learning about different cultures.",
        "pronunciation": "आय एम लर्निंग अबाउट डिफरेंट कल्चर्स।",
        "translation": "मैं विभिन्न संस्कृतियों के बारे में सीख रहा हूँ।"
    },
    {
        "english": "I enjoy writing in my diary.",
        "pronunciation": "आय एनजॉय राइटिंग इन माय डायरी।",
        "translation": "मुझे अपनी डायरी में लिखना पसंद है।"
    },
    {
        "english": "The mountains are beautiful.",
        "pronunciation": "द माउंटेन्स आर ब्यूटीफुल।",
        "translation": "पहाड़ बहुत सुंदर हैं।"
    },
    {
        "english": "I like to meditate in the morning.",
        "pronunciation": "आय लाइक टू मेडिटेट इन द मॉर्निंग।",
        "translation": "मुझे सुबह ध्यान करना पसंद है।"
    },
    {
        "english": "I love visiting historical sites.",
        "pronunciation": "आय लव विज़िटिंग हिस्टोरिकल साइट्स।",
        "translation": "मुझे ऐतिहासिक स्थलों पर जाना पसंद है।"
    },
    {
        "english": "I enjoy watching wildlife documentaries.",
        "pronunciation": "आय एनजॉय वॉचिंग वाइल्डलाइफ डॉक्यूमेंट्रीज़।",
        "translation": "मुझे वन्यजीव डॉक्यूमेंट्रीज़ देखना पसंद है।"
    },
    {
        "english": "I want to travel around the world.",
        "pronunciation": "आय वांट टू ट्रैवल अराउंड द वर्ल्ड।",
        "translation": "मैं दुनिया की यात्रा करना चाहता हूँ।"
    },
    {
        "english": "The weather is nice today.",
        "pronunciation": "द वेदर इज़ नाइस टुडे।",
        "translation": "आज का मौसम अच्छा है।"
    },
    {
        "english": "I love going for hikes.",
        "pronunciation": "आय लव गोइंग फॉर हाइक्‍स।",
        "translation": "मुझे ट्रैकिंग पर जाना पसंद है।"
    },
    {
        "english": "I like to sing in the shower.",
        "pronunciation": "आय लाइक टू सिंग इन द शॉवर।",
        "translation": "मुझे शॉवर में गाना पसंद है।"
    },
    {
        "english": "I am interested in science.",
        "pronunciation": "आय एम इंटरेस्टेड इन साइंस।",
        "translation": "मुझे विज्ञान में रुचि है।"
    },
    {
        "english": "I enjoy cooking with spices.",
        "pronunciation": "आय एनजॉय कुकिंग विद स्पाइसेस।",
        "translation": "मुझे मसालों के साथ खाना बनाना पसंद है।"
    },
    {
        "english": "I want to learn about photography.",
        "pronunciation": "आय वांट टू लर्न अबाउट फ़ोटोग्राफी।",
        "translation": "मैं फोटोग्राफी के बारे में सीखना चाहता हूँ।"
    },
    {
        "english": "I like to watch movies on weekends.",
        "pronunciation": "आय लाइक टू वॉच मूवीज़ ऑन वीकेंड्स।",
        "translation": "मुझे सप्ताहांत पर फिल्में देखना पसंद है।"
    },
    {
        "english": "I enjoy going for long walks.",
        "pronunciation": "आय एनजॉय गोइंग फॉर लॉन्ग वॉक्स।",
        "translation": "मुझे लंबी सैर पर जाना पसंद है।"
    },
    {
        "english": "I have a pet dog.",
        "pronunciation": "आय हैव अ पेट डॉग।",
        "translation": "मेरे पास एक पालतू कुत्ता है।"
    },
    {
        "english": "I like to play basketball.",
        "pronunciation": "आय लाइक टू प्ले बास्केटबॉल।",
        "translation": "मुझे बास्केटबॉल खेलना पसंद है।"
    },
    {
        "english": "I enjoy visiting museums.",
        "pronunciation": "आय एनजॉय विज़िटिंग म्यूज़ियम्स।",
        "translation": "मुझे संग्रहालयों में जाना पसंद है।"
    },
    {
        "english": "I love to dance at parties.",
        "pronunciation": "आय लव टू डांस ऐट पार्टीज़।",
        "translation": "मुझे पार्टियों में नाचना पसंद है।"
    },
    {
        "english": "I like to read novels.",
        "pronunciation": "आय लाइक टू रीड नॉवेल्स।",
        "translation": "मुझे उपन्यास पढ़ना पसंद है।"
    },
    {
        "english": "I enjoy spending time with friends.",
        "pronunciation": "आय एनजॉय स्पेंडिंग टाइम विद फ्रेंड्स।",
        "translation": "मुझे दोस्तों के साथ समय बिताना पसंद है।"
    },
    {
        "english": "I want to learn to play the guitar.",
        "pronunciation": "आय वांट टू लर्न टू प्ले द गिटार।",
        "translation": "मैं गिटार बजाना सीखना चाहता हूँ।"
    },
    {
        "english": "I like to bake cookies.",
        "pronunciation": "आय लाइक टू बेक कूकीज़।",
        "translation": "मुझे कुकीज़ बनाना पसंद है।"
    },
    {
        "english": "I love the smell of fresh coffee.",
        "pronunciation": "आय लव द स्मेल ऑफ फ्रेश कॉफी।",
        "translation": "मुझे ताज़ी कॉफी की खुशबू पसंद है।"
    },
    {
        "english": "I enjoy reading poetry.",
        "pronunciation": "आय एनजॉय रीडिंग पोएट्री।",
        "translation": "मुझे कविता पढ़ना पसंद है।"
    },
    {
        "english": "I want to study environmental science.",
        "pronunciation": "आय वांट टू स्टडी एन्वायरनमेंटल साइंस।",
        "translation": "मैं पर्यावरण विज्ञान का अध्ययन करना चाहता हूँ।"
    },
    {
        "english": "I like to drink herbal tea.",
        "pronunciation": "आय लाइक टू ड्रिंक हर्बल टी।",
        "translation": "मुझे हर्बल चाय पीना पसंद है।"
    },
    {
        "english": "I enjoy visiting the countryside.",
        "pronunciation": "आय एनजॉय विज़िटिंग द कंट्रीसाइड।",
        "translation": "मुझे ग्रामीण इलाकों में जाना पसंद है।"
    },
    {
        "english": "I love collecting books.",
        "pronunciation": "आय लव कलेक्टिंग बुक्स।",
        "translation": "मुझे किताबें इकट्ठा करना पसंद है।"
    },
    {
        "english": "I like to try new foods.",
        "pronunciation": "आय लाइक टू ट्राई न्यू फूड्स।",
        "translation": "मुझे नए खाद्य पदार्थ आज़माना पसंद है।"
    },
    {
        "english": "I enjoy exploring local markets.",
        "pronunciation": "आय एनजॉय एक्सप्लोरिंग लोकल मार्केट्स।",
        "translation": "मुझे स्थानीय बाजारों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I want to volunteer for a charity.",
        "pronunciation": "आय वांट टू वॉलंटियर फॉर अ चैरिटी।",
        "translation": "मैं एक चैरिटी के लिए स्वयंसेवक बनना चाहता हूँ।"
    },
    {
        "english": "I like to plan my week in advance.",
        "pronunciation": "आय लाइक टू प्लान माय वीक इन एडवांस।",
        "translation": "मुझे अपनी सप्ताह की योजना पहले से बनाना पसंद है।"
    },
    {
        "english": "I enjoy playing outdoor games.",
        "pronunciation": "आय एनजॉय प्लेइंग आउडडॉर गेम्स।",
        "translation": "मुझे बाहरी खेल खेलना पसंद है।"
    },
    {
        "english": "I love cooking traditional Indian dishes.",
        "pronunciation": "आय लव कुकिंग ट्रेडिशनल इंडियन डिशेज़।",
        "translation": "मुझे पारंपरिक भारतीय व्यंजन बनाना पसंद है।"
    },
    {
        "english": "Mumbai has beautiful beaches.",
        "pronunciation": "मुंबई हैज़ ब्यूटीफुल बीचेज़।",
        "translation": "मुंबई में खूबसूरत समुद्र तट हैं।"
    },
    {
        "english": "I enjoy making biryani on special occasions.",
        "pronunciation": "आय एनजॉय मेकिंग बिरयानी ऑन स्पेशल ओकेज़न्स।",
        "translation": "मुझे खास अवसरों पर बिरयानी बनाना पसंद है।"
    },
    {
        "english": "I love the vibrant markets of Mumbai.",
        "pronunciation": "आय लव द वाइब्रंट मार्केट्स ऑफ मुंबई।",
        "translation": "मुझे मुंबई के जीवंत बाजार पसंद हैं।"
    },
    {
        "english": "I often visit the local vegetable market.",
        "pronunciation": "आय ऑफ़्टन विज़िट द लोकल वेजिटेबल मार्केट।",
        "translation": "मैं अक्सर स्थानीय सब्ज़ी बाजार जाती हूँ।"
    },
    {
        "english": "I enjoy making sweets during festivals.",
        "pronunciation": "आय एनजॉय मेकिंग स्वीट्स ड्यूरिंग फेस्टिवल्स।",
        "translation": "मुझे त्योहारों के दौरान मिठाई बनाना पसंद है।"
    },
    {
        "english": "I love hosting dinner parties for my friends.",
        "pronunciation": "आय लव होस्टिंग डिनर पार्टीज़ फॉर माय फ्रेंड्स।",
        "translation": "मुझे अपने दोस्तों के लिए डिनर पार्टीज़ आयोजित करना पसंद है।"
    },
    {
        "english": "The streets of Mumbai are always bustling.",
        "pronunciation": "द स्ट्रीट्स ऑफ मुंबई आर ऑलवेज़ बस्टलिंग।",
        "translation": "मुंबई की सड़कें हमेशा व्यस्त रहती हैं।"
    },
    {
        "english": "I enjoy visiting local temples.",
        "pronunciation": "आय एनजॉय विज़िटिंग लोकल टेम्पल्स।",
        "translation": "मुझे स्थानीय मंदिरों में जाना पसंद है।"
    },
    {
        "english": "I love experimenting with new recipes.",
        "pronunciation": "आय लव एक्सपेरिमेंटिंग विद न्यू रेसिपीज़।",
        "translation": "मुझे नए व्यंजनों के साथ प्रयोग करना पसंद है।"
    },
    {
        "english": "I often cook for my family on weekends.",
        "pronunciation": "आय ऑफ़्टन कुक फॉर माय फैमिली ऑन वीकेंड्स।",
        "translation": "मैं अक्सर सप्ताहांत पर अपने परिवार के लिए खाना बनाती हूँ।"
    },
    {
        "english": "I enjoy learning new cooking techniques.",
        "pronunciation": "आय एनजॉय लर्निंग न्यू कुकिंग टेक्नीक्‍स।",
        "translation": "मुझे नए खाना बनाने की तकनीकें सीखना पसंद है।"
    },
    {
        "english": "Mumbai's street food is delicious.",
        "pronunciation": "मुंबईज़ स्ट्रीट फूड इज़ डेलिशियस।",
        "translation": "मुंबई का स्ट्रीट फूड बहुत स्वादिष्ट है।"
    },
    {
        "english": "I love visiting the Gateway of India.",
        "pronunciation": "आय लव विज़िटिंग द गेटवे ऑफ इंडिया।",
        "translation": "मुझे भारत के गेटवे पर जाना पसंद है।"
    },
    {
        "english": "I enjoy watching Bollywood movies.",
        "pronunciation": "आय एनजॉय वॉचिंग बॉलीवुड मूवीज़।",
        "translation": "मुझे बॉलीवुड फिल्में देखना पसंद है।"
    },
    {
        "english": "I like to go for evening walks in the park.",
        "pronunciation": "आय लाइक टू गो फॉर ईविनिंग वॉक्स इन द पार्क।",
        "translation": "मुझे पार्क में शाम की सैर पर जाना पसंद है।"
    },
    {
        "english": "I often meet my friends for chai.",
        "pronunciation": "आय ऑफ़्टन मीट माय फ्रेंड्स फॉर चाय।",
        "translation": "मैं अक्सर अपने दोस्तों से चाय के लिए मिलती हूँ।"
    },
    {
        "english": "I enjoy exploring new cafes in my area.",
        "pronunciation": "आय एनजॉय एक्सप्लोरिंग न्यू कैफे इन माय एरिया।",
        "translation": "मुझे अपने क्षेत्र में नए कैफे का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I love dressing up for festivals.",
        "pronunciation": "आय लव ड्रेसिंग अप फॉर फेस्टिवल्स।",
        "translation": "मुझे त्योहारों के लिए अच्छे कपड़े पहनना पसंद है।"
    },
    {
        "english": "The people of Mumbai are very friendly.",
        "pronunciation": "द पीपल ऑफ मुंबई आर वेरी फ्रेंडली।",
        "translation": "मुंबई के लोग बहुत दोस्ताना हैं।"
    },
    {
        "english": "I enjoy listening to music while cooking.",
        "pronunciation": "आय एनजॉय लिसनिंग टू म्यूज़िक व्हाइल कुकिंग।",
        "translation": "मुझे खाना बनाते समय संगीत सुनना पसंद है।"
    },
    {
        "english": "I often participate in cooking competitions.",
        "pronunciation": "आय ऑफ़्टन पार्टिसिपेट इन कुकिंग कंपटीशंस।",
        "translation": "मैं अक्सर खाना बनाने की प्रतियोगिताओं में भाग लेती हूँ।"
    },
    {
        "english": "I love going to the local book fair.",
        "pronunciation": "आय लव गोइंग टू द लोकल बुक फेयर।",
        "translation": "मुझे स्थानीय पुस्तक मेले में जाना पसंद है।"
    },
    {
        "english": "I enjoy making pickles at home.",
        "pronunciation": "आय एनजॉय मेकिंग पिकल्स एट होम।",
        "translation": "मुझे घर पर अचार बनाना पसंद है।"
    },
    {
        "english": "The festivals in India are colorful.",
        "pronunciation": "द फेस्टिवल्स इन इंडिया आर कलरफुल।",
        "translation": "भारत में त्योहार बहुत रंगीन होते हैं।"
    },
    {
        "english": "I love visiting historical forts.",
        "pronunciation": "आय लव विज़िटिंग हिस्टोरिकल फोर्ट्स।",
        "translation": "मुझे ऐतिहासिक किलों में जाना पसंद है।"
    },
    {
        "english": "I enjoy going to family gatherings.",
        "pronunciation": "आय एनजॉय गोइंग टू फैमिली गैदरिंग्स।",
        "translation": "मुझे परिवारिक समारोहों में जाना पसंद है।"
    },
    {
        "english": "I like to teach my kids how to cook.",
        "pronunciation": "आय लाइक टू टीच माय किड्स हाउ टू कुक।",
        "translation": "मुझे अपने बच्चों को खाना बनाना सिखाना पसंद है।"
    },
    {
        "english": "I enjoy gardening in my free time.",
        "pronunciation": "आय एनजॉय गार्डनिंग इन माय फ्री टाइम।",
        "translation": "मुझे अपने फुर्सत के समय में बागवानी करना पसंद है।"
    },
    {
        "english": "I love to celebrate Diwali with my family.",
        "pronunciation": "आय लव टू सेलिब्रेट दिवाली विद माय फैमिली।",
        "translation": "मुझे अपने परिवार के साथ दिवाली मनाना पसंद है।"
    },
    {
        "english": "I often travel to nearby hill stations.",
        "pronunciation": "आय ऑफ़्टन ट्रैवल टू निअरबाई हिल स्टेशन।",
        "translation": "मैं अक्सर नज़दीकी पहाड़ी स्टेशनों की यात्रा करती हूँ।"
    },
    {
        "english": "I enjoy helping my neighbors.",
        "pronunciation": "आय एनजॉय हेल्पिंग माय नेबरज़।",
        "translation": "मुझे अपने पड़ोसियों की मदद करना पसंद है।"
    },
    {
        "english": "I love to shop for traditional clothing.",
        "pronunciation": "आय लव टू शॉप फॉर ट्रेडिशनल क्लोदिंग।",
        "translation": "मुझे पारंपरिक कपड़े खरीदना पसंद है।"
    },
    {
        "english": "I enjoy learning about Ayurvedic remedies.",
        "pronunciation": "आय एनजॉय लर्निंग अबाउट आयुर्वेदिक रेमेडीज़।",
        "translation": "मुझे आयुर्वेदिक उपचारों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I love going on family picnics.",
        "pronunciation": "आय लव गोइंग ऑन फैमिली पिकनिक्‍स।",
        "translation": "मुझे परिवार के पिकनिक पर जाना पसंद है।"
    },
    {
        "english": "I enjoy spending time at the beach.",
        "pronunciation": "आय एनजॉय स्पेंडिंग टाइम एट द बीच।",
        "translation": "मुझे समुद्र तट पर समय बिताना पसंद है।"
    },
    {
        "english": "I like to create art with my children.",
        "pronunciation": "आय लाइक टू क्रिएट आर्ट विद माय चिल्ड्रन।",
        "translation": "मुझे अपने बच्चों के साथ कला बनाना पसंद है।"
    },
    {
        "english": "I love to visit historical museums.",
        "pronunciation": "आय लव टू विज़िट हिस्टोरिकल म्यूज़ियम्स।",
        "translation": "मुझे ऐतिहासिक संग्रहालयों में जाना पसंद है।"
    },
    {
        "english": "I enjoy attending cultural festivals.",
        "pronunciation": "आय एनजॉय अटेंडिंग कल्चरल फेस्टिवल्स।",
        "translation": "मुझे सांस्कृतिक त्योहारों में शामिल होना पसंद है।"
    },
    {
        "english": "I like to listen to classical music.",
        "pronunciation": "आय लाइक टू लिसन टू क्लासिकल म्यूज़िक।",
        "translation": "मुझे शास्त्रीय संगीत सुनना पसंद है।"
    },
    {
        "english": "I love sharing recipes with friends.",
        "pronunciation": "आय लव शेयरिंग रेसिपीज़ विद फ्रेंड्स।",
        "translation": "मुझे दोस्तों के साथ व्यंजन साझा करना पसंद है।"
    },
    {
        "english": "I enjoy exploring different cuisines.",
        "pronunciation": "आय एनजॉय एक्सप्लोरिंग डिफरेंट कुज़ीन्स।",
        "translation": "मुझे विभिन्न व्यंजनों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I like to practice yoga every morning.",
        "pronunciation": "आय लाइक टू प्रैक्टिस योगा एवरी मॉर्निंग।",
        "translation": "मुझे हर सुबह योगा करना पसंद है।"
    },
    {
        "english": "I enjoy attending workshops on cooking.",
        "pronunciation": "आय एनजॉय अटेंडिंग वर्कशॉप्स ऑन कुकिंग।",
        "translation": "मुझे खाना बनाने की कार्यशालाओं में शामिल होना पसंद है।"
    },
    {
        "english": "I love to take photographs of nature.",
        "pronunciation": "आय लव टू टेक फ़ोटोग्राफ़्स ऑफ़ नेचर।",
        "translation": "मुझे प्रकृति की तस्वीरें लेना पसंद है।"
    },
    {
        "english": "I enjoy spending weekends with my family.",
        "pronunciation": "आय एनजॉय स्पेंडिंग वीकेंड्स विद माय फैमिली।",
        "translation": "मुझे सप्ताहांत अपने परिवार के साथ बिताना पसंद है।"
    },
    {
        "english": "I like to decorate my home for festivals.",
        "pronunciation": "आय लाइक टू डेकोरेट माय होम फॉर फेस्टिवल्स।",
        "translation": "मुझे त्योहारों के लिए अपने घर को सजाना पसंद है।"
    },
    {
        "english": "I love to read stories to my children.",
        "pronunciation": "आय लव टू रीड स्टोरीज़ टू माय चिल्ड्रन।",
        "translation": "मुझे अपने बच्चों को कहानियाँ पढ़ना पसंद है।"
    },
    {
        "english": "I enjoy volunteering at local charities.",
        "pronunciation": "आय एनजॉय वॉलंटियरिंग एट लोकल चैरिटीज़।",
        "translation": "मुझे स्थानीय चैरिटीज़ में स्वयंसेवा करना पसंद है।"
    },
    {
        "english": "I like to attend dance classes.",
        "pronunciation": "आय लाइक टू अटेंड डांस क्लासेज़।",
        "translation": "मुझे डांस क्लासेज़ में शामिल होना पसंद है।"
    },
    {
        "english": "I love to explore the city with my friends.",
        "pronunciation": "आय लव टू एक्सप्लोर द सिटी विद माय फ्रेंड्स।",
        "translation": "मुझे अपने दोस्तों के साथ शहर की खोज करना पसंद है।"
    },
    {
        "english": "I enjoy trying new restaurants.",
        "pronunciation": "आय एनजॉय ट्राइइंग न्यू रेस्टोरेंट्स।",
        "translation": "मुझे नए रेस्तरां आज़माना पसंद है।"
    },
    {
        "english": "I like to watch cultural performances.",
        "pronunciation": "आय लाइक टू वॉच कल्चरल परफॉर्मेंसेज़।",
        "translation": "मुझे सांस्कृतिक प्रदर्शनों को देखना पसंद है।"
    },
    {
        "english": "I love to listen to storytelling.",
        "pronunciation": "आय लव टू लिसन टू स्टोरीटेलिंग।",
        "translation": "मुझे कहानियाँ सुनना पसंद है।"
    },
    {
        "english": "I enjoy participating in local fairs.",
        "pronunciation": "आय एनजॉय पार्टिसिपेटिंग इन लोकल फेयरज़।",
        "translation": "मुझे स्थानीय मेलों में भाग लेना पसंद है।"
    },
    {
        "english": "I like to take my kids to the park.",
        "pronunciation": "आय लाइक टू टेक माय किड्स टू द पार्क।",
        "translation": "मुझे अपने बच्चों को पार्क में ले जाना पसंद है।"
    },
    {
        "english": "I love to collect traditional handicrafts.",
        "pronunciation": "आय लव टू कलेक्ट ट्रेडिशनल हैंडीक्राफ्ट्स।",
        "translation": "मुझे पारंपरिक हस्तशिल्प इकट्ठा करना पसंद है।"
    },
    {
        "english": "I enjoy visiting historical sites.",
        "pronunciation": "आय एनजॉय विज़िटिंग हिस्टोरिकल साइट्स।",
        "translation": "मुझे ऐतिहासिक स्थलों में जाना पसंद है।"
    },
    {
        "english": "I like to write in my diary every day.",
        "pronunciation": "आय लाइक टू राइट इन माय डायरी एवरी डे।",
        "translation": "मुझे हर दिन अपनी डायरी में लिखना पसंद है।"
    },
    {
        "english": "I love spending time with my grandparents.",
        "pronunciation": "आय लव स्पेंडिंग टाइम विद माय ग्रैंडपेरेंट्स।",
        "translation": "मुझे अपने दादा-दादी के साथ समय बिताना पसंद है।"
    },
    {
        "english": "I enjoy making homemade jams.",
        "pronunciation": "आय एनजॉय मेकिंग होममेड जैम्स।",
        "translation": "मुझे घर का बना जैम बनाना पसंद है।"
    },
    {
        "english": "I like to organize family game nights.",
        "pronunciation": "आय लाइक टू ऑर्गनाइज़ फैमिली गेम नाइट्स।",
        "translation": "मुझे परिवार के गेम नाइट्स आयोजित करना पसंद है।"
    },
    {
        "english": "I love to learn about different cultures.",
        "pronunciation": "आय लव टू लर्न अबाउट डिफरेंट कल्चर्स।",
        "translation": "मुझे विभिन्न संस्कृतियों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I enjoy practicing meditation for relaxation.",
        "pronunciation": "आय एनजॉय प्रैक्टिसिंग मेडिटेशन फॉर रिलैक्सेशन।",
        "translation": "मुझे विश्राम के लिए ध्यान करना पसंद है।"
    },
    {
        "english": "I like to watch nature documentaries.",
        "pronunciation": "आय लाइक टू वॉच नेचर डॉक्यूमेंट्रीज़।",
        "translation": "मुझे प्रकृति पर डॉक्यूमेंट्रीज़ देखना पसंद है।"
    },
    {
        "english": "I love to take part in yoga retreats.",
        "pronunciation": "आय लव टू टेक पार्ट इन योगा रिट्रीट्स।",
        "translation": "मुझे योग रिट्रीट में भाग लेना पसंद है।"
    },
    {
        "english": "I enjoy visiting local art galleries.",
        "pronunciation": "आय एनजॉय विज़िटिंग लोकल आर्ट गैलरीज़।",
        "translation": "मुझे स्थानीय कला दीर्घाओं में जाना पसंद है।"
    },
    {
        "english": "I like to participate in community service.",
        "pronunciation": "आय लाइक टू पार्टिसिपेट इन कम्युनिटी सर्विस।",
        "translation": "मुझे सामुदायिक सेवा में भाग लेना पसंद है।"
    },
    {
        "english": "I love to watch dance performances.",
        "pronunciation": "आय लव टू वॉच डांस परफॉर्मेंसेज़।",
        "translation": "मुझे नृत्य प्रदर्शनों को देखना पसंद है।"
    },
    {
        "english": "I enjoy cooking for my friends on weekends.",
        "pronunciation": "आय एनजॉय कुकिंग फॉर माय फ्रेंड्स ऑन वीकेंड्स।",
        "translation": "मुझे सप्ताहांत पर अपने दोस्तों के लिए खाना बनाना पसंद है।"
    },
    {
        "english": "I like to explore different parks in Mumbai.",
        "pronunciation": "आय लाइक टू एक्सप्लोर डिफरेंट पार्क्स इन मुंबई।",
        "translation": "मुझे मुंबई के विभिन्न पार्कों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I love to make family photo albums.",
        "pronunciation": "आय लव टू मेक फैमिली फ़ोटो एल्बम्स।",
        "translation": "मुझे परिवार के फोटो एल्बम बनाना पसंद है।"
    },
    {
        "english": "I enjoy creating handmade gifts.",
        "pronunciation": "आय एनजॉय क्रिएटिंग हैंडमेड गिफ्ट्स।",
        "translation": "मुझे हस्तनिर्मित उपहार बनाना पसंद है।"
    },
    {
        "english": "I like to read books on Indian history.",
        "pronunciation": "आय लाइक टू रीड बुक्स ऑन इंडियन हिस्ट्री।",
        "translation": "मुझे भारतीय इतिहास पर किताबें पढ़ना पसंद है।"
    },
    {
        "english": "I love to attend music concerts.",
        "pronunciation": "आय लव टू अटेंड म्यूज़िक कॉन्सर्ट्स।",
        "translation": "मुझे संगीत कार्यक्रमों में शामिल होना पसंद है।"
    },
    {
        "english": "I enjoy playing board games with my family.",
        "pronunciation": "आय एनजॉय प्लेइंग बोर्ड गेम्स विद माय फैमिली।",
        "translation": "मुझे अपने परिवार के साथ बोर्ड गेम खेलना पसंद है।"
    },
    {
        "english": "I like to visit botanical gardens.",
        "pronunciation": "आय लाइक टू विज़िट बोटैनिकल गार्डन।",
        "translation": "मुझे बॉटेनिकल गार्डन में जाना पसंद है।"
    },
    {
        "english": "I enjoy drinking chai in the morning.",
        "pronunciation": "आय एनजॉय ड्रिंकिंग चाय इन द मॉर्निंग।",
        "translation": "मुझे सुबह चाय पीना पसंद है।"
    },
    {
        "english": "I love to watch Bollywood movies.",
        "pronunciation": "आय लव टू वॉच बॉलीवुड मूवीज़।",
        "translation": "मुझे बॉलीवुड फिल्में देखना पसंद है।"
    },
    {
        "english": "I like to go shopping at local markets.",
        "pronunciation": "आय लाइक टू गो शॉपिंग एट लोकल मार्केट्स।",
        "translation": "मुझे स्थानीय बाजारों में खरीदारी करना पसंद है।"
    },
    {
        "english": "I enjoy reading Indian literature.",
        "pronunciation": "आय एनजॉय रीडिंग इंडियन लिटरेचर।",
        "translation": "मुझे भारतीय साहित्य पढ़ना पसंद है।"
    },
    {
        "english": "I love cooking traditional Indian dishes.",
        "pronunciation": "आय लव कुकिंग ट्रेडिशनल इंडियन डिशेज़।",
        "translation": "मुझे पारंपरिक भारतीय व्यंजन बनाना पसंद है।"
    },
    {
        "english": "I like to celebrate Diwali with my family.",
        "pronunciation": "आय लाइक टू सेलिब्रेट दीवाली विद माय फैमिली।",
        "translation": "मुझे अपने परिवार के साथ दीवाली मनाना पसंद है।"
    },
    {
        "english": "I enjoy learning about different religions.",
        "pronunciation": "आय एनजॉय लर्निंग अबाउट डिफरेंट रिलिज़नज़।",
        "translation": "मुझे विभिन्न धर्मों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I love to visit historical landmarks.",
        "pronunciation": "आय लव टू विज़िट हिस्टोरिकल लैंडमार्क्स।",
        "translation": "मुझे ऐतिहासिक स्थलों पर जाना पसंद है।"
    },
    {
        "english": "I like to volunteer for community events.",
        "pronunciation": "आय लाइक टू वॉलंटियर फॉर कम्युनिटी इवेंट्स।",
        "translation": "मुझे सामुदायिक कार्यक्रमों के लिए स्वयंसेवा करना पसंद है।"
    },
    {
        "english": "I enjoy gardening in my free time.",
        "pronunciation": "आय एनजॉय गार्डनिंग इन माय फ्री टाइम।",
        "translation": "मुझे अपने खाली समय में बागवानी करना पसंद है।"
    },
    {
        "english": "I love to learn new languages.",
        "pronunciation": "आय लव टू लर्न न्यू लैंग्वेज़ेज़।",
        "translation": "मुझे नई भाषाएँ सीखना पसंद है।"
    },
    {
        "english": "I like to go for walks in the evening.",
        "pronunciation": "आय लाइक टू गो फॉर वॉक्स इन द ईवेनिंग।",
        "translation": "मुझे शाम को टहलने जाना पसंद है।"
    },
    {
        "english": "I enjoy making homemade pickles.",
        "pronunciation": "आय एनजॉय मेकिंग होममेड पिकल्स।",
        "translation": "मुझे घर का बना अचार बनाना पसंद है।"
    },
    {
        "english": "I love to explore new places in Mumbai.",
        "pronunciation": "आय लव टू एक्सप्लोर न्यू प्लेसेज़ इन मुंबई।",
        "translation": "मुझे मुंबई में नए स्थानों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I like to play badminton in the park.",
        "pronunciation": "आय लाइक टू प्ले बैडमिंटन इन द पार्क।",
        "translation": "मुझे पार्क में बैडमिंटन खेलना पसंद है।"
    },
    {
        "english": "I enjoy making tea for my guests.",
        "pronunciation": "आय एनजॉय मेकिंग टी फॉर माय गेस्ट्स।",
        "translation": "मुझे अपने मेहमानों के लिए चाय बनाना पसंद है।"
    },
    {
        "english": "I love to dance during festivals.",
        "pronunciation": "आय लव टू डांस ड्यूरिंग फेस्टिवल्स।",
        "translation": "मुझे त्योहारों के दौरान नृत्य करना पसंद है।"
    },
    {
        "english": "I like to write letters to my friends.",
        "pronunciation": "आय लाइक टू राइट लेटर्स टू माय फ्रेंड्स।",
        "translation": "मुझे अपने दोस्तों को पत्र लिखना पसंद है।"
    },
    {
        "english": "I enjoy attending yoga classes regularly.",
        "pronunciation": "आय एनजॉय अटेंडिंग योगा क्लासेज़ रेगुलरली।",
        "translation": "मुझे नियमित रूप से योगा क्लासेज़ में शामिल होना पसंद है।"
    },
    {
        "english": "I love to learn about Indian art forms.",
        "pronunciation": "आय लव टू लर्न अबाउट इंडियन आर्ट फॉर्म्स।",
        "translation": "मुझे भारतीय कला रूपों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I like to listen to motivational podcasts.",
        "pronunciation": "आय लाइक टू लिसन टू मोटिवेशनल पॉडकास्ट्स।",
        "translation": "मुझे प्रेरणादायक पॉडकास्ट सुनना पसंद है।"
    },
    {
        "english": "I enjoy cooking for special occasions.",
        "pronunciation": "आय एनजॉय कुकिंग फॉर स्पेशल ओकेज़न्स।",
        "translation": "मुझे विशेष अवसरों पर खाना बनाना पसंद है।"
    },
    {
        "english": "I love to make friends from different cultures.",
        "pronunciation": "आय लव टू मेक फ्रेंड्स फ्रॉम डिफरेंट कल्चर्स।",
        "translation": "मुझे विभिन्न संस्कृतियों से दोस्त बनाना पसंद है।"
    },
    {
        "english": "I like to keep my house tidy.",
        "pronunciation": "आय लाइक टू कीप माय हाउस टाइडि।",
        "translation": "मुझे अपने घर को साफ रखना पसंद है।"
    },
    {
        "english": "I enjoy discovering new hobbies.",
        "pronunciation": "आय एनजॉय डिस्कवरींग न्यू हॉबीज़।",
        "translation": "मुझे नए शौक खोजने में मज़ा आता है।"
    },
    {
        "english": "I love to learn about Ayurveda.",
        "pronunciation": "आय लव टू लर्न अबाउट आयुर्वेद।",
        "translation": "मुझे आयुर्वेद के बारे में सीखना पसंद है।"
    },
    {
        "english": "I like to practice English every day.",
        "pronunciation": "आय लाइक टू प्रैक्टिस इंग्लिश एवरी डे।",
        "translation": "मुझे हर दिन अंग्रेजी का अभ्यास करना पसंद है।"
    },
    {
        "english": "I enjoy sharing stories with my family.",
        "pronunciation": "आय एनजॉय शेयरिंग स्टोरीज़ विद माय फैमिली।",
        "translation": "मुझे अपने परिवार के साथ कहानियाँ साझा करना पसंद है।"
    },
    {
        "english": "I love to listen to music while cooking.",
        "pronunciation": "आय लव टू लिसन टू म्यूज़िक व्हाइल कुकिंग।",
        "translation": "मुझे खाना बनाते समय संगीत सुनना पसंद है।"
    },
    {
        "english": "I like to go for evening walks with my dog.",
        "pronunciation": "आय लाइक टू गो फॉर ईवेनिंग वॉक्स विद माय डॉग।",
        "translation": "मुझे अपने कुत्ते के साथ शाम की सैर पर जाना पसंद है।"
    },
    {
        "english": "I enjoy baking cakes for my family.",
        "pronunciation": "आय एनजॉय बेकिंग केक्स फॉर माय फैमिली।",
        "translation": "मुझे अपने परिवार के लिए केक बनाना पसंद है।"
    },
    {
        "english": "I love to travel to different states in India.",
        "pronunciation": "आय लव टू ट्रैवल टू डिफरेंट स्टेट्स इन इंडिया।",
        "translation": "मुझे भारत के विभिन्न राज्यों की यात्रा करना पसंद है।"
    },
    {
        "english": "I like to watch cricket matches with friends.",
        "pronunciation": "आय लाइक टू वॉच क्रिकेट मैचेज़ विद फ्रेंड्स।",
        "translation": "मुझे दोस्तों के साथ क्रिकेट मैच देखना पसंद है।"
    },
    {
        "english": "I enjoy learning new recipes from my mother.",
        "pronunciation": "आय एनजॉय लर्निंग न्यू रेसिपीज़ फ्रॉम माय मदर।",
        "translation": "मुझे अपनी माँ से नए व्यंजन सीखना पसंद है।"
    },
    {
        "english": "I love to take pictures of nature.",
        "pronunciation": "आय लव टू टेक पिक्चर्स ऑफ नेचर।",
        "translation": "मुझे प्रकृति की तस्वीरें लेना पसंद है।"
    },
    {
        "english": "I like to drink fresh juice in summer.",
        "pronunciation": "आय लाइक टू ड्रिंक फ्रेश जूस इन समर।",
        "translation": "मुझे गर्मियों में ताजा जूस पीना पसंद है।"
    },
    {
        "english": "I enjoy making new friends at events.",
        "pronunciation": "आय एनजॉय मेकिंग न्यू फ्रेंड्स एट इवेंट्स।",
        "translation": "मुझे कार्यक्रमों में नए दोस्त बनाना पसंद है।"
    },
    {
        "english": "I love to attend art exhibitions.",
        "pronunciation": "आय लव टू अटेंड आर्ट एक्सहिबिशन।",
        "translation": "मुझे कला प्रदर्शनियों में शामिल होना पसंद है।"
    },
    {
        "english": "I like to participate in cultural festivals.",
        "pronunciation": "आय लाइक टू पार्टिसिपेट इन कल्चरल फेस्टिवल्स।",
        "translation": "मुझे सांस्कृतिक त्योहारों में भाग लेना पसंद है।"
    },
    {
        "english": "I enjoy writing poetry in my spare time.",
        "pronunciation": "आय एनजॉय राइटिंग पोएट्री इन माय स्पेयर टाइम।",
        "translation": "मुझे अपने फुर्सत के समय में कविता लिखना पसंद है।"
    },
    {
        "english": "I love to help my neighbors with their gardens.",
        "pronunciation": "आय लव टू हेल्प माय नेबर्स विद देयर गार्डन।",
        "translation": "मुझे अपने पड़ोसियों के बागों में मदद करना पसंद है।"
    },
    {
        "english": "I like to learn about different cuisines.",
        "pronunciation": "आय लाइक टू लर्न अबाउट डिफरेंट क्यूज़ीनज़।",
        "translation": "मुझे विभिन्न व्यंजनों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I enjoy playing musical instruments.",
        "pronunciation": "आय एनजॉय प्लेइंग म्यूज़िकल इंस्ट्रूमेंट्स।",
        "translation": "मुझे संगीत वाद्ययंत्र बजाना पसंद है।"
    },
    {
        "english": "I love to have picnics with my family.",
        "pronunciation": "आय लव टू हैव पिकनिकस विद माय फैमिली।",
        "translation": "मुझे अपने परिवार के साथ पिकनिक मनाना पसंद है।"
    },
    {
        "english": "I like to read travel blogs.",
        "pronunciation": "आय लाइक टू रीड ट्रैवल ब्लॉग्स।",
        "translation": "मुझे यात्रा ब्लॉग पढ़ना पसंद है।"
    },
    {
        "english": "I enjoy learning about local customs.",
        "pronunciation": "आय एनजॉय लर्निंग अबाउट लोकल कस्टम्स।",
        "translation": "मुझे स्थानीय रिवाजों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I love to watch sunrise and sunset.",
        "pronunciation": "आय लव टू वॉच सनराइज एंड सनसेट।",
        "translation": "मुझे सूर्योदय और सूर्यास्त देखना पसंद है।"
    },
    {
        "english": "I like to keep a journal of my thoughts.",
        "pronunciation": "आय लाइक टू कीप ए जर्नल ऑफ माय थॉट्स।",
        "translation": "मुझे अपने विचारों का एक पत्रिका रखना पसंद है।"
    },
    {
        "english": "I enjoy taking care of pets.",
        "pronunciation": "आय एनजॉय टेकिंग केयर ऑफ पेट्स।",
        "translation": "मुझे पालतू जानवरों की देखभाल करना पसंद है।"
    },
    {
        "english": "I love to go on road trips with friends.",
        "pronunciation": "आय लव टू गो ऑन रोड ट्रिप्स विद फ्रेंड्स।",
        "translation": "मुझे दोस्तों के साथ सड़क यात्रा पर जाना पसंद है।"
    },
    {
        "english": "I like to learn about environmental issues.",
        "pronunciation": "आय लाइक टू लर्न अबाउट एनवायरनमेंटल इशूज़।",
        "translation": "मुझे पर्यावरणीय मुद्दों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I enjoy making traditional crafts.",
        "pronunciation": "आय एनजॉय मेकिंग ट्रेडिशनल क्राफ्ट्स।",
        "translation": "मुझे पारंपरिक शिल्प बनाना पसंद है।"
    },
    {
        "english": "I love to go to the beach during holidays.",
        "pronunciation": "आय लव टू गो टू द बीच ड्यूरिंग हॉलीडेज़।",
        "translation": "मुझे छुट्टियों के दौरान समुद्र तट पर जाना पसंद है।"
    },
    {
        "english": "I like to participate in local sports events.",
        "pronunciation": "आय लाइक टू पार्टिसिपेट इन लोकल स्पोर्ट्स इवेंट्स।",
        "translation": "मुझे स्थानीय खेल कार्यक्रमों में भाग लेना पसंद है।"
    },
    {
        "english": "I enjoy doing puzzles in my free time.",
        "pronunciation": "आय एनजॉय डूइंग पज़ल्स इन माय फ्री टाइम।",
        "translation": "मुझे अपने फुर्सत के समय में पहेलियाँ करना पसंद है।"
    },
    {
        "english": "I love to visit art galleries.",
        "pronunciation": "आय लव टू विज़िट आर्ट गैलरीज़।",
        "translation": "मुझे कला गैलरी में जाना पसंद है।"
    },
    {
        "english": "I like to practice mindfulness and meditation.",
        "pronunciation": "आय लाइक टू प्रैक्टिस माइंडफुलनेस एंड मेडिटेशन।",
        "translation": "मुझे ध्यान और मेडिटेशन का अभ्यास करना पसंद है।"
    },
    {
        "english": "I enjoy taking part in debates.",
        "pronunciation": "आय एनजॉय टेकिंग पार्ट इन डिबेट्स।",
        "translation": "मुझे बहसों में भाग लेना पसंद है।"
    },
    {
        "english": "I love to write stories for children.",
        "pronunciation": "आय लव टू राइट स्टोरीज़ फॉर चिल्ड्रेन।",
        "translation": "मुझे बच्चों के लिए कहानियाँ लिखना पसंद है।"
    },
    {
        "english": "I like to cook meals for family gatherings.",
        "pronunciation": "आय लाइक टू कुक मील्स फॉर फैमिली गैदरिंग्स।",
        "translation": "मुझे परिवार की बैठकों के लिए भोजन बनाना पसंद है।"
    },
    {
        "english": "I enjoy exploring new technologies.",
        "pronunciation": "आय एनजॉय एक्सप्लोरिंग न्यू टेक्नोलॉजीज़।",
        "translation": "मुझे नई तकनीकों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I love to help organize community events.",
        "pronunciation": "आय लव टू हेल्प ऑर्गनाइज कम्युनिटी इवेंट्स।",
        "translation": "मुझे सामुदायिक कार्यक्रमों का आयोजन करने में मदद करना पसंद है।"
    },
    {
        "english": "I like to teach my children about nature.",
        "pronunciation": "आय लाइक टू टीच माय चिल्ड्रन अबाउट नेचर।",
        "translation": "मुझे अपने बच्चों को प्रकृति के बारे में सिखाना पसंद है।"
    },
    {
        "english": "I enjoy attending cooking workshops.",
        "pronunciation": "आय एनजॉय अटेंडिंग कुकिंग वर्कशॉप्स।",
        "translation": "मुझे खाना बनाने की कार्यशालाओं में शामिल होना पसंद है।"
    },
    {
        "english": "I love to learn about space and planets.",
        "pronunciation": "आय लव टू लर्न अबाउट स्पेस एंड प्लैनेट्स।",
        "translation": "मुझे अंतरिक्ष और ग्रहों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I like to watch documentaries on wildlife.",
        "pronunciation": "आय लाइक टू वॉच डॉक्यूमेंट्रीज़ ऑन वाइल्डलाइफ।",
        "translation": "मुझे वन्यजीवों पर डॉक्यूमेंट्री देखना पसंद है।"
    },
    {
        "english": "I enjoy discussing current events with friends.",
        "pronunciation": "आय एनजॉय डिस्कसिंग करंट इवेंट्स विद फ्रेंड्स।",
        "translation": "मुझे दोस्तों के साथ वर्तमान घटनाओं पर चर्चा करना पसंद है।"
    },
    {
        "english": "I love to volunteer at local charities.",
        "pronunciation": "आय लव टू वॉलंटियर एट लोकल चैरिटीज़।",
        "translation": "मुझे स्थानीय चैरिटीज़ में स्वयंसेवा करना पसंद है।"
    },
    {
        "english": "I like to explore nearby temples and historical sites.",
        "pronunciation": "आय लाइक टू एक्सप्लोर नियरबाई टेम्पल्स एंड हिस्टोरिकल साइट्स।",
        "translation": "मुझे नजदीकी मंदिरों और ऐतिहासिक स्थलों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I enjoy playing board games with family.",
        "pronunciation": "आय एनजॉय प्लेइंग बोर्ड गेम्स विद फैमिली।",
        "translation": "मुझे परिवार के साथ बोर्ड गेम खेलना पसंद है।"
    },
    {
        "english": "I love to make homemade gifts for friends.",
        "pronunciation": "आय लव टू मेक होममेड गिफ्ट्स फॉर फ्रेंड्स।",
        "translation": "मुझे दोस्तों के लिए घर का बना उपहार बनाना पसंद है।"
    },
    {
        "english": "I like to read biographies of famous personalities.",
        "pronunciation": "आय लाइक टू रीड बायोग्राफ़ीज़ ऑफ फेमस पर्सनैलिटीज़।",
        "translation": "मुझे प्रसिद्ध व्यक्तियों की जीवनी पढ़ना पसंद है।"
    },
    {
        "english": "I enjoy hiking in the mountains.",
        "pronunciation": "आय एनजॉय हाइकिंग इन द माउंटेन्स।",
        "translation": "मुझे पहाड़ियों में चढ़ाई करना पसंद है।"
    },
    {
        "english": "I love to collect stamps and coins.",
        "pronunciation": "आय लव टू कलेक्ट स्टैंप्स एंड कॉइन्स।",
        "translation": "मुझे स्टांप और सिक्के इकट्ठा करना पसंद है।"
    },
    {
        "english": "I like to practice photography during travels.",
        "pronunciation": "आय लाइक टू प्रैक्टिस फोटोग्राफी ड्यूरिंग ट्रैवल्स।",
        "translation": "मुझे यात्रा के दौरान फोटोग्राफी का अभ्यास करना पसंद है।"
    },
    {
        "english": "I enjoy attending music concerts in the city.",
        "pronunciation": "आय एनजॉय अटेंडिंग म्यूज़िक कॉन्सर्ट्स इन द सिटी।",
        "translation": "मुझे शहर में संगीत कार्यक्रमों में शामिल होना पसंद है।"
    },
    {
        "english": "I love to try out new restaurants.",
        "pronunciation": "आय लव टू ट्राई आउट न्यू रेस्टोरेंट्स।",
        "translation": "मुझे नए रेस्तरां आज़माना पसंद है।"
    },
    {
        "english": "I like to explore nature trails on weekends.",
        "pronunciation": "आय लाइक टू एक्सप्लोर नेचर ट्रेल्स ऑन वीकेंड्स।",
        "translation": "मुझे सप्ताहांत पर प्रकृति के रास्तों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I enjoy writing about my travel experiences.",
        "pronunciation": "आय एनजॉय राइटिंग अबाउट माय ट्रैवल एक्सपीरियंस।",
        "translation": "मुझे अपनी यात्रा के अनुभवों के बारे में लिखना पसंद है।"
    },
    {
        "english": "I love to teach English to children.",
        "pronunciation": "आय लव टू टीच इंग्लिश टू चिल्ड्रन।",
        "translation": "मुझे बच्चों को अंग्रेजी पढ़ाना पसंद है।"
    },
    {
        "english": "I like to learn about famous Indian leaders.",
        "pronunciation": "आय लाइक टू लर्न अबाउट फेमस इंडियन लीडर्स।",
        "translation": "मुझे प्रसिद्ध भारतीय नेताओं के बारे में सीखना पसंद है।"
    },
    {
        "english": "I enjoy making homemade sweets during festivals.",
        "pronunciation": "आय एनजॉय मेकिंग होममेड स्वीट्स ड्यूरिंग फेस्टिवल्स।",
        "translation": "मुझे त्योहारों के दौरान घर का बना मिठाई बनाना पसंद है।"
    },
    {
        "english": "I love to visit new cafes in my area.",
        "pronunciation": "आय लव टू विज़िट न्यू कैफेज़ इन माय एरिया।",
        "translation": "मुझे अपने क्षेत्र में नए कैफे में जाना पसंद है।"
    },
    {
        "english": "I like to watch educational videos online.",
        "pronunciation": "आय लाइक टू वॉच एजुकेशनल वीडियोस ऑनलाइन।",
        "translation": "मुझे ऑनलाइन शैक्षिक वीडियो देखना पसंद है।"
    },
    {
        "english": "I enjoy helping children with their studies.",
        "pronunciation": "आय एनजॉय हेल्पिंग चिल्ड्रन विद देयर स्टडीज़।",
        "translation": "मुझे बच्चों को उनकी पढ़ाई में मदद करना पसंद है।"
    },
    {
        "english": "I love to create art projects at home.",
        "pronunciation": "आय लव टू क्रिएट आर्ट प्रोजेक्ट्स एट होम।",
        "translation": "मुझे घर पर कला परियोजनाएँ बनाना पसंद है।"
    },
    {
        "english": "I like to share my favorite recipes with friends.",
        "pronunciation": "आय लाइक टू शेयर माय फेवरेट रेसिपीज़ विद फ्रेंड्स।",
        "translation": "मुझे अपने पसंदीदा व्यंजनों को दोस्तों के साथ साझा करना पसंद है।"
    },
    {
        "english": "I enjoy reading articles about health and wellness.",
        "pronunciation": "आय एनजॉय रीडिंग आर्टिकल्स अबाउट हेल्थ एंड वेलनेस।",
        "translation": "मुझे स्वास्थ्य और कल्याण के बारे में लेख पढ़ना पसंद है।"
    },
    {
        "english": "I love to participate in dance competitions.",
        "pronunciation": "आय लव टू पार्टिसिपेट इन डांस कॉम्पिटिशन्स।",
        "translation": "मुझे नृत्य प्रतियोगिताओं में भाग लेना पसंद है।"
    },
    {
        "english": "I like to host game nights with my friends.",
        "pronunciation": "आय लाइक टू होस्ट गेम नाइट्स विद माय फ्रेंड्स।",
        "translation": "मुझे अपने दोस्तों के साथ गेम नाइट्स आयोजित करना पसंद है।"
    },
    {
        "english": "I enjoy making new dishes using seasonal ingredients.",
        "pronunciation": "आय एनजॉय मेकिंग न्यू डिशेज़ यूज़िंग सीज़नल इंग्रीडियंट्स।",
        "translation": "मुझे मौसमी सामग्री का उपयोग करके नए व्यंजन बनाना पसंद है।"
    },
    {
        "english": "I love to visit local farms and markets.",
        "pronunciation": "आय लव टू विज़िट लोकल फार्म्स एंड मार्केट्स।",
        "translation": "मुझे स्थानीय खेतों और बाजारों में जाना पसंद है।"
    },
    {
        "english": "I like to explore cultural festivals around the country.",
        "pronunciation": "आय लाइक टू एक्सप्लोर कल्चरल फेस्टिवल्स अराउंड द कंट्री।",
        "translation": "मुझे देशभर में सांस्कृतिक त्योहारों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I enjoy spending time with my grandparents.",
        "pronunciation": "आय एनजॉय स्पेंडिंग टाइम विद माय ग्रैंडपेरेंट्स।",
        "translation": "मुझे अपने दादा-दादी के साथ समय बिताना पसंद है।"
    },
    {
        "english": "I love to learn about different cultures and traditions.",
        "pronunciation": "आय लव टू लर्न अबाउट डिफरेंट कल्चर्स एंड ट्रेडिशन्स।",
        "translation": "मुझे विभिन्न संस्कृतियों और परंपराओं के बारे में सीखना पसंद है।"
    },
    {
        "english": "I like to organize family gatherings during holidays.",
        "pronunciation": "आय लाइक टू ऑर्गनाइज फैमिली गैदरिंग्स ड्यूरिंग हॉलीडेज़।",
        "translation": "मुझे छुट्टियों के दौरान परिवार की बैठकें आयोजित करना पसंद है।"
    },
    {
        "english": "I enjoy visiting different places of worship.",
        "pronunciation": "आय एनजॉय विज़िटिंग डिफरेंट प्लेसेज़ ऑफ वर्शिप।",
        "translation": "मुझे विभिन्न पूजा स्थलों पर जाना पसंद है।"
    },
    {
        "english": "I love to create my own vegetable garden.",
        "pronunciation": "आय लव टू क्रिएट माय ओन वेजिटेबल गार्डन।",
        "translation": "मुझे अपना खुद का सब्ज़ी बाग बनाना पसंद है।"
    },
    {
        "english": "I like to study history and ancient civilizations.",
        "pronunciation": "आय लाइक टू स्टडी हिस्ट्री एंड एंसिएंट सिविलाइजेशन्स।",
        "translation": "मुझे इतिहास और प्राचीन सभ्यताओं का अध्ययन करना पसंद है।"
    },
    {
        "english": "I enjoy learning about different art forms.",
        "pronunciation": "आय एनजॉय लर्निंग अबाउट डिफरेंट आर्ट फॉर्म्स।",
        "translation": "मुझे विभिन्न कला रूपों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I love to volunteer at animal shelters.",
        "pronunciation": "आय लव टू वॉलंटियर एट एनिमल शेल्टर्स।",
        "translation": "मुझे पशु आश्रयों में स्वयंसेवा करना पसंद है।"
    },
    {
        "english": "I like to try out different cuisines when traveling.",
        "pronunciation": "आय लाइक टू ट्राई आउट डिफरेंट क्यूज़ीनज़ व्हेन ट्रैवलिंग।",
        "translation": "मुझे यात्रा करते समय विभिन्न व्यंजन आज़माना पसंद है।"
    },
    {
        "english": "I enjoy attending local theater performances.",
        "pronunciation": "आय एनजॉय अटेंडिंग लोकल थियेटर परफॉर्मेंस।",
        "translation": "मुझे स्थानीय थियेटर प्रस्तुतियों में शामिल होना पसंद है।"
    },
    {
        "english": "I love to share stories about my travels.",
        "pronunciation": "आय लव टू शेयर स्टोरीज़ अबाउट माय ट्रैवल्स।",
        "translation": "मुझे अपनी यात्रा के बारे में कहानियाँ साझा करना पसंद है।"
    },
    {
        "english": "I like to create scrapbooks of my memories.",
        "pronunciation": "आय लाइक टू क्रिएट स्क्रैपबुक्स ऑफ माय मेमोरीज़।",
        "translation": "मुझे अपनी यादों का स्क्रैपबुक बनाना पसंद है।"
    },
    {
        "english": "I enjoy watching wildlife documentaries.",
        "pronunciation": "आय एनजॉय वॉचिंग वाइल्डलाइफ डॉक्यूमेंट्रीज़।",
        "translation": "मुझे वन्यजीवों पर डॉक्यूमेंट्री देखना पसंद है।"
    },
    {
        "english": "I love to visit museums on weekends.",
        "pronunciation": "आय लव टू विज़िट म्यूज़ियम्स ऑन वीकेंड्स।",
        "translation": "मुझे सप्ताहांत पर संग्रहालयों में जाना पसंद है।"
    },
    {
        "english": "I like to participate in community service projects.",
        "pronunciation": "आय लाइक टू पार्टिसिपेट इन कम्युनिटी सर्विस प्रोजेक्ट्स।",
        "translation": "मुझे सामुदायिक सेवा परियोजनाओं में भाग लेना पसंद है।"
    },
    {
        "english": "I enjoy making personalized gifts for my friends.",
        "pronunciation": "आय एनजॉय मेकिंग पर्सनलाइज्ड गिफ्ट्स फॉर माय फ्रेंड्स।",
        "translation": "मुझे अपने दोस्तों के लिए व्यक्तिगत उपहार बनाना पसंद है।"
    },
    {
        "english": "I love to attend literary festivals.",
        "pronunciation": "आय लव टू अटेंड लिटरेरी फेस्टिवल्स।",
        "translation": "मुझे साहित्यिक त्योहारों में शामिल होना पसंद है।"
    },
    {
        "english": "I like to read novels in my free time.",
        "pronunciation": "आय लाइक टू रीड नॉवेल्स इन माय फ्री टाइम।",
        "translation": "मुझे अपने फुर्सत के समय में उपन्यास पढ़ना पसंद है।"
    },
    {
        "english": "I enjoy visiting historical landmarks.",
        "pronunciation": "आय एनजॉय विज़िटिंग हिस्टोरिकल लैंडमार्क्स।",
        "translation": "मुझे ऐतिहासिक स्थलों पर जाना पसंद है।"
    },
    {
        "english": "I love to create my own home decor.",
        "pronunciation": "आय लव टू क्रिएट माय ओन होम डेकोर।",
        "translation": "मुझे अपने खुद के होम डेकोर बनाना पसंद है।"
    },
    {
        "english": "I like to practice yoga for relaxation.",
        "pronunciation": "आय लाइक टू प्रैक्टिस योगा फॉर रिलैक्सेशन।",
        "translation": "मुझे विश्राम के लिए योग का अभ्यास करना पसंद है।"
    },
    {
        "english": "I enjoy learning about different musical genres.",
        "pronunciation": "आय एनजॉय लर्निंग अबाउट डिफरेंट म्यूज़िकल जेनरज़।",
        "translation": "मुझे विभिन्न संगीत शैलियों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I love to help organize school events.",
        "pronunciation": "आय लव टू हेल्प ऑर्गनाइज स्कूल इवेंट्स।",
        "translation": "मुझे स्कूल के कार्यक्रमों का आयोजन करने में मदद करना पसंद है।"
    },
    {
        "english": "I like to learn about healthy cooking techniques.",
        "pronunciation": "आय लाइक टू लर्न अबाउट हेल्दी कुकिंग टेक्नीकज़।",
        "translation": "मुझे स्वस्थ खाना पकाने की तकनीकों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I enjoy participating in book clubs.",
        "pronunciation": "आय एनजॉय पार्टिसिपेटिंग इन बुक क्लब्स।",
        "translation": "मुझे पुस्तक क्लबों में भाग लेना पसंद है।"
    },
    {
        "english": "I love to create handmade crafts.",
        "pronunciation": "आय लव टू क्रिएट हैंडमेड क्राफ्ट्स।",
        "translation": "मुझे हस्तनिर्मित शिल्प बनाना पसंद है।"
    },
    {
        "english": "I like to watch movies that inspire me.",
        "pronunciation": "आय लाइक टू वॉच मूवीज़ दैट इंस्पायर मी।",
        "translation": "मुझे वे फिल्में देखना पसंद है जो मुझे प्रेरित करती हैं।"
    },
    {
        "english": "I enjoy taking nature walks in the evenings.",
        "pronunciation": "आय एनजॉय टेकिंग नेचर वॉक्स इन द इविनिंग्स।",
        "translation": "मुझे शाम को प्रकृति की सैर करना पसंद है।"
    },
    {
        "english": "I love to bake cookies and cakes.",
        "pronunciation": "आय लव टू बेक कुकीज़ एंड केक।",
        "translation": "मुझे कुकीज़ और केक बेक करना पसंद है।"
    },
    {
        "english": "I like to share my travel experiences with others.",
        "pronunciation": "आय लाइक टू शेयर माय ट्रैवल एक्सपीरियंस विद अदर्स।",
        "translation": "मुझे अपनी यात्रा के अनुभवों को दूसरों के साथ साझा करना पसंद है।"
    },
    {
        "english": "I enjoy trying out new hobbies.",
        "pronunciation": "आय एनजॉय ट्राईइंग आउट न्यू हॉबीज़।",
        "translation": "मुझे नए शौक आज़माना पसंद है।"
    },
    {
        "english": "I love to visit botanical gardens.",
        "pronunciation": "आय लव टू विज़िट बोटैनिकल गार्डनज़।",
        "translation": "मुझे वनस्पति उद्यानों में जाना पसंद है।"
    },
    {
        "english": "I like to connect with friends through social media.",
        "pronunciation": "आय लाइक टू कनेक्ट विद फ्रेंड्स थ्रू सोशल मीडिया।",
        "translation": "मुझे सोशल मीडिया के जरिए दोस्तों से जुड़ना पसंद है।"
    },
    {
        "english": "I enjoy supporting local artisans and craftsmen.",
        "pronunciation": "आय एनजॉय सपोर्टिंग लोकल आर्टिजन्स एंड क्राफ्ट्समेन।",
        "translation": "मुझे स्थानीय कारीगरों और शिल्पकारों का समर्थन करना पसंद है।"
    },
    {
        "english": "I love to create my own jewelry.",
        "pronunciation": "आय लव टू क्रिएट माय ओन ज्वेलरी।",
        "translation": "मुझे अपना खुद का आभूषण बनाना पसंद है।"
    },
    {
        "english": "I like to participate in science fairs.",
        "pronunciation": "आय लाइक टू पार्टिसिपेट इन साइंस फेयरज़।",
        "translation": "मुझे विज्ञान मेले में भाग लेना पसंद है।"
    },
    {
        "english": "I enjoy attending poetry readings.",
        "pronunciation": "आय एनजॉय अटेंडिंग पोएट्री रीडिंग्स।",
        "translation": "मुझे कविता पाठ में शामिल होना पसंद है।"
    },
    {
        "english": "I love to create my own video content.",
        "pronunciation": "आय लव टू क्रिएट माय ओन वीडियो कॉन्टेंट।",
        "translation": "मुझे अपना खुद का वीडियो कंटेंट बनाना पसंद है।"
    },
    {
        "english": "I like to participate in online discussions.",
        "pronunciation": "आय लाइक टू पार्टिसिपेट इन ऑनलाइन डिस्कशन्स।",
        "translation": "मुझे ऑनलाइन चर्चाओं में भाग लेना पसंद है।"
    },
    {
        "english": "I enjoy cooking traditional dishes during festivals.",
        "pronunciation": "आय एनजॉय कुकिंग ट्रेडिशनल डिशेज़ ड्यूरिंग फेस्टिवल्स।",
        "translation": "मुझे त्योहारों के दौरान पारंपरिक व्यंजन बनाना पसंद है।"
    },
    {
        "english": "I love to create my own blog.",
        "pronunciation": "आय लव टू क्रिएट माय ओन ब्लॉग।",
        "translation": "मुझे अपना खुद का ब्लॉग बनाना पसंद है।"
    },
    {
        "english": "I like to take photos of nature.",
        "pronunciation": "आय लाइक टू टेक फोटोज़ ऑफ नेचर।",
        "translation": "मुझे प्रकृति की तस्वीरें लेना पसंद है।"
    },
    {
        "english": "I enjoy watching theater performances.",
        "pronunciation": "आय एनजॉय वॉचिंग थियेटर परफॉर्मेंस।",
        "translation": "मुझे थियेटर प्रस्तुतियों को देखना पसंद है।"
    },
    {
        "english": "I love to experiment with new recipes.",
        "pronunciation": "आय लव टू एक्सपेरिमेंट विद न्यू रेसिपीज़।",
        "translation": "मुझे नए व्यंजनों के साथ प्रयोग करना पसंद है।"
    },
    {
        "english": "I like to support local businesses.",
        "pronunciation": "आय लाइक टू सपोर्ट लोकल बिसनेस।",
        "translation": "मुझे स्थानीय व्यवसायों का समर्थन करना पसंद है।"
    },
    {
        "english": "I enjoy spending weekends at the beach.",
        "pronunciation": "आय एनजॉय स्पेंडिंग वीकेंड्स एट द बीच।",
        "translation": "मुझे समुद्र तट पर सप्ताहांत बिताना पसंद है।"
    },
    {
        "english": "I love to create my own video games.",
        "pronunciation": "आय लव टू क्रिएट माय ओन वीडियो गेम्स।",
        "translation": "मुझे अपने खुद के वीडियो गेम बनाना पसंद है।"
    },
    {
        "english": "I like to learn new languages.",
        "pronunciation": "आय लाइक टू लर्न न्यू लैंग्वेजेज़।",
        "translation": "मुझे नई भाषाएँ सीखना पसंद है।"
    },
    {
        "english": "I enjoy practicing my drawing skills.",
        "pronunciation": "आय एनजॉय प्रैक्टिसिंग माय ड्रॉइंग स्किल्स।",
        "translation": "मुझे अपनी चित्रकारी कौशल का अभ्यास करना पसंद है।"
    },
    {
        "english": "I love to write poetry in my free time.",
        "pronunciation": "आय लव टू राइट पोएट्री इन माय फ्री टाइम।",
        "translation": "मुझे अपने फुर्सत के समय में कविता लिखना पसंद है।"
    },
    {
        "english": "I like to explore new places in my city.",
        "pronunciation": "आय लाइक टू एक्सप्लोर न्यू प्लेसेज़ इन माय सिटी।",
        "translation": "मुझे अपने शहर में नए स्थानों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I enjoy taking care of pets.",
        "pronunciation": "आय एनजॉय टेकिंग केयर ऑफ पेट्स।",
        "translation": "मुझे पालतू जानवरों की देखभाल करना पसंद है।"
    },
    {
        "english": "I love to create digital art.",
        "pronunciation": "आय लव टू क्रिएट डिजिटल आर्ट।",
        "translation": "मुझे डिजिटल कला बनाना पसंद है।"
    },
    {
        "english": "I like to organize charity events.",
        "pronunciation": "आय लाइक टू ऑर्गनाइज चैरिटी इवेंट्स।",
        "translation": "मुझे चैरिटी कार्यक्रमों का आयोजन करना पसंद है।"
    },
    {
        "english": "I enjoy reading poetry.",
        "pronunciation": "आय एनजॉय रीडिंग पोएट्री।",
        "translation": "मुझे कविता पढ़ना पसंद है।"
    },
    {
        "english": "I love to teach others about technology.",
        "pronunciation": "आय लव टू टीच अदर्स अबाउट टेक्नोलॉजी।",
        "translation": "मुझे दूसरों को प्रौद्योगिकी के बारे में सिखाना पसंद है।"
    },
    {
        "english": "I like to watch documentaries about nature.",
        "pronunciation": "आय लाइक टू वॉच डॉक्यूमेंट्रीज़ अबाउट नेचर।",
        "translation": "मुझे प्रकृति के बारे में डॉक्यूमेंट्री देखना पसंद है।"
    },
    {
        "english": "I enjoy learning about different scientific discoveries.",
        "pronunciation": "आय एनजॉय लर्निंग अबाउट डिफरेंट साइंटिफिक डिस्कव्रीज़।",
        "translation": "मुझे विभिन्न वैज्ञानिक खोजों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I love to play musical instruments.",
        "pronunciation": "आय लव टू प्ले म्यूज़िकल इंस्ट्रूमेंट्स।",
        "translation": "मुझे संगीत उपकरण बजाना पसंद है।"
    },
    {
        "english": "I like to create my own playlists.",
        "pronunciation": "आय लाइक टू क्रिएट माय ओन प्लेलिस्ट्स।",
        "translation": "मुझे अपनी खुद की प्लेलिस्ट बनाना पसंद है।"
    },
    {
        "english": "I enjoy participating in cultural events.",
        "pronunciation": "आय एनजॉय पार्टिसिपेटिंग इन कल्चरल इवेंट्स।",
        "translation": "मुझे सांस्कृतिक कार्यक्रमों में भाग लेना पसंद है।"
    },
    {
        "english": "I love to volunteer for environmental causes.",
        "pronunciation": "आय लव टू वॉलंटियर फॉर एनवायरनमेंटल कॉज़ेज़।",
        "translation": "मुझे पर्यावरणीय कारणों के लिए स्वयंसेवा करना पसंद है।"
    },
    {
        "english": "I like to explore new hobbies.",
        "pronunciation": "आय लाइक टू एक्सप्लोर न्यू हॉबीज़।",
        "translation": "मुझे नए शौक का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I enjoy helping my community.",
        "pronunciation": "आय एनजॉय हेल्पिंग माय कम्युनिटी।",
        "translation": "मुझे अपनी सामुदायिक मदद करना पसंद है।"
    },
    {
        "english": "I love to create my own website.",
        "pronunciation": "आय लव टू क्रिएट माय ओन वेबसाइट।",
        "translation": "मुझे अपनी खुद की वेबसाइट बनाना पसंद है।"
    },
    {
        "english": "I like to attend workshops and training sessions.",
        "pronunciation": "आय लाइक टू अटेंड वर्कशॉप्स एंड ट्रेनिंग सेशन्स।",
        "translation": "मुझे कार्यशालाओं और प्रशिक्षण सत्रों में भाग लेना पसंद है।"
    },
    {
        "english": "I enjoy reading non-fiction books.",
        "pronunciation": "आय एनजॉय रीडिंग नॉन-फिक्शन बुक्स।",
        "translation": "मुझे गैर-कथा पुस्तकें पढ़ना पसंद है।"
    },
    {
        "english": "I love to experiment with different art supplies.",
        "pronunciation": "आय लव टू एक्सपेरिमेंट विद डिफरेंट आर्ट सप्लाइज।",
        "translation": "मुझे विभिन्न कला सामग्री के साथ प्रयोग करना पसंद है।"
    },
    {
        "english": "I like to connect with my friends through gaming.",
        "pronunciation": "आय लाइक टू कनेक्ट विद माय फ्रेंड्स थ्रू गेमिंग।",
        "translation": "मुझे गेमिंग के जरिए अपने दोस्तों से जुड़ना पसंद है।"
    },
    {
        "english": "I enjoy taking online courses.",
        "pronunciation": "आय एनजॉय टेकिंग ऑनलाइन कोर्सेज़।",
        "translation": "मुझे ऑनलाइन पाठ्यक्रम करना पसंद है।"
    },
    {
        "english": "I love to visit art galleries.",
        "pronunciation": "आय लव टू विज़िट आर्ट गैलरीज़।",
        "translation": "मुझे कला दीर्घाओं में जाना पसंद है।"
    },
    {
        "english": "I like to support local musicians.",
        "pronunciation": "आय लाइक टू सपोर्ट लोकल म्यूज़िशियन्स।",
        "translation": "मुझे स्थानीय संगीतकारों का समर्थन करना पसंद है।"
    },
    {
        "english": "I enjoy crafting handmade gifts for friends.",
        "pronunciation": "आय एनजॉय क्राफ्टिंग हैंडमेड गिफ्ट्स फॉर फ्रेंड्स।",
        "translation": "मुझे दोस्तों के लिए हस्तनिर्मित उपहार बनाना पसंद है।"
    },
    {
        "english": "I love to create my own comic books.",
        "pronunciation": "आय लव टू क्रिएट माय ओन कॉमिक बुक्स।",
        "translation": "मुझे अपने खुद के कॉमिक बुक्स बनाना पसंद है।"
    },
    {
        "english": "I like to write short stories.",
        "pronunciation": "आय लाइक टू राइट शॉर्ट स्टोरीज़।",
        "translation": "मुझे लघु कहानियाँ लिखना पसंद है।"
    },
    {
        "english": "I enjoy discovering new places.",
        "pronunciation": "आय एनजॉय डिस्कवेरिंग न्यू प्लेसेज़।",
        "translation": "मुझे नए स्थानों की खोज करना पसंद है।"
    },
    {
        "english": "I love to create my own podcasts.",
        "pronunciation": "आय लव टू क्रिएट माय ओन पॉडकास्ट्स।",
        "translation": "मुझे अपने खुद के पॉडकास्ट बनाना पसंद है।"
    },
    {
        "english": "I like to watch live performances.",
        "pronunciation": "आय लाइक टू वॉच लाइव परफॉर्मेंस।",
        "translation": "मुझे लाइव प्रस्तुतियाँ देखना पसंद है।"
    },
    {
        "english": "I enjoy learning about different cultures.",
        "pronunciation": "आय एनजॉय लर्निंग अबाउट डिफरेंट कल्चर्स।",
        "translation": "मुझे विभिन्न संस्कृतियों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I love to participate in charity runs.",
        "pronunciation": "आय लव टू पार्टिसिपेट इन चैरिटी रन्स।",
        "translation": "मुझे चैरिटी दौड़ों में भाग लेना पसंद है।"
    },
    {
        "english": "I like to read graphic novels.",
        "pronunciation": "आय लाइक टू रीड ग्राफिक नॉवेल्स।",
        "translation": "मुझे ग्राफिक उपन्यास पढ़ना पसंद है।"
    },
    {
        "english": "I enjoy practicing my public speaking skills.",
        "pronunciation": "आय एनजॉय प्रैक्टिसिंग माय पब्लिक स्पीकिंग स्किल्स।",
        "translation": "मुझे अपनी सार्वजनिक बोलने की क्षमता का अभ्यास करना पसंद है।"
    },
    {
        "english": "I love to explore different hiking trails.",
        "pronunciation": "आय लव टू एक्सप्लोर डिफरेंट हाइकिंग ट्रेल्स।",
        "translation": "मुझे विभिन्न ट्रेकिंग रास्तों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I like to create my own YouTube channel.",
        "pronunciation": "आय लाइक टू क्रिएट माय ओन यूट्यूब चैनल।",
        "translation": "मुझे अपना खुद का यूट्यूब चैनल बनाना पसंद है।"
    },
    {
        "english": "I enjoy practicing mindfulness and meditation.",
        "pronunciation": "आय एनजॉय प्रैक्टिसिंग माइंडफुलनेस एंड मेडिटेशन।",
        "translation": "मुझे माइंडफुलनेस और ध्यान का अभ्यास करना पसंद है।"
    },
    {
        "english": "I love to attend concerts.",
        "pronunciation": "आय लव टू अटेंड कॉन्सर्ट्स।",
        "translation": "मुझे कॉन्सर्ट में शामिल होना पसंद है।"
    },
    {
        "english": "I like to visit flea markets.",
        "pronunciation": "आय लाइक टू विज़िट फ्ली मार्केट्स।",
        "translation": "मुझे फ्ली मार्केट में जाना पसंद है।"
    },
    {
        "english": "I enjoy writing blog posts about my interests.",
        "pronunciation": "आय एनजॉय राइटिंग ब्लॉग पोस्ट्स अबाउट माय इंटरेस्ट्स।",
        "translation": "मुझे अपने रुचियों के बारे में ब्लॉग पोस्ट लिखना पसंद है।"
    },
    {
        "english": "I love to connect with nature.",
        "pronunciation": "आय लव टू कनेक्ट विद नेचर।",
        "translation": "मुझे प्रकृति से जुड़ना पसंद है।"
    },
    {
        "english": "I like to explore new technologies.",
        "pronunciation": "आय लाइक टू एक्सप्लोर न्यू टेक्नोलॉजीज़।",
        "translation": "मुझे नई प्रौद्योगिकियों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I enjoy volunteering at community events.",
        "pronunciation": "आय एनजॉय वॉलंटियरिंग एट कम्युनिटी इवेंट्स।",
        "translation": "मुझे सामुदायिक कार्यक्रमों में स्वयंसेवा करना पसंद है।"
    },
    {
        "english": "I love to create my own fitness routine.",
        "pronunciation": "आय लव टू क्रिएट माय ओन फिटनेस रूटीन।",
        "translation": "मुझे अपनी खुद की फिटनेस दिनचर्या बनाना पसंद है।"
    },
    {
        "english": "I like to visit cultural festivals.",
        "pronunciation": "आय लाइक टू विज़िट कल्चरल फेस्टिवल्स।",
        "translation": "मुझे सांस्कृतिक त्योहारों में जाना पसंद है।"
    },
    {
        "english": "I enjoy taking part in team sports.",
        "pronunciation": "आय एनजॉय टेकिंग पार्ट इन टीम स्पोर्ट्स।",
        "translation": "मुझे टीम खेलों में भाग लेना पसंद है।"
    },
    {
        "english": "I love to create my own recipes.",
        "pronunciation": "आय लव टू क्रिएट माय ओन रेसिपीज़।",
        "translation": "मुझे अपनी खुद की रेसिपीज़ बनाना पसंद है।"
    },
    {
        "english": "I like to attend art workshops.",
        "pronunciation": "आय लाइक टू अटेंड आर्ट वर्कशॉप्स।",
        "translation": "मुझे कला कार्यशालाओं में भाग लेना पसंद है।"
    },
    {
        "english": "I enjoy learning about different philosophies.",
        "pronunciation": "आय एनजॉय लर्निंग अबाउट डिफरेंट फिलॉसोफीज़।",
        "translation": "मुझे विभिन्न दार्शनिकताओं के बारे में सीखना पसंद है।"
    },
    {
        "english": "I love to create my own fashion designs.",
        "pronunciation": "आय लव टू क्रिएट माय ओन फैशन डिज़ाइनज़।",
        "translation": "मुझे अपने खुद के फैशन डिज़ाइन बनाना पसंद है।"
    },
    {
        "english": "I like to support environmental initiatives.",
        "pronunciation": "आय लाइक टू सपोर्ट एनवायरनमेंटल इनिशिएटिव्स।",
        "translation": "मुझे पर्यावरणीय पहलों का समर्थन करना पसंद है।"
    },
    {
        "english": "I enjoy going on nature retreats.",
        "pronunciation": "आय एनजॉय गोइंग ऑन नेचर रिट्रीट्स।",
        "translation": "मुझे प्रकृति की छुट्टियों पर जाना पसंद है।"
    },
    {
        "english": "I love to explore historical sites.",
        "pronunciation": "आय लव टू एक्सप्लोर हिस्टोरिकल साइट्स।",
        "translation": "मुझे ऐतिहासिक स्थलों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I like to create my own skincare products.",
        "pronunciation": "आय लाइक टू क्रिएट माय ओन स्किनकेयर प्रोडक्ट्स।",
        "translation": "मुझे अपने खुद के स्किनकेयर उत्पाद बनाना पसंद है।"
    },
    {
        "english": "I enjoy participating in environmental clean-ups.",
        "pronunciation": "आय एनजॉय पार्टिसिपेटिंग इन एनवायरनमेंटल क्लीन-अप्स।",
        "translation": "मुझे पर्यावरणीय सफाई अभियानों में भाग लेना पसंद है।"
    },
    {
        "english": "I love to create my own fantasy stories.",
        "pronunciation": "आय लव टू क्रिएट माय ओन फैंटसी स्टोरीज़।",
        "translation": "मुझे अपनी खुद की कल्पना की कहानियाँ बनाना पसंद है।"
    },
    {
        "english": "I like to watch animated movies.",
        "pronunciation": "आय लाइक टू वॉच एनिमेटेड मूवीज़।",
        "translation": "मुझे एनिमेटेड फिल्में देखना पसंद है।"
    },
    {
        "english": "I enjoy writing letters to my friends.",
        "pronunciation": "आय एनजॉय राइटिंग लेटर्स टू माय फ्रेंड्स।",
        "translation": "मुझे अपने दोस्तों को पत्र लिखना पसंद है।"
    },
    {
        "english": "I love to take long walks in the park.",
        "pronunciation": "आय लव टू टेक लॉन्ग वॉक्स इन द पार्क।",
        "translation": "मुझे पार्क में लंबी सैर करना पसंद है।"
    },
    {
        "english": "I like to learn about different historical events.",
        "pronunciation": "आय लाइक टू लर्न अबाउट डिफरेंट हिस्टोरिकल इवेंट्स।",
        "translation": "मुझे विभिन्न ऐतिहासिक घटनाओं के बारे में सीखना पसंद है।"
    },
    {
        "english": "I enjoy playing board games with friends.",
        "pronunciation": "आय एनजॉय प्लेइंग बोर्ड गेम्स विद फ्रेंड्स।",
        "translation": "मुझे दोस्तों के साथ बोर्ड गेम्स खेलना पसंद है।"
    },
    {
        "english": "I love to create my own workout plans.",
        "pronunciation": "आय लव टू क्रिएट माय ओन वर्कआउट प्लान्स।",
        "translation": "मुझे अपनी खुद की वर्कआउट योजनाएँ बनाना पसंद है।"
    },
    {
        "english": "I like to visit science museums.",
        "pronunciation": "आय लाइक टू विज़िट साइंस म्यूज़ियम।",
        "translation": "मुझे विज्ञान संग्रहालयों में जाना पसंद है।"
    },
    {
        "english": "I enjoy writing travel journals.",
        "pronunciation": "आय एनजॉय राइटिंग ट्रैवल जर्नल्स।",
        "translation": "मुझे यात्रा डायरी लिखना पसंद है।"
    },
    {
        "english": "I love to create my own gardening projects.",
        "pronunciation": "आय लव टू क्रिएट माय ओन गार्डनिंग प्रोजेक्ट्स।",
        "translation": "मुझे अपने खुद के बागवानी प्रोजेक्ट्स बनाना पसंद है।"
    },
    {
        "english": "I like to explore new cuisines.",
        "pronunciation": "आय लाइक टू एक्सप्लोर न्यू क्यूज़ीनज़।",
        "translation": "मुझे नए व्यंजनों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I enjoy learning about different technologies.",
        "pronunciation": "आय एनजॉय लर्निंग अबाउट डिफरेंट टेक्नोलॉजीज़।",
        "translation": "मुझे विभिन्न प्रौद्योगिकियों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I love to create my own travel itineraries.",
        "pronunciation": "आय लव टू क्रिएट माय ओन ट्रैवल इटिनररीज।",
        "translation": "मुझे अपनी खुद की यात्रा योजनाएँ बनाना पसंद है।"
    },
    {
        "english": "I like to watch cooking shows.",
        "pronunciation": "आय लाइक टू वॉच कुकिंग शोज़।",
        "translation": "मुझे खाना पकाने के शो देखना पसंद है।"
    },
    {
        "english": "I enjoy attending cultural workshops.",
        "pronunciation": "आय एनजॉय अटेंडिंग कल्चरल वर्कशॉप्स।",
        "translation": "मुझे सांस्कृतिक कार्यशालाओं में भाग लेना पसंद है।"
    },
    {
        "english": "I love to create my own jewelry designs.",
        "pronunciation": "आय लव टू क्रिएट माय ओन ज्वेलरी डिज़ाइनज़।",
        "translation": "मुझे अपने खुद के आभूषण डिज़ाइन बनाना पसंद है।"
    },
    {
        "english": "I like to connect with friends on social media.",
        "pronunciation": "आय लाइक टू कनेक्ट विद फ्रेंड्स ऑन सोशल मीडिया।",
        "translation": "मुझे सोशल मीडिया पर दोस्तों से जुड़ना पसंद है।"
    },
    {
        "english": "I enjoy writing poetry about my experiences.",
        "pronunciation": "आय एनजॉय राइटिंग पोएट्री अबाउट माय एक्सपीरियंस।",
        "translation": "मुझे अपने अनुभवों के बारे में कविता लिखना पसंद है।"
    },
    {
        "english": "I love to create my own podcasts on various topics.",
        "pronunciation": "आय लव टू क्रिएट माय ओन पॉडकास्ट्स ऑन वेरियस टॉपिक्स।",
        "translation": "मुझे विभिन्न विषयों पर अपने खुद के पॉडकास्ट बनाना पसंद है।"
    },
    {
        "english": "I like to watch nature documentaries.",
        "pronunciation": "आय लाइक टू वॉच नेचर डॉक्यूमेंट्रीज़।",
        "translation": "मुझे प्रकृति की डॉक्यूमेंट्रीज़ देखना पसंद है।"
    },
    {
        "english": "I enjoy attending live theater performances.",
        "pronunciation": "आय एनजॉय अटेंडिंग लाइव थियेटर परफॉर्मेंस।",
        "translation": "मुझे लाइव थियेटर प्रस्तुतियों में भाग लेना पसंद है।"
    },
    {
        "english": "I love to create my own fashion blog.",
        "pronunciation": "आय लव टू क्रिएट माय ओन फैशन ब्लॉग।",
        "translation": "मुझे अपना खुद का फैशन ब्लॉग बनाना पसंद है।"
    },
    {
        "english": "I like to visit botanical gardens.",
        "pronunciation": "आय लाइक टू विज़िट बोटेनिकल गार्डन।",
        "translation": "मुझे बोटैनिकल गार्डन में जाना पसंद है।"
    },
    {
        "english": "I enjoy taking pictures of sunsets.",
        "pronunciation": "आय एनजॉय टेकिंग पिक्चर्स ऑफ सनसेट्स।",
        "translation": "मुझे सूर्यास्त की तस्वीरें लेना पसंद है।"
    },
    {
        "english": "I love to create my own travel blog.",
        "pronunciation": "आय लव टू क्रिएट माय ओन ट्रैवल ब्लॉग।",
        "translation": "मुझे अपना खुद का यात्रा ब्लॉग बनाना पसंद है।"
    },
    {
        "english": "I like to participate in community gardening.",
        "pronunciation": "आय लाइक टू पार्टिसिपेट इन कम्युनिटी गार्डनिंग।",
        "translation": "मुझे सामुदायिक बागवानी में भाग लेना पसंद है।"
    },
    {
        "english": "I enjoy learning about different art forms.",
        "pronunciation": "आय एनजॉय लर्निंग अबाउट डिफरेंट आर्ट फॉर्म्स।",
        "translation": "मुझे विभिन्न कला रूपों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I love to create my own home decor.",
        "pronunciation": "आय लव टू क्रिएट माय ओन होम डेकोर।",
        "translation": "मुझे अपने खुद के होम डेकोर बनाना पसंद है।"
    },
    {
        "english": "I like to visit art fairs.",
        "pronunciation": "आय लाइक टू विज़िट आर्ट फेयर्स।",
        "translation": "मुझे कला मेलों में जाना पसंद है।"
    },
    {
        "english": "I enjoy playing with my pets.",
        "pronunciation": "आय एनजॉय प्लेइंग विद माय पेट्स।",
        "translation": "मुझे अपने पालतू जानवरों के साथ खेलना पसंद है।"
    },
    {
        "english": "I love to create my own wellness routine.",
        "pronunciation": "आय लव टू क्रिएट माय ओन वेलनेस रूटीन।",
        "translation": "मुझे अपनी खुद की स्वास्थ्य दिनचर्या बनाना पसंद है।"
    },
    {
        "english": "I like to learn about different musical genres.",
        "pronunciation": "आय लाइक टू लर्न अबाउट डिफरेंट म्यूज़िकल जेनर्स।",
        "translation": "मुझे विभिन्न संगीत शैलियों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I enjoy visiting local farmers' markets.",
        "pronunciation": "आय एनजॉय विज़िटिंग लोकल फार्मर्स' मार्केट्स।",
        "translation": "मुझे स्थानीय किसान बाजारों में जाना पसंद है।"
    },
    {
        "english": "I love to create my own meditation practices.",
        "pronunciation": "आय लव टू क्रिएट माय ओन मेडिटेशन प्रैक्टिसेज़।",
        "translation": "मुझे अपनी खुद की ध्यान प्रथाएँ बनाना पसंद है।"
    },
    {
        "english": "I like to watch animated series.",
        "pronunciation": "आय लाइक टू वॉच एनिमेटेड सीरीज़।",
        "translation": "मुझे एनिमेटेड सीरीज़ देखना पसंद है।"
    },
    {
        "english": "I enjoy learning about different languages.",
        "pronunciation": "आय एनजॉय लर्निंग अबाउट डिफरेंट लैंग्वेजेज़।",
        "translation": "मुझे विभिन्न भाषाओं के बारे में सीखना पसंद है।"
    },
    {
        "english": "I love to create my own art pieces.",
        "pronunciation": "आय लव टू क्रिएट माय ओन आर्ट पीसेज़।",
        "translation": "मुझे अपनी खुद की कला कृतियाँ बनाना पसंद है।"
    },
    {
        "english": "I like to connect with others on professional networks.",
        "pronunciation": "आय लाइक टू कनेक्ट विद अदर्स ऑन प्रोफेशनल नेटवर्क्स।",
        "translation": "मुझे पेशेवर नेटवर्क पर दूसरों से जुड़ना पसंद है।"
    },
    {
        "english": "I enjoy taking part in local community events.",
        "pronunciation": "आय एनजॉय टेकिंग पार्ट इन लोकल कम्युनिटी इवेंट्स।",
        "translation": "मुझे स्थानीय सामुदायिक कार्यक्रमों में भाग लेना पसंद है।"
    },
    {
        "english": "I love to create my own technology projects.",
        "pronunciation": "आय लव टू क्रिएट माय ओन टेक्नोलॉजी प्रोजेक्ट्स।",
        "translation": "मुझे अपनी खुद की तकनीकी परियोजनाएँ बनाना पसंद है।"
    },
    {
        "english": "I like to explore new career opportunities.",
        "pronunciation": "आय लाइक टू एक्सप्लोर न्यू करियर ऑपर्चुनिटीज़।",
        "translation": "मुझे नए करियर के अवसरों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I enjoy practicing my musical instrument.",
        "pronunciation": "आय एनजॉय प्रैक्टिसिंग माय म्यूज़िकल इंस्ट्रूमेंट।",
        "translation": "मुझे अपने संगीत वाद्य का अभ्यास करना पसंद है।"
    },
    {
        "english": "I love to create my own film projects.",
        "pronunciation": "आय लव टू क्रिएट माय ओन फिल्म प्रोजेक्ट्स।",
        "translation": "मुझे अपनी खुद की फिल्म परियोजनाएँ बनाना पसंद है।"
    },
    {
        "english": "I like to watch sports documentaries.",
        "pronunciation": "आय लाइक टू वॉच स्पोर्ट्स डॉक्यूमेंट्रीज़।",
        "translation": "मुझे खेलों की डॉक्यूमेंट्रीज़ देखना पसंद है।"
    },
    {
        "english": "I enjoy learning about different culinary techniques.",
        "pronunciation": "आय एनजॉय लर्निंग अबाउट डिफरेंट कलिनरी टेक्निक्स।",
        "translation": "मुझे विभिन्न पाक तकनीकों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I love to create my own science experiments.",
        "pronunciation": "आय लव टू क्रिएट माय ओन साइंस एक्सपेरिमेंट्स।",
        "translation": "मुझे अपने खुद के विज्ञान प्रयोग बनाना पसंद है।"
    },
    {
        "english": "I like to visit historical museums.",
        "pronunciation": "आय लाइक टू विज़िट हिस्टोरिकल म्यूज़ियम।",
        "translation": "मुझे ऐतिहासिक संग्रहालयों में जाना पसंद है।"
    },
    {
        "english": "I enjoy practicing yoga and flexibility exercises.",
        "pronunciation": "आय एनजॉय प्रैक्टिसिंग योगा एंड फ्लेक्सिबिलिटी एक्सरसाइजेज़।",
        "translation": "मुझे योग और लचीलापन व्यायाम का अभ्यास करना पसंद है।"
    },
    {
        "english": "I love to create my own online courses.",
        "pronunciation": "आय लव टू क्रिएट माय ओन ऑनलाइन कोर्सेज़।",
        "translation": "मुझे अपने खुद के ऑनलाइन पाठ्यक्रम बनाना पसंद है।"
    },
    {
        "english": "I like to participate in local art exhibitions.",
        "pronunciation": "आय लाइक टू पार्टिसिपेट इन लोकल आर्ट एक्सीबिशन्स।",
        "translation": "मुझे स्थानीय कला प्रदर्शनों में भाग लेना पसंद है।"
    },
    {
        "english": "I enjoy exploring local coffee shops.",
        "pronunciation": "आय एनजॉय एक्सप्लोरिंग लोकल कॉफी शॉप्स।",
        "translation": "मुझे स्थानीय कॉफी की दुकानों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I love to create my own dance routines.",
        "pronunciation": "आय लव टू क्रिएट माय ओन डांस रूटीन।",
        "translation": "मुझे अपनी खुद की नृत्य रूटीन बनाना पसंद है।"
    },
    {
        "english": "I like to watch educational videos.",
        "pronunciation": "आय लाइक टू वॉच एजुकेशनल वीडियो।",
        "translation": "मुझे शैक्षिक वीडियो देखना पसंद है।"
    },
    {
        "english": "I enjoy attending motivational seminars.",
        "pronunciation": "आय एनजॉय अटेंडिंग मोटिवेशनल सेमिनार्स।",
        "translation": "मुझे प्रेरणादायक सेमिनारों में भाग लेना पसंद है।"
    },
    {
        "english": "I love to create my own virtual reality experiences.",
        "pronunciation": "आय लव टू क्रिएट माय ओन वर्चुअल रियालिटी एक्सपीरियंस।",
        "translation": "मुझे अपनी खुद की वर्चुअल रियालिटी अनुभव बनाना पसंद है।"
    },
    {
        "english": "I like to explore local hiking spots.",
        "pronunciation": "आय लाइक टू एक्सप्लोर लोकल हाइकिंग स्पॉट्स।",
        "translation": "मुझे स्थानीय ट्रैकिंग स्थलों का अन्वेषण करना पसंद है।"
    },
    {
        "english": "I enjoy writing about my personal growth.",
        "pronunciation": "आय एनजॉय राइटिंग अबाउट माय पर्सनल ग्रोथ।",
        "translation": "मुझे अपनी व्यक्तिगत वृद्धि के बारे में लिखना पसंद है।"
    },
    {
        "english": "I love to create my own family traditions.",
        "pronunciation": "आय लव टू क्रिएट माय ओन फैमिली ट्रेडिशन्स।",
        "translation": "मुझे अपनी खुद की पारिवारिक परंपराएँ बनाना पसंद है।"
    },
    {
        "english": "I like to watch documentaries about nature.",
        "pronunciation": "आय लाइक टू वॉच डॉक्यूमेंट्रीज़ अबाउट नेचर।",
        "translation": "मुझे प्रकृति के बारे में डॉक्यूमेंट्रीज़ देखना पसंद है।"
    },
    {
        "english": "I enjoy practicing my cooking skills.",
        "pronunciation": "आय एनजॉय प्रैक्टिसिंग माय कुकिंग स्किल्स।",
        "translation": "मुझे अपने खाना पकाने के कौशल का अभ्यास करना पसंद है।"
    },
    {
        "english": "I love to create my own fitness challenges.",
        "pronunciation": "आय लव टू क्रिएट माय ओन फिटनेस चैलेंजेज़।",
        "translation": "मुझे अपनी खुद की फिटनेस चुनौतियाँ बनाना पसंद है।"
    },
    {
        "english": "I like to visit local craft fairs.",
        "pronunciation": "आय लाइक टू विज़िट लोकल क्राफ्ट फेयर्स।",
        "translation": "मुझे स्थानीय हस्तशिल्प मेलों में जाना पसंद है।"
    },
    {
        "english": "I enjoy learning about different cultures through food.",
        "pronunciation": "आय एनजॉय लर्निंग अबाउट डिफरेंट कल्चर्स थ्रू फूड।",
        "translation": "मुझे खाने के माध्यम से विभिन्न संस्कृतियों के बारे में सीखना पसंद है।"
    },
    {
        "english": "I love to create my own community projects.",
        "pronunciation": "आय लव टू क्रिएट माय ओन कम्युनिटी प्रोजेक्ट्स।",
        "translation": "मुझे अपनी खुद की सामुदायिक परियोजनाएँ बनाना पसंद है।"
    },
    {
        "english": "I like to watch family movies.",
        "pronunciation": "आय लाइक टू वॉच फैमिली मूवीज़।",
        "translation": "मुझे पारिवारिक फिल्में देखना पसंद है।"
    },
    {
        "english": "I enjoy exploring historical neighborhoods.",
        "pronunciation": "आय एनजॉय एक्सप्लोरिंग हिस्टोरिकल नेबरहूड्स।",
        "translation": "मुझे ऐतिहासिक पड़ोस का अन्वेषण करना पसंद है।"
    },  
];
const words = [
    {
        "english": "a",
        "pronunciation": "ए",
        "breakdown": "ए (e)",
        "translation": "एक"
    },
    {
        "english": "about",
        "pronunciation": "अबाउट",
        "breakdown": "अ (a) + ब (b) + आ (au) + ट (t)",
        "translation": "के बारे में"
    },
    {
        "english": "above",
        "pronunciation": "अबव",
        "breakdown": "अ (a) + ब (b) + ओ (o) + व (v)",
        "translation": "उपर"
    },
    {
        "english": "across",
        "pronunciation": "अक्रॉस",
        "breakdown": "अ (a) + क्र (cr) + ऑ (o) + स (s)",
        "translation": "पार"
    },
    {
        "english": "act",
        "pronunciation": "एक्ट",
        "breakdown": "अ (a) + क (k) + ट (t)",
        "translation": "कार्य"
    },
    {
        "english": "active",
        "pronunciation": "एक्टिव",
        "breakdown": "अ (a) + क (k) + ट (t) + इ (i) + व (v)",
        "translation": "सक्रिय"
    },
    {
        "english": "activity",
        "pronunciation": "एक्टिविटी",
        "breakdown": "अ (a) + क (k) + ट (t) + इ (i) + व (v) + इ (i) + ट (t) + य (y)",
        "translation": "गतिविधि"
    },
    {
        "english": "add",
        "pronunciation": "ऐड",
        "breakdown": "ऐ (ai) + ड (d)",
        "translation": "जोड़ना"
    },
    {
        "english": "afraid",
        "pronunciation": "अफ्रेड",
        "breakdown": "अ (a) + फ (f) + र (r) + ई (ee) + ड (d)",
        "translation": "डर"
    },
    {
        "english": "after",
        "pronunciation": "आफ्टर",
        "breakdown": "आ (a) + फ (f) + ट (t) + र (r)",
        "translation": "के बाद"
    },
    {
        "english": "again",
        "pronunciation": "अगेन",
        "breakdown": "अ (a) + ग (g) + ए (e) + न (n)",
        "translation": "फिर से"
    },
    {
        "english": "age",
        "pronunciation": "एज",
        "breakdown": "ए (e) + ज (j)",
        "translation": "उम्र"
    },
    {
        "english": "ago",
        "pronunciation": "अगो",
        "breakdown": "अ (a) + ग (g) + ओ (o)",
        "translation": "पहले"
    },
    {
        "english": "agree",
        "pronunciation": "एग्री",
        "breakdown": "ए (e) + ग (g) + र (r) + ई (ee)",
        "translation": "सहमति देना"
    },
    {
        "english": "air",
        "pronunciation": "एयर",
        "breakdown": "ए (e) + इ (i) + र (r)",
        "translation": "हवा"
    },
    {
        "english": "all",
        "pronunciation": "ऑल",
        "breakdown": "ऑ (o) + ल (l)",
        "translation": "सभी"
    },
    {
        "english": "alone",
        "pronunciation": "अलोन",
        "breakdown": "अ (a) + ल (l) + ओ (o) + न (n)",
        "translation": "अकेला"
    },
    {
        "english": "along",
        "pronunciation": "अलॉन्ग",
        "breakdown": "अ (a) + ल (l) + ओ (o) + न (n) + ग (g)",
        "translation": "साथ में"
    },
    {
        "english": "already",
        "pronunciation": "ऑलरेडी",
        "breakdown": "ऑल (al) + र (r) + ए (e) + ड (d) + ई (i)",
        "translation": "पहले ही"
    },
    {
        "english": "always",
        "pronunciation": "ऑलवेज",
        "breakdown": "ऑल (al) + व (w) + ए (e) + ज (j)",
        "translation": "हमेशा"
    },
    {
        "english": "am",
        "pronunciation": "एम",
        "breakdown": "ए (a) + म (m)",
        "translation": "हूं"
    },
    {
        "english": "amount",
        "pronunciation": "अमाउंट",
        "breakdown": "अ (a) + म (m) + आ (au) + उ (u) + न (n) + ट (t)",
        "translation": "राशि"
    },
    {
        "english": "an",
        "pronunciation": "एन",
        "breakdown": "ए (a) + न (n)",
        "translation": "एक"
    },
    {
        "english": "and",
        "pronunciation": "एंड",
        "breakdown": "ए (a) + न (n) + ड (d)",
        "translation": "और"
    },
    {
        "english": "angry",
        "pronunciation": "एंग्री",
        "breakdown": "ए (a) + न (ng) + ग (g) + र (r) + ई (i)",
        "translation": "गुस्सा"
    },
    {
        "english": "another",
        "pronunciation": "अनदर",
        "breakdown": "अ (a) + न (n) + थ (th) + अ (a) + र (r)",
        "translation": "एक और"
    },
    {
        "english": "answer",
        "pronunciation": "आंसर",
        "breakdown": "आ (a) + न (n) + स (s) + र (r)",
        "translation": "उत्तर"
    },
    {
        "english": "any",
        "pronunciation": "एनी",
        "breakdown": "ए (e) + न (n) + ई (i)",
        "translation": "कोई"
    },
    {
        "english": "anyone",
        "pronunciation": "एनीवन",
        "breakdown": "ए (e) + न (n) + ई (i) + व (w) + अ (a) + न (n)",
        "translation": "कोई भी"
    },
    {
        "english": "anything",
        "pronunciation": "एनीथिंग",
        "breakdown": "ए (e) + न (n) + ई (i) + थ (th) + इ (i) + न (n) + ग (g)",
        "translation": "कुछ भी"
    },
    {
        "english": "anytime",
        "pronunciation": "एनीटाइम",
        "breakdown": "ए (e) + न (n) + ई (i) + ट (t) + आई (i) + म (m)",
        "translation": "कभी भी"
    },
    {
        "english": "appear",
        "pronunciation": "अपियर",
        "breakdown": "अ (a) + प (p) + पी (pi) + ए (e) + र (r)",
        "translation": "प्रकट होना"
    },
    {
        "english": "apple",
        "pronunciation": "एप्पल",
        "breakdown": "ऐ (ai) + प (p) + ल (l)",
        "translation": "सेब"
    },
    {
        "english": "are",
        "pronunciation": "आर",
        "breakdown": "आ (a) + र (r)",
        "translation": "हैं"
    },
    {
        "english": "area",
        "pronunciation": "एरिया",
        "breakdown": "ए (e) + र (r) + ई (i) + ए (a)",
        "translation": "क्षेत्र"
    },
    {
        "english": "arm",
        "pronunciation": "आर्म",
        "breakdown": "आ (a) + र (r) + म (m)",
        "translation": "हाथ"
    },
    {
        "english": "army",
        "pronunciation": "आर्मी",
        "breakdown": "आ (a) + र (r) + मी (mi)",
        "translation": "सेना"
    },
    {
        "english": "around",
        "pronunciation": "अराउंड",
        "breakdown": "अ (a) + र (r) + आ (au) + न (n) + ड (d)",
        "translation": "चारों ओर"
    },
    {
        "english": "arrive",
        "pronunciation": "अराइव",
        "breakdown": "अ (a) + र (r) + आई (i) + व (v)",
        "translation": "पहुंचना"
    },
    {
        "english": "art",
        "pronunciation": "आर्ट",
        "breakdown": "आ (a) + र (r) + ट (t)",
        "translation": "कला"
    },
    {
        "english": "as",
        "pronunciation": "ऐज़",
        "breakdown": "ऐ (ai) + ज़ (z)",
        "translation": "जैसे"
    },
    {
        "english": "ask",
        "pronunciation": "आस्क",
        "breakdown": "आ (a) + स (s) + क (k)",
        "translation": "पूछना"
    },
    {
        "english": "at",
        "pronunciation": "ऐट",
        "breakdown": "ऐ (ai) + ट (t)",
        "translation": "पर"
    },
    {
        "english": "attack",
        "pronunciation": "अटैक",
        "breakdown": "अ (a) + ट (t) + ट (t) + ऐ (ai) + क (k)",
        "translation": "हमला"
    },
    {
        "english": "aunt",
        "pronunciation": "आंट",
        "breakdown": "आ (a) + न (n) + ट (t)",
        "translation": "चाची"
    },
    {
        "english": "autumn",
        "pronunciation": "ऑटम",
        "breakdown": "ऑ (o) + ट (t) + म (m)",
        "translation": "पतझड़"
    },
    {
        "english": "away",
        "pronunciation": "अवे",
        "breakdown": "अ (a) + व (w) + ए (e)",
        "translation": "दूर"
    },
    {
        "english": "baby",
        "pronunciation": "बेबि",
        "breakdown": "ब (b) + ए (e) + ब (b) + य (y)",
        "translation": "बच्चा"
    },
    {
        "english": "back",
        "pronunciation": "बैक",
        "breakdown": "ब (b) + ऐ (ai) + क (k)",
        "translation": "पीछे"
    },
    {
        "english": "bad",
        "pronunciation": "बैड",
        "breakdown": "ब (b) + ऐ (ai) + ड (d)",
        "translation": "बुरा"
    },
    {
        "english": "bag",
        "pronunciation": "बैग",
        "breakdown": "ब (b) + ए (a) + ग (g)",
        "translation": "थैला"
    },
    {
        "english": "ball",
        "pronunciation": "बॉल",
        "breakdown": "ब (b) + ऑ (o) + ल (l)",
        "translation": "गेंद"
    },
    {
        "english": "bank",
        "pronunciation": "बैंक",
        "breakdown": "ब (b) + ऐ (ai) + न (n) + क (k)",
        "translation": "बैंक"
    },
    {
        "english": "base",
        "pronunciation": "बेस",
        "breakdown": "ब (b) + ए (e) + स (s)",
        "translation": "आधार"
    },
    {
        "english": "basket",
        "pronunciation": "बास्केट",
        "breakdown": "ब (b) + आ (a) + स (s) + क (k) + ए (e) + ट (t)",
        "translation": "टोकरी"
    },
    {
        "english": "bath",
        "pronunciation": "बाथ",
        "breakdown": "ब (b) + आ (a) + थ (th)",
        "translation": "स्नान"
    },
    {
        "english": "be",
        "pronunciation": "बी",
        "breakdown": "बी (b)",
        "translation": "होना"
    },
    {
        "english": "bean",
        "pronunciation": "बीन",
        "breakdown": "ब (b) + ई (i) + न (n)",
        "translation": "फल"
    },
    {
        "english": "bear",
        "pronunciation": "बियर",
        "breakdown": "ब (b) + ई (i) + र (r)",
        "translation": "भालू"
    },
    {
        "english": "beautiful",
        "pronunciation": "ब्यूटीफुल",
        "breakdown": "ब (b) + यू (u) + टी (t) + फ (f) +ुल (ul)",
        "translation": "सुंदर"
    },
    {
        "english": "bed",
        "pronunciation": "बेड",
        "breakdown": "ब (b) + ई (e) + ड (d)",
        "translation": "बिस्तर"
    },
    {
        "english": "bedroom",
        "pronunciation": "बेडरूम",
        "breakdown": "ब (b) + ई (e) + ड (d) + र (r) + ओ (oo) + म (m)",
        "translation": "शयनकक्ष"
    },
    {
        "english": "beer",
        "pronunciation": "बियर",
        "breakdown": "ब (b) + ई (i) + र (r)",
        "translation": "बीयर"
    },
    {
        "english": "before",
        "pronunciation": "बिफोर",
        "breakdown": "ब (b) + इ (i) + फ (f) + ओ (o) + र (r)",
        "translation": "से पहले"
    },
    {
        "english": "begin",
        "pronunciation": "बिगिन",
        "breakdown": "ब (b) + इ (i) + ग (g) + इ (i) + न (n)",
        "translation": "शुरू करना"
    },
    {
        "english": "behave",
        "pronunciation": "बिहेव",
        "breakdown": "ब (b) + इ (i) + ह (h) + ए (e) + व (v)",
        "translation": "व्यवहार करना"
    },
    {
        "english": "behind",
        "pronunciation": "बिहाइंड",
        "breakdown": "ब (b) + इ (i) + ह (h) + आ (a) + इ (i) + न (n) + ड (d)",
        "translation": "पीछे"
    },
    {
        "english": "bell",
        "pronunciation": "बेल",
        "breakdown": "ब (b) + ए (e) + ल (l)",
        "translation": "घंटी"
    },
    {
        "english": "below",
        "pronunciation": "बिलो",
        "breakdown": "ब (b) + इ (i) + ल (l) + ओ (o)",
        "translation": "नीचे"
    },
    {
        "english": "besides",
        "pronunciation": "बिसाइड्स",
        "breakdown": "ब (b) + इ (i) + स (s) + आइ (i) + ड (d) + स (s)",
        "translation": "के अलावा"
    },
    {
        "english": "best",
        "pronunciation": "बेस्ट",
        "breakdown": "ब (b) + ई (e) + स (s) + ट (t)",
        "translation": "सर्वश्रेष्ठ"
    },
    {
        "english": "better",
        "pronunciation": "बेटर",
        "breakdown": "ब (b) + ई (e) + ट (t) + र (r)",
        "translation": "बेहतर"
    },
    {
        "english": "between",
        "pronunciation": "बीटवीन",
        "breakdown": "बी (b) + ट (t) + व (w) + ई (i) + न (n)",
        "translation": "बीच में"
    },
    {
        "english": "big",
        "pronunciation": "बिग",
        "breakdown": "ब (b) + आई (i) + ग (g)",
        "translation": "बड़ा"
    },
    {
        "english": "bird",
        "pronunciation": "बर्ड",
        "breakdown": "ब (b) + र (r) + ड (d)",
        "translation": "पक्षी"
    },
    {
        "english": "birth",
        "pronunciation": "बर्थ",
        "breakdown": "ब (b) + आ (a) + र (r) + थ (th)",
        "translation": "जन्म"
    },
    {
        "english": "birthday",
        "pronunciation": "बर्थडे",
        "breakdown": "ब (b) + आ (a) + र (r) + थ (th) + ड (d) + ए (e)",
        "translation": "जन्मदिन"
    },
    {
        "english": "bit",
        "pronunciation": "बिट",
        "breakdown": "ब (b) + आई (i) + ट (t)",
        "translation": "थोड़ा"
    },
    {
        "english": "bite",
        "pronunciation": "बाइट",
        "breakdown": "ब (b) + आई (i) + ट (t) + ई (e)",
        "translation": "काटना"
    },
    {
        "english": "black",
        "pronunciation": "ब्लैक",
        "breakdown": "ब (b) + ल (l) + ऐ (ai) + क (k)",
        "translation": "काला"
    },
    {
        "english": "bleed",
        "pronunciation": "ब्लीड",
        "breakdown": "ब (b) + ल (l) + ई (i) + ड (d)",
        "translation": "खून बहना"
    },
    {
        "english": "block",
        "pronunciation": "ब्लॉक",
        "breakdown": "ब (b) + ल (l) + ऑ (o) + क (k)",
        "translation": "ब्लॉक"
    },
    {
        "english": "blood",
        "pronunciation": "ब्लड",
        "breakdown": "ब (b) + ल (l) + ओ (o) + ड (d)",
        "translation": "खून"
    },
    {
        "english": "blow",
        "pronunciation": "ब्लो",
        "breakdown": "ब (b) + ल (l) + ओ (o)",
        "translation": "हवा देना"
    },
    {
        "english": "blue",
        "pronunciation": "ब्लू",
        "breakdown": "ब (b) + ल (l) + यू (u)",
        "translation": "नीला"
    },
    {
        "english": "board",
        "pronunciation": "बोर्ड",
        "breakdown": "ब (b) + ओ (o) + र (r) + ड (d)",
        "translation": "बोर्ड"
    },
    {
        "english": "boat",
        "pronunciation": "बोट",
        "breakdown": "ब (b) + ओ (o) + ट (t)",
        "translation": "नाव"
    },
    {
        "english": "body",
        "pronunciation": "बॉडी",
        "breakdown": "ब (b) + ओ (o) + ड (d) + ई (i)",
        "translation": "शरीर"
    },
    {
        "english": "boil",
        "pronunciation": "बॉयल",
        "breakdown": "ब (b) + ओ (o) + ई (i) + ल (l)",
        "translation": "उबालना"
    },
    {
        "english": "bone",
        "pronunciation": "बोन",
        "breakdown": "ब (b) + ओ (o) + न (n) + ई (e)",
        "translation": "हड्डी"
    },
    {
        "english": "book",
        "pronunciation": "बुक",
        "breakdown": "ब (b) + ओ (o) + क (k)",
        "translation": "पुस्तक"
    },
    {
        "english": "border",
        "pronunciation": "बॉर्डर",
        "breakdown": "ब (b) + ओ (o) + र (r) + ड (d) + ई (i) + र (r)",
        "translation": "सीमा"
    },
    {
        "english": "born",
        "pronunciation": "बॉर्न",
        "breakdown": "ब (b) + ओ (o) + र (r) + न (n)",
        "translation": "जन्मा"
    },
    {
        "english": "borrow",
        "pronunciation": "बॉरो",
        "breakdown": "ब (b) + ओ (o) + र (r) + ओ (o)",
        "translation": "उधार लेना"
    },
    {
        "english": "both",
        "pronunciation": "बोथ",
        "breakdown": "ब (b) + ओ (o) + थ (th)",
        "translation": "दोनों"
    },
    {
        "english": "bottle",
        "pronunciation": "बॉटल",
        "breakdown": "ब (b) + ओ (o) + ट (t) + ल (l)",
        "translation": "बोतल"
    },
    {
        "english": "bottom",
        "pronunciation": "बॉटम",
        "breakdown": "ब (b) + ओ (o) + ट (t) + ट (t) + ओ (o) + म (m)",
        "translation": "तल"
    },
    {
        "english": "bowl",
        "pronunciation": "बोल",
        "breakdown": "ब (b) + ओ (o) + ल (l)",
        "translation": "कटोरा"
    },
    {
        "english": "box",
        "pronunciation": "बॉक्स",
        "breakdown": "ब (b) + ओ (o) + क (k) + स (s)",
        "translation": "डिब्बा"
    },
    {
        "english": "boy",
        "pronunciation": "बॉय",
        "breakdown": "ब (b) + ओ (o) + य (y)",
        "translation": "लड़का"
    },
    {
        "english": "branch",
        "pronunciation": "ब्रांच",
        "breakdown": "ब (b) + आर (r) + ए (a) + न (n) + च (ch)",
        "translation": "शाखा"
    },
    {
        "english": "brave",
        "pronunciation": "ब्रेव",
        "breakdown": "ब (b) + र (r) + ए (a) + व (v)",
        "translation": "बहादुर"
    },
    {
        "english": "bread",
        "pronunciation": "ब्रेड",
        "breakdown": "ब (b) + र (r) + ई (i) + ड (d)",
        "translation": "रोटी"
    },
    {
        "english": "break",
        "pronunciation": "ब्रेक",
        "breakdown": "ब (b) + र (r) + ई (i) + क (k)",
        "translation": "टूटना"
    },
    {
        "english": "breakfast",
        "pronunciation": "ब्रेकफास्ट",
        "breakdown": "ब (b) + र (r) + ई (i) + क (k) + फ (f) + स (s) + ट (t)",
        "translation": "नाश्ता"
    },
    {
        "english": "breathe",
        "pronunciation": "ब्रिद",
        "breakdown": "ब (b) + र (r) + ई (i) + थ (th) + ई (e)",
        "translation": "सांस लेना"
    },
    {
        "english": "bridge",
        "pronunciation": "ब्रिज",
        "breakdown": "ब (b) + आर (r) + आई (i) + ड (d) + ज (j)",
        "translation": "पुल"
    },
    {
        "english": "bright",
        "pronunciation": "ब्राइट",
        "breakdown": "ब (b) + र (r) + आई (i) + ट (t)",
        "translation": "चमकदार"
    },
    {
        "english": "bring",
        "pronunciation": "ब्रिंग",
        "breakdown": "ब (b) + आर (r) + इ (i) + एन (n) + ग (g)",
        "translation": "लाना"
    },
    {
        "english": "brother",
        "pronunciation": "ब्रदर",
        "breakdown": "ब (b) + आर (r) + ओ (o) + थ (th) + र (r)",
        "translation": "भाई"
    },
    {
        "english": "brown",
        "pronunciation": "ब्राउन",
        "breakdown": "ब (b) + आर (r) + औ (au) + न (n)",
        "translation": "भूरा"
    },
    {
        "english": "brush",
        "pronunciation": "ब्रश",
        "breakdown": "ब (b) + आर (r) + अ (a) + श (sh)",
        "translation": "ब्रश"
    },
    {
        "english": "build",
        "pronunciation": "बिल्ड",
        "breakdown": "ब (b) + आई (i) + ल (l) + ड (d)",
        "translation": "बनाना"
    },
    {
        "english": "burn",
        "pronunciation": "बर्न",
        "breakdown": "ब (b) + आ (a) + र (r) + न (n)",
        "translation": "जलाना"
    },
    {
        "english": "busy",
        "pronunciation": "बिजी",
        "breakdown": "ब (b) + इ (i) + ज़ (z) + ई (i)",
        "translation": "व्यस्त"
    },
    {
        "english": "but",
        "pronunciation": "बट",
        "breakdown": "ब (b) + अ (a) + ट (t)",
        "translation": "लेकिन"
    },
    {
        "english": "buy",
        "pronunciation": "बाय",
        "breakdown": "ब (b) + आइ (ai)",
        "translation": "खरीदना"
    },
    {
        "english": "by",
        "pronunciation": "बाई",
        "breakdown": "ब (b) + आ (a) + ई (i)",
        "translation": "द्वारा"
    },
    {
        "english": "cake",
        "pronunciation": "केक",
        "breakdown": "क (k) + ए (e) + क (k)",
        "translation": "केक"
    },
    {
        "english": "call",
        "pronunciation": "काल",
        "breakdown": "क (k) + आ (a) + ल (l)",
        "translation": "बुलाना"
    },
    {
        "english": "can",
        "pronunciation": "कैन",
        "breakdown": "क (k) + ऐ (ai) + न (n)",
        "translation": "करना"
    },
    {
        "english": "cannot",
        "pronunciation": "कैनॉट",
        "breakdown": "क (k) + ऐ (ai) + न (n) + ओ (o) + ट (t)",
        "translation": "नहीं कर सकते"
    },
    {
        "english": "cap",
        "pronunciation": "कैप",
        "breakdown": "क (k) + ए (e) + प (p)",
        "translation": "टोपी"
    },
    {
        "english": "care",
        "pronunciation": "केयर",
        "breakdown": "क (k) + ए (e) + र (r)",
        "translation": "देखभाल करना"
    },
    {
        "english": "car",
        "pronunciation": "कार",
        "breakdown": "क (k) + आ (a) + र (r)",
        "translation": "गाड़ी"
    },
    {
        "english": "card",
        "pronunciation": "कार्ड",
        "breakdown": "क (k) + आ (a) + र (r) + ड (d)",
        "translation": "कार्ड"
    },
    {
        "english": "careful",
        "pronunciation": "केयरफुल",
        "breakdown": "क (k) + ए (e) + र (r) + फ (f) + उ (u) + ल (l)",
        "translation": "सावधान"
    },
    {
        "english": "carry",
        "pronunciation": "केरी",
        "breakdown": "क (k) + ए (e) + र (r) + य (y)",
        "translation": "उठाना"
    },
    {
        "english": "catch",
        "pronunciation": "कैच",
        "breakdown": "क (k) + ए (e) + ट (t) + च (ch)",
        "translation": "पकड़ना"
    },
    {
        "english": "cause",
        "pronunciation": "कॉज",
        "breakdown": "क (k) + ऑ (o) + ज़ (z)",
        "translation": "कारण"
    },
    {
        "english": "ceiling",
        "pronunciation": "सीलिंग",
        "breakdown": "सी (si) + ल (l) + इ (i) + न (n) + ग (g)",
        "translation": "छत"
    },
    {
        "english": "cell",
        "pronunciation": "सेल",
        "breakdown": "स (s) + ई (i) + ल (l)",
        "translation": "कोशिका"
    },
    {
        "english": "cent",
        "pronunciation": "सेंट",
        "breakdown": "स (s) + ई (i) + न (n) + ट (t)",
        "translation": "सेंट"
    },
    {
        "english": "century",
        "pronunciation": "सेंचुरी",
        "breakdown": "स (s) + ई (i) + न (n) + च (ch) + उ (u) + र (r) + ई (i)",
        "translation": "सदी"
    },
    {
        "english": "certain",
        "pronunciation": "सर्टेन",
        "breakdown": "स (s) + ए (e) + र (r) + ट (t) + ई (i) + न (n)",
        "translation": "निश्चित"
    },
    {
        "english": "chain",
        "pronunciation": "चेन",
        "breakdown": "च (ch) + ए (e) + न (n)",
        "translation": "श्रृंखला"
    },
    {
        "english": "chair",
        "pronunciation": "चेयर",
        "breakdown": "च (ch) + ए (e) + र (r)",
        "translation": "कुर्सी"
    },
    {
        "english": "chance",
        "pronunciation": "चांस",
        "breakdown": "च (ch) + ए (a) + न (n) + स (s)",
        "translation": "अवसर"
    },
    {
        "english": "change",
        "pronunciation": "चेंज",
        "breakdown": "च (ch) + ए (a) + न (n) + ज (j)",
        "translation": "बदलना"
    },
    {
        "english": "check",
        "pronunciation": "चेक",
        "breakdown": "च (ch) + ए (e) + क (k)",
        "translation": "जांचना"
    },
    {
        "english": "cheese",
        "pronunciation": "चीज",
        "breakdown": "च (ch) + ई (i) + ज (z)",
        "translation": "पनीर"
    },
    {
        "english": "chicken",
        "pronunciation": "चिकन",
        "breakdown": "च (ch) + इ (i) + क (k) + न (n)",
        "translation": "चिकन"
    },
    {
        "english": "child",
        "pronunciation": "चाइल्ड",
        "breakdown": "च (ch) + आई (i) + ल (l) + ड (d)",
        "translation": "बच्चा"
    },
    {
        "english": "chocolate",
        "pronunciation": "चॉकलेट",
        "breakdown": "च (ch) + ऑ (o) + क (k) + ले (le) + ट (t)",
        "translation": "चॉकलेट"
    },
    {
        "english": "circle",
        "pronunciation": "सर्कल",
        "breakdown": "स (s) + आ (a) + र (r) + क (k) + ल (l)",
        "translation": "गोल"
    },
    {
        "english": "city",
        "pronunciation": "सिटी",
        "breakdown": "स (s) + आई (i) + ट (t) + ई (i)",
        "translation": "शहर"
    },
    {
        "english": "class",
        "pronunciation": "क्लास",
        "breakdown": "क (k) + ल (l) + ए (a) + स (s)",
        "translation": "कक्षा"
    },
    {
        "english": "clean",
        "pronunciation": "क्लीन",
        "breakdown": "क (k) + ल (l) + ई (i) + न (n)",
        "translation": "साफ करना"
    },
    {
        "english": "clear",
        "pronunciation": "क्लियर",
        "breakdown": "क (k) + ल (l) + ई (i) + र (r)",
        "translation": "स्पष्ट"
    },
    {
        "english": "climb",
        "pronunciation": "क्लाइम",
        "breakdown": "क (k) + ल (l) + आई (i) + म (m)",
        "translation": "चढ़ाई करना"
    },
    {
        "english": "close",
        "pronunciation": "क्लोज",
        "breakdown": "क (k) + ल (l) + ओ (o) + ज़ (z)",
        "translation": "बंद करना"
    },
    {
        "english": "clothes",
        "pronunciation": "क्लोथ्स",
        "breakdown": "क (k) + ल (l) + ओ (o) + थ (th) + स (s)",
        "translation": "कपड़े"
    },
    {
        "english": "cloud",
        "pronunciation": "क्लाउड",
        "breakdown": "क (k) + ल (l) + ऑ (o) + ड (d)",
        "translation": "बादल"
    },
    {
        "english": "coffee",
        "pronunciation": "कॉफी",
        "breakdown": "क (k) + ऑ (o) + फ (f) + ई (i)",
        "translation": "कॉफी"
    },
    {
        "english": "cold",
        "pronunciation": "कोल्ड",
        "breakdown": "क (k) + ओ (o) + ल (l) + ड (d)",
        "translation": "ठंडा"
    },
    {
        "english": "color",
        "pronunciation": "कलर",
        "breakdown": "क (k) + ओ (o) + ल (l) + र (r)",
        "translation": "रंग"
    },
    {
        "english": "come",
        "pronunciation": "कम",
        "breakdown": "क (k) + ओ (o) + म (m)",
        "translation": "आना"
    },
    {
        "english": "common",
        "pronunciation": "कॉमन",
        "breakdown": "क (k) + ऑ (o) + म (m) + ओ (o) + न (n)",
        "translation": "सामान्य"
    },
    {
        "english": "cook",
        "pronunciation": "कुक",
        "breakdown": "क (k) + ओ (o) + क (k)",
        "translation": "पकाना"
    },
    {
        "english": "cool",
        "pronunciation": "कूल",
        "breakdown": "क (k) + ओ (o) + ल (l)",
        "translation": "ठंडा"
    },
    {
        "english": "corn",
        "pronunciation": "कॉर्न",
        "breakdown": "क (k) + ओ (o) + र (r) + न (n)",
        "translation": "मक्का"
    },
    {
        "english": "cost",
        "pronunciation": "कॉस्ट",
        "breakdown": "क (k) + ऑ (o) + स (s) + ट (t)",
        "translation": "लागत"
    },
    {
        "english": "could",
        "pronunciation": "कुड",
        "breakdown": "क (k) + ओ (o) + ड (d)",
        "translation": "कर सकता था"
    },
    {
        "english": "count",
        "pronunciation": "काउंट",
        "breakdown": "क (k) + आउ (au) + न (n) + ट (t)",
        "translation": "गिनती करना"
    },
    {
        "english": "country",
        "pronunciation": "कंट्री",
        "breakdown": "क (k) + ए (a) + न (n) + ट (t) + र (r) + ई (i)",
        "translation": "देश"
    },
    {
        "english": "course",
        "pronunciation": "कोर्स",
        "breakdown": "क (k) + ओ (o) + र (r) + स (s)",
        "translation": "कोर्स"
    },
    {
        "english": "cousin",
        "pronunciation": "कज़िन",
        "breakdown": "क (k) + अ (a) + ज़ (z) + इ (i) + न (n)",
        "translation": "कज़िन"
    },
    {
        "english": "cup",
        "pronunciation": "कप",
        "breakdown": "क (k) + उ (u) + प (p)",
        "translation": "कप"
    },
    {
        "english": "cut",
        "pronunciation": "कट",
        "breakdown": "क (k) + उ (u) + ट (t)",
        "translation": "कटना"
    },
    {
        "english": "dark",
        "pronunciation": "डार्क",
        "breakdown": "ड (d) + आ (a) + र (r) + क (k)",
        "translation": "अंधेरा"
    },
    {
        "english": "date",
        "pronunciation": "डेट",
        "breakdown": "ड (d) + ए (e) + ट (t)",
        "translation": "तारीख"
    },
    {
        "english": "daughter",
        "pronunciation": "डॉटर",
        "breakdown": "ड (d) + ऑ (o) + ट (t) + र (r)",
        "translation": "बेटी"
    },
    {
        "english": "day",
        "pronunciation": "डे",
        "breakdown": "ड (d) + ए (e)",
        "translation": "दिन"
    },
    {
        "english": "dead",
        "pronunciation": "डेड",
        "breakdown": "ड (d) + ई (i) + ड (d)",
        "translation": "मृत"
    },
    {
        "english": "decide",
        "pronunciation": "डिसाइड",
        "breakdown": "ड (d) + ई (i) + स (s) + आइ (ai) + ड (d)",
        "translation": "निर्णय लेना"
    },
    {
        "english": "deep",
        "pronunciation": "डीप",
        "breakdown": "ड (d) + ई (i) + प (p)",
        "translation": "गहरा"
    },
    {
        "english": "defend",
        "pronunciation": "डिफेंड",
        "breakdown": "ड (d) + ई (i) + फ (f) + ए (e) + न (n) + ड (d)",
        "translation": "रक्षा करना"
    },
    {
        "english": "define",
        "pronunciation": "डिफाइन",
        "breakdown": "ड (d) + आई (i) + फ (f) + आई (i) + न (n)",
        "translation": "परिभाषित करना"
    },
    {
        "english": "delay",
        "pronunciation": "डिले",
        "breakdown": "ड (d) + ई (i) + ल (l) + ए (e)",
        "translation": "विलंब करना"
    },
    {
        "english": "delete",
        "pronunciation": "डिलीट",
        "breakdown": "ड (d) + ई (i) + ल (l) + ई (i) + ट (t)",
        "translation": "हटाना"
    },
    {
        "english": "depend",
        "pronunciation": "डिपेंड",
        "breakdown": "ड (d) + ई (i) + प (p) + ई (e) + न (n) + ड (d)",
        "translation": "निर्भर रहना"
    },
    {
        "english": "describe",
        "pronunciation": "डिस्क्राइब",
        "breakdown": "ड (d) + ई (i) + स (s) + क (k) + र (r) + आइ (ai) + ब (b)",
        "translation": "विवरण देना"
    },
    {
        "english": "design",
        "pronunciation": "डिजाइन",
        "breakdown": "ड (d) + आई (i) + ज़ (z) + आई (i) + न (n)",
        "translation": "डिजाइन करना"
    },
    {
        "english": "destroy",
        "pronunciation": "डिस्ट्रॉय",
        "breakdown": "ड (d) + ई (i) + स (s) + ट (t) + र (r) + ऑ (o) + य (y)",
        "translation": "नाश करना"
    },
    {
        "english": "develop",
        "pronunciation": "डेवलप",
        "breakdown": "ड (d) + ई (i) + व (v) + ए (e) + ल (l) + प (p)",
        "translation": "विकसित करना"
    },
    {
        "english": "different",
        "pronunciation": "डिफरेंट",
        "breakdown": "ड (d) + आई (i) + फ (f) + ई (i) + र (r) + ए (e) + न (n) + ट (t)",
        "translation": "अलग"
    },
    {
        "english": "difficult",
        "pronunciation": "डिफिकल्ट",
        "breakdown": "ड (d) + आई (i) + फ (f) + इ (i) + क (k) + ल (l) + ट (t)",
        "translation": "कठिन"
    },
    {
        "english": "dinner",
        "pronunciation": "डिनर",
        "breakdown": "ड (d) + इ (i) + न (n) + र (r)",
        "translation": "रात का खाना"
    },
    {
        "english": "discover",
        "pronunciation": "डिस्कवर",
        "breakdown": "ड (d) + आई (i) + स (s) + क (k) + ओ (o) + व (v) + र (r)",
        "translation": "खोजना"
    },
    {
        "english": "discuss",
        "pronunciation": "डिस्कस",
        "breakdown": "ड (d) + आई (i) + स (s) + क (k) + अ (a) + स (s)",
        "translation": "चर्चा करना"
    },
    {
        "english": "disease",
        "pronunciation": "डिजीज",
        "breakdown": "ड (d) + आई (i) + ज़ (z) + ई (i) + स (s)",
        "translation": "रोग"
    },
    {
        "english": "do",
        "pronunciation": "डू",
        "breakdown": "ड (d) + ओ (o)",
        "translation": "करना"
    },
    {
        "english": "dog",
        "pronunciation": "डॉग",
        "breakdown": "ड (d) + ओ (o) + ग (g)",
        "translation": "कुत्ता"
    },
    {
        "english": "door",
        "pronunciation": "डोर",
        "breakdown": "ड (d) + ओ (o) + र (r)",
        "translation": "दरवाज़ा"
    },
    {
        "english": "down",
        "pronunciation": "डाउन",
        "breakdown": "ड (d) + औ (au) + न (n)",
        "translation": "नीचे"
    },
    {
        "english": "draw",
        "pronunciation": "ड्रॉ",
        "breakdown": "ड (d) + र (r) + ओ (o)",
        "translation": "खींचना"
    },
    {
        "english": "drink",
        "pronunciation": "ड्रिंक",
        "breakdown": "ड (d) + र (r) + इ (i) + न (n) + क (k)",
        "translation": "पीना"
    },
    {
        "english": "drive",
        "pronunciation": "ड्राइव",
        "breakdown": "ड (d) + र (r) + आइ (ai) + व (v)",
        "translation": "चलाना"
    },
    {
        "english": "drop",
        "pronunciation": "ड्रॉप",
        "breakdown": "ड (d) + र (r) + ऑ (o) + प (p)",
        "translation": "गिराना"
    },
    {
        "english": "dry",
        "pronunciation": "ड्राई",
        "breakdown": "ड (d) + र (r) + आई (i)",
        "translation": "सूखा"
    },
    {
        "english": "duty",
        "pronunciation": "ड्यूटी",
        "breakdown": "ड (d) + यू (u) + ट (t) + ई (i)",
        "translation": "कर्तव्य"
    },
    {
        "english": "each",
        "pronunciation": "ईच",
        "breakdown": "ई (i) + च (ch)",
        "translation": "प्रत्येक"
    },
    {
        "english": "ear",
        "pronunciation": "इयर",
        "breakdown": "इ (i) + य (y) + र (r)",
        "translation": "कान"
    },
    {
        "english": "earth",
        "pronunciation": "अर्थ",
        "breakdown": "अ (a) + र (r) + थ (th)",
        "translation": "पृथ्वी"
    },
    {
        "english": "easy",
        "pronunciation": "ईज़ी",
        "breakdown": "ई (i) + ज़ (z) + ई (i)",
        "translation": "आसान"
    },
    {
        "english": "eat",
        "pronunciation": "ईट",
        "breakdown": "ई (i) + ट (t)",
        "translation": "खाना"
    },
    {
        "english": "education",
        "pronunciation": "एजुकेशन",
        "breakdown": "ए (e) + ड (d) + ज (j) + यू (u) + के (ke) + श (sh) + न (n)",
        "translation": "शिक्षा"
    },
    {
        "english": "effect",
        "pronunciation": "इफेक्ट",
        "breakdown": "इ (i) + फ (f) + ए (e) + क (k) + ट (t)",
        "translation": "प्रभाव"
    },
    {
        "english": "effort",
        "pronunciation": "एफर्ट",
        "breakdown": "ए (e) + फ (f) + अ (a) + र (r) + ट (t)",
        "translation": "प्रयास"
    },
    {
        "english": "egg",
        "pronunciation": "एग",
        "breakdown": "ए (e) + ग (g)",
        "translation": "अंडा"
    },
    {
        "english": "eight",
        "pronunciation": "एट",
        "breakdown": "ए (e) + आई (i) + ट (t)",
        "translation": "आठ"
    },
    {
        "english": "eighteen",
        "pronunciation": "एटीं",
        "breakdown": "ए (e) + आई (i) + ट (t) + ई (i) + न (n)",
        "translation": "अठारह"
    },
    {
        "english": "eighty",
        "pronunciation": "एटी",
        "breakdown": "ए (e) + आई (i) + ट (t) + ई (i)",
        "translation": "अस्सी"
    },
    {
        "english": "either",
        "pronunciation": "ईथर",
        "breakdown": "ई (i) + थ (th) + र (r)",
        "translation": "या"
    },
    {
        "english": "else",
        "pronunciation": "एल्स",
        "breakdown": "ए (e) + ल (l) + स (s)",
        "translation": "अन्य"
    },
    {
        "english": "end",
        "pronunciation": "एंड",
        "breakdown": "ए (e) + न (n) + ड (d)",
        "translation": "अंत"
    },
    {
        "english": "enemy",
        "pronunciation": "एनमी",
        "breakdown": "ए (e) + न (n) + इ (i) + म (m) + ई (i)",
        "translation": "दुश्मन"
    },
    {
        "english": "enjoy",
        "pronunciation": "एनजॉय",
        "breakdown": "ए (e) + न (n) + ज (j) + औ (o) + य (y)",
        "translation": "आनंद लेना"
    },
    {
        "english": "enough",
        "pronunciation": "एनफ",
        "breakdown": "ए (e) + न (n) + अ (a) + फ (f)",
        "translation": "पर्याप्त"
    },
    {
        "english": "enter",
        "pronunciation": "एंटर",
        "breakdown": "ए (e) + न (n) + ट (t) + र (r)",
        "translation": "प्रवेश करना"
    },
    {
        "english": "equal",
        "pronunciation": "ईक्वल",
        "breakdown": "ई (i) + क (k) + व (v) + अ (a) + ल (l)",
        "translation": "समान"
    },
    {
        "english": "especially",
        "pronunciation": "एस्पेशियली",
        "breakdown": "ई (i) + स (s) + प (p) + ई (i) + श (sh) + ल (l) + ई (i)",
        "translation": "विशेष रूप से"
    },
    {
        "english": "even",
        "pronunciation": "ईवेन",
        "breakdown": "ई (i) + व (v) + ई (i) + न (n)",
        "translation": "यहाँ तक कि"
    },
    {
        "english": "ever",
        "pronunciation": "एवर",
        "breakdown": "ए (e) + व (v) + र (r)",
        "translation": "कभी"
    },
    {
        "english": "every",
        "pronunciation": "एवरी",
        "breakdown": "ए (e) + व (v) + र (r) + ई (i)",
        "translation": "हर"
    },
    {
        "english": "exactly",
        "pronunciation": "एक्सैक्टली",
        "breakdown": "ई (i) + क (k) + ज़ (z) + ए (a) + क (k) + ट (t) + ल (l) + ई (i)",
        "translation": "सही सही"
    },
    {
        "english": "example",
        "pronunciation": "एक्जाम्पल",
        "breakdown": "ई (i) + क (k) + ज़ (z) + ए (a) + म (m) + प (p) + ल (l)",
        "translation": "उदाहरण"
    },
    {
        "english": "excellent",
        "pronunciation": "एक्सीलेंट",
        "breakdown": "ई (i) + क (k) + ज़ (z) + ई (i) + ल (l) + ए (a) + न (n) + ट (t)",
        "translation": "उत्तम"
    },
    {
        "english": "excuse",
        "pronunciation": "एक्सक्यूज़",
        "breakdown": "ई (i) + क (k) + स (s) + क (k) + यू (u) + ज़ (z)",
        "translation": "क्षमा करना"
    },
    {
        "english": "exercise",
        "pronunciation": "एक्सरसाइज",
        "breakdown": "ई (i) + क (k) + स (s) + ए (e) + र (r) + स (s) + आइ (i) + ज़ (z)",
        "translation": "व्यायाम"
    },
    {
        "english": "exist",
        "pronunciation": "एक्सिस्ट",
        "breakdown": "ई (i) + क (k) + ज़ (z) + आई (i) + स (s) + ट (t)",
        "translation": "अस्तित्व में रहना"
    },
    {
        "english": "expect",
        "pronunciation": "एक्सपेक्ट",
        "breakdown": "ई (i) + क (k) + स (s) + प (p) + ई (i) + क (k) + ट (t)",
        "translation": "उम्मीद करना"
    },
    {
        "english": "explain",
        "pronunciation": "एक्सप्लेन",
        "breakdown": "ई (i) + क (k) + स (s) + प (p) + ल (l) + ए (e) + न (n)",
        "translation": "समझाना"
    },
    {
        "english": "explore",
        "pronunciation": "एक्सप्लोर",
        "breakdown": "ई (i) + क (k) + स (s) + प (p) + ल (l) + ओ (o) + र (r)",
        "translation": "खोज करना"
    },
    {
        "english": "eye",
        "pronunciation": "आई",
        "breakdown": "आ (a) + ई (i)",
        "translation": "आँख"
    },
    {
        "english": "face",
        "pronunciation": "फेस",
        "breakdown": "फ (f) + ए (a) + स (s)",
        "translation": "चेहरा"
    },
    {
        "english": "fact",
        "pronunciation": "फैक्ट",
        "breakdown": "फ (f) + ए (a) + क (k) + ट (t)",
        "translation": "तथ्य"
    },
    {
        "english": "fail",
        "pronunciation": "फेल",
        "breakdown": "फ (f) + ए (a) + ल (l)",
        "translation": "विफल होना"
    },
    {
        "english": "fall",
        "pronunciation": "फॉल",
        "breakdown": "फ (f) + ऑ (o) + ल (l)",
        "translation": "गिरना"
    },
    {
        "english": "family",
        "pronunciation": "फैमिली",
        "breakdown": "फ (f) + ए (a) + म (m) + इ (i) + ल (l) + ई (i)",
        "translation": "परिवार"
    },
    {
        "english": "far",
        "pronunciation": "फार",
        "breakdown": "फ (f) + आ (a) + र (r)",
        "translation": "दूर"
    },
    {
        "english": "fast",
        "pronunciation": "फास्ट",
        "breakdown": "फ (f) + आ (a) + स (s) + ट (t)",
        "translation": "तेज़"
    },
    {
        "english": "father",
        "pronunciation": "फादर",
        "breakdown": "फ (f) + आ (a) + ड (d) + र (r)",
        "translation": "पिता"
    },
    {
        "english": "favorite",
        "pronunciation": "फेवरेट",
        "breakdown": "फ (f) + ए (a) + व (v) + र (r) + आई (i) + ट (t)",
        "translation": "पसंदीदा"
    },
    {
        "english": "fear",
        "pronunciation": "फियर",
        "breakdown": "फ (f) + इ (i) + य (y) + र (r)",
        "translation": "डर"
    },
    {
        "english": "feeling",
        "pronunciation": "फीलिंग",
        "breakdown": "फ (f) + ई (i) + ल (l) + इ (i) + न (n) + ग (g)",
        "translation": "महसूस करना"
    },
    {
        "english": "few",
        "pronunciation": "फ्यू",
        "breakdown": "फ (f) + यू (u)",
        "translation": "कुछ"
    },
    {
        "english": "field",
        "pronunciation": "फील्ड",
        "breakdown": "फ (f) + ई (i) + ल (l) + ड (d)",
        "translation": "क्षेत्र"
    },
    {
        "english": "fight",
        "pronunciation": "फाइट",
        "breakdown": "फ (f) + आई (i) + ट (t)",
        "translation": "लड़ाई"
    },
    {
        "english": "find",
        "pronunciation": "फाइंड",
        "breakdown": "फ (f) + आई (i) + न (n) + ड (d)",
        "translation": "खोजना"
    },
    {
        "english": "fine",
        "pronunciation": "फाइन",
        "breakdown": "फ (f) + आई (i) + न (n)",
        "translation": "ठीक"
    },
    {
        "english": "finish",
        "pronunciation": "फिनिश",
        "breakdown": "फ (f) + आई (i) + न (n) + इ (i) + श (sh)",
        "translation": "खत्म करना"
    },
    {
        "english": "first",
        "pronunciation": "फर्स्ट",
        "breakdown": "फ (f) + इ (i) + र (r) + स (s) + ट (t)",
        "translation": "पहला"
    },
    {
        "english": "five",
        "pronunciation": "फाइव",
        "breakdown": "फ (f) + आई (i) + व (v)",
        "translation": "पाँच"
    },
    {
        "english": "floor",
        "pronunciation": "फ्लोर",
        "breakdown": "फ (f) + ल (l) + ओ (o) + र (r)",
        "translation": "फर्श"
    },
    {
        "english": "flower",
        "pronunciation": "फ्लॉवर",
        "breakdown": "फ (f) + ल (l) + ऑ (o) + व (v) + र (r)",
        "translation": "फूल"
    },
    {
        "english": "fly",
        "pronunciation": "फ्लाई",
        "breakdown": "फ (f) + ल (l) + आई (i)",
        "translation": "उड़ना"
    },
    {
        "english": "follow",
        "pronunciation": "फॉलो",
        "breakdown": "फ (f) + ऑ (o) + ल (l) + ओ (o)",
        "translation": "पीछा करना"
    },
    {
        "english": "food",
        "pronunciation": "फूड",
        "breakdown": "फ (f) + ओ (o) + ड (d)",
        "translation": "खाना"
    },
    {
        "english": "for",
        "pronunciation": "फॉर",
        "breakdown": "फ (f) + ऑ (o) + र (r)",
        "translation": "के लिए"
    },
    {
        "english": "forget",
        "pronunciation": "फॉरगेट",
        "breakdown": "फ (f) + ऑ (o) + र (r) + ग (g) + इ (i) + ट (t)",
        "translation": "भूलना"
    },
    {
        "english": "form",
        "pronunciation": "फॉर्म",
        "breakdown": "फ (f) + ऑ (o) + र (r) + म (m)",
        "translation": "फार्म"
    },
    {
        "english": "friend",
        "pronunciation": "फ्रेंड",
        "breakdown": "फ (f) + र (r) + इ (i) + ए (e) + न (n) + ड (d)",
        "translation": "मित्र"
    },
    {
        "english": "from",
        "pronunciation": "फ्रॉम",
        "breakdown": "फ (f) + र (r) + ओ (o) + म (m)",
        "translation": "से"
    },
    {
        "english": "full",
        "pronunciation": "फुल",
        "breakdown": "फ (f) + यू (u) + ल (l)",
        "translation": "पूर्ण"
    },
    {
        "english": "fun",
        "pronunciation": "फन",
        "breakdown": "फ (f) + यू (u) + न (n)",
        "translation": "मज़ा"
    },
    {
        "english": "future",
        "pronunciation": "फ्यूचर",
        "breakdown": "फ (f) + यू (u) + ट (t) + च (ch) + र (r)",
        "translation": "भविष्य"
    },
    {
        "english": "game",
        "pronunciation": "गेम",
        "breakdown": "ग (g) + ए (a) + म (m)",
        "translation": "खेल"
    },
    {
        "english": "garden",
        "pronunciation": "गार्डन",
        "breakdown": "ग (g) + आ (a) + र (r) + ड (d) + न (n)",
        "translation": "बाग़"
    },
    {
        "english": "gas",
        "pronunciation": "गैस",
        "breakdown": "ग (g) + ए (a) + स (s)",
        "translation": "गैस"
    },
    {
        "english": "general",
        "pronunciation": "जनरल",
        "breakdown": "ज (j) + ए (e) + न (n) + र (r) + अ (a) + ल (l)",
        "translation": "सामान्य"
    },
    {
        "english": "get",
        "pronunciation": "गेट",
        "breakdown": "ग (g) + ए (e) + ट (t)",
        "translation": "पाना"
    },
    {
        "english": "give",
        "pronunciation": "गिव",
        "breakdown": "ग (g) + इ (i) + व (v)",
        "translation": "देना"
    },
    {
        "english": "glad",
        "pronunciation": "ग्लैड",
        "breakdown": "ग (g) + ल (l) + ऐ (a) + ड (d)",
        "translation": "खुश"
    },
    {
        "english": "glass",
        "pronunciation": "ग्लास",
        "breakdown": "ग (g) + ल (l) + ए (a) + स (s)",
        "translation": "गिलास"
    },
    {
        "english": "go",
        "pronunciation": "गो",
        "breakdown": "ग (g) + ओ (o)",
        "translation": "जाना"
    },
    {
        "english": "good",
        "pronunciation": "गुड",
        "breakdown": "ग (g) + उ (u) + ड (d)",
        "translation": "अच्छा"
    },
    {
        "english": "great",
        "pronunciation": "ग्रेट",
        "breakdown": "ग (g) + र (r) + ए (e) + ट (t)",
        "translation": "महान"
    },
    {
        "english": "green",
        "pronunciation": "ग्रीन",
        "breakdown": "ग (g) + री (ri) + न (n)",
        "translation": "हरा"
    },
    {
        "english": "ground",
        "pronunciation": "ग्राउंड",
        "breakdown": "ग (g) + र (r) + आउ (ou) + न (n) + ड (d)",
        "translation": "ज़मीन"
    },
    {
        "english": "group",
        "pronunciation": "ग्रुप",
        "breakdown": "ग (g) + र (r) + यू (u) + प (p)",
        "translation": "समूह"
    },
    {
        "english": "grow",
        "pronunciation": "ग्रो",
        "breakdown": "ग (g) + र (r) + ओ (o)",
        "translation": "बढ़ना"
    },
    {
        "english": "guess",
        "pronunciation": "गेस",
        "breakdown": "ग (g) + ए (e) + स (s)",
        "translation": "अनुमान लगाना"
    },
    {
        "english": "hair",
        "pronunciation": "हेयर",
        "breakdown": "ह (h) + ए (a) + य (y) + र (r)",
        "translation": "बाल"
    },
    {
        "english": "half",
        "pronunciation": "हाफ",
        "breakdown": "ह (h) + ए (a) + फ (f)",
        "translation": "आधा"
    },
    {
        "english": "hall",
        "pronunciation": "हॉल",
        "breakdown": "ह (h) + ऑ (o) + ल (l)",
        "translation": "हाल"
    },
    {
        "english": "hammer",
        "pronunciation": "हैमर",
        "breakdown": "ह (h) + ए (a) + म (m) + म (m) + र (r)",
        "translation": "हथौड़ी"
    },
    {
        "english": "hand",
        "pronunciation": "हैंड",
        "breakdown": "ह (h) + ए (a) + न (n) + ड (d)",
        "translation": "हाथ"
    },
    {
        "english": "happen",
        "pronunciation": "हैपन",
        "breakdown": "ह (h) + ए (a) + प (p) + न (n)",
        "translation": "घटना"
    },
    {
        "english": "happy",
        "pronunciation": "हैप्पी",
        "breakdown": "ह (h) + ए (a) + प (p) + ई (i)",
        "translation": "खुश"
    },
    {
        "english": "hard",
        "pronunciation": "हार्ड",
        "breakdown": "ह (h) + आ (a) + र (r) + ड (d)",
        "translation": "कठिन"
    },
    {
        "english": "hat",
        "pronunciation": "हैट",
        "breakdown": "ह (h) + ए (a) + ट (t)",
        "translation": "टोपी"
    },
    {
        "english": "hate",
        "pronunciation": "हेट",
        "breakdown": "ह (h) + ए (a) + ट (t)",
        "translation": "घृणा करना"
    },
    {
        "english": "have",
        "pronunciation": "हैव",
        "breakdown": "ह (h) + ए (a) + व (v)",
        "translation": "है"
    },
    {
        "english": "he",
        "pronunciation": "ही",
        "breakdown": "ह (h) + ई (i)",
        "translation": "वह"
    },
    {
        "english": "head",
        "pronunciation": "हेड",
        "breakdown": "ह (h) + ई (e) + ड (d)",
        "translation": "सर"
    },
    {
        "english": "healthy",
        "pronunciation": "हेल्दी",
        "breakdown": "ह (h) + ई (e) + ल (l) + ड (d) +ी (y)",
        "translation": "स्वस्थ"
    },
    {
        "english": "hear",
        "pronunciation": "हीर",
        "breakdown": "ह (h) + ई (i) + र (r)",
        "translation": "सुनना"
    },
    {
        "english": "heart",
        "pronunciation": "हार्ट",
        "breakdown": "ह (h) + ई (e) + र (r) + ट (t)",
        "translation": "दिल"
    },
    {
        "english": "heaven",
        "pronunciation": "हेवेन",
        "breakdown": "ह (h) + ए (e) + व (v) + ए (e) + न (n)",
        "translation": "स्वर्ग"
    },
    {
        "english": "heavy",
        "pronunciation": "हेवी",
        "breakdown": "ह (h) + ई (e) + व (v) + य (y)",
        "translation": "भारी"
    },
    {
        "english": "height",
        "pronunciation": "हाइट",
        "breakdown": "ह (h) + आई (i) + ट (t)",
        "translation": "ऊँचाई"
    },
    {
        "english": "hello",
        "pronunciation": "हैलो",
        "breakdown": "ह (h) + ए (e) + ल (l) + ओ (o)",
        "translation": "नमस्ते"
    },
    {
        "english": "help",
        "pronunciation": "हेल्प",
        "breakdown": "ह (h) + ई (e) + ल (l) + प (p)",
        "translation": "मदद करना"
    },
    {
        "english": "hen",
        "pronunciation": "हैन",
        "breakdown": "ह (h) + ए (e) + न (n)",
        "translation": "मुर्गी"
    },
    {
        "english": "her",
        "pronunciation": "हर",
        "breakdown": "ह (h) + ए (e) + र (r)",
        "translation": "उसका"
    },
    {
        "english": "here",
        "pronunciation": "हीर",
        "breakdown": "ह (h) + ई (i) + र (r)",
        "translation": "यहाँ"
    },
    {
        "english": "hers",
        "pronunciation": "हरज़",
        "breakdown": "ह (h) + ए (e) + र (r) + ज़ (z)",
        "translation": "उसका (महिलाओं के लिए)"
    },
    {
        "english": "hide",
        "pronunciation": "हाइड",
        "breakdown": "ह (h) + आई (i) + ड (d)",
        "translation": "छिपाना"
    },
    {
        "english": "high",
        "pronunciation": "हाई",
        "breakdown": "ह (h) + आई (i)",
        "translation": "उच्च"
    },
    {
        "english": "hill",
        "pronunciation": "हिल",
        "breakdown": "ह (h) + आई (i) + ल (l)",
        "translation": "पहाड़ी"
    },
    {
        "english": "him",
        "pronunciation": "हिम",
        "breakdown": "ह (h) + इ (i) + म (m)",
        "translation": "उसे"
    },
    {
        "english": "his",
        "pronunciation": "हिज़",
        "breakdown": "ह (h) + इ (i) + ज़ (z)",
        "translation": "उसका"
    },
    {
        "english": "hit",
        "pronunciation": "हिट",
        "breakdown": "ह (h) + आई (i) + ट (t)",
        "translation": "मारना"
    },
    {
        "english": "hobby",
        "pronunciation": "हॉबी",
        "breakdown": "ह (h) + ऑ (o) + ब (b) + ई (i)",
        "translation": "शौक"
    },
    {
        "english": "hold",
        "pronunciation": "होल्ड",
        "breakdown": "ह (h) + ओ (o) + ल (l) + ड (d)",
        "translation": "धारण करना"
    },
    {
        "english": "hole",
        "pronunciation": "होल",
        "breakdown": "ह (h) + ओ (o) + ल (l) + ई (i)",
        "translation": "छिद्र"
    },
    {
        "english": "holiday",
        "pronunciation": "हॉलीडे",
        "breakdown": "ह (h) + ऑ (o) + ल (l) + आई (i) + ड (d) + ए (a)",
        "translation": "छुट्टी"
    },
    {
        "english": "home",
        "pronunciation": "होम",
        "breakdown": "ह (h) + ओ (o) + म (m)",
        "translation": "घर"
    },
    {
        "english": "hope",
        "pronunciation": "हॉप",
        "breakdown": "ह (h) + ओ (o) + प (p)",
        "translation": "आशा"
    },
    {
        "english": "horse",
        "pronunciation": "हॉर्स",
        "breakdown": "ह (h) + ऑ (o) + र (r) + स (s)",
        "translation": "घोड़ा"
    },
    {
        "english": "hospital",
        "pronunciation": "हॉस्पिटल",
        "breakdown": "ह (h) + ऑ (o) + स (s) + प (p) + आई (i) + ट (t) + अ (a) + ल (l)",
        "translation": "अस्पताल"
    },
    {
        "english": "hot",
        "pronunciation": "हॉट",
        "breakdown": "ह (h) + ओ (o) + ट (t)",
        "translation": "गर्म"
    },
    {
        "english": "hotel",
        "pronunciation": "होटल",
        "breakdown": "ह (h) + ओ (o) + ट (t) + ए (e) + ल (l)",
        "translation": "होटल"
    },
    {
        "english": "hour",
        "pronunciation": "आवर",
        "breakdown": "आ (a) + व (w) + ए (e) + र (r)",
        "translation": "घंटा"
    },
    {
        "english": "house",
        "pronunciation": "हाउस",
        "breakdown": "ह (h) + आ (a) + उ (u) + स (s)",
        "translation": "घर"
    },
    {
        "english": "how",
        "pronunciation": "हाउ",
        "breakdown": "ह (h) + आ (a) + व (w)",
        "translation": "कैसे"
    },
    {
        "english": "hundred",
        "pronunciation": "हंड्रेड",
        "breakdown": "ह (h) + अ (a) + न (n) + ड (d) + र (r) + ए (e) + ड (d)",
        "translation": "सौ"
    },
    {
        "english": "hungry",
        "pronunciation": "हंग्री",
        "breakdown": "ह (h) + अ (a) + न (n) + ग (g) + र (r) + ई (i)",
        "translation": "भूखा"
    },
    {
        "english": "hurry",
        "pronunciation": "हुरी",
        "breakdown": "ह (h) + उ (u) + र (r) + ई (i)",
        "translation": "जल्दी करना"
    },
    {
        "english": "hurt",
        "pronunciation": "हर्ट",
        "breakdown": "ह (h) + उ (u) + र (r) + ट (t)",
        "translation": "दुखाना"
    },
    {
        "english": "husband",
        "pronunciation": "हज़बंड",
        "breakdown": "ह (h) + अ (a) + ज़ (z) + ब (b) + ए (e) + न (n) + ड (d)",
        "translation": "पति"
    },
    {
        "english": "I",
        "pronunciation": "आई",
        "breakdown": "आ (a) + ई (i)",
        "translation": "मैं"
    },
    {
        "english": "ice",
        "pronunciation": "आइस",
        "breakdown": "आ (a) + इ (i) + स (s)",
        "translation": "बर्फ"
    },
    {
        "english": "idea",
        "pronunciation": "आईडिया",
        "breakdown": "आ (a) + इ (i) + ड (d) + ई (i) + ए (a)",
        "translation": "विचार"
    },
    {
        "english": "if",
        "pronunciation": "इफ",
        "breakdown": "इ (i) + फ (f)",
        "translation": "अगर"
    },
    {
        "english": "important",
        "pronunciation": "इंपॉर्टेंट",
        "breakdown": "इ (i) + म (m) + प (p) + ऑ (o) + र (r) + ट (t) + ए (e) + न (n) + ट (t)",
        "translation": "महत्वपूर्ण"
    },
    {
        "english": "in",
        "pronunciation": "इन",
        "breakdown": "इ (i) + न (n)",
        "translation": "में"
    },
    {
        "english": "increase",
        "pronunciation": "इंक्रीज़",
        "breakdown": "इ (i) + न (n) + क (k) + री (r) + ज़ (z)",
        "translation": "बढ़ाना"
    },
    {
        "english": "inside",
        "pronunciation": "इनसाइड",
        "breakdown": "इ (i) + न (n) + स (s) + आई (i) + ड (d)",
        "translation": "भीतर"
    },
    {
        "english": "into",
        "pronunciation": "इंटू",
        "breakdown": "इ (i) + न (n) + ट (t) + उ (u)",
        "translation": "के अंदर"
    },
    {
        "english": "introduce",
        "pronunciation": "इंट्रोड्यूस",
        "breakdown": "इ (i) + न (n) + ट्र (tr) + ओ (o) + ड (d) + य (y) + यू (u) + स (s)",
        "translation": "परिचय देना"
    },
    {
        "english": "invent",
        "pronunciation": "इंवें्ट",
        "breakdown": "इ (i) + न (n) + व (v) + ए (e) + न (n) + ट (t)",
        "translation": "आविष्कार करना"
    },
    {
        "english": "invite",
        "pronunciation": "इन्वाइट",
        "breakdown": "इ (i) + न (n) + व (v) + आई (i) + ट (t) + ई (e)",
        "translation": "निमंत्रण देना"
    },
    {
        "english": "iron",
        "pronunciation": "आयरन",
        "breakdown": "आ (a) + इ (i) + र (r) + न (n)",
        "translation": "लोहे"
    },
    {
        "english": "is",
        "pronunciation": "इज़",
        "breakdown": "इ (i) + ज़ (z)",
        "translation": "है"
    },
    {
        "english": "island",
        "pronunciation": "आइसलैंड",
        "breakdown": "आ (a) + आई (i) + स (s) + ल (l) + ए (e) + न (n) + ड (d)",
        "translation": "द्वीप"
    },
    {
        "english": "it",
        "pronunciation": "इट",
        "breakdown": "इ (i) + ट (t)",
        "translation": "यह"
    },
    {
        "english": "its",
        "pronunciation": "इट्स",
        "breakdown": "इ (i) + ट (t) + स (s)",
        "translation": "इसके"
    },
    {
        "english": "jelly",
        "pronunciation": "जेली",
        "breakdown": "ज (j) + ए (e) + ल (l) + आई (i)",
        "translation": "जेली"
    },
    {
        "english": "job",
        "pronunciation": "जॉब",
        "breakdown": "ज (j) + ऑ (o) + ब (b)",
        "translation": "काम"
    },
    {
        "english": "join",
        "pronunciation": "जॉइन",
        "breakdown": "ज (j) + ऑ (o) + इ (i) + न (n)",
        "translation": "शामिल होना"
    },
    {
        "english": "juice",
        "pronunciation": "जूस",
        "breakdown": "ज (j) + ओ (o) + ओ (o) + स (s)",
        "translation": "रस"
    },
    {
        "english": "jump",
        "pronunciation": "जम्प",
        "breakdown": "ज (j) + अ (a) + म (m) + प (p)",
        "translation": "कूदना"
    },
    {
        "english": "just",
        "pronunciation": "जस्ट",
        "breakdown": "ज (j) + अ (a) + स (s) + ट (t)",
        "translation": "बस"
    },
    {
        "english": "keep",
        "pronunciation": "कीप",
        "breakdown": "क (k) + ई (i) + प (p)",
        "translation": "रखना"
    },
    {
        "english": "key",
        "pronunciation": "की",
        "breakdown": "क (k) + ई (i)",
        "translation": "चाबी"
    },
    {
        "english": "kill",
        "pronunciation": "किल",
        "breakdown": "क (k) + आई (i) + ल (l)",
        "translation": "मारना"
    },
    {
        "english": "kind",
        "pronunciation": "काइंड",
        "breakdown": "क (k) + आई (i) + न (n) + ड (d)",
        "translation": "प्रकार"
    },
    {
        "english": "king",
        "pronunciation": "किंग",
        "breakdown": "क (k) + आई (i) + न (n) + ग (g)",
        "translation": "राजा"
    },
    {
        "english": "kitchen",
        "pronunciation": "किचन",
        "breakdown": "क (k) + इ (i) + च (ch) + न (n)",
        "translation": "रसोई"
    },
    {
        "english": "knee",
        "pronunciation": "नी",
        "breakdown": "न (n) + ई (i)",
        "translation": "घुटना"
    },
    {
        "english": "knife",
        "pronunciation": "नाइफ",
        "breakdown": "न (n) + आई (i) + फ (f)",
        "translation": "चाकू"
    },
    {
        "english": "knock",
        "pronunciation": "नॉक",
        "breakdown": "न (n) + ऑ (o) + क (k)",
        "translation": "दरवाजा खटखटाना"
    },
    {
        "english": "know",
        "pronunciation": "नौ",
        "breakdown": "न (n) + ओ (o)",
        "translation": "जानना"
    },
    {
        "english": "ladder",
        "pronunciation": "लैडर",
        "breakdown": "ल (l) + ऐ (a) + ड (d) + ड (d) + र (r)",
        "translation": "सीढ़ी"
    },
    {
        "english": "lady",
        "pronunciation": "लेडी",
        "breakdown": "ल (l) + ए (a) + ड (d) + ई (i)",
        "translation": "महिला"
    },
    {
        "english": "lamp",
        "pronunciation": "लैम्प",
        "breakdown": "ल (l) + ए (a) + म (m) + प (p)",
        "translation": "दीया"
    },
    {
        "english": "land",
        "pronunciation": "लैंड",
        "breakdown": "ल (l) + ए (a) + न (n) + ड (d)",
        "translation": "भूमि"
    },
    {
        "english": "large",
        "pronunciation": "लार्ज",
        "breakdown": "ल (l) + आ (a) + र (r) + ज (j)",
        "translation": "बड़ा"
    },
    {
        "english": "last",
        "pronunciation": "लास्ट",
        "breakdown": "ल (l) + ए (a) + स (s) + ट (t)",
        "translation": "आखिरी"
    },
    {
        "english": "late",
        "pronunciation": "लेट",
        "breakdown": "ल (l) + ए (a) + ट (t)",
        "translation": "देरी से"
    },
    {
        "english": "lately",
        "pronunciation": "लेटली",
        "breakdown": "ल (l) + ए (a) + ट (t) + ल (l) + ई (i)",
        "translation": "हाल ही में"
    },
    {
        "english": "laugh",
        "pronunciation": "लाफ",
        "breakdown": "ल (l) + आ (a) + फ (f)",
        "translation": "हंसना"
    },
    {
        "english": "lazy",
        "pronunciation": "लेज़ी",
        "breakdown": "ल (l) + ए (a) + ज़ (z) +ी (y)",
        "translation": "आलसी"
    },
    {
        "english": "lead",
        "pronunciation": "लीड",
        "breakdown": "ल (l) + ई (i) + ड (d)",
        "translation": "नेतृत्व करना"
    },
    {
        "english": "leaf",
        "pronunciation": "लीफ",
        "breakdown": "ल (l) + ई (i) + फ (f)",
        "translation": "पत्ता"
    },
    {
        "english": "learn",
        "pronunciation": "लर्न",
        "breakdown": "ल (l) + ई (e) + र (r) + न (n)",
        "translation": "सीखना"
    },
    {
        "english": "leave",
        "pronunciation": "लीव",
        "breakdown": "ल (l) + ई (i) + व (v)",
        "translation": "छोड़ना"
    },
    {
        "english": "left",
        "pronunciation": "लेफ्ट",
        "breakdown": "ल (l) + ई (e) + फ (f) + ट (t)",
        "translation": "बाईं"
    },
    {
        "english": "leg",
        "pronunciation": "लेग",
        "breakdown": "ल (l) + ई (e) + ग (g)",
        "translation": "टांग"
    },
    {
        "english": "lend",
        "pronunciation": "लेंड",
        "breakdown": "ल (l) + ई (e) + न (n) + ड (d)",
        "translation": "उधार देना"
    },
    {
        "english": "length",
        "pronunciation": "लेन्थ",
        "breakdown": "ल (l) + ई (e) + न (n) + ग (g) + थ (th)",
        "translation": "लंबाई"
    },
    {
        "english": "less",
        "pronunciation": "लेस",
        "breakdown": "ल (l) + ई (e) + स (s)",
        "translation": "कम"
    },
    {
        "english": "lesson",
        "pronunciation": "लेसन",
        "breakdown": "ल (l) + ई (e) + स (s) + न (n)",
        "translation": "पाठ"
    },
    {
        "english": "let",
        "pronunciation": "लेट",
        "breakdown": "ल (l) + ई (e) + ट (t)",
        "translation": "अनुमति देना"
    },
    {
        "english": "letter",
        "pronunciation": "लेटर",
        "breakdown": "ल (l) + ई (e) + ट (t) + ट (t) + र (r)",
        "translation": "पत्र"
    },
    {
        "english": "library",
        "pronunciation": "लाइब्रेरी",
        "breakdown": "ल (l) + आई (i) + ब (b) + र (r) + ई (e) + र (r) + ई (i)",
        "translation": "पुस्तकालय"
    },
    {
        "english": "lie",
        "pronunciation": "लाई",
        "breakdown": "ल (l) + आई (i)",
        "translation": "झूठ बोलना"
    },
    {
        "english": "life",
        "pronunciation": "लाइफ",
        "breakdown": "ल (l) + आई (i) + फ (f)",
        "translation": "जीवन"
    },
    {
        "english": "light",
        "pronunciation": "लाइट",
        "breakdown": "ल (l) + आई (i) + ट (t)",
        "translation": "रोशनी"
    },
    {
        "english": "like",
        "pronunciation": "लाइक",
        "breakdown": "ल (l) + आई (i) + क (k) + ई (e)",
        "translation": "पसंद करना"
    },
    {
        "english": "lion",
        "pronunciation": "लायन",
        "breakdown": "ल (l) + आई (i) + ओ (o) + न (n)",
        "translation": "सिंह"
    },
    {
        "english": "lip",
        "pronunciation": "लिप",
        "breakdown": "ल (l) + आई (i) + प (p)",
        "translation": "होंठ"
    },
    {
        "english": "list",
        "pronunciation": "लिस्ट",
        "breakdown": "ल (l) + आई (i) + स (s) + ट (t)",
        "translation": "सूची"
    },
    {
        "english": "listen",
        "pronunciation": "लिसन",
        "breakdown": "ल (l) + आई (i) + स (s) + न (n)",
        "translation": "सुनना"
    },
    {
        "english": "little",
        "pronunciation": "लिटल",
        "breakdown": "ल (l) + आई (i) + ट (t) + ल (l) + ई (e)",
        "translation": "थोड़ा"
    },
    {
        "english": "live",
        "pronunciation": "लिव",
        "breakdown": "ल (l) + आई (i) + व (v)",
        "translation": "जीना"
    },
    {
        "english": "lock",
        "pronunciation": "लॉक",
        "breakdown": "ल (l) + ओ (o) + क (k)",
        "translation": "ताले"
    },
    {
        "english": "lonely",
        "pronunciation": "लोनली",
        "breakdown": "ल (l) + ओ (o) + न (n) + ल (l) + ई (i)",
        "translation": "अकेला"
    },
    {
        "english": "long",
        "pronunciation": "लॉन्ग",
        "breakdown": "ल (l) + ऑ (o) + न (n) + ग (g)",
        "translation": "लंबा"
    },
    {
        "english": "look",
        "pronunciation": "लुक",
        "breakdown": "ल (l) + ओ (o) + क (k)",
        "translation": "देखना"
    },
    {
        "english": "lose",
        "pronunciation": "लूज",
        "breakdown": "ल (l) + ओ (o) + ज़ (z)",
        "translation": "खोना"
    },
    {
        "english": "lot",
        "pronunciation": "लॉट",
        "breakdown": "ल (l) + ऑ (o) + ट (t)",
        "translation": "बहुत"
    },
    {
        "english": "love",
        "pronunciation": "लव",
        "breakdown": "ल (l) + ओ (o) + व (v)",
        "translation": "प्यार करना"
    },
    {
        "english": "low",
        "pronunciation": "लो",
        "breakdown": "ल (l) + ओ (o)",
        "translation": "कम"
    },
    {
        "english": "lower",
        "pronunciation": "लोअर",
        "breakdown": "ल (l) + ओ (o) + व (w) + र (r)",
        "translation": "कम करना"
    },
    {
        "english": "luck",
        "pronunciation": "लक",
        "breakdown": "ल (l) + अ (a) + क (k)",
        "translation": "भाग्य"
    },
    {
        "english": "machine",
        "pronunciation": "मशीन",
        "breakdown": "म (m) + अ (a) + श (sh) + ई (i) + न (n)",
        "translation": "मशीन"
    },
    {
        "english": "main",
        "pronunciation": "मेन",
        "breakdown": "म (m) + ए (a) + न (n)",
        "translation": "मुख्य"
    },
    {
        "english": "make",
        "pronunciation": "मेक",
        "breakdown": "म (m) + ए (a) + क (k)",
        "translation": "बनाना"
    },
    {
        "english": "male",
        "pronunciation": "मेल",
        "breakdown": "म (m) + ए (a) + ल (l) + ई (e)",
        "translation": "पुरुष"
    },
    {
        "english": "man",
        "pronunciation": "मैन",
        "breakdown": "म (m) + ए (a) + न (n)",
        "translation": "आदमी"
    },
    {
        "english": "many",
        "pronunciation": "मेनी",
        "breakdown": "म (m) + ए (a) + न (n) + ई (i)",
        "translation": "कई"
    },
    {
        "english": "map",
        "pronunciation": "मैप",
        "breakdown": "म (m) + ए (a) + प (p)",
        "translation": "मानचित्र"
    },
    {
        "english": "mark",
        "pronunciation": "मार्क",
        "breakdown": "म (m) + आ (a) + र (r) + क (k)",
        "translation": "चिन्ह"
    },
    {
        "english": "market",
        "pronunciation": "मार्केट",
        "breakdown": "म (m) + आ (a) + र (r) + क (k) + ई (i) + ट (t)",
        "translation": "बाजार"
    },
    {
        "english": "marry",
        "pronunciation": "मैरी",
        "breakdown": "म (m) + ए (a) + र (r) + य (y)",
        "translation": "शादी करना"
    },
    {
        "english": "matter",
        "pronunciation": "मैटर",
        "breakdown": "म (m) + ए (a) + ट (t) + ट (t) + र (r)",
        "translation": "मामला"
    },
    {
        "english": "may",
        "pronunciation": "मे",
        "breakdown": "म (m) + ए (a)",
        "translation": "शायद"
    },
    {
        "english": "me",
        "pronunciation": "मी",
        "breakdown": "म (m) + ई (i)",
        "translation": "मुझे"
    },
    {
        "english": "meal",
        "pronunciation": "मील",
        "breakdown": "म (m) + ई (i) + ल (l)",
        "translation": "भोजन"
    },
    {
        "english": "mean",
        "pronunciation": "मीन",
        "breakdown": "म (m) + ई (i) + न (n)",
        "translation": "मतलब"
    },
    {
        "english": "measure",
        "pronunciation": "मेज़र",
        "breakdown": "म (m) + ई (e) + ज (j) + अ (a) + र (r)",
        "translation": "मापना"
    },
    {
        "english": "meat",
        "pronunciation": "मीट",
        "breakdown": "म (m) + ई (i) + ट (t)",
        "translation": "मांस"
    },
    {
        "english": "medicine",
        "pronunciation": "मेडिसिन",
        "breakdown": "म (m) + ई (e) + ड (d) + इ (i) + स (s) + इ (i) + न (n)",
        "translation": "दवा"
    },
    {
        "english": "meet",
        "pronunciation": "मीट",
        "breakdown": "म (m) + ई (i) + ट (t)",
        "translation": "मिलना"
    },
    {
        "english": "member",
        "pronunciation": "मेबर",
        "breakdown": "म (m) + ई (e) + म (m) + ब (b) + ई (e) + र (r)",
        "translation": "सदस्य"
    },
    {
        "english": "mention",
        "pronunciation": "मेंशन",
        "breakdown": "म (m) + ई (e) + न (n) + श (sh) + न (n)",
        "translation": "उल्लेख करना"
    },
    {
        "english": "method",
        "pronunciation": "मेथड",
        "breakdown": "म (m) + ई (e) + थ (th) + ओ (o) + ड (d)",
        "translation": "विधि"
    },
    {
        "english": "middle",
        "pronunciation": "मिडल",
        "breakdown": "म (m) + आई (i) + ड (d) + ड (d) + ल (l) + ई (e)",
        "translation": "बीच"
    },
    {
        "english": "milk",
        "pronunciation": "मिल्क",
        "breakdown": "म (m) + आई (i) + ल (l) + क (k)",
        "translation": "दूध"
    },
    {
        "english": "million",
        "pronunciation": "मिलियन",
        "breakdown": "म (m) + आई (i) + ल (l) + ल (l) + य (y) + ओ (o) + न (n)",
        "translation": "एक मिलियन"
    },
    {
        "english": "mind",
        "pronunciation": "माइंड",
        "breakdown": "म (m) + आई (i) + न (n) + ड (d)",
        "translation": "मन"
    },
    {
        "english": "minute",
        "pronunciation": "मिनट",
        "breakdown": "म (m) + आई (i) + न (n) + ट (t)",
        "translation": "मिनट"
    },
    {
        "english": "miss",
        "pronunciation": "मिस",
        "breakdown": "म (m) + आई (i) + स (s)",
        "translation": "छोड़ना"
    },
    {
        "english": "mistake",
        "pronunciation": "मिस्टेक",
        "breakdown": "म (m) + आई (i) + स (s) + ट (t) + ए (a) + क (k)",
        "translation": "गलती"
    },
    {
        "english": "mix",
        "pronunciation": "मिक्स",
        "breakdown": "म (m) + आई (i) + क (k) + स (s)",
        "translation": "मिश्रण"
    },
    {
        "english": "model",
        "pronunciation": "मॉडल",
        "breakdown": "म (m) + ऑ (o) + ड (d) + ई (e) + ल (l)",
        "translation": "मॉडल"
    },
    {
        "english": "modern",
        "pronunciation": "मॉडर्न",
        "breakdown": "म (m) + ऑ (o) + ड (d) + र (r) + न (n)",
        "translation": "आधुनिक"
    },
    {
        "english": "moment",
        "pronunciation": "मोमेंट",
        "breakdown": "म (m) + ओ (o) + म (m) + ई (i) + न (n) + ट (t)",
        "translation": "क्षण"
    },
    {
        "english": "money",
        "pronunciation": "मनी",
        "breakdown": "म (m) + ओ (o) + न (n) + ई (i)",
        "translation": "पैसा"
    },
    {
        "english": "monkey",
        "pronunciation": "मंकी",
        "breakdown": "म (m) + अं (an) + क (k) + ई (i)",
        "translation": "बंदर"
    },
    {
        "english": "month",
        "pronunciation": "मंथ",
        "breakdown": "म (m) + अ (a) + न (n) + थ (th)",
        "translation": "महिना"
    },
    {
        "english": "moon",
        "pronunciation": "मून",
        "breakdown": "म (m) + ओ (o) + न (n)",
        "translation": "चाँद"
    },
    {
        "english": "more",
        "pronunciation": "मोर",
        "breakdown": "म (m) + ओ (o) + र (r)",
        "translation": "अधिक"
    },
    {
        "english": "morning",
        "pronunciation": "मॉर्निंग",
        "breakdown": "म (m) + ऑ (o) + र (r) + न (n) + इ (i) + न (n) + ग (g)",
        "translation": "सुबह"
    },
    {
        "english": "most",
        "pronunciation": "मोस्ट",
        "breakdown": "म (m) + ओ (o) + स (s) + ट (t)",
        "translation": "अधिकतम"
    },
    {
        "english": "mother",
        "pronunciation": "मदर",
        "breakdown": "म (m) + अ (a) + थ (th) + र (r)",
        "translation": "माता"
    },
    {
        "english": "mountain",
        "pronunciation": "माउंटेन",
        "breakdown": "म (m) + ऑ (o) + उ (u) + न (n) + ट (t) + ए (e) + न (n)",
        "translation": "पहाड़"
    },
    {
        "english": "mouth",
        "pronunciation": "माउथ",
        "breakdown": "म (m) + आ (a) + उ (u) + थ (th)",
        "translation": "मुंह"
    },
    {
        "english": "move",
        "pronunciation": "मूव",
        "breakdown": "म (m) + ओ (o) + व (v)",
        "translation": "हिलना"
    },
    {
        "english": "much",
        "pronunciation": "मच",
        "breakdown": "म (m) + अ (a) + च (ch)",
        "translation": "बहुत"
    },
    {
        "english": "music",
        "pronunciation": "म्यूजिक",
        "breakdown": "म (m) + य (y) +ू (u) + ज (j) + आई (i) + क (k)",
        "translation": "संगीत"
    },
    {
        "english": "must",
        "pronunciation": "मस्ट",
        "breakdown": "म (m) + अ (a) + स (s) + ट (t)",
        "translation": "जरूरी"
    },
    {
        "english": "my",
        "pronunciation": "माई",
        "breakdown": "म (m) + आई (i)",
        "translation": "मेरी"
    },

    {
        "english": "name",
        "pronunciation": "नेम",
        "breakdown": "न (n) + ए (a) + म (m)",
        "translation": "नाम"
    },
    {
        "english": "narrow",
        "pronunciation": "नैरो",
        "breakdown": "न (n) + ऐ (ai) + र (r) + ओ (o)",
        "translation": "संकरा"
    },
    {
        "english": "nation",
        "pronunciation": "नेशन",
        "breakdown": "न (n) + ए (a) + ट (t) + ion (ion)",
        "translation": "राष्ट्र"
    },
    {
        "english": "nature",
        "pronunciation": "नेचर",
        "breakdown": "न (n) + ए (a) + ट (t) + च (ch) + अ (a) + र (r)",
        "translation": "प्रकृति"
    },
    {
        "english": "near",
        "pronunciation": "नियर",
        "breakdown": "न (n) + ई (i) + र (r)",
        "translation": "नज़दीक"
    },
    {
        "english": "nearly",
        "pronunciation": "नियरली",
        "breakdown": "न (n) + ई (i) + र (r) + ल (l) + ई (y)",
        "translation": "लगभग"
    },
    {
        "english": "neck",
        "pronunciation": "नेक",
        "breakdown": "न (n) + ए (e) + क (k)",
        "translation": "गर्दन"
    },
    {
        "english": "need",
        "pronunciation": "नीड",
        "breakdown": "न (n) + ई (i) + ड (d)",
        "translation": "जरूरत"
    },
    {
        "english": "needle",
        "pronunciation": "नीडल",
        "breakdown": "न (n) + ई (i) + ड (d) + ल (l)",
        "translation": "सुई"
    },
    {
        "english": "neighbor",
        "pronunciation": "नेबर",
        "breakdown": "न (n) + ए (a) + इ (i) + घ (g) + ब (b) + र (r)",
        "translation": "पड़ोसी"
    },
    {
        "english": "neither",
        "pronunciation": "नाइथर",
        "breakdown": "न (n) + ई (i) + थ (th) + ए (e) + र (r)",
        "translation": "न ही"
    },
    {
        "english": "net",
        "pronunciation": "नेट",
        "breakdown": "न (n) + ए (e) + ट (t)",
        "translation": "जाल"
    },
    {
        "english": "never",
        "pronunciation": "नेवर",
        "breakdown": "न (n) + ए (e) + व (v) + र (r)",
        "translation": "कभी नहीं"
    },
    {
        "english": "new",
        "pronunciation": "न्यू",
        "breakdown": "न (n) + ई (ew)",
        "translation": "नया"
    },
    {
        "english": "news",
        "pronunciation": "न्यूज़",
        "breakdown": "न (n) + ई (ew) + ज़ (s)",
        "translation": "समाचार"
    },
    {
        "english": "newspaper",
        "pronunciation": "न्यूज़पेपर",
        "breakdown": "न (n) + ई (ew) + ज़ (s) + प (p) + ए (a) + प (p) + र (r)",
        "translation": "अख़बार"
    },
    {
        "english": "next",
        "pronunciation": "नेक्स्ट",
        "breakdown": "न (n) + ई (e) + क (k) + स (s) + ट (t)",
        "translation": "अगला"
    },
    {
        "english": "nice",
        "pronunciation": "नाइस",
        "breakdown": "न (n) + आई (i) + स (s) + ई (e)",
        "translation": "अच्छा"
    },
    {
        "english": "night",
        "pronunciation": "नाइट",
        "breakdown": "न (n) + आई (i) + ट (t)",
        "translation": "रात"
    },
    {
        "english": "nine",
        "pronunciation": "नाइन",
        "breakdown": "न (n) + आई (i) + न (n) + e (e)",
        "translation": "नौ"
    },
    {
        "english": "no",
        "pronunciation": "नो",
        "breakdown": "न (n) + ओ (o)",
        "translation": "नहीं"
    },
    {
        "english": "noble",
        "pronunciation": "नोबल",
        "breakdown": "न (n) + ओ (o) + ब (b) + ल (l) + ई (e)",
        "translation": "उच्च"
    },
    {
        "english": "noise",
        "pronunciation": "नॉइज़",
        "breakdown": "न (n) + ओ (o) + ई (i) + ज़ (s)",
        "translation": "शोर"
    },
    {
        "english": "none",
        "pronunciation": "नन",
        "breakdown": "न (n) + ओ (o) + न (n) + e (e)",
        "translation": "कोई नहीं"
    },
    {
        "english": "nor",
        "pronunciation": "नॉर",
        "breakdown": "न (n) + ओ (o) + र (r)",
        "translation": "न ही"
    },
    {
        "english": "north",
        "pronunciation": "नॉर्थ",
        "breakdown": "न (n) + ओ (o) + र (r) + थ (th)",
        "translation": "उत्तर"
    },
    {
        "english": "nose",
        "pronunciation": "नोज़",
        "breakdown": "न (n) + ओ (o) + ज़ (s)",
        "translation": "नाक"
    },
    {
        "english": "not",
        "pronunciation": "नॉट",
        "breakdown": "न (n) + ओ (o) + ट (t)",
        "translation": "नहीं"
    },
    {
        "english": "nothing",
        "pronunciation": "नथिंग",
        "breakdown": "न (n) + ओ (o) + थ (th) + इ (i) + न (n) + ग (g)",
        "translation": "कुछ नहीं"
    },
    {
        "english": "notice",
        "pronunciation": "नोटिस",
        "breakdown": "न (n) + ओ (o) + ट (t) + आई (i) + स (s)",
        "translation": "ध्यान देना"
    },
    {
        "english": "now",
        "pronunciation": "नाऊ",
        "breakdown": "न (n) + ओ (o) + व (w)",
        "translation": "अब"
    },
    {
        "english": "number",
        "pronunciation": "नंबर",
        "breakdown": "न (n) + अ (a) + म (m) + ब (b) + र (r)",
        "translation": "संख्या"
    },
    {
        "english": "obey",
        "pronunciation": "ओबे",
        "breakdown": "ओ (o) + ब (b) + ए (e)",
        "translation": "आज्ञा मानना"
    },
    {
        "english": "object",
        "pronunciation": "ऑब्जेक्ट",
        "breakdown": "ऑ (o) + ब (b) + ज (j) + ई (e) + क (k) + ट (t)",
        "translation": "वस्तु"
    },
    {
        "english": "ocean",
        "pronunciation": "ओशन",
        "breakdown": "ओ (o) + श (sh) + अ (a) + न (n)",
        "translation": "महासागर"
    },
    {
        "english": "of",
        "pronunciation": "ऑफ",
        "breakdown": "ऑ (o) + फ (f)",
        "translation": "का"
    },
    {
        "english": "off",
        "pronunciation": "ऑफ",
        "breakdown": "ऑ (o) + फ (f)",
        "translation": "बंद"
    },
    {
        "english": "offer",
        "pronunciation": "ऑफर",
        "breakdown": "ऑ (o) + फ (f) + ए (e) + र (r)",
        "translation": "प्रस्ताव"
    },
    {
        "english": "office",
        "pronunciation": "ऑफिस",
        "breakdown": "ऑ (o) + फ (f) + आई (i) + स (s)",
        "translation": "दफ्तर"
    },
    {
        "english": "often",
        "pronunciation": "ऑफ्टन",
        "breakdown": "ऑ (o) + फ (f) + ट (t) + ए (e) + न (n)",
        "translation": "अक्सर"
    },
    {
        "english": "oil",
        "pronunciation": "ऑइल",
        "breakdown": "ऑ (o) + इ (i) + ल (l)",
        "translation": "तेल"
    },
    {
        "english": "old",
        "pronunciation": "ओल्ड",
        "breakdown": "ओ (o) + ल (l) + ड (d)",
        "translation": "पुराना"
    },
    {
        "english": "on",
        "pronunciation": "ऑन",
        "breakdown": "ऑ (o) + न (n)",
        "translation": "पर"
    },
    {
        "english": "once",
        "pronunciation": "वन्स",
        "breakdown": "व (w) + ए (a) + न (n) + स (s)",
        "translation": "एक बार"
    },
    {
        "english": "one",
        "pronunciation": "वन",
        "breakdown": "व (w) + अ (a) + न (n)",
        "translation": "एक"
    },
    {
        "english": "only",
        "pronunciation": "ओन्ली",
        "breakdown": "ओ (o) + न (n) + ल (l) + ई (y)",
        "translation": "केवल"
    },
    {
        "english": "open",
        "pronunciation": "ओपन",
        "breakdown": "ओ (o) + प (p) + ए (e) + न (n)",
        "translation": "खोलना"
    },
    {
        "english": "opposite",
        "pronunciation": "ऑपोजिट",
        "breakdown": "ऑ (o) + प (p) + ओ (o) + ज़ (z) + इ (i) + ट (t)",
        "translation": "विपरीत"
    },
    {
        "english": "or",
        "pronunciation": "ऑर",
        "breakdown": "ऑ (o) + र (r)",
        "translation": "या"
    },
    {
        "english": "orange",
        "pronunciation": "ऑरेंज",
        "breakdown": "ऑ (o) + र (r) + ऐ (a) + न (n) + ज़ (j)",
        "translation": "संतरा"
    },
    {
        "english": "order",
        "pronunciation": "ऑर्डर",
        "breakdown": "ऑ (o) + र (r) + ड (d) + ए (e) + र (r)",
        "translation": "आदेश"
    },
    {
        "english": "other",
        "pronunciation": "अदर",
        "breakdown": "अ (a) + ध (dh) + र (r)",
        "translation": "अन्य"
    },
    {
        "english": "our",
        "pronunciation": "आउर",
        "breakdown": "आ (a) + उ (u) + र (r)",
        "translation": "हमारा"
    },
    {
        "english": "out",
        "pronunciation": "आउट",
        "breakdown": "आ (a) + उ (u) + ट (t)",
        "translation": "बाहर"
    },
    {
        "english": "outside",
        "pronunciation": "आउटसाइड",
        "breakdown": "आ (a) + उ (u) + ट (t) + स (s) + आई (i) + ड (d)",
        "translation": "बाहर"
    },
    {
        "english": "over",
        "pronunciation": "ओवर",
        "breakdown": "ओ (o) + व (v) + ए (e) + र (r)",
        "translation": "उपर"
    },
    {
        "english": "own",
        "pronunciation": "ओन",
        "breakdown": "ओ (o) + व (w) + न (n)",
        "translation": "स्वयं"
    },
    {
        "english": "page",
        "pronunciation": "पेज",
        "breakdown": "प (p) + ए (a) + ज (j)",
        "translation": "पृष्ठ"
    },
    {
        "english": "pain",
        "pronunciation": "पेन",
        "breakdown": "प (p) + ए (a) + न (n)",
        "translation": "दर्द"
    },
    {
        "english": "paint",
        "pronunciation": "पेंट",
        "breakdown": "प (p) + ए (a) + इ (i) + न (n) + ट (t)",
        "translation": "रंग"
    },
    {
        "english": "pair",
        "pronunciation": "पैर",
        "breakdown": "प (p) + ए (a) + इ (i) + र (r)",
        "translation": "जोड़ी"
    },
    {
        "english": "pan",
        "pronunciation": "पैन",
        "breakdown": "प (p) + ए (a) + न (n)",
        "translation": "कढ़ाई"
    },
    {
        "english": "paper",
        "pronunciation": "पेपर",
        "breakdown": "प (p) + ए (a) + प (p) + ई (e) + र (r)",
        "translation": "कागज़"
    },
    {
        "english": "parent",
        "pronunciation": "पैरेंट",
        "breakdown": "प (p) + ए (a) + र (r) + ए (e) + न (n) + ट (t)",
        "translation": "माता-पिता"
    },
    {
        "english": "park",
        "pronunciation": "पार्क",
        "breakdown": "प (p) + आ (a) + र (r) + क (k)",
        "translation": "पार्क"
    },
    {
        "english": "part",
        "pronunciation": "पार्ट",
        "breakdown": "प (p) + आ (a) + र (r) + ट (t)",
        "translation": "भाग"
    },
    {
        "english": "partner",
        "pronunciation": "पार्टनर",
        "breakdown": "प (p) + आ (a) + र (r) + ट (t) + न (n) + र (r)",
        "translation": "साझेदार"
    },
    {
        "english": "party",
        "pronunciation": "पार्टी",
        "breakdown": "प (p) + आ (a) + र (r) + ट (t) + ई (y)",
        "translation": "पार्टी"
    },
    {
        "english": "pass",
        "pronunciation": "पास",
        "breakdown": "प (p) + आ (a) + स (s)",
        "translation": "पास करना"
    },
    {
        "english": "past",
        "pronunciation": "पास्ट",
        "breakdown": "प (p) + आ (a) + स (s) + ट (t)",
        "translation": "अतीत"
    },
    {
        "english": "path",
        "pronunciation": "पाथ",
        "breakdown": "प (p) + आ (a) + थ (th)",
        "translation": "मार्ग"
    },
    {
        "english": "pay",
        "pronunciation": "पे",
        "breakdown": "प (p) + ए (a) + य (y)",
        "translation": "भुगतान करना"
    },
    {
        "english": "peace",
        "pronunciation": "पीस",
        "breakdown": "प (p) + ई (i) + स (s)",
        "translation": "शांति"
    },
    {
        "english": "pen",
        "pronunciation": "पेन",
        "breakdown": "प (p) + ई (e) + न (n)",
        "translation": "कलम"
    },
    {
        "english": "pencil",
        "pronunciation": "पेंसिल",
        "breakdown": "प (p) + ई (e) + न (n) + स (s) + इ (i) + ल (l)",
        "translation": "पेंसिल"
    },
    {
        "english": "people",
        "pronunciation": "पीपल",
        "breakdown": "प (p) + ई (i) + प (p) + ल (l)",
        "translation": "लोग"
    },
    {
        "english": "pepper",
        "pronunciation": "पेपर",
        "breakdown": "प (p) + ए (e) + प (p) + प (p) + ई (e) + र (r)",
        "translation": "मिर्च"
    },
    {
        "english": "per",
        "pronunciation": "पर",
        "breakdown": "प (p) + ए (e) + र (r)",
        "translation": "प्रति"
    },
    {
        "english": "perfect",
        "pronunciation": "परफेक्ट",
        "breakdown": "प (p) + ए (e) + र (r) + फ (f) + ई (i) + क (k) + ट (t)",
        "translation": "परिपूर्ण"
    },
    {
        "english": "period",
        "pronunciation": "पीरियड",
        "breakdown": "पी (p) + र (r) + ई (i) + य (y) + ड (d)",
        "translation": "अवधि"
    },
    {
        "english": "person",
        "pronunciation": "पर्सन",
        "breakdown": "प (p) + ई (e) + र (r) + स (s) + न (n)",
        "translation": "व्यक्ति"
    },
    {
        "english": "petrol",
        "pronunciation": "पेट्रोल",
        "breakdown": "प (p) + ई (e) + ट (t) + र (r) + ओ (o) + ल (l)",
        "translation": "पेट्रोल"
    },
    {
        "english": "photograph",
        "pronunciation": "फोटोग्राफ",
        "breakdown": "फ (f) + ओ (o) + ट (t) + ओ (o) + ग (g) + र (r) + अफ (af)",
        "translation": "फोटोग्राफ"
    },
    {
        "english": "piano",
        "pronunciation": "पियानो",
        "breakdown": "प (p) + आई (i) + अ (a) + न (n) + ओ (o)",
        "translation": "पियानो"
    },
    {
        "english": "pick",
        "pronunciation": "पिक",
        "breakdown": "प (p) + आई (i) + क (k)",
        "translation": "चुनना"
    },
    {
        "english": "picture",
        "pronunciation": "पिक्चर",
        "breakdown": "प (p) + आई (i) + क (k) + च (ch) + र (r)",
        "translation": "चित्र"
    },
    {
        "english": "piece",
        "pronunciation": "पीस",
        "breakdown": "प (p) + ई (i) + स (s)",
        "translation": "टुकड़ा"
    },
    {
        "english": "pig",
        "pronunciation": "पिग",
        "breakdown": "प (p) + आई (i) + ग (g)",
        "translation": "सूअर"
    },
    {
        "english": "pin",
        "pronunciation": "पिन",
        "breakdown": "प (p) + आई (i) + न (n)",
        "translation": "पिन"
    },
    {
        "english": "pink",
        "pronunciation": "पिंक",
        "breakdown": "प (p) + आई (i) + न (n) + क (k)",
        "translation": "गुलाबी"
    },
    {
        "english": "place",
        "pronunciation": "प्लेस",
        "breakdown": "प (p) + ल (l) + ए (a) + स (s) + ई (e)",
        "translation": "जगह"
    },
    {
        "english": "plane",
        "pronunciation": "प्लेन",
        "breakdown": "प (p) + ल (l) + ए (a) + न (n) + ई (e)",
        "translation": "विमान"
    },
    {
        "english": "plant",
        "pronunciation": "प्लांट",
        "breakdown": "प (p) + ल (l) + आ (a) + न (n) + ट (t)",
        "translation": "पौधा"
    },
    {
        "english": "plastic",
        "pronunciation": "प्लास्टिक",
        "breakdown": "प (p) + ल (l) + ए (a) + स (s) + ट (t) + इ (i) + क (k)",
        "translation": "प्लास्टिक"
    },
    {
        "english": "plate",
        "pronunciation": "प्लेट",
        "breakdown": "प (p) + ल (l) + ए (a) + ट (t) + e (e)",
        "translation": "प्लेट"
    },
    {
        "english": "play",
        "pronunciation": "प्ले",
        "breakdown": "प (p) + ल (l) + ए (a) + य (y)",
        "translation": "खेलना"
    },
    {
        "english": "please",
        "pronunciation": "प्लीज",
        "breakdown": "प (p) + ल (l) + ई (i) + ज़ (z)",
        "translation": "कृपया"
    },
    {
        "english": "pleased",
        "pronunciation": "प्लीज़ड",
        "breakdown": "प (p) + ल (l) + ई (i) + ज़ (z) + ड (d)",
        "translation": "खुश"
    },
    {
        "english": "plenty",
        "pronunciation": "प्लेंटी",
        "breakdown": "प (p) + ल (l) + ए (e) + न (n) + ट (t) + ई (i)",
        "translation": "प्रचुरता"
    },
    {
        "english": "pocket",
        "pronunciation": "पॉकेट",
        "breakdown": "प (p) + ओ (o) + क (k) + ई (i) + ट (t)",
        "translation": "जेब"
    },
    {
        "english": "point",
        "pronunciation": "पॉइंट",
        "breakdown": "प (p) + ओ (o) + इ (i) + न (n) + ट (t)",
        "translation": "बिंदु"
    },
    {
        "english": "poison",
        "pronunciation": "पॉइजन",
        "breakdown": "प (p) + ओ (o) + इ (i) + ज़ (z) + न (n)",
        "translation": "विष"
    },
    {
        "english": "police",
        "pronunciation": "पुलिस",
        "breakdown": "प (p) + ओ (o) + ल (l) + आई (i) + स (s)",
        "translation": "पुलिस"
    },
    {
        "english": "polite",
        "pronunciation": "पॉलाइट",
        "breakdown": "प (p) + ओ (o) + ल (l) + आई (i) + ट (t) + ई (e)",
        "translation": "विनम्र"
    },
    {
        "english": "pool",
        "pronunciation": "पूल",
        "breakdown": "प (p) + ओ (o) + ल (l)",
        "translation": "तालाब"
    },
    {
        "english": "poor",
        "pronunciation": "पुअर",
        "breakdown": "प (p) + ओ (o) + आर (r)",
        "translation": "गरीब"
    },
    {
        "english": "popular",
        "pronunciation": "पॉपुलर",
        "breakdown": "प (p) + ओ (o) + प (p) + यु (u) + ल (l) + ए (e) + र (r)",
        "translation": "लोकप्रिय"
    },
    {
        "english": "position",
        "pronunciation": "पोजिशन",
        "breakdown": "प (p) + ओ (o) + ज़ (z) + इ (i) + श (sh) + न (n)",
        "translation": "स्थिति"
    },
    {
        "english": "possible",
        "pronunciation": "पॉसिबल",
        "breakdown": "प (p) + ओ (o) + स (s) + इ (i) + ब (b) + ल (l)",
        "translation": "संभव"
    },
    {
        "english": "potato",
        "pronunciation": "पोटैटो",
        "breakdown": "प (p) + ओ (o) + ट (t) + ए (a) + ट (t) + ओ (o)",
        "translation": "आलू"
    },
    {
        "english": "pour",
        "pronunciation": "पोर",
        "breakdown": "प (p) + ओ (o) + र (r)",
        "translation": "डालना"
    },
    {
        "english": "practice",
        "pronunciation": "प्रैक्टिस",
        "breakdown": "प (p) + र (r) + ऐ (a) + क (k) + ट (t) + इ (i) + स (s)",
        "translation": "अभ्यास"
    },
    {
        "english": "prefer",
        "pronunciation": "प्रिफर",
        "breakdown": "प (p) + र (r) + ई (e) + फ (f) + र (r)",
        "translation": "तरजिह देना"
    },
    {
        "english": "prepare",
        "pronunciation": "प्रिपेयर",
        "breakdown": "प (p) + र (r) + ई (e) + प (p) + ए (a) + र (r)",
        "translation": "तैयार करना"
    },
    {
        "english": "present",
        "pronunciation": "प्रेजेंट",
        "breakdown": "प (p) + र (r) + ई (e) + ज़ (z) + ए (e) + न (n) + ट (t)",
        "translation": "प्रस्तुत"
    },
    {
        "english": "press",
        "pronunciation": "प्रेस",
        "breakdown": "प (p) + र (r) + ई (e) + स (s)",
        "translation": "दबाना"
    },
    {
        "english": "pretty",
        "pronunciation": "प्रीटी",
        "breakdown": "प (p) + र (r) + ई (i) + ट (t) + ई (y)",
        "translation": "सुंदर"
    },
    {
        "english": "price",
        "pronunciation": "प्राइस",
        "breakdown": "प (p) + र (r) + आई (i) + स (s)",
        "translation": "मूल्य"
    },
    {
        "english": "prince",
        "pronunciation": "प्रिंस",
        "breakdown": "प (p) + र (r) + इ (i) + न (n) + स (s)",
        "translation": "राजकुमार"
    },
    {
        "english": "print",
        "pronunciation": "प्रिंट",
        "breakdown": "प (p) + र (r) + इ (i) + न (n) + ट (t)",
        "translation": "छापना"
    },
    {
        "english": "prize",
        "pronunciation": "प्राइज",
        "breakdown": "प (p) + र (r) + आई (i) + ज़ (z)",
        "translation": "इनाम"
    },
    {
        "english": "problem",
        "pronunciation": "प्रॉब्लम",
        "breakdown": "प (p) + र (r) + ओ (o) + ब (b) + ल (l) + ई (i) + म (m)",
        "translation": "समस्या"
    },
    {
        "english": "process",
        "pronunciation": "प्रॉसेस",
        "breakdown": "प (p) + र (r) + ओ (o) + स (s) + ई (i) + स (s)",
        "translation": "प्रक्रिया"
    },
    {
        "english": "produce",
        "pronunciation": "प्रोड्यूस",
        "breakdown": "प (p) + र (r) + ओ (o) + ड (d) + य (y) + यू (u) + स (s)",
        "translation": "उत्पादित करना"
    },
    {
        "english": "product",
        "pronunciation": "प्रॉडक्ट",
        "breakdown": "प (p) + र (r) + ओ (o) + ड (d) + यू (u) + क (k) + ट (t)",
        "translation": "उत्पाद"
    },
    {
        "english": "program",
        "pronunciation": "प्रोग्राम",
        "breakdown": "प (p) + र (r) + ओ (o) + ग (g) + र (r) + ए (a) + म (m)",
        "translation": "कार्यक्रम"
    },
    {
        "english": "project",
        "pronunciation": "प्रोजेक्ट",
        "breakdown": "प (p) + र (r) + ओ (o) + ज (j) + इ (i) + क (k) + ट (t)",
        "translation": "परियोजना"
    },
    {
        "english": "promise",
        "pronunciation": "प्रॉमिस",
        "breakdown": "प (p) + र (r) + ओ (o) + म (m) + आई (i) + स (s)",
        "translation": "वादा करना"
    },
    {
        "english": "protect",
        "pronunciation": "प्रोटेक्ट",
        "breakdown": "प (p) + र (r) + ओ (o) + ट (t) + एक (e) + ट (t)",
        "translation": "सुरक्षित करना"
    },
    {
        "english": "prove",
        "pronunciation": "प्रूव",
        "breakdown": "प (p) + रू (ru) + व (v)",
        "translation": "साबित करना"
    },
    {
        "english": "pull",
        "pronunciation": "पुल",
        "breakdown": "प (p) + उ (u) + ल (l)",
        "translation": "खींचना"
    },
    {
        "english": "push",
        "pronunciation": "पुश",
        "breakdown": "प (p) + उ (u) + श (sh)",
        "translation": "धकेलना"
    },
    {
        "english": "put",
        "pronunciation": "पुट",
        "breakdown": "प (p) + उ (u) + ट (t)",
        "translation": "रखना"
    },
    {
        "english": "quality",
        "pronunciation": "क्वालिटी",
        "breakdown": "क (k) + व (v) + आ (a) + ल (l) + आई (i) + ट (t) + ई (y)",
        "translation": "गुणवत्ता"
    },
    {
        "english": "question",
        "pronunciation": "क्वेश्चन",
        "breakdown": "क (k) + व (v) + ए (e) + स (s) + ट (t) + इ (i) + ओ (o) + न (n)",
        "translation": "प्रश्न"
    },
    {
        "english": "quick",
        "pronunciation": "क्विक",
        "breakdown": "क (k) + व (v) + आई (i) + क (k)",
        "translation": "तेज़"
    },
    {
        "english": "quiet",
        "pronunciation": "क्वाइट",
        "breakdown": "क (k) + व (v) + आई (i) + ट (t)",
        "translation": "शांत"
    },
    {
        "english": "quite",
        "pronunciation": "क्वाइट",
        "breakdown": "क (k) + व (v) + आई (i) + ट (t) + e (e)",
        "translation": "बिल्कुल"
    },
    {
        "english": "race",
        "pronunciation": "रेस",
        "breakdown": "र (r) + ए (a) + स (s)",
        "translation": "रेस"
    },
    {
        "english": "rain",
        "pronunciation": "रेन",
        "breakdown": "र (r) + ए (a) + न (n)",
        "translation": "बारिश"
    },
    {
        "english": "raise",
        "pronunciation": "रेज़",
        "breakdown": "र (r) + ए (a) + ज़ (z)",
        "translation": "उठाना"
    },
    {
        "english": "range",
        "pronunciation": "रेंज",
        "breakdown": "र (r) + ए (a) + न (n) + ज (j)",
        "translation": "सीमा"
    },
    {
        "english": "rate",
        "pronunciation": "रेट",
        "breakdown": "र (r) + ए (a) + ट (t)",
        "translation": "दर"
    },
    {
        "english": "reach",
        "pronunciation": "रीच",
        "breakdown": "र (r) + ई (i) + च (ch)",
        "translation": "पहुंचना"
    },
    {
        "english": "read",
        "pronunciation": "रीड",
        "breakdown": "र (r) + ई (i) + ड (d)",
        "translation": "पढ़ना"
    },
    {
        "english": "ready",
        "pronunciation": "रेडी",
        "breakdown": "र (r) + ई (e) + ड (d) + ई (i)",
        "translation": "तैयार"
    },
    {
        "english": "real",
        "pronunciation": "रीयल",
        "breakdown": "र (r) + ई (e) + ए (a) + ल (l)",
        "translation": "वास्तविक"
    },
    {
        "english": "reason",
        "pronunciation": "रीज़न",
        "breakdown": "र (r) + ई (e) + ज़ (z) + अ (a) + न (n)",
        "translation": "कारण"
    },
    {
        "english": "receive",
        "pronunciation": "रीसीव",
        "breakdown": "र (r) + ई (e) + स (s) + ई (i) + व (v)",
        "translation": "प्राप्त करना"
    },
    {
        "english": "recent",
        "pronunciation": "रीसेंट",
        "breakdown": "र (r) + ई (e) + स (s) + ए (a) + न (n) + ट (t)",
        "translation": "हालिया"
    },
    {
        "english": "record",
        "pronunciation": "रिकॉर्ड",
        "breakdown": "र (r) + ई (e) + क (k) + ऑ (o) + र (r) + ड (d)",
        "translation": "रिकॉर्ड"
    },
    {
        "english": "red",
        "pronunciation": "रेड",
        "breakdown": "र (r) + ई (e) + ड (d)",
        "translation": "लाल"
    },
    {
        "english": "relate",
        "pronunciation": "रिलेट",
        "breakdown": "र (r) + ई (e) + ल (l) + ए (a) + ट (t)",
        "translation": "संबंधित करना"
    },
    {
        "english": "release",
        "pronunciation": "रिलीज़",
        "breakdown": "र (r) + ई (e) + ल (l) + ई (i) + ज़ (z)",
        "translation": "रिहा करना"
    },
    {
        "english": "remain",
        "pronunciation": "रिमेन",
        "breakdown": "र (r) + ई (e) + म (m) + ए (a) + न (n)",
        "translation": "रहना"
    },
    {
        "english": "remember",
        "pronunciation": "रीमेंबर",
        "breakdown": "र (r) + ई (e) + म (m) + ए (a) + म (m) + ब (b) + ई (i) + र (r)",
        "translation": "याद रखना"
    },
    {
        "english": "remind",
        "pronunciation": "रिमाइंड",
        "breakdown": "र (r) + ई (e) + म (m) + आई (i) + न (n) + ड (d)",
        "translation": "याद दिलाना"
    },
    {
        "english": "remove",
        "pronunciation": "रीमूव",
        "breakdown": "र (r) + ई (e) + म (m) + ओ (o) + व (v)",
        "translation": "हटाना"
    },
    {
        "english": "report",
        "pronunciation": "रिपोर्ट",
        "breakdown": "र (r) + ई (e) + प (p) + ओ (o) + र (r) + ट (t)",
        "translation": "रिपोर्ट"
    },
    {
        "english": "require",
        "pronunciation": "रिपॉयर",
        "breakdown": "र (r) + इ (i) + क (k) + व (v) + आ (a) + य (y) + र (r)",
        "translation": "आवश्यकता"
    },
    {
        "english": "research",
        "pronunciation": "रिसर्च",
        "breakdown": "र (r) + ई (i) + स (s) + अ (a) + र (r) + च (ch)",
        "translation": "अनुसंधान"
    },
    {
        "english": "result",
        "pronunciation": "रिज़ल्ट",
        "breakdown": "र (r) + इ (i) + ज़ (z) + ल (l) + ट (t)",
        "translation": "परिणाम"
    },
    {
        "english": "return",
        "pronunciation": "रिटर्न",
        "breakdown": "र (r) + ई (e) + ट (t) + ई (i) + र (r) + न (n)",
        "translation": "वापस"
    },
    {
        "english": "reveal",
        "pronunciation": "रिवील",
        "breakdown": "र (r) + ई (e) + व (v) + ई (i) + ल (l)",
        "translation": "प्रकट करना"
    },
    {
        "english": "revenue",
        "pronunciation": "रेवेन्यू",
        "breakdown": "र (r) + ई (e) + व (v) + ए (a) + न (n) + यु (u)",
        "translation": "राजस्व"
    },
    {
        "english": "review",
        "pronunciation": "रीव्यू",
        "breakdown": "र (r) + ई (e) + व (v) + यू (u)",
        "translation": "समीक्षा"
    },
    {
        "english": "ride",
        "pronunciation": "राइड",
        "breakdown": "र (r) + आई (i) + ड (d)",
        "translation": "सवारी"
    },
    {
        "english": "ring",
        "pronunciation": "रिंग",
        "breakdown": "र (r) + इ (i) + न (n) + ग (g)",
        "translation": "अंगूठी"
    },
    {
        "english": "rise",
        "pronunciation": "राइज",
        "breakdown": "र (r) + आई (i) + ज़ (z)",
        "translation": "उठना"
    },
    {
        "english": "risk",
        "pronunciation": "रिस्क",
        "breakdown": "र (r) + आई (i) + स (s) + क (k)",
        "translation": "जोखिम"
    },
    {
        "english": "road",
        "pronunciation": "रोड",
        "breakdown": "र (r) + ओ (o) + ड (d)",
        "translation": "सड़क"
    },
    {
        "english": "rock",
        "pronunciation": "रॉक",
        "breakdown": "र (r) + ओ (o) + क (k)",
        "translation": "चट्टान"
    },
    {
        "english": "roll",
        "pronunciation": "रोल",
        "breakdown": "र (r) + ओ (o) + ल (l)",
        "translation": "घुमाना"
    },
    {
        "english": "room",
        "pronunciation": "रूम",
        "breakdown": "र (r) + ओ (o) + ओ (o) + म (m)",
        "translation": "कमरा"
    },
    {
        "english": "rule",
        "pronunciation": "रूल",
        "breakdown": "र (r) + यू (u) + ल (l)",
        "translation": "नियम"
    },
    {
        "english": "run",
        "pronunciation": "रन",
        "breakdown": "र (r) + उ (u) + न (n)",
        "translation": "दौड़ना"
    },
    {
        "english": "Rush",
        "pronunciation": "रश",
        "breakdown": "र (r) + श (sh)",
        "translation": "जल्दी करना"
    },
    {
        "english": "Sad",
        "pronunciation": "सैड",
        "breakdown": "स (s) + ऐ (a) + ड (d)",
        "translation": "उदास"
    },
    {
        "english": "Safe",
        "pronunciation": "सेफ",
        "breakdown": "स (s) + ऐ (a) + फ (f)",
        "translation": "सुरक्षित"
    },
    {
        "english": "Sail",
        "pronunciation": "सेल",
        "breakdown": "स (s) + ए (a) + ल (l)",
        "translation": "पतंग"
    },
    {
        "english": "Salt",
        "pronunciation": "सॉल्ट",
        "breakdown": "स (s) + ऑ (au) + ल (l) + ट (t)",
        "translation": "नमक"
    },
    {
        "english": "Same",
        "pronunciation": "सेम",
        "breakdown": "स (s) + ए (a) + म (m)",
        "translation": "वही"
    },
    {
        "english": "Sand",
        "pronunciation": "सैंड",
        "breakdown": "स (s) + ऐ (a) + न (n) + ड (d)",
        "translation": "रेत"
    },
    {
        "english": "Save",
        "pronunciation": "सेव",
        "breakdown": "स (s) + ए (a) + व (v)",
        "translation": "बचाना"
    },
    {
        "english": "Say",
        "pronunciation": "से",
        "breakdown": "स (s) + ए (a)",
        "translation": "कहना"
    },
    {
        "english": "School",
        "pronunciation": "स्कूल",
        "breakdown": "स (s) + क (k) +ू (u) + ल (l)",
        "translation": "स्कूल"
    },
    {
        "english": "Science",
        "pronunciation": "साइंस",
        "breakdown": "स (s) + आ (ai) + इ (i) + न (n) + स (s)",
        "translation": "विज्ञान"
    },
    {
        "english": "Scissors",
        "pronunciation": "सिज़र्स",
        "breakdown": "स (s) + इ (i) + ज़ (z) + र (r) + स (s)",
        "translation": "कैंची"
    },
    {
        "english": "Search",
        "pronunciation": "सर्च",
        "breakdown": "स (s) + ए (e) + र (r) + च (ch)",
        "translation": "खोजना"
    },
    {
        "english": "Seat",
        "pronunciation": "सीट",
        "breakdown": "स (s) + ई (ee) + ट (t)",
        "translation": "सीट"
    },
    {
        "english": "Second",
        "pronunciation": "सेकंड",
        "breakdown": "स (s) + ए (e) + क (k) + न (n) + ड (d)",
        "translation": "दूसरा"
    },
    {
        "english": "See",
        "pronunciation": "सी",
        "breakdown": "स (s) + ई (ee)",
        "translation": "देखना"
    },
    {
        "english": "Seem",
        "pronunciation": "सीम",
        "breakdown": "स (s) + ई (ee) + म (m)",
        "translation": "लगना"
    },
    {
        "english": "Sell",
        "pronunciation": "सेल",
        "breakdown": "स (s) + ए (e) + ल (l)",
        "translation": "बेचना"
    },
    {
        "english": "Send",
        "pronunciation": "सेंड",
        "breakdown": "स (s) + ए (e) + न (n) + ड (d)",
        "translation": "भेजना"
    },
    {
        "english": "Sentence",
        "pronunciation": "सेन्टेंस",
        "breakdown": "स (s) + ए (e) + न (n) + ट (t) + ए (e) + न (n) + स (s)",
        "translation": "वाक्य"
    },
    {
        "english": "Serve",
        "pronunciation": "सर्व",
        "breakdown": "स (s) + ए (e) + र (r) + व (v)",
        "translation": "सेवा करना"
    },
    {
        "english": "Seven",
        "pronunciation": "सेवेन",
        "breakdown": "स (s) + ए (e) + व (v) + न (n)",
        "translation": "सात"
    },
    {
        "english": "Several",
        "pronunciation": "सेवरल",
        "breakdown": "स (s) + ए (e) + व (v) + र (r) + अ (a) + ल (l)",
        "translation": "कई"
    },
    {
        "english": "Shade",
        "pronunciation": "शेड",
        "breakdown": "श (sh) + ए (a) + ड (d)",
        "translation": "छाया"
    },
    {
        "english": "Shadow",
        "pronunciation": "शैडो",
        "breakdown": "श (sh) + ए (a) + ड (d) + ओ (o)",
        "translation": "परछाई"
    },
    {
        "english": "Shake",
        "pronunciation": "शेक",
        "breakdown": "श (sh) + ए (a) + क (k)",
        "translation": "हिलाना"
    },
    {
        "english": "Shape",
        "pronunciation": "शेप",
        "breakdown": "श (sh) + ए (a) + प (p)",
        "translation": "आकृति"
    },
    {
        "english": "Share",
        "pronunciation": "शेयर",
        "breakdown": "श (sh) + ए (e) + र (r)",
        "translation": "बांटना"
    },
    {
        "english": "Sharp",
        "pronunciation": "शार्प",
        "breakdown": "श (sh) + आ (a) + र (r) + प (p)",
        "translation": "तेज"
    },
    {
        "english": "She",
        "pronunciation": "शी",
        "breakdown": "श (sh) + ई (ee)",
        "translation": "वह"
    },
    {
        "english": "Sheep",
        "pronunciation": "शेप",
        "breakdown": "श (sh) + ई (ee) + प (p)",
        "translation": "भेड़"
    },
    {
        "english": "Sheet",
        "pronunciation": "शीट",
        "breakdown": "श (sh) + ई (ee) + ट (t)",
        "translation": "चादर"
    },
    {
        "english": "Shelf",
        "pronunciation": "शेल्फ",
        "breakdown": "श (sh) + ए (e) + ल (l) + फ (f)",
        "translation": "शेल्फ"
    },
    {
        "english": "Shine",
        "pronunciation": "शाइन",
        "breakdown": "श (sh) + ऐ (ai) + न (n)",
        "translation": "चमकना"
    },
    {
        "english": "Ship",
        "pronunciation": "शिप",
        "breakdown": "श (sh) + इ (i) + प (p)",
        "translation": "जहाज"
    },
    {
        "english": "Shirt",
        "pronunciation": "शर्ट",
        "breakdown": "श (sh) + र (r) + ट (t)",
        "translation": "कमीज़"
    },
    {
        "english": "Shoe",
        "pronunciation": "शू",
        "breakdown": "श (sh) + ू (u)",
        "translation": "जूता"
    },
    {
        "english": "Shoot",
        "pronunciation": "शूट",
        "breakdown": "श (sh) + ू (u) + ट (t)",
        "translation": "गोली मारना"
    },
    {
        "english": "Shop",
        "pronunciation": "शॉप",
        "breakdown": "श (sh) + ऑ (o) + प (p)",
        "translation": "दुकान"
    },
    {
        "english": "Short",
        "pronunciation": "शॉर्ट",
        "breakdown": "श (sh) + ऑ (o) + र (r) + ट (t)",
        "translation": "छोटा"
    },
    {
        "english": "Should",
        "pronunciation": "शुड",
        "breakdown": "श (sh) +ु (u) + ड (d)",
        "translation": "चाहिए"
    },
    {
        "english": "Shoulder",
        "pronunciation": "शोल्डर",
        "breakdown": "श (sh) + ओ (o) + ल (l) + ड (d) + र (r)",
        "translation": "कंधा"
    },
    {
        "english": "Shout",
        "pronunciation": "शाउट",
        "breakdown": "श (sh) + आ (au) + उ (u) + ट (t)",
        "translation": "चिल्लाना"
    },
    {
        "english": "Show",
        "pronunciation": "शो",
        "breakdown": "श (sh) + ओ (o)",
        "translation": "दिखाना"
    },
    {
        "english": "Sick",
        "pronunciation": "सिक",
        "breakdown": "स (s) + इ (i) + क (k)",
        "translation": "बीमार"
    },
    {
        "english": "Side",
        "pronunciation": "साइड",
        "breakdown": "स (s) + आइ (ai) + ड (d)",
        "translation": "पक्ष"
    },
    {
        "english": "Signal",
        "pronunciation": "सिग्नल",
        "breakdown": "स (s) + इ (i) + ग (g) + न (n) + ल (l)",
        "translation": "संकेत"
    },
    {
        "english": "Silence",
        "pronunciation": "साइलेंस",
        "breakdown": "स (s) + आ (ai) + इ (i) + ल (l) + ए (e) + न (n) + स (s)",
        "translation": "चुप्पी"
    },
    {
        "english": "Silly",
        "pronunciation": "सिली",
        "breakdown": "स (s) + इ (i) + ल (l) + ई (ee)",
        "translation": "बेवकूफ"
    },
    {
        "english": "Silver",
        "pronunciation": "सिल्वर",
        "breakdown": "स (s) + इ (i) + ल (l) + व (v) + र (r)",
        "translation": "चाँदी"
    },
    {
        "english": "Similar",
        "pronunciation": "सिमिलर",
        "breakdown": "स (s) + इ (i) + म (m) + इ (i) + ल (l) + र (r)",
        "translation": "समान"
    },
    {
        "english": "Simple",
        "pronunciation": "सिंपल",
        "breakdown": "स (s) + इ (i) + म (m) + प (p) + ल (l)",
        "translation": "सरल"
    },
    {
        "english": "Since",
        "pronunciation": "सिंस",
        "breakdown": "स (s) + इ (i) + न (n) + स (s)",
        "translation": "से"
    },
    {
        "english": "Sing",
        "pronunciation": "सिंग",
        "breakdown": "स (s) + इ (i) + न (n) + ग (g)",
        "translation": "गाना"
    },
    {
        "english": "Single",
        "pronunciation": "सिंगल",
        "breakdown": "स (s) + इ (i) + न (n) + ग (g) + ल (l)",
        "translation": "एकल"
    },
    {
        "english": "Sink",
        "pronunciation": "सिंक",
        "breakdown": "स (s) + इ (i) + न (n) + क (k)",
        "translation": "डूबना"
    },
    {
        "english": "Sister",
        "pronunciation": "सिस्टर",
        "breakdown": "स (s) + इ (i) + स (s) + ट (t) + र (r)",
        "translation": "बहन"
    },
    {
        "english": "Sit",
        "pronunciation": "सिट",
        "breakdown": "स (s) + इ (i) + ट (t)",
        "translation": "बैठना"
    },
    {
        "english": "Six",
        "pronunciation": "सिक्स",
        "breakdown": "स (s) + आई (i) + क (k) + स (s)",
        "translation": "छह"
    },
    {
        "english": "Size",
        "pronunciation": "साइज",
        "breakdown": "स (s) + आई (i) + ज (z)",
        "translation": "आकार"
    },
    {
        "english": "Skill",
        "pronunciation": "स्किल",
        "breakdown": "स (s) + क (k) + इ (i) + ल (l)",
        "translation": "कौशल"
    },
    {
        "english": "Skin",
        "pronunciation": "स्किन",
        "breakdown": "स (s) + क (k) + इ (i) + न (n)",
        "translation": "त्वचा"
    },
    {
        "english": "Skirt",
        "pronunciation": "स्कर्ट",
        "breakdown": "स (s) + क (k) + र (r) + ट (t)",
        "translation": "स्कर्ट"
    },
    {
        "english": "Sky",
        "pronunciation": "स्काई",
        "breakdown": "स (s) + क (k) + आइ (ai)",
        "translation": "आसमान"
    },
    {
        "english": "Sleep",
        "pronunciation": "स्लीप",
        "breakdown": "स (s) + ल (l) + ई (ee) + प (p)",
        "translation": "सोना"
    },
    {
        "english": "Slip",
        "pronunciation": "स्लिप",
        "breakdown": "स (s) + ल (l) + इ (i) + प (p)",
        "translation": "फिसलना"
    },
    {
        "english": "Slow",
        "pronunciation": "स्लो",
        "breakdown": "स (s) + ल (l) + ओ (o)",
        "translation": "धीमा"
    },
    {
        "english": "Small",
        "pronunciation": "स्मॉल",
        "breakdown": "स (s) + म (m) + ऑ (a) + ल (l)",
        "translation": "छोटा"
    },
    {
        "english": "Smell",
        "pronunciation": "स्मेल",
        "breakdown": "स (s) + म (m) + ए (e) + ल (l)",
        "translation": "गंध"
    },
    {
        "english": "Smile",
        "pronunciation": "स्माइल",
        "breakdown": "स (s) + म (m) + आइ (ai) + ल (l)",
        "translation": "मुस्कान"
    },
    {
        "english": "Smoke",
        "pronunciation": "स्मोक",
        "breakdown": "स (s) + म (m) + ओ (o) + क (k)",
        "translation": "धुंआ"
    },
    {
        "english": "Snow",
        "pronunciation": "स्नो",
        "breakdown": "स (s) + न (n) + ओ (o)",
        "translation": "बरफ"
    },
    {
        "english": "So",
        "pronunciation": "सो",
        "breakdown": "स (s) + ओ (o)",
        "translation": "इसलिए"
    },
    {
        "english": "Soap",
        "pronunciation": "सोप",
        "breakdown": "स (s) + ओ (o) + प (p)",
        "translation": "साबुन"
    },
    {
        "english": "Sock",
        "pronunciation": "सॉक",
        "breakdown": "स (s) + ऑ (o) + क (k)",
        "translation": "मोज़ा"
    },
    {
        "english": "Soft",
        "pronunciation": "सॉफ्ट",
        "breakdown": "स (s) + ऑ (o) + फ (f) + ट (t)",
        "translation": "नरम"
    },
    {
        "english": "Some",
        "pronunciation": "सम",
        "breakdown": "स (s) + अ (a) + म (m)",
        "translation": "कुछ"
    },
    {
        "english": "Someone",
        "pronunciation": "समवन",
        "breakdown": "स (s) + अ (a) + म (m) + व (v) + अ (a) + न (n)",
        "translation": "कोई"
    },
    {
        "english": "Something",
        "pronunciation": "समथिंग",
        "breakdown": "स (s) + अ (a) + म (m) + थ (th) + इ (i) + न (n) + ग (g)",
        "translation": "कुछ"
    },
    {
        "english": "Sometimes",
        "pronunciation": "समटाइम्स",
        "breakdown": "स (s) + अ (a) + म (m) + ट (t) + आई (i) + म (m) + स (s)",
        "translation": "कभी-कभी"
    },
    {
        "english": "Son",
        "pronunciation": "सन",
        "breakdown": "स (s) + ओ (o) + न (n)",
        "translation": "पुत्र"
    },
    {
        "english": "Soon",
        "pronunciation": "सून",
        "breakdown": "स (s) + ू (u) + न (n)",
        "translation": "जल्द"
    },
    {
        "english": "Sorry",
        "pronunciation": "सॉरी",
        "breakdown": "स (s) + ऑ (o) + र (r) + ई (ee)",
        "translation": "माफ़ी"
    },
    {
        "english": "Sound",
        "pronunciation": "साउंड",
        "breakdown": "स (s) + आ (au) + उ (u) + न (n) + ड (d)",
        "translation": "ध्वनि"
    },
    {
        "english": "Soup",
        "pronunciation": "सूप",
        "breakdown": "स (s) + ू (u) + प (p)",
        "translation": "सूप"
    },
    {
        "english": "South",
        "pronunciation": "साउथ",
        "breakdown": "स (s) + आ (au) + उ (u) + थ (th)",
        "translation": "दक्षिण"
    },
    {
        "english": "Space",
        "pronunciation": "स्पेस",
        "breakdown": "स (s) + प (p) + ए (e) + स (s)",
        "translation": "स्थान"
    },
    {
        "english": "Speak",
        "pronunciation": "स्पीक",
        "breakdown": "स (s) + प (p) + ई (ee) + क (k)",
        "translation": "बोलना"
    },
    {
        "english": "Special",
        "pronunciation": "स्पेशल",
        "breakdown": "स (s) + प (p) + ए (e) + श (sh) + ल (l)",
        "translation": "विशेष"
    },
    {
        "english": "Speed",
        "pronunciation": "स्पीड",
        "breakdown": "स (s) + प (p) + ई (ee) + ड (d)",
        "translation": "गति"
    },
    {
        "english": "Spell",
        "pronunciation": "स्पेल",
        "breakdown": "स (s) + प (p) + ए (e) + ल (l)",
        "translation": "वर्णन करना"
    },
    {
        "english": "Spend",
        "pronunciation": "स्पेंड",
        "breakdown": "स (s) + प (p) + ए (e) + न (n) + ड (d)",
        "translation": "खर्च करना"
    },
    {
        "english": "Spoon",
        "pronunciation": "स्पून",
        "breakdown": "स (s) + प (p) + ू (u) + न (n)",
        "translation": "चम्मच"
    },
    {
        "english": "Sport",
        "pronunciation": "स्पोर्ट",
        "breakdown": "स (s) + प (p) + ऑ (o) + र (r) + ट (t)",
        "translation": "खेल"
    },
    {
        "english": "Spread",
        "pronunciation": "स्प्रेड",
        "breakdown": "स (s) + प (p) + र (r) + ई (e) + ड (d)",
        "translation": "फैलाना"
    },
    {
        "english": "Spring",
        "pronunciation": "स्प्रिंग",
        "breakdown": "स (s) + प (p) + र (r) + इ (i) + न (n) + ग (g)",
        "translation": "बसंत"
    },
    {
        "english": "Square",
        "pronunciation": "स्क्वायर",
        "breakdown": "स (s) + क (k) + व (w) + आ (a) + र (r)",
        "translation": "वर्ग"
    },
    {
        "english": "Stamp",
        "pronunciation": "स्टाम्प",
        "breakdown": "स (s) + ट (t) + आ (a) + म (m) + प (p)",
        "translation": "टिकट"
    },
    {
        "english": "Stand",
        "pronunciation": "स्टैंड",
        "breakdown": "स (s) + ट (t) + ए (a) + न (n) + ड (d)",
        "translation": "खड़ा होना"
    },
    {
        "english": "Star",
        "pronunciation": "स्टार",
        "breakdown": "स (s) + ट (t) + आ (a) + र (r)",
        "translation": "तारा"
    },
    {
        "english": "Start",
        "pronunciation": "स्टार्ट",
        "breakdown": "स (s) + ट (t) + आ (a) + र (r) + ट (t)",
        "translation": "शुरू करना"
    },
    {
        "english": "Station",
        "pronunciation": "स्टेशन",
        "breakdown": "स (s) + ट (t) + ए (e) + श (sh) + न (n)",
        "translation": "स्टेशन"
    },
    {
        "english": "Stay",
        "pronunciation": "स्टे",
        "breakdown": "स (s) + ट (t) + ए (e)",
        "translation": "रुकना"
    },
    {
        "english": "Steal",
        "pronunciation": "स्टील",
        "breakdown": "स (s) + ट (t) + ई (ee) + ल (l)",
        "translation": "चोरी करना"
    },
    {
        "english": "Steam",
        "pronunciation": "स्टीम",
        "breakdown": "स (s) + टी (t) + ई (ee) + म (m)",
        "translation": "भाप"
    },
    {
        "english": "Step",
        "pronunciation": "स्टेप",
        "breakdown": "स (s) + ट (t) + ए (e) + प (p)",
        "translation": "कदम"
    },
    {
        "english": "Still",
        "pronunciation": "स्टिल",
        "breakdown": "स (s) + ट (t) + इ (i) + ल (l)",
        "translation": "अभी भी"
    },
    {
        "english": "Stomach",
        "pronunciation": "स्टमक",
        "breakdown": "स (s) + ट (t) + ओ (o) + म (m) + अ (a) + च (ch)",
        "translation": "पेट"
    },
    {
        "english": "Stone",
        "pronunciation": "स्टोन",
        "breakdown": "स (s) + ट (t) + ओ (o) + न (n)",
        "translation": "पत्थर"
    },
    {
        "english": "Stop",
        "pronunciation": "स्टॉप",
        "breakdown": "स (s) + ट (t) + ओ (o) + प (p)",
        "translation": "रोकना"
    },
    {
        "english": "Store",
        "pronunciation": "स्टोर",
        "breakdown": "स (s) + ट (t) + ओ (o) + र (r)",
        "translation": "दुकान"
    },
    {
        "english": "Storm",
        "pronunciation": "स्टॉर्म",
        "breakdown": "स (s) + ट (t) + ओ (o) + र (r) + म (m)",
        "translation": "आंधी"
    },
    {
        "english": "Story",
        "pronunciation": "स्टोरी",
        "breakdown": "स (s) + ट (t) + ओ (o) + र (r) + ई (ee)",
        "translation": "कहानी"
    },
    {
        "english": "Straight",
        "pronunciation": "स्ट्रेट",
        "breakdown": "स (s) + ट (t) + र (r) + ए (ai) + ट (t)",
        "translation": "सीधा"
    },
    {
        "english": "Street",
        "pronunciation": "स्ट्रीट",
        "breakdown": "स (s) + ट (t) + र (r) + ई (i) + ट (t)",
        "translation": "गली"
    },
    {
        "english": "Strong",
        "pronunciation": "स्ट्रॉन्ग",
        "breakdown": "स (s) + ट (t) + र (r) + ऑ (o) + न (n) + ग (g)",
        "translation": "मजबूत"
    },
    {
        "english": "Study",
        "pronunciation": "स्टडी",
        "breakdown": "स (s) + ट (t) + अ (a) + ड (d) + ई (ee)",
        "translation": "अध्ययन करना"
    },
    {
        "english": "Style",
        "pronunciation": "स्टाइल",
        "breakdown": "स (s) + ट (t) + आई (i) + ल (l)",
        "translation": "शैली"
    },
    {
        "english": "Subject",
        "pronunciation": "सब्जेक्ट",
        "breakdown": "स (s) + अ (a) + ब (b) + ज (j) + ए (e) + क (k) + ट (t)",
        "translation": "विषय"
    },
    {
        "english": "Success",
        "pronunciation": "सक्सेस",
        "breakdown": "स (s) + अ (a) + क (k) + स (s) + ई (ee) + स (s)",
        "translation": "सफलता"
    },
    {
        "english": "Such",
        "pronunciation": "सच",
        "breakdown": "स (s) + अ (a) + च (ch)",
        "translation": "ऐसा"
    },
    {
        "english": "Suddenly",
        "pronunciation": "सडनली",
        "breakdown": "स (s) + अ (a) + ड (d) + न (n) + ल (l) + ई (ee)",
        "translation": "अचानक"
    },
    {
        "english": "Sugar",
        "pronunciation": "शुगर",
        "breakdown": "श (sh) +ु (u) + ग (g) + र (r)",
        "translation": "चीनी"
    },
    {
        "english": "Suit",
        "pronunciation": "सूट",
        "breakdown": "स (s) + ऊ (u) + ट (t)",
        "translation": "सूट"
    },
    {
        "english": "Summer",
        "pronunciation": "समर",
        "breakdown": "स (s) + अ (a) + म (m) + ए (e) + र (r)",
        "translation": "गर्मी"
    },
    {
        "english": "Sun",
        "pronunciation": "सन",
        "breakdown": "स (s) + अ (a) + न (n)",
        "translation": "सूरज"
    },
    {
        "english": "Super",
        "pronunciation": "सुपर",
        "breakdown": "स (s) + उ (u) + प (p) + र (r)",
        "translation": "सुपर"
    },
    {
        "english": "Sure",
        "pronunciation": "श्योर",
        "breakdown": "श (sh) +् (y) + ओ (o) + र (r)",
        "translation": "निश्चित"
    },
    {
        "english": "Surface",
        "pronunciation": "सर्फेस",
        "breakdown": "स (s) + र (r) + फ़ (f) + ए (e) + स (s)",
        "translation": "सतह"
    },
    {
        "english": "Surprise",
        "pronunciation": "सरप्राइज",
        "breakdown": "स (s) + र (r) + ऊ (u) + प (p) + र (r) + आई (i) + ज़ (z)",
        "translation": "आश्चर्य"
    },
    {
        "english": "Sweet",
        "pronunciation": "स्वीट",
        "breakdown": "स (s) + व (w) + ई (ee) + ट (t)",
        "translation": "मीठा"
    },
    {
        "english": "Table",
        "pronunciation": "टेबल",
        "breakdown": "ट (t) + ए (a) + ब (b) + ल (l)",
        "translation": "टेबल"
    },
    {
        "english": "Take",
        "pronunciation": "टेक",
        "breakdown": "ट (t) + ए (a) + क (k)",
        "translation": "लेना"
    },
    {
        "english": "Talk",
        "pronunciation": "टॉक",
        "breakdown": "ट (t) + ऑ (o) + क (k)",
        "translation": "बात करना"
    },
    {
        "english": "Taste",
        "pronunciation": "टेस्ट",
        "breakdown": "ट (t) + ए (e) + स (s) + ट (t)",
        "translation": "स्वाद"
    },
    {
        "english": "Teach",
        "pronunciation": "टीच",
        "breakdown": "टी (t) + च (ch)",
        "translation": "सिखाना"
    },
    {
        "english": "Team",
        "pronunciation": "टीम",
        "breakdown": "टी (t) + म (m)",
        "translation": "टीम"
    },
    {
        "english": "Technology",
        "pronunciation": "टेक्नोलॉजी",
        "breakdown": "ट (t) + इ (i) + क (k) + न (n) + ओ (o) + ल (l) +ॉ (o) + ज (j) +ी (ee)",
        "translation": "प्रौद्योगिकी"
    },
    {
        "english": "Television",
        "pronunciation": "टेलीविजन",
        "breakdown": "ट (t) + ए (e) + ल (l) + ई (ee) + व (v) + ज (j) +़ (i) + न (n)",
        "translation": "टीवी"
    },
    {
        "english": "Tell",
        "pronunciation": "टेल",
        "breakdown": "ट (t) + ए (e) + ल (l)",
        "translation": "बताना"
    },
    {
        "english": "Temperature",
        "pronunciation": "टेम्परेचर",
        "breakdown": "ट (t) + ए (e) + म (m) + प (p) + र (r) + ए (e) + च (ch) + र (r)",
        "translation": "तापमान"
    },
    {
        "english": "Test",
        "pronunciation": "टेस्ट",
        "breakdown": "ट (t) + ए (e) + स (s) + ट (t)",
        "translation": "परीक्षा"
    },
    {
        "english": "Thank",
        "pronunciation": "थैंक",
        "breakdown": "थ (th) + ए (a) + न (n) + क (k)",
        "translation": "धन्यवाद"
    },
    {
        "english": "That",
        "pronunciation": "थैट",
        "breakdown": "थ (th) + ए (a) + ट (t)",
        "translation": "वह"
    },
    {
        "english": "The",
        "pronunciation": "दी",
        "breakdown": "थ (th) + ए (e)",
        "translation": "यह"
    },
    {
        "english": "Their",
        "pronunciation": "देयर",
        "breakdown": "थ (th) + ए (e) + र (r)",
        "translation": "उनका"
    },
    {
        "english": "Then",
        "pronunciation": "थेन",
        "breakdown": "थ (th) + ए (e) + न (n)",
        "translation": "तब"
    },
    {
        "english": "There",
        "pronunciation": "देयर",
        "breakdown": "थ (th) + ए (e) + र (r)",
        "translation": "वहाँ"
    },
    {
        "english": "These",
        "pronunciation": "दीज़",
        "breakdown": "थ (th) + ई (ee) + ज़ (z)",
        "translation": "ये"
    },
    {
        "english": "They",
        "pronunciation": "दे",
        "breakdown": "थ (th) + ए (e) + य (y)",
        "translation": "वे"
    },
    {
        "english": "Thing",
        "pronunciation": "थिंग",
        "breakdown": "थ (th) + इ (i) + न (n) + ग (g)",
        "translation": "चीज़"
    },
    {
        "english": "Think",
        "pronunciation": "थिंक",
        "breakdown": "थ (th) + इ (i) + न (n) + क (k)",
        "translation": "सोचना"
    },
    {
        "english": "Third",
        "pronunciation": "थर्ड",
        "breakdown": "थ (th) + ए (e) + र (r) + ड (d)",
        "translation": "तीसरा"
    },
    {
        "english": "This",
        "pronunciation": "थिस",
        "breakdown": "थ (th) + इ (i) + स (s)",
        "translation": "यह"
    },
    {
        "english": "Those",
        "pronunciation": "थोज़",
        "breakdown": "थ (th) + ओ (o) + ज़ (z)",
        "translation": "वे"
    },
    {
        "english": "Through",
        "pronunciation": "थ्रू",
        "breakdown": "थ (th) + र (r) + ओ (o) + यू (u)",
        "translation": "के माध्यम से"
    },
    {
        "english": "Throw",
        "pronunciation": "थ्रो",
        "breakdown": "थ (th) + र (r) + ओ (o)",
        "translation": "फेंकना"
    },
    {
        "english": "Time",
        "pronunciation": "टाइम",
        "breakdown": "ट (t) + आई (i) + म (m) + ई (ee)",
        "translation": "समय"
    },
    {
        "english": "To",
        "pronunciation": "टु",
        "breakdown": "ट (t) + ओ (o)",
        "translation": "को"
    },
    {
        "english": "Today",
        "pronunciation": "टुडे",
        "breakdown": "ट (t) + ओ (o) + ड (d) + ए (e) + य (y)",
        "translation": "आज"
    },
    {
        "english": "Together",
        "pronunciation": "टुगेदर",
        "breakdown": "ट (t) + ओ (o) + ग (g) + ए (e) + ड (d) + र (r)",
        "translation": "साथ"
    },
    {
        "english": "Too",
        "pronunciation": "टू",
        "breakdown": "ट (t) + ओ (o)",
        "translation": "बहुत"
    },
    {
        "english": "Trade",
        "pronunciation": "ट्रेड",
        "breakdown": "ट (t) + र (r) + ए (e) + ड (d)",
        "translation": "व्यापार"
    },
    {
        "english": "Train",
        "pronunciation": "ट्रेन",
        "breakdown": "ट (t) + र (r) + ए (e) + न (n)",
        "translation": "ट्रेन"
    },
    {
        "english": "Travel",
        "pronunciation": "ट्रैवल",
        "breakdown": "ट (t) + र (r) + ए (a) + व (v) + ल (l)",
        "translation": "यात्रा"
    },
    {
        "english": "Treat",
        "pronunciation": "ट्रीट",
        "breakdown": "ट (t) + री (r) + ट (t)",
        "translation": "व्यवहार करना"
    },
    {
        "english": "Tree",
        "pronunciation": "ट्री",
        "breakdown": "ट (t) + री (r) + ई (ee)",
        "translation": "पेड़"
    },
    {
        "english": "Table",
        "pronunciation": "टेबल",
        "breakdown": "ट (t) + ए (a) + ब (b) + ल (l)",
        "translation": "टेबल"
    },
    {
        "english": "Take",
        "pronunciation": "टेक",
        "breakdown": "ट (t) + ए (a) + क (k)",
        "translation": "लेना"
    },
    {
        "english": "Talk",
        "pronunciation": "टॉक",
        "breakdown": "ट (t) + ऑ (o) + क (k)",
        "translation": "बात करना"
    },
    {
        "english": "Tall",
        "pronunciation": "टॉल",
        "breakdown": "ट (t) + ऑ (o) + ल (l)",
        "translation": "लंबा"
    },
    {
        "english": "Taste",
        "pronunciation": "स्वाद",
        "breakdown": "ट (t) + ए (a) + स (s) + ट (t)",
        "translation": "स्वाद"
    },
    {
        "english": "Taxi",
        "pronunciation": "टैक्सी",
        "breakdown": "ट (t) + ए (a) + क (k) + स (s) + ई (ee)",
        "translation": "टैक्सी"
    },
    {
        "english": "Tea",
        "pronunciation": "चाय",
        "breakdown": "ट (t) + ई (ee)",
        "translation": "चाय"
    },
    {
        "english": "Teach",
        "pronunciation": "टीच",
        "breakdown": "टी (t) + च (ch)",
        "translation": "सिखाना"
    },
    {
        "english": "Team",
        "pronunciation": "टीम",
        "breakdown": "टी (t) + म (m)",
        "translation": "टीम"
    },
    {
        "english": "Tear",
        "pronunciation": "टियर",
        "breakdown": "ट (t) + ई (ee) + र (r)",
        "translation": "आंसू"
    },
    {
        "english": "Telephone",
        "pronunciation": "टेलीफोन",
        "breakdown": "ट (t) + ए (e) + ल (l) + ई (ee) + फ (f) + ओ (o) + न (n)",
        "translation": "टेलीफोन"
    },
    {
        "english": "Television",
        "pronunciation": "टेलीविजन",
        "breakdown": "ट (t) + ए (e) + ल (l) + ई (ee) + व (v) + ज (j) +़ (i) + न (n)",
        "translation": "टीवी"
    },
    {
        "english": "Tell",
        "pronunciation": "टेल",
        "breakdown": "ट (t) + ए (e) + ल (l)",
        "translation": "बताना"
    },
    {
        "english": "Ten",
        "pronunciation": "टेन",
        "breakdown": "ट (t) + ए (e) + न (n)",
        "translation": "दस"
    },
    {
        "english": "Tennis",
        "pronunciation": "टेनिस",
        "breakdown": "ट (t) + ए (e) + न (n) + आई (i) + स (s)",
        "translation": "टेनिस"
    },
    {
        "english": "Terrible",
        "pronunciation": "टेरीबल",
        "breakdown": "ट (t) + ए (e) + र (r) + आई (i) + ब (b) + ल (l)",
        "translation": "खराब"
    },
    {
        "english": "Test",
        "pronunciation": "टेस्ट",
        "breakdown": "ट (t) + ए (e) + स (s) + ट (t)",
        "translation": "परीक्षा"
    },
    {
        "english": "Than",
        "pronunciation": "थैन",
        "breakdown": "थ (th) + ए (a) + न (n)",
        "translation": "से"
    },
    {
        "english": "That",
        "pronunciation": "थैट",
        "breakdown": "थ (th) + ए (a) + ट (t)",
        "translation": "वह"
    },
    {
        "english": "The",
        "pronunciation": "दी",
        "breakdown": "थ (th) + ए (e)",
        "translation": "यह"
    },
    {
        "english": "Their",
        "pronunciation": "देयर",
        "breakdown": "थ (th) + ए (e) + र (r)",
        "translation": "उनका"
    },
    {
        "english": "Then",
        "pronunciation": "थेन",
        "breakdown": "थ (th) + ए (e) + न (n)",
        "translation": "तब"
    },
    {
        "english": "There",
        "pronunciation": "देयर",
        "breakdown": "थ (th) + ए (e) + र (r)",
        "translation": "वहाँ"
    },
    {
        "english": "Therefore",
        "pronunciation": "थेरफोर",
        "breakdown": "थ (th) + ए (e) + र (r) + फ़ (f) + ओ (o) + र (r)",
        "translation": "इसलिए"
    },
    {
        "english": "These",
        "pronunciation": "दीज़",
        "breakdown": "थ (th) + ई (ee) + ज़ (z)",
        "translation": "ये"
    },
    {
        "english": "Thick",
        "pronunciation": "थिक",
        "breakdown": "थ (th) + इ (i) + क (k)",
        "translation": "गाढ़ा"
    },
    {
        "english": "Thin",
        "pronunciation": "थिन",
        "breakdown": "थ (th) + इ (i) + न (n)",
        "translation": "पतला"
    },
    {
        "english": "Thing",
        "pronunciation": "थिंग",
        "breakdown": "थ (th) + इ (i) + न (n) + ग (g)",
        "translation": "चीज़"
    },
    {
        "english": "Think",
        "pronunciation": "थिंक",
        "breakdown": "थ (th) + इ (i) + न (n) + क (k)",
        "translation": "सोचना"
    },
    {
        "english": "Third",
        "pronunciation": "थर्ड",
        "breakdown": "थ (th) + ए (e) + र (r) + ड (d)",
        "translation": "तीसरा"
    },
    {
        "english": "This",
        "pronunciation": "थिस",
        "breakdown": "थ (th) + इ (i) + स (s)",
        "translation": "यह"
    },
    {
        "english": "Though",
        "pronunciation": "थो",
        "breakdown": "थ (th) + ओ (o) + यू (u)",
        "translation": "हालांकि"
    },
    {
        "english": "Threat",
        "pronunciation": "थ्रेट",
        "breakdown": "थ (th) + र (r) + ए (e) + ट (t)",
        "translation": "धमकी"
    },
    {
        "english": "Three",
        "pronunciation": "थ्री",
        "breakdown": "थ (th) + री (r) + ई (ee)",
        "translation": "तीन"
    },
    {
        "english": "Tidy",
        "pronunciation": "टाइडी",
        "breakdown": "ट (t) + आई (i) + ड (d) + य (y)",
        "translation": "साफ-सुथरा"
    },
    {
        "english": "Tie",
        "pronunciation": "टाई",
        "breakdown": "ट (t) + आई (i)",
        "translation": "टाई"
    },
    {
        "english": "Title",
        "pronunciation": "टाइटल",
        "breakdown": "ट (t) + आई (i) + ट (t) + ल (l)",
        "translation": "शीर्षक"
    },
    {
        "english": "To",
        "pronunciation": "टु",
        "breakdown": "ट (t) + ओ (o)",
        "translation": "को"
    },
    {
        "english": "Today",
        "pronunciation": "टुडे",
        "breakdown": "ट (t) + ओ (o) + ड (d) + ए (e) + य (y)",
        "translation": "आज"
    },
    {
        "english": "Toe",
        "pronunciation": "टो",
        "breakdown": "ट (t) + ओ (o)",
        "translation": "जुड़ी"
    },
    {
        "english": "Together",
        "pronunciation": "टुगेदर",
        "breakdown": "ट (t) + ओ (o) + ग (g) + ए (e) + ड (d) + र (r)",
        "translation": "साथ"
    },
    {
        "english": "Tomorrow",
        "pronunciation": "टुमॉरो",
        "breakdown": "ट (t) + ओ (o) + म (m) + ऑ (o) + र (r) + ओ (o)",
        "translation": "कल"
    },
    {
        "english": "Tonight",
        "pronunciation": "टुनाइट",
        "breakdown": "ट (t) + ओ (o) + न (n) + आई (i) + ट (t)",
        "translation": "आज रात"
    },
    {
        "english": "Too",
        "pronunciation": "टू",
        "breakdown": "ट (t) + ओ (o)",
        "translation": "बहुत"
    },
    {
        "english": "Tool",
        "pronunciation": "टूल",
        "breakdown": "ट (t) + ऊ (oo) + ल (l)",
        "translation": "उपकरण"
    },
    {
        "english": "Tooth",
        "pronunciation": "टूथ",
        "breakdown": "ट (t) + ओ (o) + थ (th)",
        "translation": "दांत"
    },
    {
        "english": "Top",
        "pronunciation": "टॉप",
        "breakdown": "ट (t) + ओ (o) + प (p)",
        "translation": "ऊपर"
    },
    {
        "english": "Total",
        "pronunciation": "टोटल",
        "breakdown": "ट (t) + ओ (o) + ट (t) + ए (a) + ल (l)",
        "translation": "कुल"
    },
    {
        "english": "Touch",
        "pronunciation": "टच",
        "breakdown": "ट (t) + ओ (o) + च (ch)",
        "translation": "स्पर्श"
    },
    {
        "english": "Town",
        "pronunciation": "टाउन",
        "breakdown": "ट (t) + ऑ (o) + न (n)",
        "translation": "शहर"
    },
    {
        "english": "Train",
        "pronunciation": "ट्रेन",
        "breakdown": "ट (t) + र (r) + ए (e) + न (n)",
        "translation": "ट्रेन"
    },
    {
        "english": "Tram",
        "pronunciation": "ट्राम",
        "breakdown": "ट (t) + र (r) + ए (a) + म (m)",
        "translation": "ट्राम"
    },
    {
        "english": "Travel",
        "pronunciation": "ट्रैवल",
        "breakdown": "ट (t) + र (r) + ए (a) + व (v) + ल (l)",
        "translation": "यात्रा"
    },
    {
        "english": "Tree",
        "pronunciation": "ट्री",
        "breakdown": "ट (t) + री (r) + ई (ee)",
        "translation": "पेड़"
    },
    {
        "english": "Trouble",
        "pronunciation": "ट्रबल",
        "breakdown": "ट (t) + र (r) + ओ (o) + ब (b) + ल (l)",
        "translation": "समस्या"
    },
    {
        "english": "True",
        "pronunciation": "ट्रू",
        "breakdown": "ट (t) + र (r) + यू (u)",
        "translation": "सच"
    },
    {
        "english": "Trust",
        "pronunciation": "ट्रस्ट",
        "breakdown": "ट (t) + र (r) + अ (u) + स (s) + ट (t)",
        "translation": "विश्वास करना"
    },
    {
        "english": "Try",
        "pronunciation": "ट्राई",
        "breakdown": "ट (t) + र (r) + आई (i)",
        "translation": "कोशिश करना"
    },
    {
        "english": "Turn",
        "pronunciation": "टर्न",
        "breakdown": "ट (t) + र (r) + ए (a) + न (n)",
        "translation": "घुमाना"
    },
    {
        "english": "Twice",
        "pronunciation": "ट्वाइस",
        "breakdown": "ट (t) + व (v) + आई (i) + स (s)",
        "translation": "दो बार"
    },
    {
        "english": "Two",
        "pronunciation": "टू",
        "breakdown": "ट (t) + ओ (o)",
        "translation": "दो"
    },
    {
        "english": "Type",
        "pronunciation": "टाइप",
        "breakdown": "ट (t) + आई (i) + प (p)",
        "translation": "प्रकार"
    },
    {
        "english": "Ugly",
        "pronunciation": "अग्ली",
        "breakdown": "अ (u) + ग (g) + ल (l) + ई (ee)",
        "translation": "बदसूरत"
    },
    {
        "english": "Uncle",
        "pronunciation": "अंकल",
        "breakdown": "अ (u) + न (n) + क (k) + ल (l)",
        "translation": "चाचा"
    },
    {
        "english": "Under",
        "pronunciation": "अंडर",
        "breakdown": "अ (u) + न (n) + ड (d) + र (r)",
        "translation": "के नीचे"
    },
    {
        "english": "Understand",
        "pronunciation": "अंडरस्टैंड",
        "breakdown": "अ (u) + न (n) + ड (d) + र (r) + स्ट (st) + ऐ (a) + न (n) + ड (d)",
        "translation": "समझना"
    },
    {
        "english": "Unit",
        "pronunciation": "यूनिट",
        "breakdown": "यू (u) + न (n) + इ (i) + ट (t)",
        "translation": "इकाई"
    },
    {
        "english": "Until",
        "pronunciation": "अन्टिल",
        "breakdown": "अ (u) + न (n) + ट (t) + ई (i) + ल (l)",
        "translation": "जब तक"
    },
    {
        "english": "Up",
        "pronunciation": "अप",
        "breakdown": "अ (u) + प (p)",
        "translation": "ऊपर"
    },
    {
        "english": "Use",
        "pronunciation": "यूज़",
        "breakdown": "यू (u) + ज़ (z)",
        "translation": "उपयोग करना"
    },
    {
        "english": "Useful",
        "pronunciation": "यूज़फुल",
        "breakdown": "यू (u) + ज़ (z) + फ (f) +ुल (ul)",
        "translation": "लाभकारी"
    },
    {
        "english": "Usual",
        "pronunciation": "यूज़ुअल",
        "breakdown": "यू (u) + ज़ (z) + उ (u) + अ (a) + ल (l)",
        "translation": "सामान्य"
    },
    {
        "english": "Usually",
        "pronunciation": "यूज़ुअली",
        "breakdown": "यू (u) + ज़ (z) + उ (u) + अ (a) + ल (l) + ई (ee)",
        "translation": "आम तौर पर"
    },
    {
        "english": "Vegetable",
        "pronunciation": "वेज़िटेबल",
        "breakdown": "व (v) + ए (e) + ज (g) + आई (i) + ट (t) + ए (a) + ब (b) + ल (l)",
        "translation": "सब्जी"
    },
    {
        "english": "Very",
        "pronunciation": "वेरी",
        "breakdown": "व (v) + ए (e) + र (r) + य (y)",
        "translation": "बहुत"
    },
    {
        "english": "Village",
        "pronunciation": "विलेज",
        "breakdown": "व (v) + इ (i) + ल (l) + ए (e) + ज (j)",
        "translation": "गाँव"
    },
    {
        "english": "Visit",
        "pronunciation": "विजिट",
        "breakdown": "व (v) + इ (i) + ज़ (z) + इ (i) + ट (t)",
        "translation": "भेंट देना"
    },
    {
        "english": "Voice",
        "pronunciation": "वॉइस",
        "breakdown": "व (v) + ओ (o) + आई (i) + स (s)",
        "translation": "आवाज"
    },
    {
        "english": "Wait",
        "pronunciation": "वेट",
        "breakdown": "व (w) + ए (a) + ट (t)",
        "translation": "इंतजार करना"
    },
    {
        "english": "Wake",
        "pronunciation": "वेक",
        "breakdown": "व (w) + ए (a) + क (k)",
        "translation": "जगाना"
    },
    {
        "english": "Walk",
        "pronunciation": "वॉक",
        "breakdown": "व (w) + ऑ (o) + ल (l) + क (k)",
        "translation": "चलना"
    },
    {
        "english": "Want",
        "pronunciation": "वांट",
        "breakdown": "व (w) + ऑ (o) + न (n) + ट (t)",
        "translation": "चाहना"
    },
    {
        "english": "Warm",
        "pronunciation": "वॉर्म",
        "breakdown": "व (w) + ऑ (o) + र (r) + म (m)",
        "translation": "गर्म"
    },
    {
        "english": "Was",
        "pronunciation": "वाज़",
        "breakdown": "व (w) + अ (a) + ज़ (z)",
        "translation": "था"
    },
    {
        "english": "Wash",
        "pronunciation": "वॉश",
        "breakdown": "व (w) + ऑ (o) + श (sh)",
        "translation": "धोना"
    },
    {
        "english": "Waste",
        "pronunciation": "वेस्ट",
        "breakdown": "व (w) + ए (a) + स (s) + ट (t)",
        "translation": "बर्बाद करना"
    },
    {
        "english": "Watch",
        "pronunciation": "वॉच",
        "breakdown": "व (w) + ऑ (o) + च (ch)",
        "translation": "घड़ी"
    },
    {
        "english": "Water",
        "pronunciation": "वॉटर",
        "breakdown": "व (w) + ऑ (o) + ट (t) + र (r)",
        "translation": "पानी"
    },
    {
        "english": "Way",
        "pronunciation": "वे",
        "breakdown": "व (w) + ए (a) + य (y)",
        "translation": "रास्ता"
    },
    {
        "english": "We",
        "pronunciation": "वी",
        "breakdown": "व (w) + ई (ee)",
        "translation": "हम"
    },
    {
        "english": "Weak",
        "pronunciation": "वीक",
        "breakdown": "व (w) + ई (ee) + क (k)",
        "translation": "कमज़ोर"
    },
    {
        "english": "Wear",
        "pronunciation": "वियर",
        "breakdown": "व (w) + ई (ee) + र (r)",
        "translation": "पहनना"
    },
    {
        "english": "Weather",
        "pronunciation": "वेदर",
        "breakdown": "व (w) + ए (e) + थ (th) + ई (i) + र (r)",
        "translation": "मौसम"
    },
    {
        "english": "Wedding",
        "pronunciation": "वेडिंग",
        "breakdown": "व (w) + ए (e) + ड (d) + ड (d) + इ (i) + न (n) + ग (g)",
        "translation": "शादी"
    },
    {
        "english": "Week",
        "pronunciation": "वीक",
        "breakdown": "व (w) + ई (ee) + क (k)",
        "translation": "हफ्ता"
    },
    {
        "english": "Weight",
        "pronunciation": "वेट",
        "breakdown": "व (w) + ए (a) + इ (i) + ट (t)",
        "translation": "वज़न"
    },
    {
        "english": "Welcome",
        "pronunciation": "वेलकम",
        "breakdown": "व (w) + ए (e) + ल (l) + क (k) + म (m)",
        "translation": "स्वागत"
    },
    {
        "english": "Well",
        "pronunciation": "वेल",
        "breakdown": "व (w) + ए (e) + ल (l)",
        "translation": "अच्छा"
    },
    {
        "english": "Were",
        "pronunciation": "वेर",
        "breakdown": "व (w) + ए (e) + र (r)",
        "translation": "थे"
    },
    {
        "english": "West",
        "pronunciation": "वेस्ट",
        "breakdown": "व (w) + ए (e) + स (s) + ट (t)",
        "translation": "पश्चिम"
    },
    {
        "english": "Wet",
        "pronunciation": "वेट",
        "breakdown": "व (w) + ए (e) + ट (t)",
        "translation": "गीला"
    },
    {
        "english": "What",
        "pronunciation": "ह्वाट",
        "breakdown": "ह (h) + व (w) + आ (a) + ट (t)",
        "translation": "क्या"
    },
    {
        "english": "Wheel",
        "pronunciation": "ह्वील",
        "breakdown": "ह (h) + व (w) + ई (ee) + ल (l)",
        "translation": "पहिया"
    },
    {
        "english": "When",
        "pronunciation": "व्हेन",
        "breakdown": "व (w) + ह (h) + ए (e) + न (n)",
        "translation": "कब"
    },
    {
        "english": "Where",
        "pronunciation": "व्हेयर",
        "breakdown": "व (w) + ह (h) + ए (e) + र (r)",
        "translation": "कहाँ"
    },
    {
        "english": "Which",
        "pronunciation": "व्हिच",
        "breakdown": "व (w) + ह (h) + इ (i) + च (ch)",
        "translation": "कौन सा"
    },
    {
        "english": "While",
        "pronunciation": "व्हाइल",
        "breakdown": "व (w) + ह (h) + आ (a) + इ (i) + ल (l)",
        "translation": "जब"
    },
    {
        "english": "White",
        "pronunciation": "व्हाइट",
        "breakdown": "व (w) + ह (h) + आई (i) + ट (t)",
        "translation": "सफेद"
    },
    {
        "english": "Who",
        "pronunciation": "हू",
        "breakdown": "ह (h) + यू (u)",
        "translation": "कौन"
    },
    {
        "english": "Why",
        "pronunciation": "व्हाई",
        "breakdown": "व (w) + ह (h) + आई (i)",
        "translation": "क्यों"
    },
    {
        "english": "Wide",
        "pronunciation": "वाईड",
        "breakdown": "व (w) + आई (i) + ड (d)",
        "translation": "चौड़ा"
    },
    {
        "english": "Wife",
        "pronunciation": "वाइफ",
        "breakdown": "व (w) + आइ (i) + फ (f)",
        "translation": "पत्नी"
    },
    {
        "english": "Wild",
        "pronunciation": "वाइल्ड",
        "breakdown": "व (w) + आइ (i) + ल (l) + ड (d)",
        "translation": "जंगली"
    },
    {
        "english": "Will",
        "pronunciation": "विल",
        "breakdown": "व (w) + आई (i) + ल (l)",
        "translation": "इच्छा"
    },
    {
        "english": "Win",
        "pronunciation": "विन",
        "breakdown": "व (w) + आई (i) + न (n)",
        "translation": "जीतना"
    },
    {
        "english": "Wind",
        "pronunciation": "विंड",
        "breakdown": "व (w) + इ (i) + न (n) + ड (d)",
        "translation": "हवा"
    },
    {
        "english": "Window",
        "pronunciation": "विंडो",
        "breakdown": "व (w) + इ (i) + न (n) + ड (d) + ओ (o)",
        "translation": "खिड़की"
    },
    {
        "english": "Wine",
        "pronunciation": "वाइन",
        "breakdown": "व (w) + आई (i) + न (n) + ई (e)",
        "translation": "शराब"
    },
    {
        "english": "Winter",
        "pronunciation": "विंटर",
        "breakdown": "व (w) + इ (i) + न (n) + ट (t) + र (r)",
        "translation": "सर्दी"
    },
    {
        "english": "Wire",
        "pronunciation": "वायर",
        "breakdown": "व (w) + आई (i) + र (r)",
        "translation": "तार"
    },
    {
        "english": "Wise",
        "pronunciation": "वाइज",
        "breakdown": "व (w) + आइ (i) + ज (s)",
        "translation": "ज्ञानी"
    },
    {
        "english": "Wish",
        "pronunciation": "विश",
        "breakdown": "व (w) + आई (i) + श (sh)",
        "translation": "इच्छा करना"
    },
    {
        "english": "With",
        "pronunciation": "विद",
        "breakdown": "व (w) + इ (i) + थ (th)",
        "translation": "के साथ"
    },
    {
        "english": "Without",
        "pronunciation": "विदआउट",
        "breakdown": "व (w) + इ (i) + थ (th) + आ (a) + उ (u) + ट (t)",
        "translation": "बिना"
    },
    {
        "english": "Woman",
        "pronunciation": "वुमन",
        "breakdown": "व (w) + ओ (o) + म (m) + अ (a) + न (n)",
        "translation": "महिला"
    },
    {
        "english": "Wonder",
        "pronunciation": "वंडर",
        "breakdown": "व (w) + अ (o) + न (n) + ड (d) + र (r)",
        "translation": "आश्चर्य"
    },
    {
        "english": "Word",
        "pronunciation": "वर्ड",
        "breakdown": "व (w) + ओ (o) + र (r) + ड (d)",
        "translation": "शब्द"
    },
    {
        "english": "Work",
        "pronunciation": "वर्क",
        "breakdown": "व (w) + ओ (o) + र (r) + क (k)",
        "translation": "काम करना"
    },
    {
        "english": "World",
        "pronunciation": "वर्ल्ड",
        "breakdown": "व (w) + ऑ (o) + र (r) + ल (l) + ड (d)",
        "translation": "दुनिया"
    },
    {
        "english": "Worry",
        "pronunciation": "वॉरी",
        "breakdown": "व (w) + ऑ (o) + र (r) + ई (ee)",
        "translation": "चिंता करना"
    },
    {
        "english": "Yard",
        "pronunciation": "यार्ड",
        "breakdown": "य (y) + आ (a) + र (r) + ड (d)",
        "translation": "आंगन"
    },
    {
        "english": "Yell",
        "pronunciation": "येल",
        "breakdown": "य (y) + ए (e) + ल (l)",
        "translation": "चिल्लाना"
    },
    {
        "english": "Yesterday",
        "pronunciation": "यस्टरडे",
        "breakdown": "य (y) + ए (e) + स (s) + ट (t) + र (r) + ड (d) + ए (a)",
        "translation": "कल"
    },
    {
        "english": "Yet",
        "pronunciation": "येट",
        "breakdown": "य (y) + ए (e) + ट (t)",
        "translation": "अभी तक"
    },
    {
        "english": "You",
        "pronunciation": "यू",
        "breakdown": "य (y) + ओ (o)",
        "translation": "आप"
    },
    {
        "english": "Young",
        "pronunciation": "यंग",
        "breakdown": "य (y) + ओ (o) + न (n) + ग (g)",
        "translation": "युवा"
    },
    {
        "english": "Your",
        "pronunciation": "योर",
        "breakdown": "य (y) + ओ (o) + र (r)",
        "translation": "आपका"
    },
    {
        "english": "Zero",
        "pronunciation": "जीरो",
        "breakdown": "ज़ (z) + ई (ee) + र (r) + ओ (o)",
        "translation": "शून्य"
    },
    {
        "english": "Zoo",
        "pronunciation": "जू",
        "breakdown": "ज़ (z) + ओ (o)",
        "translation": "चिड़ियाघर"
    },{
        "english": "Apple",
        "pronunciation": "एप्पल",
        "breakdown": "ऐ (ai) + प (p) + ल (l)",
        "translation": "सेब"
    },
    {
        "english": "Water",
        "pronunciation": "वाटर",
        "breakdown": "वा (wa) + ट (t) + र (r)",
        "translation": "पानी"
    },
    {
        "english": "House",
        "pronunciation": "हाउस",
        "breakdown": "ह (h) + आ (au) + स (s)",
        "translation": "घर"
    },
    {
        "english": "Friend",
        "pronunciation": "फ्रेंड",
        "breakdown": "फ (f) + र (r) + ए (e) + न (n) + ड (d)",
        "translation": "दोस्त"
    },
    {
        "english": "School",
        "pronunciation": "स्कूल",
        "breakdown": "स (s) + क (k) + ऊ (oo) + ल (l)",
        "translation": "विद्यालय"
    },
    {
        "english": "Book",
        "pronunciation": "बुक",
        "breakdown": "ब (b) + उ (u) + क (k)",
        "translation": "किताब"
    },
    {
        "english": "Happy",
        "pronunciation": "हैप्पी",
        "breakdown": "है (hai) + प (p) + पी (pee)",
        "translation": "खुश"
    },
    {
        "english": "Love",
        "pronunciation": "लव",
        "breakdown": "ल (l) + व (v)",
        "translation": "प्यार"
    },
    {
        "english": "Sun",
        "pronunciation": "सन",
        "breakdown": "स (s) + न (n)",
        "translation": "सूरज"
    },
    {
        "english": "Family",
        "pronunciation": "फैमिली",
        "breakdown": "फ (f) + ए (a) + म (m) + ल (l) + ई (ee)",
        "translation": "परिवार"
    },
    {
        "english": "Dog",
        "pronunciation": "डॉग",
        "breakdown": "ड (d) +ॉ (o) + ग (g)",
        "translation": "कुत्ता"
    },
    {
        "english": "Cat",
        "pronunciation": "कैट",
        "breakdown": "क (k) + ऐ (a) + ट (t)",
        "translation": "बिल्ली"
    },
    {
        "english": "Chair",
        "pronunciation": "चेयर",
        "breakdown": "च (ch) + ए (e) + र (r)",
        "translation": "कुर्सी"
    },
    {
        "english": "Table",
        "pronunciation": "टेबल",
        "breakdown": "ट (t) + ए (a) + ब (b) + ल (l) + ई (ee)",
        "translation": "मेज़"
    },
    {
        "english": "Pen",
        "pronunciation": "पेन",
        "breakdown": "प (p) + ए (e) + न (n)",
        "translation": "कलम"
    },
    {
        "english": "Food",
        "pronunciation": "फूड",
        "breakdown": "फ (f) + ऊ (oo) + ड (d)",
        "translation": "खाना"
    },
    {
        "english": "Car",
        "pronunciation": "कार",
        "breakdown": "क (k) + आ (a) + र (r)",
        "translation": "गाड़ी"
    },
    {
        "english": "Tree",
        "pronunciation": "ट्री",
        "breakdown": "ट (t) + री (ree)",
        "translation": "पेड़"
    },
    {
        "english": "City",
        "pronunciation": "सिटी",
        "breakdown": "स (s) + आई (i) + ट (t) + ई (ee)",
        "translation": "शहर"
    },
    {
        "english": "Ball",
        "pronunciation": "बॉल",
        "breakdown": "ब (b) + ऑ (o) + ल (l)",
        "translation": "गेंद"
    },
    {
        "english": "Animal",
        "pronunciation": "एनिमल",
        "breakdown": "ए (a) + न (n) + इ (i) + म (m) + ल (l)",
        "translation": "जानवर"
    },
    {
        "english": "Window",
        "pronunciation": "विंडो",
        "breakdown": "व (v) + ि (i) + न (n) + ड (d) + ओ (o)",
        "translation": "खिड़की"
    },
    {
        "english": "Phone",
        "pronunciation": "फोन",
        "breakdown": "फ (f) + ओ (o) + न (n)",
        "translation": "फोन"
    },
    {
        "english": "Doctor",
        "pronunciation": "डॉक्टर",
        "breakdown": "ड (d) +ॉ (o) + क (k) + ट (t) + र (r)",
        "translation": "चिकित्सक"
    },
    {
        "english": "Sky",
        "pronunciation": "स्काई",
        "breakdown": "स (s) + क (k) + आई (ai)",
        "translation": "आसमान"
    },
    {
        "english": "Earth",
        "pronunciation": "अर्थ",
        "breakdown": "अ (a) + र (r) + थ (th)",
        "translation": "धरती"
    },
    {
        "english": "Door",
        "pronunciation": "डोर",
        "breakdown": "ड (d) + ो (o) + र (r)",
        "translation": "दरवाज़ा"
    },
    {
        "english": "Coffee",
        "pronunciation": "कॉफी",
        "breakdown": "क (k) +ॉ (o) + फ (f) + ई (ee)",
        "translation": "कॉफी"
    },
    {
        "english": "Message",
        "pronunciation": "मैसेज",
        "breakdown": "म (m) + ए (e) + स (s) + एज (aj)",
        "translation": "संदेश"
    },
    {
        "english": "Garden",
        "pronunciation": "गार्डन",
        "breakdown": "गा (gaa) + र (r) + ड (d) + न (n)",
        "translation": "बगीचा"
    },
    {
        "english": "Music",
        "pronunciation": "म्यूज़िक",
        "breakdown": "म (m) + यू (yu) + ज़ि (zi) + क (k)",
        "translation": "संगीत"
    },
    {
        "english": "Market",
        "pronunciation": "मार्केट",
        "breakdown": "मा (ma) + र (r) + के (ke) + ट (t)",
        "translation": "बाज़ार"
    },
    {
        "english": "Street",
        "pronunciation": "स्ट्रिट",
        "breakdown": "स (s) + ट (t) + री (ree) + ट (t)",
        "translation": "गली"
    },
    {
        "english": "Computer",
        "pronunciation": "कंप्यूटर",
        "breakdown": "क (k) +ं (n) + प (p) + यू (yu) + ट (t) + र (r)",
        "translation": "संगणक"
    },
    {
        "english": "Fish",
        "pronunciation": "फिश",
        "breakdown": "फ (f) + ि (i) + श (sh)",
        "translation": "मछली"
    },
    {
        "english": "Tea",
        "pronunciation": "चाय",
        "breakdown": "च (ch) + आ (aa) + य (y)",
        "translation": "चाय"
    },
    {
        "english": "Flower",
        "pronunciation": "फ्लॉवर",
        "breakdown": "फ्ल (fl) + ऑ (o) + व (w) + र (r)",
        "translation": "फूल"
    },
    {
        "english": "Dance",
        "pronunciation": "डांस",
        "breakdown": "ड (d) + आ (a) + न (n) + स (s)",
        "translation": "नृत्य"
    },
    {
        "english": "Teacher",
        "pronunciation": "टीचर",
        "breakdown": "टी (tee) + च (ch) + र (r)",
        "translation": "शिक्षक"
    }
];
 // To get  indexes from localStorage (or start at 0 if not set)
 let currentSentenceIndex = localStorage.getItem('sentenceIndex') ? parseInt(localStorage.getItem('sentenceIndex')) : 0;
 let currentWordIndex = localStorage.getItem('wordIndex') ? parseInt(localStorage.getItem('wordIndex')) : 0;

 // Retrieve history from localStorage (or start with an empty array if not set)
 let sentenceHistory = JSON.parse(localStorage.getItem('sentenceHistory')) || [];
 let wordHistory = JSON.parse(localStorage.getItem('wordHistory')) || [];

 // Function to display the current sentence and word
 function displayCards() {
     const currentSentence = sentences[currentSentenceIndex];
     const currentWord = words[currentWordIndex];

     // Displaying the sentences if we are on sentences.html
     if (document.getElementById("sentence-text")) {
         document.getElementById("sentence-text").innerHTML = 
             `${currentSentence.english}<br>${currentSentence.pronunciation}<br>${currentSentence.translation}`;
     }

     // Displaying the words if we are on words.html
     if (document.getElementById("word-text")) {
         document.getElementById("word-text").innerHTML = 
             `${currentWord.english}<br>${currentWord.pronunciation}<br>${currentWord.breakdown}<br>${currentWord.translation}`;
     }
 }

 // Function to go to the next card
 function nextCard() {
     if (document.getElementById("sentence-text")) {
         sentenceHistory.push(currentSentenceIndex);
         currentSentenceIndex++;

         if (currentSentenceIndex >= sentences.length) {
             currentSentenceIndex = 0;
         }
     }

     if (document.getElementById("word-text")) {
         wordHistory.push(currentWordIndex);
         currentWordIndex = Math.floor(Math.random() * words.length);
     }

     displayCards();
     localStorage.setItem('sentenceIndex', currentSentenceIndex);
     localStorage.setItem('wordIndex', currentWordIndex);
     localStorage.setItem('sentenceHistory', JSON.stringify(sentenceHistory));
     localStorage.setItem('wordHistory', JSON.stringify(wordHistory));
 }

 // Function to go to the previous card
 function previousCard() {
     if (sentenceHistory.length > 0) {
         currentSentenceIndex = sentenceHistory.pop();
     }
     if (wordHistory.length > 0) {
         currentWordIndex = wordHistory.pop();
     }

     displayCards();
     localStorage.setItem('sentenceIndex', currentSentenceIndex);
     localStorage.setItem('wordIndex', currentWordIndex);
     localStorage.setItem('sentenceHistory', JSON.stringify(sentenceHistory));
     localStorage.setItem('wordHistory', JSON.stringify(wordHistory));
 }

 // Initial setup
 if (document.getElementById("words-button")) {
     document.getElementById("words-button").onclick = () => {
         window.location.href = 'words.html';
     };
 }

 if (document.getElementById("sentences-button")) {
     document.getElementById("sentences-button").onclick = () => {
         window.location.href = 'sentences.html';
     };
 }

 // Setup for cards in words.html
 if (document.getElementById("next-button")) {
     document.getElementById("next-button").onclick = nextCard;
 }
 if (document.getElementById("back-button")) {
     document.getElementById("back-button").onclick = previousCard;
 }
 if (document.getElementById("main-menu-button")) {
     document.getElementById("main-menu-button").onclick = () => {
         window.location.href = 'index.html';
     };
 }

 // Display initial cards
 displayCards();
