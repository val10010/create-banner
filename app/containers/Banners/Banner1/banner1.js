import React from 'react';
import Wrapper from './Wrapper';

export const Banner1 = (props) => {
  return (
    <Wrapper>
      <h1 color={props.color}>Try new MacKeeper now</h1>
      <h2>Faster, smarter, easier for your
        Mac
      </h2>
      <button>DOWNLOAD</button>
    </Wrapper>
  );
};
