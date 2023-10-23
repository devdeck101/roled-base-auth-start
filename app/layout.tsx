import NavBar from "@/components/nav-bar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark">
        <NavBar />
        <main className="grid h-screen w-screen place-content-center">
          {children}
        </main>
      </body>
    </html>
  );
}
