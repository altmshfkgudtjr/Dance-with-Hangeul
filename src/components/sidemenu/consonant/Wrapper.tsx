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
    width: 100%;
    flex: 1;
    padding-right: 0;
  }

  ${media.mobileLandscape} {
    width: 100%;
    height: auto;
    flex: 1;
    padding-right: 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.small} {
    width: 80px;
    height: 340px;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    padding-bottom: 4rem;
  }

  ${media.mobileLandscape} {
    flex-direction: row;
    flex-wrap: wrap;
    width: 340px;
    height: 80px;
    padding-bottom: 4rem;
  }
`;

interface Props {
  children?: React.ReactNode;
}

export default Wrapper;
