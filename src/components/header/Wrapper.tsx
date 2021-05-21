import styled from 'styled-components';
// types
import { Device, Mode } from 'src/types/common';

const Wrapper = styled.div<{ device: Device; mode: Mode }>`
  width: 100%;
  height: ${({ device }) => (device === 'Mobile' ? '48px' : '80px')};
  display: flex;
  align-items: center;
  justify-content: ${({ device }) => (device === 'Mobile' ? 'space-between' : 'center')};
  backdrop-filter: ${({ device }) => (device === 'Mobile' ? 'blur(4px)' : '')};

  color: ${({ mode }) => (mode === 'Light' ? '#000' : '#fff')};
`;

export default Wrapper;
