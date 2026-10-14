import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sai Chakri Edubilli Portfolio",
  description:
    "Portfolio of Sai Chakri, a Computer Science Engineering student interested in full-stack development, software engineering, and machine learning.",
  keywords: [
    "Sai Chakri",
    "Software Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "Machine Learning",
  ],
  authors: [{ name: "Sai Chakri" }],
  openGraph: {
    title: "Sai Chakri Edubilli Portfolio",
    description:
      "Explore my projects, technical skills, experience, and software development journey.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}