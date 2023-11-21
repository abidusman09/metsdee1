import Provider from "@/components/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Orbitron, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

const orbitron = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | MetaDee",
    default: "MetaDee",
  },
  description: "Your ultimate AI companion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, orbitron.variable)}>
        <Provider>
          <Toaster richColors position="bottom-right" />
          <Navbar />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
