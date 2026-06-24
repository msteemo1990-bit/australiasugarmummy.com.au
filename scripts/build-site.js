const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const templateRoot = "/Users/apple/.codex/skills/dating-static-site-builder/assets/harvested-templates/sugar-dating-australia-rich-directory";
const domain = "https://australiasugarmummy.com.au";
const brand = "Australia Sugar Mummy";
const market = "Australia";
const year = "2026";
const registrationUrl = "https://www.sugardaddymeet.com/registerStep1?tid=af100052046_smumau";

const cities = [
  ["Sydney", "/sugar-mummy/sydney/"],
  ["Melbourne", "/sugar-mummy/melbourne/"],
  ["Brisbane", "/sugar-mummy/brisbane/"],
  ["Perth", "/sugar-mummy/perth/"],
  ["Adelaide", "/sugar-mummy/adelaide/"],
  ["Gold Coast", "/sugar-mummy/gold-coast/"],
];

const nav = [
  ["Sugar Mummy", "/sugar-mummy/"],
  ["Safety", "/safety/"],
  ["Blog", "/blog/"],
  ["About", "/about/"],
  ["Contact", "/contact/"],
];

const blogPosts = [
  {
    slug: "what-is-sugar-mummy-dating-australia",
    title: "What Is Sugar Mummy Dating in Australia?",
    seoTitle: "Sugar Mummy Dating Australia | Australia Sugar Mummy",
    eyebrow: "Dating guide",
    description: "A practical Australian guide to sugar mummy dating, mature relationships, boundaries, safety, and long-term value.",
    lead: "Sugar mummy dating in Australia is often explained badly because people start with the most sensational part. A better definition starts with maturity, choice, privacy, and the kind of companionship two adults are actually trying to build.",
    image: "/assets/images/article-definition.jpg",
    alt: "Elegant lounge setting for an Australian dating guide",
    sections: [
      { title: "A more honest place to begin", paragraphs: ["The phrase sugar mummy dating tends to arrive with a little noise around it. People hear the words and imagine a caricature: money first, emotion second, everyone pretending the relationship dynamic is simpler than it is.", "I think that is the least interesting version of the subject. In Australia, the healthier version is quieter. It is two adults being honest that age, experience, lifestyle, attraction, and support can all sit at the same table without turning the relationship into a transaction."] },
      { title: "The part people usually get wrong", paragraphs: ["The mistake is assuming that sugar mummy dating is only about financial exchange. Money may be part of some relationships, just as lifestyle, mentorship, travel, stability, time, and access may be part of others. But when money becomes the only language, the relationship becomes smaller and more brittle.", "A mature sugar mummy relationship has to leave room for personhood. The woman is not just a provider. The younger partner is not just decoration. Both people are choosing a dynamic that conventional dating often fails to describe neatly."] },
      { title: "What changes when the woman is older", paragraphs: ["When the woman is the older or more established partner, the emotional weather changes. She may already know what kind of attention exhausts her. She may have less patience for vague promises, performative masculinity, or people who confuse confidence with pressure.", "That can make the connection more direct. The question is not, 'Will this follow the usual dating script?' The better question is, 'Can both people name what they value without making the other person feel used?'"] },
      { title: "The Australian layer", paragraphs: ["Australia adds its own texture. Sydney can make privacy feel urgent because professional circles overlap. Melbourne often rewards conversation and cultural ease. Brisbane may feel warmer and slower. Perth makes distance part of the trust equation. Adelaide can make reputation feel close to the surface. Gold Coast asks people to separate lifestyle sparkle from real compatibility.", "So sugar mummy dating in Australia is not one single scene. It is a set of local rhythms held together by the same adult standard: be clear, be discreet, meet publicly first, and do not use generosity as a disguise for pressure."] },
      { title: "A relationship, not a performance", paragraphs: ["The best sugar mummy dating does not feel like someone auditioning for a role. It feels like two people building a private language around time, attention, support, attraction, and limits. The conversation may be more explicit than conventional dating, but that can be a strength when both people are emotionally grown.", "In ordinary dating, people often hide expectations and hope charm will smooth out the mismatch later. Sugar mummy dating makes that harder. It asks people to say the quiet part earlier: what they want, what they can offer, what they will not accept, and what privacy means to them."] },
      { title: "Before the first meeting, listen for tone", paragraphs: ["The first safety signal is not a document or a selfie. It is tone. A respectful person can discuss boundaries without sulking. They can accept a public first meeting without making it feel like an insult. They can talk about support without sounding like they are pricing access to another human being.", "If the tone is rushed, secretive, financially urgent, or sexually entitled, the label does not matter. It is not mature sugar mummy dating. It is pressure wearing better clothes."] },
      { title: "What I would keep, and what I would leave", paragraphs: ["I would keep the honesty. I would keep the idea that adults can design relationships around companionship, guidance, desire, and lifestyle without pretending every bond has to look conventional. I would keep the respect for women who know what they want and younger partners who bring warmth rather than entitlement.", "I would leave the myths: the fantasy that money solves emotional immaturity, the belief that discretion means secrecy at any cost, and the lazy assumption that unconventional relationships are automatically shallow. The best version is not shallow at all. It asks for more honesty than many people are used to giving."] }
    ],
    body: [
      ["What does sugar mummy dating mean?", "Sugar mummy dating describes relationships where a mature, accomplished woman and a younger adult partner choose a more intentional connection. The healthiest version is not a pay-for-attention exchange. It is a negotiated, respectful dynamic where both people understand what they value: time, companionship, emotional steadiness, mentoring, lifestyle alignment, and privacy."],
      ["Why the Australian context matters", "Australia's major cities reward discretion. People may be socially visible at work, in professional circles, or in local communities, so a good introduction process should help adults move carefully from online interest to a public first meeting. Sydney and Melbourne may feel fast and career-led, while Perth, Adelaide, Brisbane, and Gold Coast each call for their own privacy-aware approach."],
      ["What should both sides be clear about?", "Both people should be honest about availability, relationship expectations, public visibility, and boundaries. A sugar mummy may value calm companionship and emotional intelligence. A sugar baby may value guidance, vitality, and a lighter relationship structure. Neither side should pressure the other into secrecy, financial dependency, or unsafe meetings."]
    ],
    list: ["Be clear about the relationship style before meeting.", "Treat identity checks as a trust standard, not an insult.", "Reject escort-style, pay-per-meeting, or coercive language early."]
  },
  {
    slug: "sugar-dating-safety-australia",
    title: "Sugar Mummy Dating Safety in Australia: A Clear Checklist",
    seoTitle: "Sugar Mummy Dating Safety Australia | Australia Sugar Mummy",
    eyebrow: "Safety",
    description: "A safety checklist for Australian sugar mummy dating, covering identity signals, messaging boundaries, first meetings, and scam warning signs.",
    lead: "Safe sugar mummy dating starts before the first message becomes personal. The safest people are usually willing to move at a steady pace, verify who they are, and respect boundaries without making the other person feel guilty.",
    image: "/assets/images/article-safety.jpg",
    alt: "Warm city cafe suitable for a public first meeting",
    sections: [
      { title: "Safety begins before anything feels dangerous", paragraphs: ["The strange thing about dating safety is that most of the important decisions happen while everything still feels pleasant. The conversation is warm. The person is flattering. Nothing has gone wrong yet. That is exactly when your judgment matters most, because pressure rarely begins by announcing itself as pressure.", "In sugar mummy dating, the early tone carries more information than people admit. Someone who respects your pace in the first ten messages is more likely to respect it later. Someone who jokes away a boundary, demands proof, or turns your caution into a personal insult is already showing you the relationship dynamic. Safety is not a mood killer. It is the part of the conversation that tells you whether the mood is real."] },
      { title: "The first red flag is often speed", paragraphs: ["Speed is seductive because it feels like certainty. A person who wants to meet immediately, move to private chat immediately, or make the relationship dynamic feel urgent can seem decisive. Sometimes they are just excited. But in unsafe situations, speed is used to outrun your ability to compare details, ask questions, and notice contradictions.", "I pay attention when someone tries to collapse the normal stages of trust. A stranger should not need your banking details, address, private photos, or emotional loyalty before you have even met. A serious person can tolerate a little time. They can answer a clear question. They can wait for a public first meeting. If the connection falls apart because you slowed it down, you did not lose a good match. You exposed a fragile one."] },
      { title: "Verification should feel ordinary", paragraphs: ["Verification does not have to be dramatic. It is not an interrogation scene. It is a calm habit of checking whether the person you are speaking with behaves consistently across time, details, and expectations. In a healthy sugar mummy dating context, verification should feel like hygiene: not glamorous, not suspicious, just normal.", "That does not mean sending sensitive documents to a stranger. It means looking for steady identity signals, coherent stories, reasonable social or profile consistency, and a willingness to meet publicly. It also means noticing when someone asks you to prove everything while offering nothing stable in return. Trust should become more balanced as the conversation continues. If it becomes more one-sided, pause."] },
      { title: "Keep money out of the first trust test", paragraphs: ["Money can be part of adult relationship conversations, but it should not be the first test of sincerity. Upfront transfers, gift cards, crypto, emergency bills, travel money, verification fees, account unlocking, and payment to secure a meeting are not romantic complications. They are classic pressure points.", "The confusing part is that scammers often wrap the request in emotion. They may sound embarrassed, urgent, affectionate, or offended that you hesitate. They may frame caution as cruelty. Do not debate the story for too long. Before trust exists, financial urgency is enough information. A mature sugar mummy dating conversation can discuss lifestyle expectations without asking a stranger to take an unrecoverable financial risk."] },
      { title: "A public meeting is not a lack of chemistry", paragraphs: ["People sometimes treat public-first meetings as if they are cold or unromantic. I think the opposite is true. A public meeting says: I am interested enough to show up, and grounded enough to protect both of us while we find out what this is. That is not fear. That is adulthood.", "Choose a place with staff, light, exits, transport, and a natural end point. A cafe, hotel lounge, gallery area, lunch venue, or early evening drink can all work. Arrive independently. Leave independently. Tell someone you trust where you are. Keep the first meeting short enough that you can leave without inventing an excuse. If someone makes a public plan feel insulting, listen carefully. They may want privacy, or they may want control. The difference matters.", "A good safety plan also protects the other person. It lowers awkwardness, removes guessing, and gives both adults a shared script for what happens next. The more grown-up the connection, the less it needs secrecy to feel exciting."] },
      { title: "Protect the details that make you findable", paragraphs: ["Privacy is not only about dramatic secrets. It is often about small details that, when combined, make you easy to locate. A workplace clue, a regular cafe, a school schedule, a family detail, a car plate in a photo, a suburb repeated too often: none of these may feel dangerous alone. Together, they can become a map.", "Early sugar mummy dating conversations should be warm without becoming identifying. You can be specific about values, expectations, interests, and relationship pace without giving away your address, employer, daily routine, legal documents, banking information, or family structure. The right person will not need those details to treat you respectfully. The wrong person may ask for them early because they know exactly what those details are worth."] },
      { title: "Your body notices pressure before your mind explains it", paragraphs: ["One of the most useful safety tools is the small internal pause. You read a message and something in your body tightens. You cannot yet explain why. Maybe the words are polite, but the request feels too large. Maybe the person is charming, but every answer somehow moves you closer to doing what they wanted from the start.", "Do not dismiss that signal because you want to be fair. Fairness does not require ignoring discomfort. You can slow down, ask a clarifying question, change the plan, or leave the conversation. In mature dating, a boundary should make the situation clearer. If a boundary makes the other person colder, crueler, or more urgent, the boundary worked. It revealed the part you needed to see."] },
      { title: "What I would do if I were starting tonight", paragraphs: ["If I were starting a sugar mummy dating conversation tonight, I would keep the first channel boring and written. I would not send private documents, intimate images, exact location details, or money. I would ask what kind of connection the person is looking for, how they prefer to meet, and what privacy means to them. I would watch whether their answers become clearer or slipperier over time.", "Before meeting, I would choose a public venue, set a time limit, arrange my own transport, and tell a trusted person the plan. I would not go to a second private location on the first meeting. Afterward, I would wait before making larger promises. None of this ruins chemistry. It protects the possibility that chemistry can become something real."] },
      { title: "The safest people make safety feel easy", paragraphs: ["This is the standard I keep returning to: safe people do not make safety feel embarrassing. They may have privacy needs. They may move carefully. They may ask thoughtful questions. But they do not punish you for having limits. They do not need you isolated, financially exposed, or emotionally rushed in order to feel desired.", "Sugar mummy dating can be generous, exciting, and deeply adult when both people understand that trust is built, not demanded. The aim is not to date with suspicion forever. The aim is to move slowly enough that respect has time to prove itself. When it does, the relationship feels calmer. When it does not, you still have your privacy, your money, your dignity, and your way out. That is not a small thing."] }
    ],
    body: [
      ["What is the safest first step?", "Keep early conversations inside the platform or a privacy-protective channel until the other person has shown consistency. Avoid sending identity documents, private photos, workplace details, or financial information to someone whose intentions are still unclear."],
      ["How should first meetings work?", "Choose a public venue, tell a trusted friend your plan, arrive independently, and keep the first meeting short. A genuine person should not object to public-first planning. Pressure to meet privately, travel immediately, or keep everything secret is a warning sign."],
      ["Which behaviours should end the conversation?", "End the conversation if someone asks for upfront transfers, tries to bypass verification, uses escort-style pricing language, threatens exposure, or pushes intimacy before trust. These patterns are not signs of confidence; they are signals that the connection is not aligned with mature sugar mummy dating."]
    ],
    list: ["Use public-first meetings.", "Keep payment and banking details private.", "Pause when urgency replaces respect."]
  },
  {
    slug: "first-meeting-checklist",
    title: "First Meeting Checklist for Sugar Mummy Dating",
    seoTitle: "First Meeting Checklist | Australia Sugar Mummy",
    eyebrow: "First meetings",
    description: "A practical checklist for planning a respectful, public first meeting in Australian sugar mummy dating.",
    lead: "A first meeting should feel calm, public, and low-pressure. Its purpose is not to settle the whole relationship. It is to see whether the online conversation has real-world ease and mutual respect.",
    image: "/assets/images/article-meeting.jpg",
    alt: "Restaurant table prepared for a calm public meeting",
    sections: [
      { title: "The first meeting is not the relationship", paragraphs: ["A first meeting has one job: to bring the online conversation into the real world without asking either person to gamble too much. It is not the moment to solve the whole relationship dynamic, prove devotion, negotiate every expectation, or turn chemistry into a contract before anyone has watched the other person order coffee.", "That sounds obvious, but people forget it when they are nervous or flattered. Sugar mummy dating can make the first meeting feel loaded because both people know there may be expectations underneath the attraction. The best way to handle that pressure is to make the meeting smaller. Shorter. Public. Easier to leave. A small first meeting gives the relationship room to become bigger later."] },
      { title: "Choose a place that does not trap anyone", paragraphs: ["The venue is not just a backdrop. It is part of the safety design. A good first-meeting venue has staff, light, exits, transport, and a reason for the meeting to end naturally. A cafe, hotel lounge, gallery cafe, lunch spot, or early evening drink can all work because they allow conversation without forcing intimacy.", "A private home, isolated beach, hotel room, long drive, or vague address does something different. It removes options. It makes leaving harder. It can turn politeness into a cage. If the other person is genuine, they should understand why the first meeting needs to protect both adults, not just create atmosphere."] },
      { title: "Arrive like someone who can leave", paragraphs: ["Independent arrival is underrated. When you make your own way there, you keep control of your timing, your exit, and your body. You are not relying on a stranger's car, mood, or willingness to end the night when you are ready. This is not distrust. It is clean logistics.", "I would also avoid accepting a lift after the meeting, even if the conversation went beautifully. Good chemistry can make small risks feel harmless. That is exactly why the decision should be made before the chemistry begins. Take your own transport. Keep your own route home. Let the first meeting be about reading the person, not managing dependence."] },
      { title: "Set the ending before you begin", paragraphs: ["A time limit is one of the kindest first-date tools. It removes the awkwardness of inventing an exit and prevents either person from mistaking availability for interest. You can say, 'I have about an hour, but I would like to meet properly.' That sentence is warm and boundaried at the same time.", "The ending also tells you something. A respectful person will not punish you for having a life outside the meeting. They may want more time, but they will not make you feel guilty for leaving when you said you would. If someone starts pushing against a simple time boundary on date one, believe the pattern."] },
      { title: "Talk about expectations without turning it into a deal", paragraphs: ["The first meeting should include some honest conversation, but it does not need to become a negotiation table. You can discuss pace, privacy, communication style, and what each person is hoping for without making the moment feel clinical. The goal is not to extract promises. It is to see whether the other person can talk like an adult.", "I would listen for emotional texture. Does the sugar mummy describe companionship, discretion, mentoring, attraction, lifestyle ease, or steadiness? Does the younger partner talk about warmth, reliability, ambition, energy, or the kind of connection they actually enjoy? Good answers feel human. Bad answers sound like someone is trying to win access.", "Useful questions are simple: what does a comfortable pace look like, how private should early dating be, and what would make either person pause? Avoid turning the first meeting into a cross-examination about income, exact addresses, family, or sexual access. Early clarity should make both people safer, not more exposed."] },
      { title: "Keep money language careful and adult", paragraphs: ["Money can sit near the edge of sugar mummy dating, which means the language around it matters. The first meeting is not the place for crude demands, pay-per-meeting framing, or pressure disguised as generosity. If support is part of the future conversation, it should be discussed with context, mutual respect, and enough trust that neither person feels cornered.", "A useful rule is this: if the sentence would make the other person feel priced, owned, or rushed, it probably does not belong in the first meeting. Mature generosity sounds different from bargaining. It leaves room for dignity. It recognises that both adults are more than what they can provide."] },
      { title: "Watch how they handle a small no", paragraphs: ["You learn more from a small no than from a perfect compliment. Say you prefer a public venue. Say you do not share your exact suburb yet. Say you need to leave at the agreed time. The reaction will tell you whether the person's charm has structure underneath it.", "A healthy person may ask a follow-up question, but they will not sulk, mock, threaten, or suddenly become cold. They will not try to turn your boundary into a character flaw. If a small no creates a large emotional reaction, do not explain yourself into staying. The first meeting has already given you the information you came for."] },
      { title: "Do not let chemistry move the meeting elsewhere", paragraphs: ["The riskiest part of a good first meeting can be the moment when it is going well. Everyone relaxes. The conversation is easy. Someone suggests one more drink, a quieter place, a drive, a room, a private view, somewhere more comfortable. It may be innocent. It may not be. Either way, you do not have to decide inside the momentum.", "Decide beforehand that the first meeting stays where it was planned. If the connection is real, there will be another chance. In fact, waiting often makes the second meeting better because it proves both people can hold desire without turning it into pressure."] },
      { title: "Afterward, give yourself a cooling-off window", paragraphs: ["After a promising first meeting, it is tempting to answer quickly, agree quickly, and let the glow make decisions for you. I prefer a cooling-off window. Go home. Eat something. Sleep if you can. Ask yourself not only whether you liked them, but whether you felt like yourself around them.", "The best follow-up is clear and calm. If you want to meet again, say so and suggest a next step that still respects privacy and pace. If you do not, be kind but direct. No one benefits from a vague maybe that only delays discomfort. Mature dating is not only about attraction. It is about leaving cleanly when alignment is not there."] },
      { title: "The meeting went well if you kept your centre", paragraphs: ["A successful first meeting is not necessarily one that leads to a second date. It is one where you stayed present, protected your boundaries, listened honestly, and left with more clarity than you arrived with. Sometimes that clarity is yes. Sometimes it is no. Both are useful.", "Sugar mummy dating asks adults to be more deliberate than conventional dating often requires. That can feel intense, but it can also be freeing. When the first meeting is designed well, nobody has to perform safety, generosity, or attraction. They can simply see whether the connection has real-world ease. That is enough for one meeting. The rest can wait."] }
    ],
    body: [
      ["Where should you meet first?", "Pick a public cafe, hotel lounge, gallery area, or restaurant with easy transport access. Avoid private homes, isolated locations, or any plan that makes it difficult to leave independently."],
      ["What should you discuss?", "Talk about relationship pace, privacy expectations, communication preferences, and what each person values. Keep the conversation grounded. Mature dating works better when people can discuss boundaries without turning the moment into a negotiation performance."],
      ["What should happen after?", "Take time before agreeing to a second meeting. If there is alignment, confirm next steps in writing and keep the tone respectful. If not, a direct and polite message is better than drifting, guilt, or mixed signals."]
    ],
    list: ["Choose a venue with easy exits.", "Set a time limit before arriving.", "Do not share home, banking, or workplace details on a first meeting."]
  },
  {
    slug: "spot-sugar-dating-scams",
    title: "How to Spot Sugar Mummy Dating Scams Before They Escalate",
    seoTitle: "Sugar Mummy Dating Scams Australia | Australia Sugar Mummy",
    eyebrow: "Anti-scam",
    description: "Common sugar mummy dating scam patterns in Australia and practical decision rules for ending risky conversations early.",
    lead: "Most sugar mummy dating scams rely on speed. The scammer tries to create urgency before you can notice contradictions, verify identity, or compare the request against normal adult dating behaviour.",
    image: "/assets/images/article-scam.jpg",
    alt: "Phone and notebook used to review online dating safety notes",
    sections: [
      { title: "Scams do not start with the ask", paragraphs: ["The first thing to understand about sugar mummy dating scams is that the dangerous moment is rarely the first obvious request. By the time someone asks for a transfer, a gift card, crypto, travel money, or a strange verification fee, they have usually spent several messages preparing the ground.", "They may begin with admiration. They may sound unusually certain about you. They may talk as if the relationship already has emotional weight before you have met in person. That early warmth is not proof of a scam by itself, but it becomes meaningful when it is used to make ordinary caution feel rude. A scam often starts by making you feel chosen, then slowly turns that feeling into an obligation."] },
      { title: "The performance of urgency", paragraphs: ["Urgency is the scammer's favourite stage lighting. It changes the room. A normal request gives you time to think, compare details, ask a friend, search a phrase, or sleep on the decision. An urgent request tries to make all of that feel impossible.", "In sugar mummy dating, urgency often arrives dressed as romance, privacy, or opportunity. Someone has a sudden travel problem. A bank account is frozen. A meeting can only happen tonight. A profile will disappear unless you move to another channel. A gift needs to be sent before trust can continue. The point is not the story; the point is the clock. Once a stranger makes speed the condition of connection, you should slow the conversation down instead of speeding yourself up."] },
      { title: "The story always needs you isolated", paragraphs: ["Scams work better when you are alone with the narrative. That is why risky conversations often move away from the platform quickly, discourage screenshots, or make you feel embarrassed about asking anyone else what they think. Isolation is not always physical. Sometimes it is emotional: the person makes you feel that only you understand them, only you can help, or only a cruel person would hesitate.", "Healthy adult dating does not need that kind of secrecy. Privacy is reasonable; isolation is different. Privacy protects both people's dignity. Isolation protects the scam. If someone becomes irritated because you want to keep a record, stay on a safer channel, or take time before sharing personal details, they are showing you where the pressure lives."] },
      { title: "When affection becomes a lever", paragraphs: ["One of the most confusing parts of sugar mummy dating scams is that the manipulation can sound affectionate. The person may call you special, loyal, rare, mature, generous, or unlike everyone else. Then the compliment becomes a lever: if you really cared, you would help; if you trusted them, you would send proof; if you were serious, you would not question the request.", "This is where many smart people get caught, because they are not responding to the money request alone. They are responding to the implied accusation that caution means coldness. It does not. Caution is not the opposite of generosity. It is the structure that keeps generosity from becoming exposure. A real connection can survive a calm no. A scam often cannot."] },
      { title: "Follow the money, then stop", paragraphs: ["You do not have to solve the whole mystery. You do not have to prove the person is lying, identify the exact script, or win an argument about whether the emergency is real. In early sugar mummy dating conversations, certain money patterns are enough to end the exchange.", "Upfront transfers, gift cards, crypto, bank access, account unlocking, travel advances, paid verification links, refund promises, and requests to receive or move money for someone else are not romantic complications. They are financial risk. A mature person may talk about lifestyle expectations, gifts, support, or relationship rhythm later, after identity and trust have had time to form. A stranger who needs unrecoverable money before meeting has already given you the most important information."] },
      { title: "Screenshots are not paranoia", paragraphs: ["Keeping evidence can feel dramatic when the conversation is still polite, but screenshots are a simple safety habit. They help you remember what was said, compare details over time, and report a profile if threats, impersonation, blackmail, or payment pressure appear later. You are not collecting evidence because you want conflict. You are preserving clarity before someone tries to rewrite the story.", "Save the profile, username, phone number if shared, payment handles, links, and any messages that include pressure or threats. Do not send more personal information in order to confront them. Do not warn them at length that you are reporting them. The cleaner move is to preserve what matters, stop engaging, block where appropriate, and use the site's reporting tools or relevant local support channels if the behaviour is coercive."] },
      { title: "The clean exit is a safety skill", paragraphs: ["People often stay in unsafe conversations because they are trying to exit elegantly. They want to be kind, fair, reasonable, and impossible to misunderstand. Unfortunately, a manipulative person can turn every explanation into a new doorway. The more you justify, the more material they have to argue with.", "A clean exit can be short: 'I am not comfortable continuing this conversation.' You do not need to debate the emergency, negotiate the amount, prove your goodness, or answer a final test of loyalty. If threats appear, stop replying and keep records. If the person has identifying information about you, tighten privacy settings, warn trusted people if needed, and get platform or local advice. Safety is allowed to be less polite than pressure."] },
      { title: "What real people do differently", paragraphs: ["Real people are not perfect. They can be nervous, private, awkward, or slow to reply. But genuine adults usually become more consistent as a conversation develops. Their details do not keep changing. Their requests do not grow larger before trust exists. They can accept a public first meeting, independent transport, slower disclosure, and basic verification without treating those standards as personal insults.", "This is the contrast worth watching. A scammer often needs you to move quickly, feel guilty, and accept a story without outside reference. A real person can tolerate normal friction. They can say, 'Yes, public first is fine.' They can let you think. They can talk about expectations without making money the first proof of sincerity. The difference is rarely one perfect signal. It is the overall emotional climate.", "I also look for boring consistency. Does their age, location, work rhythm, travel story, and preferred meeting style stay coherent across several days? Do they answer ordinary questions without turning evasive or offended? Scams tend to make simple details strangely slippery, while real adults usually become easier to understand as the conversation becomes more specific."] },
      { title: "The rule I would not negotiate", paragraphs: ["If I had to keep one rule, it would be this: do not make yourself financially, physically, or reputationally exposed for someone you have not met and verified. That rule may sound plain, but plain rules are useful when charm makes everything feel more complicated.", "Sugar mummy dating can involve generosity, attraction, mentoring, lifestyle, and a more honest conversation about adult expectations. None of that requires you to ignore pressure. The right connection will not collapse because you refused a gift card, declined a rushed private meeting, or waited before sharing personal details. If a relationship only works when you abandon your own safety, it was not a relationship asking for trust. It was pressure asking for access."] }
    ],
    body: [
      ["What is the clearest scam signal?", "Requests for upfront money, gift cards, crypto, bank access, or payment to unlock a meeting are the clearest signals. A serious person may discuss lifestyle expectations, but they should not demand risky transfers from a stranger."],
      ["Why does urgency matter?", "Urgency is used to bypass judgment. Claims about emergencies, travel deadlines, frozen accounts, or sudden opportunities should be treated with caution when they appear before trust has been built."],
      ["How do you exit safely?", "Stop replying, preserve screenshots if needed, block the profile, and report the account. Do not argue with someone who is already using pressure. Your goal is to protect your identity, money, and peace of mind."]
    ],
    list: ["Never send gift cards or crypto.", "Treat inconsistent identity details as a stop sign.", "Report coercion, threats, or blackmail immediately."]
  },
  {
    slug: "sugar-baby-boundaries",
    title: "Sugar Baby Boundaries That Make Mature Dating Work",
    seoTitle: "Sugar Baby Boundaries | Australia Sugar Mummy",
    eyebrow: "Boundaries",
    description: "Boundary-setting guidance for sugar babies who want mature, respectful, long-term sugar mummy dating in Australia.",
    lead: "Strong boundaries do not make sugar mummy dating colder. They make it more honest. A sugar baby who can communicate limits clearly is easier to trust and less likely to be pulled into a dynamic that feels transactional or unsafe.",
    image: "/assets/images/article-boundaries.jpg",
    alt: "Quiet writing desk for planning relationship boundaries",
    sections: [
      { title: "Boundaries are not a defensive mood", paragraphs: ["People often talk about boundaries as if they are a wall you build after something goes wrong. I think that is too late. In sugar mummy dating, especially as a sugar baby, boundaries are not the emergency exit. They are the architecture of the whole room.", "A boundary is not a punishment, a test, or a way to look difficult. It is the language you use to keep attraction, generosity, privacy, and time from becoming tangled in resentment. When a sugar baby can name limits calmly, the relationship has a better chance of becoming adult instead of theatrical. The point is not to control the other person. The point is to stay in honest contact with yourself while you decide whether this connection deserves more access."] },
      { title: "The first boundary is pace", paragraphs: ["Pace matters because it decides how much trust you are being asked to create before there is evidence. A conversation can feel flattering when someone wants your attention quickly, but speed is not the same as seriousness. Sometimes it is excitement. Sometimes it is pressure wearing a warmer expression.", "A healthy pace gives you enough time to notice consistency. Does the person answer simple questions? Do their expectations become clearer or more slippery? Can they accept a public first meeting, independent transport, and slower disclosure without acting wounded? For a sugar baby, pace is the boundary that protects all the others. Once you let someone rush your timing, it becomes easier for them to rush your privacy, money conversations, and emotional availability too."] },
      { title: "Your privacy has a shape", paragraphs: ["Privacy is not one big secret. It has layers. There are details you can share early, details you share after a first meeting, and details that may stay private until real trust has formed. A good boundary is knowing which layer you are in before the other person starts asking.", "Early conversations can include values, interests, relationship hopes, availability, and the kind of companionship that feels good to you. They do not need your address, workplace, daily routine, banking information, family details, private documents, or exact social circles. Sugar mummy dating can be discreet without becoming hidden in a frightening way. The right person will understand that privacy is part of dignity. The wrong person may treat your caution as an obstacle because they want access before they have earned context."] },
      { title: "Money language should not make you smaller", paragraphs: ["Money sits close to sugar mummy dating, so the wording matters. A sugar baby should be able to discuss support, lifestyle expectations, gifts, and practical realities without feeling priced, owned, or pressured to perform gratitude on command. If the language makes you feel like a product, pay attention.", "The strongest money boundary is not silence. It is clarity with dignity. You can say that you prefer to discuss expectations after a public meeting, that you do not accept upfront financial pressure, or that you are not comfortable with pay-per-meeting framing. You can also ask what generosity means to the other person beyond money. Does it include consistency, mentoring, time, care, planning, and respect? If support is the only language available, the relationship may become too thin to hold real trust."] },
      { title: "The small no tells the truth", paragraphs: ["You do not need a dramatic conflict to learn whether someone respects boundaries. A small no is usually enough. Say you prefer to keep the first meeting public. Say you do not share your exact suburb yet. Say you need time before discussing larger expectations. Then watch the reaction.", "A respectful person may ask a question, but they will not punish you for having a limit. They will not become colder, sarcastic, urgent, or morally offended. They will not turn one boundary into a debate about whether you are serious. This is why small noes are useful: they test the emotional structure before the stakes are high. If a person cannot handle a gentle boundary in the early stage, they are unlikely to handle a harder one with grace later."] },
      { title: "Availability is not proof of interest", paragraphs: ["Many sugar babies accidentally use constant availability to show they are engaged. They reply instantly, rearrange plans, extend conversations past comfort, or make themselves emotionally reachable at every hour. At first, this can feel generous. Over time, it can train both people to ignore your real capacity.", "Interest does not require unlimited access. You can be warm and still have a life. You can like someone and still answer tomorrow. You can want a connection and still protect work, study, sleep, friends, family, and solitude. A mature partner should not need you to abandon your rhythm to believe you care. In fact, steadier availability often creates more trust because it makes the relationship feel chosen rather than compulsive."] },
      { title: "Do not outsource your comfort", paragraphs: ["There is a subtle trap in waiting for the other person to make the situation feel safe. You study their mood, their confidence, their promises, their compliments, and you hope their certainty will quiet your discomfort. But your comfort is not something another person gets to define for you.", "If a plan feels too private, too fast, too expensive, too vague, or too emotionally heavy, that information matters even if you cannot explain it perfectly yet. You can slow down. You can change the venue. You can end the conversation. You can say, 'That does not work for me.' A sugar baby does not need a courtroom-quality argument to set a boundary. Discomfort is already enough reason to pause."] },
      { title: "A boundary sounds better when it is plain", paragraphs: ["The best boundary language is usually simple. Long explanations can invite negotiation, especially with someone who likes to find weak spots in your reasoning. Plain language gives less room for performance. It also helps you hear yourself clearly.", "Useful sentences are short: 'I meet publicly first.' 'I do not send private documents.' 'I am not comfortable with that pace.' 'I need to think before I answer.' 'I do not discuss support in that way.' You can be kind without making your limit soft. You can be respectful without apologising for having standards. The tone should feel calm, not dramatic. You are not trying to win. You are simply naming the terms under which you can continue."] },
      { title: "The right connection expands your choices", paragraphs: ["A good sugar mummy dating connection should make your world feel more spacious, not smaller. You should feel able to ask questions, keep privacy, move at a human pace, and talk about expectations without being shamed. You should not feel that every gift, compliment, or promise creates a debt you have to repay with access.", "This is the difference between generosity and control. Generosity leaves you with more room to be a person. Control makes the relationship feel conditional on obedience. If someone offers support but reacts badly when you keep a boundary, the support is not free-standing kindness. It is a leash with nicer language. Mature dating should not require you to trade self-respect for attention."] },
      { title: "What I would write down before dating", paragraphs: ["Before starting, I would write down five private answers: what pace feels safe, what personal details stay protected, what kind of support conversation feels respectful, what first meeting conditions are non-negotiable, and what behaviour means I leave immediately. I would not write them as a public manifesto. I would write them so I could recognise myself later.", "That matters because attraction can make memory flexible. A charming person can make a clear rule feel negotiable in the moment. Having your standards written down gives you something steadier than mood. Sugar baby boundaries are not about becoming colder. They are about keeping enough self-possession that any warmth you offer is real, chosen, and sustainable. That is what makes mature sugar mummy dating possible in the first place."] }
    ],
    body: [
      ["Which boundaries matter most?", "The most important boundaries are time, privacy, intimacy, communication, and money. Each one should be discussed in plain language, without shame or performance. The right person will prefer clarity over guessing."],
      ["How do you say no without overexplaining?", "Use short, calm language: 'That does not work for me,' 'I prefer to meet in public first,' or 'I am not comfortable sharing that yet.' A respectful partner will hear the boundary. A pushy person will reveal themselves quickly."],
      ["What does long-term value look like?", "Long-term value is not only material support. It can include emotional steadiness, mentoring, practical guidance, shared experiences, and a relationship rhythm that gives both people energy rather than draining them."]
    ],
    list: ["Name your non-negotiables before dating.", "Do not trade privacy for approval.", "Choose consistency over grand promises."]
  },
  {
    slug: "sugar-mummy-profile-tips",
    title: "Sugar Mummy Profile Tips for Better Introductions",
    seoTitle: "Sugar Mummy Profile Tips | Australia Sugar Mummy",
    eyebrow: "Profiles",
    description: "Profile-writing tips for mature Australian women looking for respectful sugar mummy dating introductions.",
    lead: "A good sugar mummy profile does not need to reveal everything. It should show enough personality, standards, and relationship intent to attract adults who understand discretion and long-term value.",
    image: "/assets/images/article-profile.jpg",
    alt: "Elegant profile writing setup with laptop and coffee",
    sections: [
      { title: "A profile is a doorway, not a billboard", paragraphs: ["The mistake many people make with a sugar mummy profile is trying to make it louder. More glamour, more mystery, more claims about lifestyle, more hints that the right person will understand. But a good profile is not a billboard. It is a doorway. It should let the right person know how to enter the conversation without inviting everyone else to crowd the room.", "For a mature woman, this matters because attention is not the same as alignment. A profile can attract hundreds of curious messages and still fail if none of them understand discretion, patience, or the kind of adult companionship you actually want. The goal is not to be endlessly appealing. The goal is to be legible to the people who can meet you with respect."] },
      { title: "Start with the kind of life you protect", paragraphs: ["A strong profile begins by suggesting the life around the relationship. Not the identifying details, not the office, not the exact suburb, not the family structure, but the texture: calm weekends, ambitious work, good restaurants, travel when it has meaning, conversation that does not feel performed, privacy that feels natural rather than secretive.", "This kind of opening does two things at once. It gives warmth, and it sets a standard. A younger partner reading it should understand that you are not looking for chaos, instant access, or someone who treats your life like an accessory. You are inviting a connection that can sit beside an already full life without trying to take it over."] },
      { title: "Specificity beats seductive vagueness", paragraphs: ["Vague profiles often sound elegant at first. They say things like looking for something special, enjoying finer things, or wanting someone who knows how to treat a woman. The problem is that almost anyone can project themselves into those lines. Vague language attracts people who are good at guessing what you want to hear.", "Specificity does not mean exposure. It means naming signals that matter: unhurried dinners, emotional steadiness, discretion around professional life, cultural curiosity, a preference for public first meetings, or a relationship rhythm that values consistency over intensity. These details give serious people something real to respond to. They also make the wrong people reveal themselves faster, because they cannot answer with a copy-and-paste fantasy."] },
      { title: "Let standards sound calm", paragraphs: ["There is a difference between having standards and sounding exhausted by everyone who has failed them. A sugar mummy profile can be selective without becoming sharp, suspicious, or defensive. Calm standards are often more powerful because they signal that you do not need to argue for your own value.", "Instead of writing a long list of warnings, write from the world you want to create. Say that you prefer verified, respectful introductions. Say that discretion, reliability, and emotional intelligence matter. Say that first meetings should be public and relaxed. The tone should feel settled. People who respect standards will find that reassuring. People who dislike standards may scroll away, which is also a useful outcome."] },
      { title: "Do not confuse luxury with character", paragraphs: ["Luxury signals can be part of sugar mummy dating, but they should not be the whole personality of the profile. If every sentence points to restaurants, travel, gifts, hotels, or status, the profile may attract people who are interested in proximity to a lifestyle rather than connection with a person.", "Character is harder to fake and more useful to signal. Mention how you like to spend time, what kind of conversation keeps your attention, whether mentoring appeals to you, and what makes companionship feel worthwhile. A profile with character still leaves room for elegance, but it does not make elegance do all the work. The strongest impression is often not wealth. It is discernment."] },
      { title: "The photograph should support the boundary", paragraphs: ["A profile photograph does not have to reveal everything to feel real. In fact, for many mature women, the right image is one that communicates presence without sacrificing privacy. A polished portrait, a refined setting, a travel moment, or a lifestyle image can say enough while still protecting work, family, and social context.", "Avoid photos that accidentally give away too much: recognisable workplaces, car plates, home interiors, regular venues, school details, or images with other people's faces. The picture should help a respectful person imagine tone, not location. If someone needs highly exposing photos before they can speak respectfully, the photograph is not the problem. Their sense of entitlement is."] },
      { title: "Write for the reply you want", paragraphs: ["Every profile teaches people how to respond. If the profile is only glamorous, the replies may become performative. If it is only guarded, the replies may become defensive. If it is clear, warm, and selective, it gives a thoughtful person permission to answer in the same register.", "One useful test is to read your profile and ask: what would a good first message naturally say back? If there is nothing specific to respond to, add a detail. If the only obvious reply is a compliment about appearance or lifestyle, add more human texture. You want to make it easy for the right person to write something better than 'hey' without forcing them into an interview."] },
      { title: "Name the pace before someone else does", paragraphs: ["Pace is one of the most underrated profile signals. If you do not name it, other people may assume the pace that suits them. Some will push quickly toward private chat, private meetings, money talk, or intimacy. A profile can quietly prevent some of that by making your rhythm visible from the beginning.", "You might say that you prefer a composed introduction, a public first meeting, and time to see whether chemistry is steady offline. You might say that you value consistency more than urgency. These sentences do not make the profile cold. They make it easier for serious people to understand how trust begins with you."] },
      { title: "Leave room for mystery, not confusion", paragraphs: ["Mystery can be attractive. Confusion is not the same thing. A good sugar mummy profile does not need to disclose every desire, boundary, or life detail, but it should make the direction of the invitation clear. People should know whether you are looking for companionship, mentoring, romance, travel, conversation, lifestyle ease, or some careful blend of these.", "The art is to reveal the frame without revealing the whole private interior. You can be intriguing and still be clear. You can be discreet and still be warm. You can hold back identifying details while making your emotional standards unmistakable. That balance is what separates a mature profile from a vague one."] },
      { title: "The final line should lower the noise", paragraphs: ["The last line of a profile has a quiet job: it should make the next step feel obvious for the right person and uninteresting for the wrong one. This is where a simple invitation can do more than a dramatic closing statement.", "Try a line that asks for a thoughtful introduction, names one or two values, and reinforces the pace you prefer. For example: 'If you value discretion, warm conversation, and a public first meeting, introduce yourself with the kind of connection you are actually hoping to build.' That sentence does not chase attention. It filters it. A good profile is not trying to be everything to everyone. It is trying to make the right conversation easier to begin."] }
    ],
    body: [
      ["What should your profile lead with?", "Lead with the kind of connection you want. Mention maturity, discretion, companionship, mentoring, travel, conversation, or lifestyle interests where relevant. Avoid vague lines that could attract people looking for quick access rather than real alignment."],
      ["How much should you disclose?", "Share enough to create trust, but keep identifying details private until there is a reason to share more. Your profile can be warm and specific without naming your workplace, exact suburb, daily routine, or private family details."],
      ["What filters the wrong people out?", "Clear standards filter better than harsh warnings. State that you value verified, respectful, adult communication and that you are not looking for escort-style relationship models, rushed private meetings, or short-term paid encounters."]
    ],
    list: ["Use specific lifestyle signals.", "State the relationship pace you prefer.", "Make verification and respect feel normal from the start."]
  }
];

