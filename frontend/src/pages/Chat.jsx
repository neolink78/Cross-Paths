export default function Chat() {
  const matchs = [
    {
      id: 1,
      picture: "./assets/images/pictures/picture_01.png",
      name: "Jade",
    },
    {
      id: 2,
      picture: "./assets/images/pictures/picture_02.png",
      name: "Louise",
    },
    {
      id: 3,
      picture: "./assets/images/pictures/picture_03.png",
      name: "Emma",
    },
    {
      id: 4,
      picture: "./assets/images/pictures/picture_04.png",
      name: "Alice",
    },
    {
      id: 5,
      picture: "./assets/images/pictures/picture_05.png",
      name: "Ambre",
    },
    {
      id: 6,
      picture: "./assets/images/pictures/picture_06.png",
      name: "Lina",
    },
    {
      id: 7,
      picture: "./assets/images/pictures/picture_07.png",
      name: "Rose",
    },
    {
      id: 8,
      picture: "./assets/images/pictures/picture_08.png",
      name: "Chloé",
    },
  ];

  const messages = [
    {
      id: 1,
      picture: "./assets/images/pictures/picture_01.png",
      message: "Lorem ipsum, dolor sit amet consectetur.",
      name: "Jade",
    },
    {
      id: 2,
      picture: "./assets/images/pictures/picture_02.png",
      message: "Lorem ipsum, dolor sit amet consectetur.",
      name: "Louise",
    },
    {
      id: 3,
      picture: "./assets/images/pictures/picture_03.png",
      message: "Lorem ipsum, dolor sit amet consectetur.",
      name: "Emma",
    },
    {
      id: 4,
      picture: "./assets/images/pictures/picture_04.png",
      message: "Lorem ipsum, dolor sit amet consectetur.",
      name: "Alice",
    },
    {
      id: 5,
      picture: "./assets/images/pictures/picture_05.png",
      message: "Lorem ipsum, dolor sit amet consectetur.",
      name: "Ambre",
    },
    {
      id: 6,
      picture: "./assets/images/pictures/picture_06.png",
      message: "Lorem ipsum, dolor sit amet consectetur.",
      name: "Lina",
    },
    {
      id: 7,
      picture: "./assets/images/pictures/picture_07.png",
      message: "Lorem ipsum, dolor sit amet consectetur.",
      name: "Rose",
    },
    {
      id: 8,
      picture: "./assets/images/pictures/picture_08.png",
      message: "Lorem ipsum, dolor sit amet consectetur.",
      name: "Chloé",
    },
  ];

  return (
    <section className="h-[80vh] mt-[10vh] mx-6">
      <h2>Match</h2>
      <div className="flex py-5">
        {matchs.map((match, id) => (
          <div key={id} className="flex flex-col mr-4 gap-2">
            <div  className="flex h-24 w-16">
              <img
                className="rounded-md h-full object-cover"
                src={match.picture}
                alt={match.picture}
              />
            </div>
            <p className="text-black">{match.name}</p>
          </div>
        ))}
      </div>
      <div id="match" className="flex justify-between py-6">
        <button type="button">Flirt</button>
        <button type="button">Voyage</button>
        <button type="button">Amis</button>
        <button type="button">Travail</button>
      </div>
      <div>
        {messages.map((message, id) => (
          <div key={id} className="flex my-6 items-center">
            <img
              className="rounded-full h-14 mr-8"
              src={message.picture}
              alt={message.picture}
            />
            <div>
              <h2>{message.name}</h2>
              <p className="text-black text-sm">{message.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
