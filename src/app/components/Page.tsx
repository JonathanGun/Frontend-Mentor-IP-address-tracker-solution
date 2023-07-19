"use client"

import Map from "@/components/Map"
import InfoCard, { InfoItem } from "./InfoCard"
import SearchBar from "./SearchBar"
import axios from "axios"
import { useEffect, useState } from "react"
import { LatLngTuple } from "leaflet"

const ClientPage: React.FC = () => {
  const [cardInfo, setCardInfo] = useState<InfoItem[]>([])
  const [coordinate, setCoordinate] = useState<LatLngTuple>([0, 0])

  useEffect(() => {
    fetchIpInfo()
  }, [])

  const fetchIpInfo = (ipAddress?: string) => {
    const API_KEY: string = "at_kKoHZDjutc8FnRrvo4wuTvQbfQKe9"
    const URL: string = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}${ipAddress ? "&ipAddress=" + ipAddress : ""}`
    axios
      .get(URL)
      .then((res) => res.data)
      .then((res) => {
        setCardInfo([
          {
            label: "ip address",
            value: res.ip,
          },
          {
            label: "location",
            value: `${res.location.city}, ${res.location.region}, ${res.location.country}`,
          },
          {
            label: "timezone",
            value: `UTC ${res.location.timezone}`,
          },
          {
            label: "isp",
            value: res.isp,
          },
        ])
        setCoordinate([res.location.lat, res.location.lng])
      })
  }

  return (
    <>
      <div className="bg-blue-600 w-full h-[25vh] z-10"></div>
      <section className="flex flex-col space-y-4 justify-center items-center z-10 absolute top-0 w-full py-4 px-8">
        <p className="text-white sm:text-lg">IP Address Tracker</p>
        <SearchBar onSubmit={fetchIpInfo} />
        <InfoCard infoItems={cardInfo} />
      </section>
      <Map center={coordinate} zoom={10} />
    </>
  )
}

export default ClientPage
