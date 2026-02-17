import "./globals.css";

export const metadata = {
  title: "Flashly",
  description: "Flashcard quiz app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full min-h-screen m-0">
        {children}
      </body>
    </html>
  );
}
