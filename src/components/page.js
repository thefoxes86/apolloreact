import React from "react";
import { useQuery, gql } from "@apollo/client";

export default function Page(props) {
  const EXCHANGE_RATE = gql`
    query GetExchangeRates {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `;

  const { loading, error, data } = useQuery(EXCHANGE_RATE);

  if (loading) return <h2> Loading...</h2>;
  if (error) return <h2>Error</h2>;

  return (
    <ul>
      {data.rates.map(({ currency, rate }) => (
        <li key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </li>
      ))}
    </ul>
  );
}
