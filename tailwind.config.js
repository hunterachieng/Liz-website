/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
	theme: {
		extend: {
			screens: {
				xsm: { max: '360px' },
				// => @media (max-width: 280px) { ... }
				sm: { min: '361px', max: '767px' },
				// => @media (min-width: 640px) { ... }

				md: { min: '768px', max: '1024px' },
				// => @media (min-width: 768px) { ... }

				lg: {min:'1025px'},
				// => @media (min-width: 1024px) { ... }

				xl: '1280px',
				// => @media (min-width: 1280px) { ... }

				'2xl': '1536px',
				// => @media (min-width: 1536px) { ... }
			},
			colors: {
				orange: '#ED6100',
				icons: '#454D5F',
			},
		},
	},
	plugins: [],
};
