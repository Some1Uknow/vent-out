import { NextAuthProvider } from "./Provider";
import "./globals.css";
import Headbar from "@/components/Headbar";

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
            <Headbar />
            <main>{children}</main>
          </NextAuthProvider>
        </div>
      </body>
    </html>
  );
}
