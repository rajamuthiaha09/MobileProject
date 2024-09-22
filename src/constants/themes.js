import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const COLORS = {
  //Common Theme colors
  '$White': '#fff',
  '$black': '#000',
  '$primary': '#45484A',
  '$secondary': '#AEB5BB',
  '$green':'#008000',
  '$red':'#FF0000',

  //gray color
  '$gray': '#D9D9D9',
  '$darkGray': '#A9A9A9',
  '$grey_shade_1': '#959292',

  //pink color
  '$pink_shade_1': '#FFF7FC',

  //blue color
  // '$blue_shade': '#007BFF',
  '$blue_shade_1': '#2196F3',
  '$blue_shade_3': '#007bff',
  '$blue_shade_2': '#1F41BB',
  '$inputBorderBlue': '#456DFE',

  //yellow color
  '$yellow': '#FFD700',

};

export const SIZES = {
  // margin
  margin_10: 10,
  margin_12: 12,
  margin_15: 15,
  margin_20: 20,
  margin_30: 30,
  margin_40: 40,

  // padding
  padding_2: 2,
  padding_3: 3,
  padding_6: 6,
  padding_10: 10,
  padding_15: 15,
  padding_20: 20,
  padding_30: 30,
  padding_25: 25,

  // font
  sz_12_font: 12,
  sz_14_font: 14,
  sz_16_font: 16,
  sz_17_font: 17,
  sz_18_font: 18,
  sz_19_font: 19,
  sz_20_font: 20,
  sz_21_font: 21,
  sz_22_font: 22,
  sz_24_font: 24,
  sz_25_font: 25,
  sz_28_font: 28,
  sz_30_font: 30,
  sz_32_font: 32,
  sz_34_font: 34,
  sz_40_font: 40,

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