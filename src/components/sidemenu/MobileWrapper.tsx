import styled from 'styled-components';

const MobileWrapper = styled.div<{ isShow: boolean }>`
  flex: 1;
  display: ${({ isShow }) => (isShow ? 'flex' : 'none')};
  justify-content: space-around;
  width: 100vw;
  height: 100%;
  overflow: hidden;
`;

export default MobileWrapper;
