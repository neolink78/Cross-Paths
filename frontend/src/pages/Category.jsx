function Category() {
  return (
    <section>
      <div
        id="categories"
        className="w-full h-[80vh] mt-[10vh] gap-4 flex items-center flex-wrap justify-center content-center"
      >
        <button type="button">
          <p>Flirt</p>
        </button>
        <button type="button">
          <p>Voyage</p>
        </button>
        <button type="button">
          <p>Amis</p>
        </button>
        <button type="button">
          <p>Travail</p>
        </button>
      </div>
    </section>
  );
}

export default Category;
