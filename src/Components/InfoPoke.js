import React, { useState, useEffect } from "react";
import {
  Header,
  Segment,
  Image,
  Statistic,
  Label
} from "semantic-ui-react";
import { getPokemonAdditional } from "../util/fetchApi";
import { getColor } from "../util/typeColors";

import Stats from "../Components/ChartsPoke/Stats";

function InfoPoke(props) {
  const pokemon = props.poke;
  let name, imgFront, imgBack, types, height, weight, baseExp, id, stats, abilities;
  
  name = pokemon.species.name;
  imgFront = pokemon.sprites.front_default;
  imgBack = pokemon.sprites.back_default;
  types = pokemon.types;
  height = pokemon.height;
  weight = pokemon.weight;
  baseExp = pokemon.base_experience;
  id = pokemon.id;
  stats = pokemon.stats;
  abilities = pokemon.abilities;

  const [plusInfo, setPlusInfo] = useState({});

  useEffect(() => {
    async function getInfo() {
      const res = await getPokemonAdditional(id);
      setPlusInfo(res);
    }
    getInfo();
  }, [plusInfo]); //Cada vez que elija nuevo poke, refetch

  return (
    <Segment
      padded="very"
      color="orange"
      raised
      id="segmentInfo"
      textAlign="center"
    >
      <Header as="h2" id="subheaders">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Header>

      <Segment.Group horizontal>
        <Segment>
          <Image src={imgFront} centered />
        </Segment>
        <Segment>
          <Image src={imgBack} centered />
        </Segment>
      </Segment.Group>

      <Statistic.Group size="small" widths="three" id="menuBar">
        <Statistic color="red">
          <Statistic.Value>{height / 10}</Statistic.Value>
          <Statistic.Label>Height (m)</Statistic.Label>
        </Statistic>
        <Statistic color="olive">
          <Statistic.Value>{weight / 10}</Statistic.Value>
          <Statistic.Label>Weight (kg)</Statistic.Label>
        </Statistic>
        <Statistic color="teal">
          <Statistic.Value>{baseExp}</Statistic.Value>
          <Statistic.Label>Base Exp.</Statistic.Label>
        </Statistic>
      </Statistic.Group>

      <Header as="h3">TYPE</Header>

      {types.map((t) => (
        <Label color={getColor(t.type.name)} key={t.type.name}>
          {t.type.name.toUpperCase()}
        </Label>
      ))}

      <Header as="h3">STATS</Header>

      <div
        style={{
          position: "relative",
          margin: "auto",
          width: "600px",
          height: "400px",
        }}
      >
        <Stats stats={stats} />
      </div>

      <Header as="h3">ADDITIONAL INFO.</Header>
      {Object.keys(plusInfo).length > 0 ? (
        <div>
          <Header as="h4">
            Habilities:{" "}
            {abilities.map((a) => (
              <Label key={a.ability.name} basic>{a.ability.name}</Label>
            ))}
          </Header>
          <Header as="h4">
            Capture Rate:
            <Label circular color={plusInfo.color.name}>
              {plusInfo.capture_rate + "%"}
            </Label>
          </Header>
          {plusInfo.habitat ? (
            <Header as="h4">Habitat: {plusInfo.habitat.name}</Header>
          ) : null}
        </div>
      ) : null}
    </Segment>
  );
}

export default InfoPoke;
