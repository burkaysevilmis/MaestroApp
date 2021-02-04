import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import style from '../style/blogItem';
export default function blogItem(item, navigation) {
  return (
    <TouchableNativeFeedback>
      <View style={[style.screen]}>
        <Text style={[style.title]}>{item.title}</Text>
        <View style={[style.imageBox]}>
          <Image
            resizeMode="cover"
            style={[style.image]}
            source={{uri: item.banner}}
          />
        </View>
        <Text style={[style.summary]}>{item.summary}</Text>
        <View style={[style.detailFlex]}>
          <TouchableOpacity style={[style.detailBox]}>
            <Text
              onPress={() => {
                navigation.navigate('BlogDetail', {id: item.postId});
              }}
              style={[style.detailText]}>
              Detail
            </Text>
          </TouchableOpacity>
          <Text style={[style.totalReading]}>{item.totalReadingTime} min</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}
