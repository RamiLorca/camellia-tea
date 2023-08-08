import Directory from '../../components/directory/directory.component';

const Home = () => {

  const categories = [
    {
      "id": 1,
      "title": "Black",
      "imageUrl": "https://images.unsplash.com/photo-1627828094454-accc9a7c20e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
    },
    {
      "id": 2,
      "title": "Green",
      "imageUrl": "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
    },
    {
      "id": 3,
      "title": "White",
      "imageUrl": "https://images.unsplash.com/photo-1611836579732-d4dd63dc5492?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2206&q=80"
    },
    {
      "id": 4,
      "title": "Oolong",
      "imageUrl": "https://images.unsplash.com/photo-1470162656305-6f429ba817bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    {
      "id": 5,
      "title": "Teaware",
      "imageUrl": "https://images.unsplash.com/photo-1607644962019-09feffe09624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
    }
  ];

  return <Directory categories={ categories } />;

};

export default Home;
