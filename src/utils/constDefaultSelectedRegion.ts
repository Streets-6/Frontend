import { ISelectedRegionType } from './types'

export const defaultSelectedRegion: ISelectedRegionType = {
  info: {
    id: 0,
    geoId: 0,
    title: 'default',
    chairman: {
      id: 0,
      firstName: 'Keanu',
      lastName: 'Reeves',
      jobTitle: 'good guy',
      phoneNumber: '+70000000000',
      email: 'example@mail.com',
      vk: 'example.com',
      avatarUrl: '',
    },
    infrastructureIds: [],
    eventsIds: [],
  },
  geoData: {
    id: 'default',
    name: 'default',
    bounds: [
      [0, 0],
      [0, 0],
    ],
  },
  infrastructure: [],
  events: [],
}
