import { NextAuthProvider } from "./Provider";
import "./globals.css";
import Headbar from "@/components/Headbar";

export const metadata = {
  title: "Vent Out",
  description: "A platform for venting out your thoughts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="1PPU6Cx074TD5NKK7Rf4ELeYeGl2KYo9ixYwi4q2Qfc"
      />
      <body>
        <div>
          <NextAuthProvider>
            <Headbar />
            <main>{children}</main>
          </NextAuthProvider>
        </div>
      </body>
    </html>
  );
}
