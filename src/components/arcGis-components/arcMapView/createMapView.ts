import MapView from "@arcgis/core/views/MapView.js";
import Map from "@arcgis/core/Map";
export const createMapView = (container: HTMLDivElement) => {

    // INITIALISE THE MAP
    const map = new Map({
        basemap: "osm",
    });
    return new MapView({
        map: map,
        container: container,
        center: [55, 55],
        zoom: 3,
    });
}