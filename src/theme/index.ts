import { extendTheme, type Theme, TypographyProps } from '@chakra-ui/react'
import { Roboto, Righteous, Jua } from 'next/font/google';



const colors = {
    app: {
        grey1: "#F4F4F4",
        grey2: "#C2BEBE",
        grey3: "#444343",
        primary: "var(--blue1)",// blue
        secondary: "#F4F4F4", // half-white
        white: "#FBEFDD",
    },
    blue: {
        500: 'var(--blue1)',
    }


}

const components = {
    // Heading: {
    //     baseStyle: { fontWeight: "200", }
    // } as any,
    Text: {
        baseStyle: { textAlign: 'justify', fontSize: { base: 'md', lg: 'lg' } }
    },
    // Input: {
    //     baseStyle: { field: { fontFamily: 'sans-serif' } }
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
const righteous = Righteous({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const jua = Jua({ subsets: ['latin'], weight: ['400'], style: ['normal'] })
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'], style: ['italic', 'normal'] });

const fonts: Partial<Theme['fonts']> & { jua: string } = {
    jua: jua.style.fontFamily,
    body: roboto.style.fontFamily,
    heading: righteous.style.fontFamily,
    mono: roboto.style.fontFamily,
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

