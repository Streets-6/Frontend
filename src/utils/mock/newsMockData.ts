import graffiti from 'src/assets/images/mock/photos/news/graffitiMovies.jpg'
import trends from 'src/assets/images/mock/photos/news/fashionTrends.jpg'
import cardo from 'src/assets/images/mock/photos/news/cardoWinners.jpg'
import yamal from 'src/assets/images/mock/photos/news/fastifalInYamal.jpg'
import forum from 'src/assets/images/mock/photos/news/forum.jpg'
import { INewsType } from 'src/api/apiTypes'

export const newsMockData: INewsType[] = [
  {
    id: 1,
    title: 'Подборка фильмов про граффити',
    imageUrl: graffiti,
  },
  {
    id: 2,
    title: 'Врываемся в модные тренды',
    imageUrl: trends,
  },
  {
    id: 3,
    title: 'Победители грантового конкурса «КАРДО»',
    imageUrl: cardo,
  },
  {
    id: 4,
    title: 'Фестиваль уличной культуры и спорта на Ямале',
    imageUrl: yamal,
  },
  {
    id: 5,
    title: 'Форум «Улицы России» в Ставрополе',
    imageUrl: forum,
  },
  {
    id: 6,
    title: 'Победители грантового конкурса «КАРДО»',
    imageUrl: cardo,
  },
  {
    id: 7,
    title: 'Подборка фильмов про граффити',
    imageUrl: graffiti,
  },
  {
    id: 8,
    title: 'Фестиваль уличной культуры и спорта на Ямале',
    imageUrl: yamal,
  },
  {
    id: 9,
    title: 'Врываемся в модные тренды',
    imageUrl: trends,
  },
]
