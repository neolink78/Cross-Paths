const categories = [
  {
    id: 1,
    name: "amour",
  },
  {
    id: 2,
    name: "travail",
  },
  {
    id: 3,
    name: "locaux",
  },
  {
    id: 4,
    name: "amis",
  },
];

export default function Categories() {
  return (
    <div>
      <li>{categories}</li>
    </div>
  );
}
