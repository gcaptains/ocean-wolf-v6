/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                obsidian: {
                    DEFAULT: '#050505', // Deep Vantablack
                },
                graphite: {
                    DEFAULT: '#111111', // Matte surfaces
                    light: '#1A1A1A', // Elevated matte
                },
                titanium: {
                    DEFAULT: '#FFFFFF', // High-contrast text
                    muted: '#888888', // Secondary data
                    dark: '#444444', // Tertiary UI lines
                },
                tactical: {
                    red: '#990000', // Subdued warning/active
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            letterSpacing: {
                huge: '0.25em',
                insane: '0.4em'
            },
            boxShadow: {
                'glow': '0 0 20px rgba(255, 255, 255, 0.05)',
                'glow-red': '0 0 20px rgba(153, 0, 0, 0.3)',
            }
        },
    },
    plugins: [],
}
