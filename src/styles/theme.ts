import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        highlight: {
            "900": "#FFBA08",
        },
        dark: {
            "900": "#47585B"
        },
        light: {
            "100":"#DADADA", 
            "50": "#F5F8FA"
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    }
})