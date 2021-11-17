const screenDebugPlugin = function ({ addComponents, theme }) {
	const screens = theme('screens');
	const userStyles = theme('debugScreens.style', {});
	const ignoredScreens = theme('debugScreens.ignore', ['dark']);
	const prefix = theme('debugScreens.prefix', 'screen: ');
	const selector = theme('debugScreens.selector', '.debug-screens');

	const defaultPosition = ['bottom', 'left'];
	const position = theme('debugScreens.position', defaultPosition);
	const positionY = position[0] || defaultPosition[0];
	const positionX = position[1] || defaultPosition[1];

	const components = {
		[`${selector}::before`]: Object.assign(
			{
				position: 'fixed',
				zIndex: '2147483647',
				[positionY]: '0',
				[positionX]: '0',
				padding: '.3333333em .5em',
				fontSize: '12px',
				lineHeight: '1',
				fontFamily: 'sans-serif',
				backgroundColor: '#000',
				color: '#fff',
				boxShadow: '0 0 0 1px #fff',
				content: `'${prefix}_'`,
			},
			userStyles,
		),
	};

	Object.entries(screens)
		.filter(([screen]) => !ignoredScreens.includes(screen))
		.forEach(([screen]) => {
			components[`@screen ${screen}`] = {
				[`${selector}::before`]: {
					content: `'${prefix}${screen}'`,
				},
			};
		});

	addComponents(components);
};

module.exports = {
<<<<<<< HEAD
  mode: "jit",
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkGray: "#1A1A1A",
        wineRed: "#A61034",
        textBlue: "#1034A6",
        bluredWhite: "#ECF0FD",
      },
      fontFamily: {
        nunito: "'Nunito Sans', sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
=======
	mode: 'jit',
	purge: ['./public/**/*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				darkGray: '#1A1A1A',
				wineRed: '#A61034',
				purplishBlue: { 100: '#ECF0FD', 500: '#1034A6' },
			},
			padding: {
				'1/3': '33.333333%',
				'2/3': '66.6666667%',
			},
			fontFamily: {
				nunito: "'Nunito Sans', sans-serif",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/aspect-ratio'), screenDebugPlugin],
>>>>>>> 915f8042c813e22bddbbdf1de5f1ddbfa79e1650
};
