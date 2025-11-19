import { redirect } from 'next/navigation';
import { getLocale } from 'next-intl/server';

export default async function Home() {
  // Get the default locale and redirect
  const locale = await getLocale();
  redirect(`/${locale}`);
}
