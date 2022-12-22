import React,{useEffect} from 'react';
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";


const position = [51.505, -0.09];

const icon = L.icon({
    iconUrl:"./placeholder.png",
    iconSize:[38,38]
})

function ResetCenterView(props){
  const {selectPosition} = props;
  const map = useMap();

  useEffect(()=>{
    if(selectPosition) {
      map.setView(
        L.latLng(selectPosition.lat, selectPosition?.lon),
        map.getZoom(),
        {
          animate: true
        }
      )
    }
  },[selectPosition]);

  

  return null;
}


const Map = (props) => {

  const {selectPosition} = props;
  const locationSelect = [selectPosition?.lat, selectPosition?.lon];

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width:"100%", height:"100%"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=qaWnde732Rx3Fncv9f6U"
        />
        {
          selectPosition && (
            <Marker position={locationSelect} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
          )
        }
        <ResetCenterView selectPosition={selectPosition}/>
      </MapContainer>
    );
};

export default Map;
