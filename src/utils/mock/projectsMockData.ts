import sportBaza from 'src/assets/images/mock/photos/sportBaza.jpg'
import streetForAll from 'src/assets/images/mock/photos/streetForAll.jpg'
import yamalFestival from 'src/assets/images/mock/photos/yamalFestival.jpg'
import humanitarity from 'src/assets/images/mock/photos/humanitary.jpg'
import { IProjectType } from 'src/api/apiTypes'

export const projectsMockData: IProjectType[] = [
  {
    id: 1,
    status: 'completed',
    date: [2024, 1, 1],
    title: 'Спортбаза',
    description: 'Мощный проект в сфере спорта',
    imageUrl: sportBaza,
  },
  {
    id: 2,
    status: 'completed',
    date: [2023, 10, 25],
    title: 'Улицы для всех',
    description: 'Образовательный проект',
    imageUrl: streetForAll,
  },
  {
    id: 3,
    status: 'completed',
    date: [2023, 5, 20],
    title: 'Фестиваль на Ямале',
    description: 'Уличная культура и спорт',
    imageUrl: yamalFestival,
  },
  {
    id: 4,
    status: 'current',
    date: [2024, 6, 21],
    title: 'Сбор гуманитарной помощи',
    description:
      'В каждом регионе нашей страны организован сбор гуманитарной помощт для пострадавших от наводнения',
    imageUrl: humanitarity,
  },
]
