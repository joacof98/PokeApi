import React, { useState } from "react";
import { Button, Segment, Form, Header, Icon } from "semantic-ui-react";
import MsjError from '../Components/MsjError';

import {getPokemon} from '../util/fetchApi';
import InfoPoke from '../Components/InfoPoke';

function Home() {
  const [search, setSearch] = useState('')
  const [visibleMsj, setVisibleMsj] = useState(false)
  const [error, setError] = useState('')
  const [pokemon, setPokemon] = useState({})

  const handleSearch = async (e) => {
    e.preventDefault();
    if(search === ''){
      setVisibleMsj(true)
    } else {
      setVisibleMsj(false)
      searchForPokemon()
    }
  };

  const searchForPokemon = async () => {
    try{
      const res = await getPokemon(search.toLowerCase())
      setPokemon(res)
    } catch(err) {
      setVisibleMsj(true)
      setError('Error trying to find the pokemon')
    }
  }

  return (
    <div className="App">
      <Segment padded raised color="red" textAlign="center">
        <Header size="huge" id="headers">
          Get data of any pokemon!
          <Header.Subheader>PokeApi visualization</Header.Subheader>
        </Header>
        <Form onSubmit={handleSearch} id="form">
          <Form.Field>
            <Form.Input
              icon="search"
              placeholder="Search by name or id..."
              name="pokemon"
              onChange={(event) => setSearch(event.target.value)}
              value={search}
            />
          </Form.Field>

          <MsjError visible={visibleMsj} error={error} />

          <Button animated type="submit" id="btns">
            <Button.Content visible>Search</Button.Content>
            <Button.Content hidden>
              <Icon name="search" />
            </Button.Content>
          </Button>
        </Form>

        {Object.keys(pokemon).length > 0 ? <InfoPoke poke={pokemon} /> : null}
      </Segment>
    </div>
  );
}

export default Home;
