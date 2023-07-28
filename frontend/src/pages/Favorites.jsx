function Favorites() {
  const favorites = [
    {
      id: 1,
      img: "./assets/images/pictures/picture_01.png",
      name: "Jade",
    },
    {
      id: 2,
      img: "./assets/images/pictures/picture_02.png",
      name: "Louise",
    },
    {
      id: 3,
      img: "./assets/images/pictures/picture_03.png",
      name: "Emma",
    },
    {
      id: 4,
      img: "./assets/images/pictures/picture_04.png",
      name: "Alice",
    },
    {
      id: 5,
      img: "./assets/images/pictures/picture_05.png",
      name: "Ambre",
    },
    {
      id: 6,
      img: "./assets/images/pictures/picture_06.png",
      name: "Lina",
    },
    {
      id: 7,
      img: "./assets/images/pictures/picture_07.png",
      name: "Rose",
    },
    {
      id: 8,
      img: "./assets/images/pictures/picture_08.png",
      name: "Chloé",
    },
    {
      id: 9,
      img: "./assets/images/pictures/picture_09.png",
      name: "Mia",
    },
    {
      id: 10,
      img: "./assets/images/pictures/picture_10.png",
      name: "Léa",
    },
    {
      id: 11,
      img: "./assets/images/pictures/picture_11.png",
      name: "Anna",
    },
  ];

  return (
    <section className="flex flex-wrap basis-3/6 justify-center mt-[10vh] mb-[10vh]">
      {favorites.map((favorite) => (
        <div
          key={favorite.id}
          className="h-52 w-36 m-3 flex flex-col justify-center"
        >
          <img
            className="h-full rounded-md object-cover"
            src={favorite.img}
            alt={favorite.img}
          />
          <h1 className="font-bold">{favorite.name}</h1>
        </div>
      ))}
    </section>
  );
}

export default Favorites;
