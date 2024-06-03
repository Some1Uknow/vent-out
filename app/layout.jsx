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
        content="ecFmrtBmEYc7GwBQqDdDSV6udtuyh_O0kuEeDj6KEf8"
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
