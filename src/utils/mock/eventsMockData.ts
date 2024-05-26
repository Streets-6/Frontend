import fenix_battle_icon from '../../assets/images/mock/eventTooltipIcons/fenix_battle_icon.png'
import fenix_camp_icon from '../../assets/images/mock/eventTooltipIcons/fenix_camp_icon.png'
import shumiha_icon from '../../assets/images/mock/eventTooltipIcons/shumiha_icon.png'

import fenix_battle_1 from '../../assets/images/mock/photos/fenix_battle_1.jpg'
import fenix_battle_2 from '../../assets/images/mock/photos/fenix_battle_2.jpg'
import fenix_battle_video from '../../assets/images/mock/photos/fenix_battle_video.jpg'
import shumiha_1 from '../../assets/images/mock/photos/shumiha_1.jpg'
import shumiha_2 from '../../assets/images/mock/photos/shumiha_2.jpg'
import fenix_camp_1 from '../../assets/images/mock/photos/fenix_camp_1.jpg'
import fenix_camp_2 from '../../assets/images/mock/photos/fenix_camp_2.jpg'
import { IEventType } from '../../api/apiTypes'

export const eventsMockData: Array<IEventType> = [
  {
    id: 9,
    coordinates: [63.555505, 53.691954],
    regionGeoId: 81,
    title: 'FENIX BATTLE 10 лет Фениксу',
    description:
      'Юбилейный 10-й баттл школы хип-хоп танца Феникс и торжественная церемония награждения',
    startDate: [2024, 9, 1],
    endDate: [2024, 10, 31],
    vk: 'https://vk.com/fenixkingz',
    video: {
      type: 'horizontal',
      url: fenix_battle_video,
    },
    photo: [fenix_battle_1, fenix_battle_2],
    icon: fenix_battle_icon,
    discipline: ['Hip-hop dance'],
    city: 'г. Ухта',
    address: 'ул. Октябрьская 13',
  },
  {
    id: 10,
    coordinates: [63.568704, 53.642774],
    regionGeoId: 81,
    title:
      'Шумиха — региональный отбор на финал конкурс-премии КАРДО в Республике Коми',
    description:
      'Открытый региональный фестиваль уличной культуры и спорта в Республике Коми и отборочный этап на гранд-финал международной конкурс-премии КАРДО по направлениям хип-хоп, брейкинг, граффити, скейтбординг, трюковый самокат, BMX (велоэкстрим)',
    startDate: [2024, 6, 15],
    endDate: [2024, 6, 16],

    vk: 'https://vk.com/shumihafest',
    video: {
      type: 'vertical',
      url: 'https://vk.com/video_ext.php?oid=-213966058&id=456239046&hd=2',
    },
    photo: [shumiha_1, shumiha_2],
    icon: shumiha_icon,
    discipline: [
      'Hip-hop dance',
      'Parkour',
      'BMX',
      'Skateboarding',
      'Breaking',
      'Street art',
    ],
    city: 'г. Ухта',
    address: 'ул. Набережная Газовиков, 12',
  },
  {
    id: 11,
    coordinates: [61.701924, 50.805523],
    regionGeoId: 81,
    title: 'FENIX CAMP 2024',
    description:
      'Творческо-спортивные сборы по хип-хопу, брейкингу, стрит-арту (граффити) и музыке (диджеинг)',
    startDate: [2024, 6, 5],
    endDate: [2024, 6, 12],

    vk: 'https://vk.com/futlusdance',
    video: {
      type: 'vertical',
      url: 'https://vk.com/video_ext.php?oid=-102227530&id=456239124&hd=2',
    },
    photo: [fenix_camp_1, fenix_camp_2],
    icon: fenix_camp_icon,
    discipline: ['Hip-hop dance', 'Breaking', 'Street art'],
    city: 'г. Сыктывкар',
    address: 'Октябрьский проспект, 208',
  },
]
