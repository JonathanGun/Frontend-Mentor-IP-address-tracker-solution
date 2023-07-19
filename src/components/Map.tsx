"use client"

import { useEffect, useState } from "react"
import { MapContainerProps } from "react-leaflet"

const Map: React.FC<MapContainerProps> = (props) => {
  const [Client, setClient] = useState<React.FC>()

  useEffect(() => {
    ;(async () => {
      if (typeof global.window !== "undefined") {
        const newClient = (await import("./ClientMap")).default
        setClient(() => newClient)
      }
    })()
  }, [])

  if (typeof global.window === "undefined" || !Client) {
    return null
  }

  return Client ? <Client {...props} /> : null
}

export default Map
