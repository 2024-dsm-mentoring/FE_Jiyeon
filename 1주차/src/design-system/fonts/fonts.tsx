import "./fonts.css";

const fontGenerator = (
  fontFamily: string,
  weight: number | string,
  size: number,
  lineHeight: number,
  letterSpacing: number
) => ({
  fontWeight: `${weight}`,
  fontSize: `${size}px`,
  lineHeight: `${lineHeight}%`,
  letterSpacing: `${letterSpacing}px`,
  fontFamily: `${fontFamily}`,
});

const fonts = {
  Headline1: fontGenerator("NotoSansKR", 500, 36, 50, 0),
  Headline2: fontGenerator("NotoSansKR", 500, 30, 42, 0),
  Headline3: fontGenerator("NotoSansKR", 500, 24, 34, 0),
  title1: fontGenerator("NotoSansKR", 700, 22, 34, 0),
  title2: fontGenerator("NotoSansKR", 700, 20, 32, 0),
  title3: fontGenerator("NotoSansKR", 700, 18, 28, 0),
  Body1: fontGenerator("NotoSansKR", 400, 18, 28, 0),
  Body2: fontGenerator("NotoSansKR", 400, 16, 26, 0),
  Body3: fontGenerator("NotoSansKR", 400, 14, 22, 0),
  Caption: fontGenerator("NotoSansKR", 400, 12, 22, 0),
  Overline: fontGenerator("NotoSansKR", 700, 10, 16, 0),
  Button: fontGenerator("NotoSansKR", 700, 14, 22, 0),
};

export default fonts;
