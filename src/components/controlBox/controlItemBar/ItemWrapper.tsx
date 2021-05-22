import styled, { css } from 'styled-components';
// lib
import animations from 'src/lib/styles/animations';
import media from 'src/lib/styles/media';
// types
import { Device } from 'src/types/common';

const ItemWrapper = styled.div<{ device: Device; isOpen: boolean }>`
  ${({ device, isOpen }) =>
    device === 'Mobile'
      ? css`
          margin-left: 0;
          ${isOpen
            ? css`
                animation: 600ms ${animations.fadeInTop};
              `
            : css`
                animation: 600ms ${animations.fadeOutTop};
              `};
        `
      : css`
          margin-top: 1rem;
          margin-left: 6.25rem;
          ${isOpen
            ? css`
                animation: 600ms ${animations.fadeInTop};
              `
            : css`
                animation: 600ms ${animations.fadeOutTop};
              `};
        `};
  margin-left: 6.25rem;

  ${media.medium} {
    margin-left: 2rem;
  }
`;

export default ItemWrapper;
