import { redirect } from 'next/navigation';

export default async function Home() {
  // Redirect to English version
  redirect('/en');
}
