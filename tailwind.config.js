/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                graySublime: "#4D4D56",
                blackSublime: "#18181B",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "5rem",
                },
            },
        },
    },
    plugins: [],
};
