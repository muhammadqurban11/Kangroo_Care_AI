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
        halfWhite: "#F4F4F4"

    },
    white: {
        500: '#FBEFDD',

    },
    halfwhite: {

    },

    blue: {
        600: '#286AA3',

    },

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

