import "@/app/globals.css";
import Header from "@/components/Header";

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="en">
   <body className="body-block">
    <Header />

    {children}
    <footer className="footer-block">FOOTER</footer>
   </body>
  </html>
 );
}
