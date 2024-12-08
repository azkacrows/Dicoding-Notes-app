/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['"Source Sans 3"', 'sans-serif'],
            serif: ['"Kaushan Script"', 'cursive'],
        },
        extend: {},
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['black'],
    },
};
