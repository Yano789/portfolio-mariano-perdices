import Link from "next/link";

export function TopBar() {
  return (
    <header className="wrap topbar">
      <Link className="home" href="/">Yano</Link>
      <nav aria-label="Sections">
        <Link href="/#work">Work</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}
