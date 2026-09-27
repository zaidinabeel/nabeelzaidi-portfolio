import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nabeel Zaidi | Full-Stack Web Developer & UI Engineer",
  description: "Specialized in building high-performance Next.js portfolio websites, web applications, and conversion-focused digital experiences for founders and businesses worldwide.",
  keywords: ["Web Developer", "Next.js", "React", "Portfolio Designer", "Tailwind CSS", "Frontend Engineer", "Full-Stack Developer"],
  authors: [{ name: "Nabeel Zaidi" }],
  openGraph: {
    title: "Nabeel Zaidi | Full-Stack Web Developer & UI Engineer",
    description: "Specialized in building high-performance Next.js portfolio websites and modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#fafbfc] text-slate-900 min-h-screen selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
