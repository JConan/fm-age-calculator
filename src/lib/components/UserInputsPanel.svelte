<script lang="ts">
	import { getObjectEntries, type UserErrors, type UserInputs } from '$lib/DateCalculator';

	export let inputs: UserInputs;
	export let errors: UserErrors;

	$: error = Object.values(errors).join('') !== '';
</script>

<section class="inputs error" class:error>
	{#each getObjectEntries(inputs) as [fieldName]}
		<label for={fieldName}>{fieldName}</label>
		<input id={fieldName} type="text" bind:value={inputs[fieldName]} />
		<span>{errors[fieldName]}</span>
	{/each}
</section>

<style lang="postcss">
	.inputs {
		@apply grid grid-cols-3 gap-x-8 gap-y-2;
		width: calc(160px * 3 + 2rem * 2);
		color: black;

		&&.error {
			& label,
			span {
				color: var(--red);
			}
		}

		& label {
			@apply row-start-1 uppercase font-bold;
			letter-spacing: 3.5px;
		}
		& input {
			@apply row-start-2 rounded-lg px-6 py-3 border outline-none;
			border-color: var(--line);
			&&:focus {
				border-color: var(--purple);
			}
		}
		& span {
			@apply row-start-3 italic h-6 font-normal text-nowrap text-sm;
		}
	}

	@media (max-width: 480px) {
		.inputs {
			@apply text-xs gap-4;
			width: 295px;
			margin-bottom: 1rem;
		}
		.inputs input {
			@apply text-xl px-3;
		}
		.inputs span {
			grid-row-start: auto;
			grid-column: span 3;
			display: none;
		}
		.inputs span:not(:empty) {
			display: block;
		}
		.inputs span:nth-of-type(1)::before {
			content: 'DAY: ';
			font-weight: bold;
			letter-spacing: 1.5px;
		}
		.inputs span:nth-of-type(2)::before {
			content: 'MONTH: ';
			font-weight: bold;
			letter-spacing: 1.5px;
		}
		.inputs span:nth-of-type(3)::before {
			content: 'YEAR: ';
			font-weight: bold;
			letter-spacing: 1.5px;
		}
	}
</style>
