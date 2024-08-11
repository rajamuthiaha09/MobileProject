import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {

  //Common Theme colors
  '$White': '#fff',
  '$black': '#000',
  '$primary': '#45484A',
  '$secondary': '#AEB5BB',
  '$green':'#008000',

  //gray color
  '$gray': '#D9D9D9',
  '$grey_shade_1': '#959292',

  //pink color
  '$pink_shade_1': '#FFF7FC',

  //blue color
  '$blue_shade_1': '#007bff',

};

export const SIZES = {
  // margin
  margin_10: 12,
  margin_20: 20,

  // padding
  padding_20: 20,
  // padding_24: 24,
  // padding_30: 30,

  // font
  sz_16_font: 16,
  sz_17_font: 17,
  sz_18_font: 18,
  sz_20_font: 20,
  sz_22_font: 22,
  sz_25_font: 25,
  sz_28_font: 28,
  sz_30_font: 30,

  // font weight
  regular_font: '400',
  medium_font: '500',
  semi_bold_font: '600',
  bold_font: '700',

  // app dimensions
  width,
  height,

  // Font-Families
  Bold: 'Poppins-Bold',
  Light: 'Poppins-Light',
  Medium: 'Poppins-Medium',
  Regular: 'Poppins-Regular',
  SemiBold: 'Poppins-SemiBold',
};

const appTheme = { COLORS, SIZES };
export default appTheme;