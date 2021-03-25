import React, { ReactNode } from 'react'
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native'

interface CustomViewProps extends ViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export default function CustomView({ children, style, ...rest}: CustomViewProps) {
  return (
    <View {...rest} style={style ? style : styles.container} >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})