module.exports = {
  purge: ['./pages/**/*.{js,vue}', './components/**/*.{js,vue}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      height: {
        848: '53rem',
      },
      width: {
        99: 'calc(100% - 16rem);' /* get the width of the main content from lg:viewport by dividing
        (the total width by the width of the side navigation) */,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