const imageMap = {
  hero: "0ad55963-chatgpt-image-2026a1-3ae12aey-14_21_43-1-1-LR0B2zYQ5ZAQmWk2.webp",
  article: "84a6649e-photo-1763479169474-728a7de108c3.avif",
  feature1: "698025b7-chatgpt-image-2026a1-3ae11aey-15_22_25-3-1-hAUwYlztRS9Jo9JD.webp",
  feature2: "a796d465-chatgpt-image-2026a1-3ae11aey-15_22_25-2-1-4F4Ne7ryknrWX5Xc.webp",
  feature3: "d630f545-chatgpt-image-2026a1-3ae11aey-15_22_25-4-1-MNkdP7TQTRAiWcDe.webp",
  cta: "f1766a2a-chatgpt-image-2026a1-3ae11aey-15_22_25-5-1-VMh7xdkyRdmV5G93.webp",
  profile1: "1cf01681-img_8622-62wpj5IarUeIthoP.jpg",
  profile2: "320505d8-img_8623-Oqay0I1mAgfDR6ig.jpg",
  profile3: "d059a1aa-img_8624-ww43GEcCHxDkwkYc.jpg",
  profile4: "3c5ada03-10506-BDVwc71jJ4BTb9pF.jpg",
};

const replacementImageDir = "/Users/apple/Desktop/oldwoman";
const homeReplacementImages = {
  hero: "pexels-rdne-5778719.jpg",
  profile1: "output5.jpg",
  profile2: "pexels-mikhail-nilov-6980992.jpg",
  profile3: "pexels-see2believe-3805231.jpg",
  profile4: "pexels-pavel-danilyuk-7594587.jpg",
  profile5: "pexels-pavel-danilyuk-8638310.jpg",
  profile6: "pexels-ron-lach-10284008.jpg",
  definition: "pexels-rdne-5778550.jpg",
  benefit1: "pexels-davner-ribeiro-2711547-4574354.jpg",
  benefit2: "glamorous-curvy-woman-waving-luxurious-lounge.jpg",
  benefit3: "pexels-karola-g-7680628.jpg",
  faq: "pexels-rdne-5778523.jpg",
  how: "pexels-cottonbro-5922465.jpg",
  testimonialsBg: "pexels-iraklis-gerogiannis-425359-1104758.jpg",
  testimonialAvatar1: "pexels-gustavo-fring-4173264.jpg",
  testimonialAvatar2: "pexels-pedyuri-32012032.jpg",
  luxuryCta: "output6.jpg",
};

