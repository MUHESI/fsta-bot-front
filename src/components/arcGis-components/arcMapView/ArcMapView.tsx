import React, { useEffect, useRef } from "react";
import { createMapView } from "../../arcGis-SDK/";
import "./styles.css";

export function ArcMapView() {
  const mapRef = useRef(null);
  useEffect(() => {
    if (!mapRef?.current) return;
    const view = createMapView(mapRef.current);
    return () => view && view.destroy();
  }, []);
  return <div className="viewDiv" ref={mapRef}></div>;
}
