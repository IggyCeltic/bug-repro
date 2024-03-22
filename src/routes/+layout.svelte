<nav class="navbar">
	<a href="/" style="text-decoration: none;"><h1 class="tan sarala">Repro Issue</h1></a>
</nav>
<div class="container">
	<div class="rectangle-dark-blue" />
	<div class="rectangle-red" />
	<div class="rectangle-tan" />
</div>
<div class="main-container">
	<div class="side-bar scroller">
		<a href="/" class="nav sarala">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="w-4 h-4"
			>
				<path
					fill-rule="evenodd"
					d="M7.487 2.89a.75.75 0 1 0-1.474-.28l-.455 2.388H3.61a.75.75 0 0 0 0 1.5h1.663l-.571 2.998H2.75a.75.75 0 0 0 0 1.5h1.666l-.403 2.114a.75.75 0 0 0 1.474.28l.456-2.394h2.973l-.403 2.114a.75.75 0 0 0 1.474.28l.456-2.394h1.947a.75.75 0 0 0 0-1.5h-1.661l.57-2.998h1.95a.75.75 0 0 0 0-1.5h-1.664l.402-2.108a.75.75 0 0 0-1.474-.28l-.455 2.388H7.085l.402-2.108ZM6.8 6.498l-.571 2.998h2.973l.57-2.998H6.8Z"
					clip-rule="evenodd"
				/>
			</svg>
			Home
		</a>
	</div>
	<div class="content scroller">
		<slot />
	</div>
</div>

<style>
	h1 {
		margin-top: 0em;
		margin-bottom: 0em;
		margin-block-start: 0em;
		margin-block-end: 0em;
		font-size: 2.5rem;
	}

	.nav {
		color: #f7f5a7;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.container {
		display: flex;
		margin-bottom: 0.25em;
	}

	.main-container {
		display: flex;
		flex-direction: row;
		width: 100%;
	}

	.side-bar {
		width: 12.5rem;
		height: 79vh;
		display: flex;
		flex-direction: column;
	}

	.content {
		width: 86.5vw;
		height: 84.5vh;
	}

	.rectangle-dark-blue {
		height: 1vh;
		width: 34vw;
		background-color: #222c6a;
	}

	.rectangle-red {
		height: 1vh;
		width: 33vw;
		background-color: #e3222e;
	}

	.rectangle-tan {
		height: 1vh;
		width: 33vw;
		background-color: #f7f5a7;
	}

	.tan {
		color: #f7f5a7;
	}

	.sarala {
		font-family: 'Sarala', 'Helvetica', sans-serif;
	}

	.navbar {
		display: flex;
		flex-direction: row;
		align-items: center;
		/* justify-content: space-between; */
		margin-left: 1.5em;
		margin-top: 1em;
		margin-bottom: 1em;
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
		.content {
			height: 73vh;
		}
	}

	.scroller {
		scrollbar-color: #e3222e #f7f5a7;
		scrollbar-width: thin;
	}

	.w-4 {
		width: 1.25rem;
	}
	.h-4 {
		height: 1.25rem;
		vertical-align: middle;
	}
</style>
