"use client";
import localFont from "next/font/local";
import "./globals.css";
import { WalletProvider } from "./connectWallet";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });



export default function RootLayout({ children }) {
  
  
  return (
    <html lang="en">
      <body className={` antialiased bg-[#6c83d6] `}>      
          <WalletProvider>
              {children}
          </WalletProvider>
      </body>
    </html>
  );
}