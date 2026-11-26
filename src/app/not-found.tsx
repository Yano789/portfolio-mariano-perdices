import Link from "next/link";
import { TopBar } from "@/components/TopBar";

export default function NotFound() {
  return (
    <>
      <TopBar />
      <main id="main" className="wrap case">
        <h1>This page doesn&rsquo;t exist.</h1>
        <p className="lede">It may have moved when the site was redesigned.</p>
        <p style={{ marginTop: "2rem" }}>
          <Link className="btn primary" href="/">Go to the homepage</Link>
        </p>
      </main>
    </>
  );
}
