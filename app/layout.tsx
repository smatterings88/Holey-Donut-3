import Image from 'next/image';
import ContactButton from './components/ContactButton';
import "./globals.css";
import { headers } from 'next/headers';

export const metadata = {
  title: "Zenware Engage Demo",
  description: "Demonstration of using the Ultravox API to create a call with an AI agent.",
};

export async function generateHeaders() {
  const headers = new Headers();
  headers.set('Content-Security-Policy', "frame-ancestors 'self' https://zenwareai.com http://localhost:* https://localhost:*");
  return headers;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Fathom - beautiful, simple website analytics --> */}
        <script src="https://cdn.usefathom.com/script.js" data-site="ONYOCTXK" defer></script>
        {/* <!-- / Fathom --> */}
      </head>
      <body className="bg-black text-white">
        <div className="flex mx-auto justify-between my-4 max-w-[1206px]">
          <Image
            src="https://storage.googleapis.com/msgsndr/8z5Gg7gaWTL8QZVd4Hqc/media/67e40e55c93f6375ff426ff6.png"
            alt="Logo"
            width={200}
            height={50}
            priority
            unoptimized
          />
          <ContactButton />
        </div>
        {children}
      </body>
    </html>
  );
}