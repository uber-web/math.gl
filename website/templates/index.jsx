import React from 'react';
import {Home} from 'gatsby-theme-ocular/components';
// import HeroExample from '../../examples/benchmarks/app.js';
import styled from 'styled-components';

if (typeof window !== 'undefined') {
  window.website = true;
}

const Bullet = styled.li`
  background: url(images/icon-high-precision.svg) no-repeat left top;
  list-style: none;
  max-width: 540px;
  padding: 8px 0 12px 42px;
  font: ${props => props.theme.typography.font300};
`;

const HeroExample = () => (<div />);

export default class IndexPage extends React.Component {
  render() {
    return (
      <Home HeroExample={HeroExample} >
        <ul>
          <Bullet>
            Geospatial coordinate system support, solar calculations, etc.
          </Bullet>
          <Bullet>
            3D math modules for geometry primitives, processing, culling etc.
          </Bullet>
          <Bullet>
            Typescript prevents incorrect API usage, run-time checks pinpoint bad data.
          </Bullet>
          <Bullet>
            <code>Vector3</code>, <code>Matrix4</code> etc inherit built-in <code>Array</code> class for maximal interoperability.
          </Bullet>
        </ul>
      </Home>
    );
  }
}
