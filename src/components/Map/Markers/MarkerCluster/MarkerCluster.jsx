import MarkerClusterGroup from 'react-leaflet-cluster';
import styles from './MarkerCluster.module.scss';
import { divIcon, point } from 'leaflet';

function MarkerCluster(props) {
  const createCustomClusterIcon = (cluster) => {
    const markers = cluster.getAllChildMarkers();
    if (markers.length === 0) {
      return new divIcon({
        html: `<span></span>`,
        className: `${styles.markerCluster__hidden}`,
        iconSize: point(0, 0, false),
      });
    } else {
      const firstMarkerType = markers[0].options.type;
      const hasMarkersSameType = markers.every((item) => item.options.type === firstMarkerType);

      return new divIcon({
        html: `<div>${cluster.getChildCount()}</div>`,
        className: `${styles.markerCluster} ${
          hasMarkersSameType
            ? firstMarkerType === 'infrastructure'
              ? styles.markerCluster_icon_infrastructure
              : styles.markerCluster_icon_event
            : styles.markerCluster_icon_mix
        }`,
        iconSize: point(hasMarkersSameType ? 40 : 77, 40, false),
      });
    }
  };

  return (
    <MarkerClusterGroup
      chunkedLoading
      iconCreateFunction={createCustomClusterIcon}
      showCoverageOnHover={false}
      spiderfyDistanceMultiplier={2}
    >
      {props.children}
    </MarkerClusterGroup>
  );
}

export default MarkerCluster;
