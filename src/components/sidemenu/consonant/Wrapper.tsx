import styled from 'styled-components';
// lib
import media from 'src/lib/styles/media';

const Wrapper = ({ children }: Props) => {
  return (
    <Conainer>
      <ContentContainer>{children}</ContentContainer>
    </Conainer>
  );
};

const Conainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
  padding-right: 0.5rem;

  ${media.small} {
    overflow-y: auto;
    justify-content: flex-start;
    padding: 0.5rem;

    &::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }

  ${media.mobileLandscape} {
    width: auto;
    padding: 0;
    height: auto;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.small} {
    margin: auto;
  }

  ${media.mobileLandscape} {
    flex-direction: row;
    flex-wrap: wrap;
    width: 162px;
  }
`;

interface Props {
  children?: React.ReactNode;
}

export default Wrapper;
