import React, { useEffect, useRef } from "react";
import MapView from "@arcgis/core/views/MapView.js";
import Map from "@arcgis/core/Map";

function ArcGis() {
  const mapRef = useRef(null);
  useEffect(() => {
    if (!mapRef?.current) return;

    // INITIALISE THE MAP
    const map = new Map({
      basemap: "osm",
    });
    const view = new MapView({
      map: map,
      container: mapRef.current,
      center: [55, 55],
      zoom: 3,
    });
  }, []);
  return (
    <div className="viewDiv" ref={mapRef}>
      arcGis
    </div>
  );
}

export default ArcGis;
