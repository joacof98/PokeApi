import React, {useState, useEffect} from "react";
import { Segment, Header } from "semantic-ui-react";

import AllEggs from '../Components/ChartsPoke/AllEggs';
import AllEggsPie from '../Components/ChartsPoke/AllEggsPie';

import {getEggs} from '../util/fetchApi';

function Eggs() {
  const [eggs, setEggs] = useState({});

  useEffect(() => {
    async function getInfo() {
      const res = await getEggs();
      setEggs(res);
    }
    getInfo();
  }, []);

  return (
    <div className="app">
      <Segment padded raised color="pink" textAlign="center">
        <Header size="huge" id="headers">
          Pokemon eggs by type
        </Header>
        <Segment padded="very" raised id="segmentInfo" textAlign="center">
          {Object.keys(eggs).length > 0 ? (
            <div>
              <AllEggs eggs={eggs} />
              <AllEggsPie eggs={eggs} />
            </div>
          ) : null}
        </Segment>
      </Segment>
    </div>
  );
}

export default Eggs;
