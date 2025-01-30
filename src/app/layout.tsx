import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Flyff Maps',
  description: "Pacito2 Flyff maps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
