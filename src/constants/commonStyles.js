import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "./themes";


export const commonStyles = StyleSheet.create({
    commonHeaderText: {
        fontSize: SIZES.sz_20_font,
        paddingBottom: SIZES.padding_15,
        // fontWeight: 'bold',
        color: COLORS.$black
      },
}
)