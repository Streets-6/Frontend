import { projectsMockData } from 'src/utils/mock/projectsMockData'
import { eventsMockData } from '../utils/mock/eventsMockData'
import { infrastructureMockData } from '../utils/mock/infrastructureMockData'
import { regionsMockData } from '../utils/mock/regionsMockData'
import {
  IEventType,
  IInfrastructureType,
  IProjectType,
  IRegionType,
} from './apiTypes'

export const getRegionsData = async () => {
  //regions from server
  const regionsDataFromServer: Array<IRegionType> = regionsMockData
  const res = await Promise.resolve(regionsDataFromServer)

  return res
}

export const getInfrastructureData = async () => {
  //infrastructure from server
  const infrastructureDataFromServer: Array<IInfrastructureType> =
    infrastructureMockData
  const res = await Promise.resolve(infrastructureDataFromServer)

  return res
}

export const getEventsData = async () => {
  //events from server
  const eventsDataFromServer: Array<IEventType> = eventsMockData
  const res = await Promise.resolve(eventsDataFromServer)

  return res
}

export const getProjectsData = async () => {
  //projects from server
  const projectsDataFromServer: Array<IProjectType> = projectsMockData
  const res = await Promise.resolve(projectsDataFromServer)

  return res
}
