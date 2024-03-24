"use client"
import 'leaflet/dist/leaflet.css'
import styles from '../../page.module.css'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';

const Map = () => {
    const position: LatLngExpression = [52.7378167, 15.2051331]

    return <MapContainer className={styles.map} center={position} zoom={15} scrollWheelZoom={true}>
        <TileLayer
            attribution='Starostwo Powiatowe w Gorzowie Wlkp., Józefa Pankiewicza 5-7, 66-400 Gorzów Wielkopolski'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            className='map-tiles'
        />
        <Marker position={position}>
            <Popup>
            Starostwo Powiatowe w Gorzowie Wlkp., Józefa Pankiewicza 5-7, 66-400 Gorzów Wielkopolski
            </Popup>
        </Marker>
    </MapContainer>
};

export default Map;