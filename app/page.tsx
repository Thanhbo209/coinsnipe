import Categories from "@/components/Categories";
import CoinOverview from "@/components/home/CoinOverview";
import {
  CategoriesFallback,
  CoinOverviewFallback,
  TrendingCoinsFallback,
} from "@/components/home/fallback";
import TrendingCoin from "@/components/home/TrendingCoin";
import { Suspense } from "react";

const Page = async () => {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview />
        </Suspense>

        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoin />
        </Suspense>
      </section>

      <section className="w-full mt-7 space-y-4">
        <Suspense fallback={<CategoriesFallback />}></Suspense>
        <Categories />
      </section>
    </main>
  );
};

export default Page;
