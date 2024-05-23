import { useEffect } from 'react';
import { useMapEvents } from 'react-leaflet';
import { useAppDispatch, useAppSelector } from '../../../service/hooks';
import { getSelectedRegion } from '../../../service/slices/regionsSlice';
import {
  getIsEventButtonClicked,
  getIsInfrastructureButtonClicked,
  setIsEventButtonClicked,
  setIsEventMarkersVisible,
  setIsInfrastructureButtonClicked,
  setIsInfrastructureMarkersVisible,
  setIsMapDefaultView,
  setMapInstance,
} from '../../../service/slices/mapSlice';
import { INITIAL_ZOOM_LEVEL } from '../../../utils/constants';

function MapControl() {
  const dispatch = useAppDispatch();
  const selectedRegion = useAppSelector(getSelectedRegion);
  const isInfrastructureButtonClicked = useAppSelector(getIsInfrastructureButtonClicked);
  const isEventButtonClicked = useAppSelector(getIsEventButtonClicked);
  const map = useMapEvents({
    moveend: () => {
      if (isInfrastructureButtonClicked) {
        dispatch(setIsInfrastructureMarkersVisible(true));
        dispatch(setIsMapDefaultView(false));
        dispatch(setIsInfrastructureButtonClicked(false));
        map.setMaxBounds(selectedRegion.geoData.bounds);
        map.setMinZoom(map.getZoom());
      }
      if (isEventButtonClicked) {
        dispatch(setIsEventMarkersVisible(true));
        dispatch(setIsMapDefaultView(false));
        dispatch(setIsEventButtonClicked(false));
        map.setMaxBounds(selectedRegion.geoData.bounds);
        map.setMinZoom(map.getZoom());
      }
    },
    zoomend: () => {
      if (map.getZoom() === INITIAL_ZOOM_LEVEL) {
        dispatch(setIsInfrastructureMarkersVisible(false));
        dispatch(setIsEventMarkersVisible(false));
        dispatch(setIsMapDefaultView(true));
      }
    },
  });

  useEffect(() => {
    dispatch(setMapInstance(map));
    // disable eslint rule because we need to set map instance only once when component render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

export default MapControl;
