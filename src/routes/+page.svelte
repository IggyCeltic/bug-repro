<svelte:head>
	<title>Min Repro</title>
</svelte:head>

<div class="background">
	<div class="stripes">
		<h1 class="dark-blue title sarala">Min Repro</h1>
		<div class="block">
			<p>
				Text Here
			</p>
		</div>
	</div>
</div>

<style>
	.background {
		height: 100%;
		overflow: auto;
	}
	.stripes {
		background-color: #f7f5a7;
		background-image: repeating-linear-gradient(
			45deg,
			transparent,
			transparent 5px,
			rgba(255, 255, 255, 0.5) 5px,
			rgba(255, 255, 255, 0.5) 10px
		);
		width: 100%;
		height: 100%;
	}
	p {
		font-size: 1rem;
		max-width: 82ch;
		color: #222c6a;

		margin-top: 0.75em;
		margin-bottom: 0;
		font-family: Helvetica, sans-serif;
	}

	.block {
		background-color: #ffffff85;
		padding: 1.25rem;
		backdrop-filter: blur(0.25rem);
		box-shadow: 0.2em 0.2em 0.2em #0003;
		max-width: 82ch;
		margin-left: 2em;
	}
	.dark-blue {
		color: #222c6a;
	}
	.sarala {
		font-family: 'Sarala', 'Helvetica', sans-serif;
	}
	.title {
		margin-top: 0;
		margin-left: 1em;
		padding-top: 0.25em;
	}
	@font-face {
		font-family: 'Sarala';
		font-style: normal;
		font-weight: 500;
		src: url('/fonts/Sarala/Sarala-Regular.ttf') format('truetype');
	}
	/* width */
	::-webkit-scrollbar {
		width: 2em;
	}
	/* Track */
	::-webkit-scrollbar-track {
		background: #f7f5a7;
	}
	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #e3222e;
	}
	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #222c6a;
	}
	@media (max-width: 1000px) {
		p {
			margin-left: 0.5rem;
			width: 90%;
		}
	}
</style>
