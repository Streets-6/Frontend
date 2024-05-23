interface IChairmanType {
  id: number;
  firstName: string;
  lastName: string;
  jobTitle: string;
  phoneNumber: string;
  email: string;
  vk: string;
  avatarUrl: string;
}

export interface IRegionType {
  id: number;
  geoId: number;
  title: string;
  chairman: IChairmanType;
  infrastructureIds: number[];
  eventsIds: number[];
}

interface IVideoType {
  type: 'horizontal' | 'vertical';
  url: string;
}

export interface IInfrastructureType {
  id: number;
  regionGeoId: number;
  coordinates: [number, number];
  title: string;
  video: IVideoType;
  photo: string[];
  icon: string;
  discipline: string[];
  city: string;
  address: string;
  vk: string;
}

export interface IEventType extends IInfrastructureType {
  description: string;
  startDate: [number, number, number] | Date;
  endDate: [number, number, number] | Date;
}
