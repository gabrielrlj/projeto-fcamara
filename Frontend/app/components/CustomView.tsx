import React, { ReactNode } from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

interface CustomViewProps extends ViewProps {
  children: ReactNode
}

export default function CustomView({ children, ...rest}: CustomViewProps) {
  return (
    <View {...rest} style={styles.container} >
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