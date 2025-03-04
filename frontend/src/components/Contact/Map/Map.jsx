import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ContactForm from '../ContactForm/ContactForm';
const Map = () => {
	return (
		<>
			<MapContainer
				center={[40.4093, 49.8671]} // Bura koordinatlarını yaz (Bakı üçün nümunə)
				zoom={13}
				style={{ height: '400px', width: '100%' }}
			>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			</MapContainer>
		</>
	);
};

export default Map;
