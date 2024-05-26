import { IRegionType, IInfrastructureType, IEventType } from '../api/apiTypes'

interface IGeoDataType {
  id: string
  name: string
  bounds: [[number, number], [number, number]]
}

export interface ISelectedRegionType {
  info: IRegionType
  geoData: IGeoDataType
  infrastructure: IInfrastructureType[]
  events: IEventType[]
}

export interface IDisciplineType {
  title: string
  value: string
}
