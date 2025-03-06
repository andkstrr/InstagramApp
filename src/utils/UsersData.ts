import { date } from "yup";

export const UsersData = [
  {
    id: 1,
    username: 'andkstrr_',
    name: 'Andika Satrio Nurcahyo',
    profile: require('../assets/data/andkstrr.jpg'),
    story: {
      time: 10,
      image: require('../assets/data/andkstrrstory.jpg'),
    },
    post: {
      time: '09:00:00',
      date: '13/01/2025',
      image: require('../assets/data/andkstrrpost.jpg'),
      caption: 'Good things take time',
      like: 137,
    },
  },
  {
    id: 2,
    username: 'smkwikrama',
    name: 'SMK Wikrama Bogor | SMK Teladan Nasional',
    profile: require('../assets/data/wikrama.jpg'),
    story: {
      time: 11,
      image: require('../assets/data/wikramastory.png'),
    },
    post: {
      time: '13.15.00',
      date: '12/03/2025',
      image: require('../assets/data/wikramapost.png'),
      caption: 'Tentukan masa depanmu disini!',
      like: 137,
    }
  },
  {
    id: 3,
    username: 'rplwikrama',
    name: 'RPL - Wikrama Bogor',
    profile: require('../assets/data/rpl.jpg'),
    story: {
      time: 11,
      image: require('../assets/data/rplstory.png'),
    },
    post: {
      time: '13.15.00',
      date: '12/03/2025',
      image: require('../assets/data/rplpost.png'),
      caption: 'Semoga bermanfaat yaa guys!',
      like: 74,
    }
  },
  {
    id: 4,
    username: 'aswad_baitullah',
    name: 'Aswad | Platform Agent Travel | Agent Mandiri',
    profile: require('../assets/data/aswad.jpg'),
    story: {
      time: 11,
      image: require('../assets/data/aswadstory.png'),
    },
    post: {
      time: '13.15.00',
      date: '8/03/2025',
      image: require('../assets/data/aswadpost.png'),
      caption: 'Stay tuned, ini bakal ngebantu kamu yang lagi hustle cari kerja!!',
      like: 137,
    }
  },
  {
    id: 5,
    username: 'baitullahindonesia',
    name: 'Baitullah',
    profile: require('../assets/data/baitullah.jpg'),
    story: {
      time: 11,
      image: require('../assets/data/baitullahstory.png'),
    },
    post: {
      time: '13.15.00',
      date: '12/03/2025',
      image: require('../assets/data/baitullahpost.png'),
      caption: 'Hal-hal unik pas pertama kali umroh!',
      like: 137,
    }
  },
  {
    id: 6,
    username: 'sandhikagalih',
    name: 'Sandhika Galih - Belajar Coding',
    profile: require('../assets/data/sandhika.jpg'),
    story: {
      time: 11,
      image: require('../assets/data/sandhikastory.png'),
    },
    post: {
      time: '13.15.00',
      date: '8/03/2025',
      image: require('../assets/data/sandhikapost.png'),
      caption: 'wahh keren banget nih!',
      like: 137,
    }
  },
  // {
  //   id: 7,
  //   username: 'dicoding',
  //   name: 'Dicoding Indonesia',
  //   profile: require('../assets/data/dicoding.jpg'),
  //   story: {
  //     time: 11,
  //     image: require('../assets/data/dicodingstory.png'),
  //   },
  //   post: {
  //     time: '13.15.00',
  //     date: '8/03/2025',
  //     image: require('../assets/data/dicodingpost.png'),
  //     caption: 'wahh keren banget nih!',
  //     like: 137,
  //   }
  // }
];
