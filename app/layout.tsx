import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prajwal Jagtap | Data Engineer Portfolio",
  description: "Portfolio of Prajwal Jagtap, a Data Engineer specializing in scalable data pipelines and cloud architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
