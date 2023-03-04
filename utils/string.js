import { TRANSACTION_CHECKIN_STATUS } from "../constants/Transaction"

export const convertToKebabCase = (str = '') => {
	return str?.toLocaleLowerCase()?.split(' ').join('-');
};

export const generateCode = (prefix) => {
	let now = Date.now().toString();
	now += now + Math.floor(Math.random() * 10);
	return `${prefix ? `#${prefix}.` : ''}` + now.slice(now.length - 6, now.length);
};

export const randomPassword = (
	len = 8,
	minUpper = 1,
	minLower = 1,
	minNumber = 1,
	minSpecial = 0
) => {
	let chars = String.fromCharCode(...Array(127).keys()).slice(33), //chars
		A2Z = String.fromCharCode(...Array(91).keys()).slice(65), //A-Z
		a2z = String.fromCharCode(...Array(123).keys()).slice(97), //a-z
		zero2nine = String.fromCharCode(...Array(58).keys()).slice(48), //0-9
		specials = chars.replace(/\w/g, '');
	if (minSpecial <= 0) chars = zero2nine + A2Z + a2z;
	if (minNumber < 0) chars = chars.replace(zero2nine, '');
	let minRequired = minSpecial + minUpper + minLower + minNumber;
	let rs = [].concat(
		Array.from(
			{ length: minSpecial ? minSpecial : 0 },
			() => specials[Math.floor(Math.random() * specials.length)]
		),
		Array.from(
			{ length: minUpper ? minUpper : 0 },
			() => A2Z[Math.floor(Math.random() * A2Z.length)]
		),
		Array.from(
			{ length: minLower ? minLower : 0 },
			() => a2z[Math.floor(Math.random() * a2z.length)]
		),
		Array.from(
			{ length: minNumber ? minNumber : 0 },
			() => zero2nine[Math.floor(Math.random() * zero2nine.length)]
		),
		Array.from(
			{ length: Math.max(len, minRequired) - (minRequired ? minRequired : 0) },
			() => chars[Math.floor(Math.random() * chars.length)]
		)
	);
	return rs.sort(() => Math.random() > Math.random()).join('');
};

export const toCapitalize = (string) => {
	const words = string?.split(' ')

	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].substr(1)
	}

	return words.join(' ')
}

export const renderTransactionCheckinStatusColor = (status) => {
	switch (status) {
		case TRANSACTION_CHECKIN_STATUS.NEW:
		case TRANSACTION_CHECKIN_STATUS.WAITING:
			return "bg-orangeLight"
		case TRANSACTION_CHECKIN_STATUS.PROGRESS:
			return "bg-blue3"
		case TRANSACTION_CHECKIN_STATUS.DONE:
			return "bg-green"
		case TRANSACTION_CHECKIN_STATUS.PAID:
			return "bg-purple"
		case TRANSACTION_CHECKIN_STATUS.CONFIRMED:
			return "bg-blue"
		default:
			return "bg-orangeLight"
	}
}
