import styled from 'styled-components';
// icons
import { MailIcon } from 'lib/svg';
// styles
import animations from 'lib/styles/animations';

const Icon = styled(MailIcon)`
  width: 32px;
  height: 32px;
  opacity: 0.8;
  animation: 2s ${animations.fadeInBottom};
`;

export default Icon;
