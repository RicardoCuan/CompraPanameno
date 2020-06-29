/////_____[ COLOR ]_____\\\\\
export const color = {
  // Principales
  primary: "#056FFF",
  secondary: "#207878",
  ternary: "#FD7E14",
  //Gradientes
  gradient: "linear-gradient(311deg, rgba(5,111,255,1) 0%, rgba(32,120,120,1) 100%)",
  //Neutrales
  light: "#EEE",
  dark: "#222"
}

/////_____[ MEDIA QUERY ]_____\\\\\
// @media ${device.laptop} {
//   //code
// }

//  @media ${device.mobileM} {} /* 375px */
//  @media ${device.mobileL} {} /* 425px */
//  @media ${device.tablet} {} /* 768px */
//  @media ${device.laptop} {} /* 1024px */
//  @media ${device.laptopL} {} /* 1440px */
//  @media ${device.desktop} {} /* 1880px */
//  @media ${device.desktopL} {} /* 2560px */

/** Tamaños de Pantallas */
export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '1880px',
  desktopL: '2560px'
}

/** Ejemplo: @media ${device.tablet} { ... } */
export const device = {
  /** mobileS: 320px - Mobile First*/
  mobileS: `(min-width: ${size.mobileS})`,
  /** mobileM: 375px - Mobile First*/
  mobileM: `(min-width: ${size.mobileM})`,
  /** mobileL: 425px - Mobile First*/
  mobileL: `(min-width: ${size.mobileL})`,
  /** tablet: 768px - Mobile First*/
  tablet: `(min-width: ${size.tablet})`,
  /** laptop: 1024px - Mobile First*/
  laptop: `(min-width: ${size.laptop})`,
  /** laptopL: 1440px - Mobile First*/
  laptopL: `(min-width: ${size.laptopL})`,
  /** desktop: 1880px - Mobile First*/
  desktop: `(min-width: ${size.desktop})`,
  /** desktop: 2560px - Mobile First*/
  desktopL: `(min-width: ${size.desktopL})`
}

export const maxWidth = '1000px'
