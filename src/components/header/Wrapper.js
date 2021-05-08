import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: ${({ device }) => (device === 'Mobile' ? '48px' : '80px')};
  display: flex;
  align-items: center;
  justify-content: ${({ device }) => (device === 'Mobile' ? 'space-between' : 'center')};
  backdrop-filter: ${({ device }) => (device === 'Mobile' ? 'blur(4px)' : '')};
`;

export default Wrapper;
