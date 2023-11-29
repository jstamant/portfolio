/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./index.html'],
    theme: {
        fontFamily: {
            'title': ['Noto Sans', ...defaultTheme.fontFamily.sans],
        },
        extend: {
            colors: {
                olivine: {
                    '50': '#f6f8ed',
                    '100': '#e9f0d7',
                    '200': '#d4e3b3',
                    '300': '#b9d086',
                    '400': '#a7c270',
                    '500': '#80a042',
                    '600': '#637f31',
                    '700': '#4c6229',
                    '800': '#3f4f25',
                    '900': '#374423',
                    '950': '#1b240f',
                }
            }
        },
    },
    plugins: [],
};
