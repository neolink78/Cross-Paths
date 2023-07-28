import { useNavigate } from "react-router-dom";

function Category({setSelectedCategory}) {
  const navigate = useNavigate();

  return (
    <section>
      <div
        id="categories"
        className="w-full h-[80vh] mt-[10vh] gap-4 flex items-center flex-wrap justify-center content-center"
      >
        <button 
        onClick={() => {
          navigate('/search')
          setSelectedCategory("à la recherche de l'amour")}} 
        type="button">
          <p>Flirt</p>
        </button>
        <button 
        onClick={() => {
          navigate('/search')
          setSelectedCategory("en quête de voyage")}}
        type="button">
          <p>Voyage</p>
        </button>
        <button 
        onClick={() => {
          navigate('/search')
          setSelectedCategory("des amis pour la vie")}}
        type="button">
          <p>Amis</p>
        </button>
        <button 
        onClick={() => {
          navigate('/search')
          setSelectedCategory("le business")}}
        type="button">
          <p>Travail</p>
        </button>
      </div>
    </section>
  );
}

export default Category;
