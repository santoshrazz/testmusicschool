import type { Metadata } from "next";
import "./globals.css";
import { NavbarDemo } from "@/Components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "NewBie- A Music Academy",
  description: "Created By Santosh Raaz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black">
        <div className="navBar">
          <NavbarDemo />
        </div>
        {children}
      </body>
    </html>
  );
}
