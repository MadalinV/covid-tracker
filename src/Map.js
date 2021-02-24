import React from "react";
import "./map.css";
import { MapContainer as LeafletMap, TileLayer, useMap } from "react-leaflet";
import { showDataOnMap } from "./util";

const ChangeMapView = ({ coords }) => {
	const map = useMap();
	map.setView([coords.lat, coords.lng], map.getZoom());

	return null;
};

function Map({ countries, casesType, center, zoom , key}) {
	return (
		<div className="map" >
			<LeafletMap center={center} zoom={zoom}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='$copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					
				/>
				{showDataOnMap(countries, casesType)}
				<ChangeMapView coords={center} />
			</LeafletMap>
		</div>
	);
}

export default Map;
