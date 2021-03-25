import React, { useRef, useState } from 'react';
import { GestureResponderEvent, StyleSheet, Text, TouchableHighlightProps, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import CustomView from './CustomView';

interface ButtomProps extends TouchableHighlightProps {
  text: string;
}

export default function Button({ text, ...rest }: ButtomProps) {
  const [isTouching, setIsTouching] = useState(false);

  function handlePressInButton(e: GestureResponderEvent) {
    setIsTouching(true);
  }

  function handlePressOutButton(e: GestureResponderEvent) {
    setIsTouching(false);
  }

  return (
    <TouchableHighlight
      activeOpacity={0.4}
      underlayColor="#D3D3D4"
      delayPressIn={2}
      delayPressOut={3}
      {...rest}
      onPressIn={handlePressInButton}
      onPressOut={handlePressOutButton}
      style={styles.button}
    >
        <CustomView>
          <Text style={isTouching ? styles.textTouching : styles.textNotTouching} >{text}</Text>
        </CustomView>
      </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 275,
    height: 60,
    backgroundColor: '#DDD',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 20,
  },
  textNotTouching: {
    fontSize: 25,
    color: '#FFF',
  },
  textTouching: {
    fontSize: 25,
    color: '#000',
  }
})