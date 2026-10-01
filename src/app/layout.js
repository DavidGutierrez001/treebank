import { Poppins } from "next/font/google";
import { AccessibilityToolbar } from "@/components/accessibility-toolbar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: "TreeBank · Banca en línea accesible",
  description:
    "Interfaz de banca en línea diseñada bajo WCAG 2.2 nivel AA y los principios del Diseño Centrado en el Usuario.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning={true} className={`${poppins.variable}`}>
      <body className="flex min-h-dvh w-full flex-col items-center font-poppins">
        <a className="skip-link" href="#contenido">
          Saltar al contenido principal
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <AccessibilityToolbar />
        </ThemeProvider>
      </body>
    </html>
  );
}