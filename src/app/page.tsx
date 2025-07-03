export const revalidate = 10;

import Link from "next/link";
import flagsmith from "@/utils/flagsmith";

export default async function Home() {
  const flags = await flagsmith.getEnvironmentFlags();
  return (
    <main className="main">
      <div>
        <h2>Hello World</h2>
        <p>Added some random text</p>
      </div>
      <Link href="/about">About</Link>
      <br />
      {flags.isFeatureEnabled("search") && (
        <input type="text" placeholder="Search" />
      )}
    </main>
  );
}
