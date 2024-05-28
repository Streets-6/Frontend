import { ISelectItemType } from './types'

// disciplines for select in FilterBar component
export const disciplines: ISelectItemType[] = [
  { title: 'Street art', value: 'Street art' },
  { title: 'Parkour', value: 'Parkour' },
  { title: 'Workout', value: 'Workout' },
  { title: 'Freerun', value: 'Freerun' },
  { title: 'Hip-hop dance', value: 'Hip-hop dance' },
  { title: 'Tricking', value: 'Tricking' },
  { title: 'Rap', value: 'Rap' },
  { title: 'Breaking', value: 'Breaking' },
  { title: 'BMX', value: 'BMX' },
  { title: 'Skateboarding', value: 'Skateboarding' },
  { title: 'Scoot', value: 'Scoot' },
]

//constants for Map component
export const MAP_CENTER_COORDINATES: number[] = [
  63.46511262786506, 104.30973007984623,
]
export const INITIAL_ZOOM_LEVEL: number = 3.35
export const MAX_ZOOM_LEVEL: number = 17.45
export const ZOOM_SNAP: number = 0.05
export const ZOOM_DELTA: number = 0.5
export const MAX_BOUNDS_VISCOSITY: number = 1.0
export const MARKER_ZOOM_LEVEL: number = 15
export const INITIAL_OUTER_BOUNDS: number[][] = [
  // nortwest lat, lng, southeast lat, lng
  [78.78342247344216, 16.391207004780426],
  [30.993447828991535, 192.23305316425729],
]

// visible completed projects in Projects component
export const VISIBLE_PROJECTS_COUNT: number = 3

// visible event and increment in SelectedRegion component
export const DEFAULT_VISIBLE_EVENTS: number = 3
export const VISIBLE_EVENTS_INCREMENT: number = 3

// visible infrastructure and increment in SelectedRegion component
export const DEFAULT_VISIBLE_INFRASTRUCTURE: number = 4
export const VISIBLE_INFRASTRUCTURE_INCREMENT: number = 4
