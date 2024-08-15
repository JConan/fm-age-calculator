export type FieldName = 'day' | 'month' | 'year';
export type UserInputs = Record<FieldName, string>;
export type UserErrors = Record<FieldName, string>;
export type DataInputs = Record<FieldName, number>;
export type Age = Record<`${FieldName}s`, number>;

// utility to have typed entries
export function getObjectEntries<T extends Record<string, unknown>>(obj: T) {
	return Object.entries(obj) as [keyof T, T[keyof T]][];
}

export function checkInputNumbers(inputs: UserInputs) {
	const values: Partial<DataInputs> = {};
	const errors: Partial<UserErrors> = {};

	for (const [fieldName, value] of getObjectEntries(inputs)) {
		if (value !== '') {
			values[fieldName] = parseInt(value);
			if (isNaN(values[fieldName])) {
				errors[fieldName] = `Must be a valid ${fieldName}`;
			}
		} else errors[fieldName] = `This field is required`;
	}

	if (values.day! < 1 || values.day! > 31) errors.day = `Must be a valid day`;

	if (values.month! < 1 || values.month! > 12) errors.month = `Must be a valid month`;

	if (values.year! > new Date().getFullYear()) errors.year = `Must be in the past`;

	if (Object.keys(errors).length !== 0) {
		return { errors };
	}
	return {
		values
	};
}

type AgeResult =
	| (Age & { errors?: never })
	| (Partial<{ [K in keyof Age]: never }> & { errors: Partial<UserErrors> });

export function checkDate(year: number, month: number, day: number) {
	const birthday = new Date(year, month - 1, day);
	const errors: Partial<UserErrors> = {};

	if (
		!(
			birthday.getFullYear() === year &&
			birthday.getMonth() === month - 1 &&
			birthday.getDate() === day
		)
	) {
		errors.day = 'Must be a valid date';
		return {
			errors
		};
	}

	return { birthday };
}

export function getAgeFrom(birthday: Date): AgeResult {
	const now = new Date().getTime();
	const birthTime = birthday.getTime();
	const errors: Partial<UserErrors> = {};

	if (birthTime > now) {
		errors.year = 'Must be in the past';
		return {
			errors
		};
	}

	const difference = new Date(now - birthTime);
	return {
		years: difference.getFullYear() - 1970,
		months: difference.getMonth() + 1,
		days: difference.getDate()
	} as Age;
}
