import { Circle, Popup } from "react-leaflet";
import React from "react";
import numeral from "numeral";

const casesTypeColors = {
	cases: {
		hex: "#CC1034",

		multiplier: 400,
	},
	recovered: {
		hex: "#7dd71d",
		multiplier: 400,
	},
	deaths: {
		hex: "#fb4443",
		multiplier: 2000,
	},
};
export const sortData = data => {
	const sortedData = [...data];
	sortedData.sort((a, b) => {
		if (a.cases > b.cases) {
			return -1;
		} else {
			return 1;
		}
	});
	return sortedData;
};
export const showDataOnMap = (data, casesType = "recovered") =>
	data.map(country => (
		<Circle
			center={[country.countryInfo.lat, country.countryInfo.long]}
			fillOpacity={0.4}
			pathOptions={{
				color: casesTypeColors[casesType].hex,
				fillColor: casesTypeColors[casesType].hex,
			}}
			radius={
				Math.sqrt(country[casesType]) *
				casesTypeColors[casesType].multiplier
			}
			key={country.country}
		>
			<Popup>
				<div className="info-container">
					<div
						className="info-flag"
						style={{
							backgroundImage: `url(${country.countryInfo.flag})`,
						}}
					/>

					<div className="info-name">{country.country}</div>
					<div className="info-confirm">
						Cases:{numeral(country.cases).format("0,0")}
					</div>
					<div className="info-recovered">
						Recovered:{numeral(country.recovered).format("0,0")}
					</div>
					<div className="info-deaths">
						Deaths:{numeral(country.deaths).format("0,0")}
					</div>
				</div>
			</Popup>
		</Circle>
	));
export const prettyPrintStat = stat =>
	stat ? `+${numeral(stat).format("0.0a")}` : "+0";


