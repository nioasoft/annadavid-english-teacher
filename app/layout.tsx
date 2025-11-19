import type { Metadata } from "next";
import { Inter, Heebo } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const heebo = Heebo({
  subsets: ["hebrew"],
  variable: "--font-heebo",
});

// Create dynamic metadata based on locale
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return {
    title: locale === 'he' ? 'אנה דוד | מורה לאנגלית' : 'Anna David | English Teacher',
    description: locale === 'he'
      ? 'מורה לאנגלית מוסמכת CELTA המציעה שיעורים וירטואליים אישיים 1-על-1'
      : 'CELTA-certified English teacher offering personalized 1-on-1 virtual lessons',
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'he' ? 'rtl' : 'ltr'}>
      <body className={`${inter.variable} ${heebo.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
