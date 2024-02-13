/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'quote': '#353536',
				'card': '#2F2F30',
				'card-hover': '#353536'
			},
			textColor: {
				'text-hover': '#DE2E03'
			}
		},
	},
	plugins: [],
}
