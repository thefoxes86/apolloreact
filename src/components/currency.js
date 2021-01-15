import React from "react";
import { useQuery, gql } from "@apollo/client";

export default function Currency() {
  const GET_ROCKETS = gql`
    query GetExchangeRate {
      rates(currency: "EUR") {
        currency
        name
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ROCKETS);

  if (loading) return <h2>Loading...</h2>;
  if (error) return `Errore ${error.message}`;

  return (
    <ul>
      {data.rates.map(({ currency }) => (
        <li key={currency}>Currency: {currency}</li>
      ))}
    </ul>
  );
}
