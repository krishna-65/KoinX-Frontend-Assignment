import axios from 'axios';

export const fetchBitcoinPrice = async () => {
  const response = await axios.get(
    'https://api.coingecko.com/api/v3/simple/price',
    {
      params: {
        ids: 'bitcoin',
        vs_currencies: 'inr,usd',
        include_24hr_change: true,
      },
    }
  );
  return response.data.bitcoin;
};

export const fetchTrendingCoins = async () => {
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/search/trending'
    );
    return response.data.coins;
  };
  