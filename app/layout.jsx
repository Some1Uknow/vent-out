import { NextAuthProvider } from "./Provider";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Vent Out",
  description: "A website for venting out your thoughts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <NextAuthProvider>
            
              <Navbar />
           
            <main>{children}</main>
          </NextAuthProvider>
        </div>
      </body>
    </html>
  );
}
