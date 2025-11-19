import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { clsx } from "@/utils/clsx";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import theme from "@/theme";
import { ThemeProvider } from "@mui/material";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Multi Step Form Demo",
  description: "Multi Step Form Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <body className={clsx(poppins.className, "min-h-full flex flex-col")}>
            {children}
          </body>
        </ThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}
