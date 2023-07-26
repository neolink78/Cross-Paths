function Favorites() {
  const favorites = [
    {
      id: 1,
      img: "",
      name: "Personne 1",
    },
    {
      id: 2,
      img: "",
      name: "Personne 2",
    },
    {
      id: 3,
      img: "",
      name: "Personne 3",
    },
    {
      id: 4,
      img: "",
      name: "Personne 4",
    },
    {
      id: 5,
      img: "",
      name: "Personne 5",
    },
    {
      id: 6,
      img: "",
      name: "Personne 6",
    },
    {
      id: 7,
      img: "",
      name: "Personne 7",
    },
    {
      id: 8,
      img: "",
      name: "Personne 8",
    },
    {
      id: 9,
      img: "",
      name: "Personne 9",
    },
    {
      id: 10,
      img: "",
      name: "Personne 10",
    },
  ];

  return (
    <section className="flex flex-wrap basis-3/6 justify-center mt-[10vh] mb-[10vh]">
      {favorites.map((favorite) => (
        <div
          key={favorite.id}
          className="h-52 w-36 bg-slate-400 m-3 rounded-md"
        >
          <img src={favorite.img} alt={favorite.img} />
          <h1 className="flex h-full items-end p-4 font-bold">
            {favorite.name}
          </h1>
        </div>
      ))}
    </section>
  );
}

export default Favorites;
