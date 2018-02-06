const RESPONSES = {
  funny: 'Funny',
  kind: 'Kind',
  serious: 'Serious',
  vague: 'Vague'
};

export const PERSONALITIES = {
  gloomy: {
    name: 'Gloomy',
    likes: [RESPONSES.vague],
    dislikes: [RESPONSES.funny, RESPONSES.serious],
    neutral: [RESPONSES.kind]
  },
  irritable: {
    name: 'Irritable',
    likes: [RESPONSES.serious],
    dislikes: [RESPONSES.kind, RESPONSES.vague],
    neutral: [RESPONSES.funny]
  },
  timid: {
    name: 'Timid',
    likes: [RESPONSES.kind],
    dislikes: [RESPONSES.funny, RESPONSES.vague],
    neutral: [RESPONSES.serious]
  },
  upbeat: {
    name: 'Upbeat',
    likes: [RESPONSES.funny],
    dislikes: [RESPONSES.serious, RESPONSES.vague],
    neutral: [RESPONSES.kind]
  }
};

export const negotiationGuide = {
  header: [
    { text: 'Personality' },
    { text: 'Likes' },
    { text: 'Dislikes' },
    { text: 'Neutral' }
  ],
  // Built in the NegotiationGuideTable component's getBody method
  body: []
 };

 export const responseGuide = {
  body: [
    // Lilith #2
    [
      { text: 'You\'re beautiful.', response: RESPONSES.kind },
      { text: 'You\'re scary.' },
      { text: 'Nothing in particular' }
    ],
    // Lilith #1
    [
      { text: 'Meat and potatoes.', response: RESPONSES.kind },
      { text: 'I don\'t eat homemade food.' },
      { text: 'Can you actually cook?' }
    ],
    [
      { text: 'You\'re kind of evil.', response: RESPONSES.serious },
      { text: 'Don\'t play the tragic hero.' },
      { text: 'You were born.' }
    ],
    [
      { text: 'All right.' },
      { text: 'A deal with the enemy?' },
      { text: 'I can\'t trust you.', notes: 'kind/vague' }
    ],
    [
      { text: 'Aren\'t you scared?', response: RESPONSES.kind },
      { text: 'I\'ll have more fun first.' },
      { text: 'Stop trying to act cool.' }
    ],
    [
      { text: 'An average level of happiness.' },
      { text: 'Live fast, die young.', response: RESPONSES.kind },
      { text: 'I just want to enjoy the now.' }
    ],
    [
      { text: 'I want to meet them.', response: RESPONSES.funny },
      { text: 'Complicated...?', response: RESPONSES.funny },
      { text: 'Liar.' }
    ],
    [
      { text: 'I feel bad about that.', response: RESPONSES.funny },
      { text: 'I\'m ME!' },
      { text: 'I don\'t have to answer you.', notes: 'kind/vague' },
    ],
    [
      { text: 'My rival.' },
      { text: 'Nobody, really.', notes: 'kind/vague' },
      { text: 'It doesn\'t matter.' }
    ],
    [
      { text: 'Red.', response: RESPONSES.serious },
      { text: 'Green.' },
      { text: 'I never bleed or cry.', response: RESPONSES.vague }
    ],
    [
      { text: 'I\'m a bit chilly, but...' },
      { text: 'I\'m a little scared...', response: RESPONSES.funny },
      { text: 'Shut up!' }
    ],
    [
      { text: 'Is that so?' },
      { text: 'Too late.', response: RESPONSES.funny },
      { text: 'Well, I hate you.' }
    ],
    [
      { text: 'Then get serious now.', response: RESPONSES.funny },
      { text: 'Making excuses?' },
      { text: 'I wasn\'t trying either.', response: RESPONSES.funny}
    ],
    [
      { text: 'That\'s true...', response: RESPONSES.KIND },
      { text: 'That can\'t be true.' },
      { text: 'That\'s unrelated.', response: RESPONSES.vague }
    ],
    [
      { text: 'I think there is.', response: RESPONSES.kind },
      { text: 'I can\'t promise that.' },
      { text: 'It\'s a matter of feeling.' }
    ],
    [
      { text: 'You do sound busy.' },
      { text: 'Your popularity won\'t last.' },
      { text: 'Who cares?', response: RESPONSES.funny }
    ],
    [
      { text: 'Fine.' },
      { text: 'No.' },
      { text: 'You go home.', response: RESPONSES.funny }
    ],
    [
      { text: 'I\'m not that young.' },
      { text: 'I\'m not sleepy yet.' },
      { text: 'Mom will wait till I\'m done.', response: RESPONSES.serious }
    ],
    [
      { text: 'You\'re right.' },
      { text: 'I don\'t care.' },
      { text: 'You\'re not an animal.', response: RESPONSES.serious }
    ],
    [
      { text: 'Your lack of resolve.', response: RESPONSES.kind },
      { text: 'My natural talent.', response: RESPONSES.serious },
      { text: 'I\'m not telling.' }
    ],
    [
      { text: 'Give me everything you got.' },
      { text: 'Lick my shoes.' },
      { text: 'Are you sure it\'s fine?', response: RESPONSES.kind }
    ],
    [
      { text: 'I\'ve thought about it.', response: RESPONSES.vague },
      { text: 'I don\'t want kids.' },
      { text: 'I\'m not comfortable with this.' }
    ],
    [
      { text: 'I\'m acting on a whim.' },
      { text: 'I love the elderly.', response: RESPONSES.kind },
      { text: 'I just want you to die happy.', response: RESPONSES.funny }
    ],
    [
      { text: 'There are things I must do.' },
      { text: 'I\'m just too curious.', response: RESPONSES.kind },
      { text: 'The real world is oppressive.', response: RESPONSES.funny }
    ],
    [
      { text: 'I never thought of that.' },
      { text: 'Eh, doesn\'t matter.', response: RESPONSES.vague },
      { text: 'What do you mean?' }
    ],
    [
      { text: 'That\'s not true.', response: RESPONSES.kind },
      { text: 'Age doesn\'t matter.' },
      { text: 'This isn\'t extreme.' }
    ],
    [
      { text: 'Relax at home.', response: RESPONSES.funny },
      { text: 'Go impulse shopping.' },
      { text: 'Don\'t be so selfish.', response: RESPONSES.kind }
    ],
    [
      { text: 'Slow-ass cashiers.' },
      { text: 'Egotistical women.' },
      { text: 'I\'m not irritated.', notes: 'serious/funny' }
    ],
    [
      { text: 'I do.' },
      { text: 'I don\'t think it\'s unfair.' },
      { text: 'Don\'t fret about it.', response: RESPONSES.kind }
    ],
    [
      { text: 'That\'s right.' },
      { text: 'I didn\'t think that far...', response: RESPONSES.kind },
      { text: 'The feelings will come.' }
    ],
    [
      { text: 'Your looks.', response: RESPONSES.serious },
      { text: 'You seemed useful.', response: RESPONSES.serious },
      { text: 'No particular reason.', response: RESPONSES.serious }
    ],
    [
      { text: 'It\'d take a while to explain.', response: RESPONSES.kind },
      { text: 'There\'s no need to explain.' },
      { text: 'Just shut up.', response: RESPONSES.serious }
    ],
    [
      { text: 'If you want to.' },
      { text: 'What do you want to say?', response: RESPONSES.serious },
      { text: 'I\'m a minor.' }
    ],
    [
      { text: 'What are you talking about?' },
      { text: 'I feel his gaze.', response: RESPONSES.serious },
      { text: 'I don\'t think so.' }
    ],
    [
      { text: 'I didn\'t know...' },
      { text: 'This is my power.' },
      { text: 'There is no "Father."', response: RESPONSES.funny }
    ],
    [
      { text: 'Why can\'t we end war?' },
      { text: 'Taxes keep going up.', response: RESPONSES.serious },
      { text: 'I can\'t get a girlfriend.' }
    ],
    [
      { text: 'I care about my looks.' },
      { text: 'It keeps my foes\' blood off.' },
      { text: 'That\'s what I want to know.', response: RESPONSES.serious }
    ],
    [
      { text: 'It\'s really boring. (funny)' },
      { text: 'I\'m always so busy there.' },
      { text: 'It\'s better than here.', response: RESPONSES.kind }
    ],
    [
      { text: 'Are you busy?' },
      { text: 'I just couldn\'t.', notes: 'serious/funny' },
      { text: 'Is that reverse psychology?', response: RESPONSES.funny }
    ],
    [
      { text: 'It is a difficult topic.' },
      { text: 'But the outcome is clear.' },
      { text: 'It\'s mature to admit defeat.', response: RESPONSES.kind }
    ],
    [
      { text: 'I noticed.', response: RESPONSES.funny },
      { text: 'I didn\'t see any "vibes."', response: RESPONSES.serious },
      { text: 'But we may never meet again...', response: RESPONSES.kind }
    ],
    [
      { text: 'It was a hard-fought battle.', response: RESPONSES.serious },
      { text: 'It was an easy win.' },
      { text: 'I\'ll forget it happened.' }
    ],
    [
      { text: 'How did you know?' },
      { text: 'No, not at all.' },
      { text: 'I look OK, I guess.', response: RESPONSES.vague }
    ],
    [
      { text: 'Sometimes.' },
      { text: 'No.' },
      { text: 'I have no friends.', response: RESPONSES.vague }
    ],
    [
      { text: 'I am.' },
      { text: 'I\'m actually very busy.' },
      { text: 'Shut up!', response: RESPONSES.kind }
    ],
    [
      { text: 'I feel great.' },
      { text: 'I want to aim higher.' },
      { text: 'Fighting is pointless.', response: RESPONSES.vague }
    ],
    [
      { text: 'I\'ll make mincemeat of you.', notes: 'serious/funny' },
      { text: 'I\'ll play nice.' },
      { text: 'I\'ll be your dominatrix.' }
    ],
    [
      { text: 'OK I\'ll make you into soup.', response: RESPONSES.vague },
      { text: 'Fine, I\'ll grill you.', notes: 'serious/funny' },
      { text: 'All right, I\'ll mince you!' }
    ],
    [
      { text: 'Slow walkers.' },
      { text: 'Loud talkers...', response: RESPONSES.funny },
      { text: 'Nobody.' }
    ],
    [
      { text: 'I do.', response: RESPONSES.serious },
      { text: 'I don\'t.' },
      { text: 'That\'s impossible.' }
    ],
    [
      { text: 'like older women.', response: RESPONSES.vague },
      { text: 'I like younger women.' },
      { text: 'I like men.', response: RESPONSES.kind }
    ],
    [
      { text: 'You\'ve got a point there...' },
      { text: 'That\'s absurd.' },
      { text: 'Anyone will do.', response: RESPONSES.vague }
    ],
    [
      { text: 'This is true.' },
      { text: 'That\'s not very fun.', response: RESPONSES.serious },
      { text: 'You dirty old man.' }
    ],
    [
      { text: 'Eat you in a hot pot.', response: RESPONSES.funny },
      { text: 'Take you to a taxidermist.', response: RESPONSES.kind },
      { text: 'You\'ll be my new stylish coat.' }
    ],
    [
      { text: 'I\'ll just keep winning.', response: RESPONSES.funny },
      { text: 'You\'re just a sore loser.' },
      { text: 'I can\'t drink, I\'m underage.' }
    ],
    [
      { text: 'I want to get stronger.' },
      { text: 'Because I see an enemy.', notes: 'vague/funny' },
      { text: 'I don\'t actually know.' }
    ],
    [
      { text: 'You should have stayed home.' },
      { text: 'You won\'t die easily.', response: RESPONSES.kind },
      { text: 'Don\'t get desperate.' }
    ],
    [
      { text: 'I think it\'s fine.', response: RESPONSES.kind },
      { text: 'What\'s wrong with that?' },
      { text: 'You\'re too self-conscious.' }
    ],
    [
      { text: 'I\'m sorry.' },
      { text: 'Prepare for the worst.' },
      { text: 'How much do you want?', response: RESPONSES.vague }
    ],
    [
      { text: 'Fair enough.', response: RESPONSES.funny },
      { text: 'That is incorrect.', response: RESPONSES.serious },
      { text: 'What are you talking about?', response: RESPONSES.vague }
    ],
    [
      { text: 'I have homework tonight.' },
      { text: 'I need a new cell phone.' },
      { text: 'I want girls to like me.', response: RESPONSES.vague }
    ],
    [
      { text: 'It\'s my intelligence.' },
      { text: 'It\'s money.' },
      { text: 'Girl power.', response: RESPONSES.vague }
    ],
    [
      { text: 'How should I know?' },
      { text: 'I can\'t tell you.' },
      { text: 'Ask your parents.' }
    ],
    [
      { text: 'It\'s unfair.' },
      { text: 'Your fault for being tricked.' },
      { text: 'Be more persistent.' }
    ],
    [
      { text: 'That\'s "domestic violence."' },
      { text: 'What? No, you\'re wrong...' },
      { text: 'Um, are things OK at home?' }
    ],
    [
      { text: 'Now that you mention it...' },
      { text: 'No, I don\'t think so.' },
      { text: 'I\'m not mature anyway.' }
    ],
    [
      { text: 'That\'s right.' },
      { text: 'I won\'t tell you.' },
      { text: 'It pays the bills.' }
    ],
    [
      { text: 'I\'m smart.' },
      { text: 'My grades are all right.' },
      { text: 'Shut up.' }
    ],
    [
      { text: 'Sure did.' },
      { text: 'Not really.' },
      { text: 'I want to be a kid forever.' }
    ],
    [
      { text: 'Soy sauce.' },
      { text: 'Worcestershire sauce.' },
      { text: 'I don\'t add anything.', response: RESPONSES.vague }
    ],
    [
      { text: 'Really?', response: RESPONSES.vague },
      { text: 'You\'re trying way too hard.' },
      { text: 'I\'m not interested.', response: RESPONSES.serious }
    ],
    [
      { text: 'Yup.' },
      { text: 'No... Nothing at all...' },
      { text: 'You\'re too self-conscious.' }
    ],
    [
      { text: 'I didn\'t know.', notes: 'vague/funny' },
      { text: 'Not if no one finds out.', response: RESPONSES.vague },
      { text: 'Pretty cool, huh?', response: RESPONSES.serious }
    ],
    [
      { text: 'I suppose so...' },
      { text: 'What don\'t you get?' },
      { text: 'Nah, you totally won.' }
    ],
    [
      { text: 'Sorry about that.' },
      { text: 'I haven\'t thought about it.', response: RESPONSES.vague },
      { text: 'Ugh, you talk too loud.' }
    ],
    [
      { text: 'Times have changed.' },
      { text: 'Humans are powerful.' },
      { text: 'This is a difficult topic...', response: RESPONSES.vague }
    ],
    [
      { text: 'I don\'t have any.' },
      { text: 'Brew your own.', response: RESPONSES.funny },
      { text: 'I\'m not hospitable.' }
    ],
    [
      { text: 'Are you OK?' },
      { text: 'What kind of medicine?', notes: 'vague/kind' },
      { text: 'That won\'t change anything.', notes: 'serious/funny' }
    ],
    [
      { text: 'Yeah, we sure are.', notes: 'serious/funny' },
      { text: 'No, I thought this up myself.', response: RESPONSES.kind },
      { text: 'Want to join in?', notes: 'serious/funny' }
    ],
    [
      { text: 'When you put it that way...' },
      { text: 'It\'s not a waste.', response: RESPONSES.vague },
      { text: 'Enemies must be eliminated.' }
    ],
    [
      { text: 'You\'re right.' },
      { text: 'I don\'t care.', response: RESPONSES.vague },
      { text: 'I don\'t know any other way.', response: RESPONSES.funny }
    ],
    [
      { text: 'Fate brought us together.', response: RESPONSES.serious },
      { text: 'There is no such thing.' },
      { text: 'I want to end this fate.', notes: 'serious/funny' }
    ],
    [
      { text: 'I don\'t really train.' },
      { text: 'I just have a knack for it.', response: RESPONSES.kind },
      { text: 'Luck\'s usually on my side.' }
    ],
    [
      { text: 'Someone did once.', notes: 'serious/funny' },
      { text: 'I don\'t care.' },
      { text: 'I don\'t want to grow old.' }
    ],
    [
      { text: 'My relationships...' },
      { text: 'My future...' },
      { text: 'I have no worries.' }
    ],
    [
      { text: 'It\'s not like that.' },
      { text: 'Nothing but bad things...' },
      { text: 'You\'re getting on my nerves!' }
    ],
    [
      { text: 'A luxury cruise.' },
      { text: 'A hitchhiking adventure.' },
      { text: 'A trip to hell.', response: RESPONSES.vague }
    ],
    [
      { text: 'You got me.', response: RESPONSES.kind },
      { text: 'It\'s a misunderstanding.' },
      { text: 'I\'ve come to finish you off.' }
    ],
    [
      { text: 'That sounds tough.', response: RESPONSES.kind },
      { text: 'No sleeping today.' },
      { text: 'I\'ll give you eternal sleep.' }
    ],
    [
      { text: 'I don\'t really train.' },
      { text: 'I just have a knack for it.', response: RESPONSES.kind },
      { text: 'Luck\'s usually on my side.' }
    ],
    [
      { text: 'I want to be a kid forever.', notes: 'serious/funny' },
      { text: 'I prefer being an adult.', response: RESPONSES.kind },
      { text: 'I wish I was still a baby.' }
    ],
    [
      { text: 'Don\'t joke around.', notes: 'vague/kind' },
      { text: 'Just endure it.' },
      { text: 'Want something delivered?', response: RESPONSES.kind }
    ],
    [
      { text: 'This was my choice.', response: RESPONSES.funny },
      { text: 'Fighting me is bad luck.' },
      { text: 'Just try to escape.' }
    ],
    [
      { text: 'This is a misunderstanding.', notes: 'serious/funny' },
      { text: 'I don\'t have the time.', notes: 'vague/funny' },
      { text: 'You\'ve got the wrong idea.', notes: 'serious/funny' }
    ],
    [
      { text: 'Sorry...' },
      { text: 'Not my problem.', notes: 'serious/funny' },
      { text: 'Don\'t lie.', response: RESPONSES.funny }
    ],
    [
      { text: 'Like a disco ball.', response: RESPONSES.kind },
      { text: 'Not at all.' },
      { text: 'Why does that matter?', response: RESPONSES.funny }
    ]
  ]
 };

