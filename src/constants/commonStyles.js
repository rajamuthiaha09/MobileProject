import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from './themes';

export const commonStyles = StyleSheet.create({
  commonHeaderText: {
    fontSize: SIZES.sz_20_font,
    paddingBottom: SIZES.padding_15,
    color: COLORS.$black,
  },
  flexAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexJustifySpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paidorFree: {
    position: 'absolute',
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  flexContentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});