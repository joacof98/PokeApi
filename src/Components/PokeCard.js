import React, { useEffect, useState } from "react";
import { Card, Image, Loader, Dimmer, Segment } from "semantic-ui-react";
import { getPokemon } from "../util/fetchApi";

function PokeCard(props) {
  const [pokeInfo, setPokeInfo] = useState({});
  const defaultImg =
    "https://vignette.wikia.nocookie.net/pkmnshuffle/images/b/b4/Unown_%28Question%29.png/revision/latest?cb=20170407223033";

  useEffect(() => {
    async function getInfo() {
      const res = await getPokemon(props.pokemonName);
      setPokeInfo(res); //Array de nombres
    }
    getInfo();
  }, []);

  return (
    <div>
      {Object.keys(pokeInfo).length > 0 ? (
        <Card color={props.color}>
          <Image
            src={
              pokeInfo.sprites.front_default
                ? pokeInfo.sprites.front_default
                : defaultImg
            }
            centered
            fluid
          />
          <Card.Content>
            <Card.Header>
              {pokeInfo.species.name.charAt(0).toUpperCase() +
                pokeInfo.species.name.slice(1)}
            </Card.Header>
          </Card.Content>
        </Card>
      ) : (
        <Dimmer.Dimmable as={Segment} blurring>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Dimmer.Dimmable>
      )}
    </div>
  );
}

export default PokeCard;
