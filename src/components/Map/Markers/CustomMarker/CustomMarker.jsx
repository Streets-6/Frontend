import { Marker } from 'react-leaflet'
import infrastructureIcon from '../../../../assets/images/markers/infrastructure_marker_icon.svg'
import eventIcon from '../../../../assets/images/markers/event_marker_icon.svg'
import { Icon } from 'leaflet'
import MarkerTooltip from './MarkerTooltip/MarkerTooltip'

function CustomMarker({ type, data, eventHandlers }) {
  const icon = new Icon({
    iconUrl: type === 'event' ? eventIcon : infrastructureIcon,
    iconSize: [40, 40],
  })

  return (
    <Marker
      type={type}
      position={data.coordinates}
      icon={icon}
      eventHandlers={eventHandlers}
    >
      <MarkerTooltip data={data} type={type} />
    </Marker>
  )
}

export default CustomMarker
