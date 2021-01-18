import React from "react";
import { useQuery, gql } from "@apollo/client";

export default function Launches() {
  const GET_ROCKETS = gql`
    {
      rockets {
        active
        boosters
        company
        cost_per_launch
        country
        description
        landing_legs {
          material
          number
        }
        stages
        name
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ROCKETS);

  if (loading) return <h2>Loading...</h2>;
  if (error) return `Errore ${error.message}`;

  return (
    <React.Fragment>
      <ul>
        {data.rockets.map(({ name }) => (
          <li key={name}>Mission Name: {name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}
