module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx}"],
    safelist: [
        "bg-bug",
        "bg-dark",
        "bg-dragon",
        "bg-electric",
        "bg-fairy",
        "bg-fighting",
        "bg-fire",
        "bg-flying",
        "bg-ghost",
        "bg-grass",
        "bg-ground",
        "bg-ice",
        "bg-normal",
        "bg-poison",
        "bg-psychic",
        "bg-rock",
        "bg-steel",
        "bg-water"
    ],
    theme: {
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            "bug": "#a7b71d",
            "dark": "#3b2c22",
            "dragon": "#3b2c22",
            "electric": "#fcbb17",
            "fairy": "#f5aef5",
            "fighting": "#7e321b",
            "fire": "#ed400e",
            "flying": "#8094e7",
            "ghost": "#5f5fb2",
            "grass": "#9fd671",
            "ground": "#d8b862",
            "ice": "#6dd3f5",
            "normal": "#c6c0b8",
            "poison": "#944695",
            "psychic": "#ec4780",
            "rock": "#b1994f",
            "steel": "#b1b1c0",
            "water": "#257bd2"
        },
    },
    daisyui: {
        themes: [{
            mytheme: {
                primary: "#e11d48",

                secondary: "#e8496c",

                accent: "#C149AD",

                neutral: "#021431",

                "base-100": "#FFFFFF",

                info: "#1de1b6",

                success: "#aae11d",

                warning: "#EFD8BD",

                error: "#E58B8B"
            }
        }]
    },
    plugins: [require("daisyui")],
};