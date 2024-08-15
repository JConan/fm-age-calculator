<script lang="ts">
	import { getObjectEntries, type Age } from '$lib/DateCalculator';

	export let data: Partial<Age>;

	$: outputLabels = {
		years: `${data.years ?? '--'}`,
		months: `${data.months ?? '--'}`,
		days: `${data.days ?? '--'}`
	};
</script>

<section class="output">
	{#each getObjectEntries(outputLabels) as [fieldName, value]}
		<p><span>{value}</span> {fieldName}</p>
	{/each}
</section>

<style lang="postcss">
	.output {
		@apply italic font-extrabold;
		font-size: 104px;
		line-height: 110%;
		text-wrap: nowrap;

		& span {
			color: var(--purple);
		}
	}
	@media (max-width: 480px) {
		.output {
			font-size: 56px;
		}
	}
</style>
