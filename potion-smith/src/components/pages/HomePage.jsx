

const HomePage = () => {
    return(
    <main>
      <div className="homepage-carousel">
        <h1>Featured This Week</h1>

        <a href="https://www.potionsmith.com/recipes/rangers-feral-senses">
          <img
            src="/images/RangersFeralSenses.jpeg"
            alt="Ranger's Feral Senses"
          />
        </a>

        <a href="https://www.potionsmith.com/recipes/hellfire-margarita">
          <img
            src="/images/HellfireDraughtMargarita.png"
            alt="The HellFire Draught Margarita"
          />
        </a>

        <a href="https://www.potionsmith.com/recipes/bard-song-of-rest">
          <img
            src="/images/BardSongofRest.jpeg"
            alt="Bard's Song of Rest"
          />
        </a>

      </div>
    </main>
  );
};

export default HomePage;