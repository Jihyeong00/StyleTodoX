"use client"

import Header from "@/app/_components/layout/Header";
import Footer from "@/app/_components/layout/Footer";
import theme from "@/styles/theme";
import StyledComponentsRegistry from "@/lib/registry";
import {ThemeProvider} from "styled-components";
import {Reset} from "styled-reset";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Header/>
        <StyledComponentsRegistry>
            <ThemeProvider theme={theme}>
                <Reset/>
                {children}
            </ThemeProvider>
        </StyledComponentsRegistry>
        <Footer/>
        </body>
        </html>
    );
}
