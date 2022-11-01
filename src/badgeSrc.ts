export const badgeSrc = ({ title, backgroundColor, logoColor, name }: BadgeSrc) => {

  const encodedTitle = title.replace(/-/g, '--').replace(/_/g, '__').replace(/ /g, '_');

  return encodeURI(
    `https://img.shields.io/badge/${encodedTitle} -${backgroundColor}.svg?&style=for-the-badge&logo=${name}&logoColor=${logoColor || 'white'}`
  ).replace(/#/g, '%23');
};
interface BadgeSrc {
  title: string;
  backgroundColor: string;
  logoColor?: string;
  name: string;
}
