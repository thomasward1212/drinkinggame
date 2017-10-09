const questions = [
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Down your drink',
		'time-limit': '10 Seconds'
	},
	{
		'category': 'Drink',
		'points': '2',
		'question': 'Have a shot.',
		'time-limit': '2 Minutes'
	},
	{
		'category': 'Drink',
		'points': '2',
		'question': 'Whoever has the weakest drink must down their drink',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Whoever has the weakest drink must down the strongest drink',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Whoever has the strongest drink gets to donate 2 fingers.',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'The next person to ask a question takes 3 sips',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Pick a category, go clockwise naming things from said category. Loser takes 3 sips',
		'time-limit': '10 seconds'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Whoever has the worst eyesight drinks.',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Drink for each pet you own.',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Drink for each letter in your first name.',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'All virgins drink',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Play a game of 21, loser downs their drink.',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Drink for every time you\'ve masturbated this week',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Play a game of 21, loser chooses someone to down their drink',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Drink for every sexual partner you\'ve had',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Drink if you think Rachel Riley is hot',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'The next person to make eye contact with you drinks half their drink',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'The next person to swear drinks 5 fingers',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'The next drinking effect is doubled',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'People who aren\'t wearing a watch drink.',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Drink for each article of clothing you are wearing',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Drink if you haven\'t had a shower today',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Drink if you\'re currently enjoying the song',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'If someone is currently on their phone, take a shot.',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Shot Roulette',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Take off 2 articles of clothing or take a shot',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Person to your left has 2 sips',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Person to your right has 2 sips',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Person to your right has 1 shot',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Person to your left has 1 shot',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Last one to touch the floor has 3 sips',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Last person to touch you has 3 sips',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Down your drink',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Person to your left has to down their drink',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Person to your right has to down their drink',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Have an arm wrestle with the person opposite you, loser has 3 sips',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Have a staring competition with the person opposite you, loser has 3 sips',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'All feminists must drink',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Last person to name a pokmon drink 3 sips.',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Play a round of Never have I ever',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Person with the best facial hair drink',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Person with the worst facial hair drink',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Do the splits, if you can\'t have 3 sips',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'All girls drink',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'All guys drink',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Most recent person to have had sex drinks 3 sips',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Least recent person to have had sex drinks 3 sips',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Drink for ever player you\'ve slept with.',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Whoever drank last card, has a shot.',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Whoever has the biggest tits drink',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Vote on who everyone thinks is the biggest dick, they must have a shot',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Have 3 sips',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Have 3 sips',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Have 3 sips',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Have 3 sips',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Have 3 sips',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Have a shot',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Have a shot',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Have a shot',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Have a shot',
		'time-limit': '1 Minute'
	},
	{
		'category': 'Drink',
		'points': '4',
		'question': 'Have a shot',
		'time-limit': '1 Minute'
	},
];

export {
	questions
};
