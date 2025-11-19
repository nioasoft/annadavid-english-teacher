import { permanentRedirect } from 'next/navigation';

export default async function Home() {
  // Permanent redirect to English version for SEO
  permanentRedirect('/en');
}
