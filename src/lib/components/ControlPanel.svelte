<section class="control">
	<button type="submit">
		<svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44">
			<g fill="none" stroke="#FFF" stroke-width="2">
				<path
					d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"
				/>
			</g>
		</svg>
	</button>
</section>

<style lang="postcss">
	.control {
		@apply grid items-center;
		grid-template-columns: auto 96px;

		&::before {
			@apply w-full border;
			content: '';
		}

		& button {
			@apply w-24 h-24 rounded-full hover:bg-black grid place-items-center;
			background: var(--purple);
		}
	}

	@media (max-width: 480px) {
		.control {
			grid-template-columns: auto 64px auto;
		}
		.control::after {
			@apply w-full border;
			content: '';
		}
		.control button {
			@apply w-16 h-16;
		}
		.control button svg {
			@apply w-6 h-6;
		}
	}
</style>
