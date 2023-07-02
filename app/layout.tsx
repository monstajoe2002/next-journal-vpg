import Navbar from "@/components/Navbar";
import "@picocss/pico";

export const metadata = {
  title: "Create Next App",
  description: "Create an app with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
