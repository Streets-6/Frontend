import { IRegionType, IInfrastructureType, IEventType } from '../api/apiTypes'

interface IGeoDataType {
  id: string
  name: string
  bounds?: number[][]
}

export interface ISelectedRegionType {
  info: IRegionType
  geoData: IGeoDataType
  infrastructure: IInfrastructureType[]
  events: IEventType[]
}

export interface ISelectItemType {
  title: string
  value: string
}

export interface IDisciplineType {
  id: number
  title: string
  description: string
  imageUrl: string
}
