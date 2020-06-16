import React, { useState, useEffect } from "react";
import { Segment, Header, Label } from "semantic-ui-react";
import { getTypes, getPokemonsByType } from "../util/fetchApi";
import { getColor } from "../util/typeColors";

import PokemonList from '../Components/PokemonList';

function Types() {
  const [types, setTypes] = useState({});
  const [pokemonList, setPokemonList] = useState({})
  const [colorList, setColorList] = useState('')

  useEffect(() => {
    async function getInfo() {
      const res = await getTypes();
      setTypes(res.results); //Array de nombres
    }
    getInfo();
  }, []);

  const handlePkmList = async (name) => {
    const list = await getPokemonsByType(name)
    setPokemonList(list);
    setColorList(getColor(name))
  }

  return (
    <div className="app">
      <Segment padded raised color="blue" textAlign="center">
        <Header size="huge" id="headers">
          All pokemon types
        </Header>

        <Segment>
          {Object.keys(types).length > 0
            ? types.map((t) => (
                <Label
                  id="labelType"
                  as="a"
                  onClick={() => handlePkmList(t.name)}
                  size="large"
                  key={t.name}
                  color={getColor(t.name)}
                >
                  {t.name}
                </Label>
              ))
            : null}
        </Segment>

        <PokemonList list={pokemonList} colorList={colorList} />
      </Segment>
    </div>
  );
}

export default Types;
