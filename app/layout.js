import './globals.css';

export const metadata = {
  title: 'Aditya Sai Sontena — Technical Lead & Full-Stack Developer',
  description: 'Portfolio of Aditya Sai Sontena — technical lead, full-stack developer, and open-source contributor.',
  metadataBase: new URL('https://portfolio-pied-psi-974btwl6ie.vercel.app')
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
