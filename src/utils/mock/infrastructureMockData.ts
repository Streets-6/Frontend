import { IInfrastructureType } from '../../api/apiTypes'
import domain_icon from '../../assets/images/mock/infrastructureTooltipIcons/domain_pro_icon.png'
import fenix_icon from '../../assets/images/mock/infrastructureTooltipIcons/fenix_icon.png'
import komi_king_icon from '../../assets/images/mock/infrastructureTooltipIcons/komi_king_icon.png'
import skate_park_icon from '../../assets/images/mock/infrastructureTooltipIcons/skate_park_icon.png'
import snow_beat_icon from '../../assets/images/mock/infrastructureTooltipIcons/snow_beat_icon.png'

import domain_pro_1 from '../../assets/images/mock/photos/domain_pro_1.jpg'
import domain_pro_2 from '../../assets/images/mock/photos/domain_pro_2.jpg'
import fenix_1 from '../../assets/images/mock/photos/fenix_1.jpg'
import fenix_2 from '../../assets/images/mock/photos/fenix_2.jpg'
import komi_kingz_1 from '../../assets/images/mock/photos/komi_kingz_1.jpg'
import komi_kingz_2 from '../../assets/images/mock/photos/komi_kingz_2.jpg'
import komi_kingz_video from '../../assets/images/mock/photos/komi_kingz_video.jpg'
import skate_park_1 from '../../assets/images/mock/photos/skate_park_1.jpg'
import skate_park_2 from '../../assets/images/mock/photos/skate_park_2.jpg'
import snow_beat_1 from '../../assets/images/mock/photos/snow_beat_1.jpg'
import snow_beat_2 from '../../assets/images/mock/photos/snow_beat_2.jpg'

export const infrastructureMockData: Array<IInfrastructureType> = [
  {
    id: 3,
    regionGeoId: 41,
    coordinates: [63.186954, 75.439305],

    title: 'Студия Брейкинга «Snow Beat»',

    vk: 'https://vk.com/snow_beat',
    video: {
      type: 'horizontal',
      url: 'https://vk.com/video_ext.php?oid=-117560522&id=456239068&hd=2',
    },
    photo: [snow_beat_1, snow_beat_2],
    icon: snow_beat_icon,
    discipline: ['Breaking'],
    city: 'г. Ноябрьск',
    address: 'Улица Советская, 27/1, Арт-резиденция "Миксер"',
  },
  {
    id: 4,
    coordinates: [66.52982948939001, 66.61355705094245],
    regionGeoId: 41,
    title: 'Студия танцев Domain Pro',
    city: 'г. Салехард',
    address: 'арт-резиденция "Полярис"',
    vk: 'https://vk.com/d.o.main_pro',
    video: {
      type: 'horizontal',
      url: 'https://vk.com/video_ext.php?oid=-147759653&id=456239201&hd=2',
    },
    photo: [domain_pro_1, domain_pro_2],
    icon: domain_icon,
    discipline: ['Breaking', 'Hip-hop dance', 'Workout'],
  },
  {
    id: 6,
    coordinates: [63.555505, 53.691954],
    regionGeoId: 81,
    title: 'ФЕНИКС школа уличной культуры, спорта и танца',
    city: 'г. Ухта',
    address: ', ул. Октябрьская 13',
    vk: 'https://taplink.cc/fenixkingz',
    video: {
      type: 'vertical',
      url: 'https://vk.com/video_ext.php?oid=-22352612&id=456239579&hd=2',
    },
    photo: [fenix_1, fenix_2],
    icon: fenix_icon,
    discipline: ['Hip-hop dance'],
  },
  {
    id: 7,
    coordinates: [63.568704, 53.642774],
    regionGeoId: 81,
    title: 'Бетонный скейт-парк',
    city: 'г. Ухта',
    address: 'ул. Набережная Газовиков, 12',
    video: {
      type: 'horizontal',
      url: 'https://www.youtube.com/embed/SDeQLXLGALY?si=IZ_-cLVaP6yLhKd5',
    },
    photo: [skate_park_1, skate_park_2],
    icon: skate_park_icon,
    vk: '',
    discipline: ['BMX', 'Skateboarding'],
  },
  {
    id: 8,
    coordinates: [61.701924, 50.805523],
    regionGeoId: 81,
    title: 'Школа паркура Komi KingZ',
    city: 'г. Сыктывкар',
    address: 'Октябрьский проспект, 208',
    vk: 'https://vk.com/pksyk',
    video: {
      type: 'horizontal',
      url: komi_kingz_video,
    },
    photo: [komi_kingz_1, komi_kingz_2],
    icon: komi_king_icon,
    discipline: ['Parkour', 'Freerun'],
  },
]
