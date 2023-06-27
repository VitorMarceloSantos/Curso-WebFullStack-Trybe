// Gerar 6 números inteiros de 1 a 60 diferentes
export const generateNumbers = (): number[] => {
	const listNumbers: number[] = [];
	while (true) {
		const number = Math.floor(Math.random() * (60 - 1 + 1) + 1);
		listNumbers.length === 0 && listNumbers.push(number);
		if (listNumbers.length < 6) {
			if (listNumbers.every((numberList) => numberList !== number)) {
				listNumbers.push(number);
			}
		} else {
			break;
		}
	}
	console.log(listNumbers);
	return listNumbers;
};
