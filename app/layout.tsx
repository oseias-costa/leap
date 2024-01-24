"use client";

import StyledComponentsRegistry from "./lib/registry";
import localFont from "next/font/local";
import { GlobalStyle } from "./GlobalStyle";
import Google from "./components/global/Google";
import GoogleBody from "./components/global/GoogleBody";

// export const metadata = {
//   title: "Leap Engenharia Química",
//   description:
//     "Impulsione seu negócio com a Leap. Regularizamos sua Empresa na ANVISA, otimizamos seus processos industriais e trazemos sustentabilidade para sua operação.",
// };

const Mollen = localFont({
  display: "swap",
  src: [
    {
      path: "./font/Mollen-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "./font/Mollen-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/Mollen-LightNarrow.otf",
      weight: "200",
      style: "extraLight",
    },
  ],
  variable: "--font-mollen",
});

function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Leap Engenharia Química</title>
        <meta name="description" content="Impulsione seu negócio com a Leap. Regularizamos sua Empresa na ANVISA, otimizamos seus processos industriais e trazemos sustentabilidade para sua operação." />
        <GlobalStyle />
        <Google />
      </head>
      <body className={`${Mollen.variable}`}>
        <GoogleBody />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

export default RootLayout
