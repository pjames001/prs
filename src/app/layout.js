import LenisProvider from "@/utils/LenisProvider";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "My Client Layout Page",
  description: "This is my client layout metadata",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-white overflow-x-hidden`}
      >
        <Navbar />
        <LenisProvider>
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
