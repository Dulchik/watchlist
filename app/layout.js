import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="sunset">
      <body className={`${inter.className}`} data-theme="sunset">
        {children}
      </body>
    </html>
  );
}
