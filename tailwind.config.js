/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./**/*.html'],
    theme: {
        fontFamily: {
            'sans': ['"Source Sans 3"', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            backgroundImage: {
                'pattern': "linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url('/bg.svg')",
            },
            colors: {
                'theme': {
                    '50': '#f2f7f3',
                    '100': '#e0ebe0',
                    '200': '#c3d7c6',
                    '300': '#9bbaa1',
                    '400': '#6f9878',
                    '500': '#4f7a5a',
                    '600': '#3b6045',
                    '700': '#2f4d38',
                    '800': '#273e2e',
                    '900': '#213327',
                    '950': '#121c16',
                },
            }
        },
    },
    plugins: [],
};
