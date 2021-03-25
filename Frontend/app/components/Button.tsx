import React from 'react';
import { Text, TouchableHighlightProps } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

import CustomView from './CustomView';

interface ButtomProps extends TouchableHighlightProps {
  text: string;
}

export default function Buttom({ text, ...rest }: ButtomProps) {
  return (
    <TouchableHighlight>
        <CustomView {...rest} >
          <Text>{text}</Text>
        </CustomView>
      </TouchableHighlight>
  );
}