"use client"

import "leaflet/dist/leaflet.css"
import { MapContainer, MapContainerProps, Marker, TileLayer, useMap } from "react-leaflet"
import { LatLngExpression, LatLngTuple } from "leaflet"

const ClientMap: React.FC<MapContainerProps> = (props) => {
  const [lat, lng] = props.center as LatLngTuple

  function ChangeView({ center, zoom }: { center: LatLngExpression; zoom?: number }) {
    const map = useMap()
    map.setView(center, zoom)
    return null
  }

  return (
    <MapContainer {...props} style={{ height: "100%", width: "100%", position: "absolute", top: "0px", left: "0px", zIndex: "1" }}>
      <ChangeView center={props.center!} zoom={props.zoom} />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {lat && lng && <Marker position={[lat, lng]} />}
    </MapContainer>
  )
}

export default ClientMap
