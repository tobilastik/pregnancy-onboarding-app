import moment from 'moment';
import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import _Text from '../Text';
import {styles} from './styles';

interface DateComponentProps {
  date: any;
  onPress: () => void;
  datePicked: boolean;
  testID: string;
}

const DateComponent = ({
  date,
  onPress,
  datePicked,
  testID,
}: DateComponentProps) => {
  const [placeholder, setPlaceholder] = React.useState('Select date');
  return (
    <TouchableOpacity
      testID={testID}
      style={styles.dateContainer}
      onPress={onPress}>
      <_Text weight="bold" style={styles.dateTxt}>
        {datePicked ? moment(date).format('MMM DD, YYYY') : placeholder}
      </_Text>
    </TouchableOpacity>
  );
};

export default DateComponent;
