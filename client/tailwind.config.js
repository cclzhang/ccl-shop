module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  important: '#root',
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
