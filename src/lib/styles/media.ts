/** Media Query min width */
export const mediaQueryMin = minWidth => `
	@media (min-width: ${minWidth}px)
`;

/** Media Query max width */
export const mediaQueryMax = maxWidth => `
	@media (max-width: ${maxWidth}px)
`;

/** Media Value 규격 */
export const mediaValue = {
  xlarge: 1600,
  large: 1440,
  medium: 1200,
  small: 702,
  xsmall: 350,
};

/** Media Query 규격 */
const media = {
  xlarge: mediaQueryMax(mediaValue.xlarge),
  large: mediaQueryMax(mediaValue.large),
  medium: mediaQueryMax(mediaValue.medium),
  small: mediaQueryMax(mediaValue.small),
  xsmall: mediaQueryMax(mediaValue.xsmall),
  custom: mediaQueryMax,
};

export default media;
