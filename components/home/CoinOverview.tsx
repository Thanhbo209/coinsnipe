import CandlestickChart from "@/components/CandlestickChart";
import { CoinOverviewFallback } from "@/components/home/fallback";
import { fetcher } from "@/lib/coingecko.action";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";

const CoinOverview = async () => {
  try {
    const [coin, coinOHLCData] = await Promise.all([
      fetcher<CoinDetailsData>("/coins/bitcoin", {
        dex_pair_format: "symbol",
      }),
      fetcher<OHLCData[]>("/coins/bitcoin/ohlc", {
        vs_currency: "usd",
        days: 1,
      }),
    ]);

    return (
      <div className="" id="coin-overview">
        <CandlestickChart data={coinOHLCData} coinId="bitcoin">
          <div className="header pt-2">
            {coin && (
              <Image
                src={coin.image.large}
                alt={coin.name}
                width={56}
                height={56}
              />
            )}

            <div className="info">
              <p>
                {coin.name} / {coin.symbol.toUpperCase()}
              </p>
              <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
            </div>
          </div>
        </CandlestickChart>
      </div>
    );
  } catch (e) {
    console.error("Error fetching coin overview:", e);
    return <CoinOverviewFallback />;
  }
};

export default CoinOverview;
