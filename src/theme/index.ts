import { extendTheme, type Theme, TypographyProps } from '@chakra-ui/react'
import { Raleway, Alice } from 'next/font/google';


const colors = {
    app: {
        black: "var(--black)",
        grey1: "#7a7a7a",
        grey2: "#e9e9e9",
        grey3: "#222324",
        maroon1: "#620a34",
        maroon2: "#54092C",
        maroon3: "#3C061F",
        yellow1: "#fac113",
        yellow2: "#d09e02",
        blue: "286AA3",
        white: "#FBEFDD",

    },
    white: {
        500: '#FBEFDD',

    },
    maroon: {
        // 100: '#fac113',
        // 200: '#fac113',
        // 300: '#fac113',
        // 400: '#fac113',
        500: '#620a34', // main color
        600: '#54092C', // hover color
        700: '#3C061F', // active color
        // 800: '#fac113',
        // 900: '#fac113',
        // 1000: '#fac113',
    },
    blue: {
        600: '#286AA3',

    },
    grey: {
        500: '#E0E0E0', // main color
        600: '#C0C0C0', // hover color
        700: '#A0A0A0', // active color
    },
    yellow: {
        400: '#fac113', // main color
        500: '#d09e02', // hover color
        600: '#B28902', // active color
    }
}

const components = {
    // Heading: {
    //     baseStyle: { fontWeight: "200", }
    // } as any,
    Text: {
        baseStyle: { textAlign: 'justify', fontSize: { base: 'md', lg: 'lg' } }
    },
    Input: {
        baseStyle: { field: { fontFamily: 'sans-serif' } }
    }
    // Button: {
    // sizes: {
    //     lg: { fontSize: "16px", h: "50px", minW: "182px", p: "16px 30px 14px" },
    //     md: { fontSize: "14px", h: "46px", minW: "162px", p: "16px 30px 14px" },
    //     sm: { fontSize: "12px", h: "42px", minW: "154px", p: "16px 30px 14px" },
    //     xs: { fontSize: "12px", h: "39px", minW: "115px", p: "13px 20px 12px" },
    // } as any
    // }

}


// https://chakra-ui.com/docs/styled-system/text-and-layer-styles
const textStyles: { [k: string]: TypographyProps } = {

}

export const breakpoints = {
    xs: "320px",
    sm: "375px",
    md: "425px",
    lg: "768px",
    xl: "1024px",
    "2xl": "1440px",
}

const raleway = Raleway({ subsets: ['latin'], weight: ['500', '600', '700', '800', '900'], style: ['italic', 'normal'] });
const alice = Alice({ subsets: ['latin'], weight: ['400'], });
const fonts: Partial<Theme['fonts']> & { alice: string } = {
    alice: alice.style.fontFamily,
    body: raleway.style.fontFamily,
    heading: raleway.style.fontFamily,
    mono: raleway.style.fontFamily,
}

const config: Partial<Theme['config']> = {
    useSystemColorMode: false,
    // disableTransitionOnChange: false, 
    initialColorMode: "light",


}

export const theme = extendTheme({
    config,
    colors, components, breakpoints, textStyles, fonts
})

