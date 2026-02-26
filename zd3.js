const items = [
	{ category: 'фрукты', value: 10 },
	{ category: 'овощи', value: 15 },
	{ category: 'фрукты', value: 20 },
	{ category: 'напитки', value: 8 },
	{ category: 'овощи', value: 5 },
	{ category: 'фрукты', value: 12 }
];

const categorySums = items.reduce((acc, item) => {
	const { category, value } = item;
	acc[category] = (acc[category] || 0) + value;

	return acc;
}, {});

console.log(categorySums);
