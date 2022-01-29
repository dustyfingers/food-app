import { StyleSheet } from 'react-native';


export const theme = {
    // colors, spacing, fonts, etc
    standardPadding: 15,
    largeFontSize: 20
}

export const sharedStyles = StyleSheet.create({
    pageContainer: {
        minHeight: '100%',
        minWidth: '100%',
        padding: theme.standardPadding
    }
})
