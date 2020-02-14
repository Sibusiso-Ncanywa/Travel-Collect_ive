import React from "react";
import Loading from "./loading";
import { withLocationConsumer } from "../context";
import LocationList from "./locationList";

function LocationContainer({ context }) {
  const { loading, locations } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <LocationList locations={locations} />
    </>
  );
}

export default withLocationConsumer(LocationContainer);
