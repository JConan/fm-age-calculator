<script lang="ts">
	import AgePanel from '$lib/components/AgePanel.svelte';
	import ControlPanel from '$lib/components/ControlPanel.svelte';
	import UserInputsPanel from '$lib/components/UserInputsPanel.svelte';
	import {
		checkInputNumbers,
		getAgeFrom,
		checkDate,
		type Age,
		type UserErrors,
		type UserInputs
	} from '$lib/DateCalculator';

	const inputs: UserInputs = {
		day: '',
		month: '',
		year: ''
	};
	let errors: UserErrors = {
		year: '',
		month: '',
		day: ''
	};
	let age: Partial<Age> = {};

	function hasError(_errors?: Partial<UserErrors>) {
		errors = { ...errors, ..._errors };
		return Object.values(errors).join('') !== '';
	}

	function calculate() {
		errors = {
			year: '',
			month: '',
			day: ''
		};
		age = {};
		const { values, errors: inputErrors } = checkInputNumbers(inputs);
		if (hasError(inputErrors)) return;

		const { birthday, errors: validationErrors } = checkDate(
			values!.year!,
			values!.month!,
			values!.day!
		);
		if (hasError(validationErrors)) return;

		const ageResult = getAgeFrom(birthday!);
		if (hasError(ageResult.errors)) return;

		age = { ...ageResult };
	}
</script>

<form class="calculator" on:submit|preventDefault={calculate}>
	<UserInputsPanel {inputs} {errors} />
	<ControlPanel />
	<AgePanel data={age} />
</form>

<style lang="postcss">
	.calculator {
		--purple: #854dff;
		--line: #dcdcdc;
		--red: #ff5959;

		@apply border border-gray-400 p-14 rounded-3xl bg-white;
		width: 840px;
		border-bottom-right-radius: 200px;
		border-color: var(--line);
	}

	@media (max-width: 850px) {
		.calculator {
			@apply absolute top-1/2 left-1/2 scale-90;
			transform: translate(-50%, -50%) scale(0.8);
		}
	}

	@media (max-width: 640px) {
		.calculator {
			@apply absolute top-1/2 left-1/2 scale-90;
			transform: translate(-50%, -50%) scale(0.6);
		}
	}

	@media (max-width: 480px) {
		.calculator {
			position: unset;
			transform: unset;
			width: 343px;
			padding: 48px 24px;
			border-bottom-right-radius: 100px;
		}
	}
</style>
