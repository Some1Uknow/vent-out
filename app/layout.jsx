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
          <div>
            <Navbar />
          </div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
