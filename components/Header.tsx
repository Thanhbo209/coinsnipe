"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <header>
      <div className="main-container inner">
        <div className="inner gap-3">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="CoinSnipe Logo"
              width={40}
              height={40}
            />
          </Link>
          <p className="text-xl font-semibold">CoinSnipe</p>
        </div>

        <nav>
          <Link
            href="/"
            className={cn("nav-link", {
              "is-active": pathname === "/",
              "is-home": true,
            })}
          >
            Home
          </Link>
          <Link href="/">Search</Link>
          <Link
            href="/coins"
            className={cn("nav-link", {
              "is-active": pathname === "/coins",
            })}
          >
            All Coins
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
