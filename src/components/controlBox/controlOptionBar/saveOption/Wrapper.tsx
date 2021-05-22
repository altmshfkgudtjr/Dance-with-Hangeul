import styled, { css } from 'styled-components';
// lib
import media from 'src/lib/styles/media';
// types
import { Device } from 'src/types/common';

const ItemWrapper = styled.div<{ time: number; device: Device }>`
  ${({ device }) =>
    device === 'Mobile'
      ? css`
          margin-left: 0;
        `
      : css`
          margin-top: 1rem;
          margin-left: 6.25rem;
        `};
  margin-left: 6.25rem;

  ${media.medium} {
    margin-left: 2rem;
  }

  ${media.small} {
    margin-left: 1rem;
  }
`;

export default ItemWrapper;
