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
            Toolbox of 3D math modules
          </Bullet>
          <Bullet>
            Matrices and vectors, bounding boxes, frustum culling etc.
          </Bullet>
          <Bullet>
            Geospatial coordinate reprojection, gravity models, solar calculations, etc.
          </Bullet>
          <Bullet>
            TypeScript ensures correct API usage. Run-time checks detect bad data.
          </Bullet>
        </ul>
      </Home>
    );
  }
}
