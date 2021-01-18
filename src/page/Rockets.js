import React from "react";
import { useQuery, gql } from "@apollo/client";
import DrawerHeader from "../components/DrawerHeader";

export default function Launches() {
  const GET_ROCKETS = gql`
    {
      launchesPast(limit: 5) {
        mission_name
        launch_date_local
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_ROCKETS);

  if (loading) return <h2>Loading...</h2>;
  if (error) return `Errore ${error.message}`;

  return (
    <React.Fragment>
      <DrawerHeader/>
    <ul>
      {data.launchesPast.map(({ mission_name }) => (
        <li key={mission_name}>Mission Name: {mission_name}</li>
      ))}
    </ul>
    </React.Fragment>
  );
}
