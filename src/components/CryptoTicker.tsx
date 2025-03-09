import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { motion } from 'framer-motion';

interface CryptoPrice {
  id: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export const CryptoTicker = () => {
  const { data, isLoading } = useQuery<CryptoPrice[]>(
    'cryptoPrices',
    async () => {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&sparkline=false'
      );
      return response.data;
    },
    {
      refetchInterval: 30000, // Refresh every 30 seconds
    }
  );

  if (isLoading) return <div className="text-white">Loading prices...</div>;

  return (
    <div className="w-full bg-dark-green-900/50 backdrop-blur-sm py-2">
      <div className="container mx-auto">
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {data?.map((crypto) => (
              <div key={crypto.id} className="inline-flex items-center gap-2">
                <span className="text-white font-medium">{crypto.symbol.toUpperCase()}</span>
                <span className="text-white">${crypto.current_price.toLocaleString()}</span>
                <span className={crypto.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'}>
                  {crypto.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};