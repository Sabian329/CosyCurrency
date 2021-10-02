export const Flags = ({ code }) => {
  const link = `https://www.countryflags.io/${code.slice(0, -1)}/flat/64.png`;
  return link;
};
