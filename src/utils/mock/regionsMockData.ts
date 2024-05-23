import maria_avatar from '../../assets/images/mock/avatars/maria_avatar.png'
import alim_avatar from '../../assets/images/mock/avatars/alim_avatar.png'
import sergey_avatar from '../../assets/images/mock/avatars/sergey_avatar.png'
import { IRegionType } from '../../api/apiTypes'

export const regionsMockData: Array<IRegionType> = [
  {
    id: 1,
    geoId: 5,
    title:
      'Региональное отделение OOOУКС «Улицы России» в Кабардино-Балкарской Республике',

    chairman: {
      id: 12,
      firstName: 'Алим',
      lastName: 'Тхамоков',
      jobTitle:
        'Региональный руководитель отделения ОООУКС «Улицы России» в Кабардино-Балкарской Республике',
      phoneNumber: '+79645222666',
      email: 'tkhamokov.alim95@mail.ru',
      vk: 'https://vk.com/id152126506',
      avatarUrl: alim_avatar,
    },

    infrastructureIds: [],

    eventsIds: [],
  },
  {
    id: 2,
    geoId: 41,
    title:
      'Региональное отделение OOOУКС «Улицы России» в Ямало-Ненецком автономном округе',
    chairman: {
      id: 13,
      firstName: 'Мария',
      lastName: 'Коробейникова',
      jobTitle:
        'Региональный руководитель отделения ОООУКС «Улицы России» в Ямало-Ненецком автономном округе',
      phoneNumber: '+79199353467',
      email: 'maria_3.01@mail.ru',
      vk: 'https://vk.com/korobeynikovamaria',
      avatarUrl: maria_avatar,
    },
    infrastructureIds: [3, 4],
    eventsIds: [],
  },
  {
    id: 5,
    geoId: 81,
    title: 'Региональное отделение OOOУКС «Улицы России» в Республике Коми',
    chairman: {
      id: 14,
      firstName: 'Сергей',
      lastName: 'Грешняков',
      jobTitle:
        'Региональный руководитель отделения ОООУКС «Улицы России» в Республике Коми',
      phoneNumber: '+79962619066',
      email: '89962619066@ya.ru',
      vk: 'https://vk.com/futlus',
      avatarUrl: sergey_avatar,
    },

    infrastructureIds: [6, 7, 8],
    eventsIds: [9, 10, 11],
  },
]
