import NavBar from "../components/navbar/NavBar";
import SideBar from "../components/sidebar/SideBar";
import "./globals.css";

export const metadata = {
  title: "PlayVerse",
  description: "to show free games",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <SideBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
