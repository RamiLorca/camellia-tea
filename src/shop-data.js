const SHOP_DATA = [
  {
    title: 'Oolong',
    items: [
      {
        id: 1,
        name: 'Formosa',
        imageUrl: 'https://images.unsplash.com/photo-1628153792464-21bffac488d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
        price: 15,
      },
      {
        id: 2,
        name: 'Ti Quan Yin',
        imageUrl: 'https://images.unsplash.com/photo-1627894006047-0a157493a390?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
        price: 20,
      },
      {
        id: 3,
        name: 'Li Shan',
        imageUrl: 'https://images.unsplash.com/photo-1604697976842-d36fa5a1b2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
        price: 18,
      },
      {
        id: 4,
        name: 'Ali San',
        imageUrl: 'https://images.unsplash.com/photo-1627894006066-b45786537103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1234&q=80',
        price: 22,
      },
      {
        id: 5,
        name: 'Milk Oolong',
        imageUrl: 'https://images.unsplash.com/photo-1627894006066-b45786537103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1234&q=80',
        price: 20,
      },
      {
        id: 6,
        name: 'Dong Ding',
        imageUrl: 'https://images.unsplash.com/photo-1627764611688-2d07255e995e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
        price: 15,
      },
    ],
  },
  {
    title: 'Black',
    items: [
      {
        id: 7,
        name: 'Darjeeling',
        imageUrl: 'https://images.unsplash.com/photo-1433891248364-3ce993ff0e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        price: 12,
      },
      {
        id: 8,
        name: 'Assam',
        imageUrl: 'https://images.unsplash.com/photo-1433891248364-3ce993ff0e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        price: 10,
      },
      {
        id: 9,
        name: 'Earl Grey',
        imageUrl: 'https://images.pexels.com/photos/6087517/pexels-photo-6087517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 10,
      },
      {
        id: 10,
        name: 'Lapsang Souchong',
        imageUrl: 'https://images.pexels.com/photos/6087518/pexels-photo-6087518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 15,
      },
      {
        id: 11,
        name: 'Pu-Erh',
        imageUrl: 'https://images.unsplash.com/photo-1627828094418-cd2a87b29fdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
        price: 18,
      },
      {
        id: 12,
        name: 'Ceylon',
        imageUrl: 'https://images.pexels.com/photos/17751258/pexels-photo-17751258/free-photo-of-close-up-of-black-tea-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 8,
      },
    ],
  },
  {
    title: 'Green',
    items: [
      {
        id: 13,
        name: 'Sencha',
        imageUrl: 'https://images.pexels.com/photos/5988177/pexels-photo-5988177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 20,
      },
      {
        id: 14,
        name: 'Genmaicha',
        imageUrl: 'https://images.pexels.com/photos/6087603/pexels-photo-6087603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 18,
      },
      {
        id: 15,
        name: 'Hojicha',
        imageUrl: 'https://images.unsplash.com/photo-1628153792464-21bffac488d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
        price: 18,
      },
      {
        id: 16,
        name: 'Matcha',
        imageUrl: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
        price: 30,
      },
      {
        id: 17,
        name: 'Gunpowder',
        imageUrl: 'https://images.unsplash.com/photo-1627894006066-b45786537103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1234&q=80',
        price: 15,
      },
    ],
  },
  {
    title: 'White',
    items: [
      {
        id: 18,
        name: 'Mutan',
        imageUrl: 'https://images.unsplash.com/photo-1594134858547-8b126843389e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        price: 20,
      },
      {
        id: 19,
        name: 'Jasmine Pearl',
        imageUrl: 'https://images.pexels.com/photos/6787016/pexels-photo-6787016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 20,
      },
      {
        id: 20,
        name: 'White Dragon Well',
        imageUrl: 'https://images.pexels.com/photos/8329249/pexels-photo-8329249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 22,
      },
      {
        id: 21,
        name: 'White Peony',
        imageUrl: 'https://images.pexels.com/photos/8329972/pexels-photo-8329972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        price: 25,
      },
      {
        id: 22,
        name: 'Bai Hao Yin Zhen',
        imageUrl: 'https://images.unsplash.com/photo-1543060895-03f57478a710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=778&q=80',
        price: 25,
      },
    ],
  },
  {
    title: 'Teaware',
    items: [
      {
        id: 23,
        name: 'Kyusu',
        imageUrl: 'https://images.unsplash.com/photo-1572766736431-e4640ff4da3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        price: 30,
      },
      {
        id: 24,
        name: 'Gaiwan',
        imageUrl: 'https://images.unsplash.com/photo-1649868592193-f1474cb13be9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        price: 18,
      },
      {
        id: 25,
        name: 'Ceramic Set',
        imageUrl: 'https://images.unsplash.com/photo-1607644962019-09feffe09624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
        price: 50,
      },
      {
        id: 26,
        name: 'Glass Teapot',
        imageUrl: 'https://images.unsplash.com/photo-1530439832313-10874948b368?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
        price: 22,
      },
    ],
  },
];

export default SHOP_DATA;