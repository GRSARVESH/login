import { Marker, Popup } from 'react-leaflet';
import React from 'react'
import { MapContainer as LeafletMap, TileLayer } from "react-leaflet";
import './Map.css'
import {geolocated} from 'react-geolocated';

const DEFAULT_LATITUDE = 12.95680;
const DEFUALT_LONGITUDE = 77.58330;
class Map extends React.Component{
    render()
    {
        const latitude = this.props.coords?this.props.coords.latitude:DEFAULT_LATITUDE;
        const longitude = this.props.coords?this.props.coords.longitude:DEFUALT_LONGITUDE;
        return (
            <div className="leaflet-container">
                <LeafletMap center={[latitude,longitude]} zoom={12}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {
                !this.props.coords?
                <div className="loading">Loading</div>
                :
                <Marker
                position={[latitude,longitude]}>
                    <Popup>
                        You are here
                        </Popup>
                </Marker>
            }
          </LeafletMap>
            </div>
        )
    }
}
export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(Map);