const oldwomanImageFiles = fs.readdirSync(replacementImageDir)
  .filter((file) => /\.(avif|gif|jpe?g|png|webp)$/i.test(file))
  .sort();

function shuffledImageFiles(files) {
  const shuffled = [...files];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function read(rel) {
  return fs.readFileSync(path.join(templateRoot, rel), "utf8");
}

function copyFile(src, dest) {
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

function outPath(urlPath) {
  const clean = urlPath === "/" ? "" : urlPath.replace(/^\/|\/$/g, "");
  return path.join(root, clean, "index.html");
}

function writePage(urlPath, html) {
  const file = outPath(urlPath);
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, html);
}

function canonical(urlPath) {
  return `${domain}${urlPath}`;
}

function replaceAll(template, data) {
  let html = template;
  for (const [key, value] of Object.entries(data)) {
    html = html.split(`{${key}}`).join(String(value));
  }
  return html;
}

const common = {
  LANGUAGE_CODE: "en-AU",
  BRAND_NAME: brand,
  BRAND_INITIALS: "ASM",
  MARKET_NAME: market,
  SKIP_LINK_LABEL: "Skip to main content",
  PRIMARY_NAV_LABEL: "Primary navigation",
  PRIMARY_CTA_LABEL: "Register Now",
  PRIMARY_CTA_URL: registrationUrl,
  SECONDARY_CTA_LABEL: "Read the Safety Guide",
  SECONDARY_CTA_URL: "/safety/",
  BREADCRUMB_LABEL: "Breadcrumb",
  BREADCRUMB_HOME: "Home",
  FOOTER_COPY: `${brand} is an adults-only introductory website for people aged 20 and over. It does not promote escort services, paid encounters, coercion, or financial pressure. Published content is general information, not legal, financial, or personal safety advice.`,
  FOOTER_COPYRIGHT: `© ${year}. All rights reserved.`,
  FOOTER_NAV_LABEL: "Footer navigation",
  FOOTER_LABEL_1: "FAQs",
  FOOTER_URL_1: "/help/",
  FOOTER_LABEL_2: "Privacy Policy",
  FOOTER_URL_2: "/privacy/",
  FOOTER_LABEL_3: "About Us",
  FOOTER_URL_3: "/about/",
  FOOTER_LABEL_4: "Contact",
  FOOTER_URL_4: "/contact/",
  FOOTER_LABEL_5: "Safety & Trust",
  FOOTER_URL_5: "/safety/",
  FOOTER_LABEL_6: "How It Works",
  FOOTER_URL_6: "/sugar-mummy/",
};

nav.forEach(([label, url], i) => {
  common[`NAV_LABEL_${i + 1}`] = label;
  common[`NAV_URL_${i + 1}`] = url;
});

cities.forEach(([name, url], i) => {
  common[`CITY_NAME_${i + 1}`] = name;
  common[`CITY_URL_${i + 1}`] = url;
});

function articleSchema(pathname, title, description) {
  return `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@type": "Person", name: "Jade Monroe" },
    publisher: { "@type": "Organization", name: brand },
    mainEntityOfPage: canonical(pathname)
  })}</script>`;
}

function pageSchema(pathname, title, description, h1, type = "WebPage") {
  const crumbs = [
    { "@type": "ListItem", position: 1, name: "Home", item: domain },
    { "@type": "ListItem", position: 2, name: h1, item: canonical(pathname) }
  ];
  return `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        name: title,
        headline: h1,
        description,
        url: canonical(pathname),
        inLanguage: "en-AU",
        publisher: { "@type": "Organization", name: brand, url: domain }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs
      }
    ]
  })}</script>`;
}

function baseHeadExtra(pathname, title, description, type = "website") {
  return [
    `<meta property="og:title" content="${escapeAttr(title)}">`,
    `<meta property="og:description" content="${escapeAttr(description)}">`,
    `<meta property="og:type" content="${type}">`,
    `<meta property="og:url" content="${canonical(pathname)}">`
  ].join("\n  ");
}

function escapeAttr(text) {
  return String(text).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

function faviconLinks() {
  return [
    `<link rel="icon" href="/favicon.svg" type="image/svg+xml">`,
    `<link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml">`,
    `<link rel="apple-touch-icon" href="/favicon.svg">`,
    `<link rel="manifest" href="/site.webmanifest">`,
    `<meta name="theme-color" content="#4b171f">`
  ].join("\n  ");
}

function faviconSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Australia Sugar Mummy logo">
  <rect width="64" height="64" rx="14" fill="#4b171f"/>
  <path d="M12 44h40" stroke="#d8b36a" stroke-width="3" stroke-linecap="round"/>
  <path d="M18 20c5-6 14-6 19 0 4-4 10-5 15-2-4 3-6 8-6 14 0 3 1 7 3 10H15c2-3 3-7 3-10 0-5-2-9-6-12 2-1 4-1 6 0Z" fill="#f8efe2"/>
  <text x="32" y="39" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="15" font-weight="700" letter-spacing="1.5" fill="#4b171f">ASM</text>
</svg>
`;
}

function pageShell({ pathname, title, description, eyebrow, h1, lead, image, imageAlt, body, cta = true, schema = "", imagePool = [] }) {
  const sections = body.map((section) => {
    if (section.type === "list") {
      return `<h2>${section.title}</h2><ul>${section.items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    }
    if (section.type === "table") {
      return `<h2>${section.title}</h2><div class="table-wrap"><table><thead><tr>${section.headers.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${section.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
    }
    if (section.type === "raw") {
      return `<h2>${section.title}</h2>${section.html}`;
    }
    return `<h2>${section.title}</h2>${section.paragraphs.map((p) => `<p>${p}</p>`).join("")}`;
  }).join("\n");
  const imageAttrs = imagePool.length
    ? ` data-random-images="${imagePool.map((src) => escapeAttr(src)).join("|")}"`
    : "";

  const html = `<!doctype html>
<html lang="en-AU">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeAttr(title)}</title>
  <meta name="description" content="${escapeAttr(description)}">
  <link rel="canonical" href="${canonical(pathname)}">
  ${baseHeadExtra(pathname, title, description, "article")}
  ${faviconLinks()}
  <link rel="stylesheet" href="/assets/template.css">
  <script src="/assets/template.js" defer></script>
  ${schema}
</head>
<body>
  ${header()}
  <main id="main">
    <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>${h1}</span></nav>
    <article class="article-layout">
      <header class="article-header">
        <p class="eyebrow">${eyebrow}</p>
        <h1>${h1}</h1>
        <p>${lead}</p>
      </header>
      <img class="article-image" src="${image}" alt="${imageAlt}" width="1120" height="560"${imageAttrs}>
      <div class="article-body">
        ${sections}
        ${cta ? `<div class="article-cta"><h2>Ready for a more selective introduction?</h2><p>Explore ${brand} if you value mature communication, adult boundaries, and a slower path toward real offline meetings.</p><a class="button button-primary" href="${registrationUrl}" rel="nofollow">Register Now</a></div>` : ""}
        ${(pathname.startsWith("/blog/") && pathname !== "/blog/") || (pathname.startsWith("/sugar-mummy/") && pathname !== "/sugar-mummy/") ? authorBlock() : ""}
      </div>
    </article>
  </main>
  ${footer()}
</body>
</html>`;
  writePage(pathname, html);
}

function header() {
  return `<a class="skip-link" href="#main">Skip to main content</a>
  <header class="site-header">
    <a class="brand" href="/"><span>ASM</span>${brand}</a>
    <button class="mobile-nav-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="primary-navigation" data-nav-toggle><span></span><span></span><span></span></button>
    <nav class="site-nav" id="primary-navigation" aria-label="Primary navigation">
      ${nav.map(([label, url]) => `<a href="${url}">${label}</a>`).join("")}
      <a class="nav-cta" href="${registrationUrl}" rel="nofollow">Register</a>
    </nav>
  </header>`;
}

function footer() {
  return `<footer class="site-footer mirror-footer">
    <div class="mirror-footer-inner">
      <div class="mirror-footer-legal"><p>© ${year}. All rights reserved.</p><p>${common.FOOTER_COPY}</p></div>
      <nav class="mirror-footer-nav" aria-label="Footer navigation">
        <section><h2>Information</h2><a href="/help/">FAQs</a><a href="/privacy/">Privacy Policy</a><a href="/about/">About Us</a><a href="/contact/">Contact</a><a href="/safety/">Safety & Trust</a><a href="/sugar-mummy/">How It Works</a></section>
        <section><h2>Local Dating</h2><div class="mirror-footer-city-grid">${cities.map(([name, url]) => `<a href="${url}">${name}</a>`).join("")}</div></section>
        <section><h2>Discover</h2><a href="/anti-scam/">Anti-Scam Guide</a><a href="/blog/">Blog</a></section>
      </nav>
    </div>
  </footer>`;
}

function authorBlock() {
  return `<aside class="author-block"><h2>Author: Jade Monroe</h2><p>After seven years of studying in the U.S. and earning a master's degree in Human Rights from Columbia University, I began a life of wandering and writing.</p><p><a href="https://www.reddit.com/user/Wide_Focus_9358/">Reddit</a> | <a href="https://www.facebook.com/profile.php?id=100069621533133">Facebook</a> | <a href="https://x.com/msteemo1990">X</a> | <a href="https://medium.com/@gary1880">Medium</a></p></aside>`;
}

function buildAssets() {
  ensureDir(path.join(root, "assets/images"));
  fs.writeFileSync(path.join(root, "favicon.svg"), faviconSvg());
  fs.writeFileSync(path.join(root, "site.webmanifest"), JSON.stringify({
    name: brand,
    short_name: "ASM",
    icons: [
      { src: "/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }
    ],
    theme_color: "#4b171f",
    background_color: "#4b171f",
    display: "standalone"
  }, null, 2) + "\n");
  copyFile(path.join(templateRoot, "assets/template.css"), path.join(root, "assets/template.css"));
  copyFile(path.join(templateRoot, "assets/template.js"), path.join(root, "assets/template.js"));
  fs.appendFileSync(path.join(root, "assets/template.css"), `

.table-wrap {
  width: 100%;
  overflow-x: auto;
  margin: 1.4rem 0 2rem;
}

.table-wrap table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  color: #211c1a;
  border: 1px solid rgba(72, 48, 42, .18);
}

.table-wrap th,
.table-wrap td {
  padding: .9rem 1rem;
  border-bottom: 1px solid rgba(72, 48, 42, .14);
  text-align: left;
  vertical-align: top;
}

.table-wrap th {
  background: #21120f;
  color: #fff8ef;
}

.article-cta,
.author-block {
  margin-top: 2rem;
  padding: 1.25rem;
  border: 1px solid rgba(170, 83, 62, .22);
  background: #fff8f3;
  color: #211c1a;
}

.author-block h2,
.article-cta h2 {
  margin-top: 0;
}

.city-inline-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: .75rem;
  margin: 1rem 0 2rem;
}

.city-inline-grid a {
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  padding: .75rem 1rem;
  background: #171313;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
}

@media (max-width: 680px) {
  .mirror-luxury-cta-person,
  .mirror-luxury-cta-woman {
    left: 0;
    max-width: 74vw;
  }

  .table-wrap {
    overflow-x: visible;
  }

  .table-wrap table,
  .table-wrap thead,
  .table-wrap tbody,
  .table-wrap tr,
  .table-wrap th,
  .table-wrap td {
    display: block;
    width: 100%;
  }

  .table-wrap tr {
    border-bottom: 1px solid rgba(72, 48, 42, .16);
  }
}
`);
  fs.appendFileSync(path.join(root, "assets/template.js"), `

document.querySelectorAll("[data-random-images]").forEach((image) => {
  const sources = image.dataset.randomImages.split("|").filter(Boolean);
  if (!sources.length) return;
  image.src = sources[Math.floor(Math.random() * sources.length)];
});
`);
  for (const icon of ["icon-message-simple.svg", "icon-search-simple.svg", "icon-support-simple.svg", "icon-privacy-simple.svg"]) {
    copyFile(path.join(templateRoot, "assets", icon), path.join(root, "assets/images", icon));
  }
  for (const file of Object.values(imageMap)) {
    copyFile(path.join(templateRoot, "authorized-homepage/mirror", file), path.join(root, "assets/images", file));
  }
  const aliases = {
    "article-definition.jpg": imageMap.article,
    "article-safety.jpg": imageMap.feature3,
    "article-meeting.jpg": imageMap.feature1,
    "article-scam.jpg": imageMap.feature2,
    "article-boundaries.jpg": imageMap.feature3,
    "article-profile.jpg": imageMap.feature1,
  };
  for (const [alias, source] of Object.entries(aliases)) {
    copyFile(path.join(templateRoot, "authorized-homepage/mirror", source), path.join(root, "assets/images", alias));
  }
  for (const file of oldwomanImageFiles) {
    copyFile(path.join(replacementImageDir, file), path.join(root, "assets/images", file));
  }
}

function buildHome() {
  const template = read("templates/homepage-template.html");
  const data = {
    ...common,
    META_TITLE: "Australia Sugar Mummy Dating | Mature Sugar Mummy Dating",
    META_DESCRIPTION: "Australia Sugar Mummy is an adults-only sugar mummy dating guide for respectful, discreet introductions across Australia.",
    CANONICAL_URL: canonical("/"),
    IMAGE_HERO: `/assets/images/${homeReplacementImages.hero}`,
    IMAGE_HERO_ALT: "Luxury Australian sugar mummy dating introduction scene",
    HERO_TITLE: "Sugar Mummy Dating in Australia",
    HERO_LEAD: "A selective adults-only space for mature women and younger partners who value discretion, emotional intelligence, long-term companionship, and real-world introductions.",
    TRUST_TITLE: "A calmer standard for modern sugar mummy dating",
    TRUST_CARD_TITLE_1: "Adults Only",
    TRUST_CARD_COPY_1: "The site is written for adults aged 20 and over who can make independent relationship choices.",
    TRUST_CARD_TITLE_2: "Respect First",
    TRUST_CARD_COPY_2: "We reject coercion, pressure, escort-style framing, and short-term paid encounter language.",
    TRUST_CARD_TITLE_3: "Privacy Aware",
    TRUST_CARD_COPY_3: "Content encourages careful disclosure, public-first meetings, and discretion around work and family life.",
    TRUST_CARD_TITLE_4: "Verification Mindset",
    TRUST_CARD_COPY_4: "Real-person verification is treated as a membership standard for people who want higher-trust introductions.",
    LISTING_TITLE: "Featured introduction paths",
    PROFILE_CTA_LABEL: "View Guide",
    LISTING_URL: "/sugar-mummy/",
    LISTING_CTA_LABEL: "View More",
    ICON_IMAGE_1: "/assets/images/icon-message-simple.svg",
    ICON_TITLE_1: "Real-Time Messaging",
    ICON_COPY_1: "Users can communicate instantly with verified members through private, responsive messaging for clear and respectful introductions.",
    ICON_IMAGE_2: "/assets/images/icon-search-simple.svg",
    ICON_TITLE_2: "Advanced Search",
    ICON_COPY_2: "Users can filter by location, lifestyle, expectations, interests, and relationship goals to find members who match their preferences.",
    ICON_IMAGE_3: "/assets/images/icon-support-simple.svg",
    ICON_TITLE_3: "24/7 Human Support",
    ICON_COPY_3: "A professional human support team is planned around the clock to help with account, safety, privacy, and member-experience issues.",
    ICON_IMAGE_4: "/assets/images/icon-privacy-simple.svg",
    ICON_TITLE_4: "Data Privacy Protection",
    ICON_COPY_4: "Personal information should be protected with strict privacy practices aligned with international and Australian-style data protection expectations.",
    EDITORIAL_TITLE: "What sugar mummy dating should mean",
    EDITORIAL_PARAGRAPH_1: "Sugar mummy dating should not be reduced to a quick transaction. The stronger model is built around long-term value, adult freedom, emotional maturity, and honest expectations.",
    EDITORIAL_PARAGRAPH_2: "For mature, accomplished women, the appeal may be companionship without traditional pressure, the pleasure of mentoring, and a lighter relationship dynamic with someone who brings energy and presence.",
    EDITORIAL_PARAGRAPH_3: "For younger partners, the appeal may be guidance, steadiness, attraction, and a relationship structure that respects ambition without pretending every connection must follow the same conventional path.",
    EDITORIAL_PARAGRAPH_4: "Australia Sugar Mummy is positioned as a bridge toward aligned offline meetings, not endless browsing or attention-looking for online.",
    IMAGE_ARTICLE: `/assets/images/${homeReplacementImages.definition}`,
    IMAGE_ARTICLE_ALT: "Elegant Australian lounge for mature dating conversations",
    FEATURES_TITLE: "Built for selective adult introductions",
    FEATURES_LEAD: "A quieter alternative to noisy dating apps, with practical safety content and city-specific guidance.",
    FEATURE_TITLE_1: "Mature Women With Standards",
    FEATURE_COPY_1: "For accomplished women who value privacy, emotional steadiness, and meaningful companionship without conventional relationship pressure.",
    IMAGE_FEATURE_1: `/assets/images/${homeReplacementImages.benefit1}`,
    IMAGE_FEATURE_ALT_1: "Confident mature woman in a refined setting",
    FEATURE_TITLE_2: "Younger Partners With Clarity",
    FEATURE_COPY_2: "For attractive, emotionally intelligent adults who bring vitality, conversation, and long-term companionship rather than short-term demands.",
    IMAGE_FEATURE_2: `/assets/images/${homeReplacementImages.benefit2}`,
    IMAGE_FEATURE_ALT_2: "Younger adult partner in an elegant city setting",
    FEATURE_TITLE_3: "Safety-Led Dating Culture",
    FEATURE_COPY_3: "Guides, checklists, and standards help members avoid scams, protect privacy, and plan respectful first meetings.",
    IMAGE_FEATURE_3: `/assets/images/${homeReplacementImages.benefit3}`,
    IMAGE_FEATURE_ALT_3: "Public meeting place for discreet Australian dating",
    CITY_TITLE: "Sugar mummy dating across Australia",
    CITY_LEAD: "Explore city-specific guidance for public-first meetings, privacy, and local dating pace.",
    FAQ_TITLE: "Sugar Mummy Dating FAQs",
    FAQ_URL: "/help/",
    FAQ_LEAD: "Clear answers about safety, verification, boundaries, cities, and what this relationship style is not.",
    FAQ_BG_IMAGE: `/assets/images/${homeReplacementImages.faq}`,
    HOW_TITLE: "How Australia Sugar Mummy works",
    HOW_LEAD: "The site is designed around careful introductions, not rushed encounters.",
    HOW_IMAGE: `/assets/images/${homeReplacementImages.how}`,
    HOW_IMAGE_ALT: "Australian dating planning conversation",
    HOW_IMAGE_CTA_LABEL: "Register Now",
    TRUST_URL: "/safety/",
    VERIFICATION_URL: "/anti-scam/",
    TRUST_CTA_TITLE: "Read Safety & Trust",
    VERIFICATION_CTA_TITLE: "Review Scam Warnings",
    TESTIMONIALS_TITLE: "What aligned members tend to value",
    TESTIMONIALS_BG_IMAGE: `/assets/images/${homeReplacementImages.testimonialsBg}`,
    TESTIMONIAL_SOURCE_1: "Editorial scenario",
    TESTIMONIAL_HEADLINE_1: "Discretion before attention",
    TESTIMONIAL_COPY_1: "Many mature daters want warmth and choice without turning their private life into a public performance.",
    TESTIMONIAL_AVATAR_1: `/assets/images/${homeReplacementImages.testimonialAvatar1}`,
    TESTIMONIAL_AUTHOR_1: "Composite value note, not a user review",
    TESTIMONIAL_SOURCE_2: "Editorial scenario",
    TESTIMONIAL_HEADLINE_2: "Boundaries make dating easier",
    TESTIMONIAL_COPY_2: "Clear expectations can remove confusion and make a first meeting feel adult, calm, and respectful.",
    TESTIMONIAL_AVATAR_2: `/assets/images/${homeReplacementImages.testimonialAvatar2}`,
    TESTIMONIAL_AUTHOR_2: "Composite value note, not a user review",
    FEATURED_IN_TITLE: "Conversation themes covered by our guides",
    FEATURED_IN_LOGOS_LABEL: "Editorial themes",
    CTA_TITLE: "Register for a more selective sugar mummy dating standard",
    CTA_COPY: "Australia Sugar Mummy is for adults who want discretion, real-person standards, and meaningful ongoing relationships beyond conventional labels.",
    CTA_PERSON_IMAGE: `/assets/images/${homeReplacementImages.luxuryCta}`,
    FOOTER_GROUP_TITLE_1: "Information",
    FOOTER_GROUP_TITLE_2: "Local Dating",
    FOOTER_GROUP_TITLE_3: "Discover",
    DISCOVER_LABEL_1: "Anti-Scam Guide",
    DISCOVER_URL_1: "/anti-scam/",
    DISCOVER_LABEL_2: "Blog",
    DISCOVER_URL_2: "/blog/",
    DISCOVER_LABEL_3: "Safety & Trust",
    DISCOVER_URL_3: "/safety/",
    DISCOVER_LABEL_4: "Help & FAQs",
    DISCOVER_URL_4: "/help/",
  };
  for (let i = 1; i <= 6; i++) {
    const img = homeReplacementImages[`profile${i}`];
    data[`PROFILE_IMAGE_${i}`] = `/assets/images/${img}`;
    data[`PROFILE_IMAGE_ALT_${i}`] = `Blurred profile-style card for ${brand}`;
    data[`PROFILE_NAME_${i}`] = ["Sydney guide", "Melbourne guide", "Brisbane guide", "Perth guide", "Adelaide guide", "Gold Coast guide"][i - 1];
    data[`PROFILE_META_${i}`] = "20+";
    data[`PROFILE_TYPE_${i}`] = "Local sugar mummy dating guidance";
    data[`PROFILE_LOCATION_${i}`] = cities[i - 1][0] + ", Australia";
    data[`PROFILE_STATUS_${i}`] = "Guide available";
    data[`PROFILE_URL_${i}`] = cities[i - 1][1];
  }
  for (let i = 1; i <= 12; i++) {
    const steps = [
      ["Start with intent.", "Read the relationship standard and decide whether long-term value, discretion, and verification suit you."],
      ["Choose your city.", "Use local pages to think through public venues, transport, and privacy before arranging a meeting."],
      ["Create a respectful profile.", "Lead with values, boundaries, and the relationship rhythm you want."],
      ["Keep early messages calm.", "Avoid pressure, money requests, rushed intimacy, and private-location demands."],
      ["Verify before trust deepens.", "Treat real-person signals as a normal safety standard."],
      ["Plan public-first meetings.", "Meet somewhere visible, time-limited, and easy to leave independently."],
      ["Discuss expectations plainly.", "Talk about privacy, pace, communication, and what support means to both adults."],
      ["Reject transactional framing.", "Do not use escort-style language or pay-per-meeting relationship models."],
      ["Protect personal details.", "Hold back home, workplace, banking, and family details until trust is earned."],
      ["Use safety resources.", "Review scam patterns before conversations become emotionally intense."],
      ["Move offline only when aligned.", "The platform should support real meetings, not endless browsing."],
      ["Leave when respect is missing.", "A mature connection should become clearer over time, not more coercive."]
    ];
    data[`HOW_STEP_TITLE_${i}`] = steps[i - 1][0];
    data[`HOW_STEP_COPY_${i}`] = steps[i - 1][1];
  }
  let html = replaceAll(template, data);
  html = html.replace(/<a href="\{CITY_URL_\d+\}">\{CITY_NAME_\d+\}<\/a>/g, "");
  html = html.split(`href="${registrationUrl}"`).join(`href="${registrationUrl}" rel="nofollow"`);
  html = html.replace(/<img\b(?![^>]*\balt=)([^>]*)>/g, `<img alt="${brand} dating guide image"$1>`);
  html = html.replace(/alt=""(?=[\s>])/g, `alt="${brand} dating guide image"`);
  html = html.replace("</head>", `  ${baseHeadExtra("/", data.META_TITLE, data.META_DESCRIPTION)}\n  ${faviconLinks()}\n  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand,
    url: domain,
    inLanguage: "en-AU"
  })}</script>\n</head>`);
  writePage("/", html);
}

function buildBlogIndex() {
  const cards = blogPosts.map((post) => `<article class="post-card"><img src="${post.image}" alt="${post.alt}" width="720" height="420"><p class="eyebrow">${post.eyebrow}</p><h2><a href="/blog/${post.slug}/">${post.title}</a></h2><p>${post.description}</p></article>`).join("");
  pageShell({
    pathname: "/blog/",
    title: "Sugar Mummy Dating Blog Australia | Guides & Safety",
    description: "Read Australian sugar mummy dating guides about safety, first meetings, boundaries, profiles, scams, and mature relationship expectations.",
    eyebrow: "Guides",
    h1: "Sugar Mummy Dating Blog",
    lead: "Practical field guides for adults who want discreet, respectful, and safety-aware sugar mummy dating in Australia.",
    image: `/assets/images/${imageMap.feature1}`,
    imageAlt: "Australian dating guide editorial image",
    cta: false,
    schema: pageSchema("/blog/", "Sugar Mummy Dating Blog Australia | Guides & Safety", "Read Australian sugar mummy dating guides about safety, first meetings, boundaries, profiles, scams, and mature relationship expectations.", "Sugar Mummy Dating Blog", "CollectionPage"),
    body: [{ title: "Latest guides", type: "raw", html: `<div class="post-grid">${cards}</div>` }]
  });
}

function buildArticles() {
  for (const post of blogPosts) {
    pageShell({
      pathname: `/blog/${post.slug}/`,
      title: post.seoTitle || `${post.title} | ${brand}`,
      description: post.description,
      eyebrow: post.eyebrow,
      h1: post.title,
      lead: post.lead,
      image: post.image,
      imageAlt: post.alt,
      schema: articleSchema(`/blog/${post.slug}/`, post.title, post.description),
      body: post.sections || [
        { title: "Key takeaways", type: "list", items: post.list },
        ...post.body.map(([title, text]) => ({ title, paragraphs: [text] }))
      ]
    });
  }
}

function buildHubAndAudience() {
  pageShell({
    pathname: "/sugar-mummy/",
    title: "Sugar Mummy Dating Australia | Guide & City Directory",
    description: "Explore sugar mummy dating in Australia with city guides, safety standards, relationship expectations, and respectful adult introductions.",
    eyebrow: "Sugar mummy dating Australia",
    h1: "Sugar Mummy Dating in Australia",
    lead: "A practical hub for adults who want mature, discreet, and long-term sugar mummy dating built around mutual respect rather than short-term transactions.",
    image: `/assets/images/${oldwomanImageFiles[0]}`,
    imageAlt: "Mature Australian sugar mummy dating scene",
    imagePool: oldwomanImageFiles.map((file) => `/assets/images/${file}`),
    schema: pageSchema("/sugar-mummy/", "Sugar Mummy Dating Australia | Guide & City Directory", "Explore sugar mummy dating in Australia with city guides, safety standards, relationship expectations, and respectful adult introductions.", "Sugar Mummy Dating in Australia", "CollectionPage"),
    body: [
      { title: "Key takeaways", type: "list", items: ["Sugar mummy dating in Australia works best when both adults treat clarity, privacy, and consent as the baseline.", "A healthy relationship dynamic is not escort-style, pay-per-meeting, or built on pressure; it is a negotiated adult relationship with mutual value.", "The first conversation should cover pace, discretion, public-first meetings, and what each person actually wants from the connection.", "City context matters: Sydney and Melbourne often need more discretion, while Brisbane, Perth, Adelaide, and Gold Coast each need their own privacy-aware meeting style.", "Use safety habits early: verify identity signals, avoid urgent money requests, meet publicly first, and leave if the tone becomes coercive."] },
      { title: "What is sugar mummy dating in Australia?", paragraphs: ["Sugar mummy dating in Australia is an adult relationship style where a mature woman and a younger adult partner choose a connection with clearer expectations than conventional dating often provides. The healthiest version is built around companionship, mentoring, emotional steadiness, lifestyle compatibility, privacy, and mutual generosity.", "That definition matters because the phrase can attract lazy assumptions. Australia Sugar Mummy does not frame the topic as escorting, paid intimacy, or rushed private access. The better question is not how quickly two people can meet, but whether their expectations, boundaries, and communication style make real-world trust possible."] },
      { title: "What makes this approach different?", paragraphs: ["The difference is the level of intention before the first meeting. Instead of hoping chemistry will solve mismatched expectations, both adults should discuss what kind of relationship rhythm they want, how visible they are comfortable being, and what personal details should stay private until trust has been earned.", "For sugar mummies, this can mean a more selective way to meet someone who values maturity, discretion, and lived experience. For sugar babies, it can mean a relationship with guidance, warmth, stability, and a calmer pace than swipe-led dating. For both, the standard is the same: no coercion, no false identity, no pressure disguised as romance."] },
      { title: "Who is this for?", type: "table", headers: ["Audience", "What they may value", "What does not fit"], rows: [["Sugar mummies", "Discretion, companionship, mentoring, lighter relationship structure", "Coercion, fake identity, pressure"], ["Sugar babies", "Guidance, emotional value, vitality, long-term companionship", "Short-term demands or purely transactional access"], ["Both", "Public-first meetings, privacy, honest expectations", "Escort-style framing or unsafe secrecy"]] },
      { title: "How should expectations be discussed?", paragraphs: ["Expectations should be discussed early, plainly, and without performance. A good opening conversation covers availability, preferred pace, privacy needs, communication habits, travel comfort, and what each person considers respectful. If either person cannot answer calmly, the connection may not be ready for an offline meeting.", "The most useful conversations are specific without becoming invasive. Instead of asking for sensitive personal details, ask practical questions: how often would you like to meet, what type of first meeting feels comfortable, what topics are private at the start, and what would make you pause or end the conversation?"] },
      { title: "What safety standards should come first?", paragraphs: ["Safety should come before chemistry. Keep early messages inside a privacy-protective channel, avoid sending identity documents or banking details, and treat urgent requests for money, gift cards, crypto, or private travel as stop signs. A genuine adult connection can survive a slower pace.", "First meetings should be public, time-limited, and easy to leave. Choose a staffed venue, arrive independently, tell a trusted person where you will be, and avoid sharing home, workplace, or family details too soon. For a deeper checklist, read the <a href=\"/safety/\">safety guide</a> and the <a href=\"/anti-scam/\">anti-scam guide</a> before arranging plans."] },
      { title: "How do Australian cities change the dating experience?", paragraphs: ["Australian sugar mummy dating is not the same in every city. Sydney and Melbourne can feel fast, career-led, and socially visible, so discretion matters from the first message. Brisbane, Perth, Adelaide, and Gold Coast often reward a more relaxed tone, but public-first planning still matters.", "Each current city guide focuses on a different risk pattern: visibility in Sydney, conversation-led pacing in Melbourne, low-pressure planning in Brisbane, distance-aware logistics in Perth, quiet reputation in Adelaide, and lifestyle screening on the Gold Coast. A thoughtful introduction process protects both adults from awkward exposure and rushed decisions."] },
      { title: "What should a good first message include?", paragraphs: ["A good first message should show intent, respect, and enough specificity to feel human. Mention why the profile caught your attention, name the relationship pace you prefer, and signal that you are comfortable with verification and a public first meeting. This filters out people who want secrecy without trust.", "Avoid messages that sound copied, overly intimate, financially aggressive, or impatient. The best introductions feel calm and selective: warm enough to invite a reply, clear enough to show standards, and brief enough to leave room for a real conversation."] },
      { title: "When should you walk away?", paragraphs: ["Walk away when urgency replaces respect. Pressure to meet privately, requests for upfront transfers, inconsistent identity details, threats, blackmail, or escort-style pricing language are not minor misunderstandings. They show that the connection is already moving away from mature sugar mummy dating.", "Leaving early is not rude when the pattern is unsafe. Preserve screenshots if needed, block or report the profile, and do not negotiate with someone who is using guilt or fear. A respectful person may be disappointed by a boundary, but they will not punish you for having one."] },
      { title: "Explore Australian cities", type: "raw", html: `<div class="city-inline-grid">${cities.map(([name, url]) => `<a href="${url}">${name}</a>`).join("")}</div>` }
    ]
  });
}

function buildCities() {
  if (oldwomanImageFiles.length < cities.length) {
    throw new Error(`Need at least ${cities.length} oldwoman images for unique city page illustrations.`);
  }
  const cityImageFiles = shuffledImageFiles(oldwomanImageFiles).slice(0, cities.length);
  const cityNotes = {
    Sydney: "Sydney dating often rewards discretion because professional and social circles can overlap quickly. Plan first meetings around visible, easy-to-leave venues and avoid sharing workplace details too early.",
    Melbourne: "Melbourne offers a slower, conversation-led dating rhythm. Cafes, hotel lounges, and gallery-adjacent areas can support public-first meetings without making the moment feel overly exposed.",
    Brisbane: "Brisbane sugar mummy dating can feel more relaxed, but privacy still matters. Keep early plans simple, public, and time-limited while you learn whether expectations match.",
    Perth: "Perth's social distance can be useful for discretion, but it also makes verification important. Be clear about identity, travel expectations, and meeting logistics before committing time.",
    Adelaide: "Adelaide is better suited to quiet, careful introductions than loud dating performance. Mature communication and privacy-aware planning matter from the first message.",
    "Gold Coast": "Gold Coast dating can attract lifestyle-focused conversations, so boundaries should be direct. Separate genuine companionship from status display, urgency, or shallow promises.",
  };
  for (const [index, [name, url]] of cities.entries()) {
    const isSydney = name === "Sydney";
    const isMelbourne = name === "Melbourne";
    const isBrisbane = name === "Brisbane";
    const isPerth = name === "Perth";
    const isAdelaide = name === "Adelaide";
    const isGoldCoast = name === "Gold Coast";
    pageShell({
      pathname: url,
      title: `Sugar Mummy Dating ${name} | Australia Sugar Mummy`,
      description: `Explore sugar mummy dating in ${name} with local safety, privacy, first-meeting, and relationship expectation guidance for adults.`,
      eyebrow: `${name} sugar mummy dating`,
      h1: `Sugar Mummy Dating in ${name}`,
      lead: isSydney
        ? "Sydney sugar mummy dating works best when adults treat discretion, timing, and public-first confidence as part of the attraction rather than an awkward safety add-on."
        : isMelbourne
          ? "Melbourne sugar mummy dating is often strongest when the connection starts with conversation, cultural ease, and privacy-aware pacing rather than display."
          : isBrisbane
            ? "Brisbane sugar mummy dating suits adults who want a warmer, lower-pressure pace while still keeping privacy, screening, and first-meeting boundaries clear."
            : isPerth
              ? "Perth sugar mummy dating needs a distance-aware approach: verify early, plan clearly, and treat travel time as part of the trust equation."
              : isAdelaide
                ? "Adelaide sugar mummy dating is best handled with quiet confidence: protect reputation, screen gently, and let trust build before visibility increases."
                : isGoldCoast
                  ? "Gold Coast sugar mummy dating works best when lifestyle chemistry is balanced with clear boundaries, genuine intent, and careful screening."
        : `${name} adults can use sugar mummy dating to explore mature, discreet relationships with clearer expectations and safer first-meeting habits.`,
      image: `/assets/images/${cityImageFiles[index]}`,
      imageAlt: `${name} sugar mummy dating guide image`,
      schema: pageSchema(url, `Sugar Mummy Dating ${name} | Australia Sugar Mummy`, `Explore sugar mummy dating in ${name} with local safety, privacy, first-meeting, and relationship expectation guidance for adults.`, `Sugar Mummy Dating in ${name}`),
      body: isSydney ? [
        { title: "Sydney snapshot: the quiet advantage", paragraphs: ["Sugar mummy dating in Sydney is shaped by visibility. Careers, neighbourhood routines, social circles, and lifestyle venues can overlap quickly, so the strongest connections often begin with calm privacy rather than loud pursuit.", "The quiet advantage is simple: people who can plan discreetly, communicate clearly, and avoid pressure usually stand out faster than people who try to impress with urgency. In Sydney, maturity is often shown through pacing."] },
        { title: "The Sydney compatibility filter", type: "table", headers: ["Question to ask early", "What a steady answer shows", "What should make you pause"], rows: [["How public should a first meeting be?", "They accept a staffed venue and independent arrival.", "They push for a private apartment, hotel room, or isolated plan."], ["What pace feels respectful?", "They can name a realistic rhythm without demanding instant access.", "They rush intimacy, money, travel, or secrecy before trust exists."], ["How much privacy do you need?", "They separate discretion from deception and protect both reputations.", "They ask for identifying details while hiding their own consistency."], ["What kind of connection are you looking for?", "They describe companionship, mentoring, warmth, lifestyle fit, or emotional steadiness.", "They use escort-style language, pay-per-meeting framing, or coercive promises."]] },
        { title: "A 48-hour first-meeting plan", paragraphs: ["Use the first 48 hours to test consistency before you test chemistry. On day one, keep the conversation written, specific, and light: exchange expectations, privacy boundaries, and preferred meeting pace without revealing home, workplace, banking, or family details.", "On day two, confirm a public venue, arrival plan, time limit, and exit plan. A genuine Sydney connection should not become fragile because one person wants basic safety. If the plan only works when you ignore your instincts, it is not a strong plan."] },
        { title: "Sydney meeting styles that keep control balanced", type: "list", items: ["Hotel lounge coffee: polished enough for conversation, public enough to leave easily.", "Late lunch near transport: useful when both people want a clear time boundary.", "Gallery or harbour-adjacent walk before a drink: social, visible, and less intense than a private dinner.", "Weekday early evening drink: convenient for professionals without turning the first meeting into a late-night commitment.", "Short cafe meeting before a second date decision: best when privacy matters and chemistry is still untested."] },
        { title: "What Sydney sugar mummies often need protected", paragraphs: ["Many Sydney sugar mummies are not only protecting personal safety; they are protecting professional identity, family boundaries, social reputation, and a life they have already built. A respectful younger partner understands that discretion is not rejection. It is part of how trust is earned.", "The right tone is confident but not invasive. Ask enough to understand the relationship style, then let consistency do some of the work. Repeatedly pushing for exact suburbs, workplace clues, private photos, or immediate private time makes the connection feel unsafe rather than desirable."] },
        { title: "What younger partners should prove before asking for more", paragraphs: ["A younger partner in Sydney can build trust by being punctual, specific, emotionally steady, and realistic about expectations. Grand promises are less useful than reliable behaviour: confirming plans, respecting time limits, accepting public venues, and communicating without guilt.", "Before asking for more access, show that you can handle a boundary without turning cold. That single skill separates mature sugar mummy dating from attention-looking for. It tells a sugar mummy that discretion, generosity, and attraction can exist without pressure."] },
        { title: "Sydney-specific stop signs", type: "list", items: ["They want secrecy but will not explain their own privacy boundaries.", "They ask for money, gift cards, crypto, or transfers before trust exists.", "They pressure you to cross the city at short notice for a private meeting.", "They refuse a public first meeting or independent transport.", "They use screenshots, exposure threats, or guilt to force a reply."] },
        { title: "Where to go next", paragraphs: ["For broader context, start with the <a href=\"/sugar-mummy/\">Australia sugar mummy dating guide</a>. Before arranging a meeting, review the <a href=\"/safety/\">safety guide</a> and the <a href=\"/anti-scam/\">anti-scam guide</a>. If you want relationship-level context, read <a href=\"/blog/what-is-sugar-mummy-dating-australia/\">what sugar mummy dating means in Australia</a>."] }
      ] : isMelbourne ? [
        { title: "Melbourne starts with conversation, not performance", paragraphs: ["Sugar mummy dating in Melbourne often works best when the first impression feels thoughtful rather than flashy. The city rewards people who can hold a real conversation, read the room, and make privacy feel natural instead of secretive.", "That means the strongest opening is rarely a dramatic promise. It is a clear, relaxed message that shows taste, patience, and emotional steadiness: what kind of connection you want, how you prefer to meet, and what boundaries make the process feel respectful."] },
        { title: "The Melbourne rhythm map", type: "table", headers: ["Dating rhythm", "Where it fits", "How to keep it discreet"], rows: [["Coffee-first", "Useful for cautious introductions and busy professionals.", "Choose a venue with easy exits and avoid exact workplace references."], ["Arts or gallery-adjacent", "Good when both people value culture, conversation, and a slower pace.", "Keep the plan public and avoid turning the first meeting into a long evening."], ["Hotel lounge", "Works for polished privacy without private-room pressure.", "Arrive separately, set a time limit, and keep expectations written."], ["Neighbourhood lunch", "Better for people who want warmth without late-night intensity.", "Use a neutral area if either person needs stronger anonymity."]] },
        { title: "Three boundaries to set before the first date", type: "list", items: ["Visibility boundary: agree how public the first meeting should be and what details should stay private.", "Time boundary: set a start and finish window so neither person has to invent an exit.", "Communication boundary: decide which channel feels comfortable before sharing personal numbers or social profiles."] },
        { title: "How to move from messages to a meeting", paragraphs: ["Move from messages to a meeting only after the tone has stayed consistent across more than one exchange. Melbourne's slower dating rhythm can be an advantage here: a short delay gives both people time to notice whether the other person respects privacy, answers directly, and avoids pressure.", "A good transition sounds simple: suggest a public venue, name a clear time window, and invite the other person to adjust the plan. If the reply becomes impatient, sexually explicit, financially aggressive, or evasive about basic identity signals, the meeting has not earned its place yet."] },
        { title: "What cultural fit looks like in Melbourne", paragraphs: ["Cultural fit in Melbourne is less about status display and more about shared rhythm. A sugar mummy may value warmth, conversation, independence, good taste, and someone who can be present without becoming demanding. A younger partner may value guidance, lifestyle exposure, confidence, and a relationship that does not mimic conventional dating pressure.", "The practical test is whether both people can talk about support, companionship, and privacy without making the conversation feel crude. When the tone stays adult and specific, the relationship has room to become generous without becoming transactional."] },
        { title: "Melbourne privacy mistakes to avoid", type: "list", items: ["Do not name exact workplaces, apartment buildings, or daily routines in early chat.", "Do not assume a creative, social, or professional scene is anonymous; circles can overlap quickly.", "Do not use public social tags or recognisable venue photos without consent.", "Do not confuse discretion with secrecy under pressure.", "Do not agree to a private second location just because the first meeting went well."] },
        { title: "A better Melbourne first-message formula", paragraphs: ["Use a message that shows attention without overreaching. Mention one specific profile detail, state the kind of connection you prefer, and make public-first planning feel normal. For example: say you value calm conversation, discretion, and a first coffee or lounge meeting before either person makes bigger assumptions.", "The formula is attention plus standards plus ease. It filters better than heavy compliments because it tells the other person how you behave, not just what you want. In mature sugar mummy dating, that is usually the more attractive signal."] },
        { title: "Useful next reads for Melbourne", paragraphs: ["Start with the broader <a href=\"/sugar-mummy/\">sugar mummy dating Australia guide</a> if you want the national context. Before meeting offline, read the <a href=\"/safety/\">safety and trust guide</a> and the <a href=\"/blog/sugar-baby-boundaries/\">sugar baby boundaries guide</a>. If anything feels urgent or financially pressured, check the <a href=\"/anti-scam/\">anti-scam guide</a> before replying."] }
      ] : isBrisbane ? [
        { title: "Brisbane's low-pressure dating lane", paragraphs: ["Sugar mummy dating in Brisbane can feel more relaxed than in larger, faster markets, but relaxed should not mean vague. The best local connections use the city's easier pace to build comfort while still keeping expectations, privacy, and meeting plans specific.", "That balance matters. A warm conversation can create trust, yet the first offline step should still be public, easy to leave, and free from financial urgency. Brisbane works best when both people treat calm planning as a sign of maturity, not hesitation."] },
        { title: "The river-city readiness ladder", type: "list", items: ["Level 1: the conversation stays consistent without pressure or sudden money requests.", "Level 2: both people can describe the kind of companionship, guidance, or lifestyle rhythm they want.", "Level 3: privacy boundaries are clear before personal contact details are shared.", "Level 4: the first meeting is public, time-limited, and easy for both adults to exit.", "Level 5: a second meeting is discussed only after the first one feels calm, respectful, and aligned."] },
        { title: "Brisbane planning choices that reduce awkwardness", paragraphs: ["Choose plans that make the first meeting feel easy rather than overproduced. A short coffee, hotel-lounge drink, riverside lunch, or early evening venue near transport can give both people enough space to read chemistry without creating a private-date obligation.", "The useful rule is to keep the first plan smaller than the possible relationship. If the connection is real, it can grow. If it is not aligned, a contained public meeting lets both people leave with dignity."] },
        { title: "What to clarify before crossing town", type: "table", headers: ["Before you travel", "Why it matters in Brisbane", "Clear wording to use"], rows: [["Meeting length", "A relaxed city can still create vague plans that drag on.", "I prefer a short first meet, then we can decide if a second one makes sense."], ["Privacy level", "Social circles, venues, and work networks can overlap.", "I like discretion, so I do not share identifying details before trust builds."], ["Transport", "Independent arrival keeps the first meeting balanced.", "I will make my own way there and leave independently."], ["Relationship intent", "Warm chat is not enough if expectations differ.", "I am looking for mature companionship, not rushed private access."]] },
        { title: "Signals that the pace is healthy", paragraphs: ["A healthy Brisbane connection usually feels steady, not sleepy. The other person replies with enough detail to build confidence, accepts public-first planning, and can discuss generosity, companionship, privacy, and time without turning the conversation into pressure.", "Look for consistency more than intensity. Someone who can be patient before the first meeting is more likely to respect boundaries later. Someone who becomes annoyed by a reasonable safety step is showing you the future early."] },
        { title: "Signals that the pace is being used against you", type: "list", items: ["They use casual charm to avoid answering practical questions.", "They treat privacy as a reason you should accept secrecy or isolation.", "They ask for a transfer, gift card, crypto, or emergency help before meeting.", "They keep changing the venue toward somewhere private.", "They make you feel rude for wanting a short public first meeting."] },
        { title: "A Brisbane-first profile angle", paragraphs: ["For sugar mummies, a Brisbane profile can work well when it sounds warm but selective: mention calm companionship, discretion, conversation, lifestyle ease, and the importance of respectful pacing. The goal is to attract people who understand maturity rather than people who chase access.", "For younger partners, the stronger angle is reliability. Show that you can communicate clearly, arrive independently, accept boundaries, and bring energy without creating pressure. In a lower-pressure city, steadiness is often more memorable than swagger."] },
        { title: "Next steps for Brisbane readers", paragraphs: ["Use the <a href=\"/sugar-mummy/\">main sugar mummy dating guide</a> for the national framework, then read the <a href=\"/blog/first-meeting-checklist/\">first meeting checklist</a> before confirming plans. If a conversation starts to involve urgency, secrecy, or money pressure, pause and check the <a href=\"/anti-scam/\">anti-scam guide</a>."] }
      ] : isPerth ? [
        { title: "Perth rewards distance-aware dating", paragraphs: ["Sugar mummy dating in Perth is shaped by distance, timing, and social separation. The city can offer useful discretion, but the same distance also makes vague plans expensive in time and energy. A good connection should make logistics clearer, not more confusing.", "The strongest Perth introductions usually test reliability before romance. If someone can communicate consistently, respect privacy, and plan a simple public meeting without drama, they are already showing the kind of steadiness mature sugar mummy dating needs."] },
        { title: "Verify before you travel", paragraphs: ["In Perth, travel time can turn a weak lead into a frustrating evening. Before committing to a meeting, confirm basic identity signals, relationship intent, preferred pace, and independent transport. Verification is not suspicion; it is a filter for adults who value each other's time.", "Avoid sending private documents, banking information, workplace clues, or intimate photos to prove sincerity. A real person should be able to build confidence through consistency, clear plans, and willingness to meet publicly."] },
        { title: "The Perth logistics check", type: "table", headers: ["Planning point", "Why it matters", "Better standard"], rows: [["Suburb distance", "Long travel can create pressure to make the meeting 'worth it'.", "Keep the first meeting short and public, even if travel takes effort."], ["Timing", "Late plans can reduce transport options and exit comfort.", "Prefer daylight, lunch, or early evening for first contact."], ["Venue", "Overly private venues make boundaries harder to hold.", "Choose staffed venues with visible exits."], ["Follow-up", "A long trip can make people overcommit too soon.", "Decide on a second meeting after reflection, not in the moment."]] },
        { title: "A trust timeline for Perth introductions", type: "list", items: ["Message stage: check tone, consistency, and whether expectations are adult and specific.", "Pre-meet stage: agree on venue, duration, transport, privacy, and what is off-limits.", "First meet stage: focus on ease, respect, and whether conversation feels grounded offline.", "After-meet stage: pause before making bigger promises, sharing more identity details, or changing the relationship pace.", "Ongoing stage: keep generosity, companionship, and boundaries explicit enough that neither person has to guess."] },
        { title: "What Perth sugar mummies may screen for", paragraphs: ["A Perth sugar mummy may screen for discretion, patience, lifestyle compatibility, emotional steadiness, and respect for a life that may be geographically spread out. She may also care whether a younger partner can plan without becoming dependent or demanding.", "The clearest positive signal is practical maturity. Confirm details, show up on time, accept boundaries, and avoid turning support into entitlement. In Perth, reliability can be more persuasive than intensity because it lowers the cost of saying yes again."] },
        { title: "What younger partners should ask for clarity on", paragraphs: ["Younger partners should ask about relationship rhythm, communication style, privacy expectations, and how both people prefer to handle travel. These questions are not unromantic; they prevent mismatched assumptions from becoming resentment later.", "Keep the wording simple. Ask what a comfortable first meeting looks like, how much discretion is needed, and what kind of companionship feels valuable. If the other person cannot discuss basics without defensiveness, the connection may not be ready."] },
        { title: "Perth warning signs to take seriously", type: "list", items: ["They expect long travel before offering basic clarity.", "They refuse public venues while asking you to trust them quickly.", "They treat verification as offensive but ask for your private details.", "They introduce emergency money, crypto, gift cards, or travel costs before trust exists.", "They push for a second location after the first meeting begins."] },
        { title: "Useful Perth reading path", paragraphs: ["Start with the <a href=\"/sugar-mummy/\">national sugar mummy guide</a> for the wider relationship frame. Before planning a first meeting, use the <a href=\"/blog/first-meeting-checklist/\">first meeting checklist</a>. If money requests, secrecy, or urgency enter the conversation, review the <a href=\"/anti-scam/\">anti-scam guide</a> before continuing."] }
      ] : isAdelaide ? [
        { title: "Adelaide needs quiet confidence", paragraphs: ["Sugar mummy dating in Adelaide works best when both adults understand the value of being discreet without becoming evasive. The city can feel socially close, so reputation, mutual respect, and measured visibility matter from the first message.", "Quiet confidence means being clear without performing. You can state what you want, protect your privacy, and move slowly without making the connection feel cold. In Adelaide, that balanced tone often matters more than bold promises."] },
        { title: "The small-circle privacy test", paragraphs: ["Before meeting, ask yourself whether the plan protects both people if social circles overlap. A good Adelaide introduction does not require naming workplaces, exact suburbs, family details, or regular venues too early. It gives both adults room to decide what should become visible later.", "This is especially important for sugar mummies who may have established professional, family, or community ties. A respectful younger partner should understand that discretion is part of trust, not a sign of disinterest."] },
        { title: "Soft-screening questions for Adelaide", type: "table", headers: ["Question", "What it reveals", "Green-light answer"], rows: [["What pace feels comfortable?", "Whether the person can wait without resentment.", "They prefer a steady public-first start."], ["How private should early dating be?", "Whether discretion is mutual or one-sided.", "They protect both people's identifying details."], ["What makes this connection worthwhile?", "Whether they understand value beyond access.", "They mention companionship, warmth, mentoring, or lifestyle fit."], ["How should we handle first-meeting logistics?", "Whether planning feels adult and calm.", "They support independent arrival and a clear time window."]] },
        { title: "Adelaide first-date formats that stay understated", type: "list", items: ["A short daytime coffee where both people can leave easily.", "A quiet restaurant lunch with a clear finish time.", "A hotel lobby drink without any private-room expectation.", "A gallery or cultural stop followed by a brief conversation.", "A neutral suburb venue that avoids both people's regular social circles."] },
        { title: "How to build trust without overexposure", paragraphs: ["Trust in Adelaide should grow through consistency rather than disclosure overload. Reply clearly, keep plans realistic, and confirm boundaries in plain language. You do not need to prove sincerity by handing over private details before the other person has earned them.", "The strongest pattern is gradual visibility. Start with enough information to feel real, then expand only after the first meeting confirms ease, respect, and compatibility. If someone treats privacy as an obstacle, they may not be ready for mature sugar mummy dating."] },
        { title: "What mature generosity should sound like", paragraphs: ["Mature generosity in Adelaide should sound thoughtful, not transactional. It may involve time, attention, mentoring, lifestyle experiences, emotional steadiness, or practical support, but it should not be framed as pay-per-meeting access or pressure to perform.", "A useful conversation names what each person values without reducing the relationship to a demand. If both adults can discuss expectations calmly, the dynamic has room to become warm and generous without becoming unsafe."] },
        { title: "Adelaide red flags that hide behind politeness", type: "list", items: ["They avoid direct answers while sounding charming.", "They ask for identifying details before sharing consistent basics.", "They imply you are rude for needing discretion.", "They try to move from a public plan to a private setting at the last minute.", "They introduce money urgency, gift cards, crypto, or travel help before trust exists."] },
        { title: "Where Adelaide readers should go next", paragraphs: ["Use the <a href=\"/sugar-mummy/\">Australia sugar mummy dating guide</a> for the broader relationship frame. Before meeting, review the <a href=\"/safety/\">safety guide</a> and the <a href=\"/blog/sugar-mummy-profile-tips/\">profile tips guide</a>. If a connection becomes urgent, secretive, or financially pressured, check the <a href=\"/anti-scam/\">anti-scam guide</a> before continuing."] }
      ] : isGoldCoast ? [
        { title: "Gold Coast chemistry needs a reality check", paragraphs: ["Sugar mummy dating on the Gold Coast can attract confident, lifestyle-led conversations. That energy can be exciting, but it also makes it easier for status signals to replace real compatibility. The better approach is to enjoy the atmosphere while checking whether the person is consistent, respectful, and grounded.", "A polished profile, beachside plan, or luxury promise should never be the whole argument. Mature sugar mummy dating still depends on privacy, consent, public-first meetings, and the ability to talk about expectations without pressure."] },
        { title: "The lifestyle claim audit", type: "table", headers: ["Claim you may hear", "What to test", "Healthier signal"], rows: [["I know the best places.", "Can they still choose a public venue with easy exits?", "They care about comfort, not just display."], ["I can take care of everything.", "Do they respect your independence and boundaries?", "They offer clarity without control."], ["No one has to know.", "Is privacy mutual or are they isolating you?", "They protect both people's reputation."], ["Let's make it spontaneous.", "Does spontaneity remove safety planning?", "They can be playful and still plan responsibly."]] },
        { title: "Status versus substance", paragraphs: ["Status can be part of attraction, but it should not become the relationship's only language. Real substance shows up in how someone handles a no, whether they can keep a plan simple, and whether they understand companionship beyond appearance, access, or attention.", "For sugar mummies, this means looking for emotional steadiness beneath the charm. For younger partners, it means showing reliability and warmth without trying to compete with the city's louder lifestyle signals."] },
        { title: "Gold Coast first-meeting energy levels", type: "list", items: ["Low-key: daytime coffee or lunch when both people want a calm read on chemistry.", "Polished: a hotel lounge or restaurant where privacy feels natural but public.", "Lifestyle-light: a waterfront walk before a short drink, keeping the first plan easy to end.", "Too much too soon: private accommodation, late-night isolation, or plans that depend on alcohol or secrecy.", "Reset point: if the energy gets performative, return to a shorter public meeting."] },
        { title: "How to keep attraction from becoming pressure", paragraphs: ["Attraction should make the conversation warmer, not less safe. If the chemistry is strong, name the boundary anyway: independent arrival, public venue, time limit, and no private second location on the first meeting. The right person will not treat that as rejection.", "This is especially useful on the Gold Coast, where lifestyle momentum can make fast plans feel normal. Slow down enough to see whether the person respects your pace when the setting is no longer doing the work for them."] },
        { title: "What a grounded Gold Coast profile should say", paragraphs: ["A strong sugar mummy profile can mention lifestyle, confidence, travel, dining, wellness, or conversation, but it should also signal selectiveness. Phrases around discretion, calm communication, verified intent, and public-first plans help attract adults who understand the difference between generosity and pressure.", "A younger partner's profile should show energy without entitlement. Mention reliability, emotional intelligence, and an interest in real companionship rather than only luxury access. That makes the profile feel more adult and less opportunistic."] },
        { title: "Gold Coast deal-breakers to name early", type: "list", items: ["No private first meetings, even when the venue sounds impressive.", "No upfront transfers, gift cards, crypto, or emergency money stories.", "No public tagging, recognisable venue posts, or screenshots without consent.", "No pressure to drink, travel, or extend the meeting after a boundary is set.", "No relationship dynamic built only around image, status, or access."] },
        { title: "Best next page for Gold Coast readers", paragraphs: ["Use the <a href=\"/sugar-mummy/\">main sugar mummy dating guide</a> to define the relationship model, then read the <a href=\"/blog/sugar-dating-safety-australia/\">sugar mummy dating safety checklist</a>. If a lifestyle promise starts to feel urgent, expensive, or secretive, check the <a href=\"/anti-scam/\">anti-scam guide</a> before agreeing to anything."] }
      ] : [
        { title: `How sugar mummy dating works in ${name}`, paragraphs: [cityNotes[name], "The best local introductions start with a clear conversation about pace, privacy, and boundaries. A sugar mummy may be looking for companionship, emotional steadiness, and a partner who respects her life. A younger partner may be looking for guidance, warmth, and a relationship that feels lighter than conventional dating pressure."] },
        { title: "Public-first meeting ideas", type: "list", items: ["Choose a visible venue with staff nearby.", "Arrive and leave independently.", "Keep the first meeting short enough to exit gracefully.", "Tell a trusted person where you will be.", "Do not share home, banking, or workplace details early."] },
        { title: "Related Australian guides", paragraphs: [`Read the <a href="/safety/">safety guide</a>, review <a href="/anti-scam/">anti-scam signals</a>, or browse more <a href="/blog/">sugar mummy dating articles</a>.`] }
      ]
    });
  }
}

function buildTrustAndLegal() {
  const pages = [
    ["/safety/", "Safety Guidelines | Australia Sugar Mummy", "Learn how adults can protect privacy, avoid financial pressure, report concerns, and plan public-first meetings.", "Safety & Trust", "Safety Guidelines", "Australia Sugar Mummy is designed for adults who want a more intentional sugar mummy dating experience. Safety starts with clear expectations: protect your identity, move at your own pace, keep early conversations measured, and report anything that feels manipulative, threatening, illegal, or too good to be true.", [
      { title: "Our safety position", paragraphs: ["Australia Sugar Mummy is an adults-only information and registration path site for lawful relationship discovery and introductions in Australia. The site is not for escorting, prostitution, trafficking, paid sexual services, coercion, blackmail, fake identity, financial pressure, or illegal activity.", "Dating always involves personal judgment. Safety education, profile review, reporting tools, and verification standards can support better decisions where available, but no dating website can guarantee another person's identity, wealth, intentions, background, or offline behaviour. Treat every new connection as something to assess gradually."] },
      { title: "Date with control", paragraphs: ["You decide what to share, who to answer, when to pause, and when to leave a conversation. A serious adult connection should not require you to ignore discomfort, rush trust, or prove interest by giving up privacy.", "Use blocking, reporting, profile controls, and privacy settings where available. If a conversation becomes insulting, threatening, sexually coercive, financially urgent, or emotionally manipulative, stop engaging and preserve evidence if you may need to report it. Boundaries are not a lack of interest; they are part of safe dating."] },
      { title: "Protect personal information", type: "table", headers: ["Do not share early", "Why it matters", "Safer habit"], rows: [["Home address or regular venues", "These can make you physically findable before trust exists.", "Meet publicly and keep routine locations private."], ["Workplace, family, or exact suburb details", "Small details can identify your offline life.", "Share general context without exposing your private network."], ["Banking details, passwords, codes, or documents", "These can be used for fraud, account takeover, or identity misuse.", "Never send financial access or verification codes to a match."], ["Private images or compromising material", "They may be used for pressure or blackmail.", "Keep intimate or identifying content off early conversations."]] },
      { title: "Keep early communication safer", paragraphs: ["Keep early messages calm, written, and easy to review. If you move to phone or video, use privacy-conscious methods and avoid giving away your full name, address, workplace, or daily routine before you have independent reasons to trust the person.", "Be cautious with people who push you off-platform immediately, avoid ordinary verification, change details repeatedly, or frame basic safety questions as an insult. Genuine adults may value privacy, but privacy should not become secrecy under pressure."] },
      { title: "Meeting in person", type: "list", items: ["Choose a public first meeting with staff nearby, visible exits, and reliable transport.", "Arrive and leave independently; do not rely on a new match for a ride.", "Tell a trusted person where you are going, who you are meeting, and when you expect to be back.", "Keep your phone charged and your own payment method available.", "Set a time limit before the meeting starts so leaving does not require an excuse.", "Do not move to a private home, hotel room, isolated location, or second venue if you feel pressured.", "Leave immediately if your boundaries are ignored, mocked, or negotiated against."] },
      { title: "Financial safety", paragraphs: ["Never send money, gift cards, crypto, bank access, login codes, identity documents, travel advances, or payment to unlock a meeting to someone you have not independently verified. Financial urgency before trust is a stop sign, even when the story sounds emotional or flattering.", "Sugar mummy dating conversations must remain lawful, consensual, and respectful. The site rejects pay-for-sex framing, escort-style relationship models, prostitution, trafficking, coercion, and any pressure that turns generosity into control. A mature conversation about lifestyle or support should never require a stranger to take unrecoverable financial risk."] },
      { title: "What to report", type: "list", items: ["Threats, harassment, stalking, blackmail, or attempts to expose private information.", "Fake profiles, impersonation, inconsistent identity, or stolen photos.", "Money requests, gift-card demands, crypto pitches, investment offers, or fake emergencies.", "Pressure to meet privately, travel unsafely, or move off-platform before trust exists.", "Escort, prostitution, trafficking, payment-for-sex, or illegal-transaction solicitation.", "Underage users or any suggestion that a minor is involved.", "Requests for passwords, verification codes, identity documents, or banking access."] },
      { title: "Platform limits and user judgment", paragraphs: ["Australia Sugar Mummy may review profiles, publish safety education, moderate content, or remove accounts that violate rules where available. These measures are designed to reduce risk, not eliminate it.", "No platform can verify every claim a member makes or guarantee financial status, background, compatibility, health, intentions, or offline conduct. Your strongest safety tools are still pace, privacy, public-first planning, independent verification, and the willingness to stop when respect is missing."] },
      { title: "Related safety resources", paragraphs: ["Read the <a href=\"/anti-scam/\">anti-scam guide</a> for common money and identity scams, the <a href=\"/blog/first-meeting-checklist/\">first meeting checklist</a> before arranging plans, and the <a href=\"/terms/\">terms of use</a> for conduct boundaries. For website-related safety concerns, use the <a href=\"/contact/\">contact page</a>; if someone is in immediate danger, contact local emergency services first."] }
    ]],
    ["/anti-scam/", "Anti-Scam Guide | Australia Sugar Mummy", "Recognise sugar mummy dating scams, including money requests, fake emergencies, crypto pitches, fake profiles, and blackmail.", "Anti-scam", "Anti-Scam Guide", "Scammers succeed by creating urgency, intimacy, and confusion. The safest response is simple: slow down, verify independently, keep control of your money and identity, and report suspicious behaviour before the conversation escalates.", [
      { title: "Common scam signals", type: "table", headers: ["Signal", "What it may look like", "Safer response"], rows: [["Money requests", "They ask for transfers, payment apps, travel money, rent help, medical costs, account unlocking, or a fee to meet.", "Do not pay. Stop the conversation before the story expands."], ["Gift cards or crypto", "They ask for gift-card codes, Bitcoin, crypto wallets, forex deposits, or investment-platform signups.", "Refuse. These payments are often difficult or impossible to recover."], ["Off-platform pressure", "They push you to leave the site immediately for private messaging, then increase urgency or secrecy.", "Keep control of your channel and preserve screenshots if the tone changes."], ["Identity inconsistency", "Their age, location, work, photos, accent, timezone, or personal story keeps changing.", "Pause, verify independently, and do not share private information."], ["Romance-baiting", "They become intense quickly, use pet names early, promise loyalty, or make you feel chosen before meeting.", "Treat fast intimacy as something to assess, not proof of sincerity."]] },
      { title: "Fake emergencies are designed to rush you", paragraphs: ["A common dating scam begins with a crisis: a hospital bill, lost wallet, frozen bank account, travel delay, family emergency, broken phone, urgent flight, or sudden business problem. The details vary, but the pattern is the same. The person needs you to act before you can think.", "Do not debate the emotional story for too long. Before trust exists, a stranger's urgent financial problem is not your responsibility. A genuine adult connection can survive a calm refusal and a slower pace. A scam usually cannot."] },
      { title: "Sugar mummy dating specific risks", paragraphs: ["Scammers may exploit expectations around generosity, allowance, gifts, lifestyle, travel, mentoring, or support. They may claim that an upfront payment proves seriousness, that a gift card confirms loyalty, or that travel money is needed before a first meeting can happen.", "Lawful sugar mummy dating is relationship discovery between consenting adults. Australia Sugar Mummy rejects coercion, payment-for-sex relationship models, escorting, prostitution, trafficking, blackmail, exploitation, and any pressure that turns generosity into access or control. Mature generosity should never require unrecoverable financial risk before identity, trust, and consent are clear."] },
      { title: "Identity checks that should feel normal", paragraphs: ["Verification does not mean sending sensitive documents to a stranger. It means checking whether the person behaves consistently across photos, location, profile details, conversation, timing, and meeting expectations. A real person should become easier to understand as the conversation continues.", "Be careful with anyone who refuses ordinary video or voice checks, avoids public-first planning, cannot answer basic questions, or asks you to prove everything while giving little stable information in return. Privacy is reasonable. Total opacity combined with pressure is not."] },
      { title: "Protect money, documents, and codes", type: "list", items: ["Never send bank details, passwords, one-time verification codes, identity documents, or login access to a match.", "Never receive, hold, transfer, or move money for someone you met through dating.", "Never buy gift cards, crypto, vouchers, prepaid cards, or investment products because a match asks.", "Never pay a fee to unlock a meeting, confirm loyalty, release funds, verify an account, or prove you are real.", "Never send private images or compromising material to someone who is using urgency, guilt, or threats."] },
      { title: "How to respond safely", paragraphs: ["If a conversation shows scam signals, stop engaging. Do not argue with a person who is already using pressure. Do not send a final explanation that reveals more about your fears, finances, location, workplace, or family. A short exit is enough.", "Preserve screenshots, profile links, usernames, phone numbers, payment handles, wallet addresses, and the exact wording of threats or money requests. Then block or report the profile where available. If you feel threatened, contact local emergency services or appropriate local support before continuing any online exchange."] },
      { title: "What Australia Sugar Mummy may do", paragraphs: ["Australia Sugar Mummy may review reports, restrict accounts, remove violating profiles, improve safety education, moderate content, or cooperate with lawful requests where appropriate. These actions depend on the live platform tools and operational process available at launch.", "Reports are most useful when they include profile details, screenshots, dates, message text, payment requests, and any off-platform contact information. Do not place yourself at further risk to collect extra evidence. Preserve what you already have and prioritise your safety."] },
      { title: "What no platform can guarantee", paragraphs: ["No dating website can verify every statement a member makes or guarantee another person's identity, financial status, background, intentions, health, compatibility, or offline behaviour. Safety tools reduce risk, but they do not replace personal judgment.", "Use the same rule every time: if a request would make you financially exposed, physically isolated, reputationally vulnerable, or unable to leave freely, pause or end the conversation. A respectful adult connection will not depend on urgency, secrecy, fear, or unrecoverable payments."] },
      { title: "Next steps if something feels wrong", paragraphs: ["Read the <a href=\"/safety/\">safety guidelines</a> for meeting and privacy basics, use the <a href=\"/contact/\">contact page</a> for website-related reports, and review the <a href=\"/terms/\">terms of use</a> for prohibited conduct. For more context on scam patterns, see <a href=\"/blog/spot-sugar-dating-scams/\">how to spot sugar mummy dating scams before they escalate</a>.", "If there is immediate danger, blackmail, trafficking concern, underage involvement, stalking, or threat of harm, contact local emergency services or relevant authorities first. Website support is not an emergency service."] }
    ]],
    ["/about/", `About ${brand} | Standards`, `Learn about ${brand}, a 20+ Australian sugar mummy dating guide focused on discretion, safety education, and clear standards.`, "About", `About ${brand}`, `${brand} exists for Australian adults who want sugar mummy dating to be more direct, selective, and intentional. Our role is to provide practical information, city guidance, and a future registration path for people who value privacy, mature communication, and clear boundaries before meeting offline.`, [
      { title: "Our mission", paragraphs: ["Australia Sugar Mummy is built around a simple idea: unconventional dating still needs clear standards. Mature women and younger adult partners should be able to explore companionship, attraction, mentoring, lifestyle alignment, and long-term value without being pushed into unsafe, illegal, or purely transactional behaviour.", "The site is currently presented as an informational website and registration path concept. Its purpose is to help adults understand the relationship model, think through safety, and prepare for respectful introductions if a live membership experience is launched."] },
      { title: "Who we serve", type: "table", headers: ["Audience", "What they may value", "What we do not support"], rows: [["Mature women", "Discretion, companionship, emotional steadiness, selectiveness, and a dating rhythm that respects an established life.", "Pressure, exposure, harassment, fake identity, or coercive attention."], ["Younger adult partners", "Guidance, warmth, ambition, lifestyle compatibility, and a relationship dynamic with clearer expectations.", "Entitlement, scams, rushed private access, or treating support as a demand."], ["Both sides", "Public-first meetings, privacy-aware communication, lawful dating, and practical safety education.", "Escorting, prostitution, trafficking, paid sexual services, blackmail, or illegal transactions."]] },
      { title: "What makes the community work", paragraphs: ["A healthier sugar mummy dating culture depends on more than attraction. It needs clear profiles, respectful messaging, user control, realistic expectations, practical safety habits, and the ability to report or block behaviour that crosses a line.", "Where available in a future live service, Australia Sugar Mummy may use profile review, moderation, reporting, verification standards, or account restrictions to support trust. Those tools should reduce risk, but they should not be mistaken for a guarantee about another person's identity, finances, intentions, background, or offline conduct."] },
      { title: "Our standards", type: "list", items: ["Adults only: the site is intended for people aged 20 and over.", "Lawful relationship discovery only: no escorting, prostitution, trafficking, paid sexual services, illegal transactions, or exploitation.", "No coercion: pressure, threats, blackmail, harassment, and manipulation are not compatible with the site standard.", "No fake identity: impersonation, stolen images, misleading profiles, and scam behaviour should be reported.", "No financial pressure: gift-card demands, crypto pitches, upfront transfers, and emergency-money stories before trust are treated as warning signs.", "Privacy matters: home, workplace, banking, family, and identity details should be protected until trust is earned."] },
      { title: "What we publish", paragraphs: ["The site publishes Australian sugar mummy dating guides, city pages, safety resources, anti-scam education, first-meeting checklists, profile advice, and relationship explainers. The tone is practical rather than sensational because the subject is already misunderstood enough.", "Content is general information, not legal, financial, mental health, or personal safety advice. Readers should use their own judgment, follow local law, and get qualified help when a situation involves danger, coercion, legal risk, or financial loss."] },
      { title: "User control comes first", paragraphs: ["A respectful dating experience begins with control: what you share, how quickly you reply, whether you meet, where you meet, and when you leave. Australia Sugar Mummy encourages public-first meetings, independent transport, slower disclosure, and written clarity around expectations.", "No relationship label should make someone feel obligated to send money, share private documents, reveal identifying details, accept sexual pressure, or continue a conversation that feels unsafe. A mature connection should make boundaries easier to discuss, not harder."] },
      { title: "Trust without false promises", paragraphs: ["No dating site can guarantee chemistry, compatibility, identity, wealth, background, intentions, or offline behaviour. A platform can set rules, educate users, review reports where available, and remove accounts that violate standards, but it cannot replace personal judgment.", "That is why this site treats safety education as part of the product, not a footnote. The safest dating culture is built from repeated small choices: verify gradually, protect personal information, meet publicly first, avoid urgent money requests, and leave when respect is missing."] },
      { title: "Company details to confirm before launch", paragraphs: [`${brand} should be operated by australia sugar mummy LTD before collecting user data or enabling live accounts. Business address: Level 5, 120 Collins Street, Melbourne VIC 3000, Australia. Support contact: Supportaustraliasugarmummy@gmail.com. Privacy contact: Privacyaustraliasugarmummy@gmail.com.`, "These details should be reviewed before any live account launch so the operating entity, support process, privacy workflow, and platform features match the published page."] },
      { title: "Read next", paragraphs: ["Start with the <a href=\"/safety/\">safety guidelines</a>, review the <a href=\"/anti-scam/\">anti-scam guide</a>, and read the <a href=\"/terms/\">terms of use</a> for conduct boundaries. For launch or website questions, use the <a href=\"/contact/\">contact page</a>."] }
    ]],
    ["/contact/", `Contact ${brand} | Support`, `Contact ${brand} for support, safety reports, privacy requests, abuse reports, and launch enquiries.`, "Contact", `Contact ${brand}`, `Need help with a registration path question, safety concern, privacy request, or website issue? Contact ${brand} through the right channel so the request can be reviewed with the right context.`, [
      { title: "Contact emails to confirm", paragraphs: ["General support: Supportaustraliasugarmummy@gmail.com. Privacy requests: Privacyaustraliasugarmummy@gmail.com. Business or legal notices: Legalaustraliasugarmummy@gmail.com.", "These contact details are the published support channels for the site. Review inbox access before collecting user data, accepting reports, or enabling live account features."] },
      { title: "What we can help with", type: "table", headers: ["Topic", "Examples", "What to include"], rows: [["Registration or launch enquiries", "Questions about availability, city coverage, eligibility, or future membership.", "Your name, email, city, and a short description of the request."], ["Website or editorial issues", "Broken links, incorrect page details, accessibility problems, or content corrections.", "The page URL, screenshot if useful, device/browser, and what looked wrong."], ["Safety or abuse reports", "Threats, harassment, fake profiles, scams, blackmail, underage concerns, or trafficking concerns.", "Profile link or username, screenshots, dates, message text, and whether there is immediate risk."], ["Privacy requests", "Access, correction, deletion, opt-out, or questions about personal information.", "The email connected to the request and enough detail to identify the data involved."]] },
      { title: "Safety and abuse reports", paragraphs: ["Report behaviour that involves threats, scams, harassment, impersonation, stalking, blackmail, coercion, fake identity, underage users, trafficking concerns, payment-for-sex solicitation, escorting, prostitution, or illegal conduct.", "Preserve screenshots, profile URLs, usernames, phone numbers, payment handles, wallet addresses, and message timestamps if you already have them. Do not put yourself at further risk to collect evidence. If someone is threatening you or trying to force immediate action, stop replying and prioritise safety."] },
      { title: "Emergency notice", paragraphs: ["Australia Sugar Mummy support is not an emergency service. If someone is in immediate danger, contact local emergency services first. In Australia, call 000 for police, fire, or ambulance emergencies.", "For non-emergency website-related reports, use Supportaustraliasugarmummy@gmail.com once confirmed. If the issue involves privacy or data rights, use Privacyaustraliasugarmummy@gmail.com once confirmed."] },
      { title: "Response expectations", paragraphs: ["Response times may vary by issue type, launch stage, and available support capacity. Safety, account-access, and privacy requests may be prioritised where operationally possible, but the static site should not claim 24/7 support until that process exists.", "Sending duplicate messages can slow review. A clearer first message is usually more useful: include the relevant email, page URL or profile link, a concise issue summary, screenshots if appropriate, and whether the matter involves safety or privacy."] },
      { title: "Business information", paragraphs: [`Operator: australia sugar mummy LTD. Business address: Level 5, 120 Collins Street, Melbourne VIC 3000, Australia. Website: ${domain}.`, "Review legal and business details before public launch. Do not publish invented registration numbers, office locations, support hours, compliance badges, or background-check claims."] },
      { title: "Before contacting support", type: "list", items: ["For meeting safety, read the safety guidelines first.", "For money requests, fake profiles, gift cards, crypto, or urgency, read the anti-scam guide.", "For conduct boundaries, review the terms of use.", "For data handling questions, review the privacy policy.", "For general questions, check the help page before sending a support request."] },
      { title: "Helpful links", paragraphs: ["Visit the <a href=\"/help/\">help center</a> for common questions, the <a href=\"/safety/\">safety guidelines</a> for safer dating habits, the <a href=\"/anti-scam/\">anti-scam guide</a> for suspicious behaviour, and the <a href=\"/privacy/\">privacy policy</a> for data requests."] }
    ], false],
    ["/help/", `Help Center | ${brand}`, `Find help with Australia Sugar Mummy registration, profiles, verification expectations, messaging safety, privacy requests, reports, and conduct rules.`, "Help", "Help Center", `Find quick answers about using ${brand}, understanding the registration path, staying safer, protecting privacy, and contacting support before live account features are confirmed.`, [
      { title: "Current site status", paragraphs: ["Australia Sugar Mummy is currently presented as an informational website and registration path concept. This static version does not yet provide live member accounts, matching, payments, messaging, or in-product reporting tools.", "Before launch, the site should connect any registration or account flow to a secure form, age gate, privacy notice, consent checkbox, support inbox, moderation workflow, and legal-reviewed terms."] },
      { title: "Account and registration help", type: "table", headers: ["Question", "Current answer", "Before launch"], rows: [["Can I create an account?", "Not in this static build. The site currently provides information and a registration path concept.", "Confirm sign-up, login, password reset, email change, and account deletion flows."], ["Can I register interest?", "Use the contact page for launch enquiries until a secure registration form is confirmed.", "Add secure submission handling, consent, privacy notices, and age confirmation."], ["Can I delete my information?", "If user data is collected later, deletion and access request steps should be explained in the Privacy Policy.", "Confirm Privacyaustraliasugarmummy@gmail.com and data request workflow."], ["Can I manage profile visibility?", "No live profile visibility tools exist in the static version.", "Document profile visibility, blocking, reporting, and privacy controls if launched."]] },
      { title: "Profile and verification", paragraphs: ["Profiles should be truthful, adult, and privacy-aware. Do not use stolen images, misleading identity details, fake locations, impersonation, or claims that would make another person trust you under false pretences.", "Real-person verification is presented as a trust expectation, but the final process must be confirmed before launch. Where verification becomes available, it should be described clearly without promising background checks, wealth checks, identity guarantees, or safety outcomes that the platform cannot actually provide."] },
      { title: "Messaging and matches", paragraphs: ["Respectful communication means no harassment, threats, coercion, spam, impersonation, explicit pressure, blackmail, or attempts to move someone into unsafe secrecy. A healthy conversation should allow both adults to ask questions, slow down, and decline a request.", "Be cautious if someone asks for money, gift cards, crypto, bank access, private documents, verification codes, or urgent off-platform contact before trust exists. Read the <a href=\"/anti-scam/\">anti-scam guide</a> before continuing any conversation that feels rushed or financially pressured."] },
      { title: "Safety basics", type: "list", items: ["Use the site only if you are 20 or older.", "Keep home, workplace, banking, family, and identity details private until trust is earned.", "Meet publicly first, arrive independently, and tell a trusted person your plan.", "Never send money, gift cards, crypto, login codes, or identity documents to a new match.", "Report threats, scams, impersonation, underage concerns, trafficking concerns, and payment-for-sex solicitation.", "Leave any conversation that depends on urgency, secrecy, guilt, or fear."] },
      { title: "Privacy and data requests", paragraphs: ["For privacy questions, data access, correction, deletion, or opt-out requests, use Privacyaustraliasugarmummy@gmail.com once confirmed. Include the email address connected to the request and a clear description of what you want reviewed.", "The current Privacy Policy should be legally reviewed before user data is collected. Until operational tools are confirmed, do not assume live account data controls, marketing preferences, or deletion automation exist."] },
      { title: "Billing or premium features", paragraphs: ["This static build does not describe active paid subscriptions, premium features, renewals, refunds, or payment processing. Do not send payment to anyone claiming they can unlock membership, verification, messages, or meetings on behalf of Australia Sugar Mummy.", "If paid features are added later, the site should publish clear pricing, cancellation, renewal, refund, payment-processor, and support terms before taking payment."] },
      { title: "Rules and enforcement", paragraphs: ["Accounts, profiles, or content may be limited or removed in a future live service for scams, harassment, impersonation, illegal activity, underage use, trafficking concerns, payment-for-sex solicitation, escorting, prostitution, coercion, blackmail, spam, fake profiles, or other Terms violations.", "Enforcement tools must be described according to what actually exists at launch. Safety education and moderation may reduce risk, but no dating platform can guarantee identity, intentions, wealth, background, compatibility, or offline behaviour."] },
      { title: "Contact support", paragraphs: ["For website issues, registration path questions, safety reports, privacy requests, or business enquiries, use the <a href=\"/contact/\">contact page</a>. Include the page URL, profile link or username if relevant, screenshots, dates, and whether the matter involves safety or privacy.", "If someone is in immediate danger, contact local emergency services first. In Australia, call 000 for police, fire, or ambulance emergencies. Website support is not an emergency service."] },
      { title: "Helpful links", paragraphs: ["Read the <a href=\"/safety/\">safety guidelines</a>, the <a href=\"/anti-scam/\">anti-scam guide</a>, the <a href=\"/privacy/\">privacy policy</a>, the <a href=\"/terms/\">terms of use</a>, and the <a href=\"/contact/\">contact page</a> for the full trust and support cluster."] }
    ], false],
    ["/privacy/", `Privacy Policy | ${brand}`, `Read how ${brand} may collect, use, share, retain, and protect information for support, safety, analytics, and legal compliance.`, "Legal", "Privacy Policy", `This Privacy Policy explains how ${brand} may collect, use, share, retain, and protect information when you use ${domain}. It is a template for the current static site and should be reviewed by qualified legal counsel before publication or before collecting user data.`, [
      { title: "Effective date", paragraphs: ["Effective date: 2007.10.1. Last updated: 2026.6.24.", "This policy must be updated before launch to match the actual forms, account tools, analytics, cookies, payment processors, support systems, moderation tools, and data processors used by the live website."] },
      { title: "Who we are", paragraphs: [`${brand} should be operated by australia sugar mummy LTD, Level 5, 120 Collins Street, Melbourne VIC 3000, Australia. Privacy contact: Privacyaustraliasugarmummy@gmail.com. General support: Supportaustraliasugarmummy@gmail.com.`, "Do not publish this policy as final until the operating entity, privacy inbox, business address, and jurisdiction-specific legal requirements are confirmed."] },
      { title: "Information we may collect", type: "table", headers: ["Category", "Examples", "When it may apply"], rows: [["Account or registration information", "Name, email, age confirmation, city, preferences, account credentials, profile visibility settings.", "If registration or live account features are enabled."], ["Profile and user content", "Profile text, photos, preferences, interests, relationship goals, messages, reports, and uploaded content.", "If member profiles, messaging, or reporting tools are launched."], ["Support and safety information", "Emails, screenshots, profile links, usernames, report details, abuse reports, and safety concerns.", "When users contact support or submit reports."], ["Technical and device data", "IP address, device type, browser, pages viewed, log data, approximate location, cookie identifiers.", "When the site uses hosting logs, analytics, fraud prevention, or security tools."], ["Payment or subscription data", "Transaction IDs, subscription status, billing support details, payment processor references.", "Only if paid features are launched; do not invent pricing or payment tools before then."]] },
      { title: "How we may use information", paragraphs: ["Information may be used to provide and improve the website, manage registration path or account features, display profiles where applicable, facilitate communication, respond to support requests, review safety reports, detect fraud or scams, enforce terms, protect users, comply with law, and understand site performance.", "If live dating features are introduced, the policy should explain which profile details other users can see, how messaging data is handled, what moderation tools are used, and how users can manage visibility or delete information."] },
      { title: "How information may be shared", paragraphs: ["Some information may be shared with service providers that help operate the site, such as hosting, security, analytics, email, support, moderation, fraud prevention, payment processing, or legal compliance providers. Do not name vendors until they are confirmed.", "Other users may see information that a member chooses to include in a public or semi-public profile if live profiles are enabled. Information may also be disclosed where required by law, to protect rights and safety, to investigate abuse, or as part of a business transfer."] },
      { title: "Your choices and requests", type: "list", items: ["You may request access, correction, deletion, or review of personal information by contacting Privacyaustraliasugarmummy@gmail.com once confirmed.", "You may be able to edit profile details, visibility, communication preferences, or account settings if those tools are launched.", "You may be able to opt out of marketing emails through unsubscribe links where marketing emails are used.", "You can manage cookies through browser settings or future cookie controls where available.", "Some requests may be limited by legal, safety, fraud-prevention, dispute-resolution, or recordkeeping obligations."] },
      { title: "Data retention", paragraphs: ["Information should be kept only as long as needed for the service, support, safety, fraud prevention, legal compliance, dispute resolution, business operations, or other legitimate purposes. Specific retention periods must be confirmed before launch.", "Safety reports, abuse records, account enforcement history, and fraud-prevention records may need to be retained longer than ordinary account data where permitted by law, especially when needed to protect users or investigate prohibited conduct."] },
      { title: "Security", paragraphs: ["Australia Sugar Mummy should use reasonable safeguards appropriate to the type of information processed, such as access controls, secure hosting, encrypted transmission where appropriate, and restricted support access. The final security practices must match the live technology stack.", "No website or online service is perfectly secure. Users should protect their own accounts, avoid sharing passwords or verification codes, and report suspicious account activity promptly."] },
      { title: "International processing", paragraphs: ["If service providers, hosting, analytics, support tools, or moderation systems process information outside Australia, personal information may be transferred or accessed internationally. The final policy should identify relevant regions or safeguards where required by law.", "Users should not assume that all processing occurs in Australia unless the live infrastructure and vendor contracts confirm that."] },
      { title: "Children and age limits", paragraphs: ["The site is intended only for adults aged 20 and over. People under 20 must not use Australia Sugar Mummy, submit personal information, create profiles, or participate in any dating-related feature.", "If the site becomes aware that personal information from a person under 20 has been collected, it should take appropriate steps to delete or restrict that information according to law and safety obligations."] },
      { title: "Safety, prohibited conduct, and reports", paragraphs: ["The site may process information related to scams, harassment, impersonation, threats, blackmail, underage concerns, trafficking concerns, payment-for-sex solicitation, escorting, prostitution, paid sexual services, or other prohibited conduct in order to review reports and protect users.", "Submitting a report does not guarantee a specific outcome. Australia Sugar Mummy may review reports, restrict accounts, preserve evidence, or cooperate with lawful requests where appropriate and where operational tools exist."] },
      { title: "Changes to this policy", paragraphs: ["This Privacy Policy may be updated as the website, account features, forms, service providers, laws, or safety processes change. The updated version should show a revised effective date or last updated date.", "If material changes are made after live accounts exist, the site should provide notice where required by law or where appropriate for user trust."] },
      { title: "Contact and related pages", paragraphs: ["For privacy questions or data requests, contact Privacyaustraliasugarmummy@gmail.com once confirmed. For general support, contact Supportaustraliasugarmummy@gmail.com.", "Related pages: <a href=\"/cookies/\">Cookie Policy</a>, <a href=\"/terms/\">Terms of Use</a>, <a href=\"/contact/\">Contact</a>, <a href=\"/safety/\">Safety Guidelines</a>, and <a href=\"/anti-scam/\">Anti-Scam Guide</a>."] }
    ], false],
    ["/terms/", `Terms of Use | ${brand}`, `Read ${brand} rules for eligibility, conduct, safety limits, user content, paid feature terms, and enforcement.`, "Legal", "Terms of Use", `These Terms govern access to and use of ${domain} and ${brand}. They are a template for the current static site and should be reviewed by qualified legal counsel before publication, before collecting user data, or before enabling live account features.`, [
      { title: "Effective date", paragraphs: ["Effective date: 2007.10.1. Operator: australia sugar mummy LTD. Business address: Level 5, 120 Collins Street, Melbourne VIC 3000, Australia. Support: Supportaustraliasugarmummy@gmail.com.", "These terms should be legally reviewed before live account features are enabled, and the operating entity, jurisdiction, dispute process, privacy workflow, and platform features should match the published service."] },
      { title: "Eligibility", paragraphs: ["You must be at least 20 years old and legally able to use dating or relationship-discovery services in your jurisdiction. People under 20 may not use Australia Sugar Mummy, create accounts, submit information, or participate in any dating-related feature.", "You agree to provide accurate information, use the site lawfully, respect other users, and stop using the site if you are prohibited from doing so under applicable law or these Terms."] },
      { title: "Nature of the service", paragraphs: ["Australia Sugar Mummy is intended as an adults-only website for lawful relationship discovery, sugar mummy dating education, city guidance, and a future membership or registration path concept. The current static version does not yet provide live member accounts, matching, messaging, payments, or in-product reporting tools.", "The site does not guarantee matches, compatibility, identity, wealth, background, relationship outcomes, member intentions, offline conduct, financial status, or personal safety. Dating decisions remain your responsibility."] },
      { title: "Account responsibilities", paragraphs: ["If account features are launched, you will be responsible for keeping your login details secure, maintaining accurate profile information, using your account lawfully, and all activity that occurs through your account unless the law provides otherwise.", "You must not share passwords, verification codes, account access, or identity documents with other users. If you suspect unauthorised access, contact support at Supportaustraliasugarmummy@gmail.com once confirmed."] },
      { title: "Prohibited conduct", type: "list", items: ["Using the site if you are under 20 or involving minors in any way.", "Scams, fraud, fake emergencies, gift-card requests, crypto pitches, investment schemes, or financial manipulation.", "Harassment, threats, stalking, blackmail, intimidation, doxxing, hate, or coercive behaviour.", "Impersonation, fake profiles, stolen photos, misleading identity claims, or false financial claims.", "trafficking, exploitation, prostitution, escorting, paid sexual services, payment-for-sex solicitation, or illegal transactions.", "Soliciting passwords, verification codes, identity documents, banking access, private images, or unrecoverable payments.", "Spam, malware, scraping, automated collection, security testing without permission, or interference with site operation.", "Misusing reports, support, moderation, or safety tools."] },
      { title: "User content", paragraphs: ["If profile, photo, message, review, report, or upload features are launched, you remain responsible for the content you provide. Your content must be lawful, truthful, respectful, and must not infringe another person's rights or expose private information without consent.", "By submitting content to a live service, you may grant Australia Sugar Mummy a limited licence to host, display, process, moderate, and use that content for operating, securing, improving, and enforcing the service. The final licence language should be reviewed by counsel before launch."] },
      { title: "Safety and offline interactions", paragraphs: ["You are responsible for your choices when communicating with or meeting other people. Meet publicly first, arrange your own transport, tell a trusted person where you are going, protect personal information, and leave if boundaries are ignored.", "Australia Sugar Mummy may publish safety education, review reports, or restrict accounts where available, but no online platform can guarantee another person's identity, intentions, background, financial status, health, compatibility, or offline behaviour."] },
      { title: "Paid features and payments", paragraphs: ["This static build does not currently offer paid subscriptions, premium features, paid messaging, verification payments, renewals, refunds, trials, or payment processing. Do not send payment to anyone claiming they can unlock membership, meetings, verification, or messages on behalf of Australia Sugar Mummy.", "If paid features are added later, the site must publish clear pricing, renewal, cancellation, refund, trial, payment-processor, chargeback, and support terms before accepting payment. Payment terms should be reviewed by qualified counsel and matched to the actual payment provider."] },
      { title: "Enforcement", paragraphs: ["Australia Sugar Mummy may remove content, restrict features, suspend accounts, terminate accounts, preserve records, investigate reports, or contact appropriate parties where operational tools exist and where conduct appears to violate these Terms, safety rules, law, or user trust.", "Enforcement decisions may depend on available evidence, legal obligations, safety risk, operational capacity, and the live platform tools available at launch. The site is not required to mediate personal disputes or guarantee a specific outcome from a report."] },
      { title: "Disclaimers", paragraphs: ["The site and its content are provided for general information and relationship-discovery purposes. Content is not legal, financial, medical, mental health, or personal safety advice. You should get qualified advice for your own circumstances.", "Where permitted by law, the service is provided as-is and as-available. Australia Sugar Mummy does not promise uninterrupted service, error-free content, a particular dating result, verified member wealth, or safe offline behaviour by other users."] },
      { title: "Limitation of liability", paragraphs: ["To the maximum extent permitted by applicable law, australia sugar mummy LTD and its operators, contractors, affiliates, and service providers should not be liable for indirect, incidental, consequential, special, exemplary, or punitive damages arising from use of the site, user conduct, offline meetings, or reliance on content.", "This section must be adapted to the governing law and consumer-protection rules that apply to the final operating entity. Some rights cannot be excluded or limited by law. Legal review is required before publication."] },
      { title: "Governing law and disputes", paragraphs: ["These Terms are governed by the laws of Victoria, Australia, and applicable Commonwealth laws of Australia, without limiting any non-excludable consumer rights or protections that may apply under Australian law.", "If a dispute arises, the parties should first try to resolve it in good faith by contacting Supportaustraliasugarmummy@gmail.com and allowing a reasonable time for review. If the dispute cannot be resolved informally, the courts of Victoria, Australia, and any Australian federal courts with jurisdiction may hear the dispute. These Terms do not require private arbitration and do not ask users to waive rights that cannot lawfully be waived."] },
      { title: "Changes to these Terms", paragraphs: ["These Terms may be updated as the site, laws, account features, payment tools, moderation process, or operating entity changes. Updated terms should show a revised effective date.", "If material changes are made after live accounts exist, the site should provide notice where required by law or where appropriate for user trust. Continued use after updates may indicate acceptance where permitted by law."] },
      { title: "Contact and related pages", paragraphs: ["Questions about these Terms can be sent to Supportaustraliasugarmummy@gmail.com once confirmed. Privacy questions should be sent to Privacyaustraliasugarmummy@gmail.com.", "Related pages: <a href=\"/safety/\">Safety Guidelines</a>, <a href=\"/anti-scam/\">Anti-Scam Guide</a>, <a href=\"/privacy/\">Privacy Policy</a>, <a href=\"/cookies/\">Cookie Policy</a>, and <a href=\"/contact/\">Contact</a>."] }
    ], false],
    ["/cookies/", `Cookie Policy | ${brand}`, `Learn how ${brand} may use cookies for site operation, security, preferences, analytics, fraud prevention, and account features.`, "Legal", "Cookie Policy", `This Cookie Policy explains how ${brand} may use cookies, pixels, local storage, SDKs, and similar technologies on ${domain}. It should be reviewed before publication and adapted to the site's actual cookie tools, consent settings, vendors, and legal requirements.`, [
      { title: "Effective date", paragraphs: ["Effective date: 2007.10.1. Last updated: 2026.6.24. Privacy contact: Privacyaustraliasugarmummy@gmail.com.", "This static build does not intentionally include analytics, advertising, payment, or account-session cookies by default. If those tools are added later, this policy must be updated before deployment."] },
      { title: "What cookies are", paragraphs: ["Cookies are small files stored on a device when a person visits a website. Similar technologies include pixels, tags, local storage, SDKs, and device identifiers. They can help a site remember settings, support security, understand performance, or operate account features.", "Cookies can be set by the website itself or by third-party service providers. The exact cookies used by Australia Sugar Mummy should be documented after the production stack, analytics tools, forms, account system, and security tools are confirmed."] },
      { title: "Types of cookies we may use", type: "table", headers: ["Category", "Purpose", "Current status"], rows: [["Strictly necessary", "Site operation, security, fraud prevention, form submission, account login, session management, and abuse prevention.", "May apply if forms, accounts, or security tools are enabled."], ["Preference", "Remembering language, region, display choices, privacy settings, or saved consent preferences.", "Should be documented if preference tools are added."], ["Analytics", "Understanding page visits, performance, traffic sources, and how users navigate the site.", "Not intentionally included in the current static build unless analytics is later installed."], ["Advertising or measurement", "Measuring campaigns, ad performance, retargeting, or marketing attribution.", "Use only if advertising tools are added and disclosed."], ["Safety and fraud prevention", "Detecting abuse, suspicious traffic, spam, fake accounts, scams, or account-security issues.", "May apply if live membership or protection tools are launched."]] },
      { title: "Why we may use cookies", paragraphs: ["Cookies and similar technologies may be used to keep the site available, remember user choices, protect forms and accounts, prevent abuse, support safety reviews, measure website performance, improve content, and understand whether trust pages and city guides are useful.", "If paid features, live messaging, account login, verification, moderation, or support portals are introduced, cookies may also be needed for authentication, fraud prevention, billing support, saved settings, and reliable account operation."] },
      { title: "Third-party cookies", paragraphs: ["Service providers may set cookies or similar technologies for hosting, analytics, security, fraud prevention, email forms, payment processing, support tools, advertising, or embedded content. Do not name vendors until they are actually selected and configured.", "Before launch, Australia Sugar Mummy should document each provider, what data it receives, why it is used, how long cookies last, and what choices users have. Advertising or measurement cookies should not be presented as active unless they are actually installed."] },
      { title: "Your choices", type: "list", items: ["You can usually block or delete cookies through your browser settings.", "If a cookie banner or preference centre is added, use it to manage non-essential cookies where available.", "You may be able to opt out of some analytics or advertising cookies through provider tools if those providers are used.", "Disabling strictly necessary cookies may break account login, security, forms, saved settings, or fraud-prevention features.", "For privacy questions or cookie-related requests, contact Privacyaustraliasugarmummy@gmail.com once confirmed."] },
      { title: "Current static-site note", paragraphs: ["The current static version of Australia Sugar Mummy is primarily informational. It should not be assumed to have live account cookies, payment cookies, messaging cookies, or advertising cookies unless those tools are later installed.", "Because the site may evolve, this policy is written to cover possible future technologies while clearly marking what must be confirmed before launch. The production cookie inventory should be checked before publishing the final version."] },
      { title: "Updates to this policy", paragraphs: ["This Cookie Policy may be updated when the site adds forms, account features, analytics, advertising, payment processors, security tools, support software, or new service providers.", "Updated versions should show a revised effective date or last updated date. Where required by law, users should receive notice or renewed cookie choices for material changes."] },
      { title: "Contact and related pages", paragraphs: ["For cookie or privacy questions, contact Privacyaustraliasugarmummy@gmail.com once confirmed. For general support, contact Supportaustraliasugarmummy@gmail.com.", "Related pages: <a href=\"/privacy/\">Privacy Policy</a>, <a href=\"/terms/\">Terms of Use</a>, <a href=\"/contact/\">Contact</a>, <a href=\"/safety/\">Safety Guidelines</a>, and <a href=\"/anti-scam/\">Anti-Scam Guide</a>."] }
    ], false]
  ];

  for (const [pathname, title, description, eyebrow, h1, lead, body, cta = true] of pages) {
    pageShell({
      pathname, title, description, eyebrow, h1, lead,
      image: `/assets/images/${imageMap.feature3}`,
      imageAlt: `${h1} image`,
      body,
      schema: pageSchema(pathname, title, description, h1, pathname === "/about/" ? "AboutPage" : pathname === "/contact/" ? "ContactPage" : "WebPage"),
      cta
    });
  }
}

function buildStaticFiles() {
  const urls = [
    "/", "/sugar-mummy/", "/blog/",
    ...blogPosts.map((p) => `/blog/${p.slug}/`),
    ...cities.map(([, url]) => url),
    "/safety/", "/anti-scam/", "/about/", "/contact/", "/help/", "/privacy/", "/terms/", "/cookies/"
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${canonical(url)}</loc></url>`).join("\n")}\n</urlset>\n`;
  fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);
  fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${domain}/sitemap.xml\n`);
}

function main() {
  buildAssets();
  buildHome();
  buildHubAndAudience();
  buildBlogIndex();
  buildArticles();
  buildCities();
  buildTrustAndLegal();
  buildStaticFiles();
}

main();
