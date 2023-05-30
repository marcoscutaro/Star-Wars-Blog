const getState = ({ getStore, setStore }) => {
  const API_PEOPLE = "https://www.swapi.tech/api/people/";
  const API_PLANETS = "https://www.swapi.tech/api/planets/";

  return {
    store: {
      favorites: [],
      characters: [],
      planets: [],
      loading: true,
      loadingPlanets: true,
    },
    actions: {
      loadCharactersFetch: () => {
        const store = getStore();
        if (store.characters.length === 0 && store.loading) {
          setStore({ loading: false });
          for (let i = 1; i <= 10; i++) {
            fetch(`${API_PEOPLE}${i}`)
              .then((response) => response.json())
              .then((data) =>
                setStore({
                  characters: [
                    ...store.characters,
                    { ...data.result.properties, id: i },
                  ],
                })
              );
          }
        }
      },

      loadPlanetsFetch: () => {
        const store = getStore();
        if (store.planets.length === 0 && store.loadingPlanets) {
          setStore({ loadingPlanets: false });
          for (let i = 1; i <= 10; i++) {
            fetch(`${API_PLANETS}${i}`)
              .then((response) => response.json())
              .then((data) =>
                setStore({
                  planets: [
                    ...store.planets,
                    { ...data.result.properties, id: i },
                  ],
                })
              );
          }
        }
      },

      addFavoritesCharacter: (theid) => {
        const store = getStore();
        store.characters.map((item) => {
          if (
            item.id === theid &&
            !store.favorites.find((f) => f.id === theid)
          ) {
            setStore({
              favorites: [...store.favorites, { id: item.id, name: item.name }],
            });
          }
          return item; // return the mapped element
        });
      },

      addFavoritesPlanet: (theid) => {
        const store = getStore();
        store.planets.map((item) => {
          if (
            item.id === theid &&
            !store.favorites.find((f) => f.id === theid)
          ) {
            setStore({
              favorites: [...store.favorites, { id: item.id, name: item.name }],
            });
          }
          return item; // return the mapped element
        });
      },

      deleteFav: (favId) => {
        const store = getStore();
        let eliminateFav = store.favorites.filter(
          (element) => element.id !== favId
        );
        setStore({ favorites: [...eliminateFav] });
      },
    },
  };
};

export default getState;

/*

Sure! Here's how you can fix those errors:

'React' is defined but never used.
This error message is because you imported React but never used it in the code. You can remove it to fix the error.

Array.prototype.map() expects a return value from arrow function.
This error message means that the arrow function passed to map() is not returning anything. You should modify the map() functions inside addFavoritesCharacter() and addFavoritesPlanet() to return the mapped element. Here's an example fix for addFavoritesCharacter():

Similarly, you can fix the map() function in addFavoritesPlanet().

Array.prototype.map() expects a return value from arrow function.
This is the same error message as the previous one. You should modify the map() function inside addFavoritesPlanet() to return the mapped element. Here's an example fix:
return item; // return the mapped element
*/
