import StyledComponentsRegistry from "./lib/registry";
import localFont from "next/font/local";
import { GlobalStyle } from "./GlobalStyle";

export const metadata = {
  title: "Leap Engenharia Química",
  description:
    "Impulsione seu negócio com a Leap. Regularizamos sua Empresa na ANVISA, otimizamos seus processos industriais e trazemos sustentabilidade para sua operação.",
};

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body className={`${Mollen.variable}`}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
