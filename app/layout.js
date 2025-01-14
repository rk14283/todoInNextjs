import Navbar from "/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
//children for all components of our application
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>
          {`
             body {
              background-color: #6495ED; /* Hexadecimal color code for blue */
              /* Tailwind CSS classes for blue background */
              @apply bg-blue-400;
            }
          `}
        </style>
      </head>
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto p-4">
          <Navbar />
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
