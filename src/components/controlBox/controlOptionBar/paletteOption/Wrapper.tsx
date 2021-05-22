import styled, { css } from 'styled-components';
// lib
import media from 'src/lib/styles/media';
// types
import { Device } from 'src/types/common';

const ItemWrapper = styled.div<{ time: number; device: Device }>`
  ${({ device }) =>
    device === 'Mobile'
      ? css`
          display: block;
          margin-left: 0;
        `
      : css`
          display: flex;
          margin-top: 1rem;
          margin-left: 6.25rem;

          ${media.medium} {
            margin-left: 2rem;
          }
        `};

  ${media.small} {
    margin-left: 1rem;
  }
`;

export default ItemWrapper;
