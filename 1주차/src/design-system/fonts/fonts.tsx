const fontGenerator = (
  weight: number | string,
  size: number,
  lineHeight: number,
  letterSpacing: number
) => ({
  fontWeight: `${weight}`,
  fontSize: `${size}px`,
  lineHeight: `${lineHeight}%`,
  letterSpacing: `${letterSpacing}px`,
});

const fonts = {
  Headline1: fontGenerator(500, 36, 50, 0),
  Headline2: fontGenerator(500, 30, 42, 0),
  Headline3: fontGenerator(500, 24, 34, 0),
  title1: fontGenerator(700, 22, 34, 0),
  title2: fontGenerator(700, 20, 32, 0),
  title3: fontGenerator(700, 18, 28, 0),
  Body1: fontGenerator(400, 18, 28, 0),
  Body2: fontGenerator(400, 16, 26, 0),
  Body3: fontGenerator(400, 14, 22, 0),
  Caption: fontGenerator(400, 12, 22, 0),
  Overline: fontGenerator(700, 10, 16, 0),
  Button: fontGenerator(700, 14, 22, 0),
};

export default fonts;
