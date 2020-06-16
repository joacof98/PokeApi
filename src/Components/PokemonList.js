import React from 'react';
import {Card, Container} from 'semantic-ui-react';
import PokeCard from "./PokeCard";

// La lista de pokemons, no contiene info completa de cada uno, solo el nombre.
function PokemonList(props) {
  var pokemons = props.list;
  return (
    <div>
      {Object.keys(pokemons).length > 0 ? (
        <Container>
          <Card.Group itemsPerRow={7}>
            {pokemons.map((poke) => (
              <Card key={poke.pokemon.name}>
                <PokeCard color={props.colorList} pokemonName={poke.pokemon.name} />
              </Card>
            ))}
          </Card.Group>
        </Container>
      ) : null }

    </div>
  );
}

export default PokemonList;