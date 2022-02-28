export const genKeys = string => {
  const prefix = string ? string + '-' : '';
  const genAPart = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return prefix + genAPart() + '-' + genAPart() + '-' + genAPart() + '-' + genAPart() + '-' + genAPart() + '-' + genAPart() + '-' + genAPart();
};
