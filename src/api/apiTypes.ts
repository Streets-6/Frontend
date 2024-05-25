interface IChairmanType {
  id: number
  firstName: string
  lastName: string
  jobTitle: string
  phoneNumber: string
  email: string
  vk: string
  avatarUrl: string
}

export interface IRegionType {
  id: number
  geoId: number
  title: string
  chairman: IChairmanType
  infrastructureIds: number[]
  eventsIds: number[]
}

interface IVideoType {
  type: 'horizontal' | 'vertical'
  url: string
}

export interface IInfrastructureType {
  id: number
  regionGeoId: number
  coordinates: [number, number]
  title: string
  video: IVideoType
  photo: string[]
  icon: string
  discipline: string[]
  city: string
  address: string
  vk: string
}

export interface IEventType extends IInfrastructureType {
  description: string
  startDate: [number, number, number]
  endDate: [number, number, number]
}

export type TProjectStatus = 'completed' | 'current'

export interface IProjectType {
  id: number
  status: TProjectStatus
  date: [number, number, number]
  title: string
  description: string
  imageUrl: string
}

export interface INewsType {
  id: number
  title: string
  imageUrl: string
}
