import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Fragment,
  Image,
  SafeAreaView,
  TouchableOpacity} from 'react-native'

// import calcAvgRating from '../utils/calcAvgRating'
//getting it to work
/* ***************************************** */
function calcAvgRating(aComments) {
  if (!aComments.length) {
    return 0;
  }

  const sum = aComments.reduce((acc, comment) => {
    return acc + comment.rating;
  },0);

  return sum / aComments.length;
}

/* ***************************************** */
const Stars = (props) => {
  const { comments } = props;

  if (!comments.length) {
    return (
      <View style={styles.container}>
        <Text>no ratings yet</Text>
      </View>
    )
  }

  const avgRating = calcAvgRating(comments);
  const aStars = [];
  for (let i = 0; i <= 4; i++) {
    if ((i + 0.75) <= avgRating) {
      aStars.push(( <Image key={i} style={styles.star} source={require('../assets/images/star2-filled.png')} /> ));
    } else if (i + 0.25 <= avgRating) {
      aStars.push(( <Image key={i} style={styles.star} source={require('../assets/images/star2-half2.png')} /> ));
    } else {
      aStars.push(( <Image key={i} style={styles.star} source={require('../assets/images/star2-unfilled.png')} /> ));
    }
  }

  const ratings = `${comments.length} rating${(comments.length > 1) ? 's' : ''}`;

  return (
    <View style={styles.container}>
      {aStars.map(star => (
        star
      ))}
      <Text> ({ratings})</Text>
    </View>
  );
};


/* ***************************************** */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  star: {
    width: 18,
    height: 18,
  },
});

export default Stars
