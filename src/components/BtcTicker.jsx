import React, { useEffect, useState } from "react";

const URL = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1";

function Sparkline({ data, up }) {
  const w = 80;
  const h = 28;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const pts = data
    .map((v, i) => `${((i / (data.length - 1)) * w).toFixed(1)},${(h - ((v - min) / (max - min || 1)) * h).toFixed(1)}`)
    .join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      <polyline fill="none" stroke={up ? "#16A34A" : "#EF4444"} strokeWidth="1.8" strokeLinejoin="round" points={pts} />
    </svg>
  );
}

export default function BtcTicker() {
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    let active = true;
    const load = async () => {
      try {
        const res = await fetch(URL);
        if (!res.ok) return;
        const json = await res.json();
        const all = json.prices.map((p) => p[1]);
        const step = Math.max(1, Math.floor(all.length / 40));
        if (active) setPrices(all.filter((_, i) => i % step === 0 || i === all.length - 1));
      } catch {
        // se conserva el último dato
      }
    };
    load();
    const id = setInterval(load, 60000);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, []);

  if (!prices) return <div className="h-10 w-40 rounded-md bg-white/5 animate-pulse" />;

  const last = prices[prices.length - 1];
  const change = ((last - prices[0]) / prices[0]) * 100;
  const up = change >= 0;

  return (
    <a
      href="https://www.coingecko.com/es/monedas/bitcoin"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 rounded-lg border border-ui-border bg-ui-bg2 px-3 py-1.5 transition hover:border-btc/60"
      aria-label="Precio de Bitcoin"
    >
      <span className="text-lg font-bold text-btc">₿</span>
      <div className="leading-tight">
        <p className="text-sm font-bold text-ui-text">
          ${last.toLocaleString("en-US", { maximumFractionDigits: 0 })}
        </p>
        <p className={`text-xs font-semibold ${up ? "text-ui-success" : "text-red-500"}`}>
          {up ? "▲" : "▼"} {Math.abs(change).toFixed(2)}% 24h
        </p>
      </div>
      <div className="hidden sm:block">
        <Sparkline data={prices} up={up} />
      </div>
    </a>
  );
}
