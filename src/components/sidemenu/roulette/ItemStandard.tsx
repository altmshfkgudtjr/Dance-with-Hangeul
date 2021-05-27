import styled from 'styled-components';

const ItemStandard = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 60px;
  overflow: visible;
  transform-style: preserve-3d;
  transform: rotateX(-60deg);
  transition: -webkit-transform 1000ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
`;

export default ItemStandard;
