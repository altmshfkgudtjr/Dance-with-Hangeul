export const zIndexSet = layer => `
	${layer}
`;

const zIndex = {
  menu: zIndexSet(60),
  modal: zIndexSet(100),
  tooltip: zIndexSet(500),
  snackbar: zIndexSet(400),
};

export default zIndex;
