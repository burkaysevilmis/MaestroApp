import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default StyleSheet.create({
  screen: {
    height: 'auto',
    marginBottom: 20,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  imageBox: {
    flex: 1,

    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 400,
    height: 150,
  },
  summary: {
    marginLeft: 10,
    color: 'white',
    fontSize: 17,
    margin: 5,
  },
  detailFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailBox: {
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    height: 30,
    width: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 17,
  },
  totalReading: {
    marginRight: 10,
    color: 'red',
    backgroundColor: 'white',
    marginBottom: 10,
    padding: 5,
    borderRadius: 8,
  },
  title: {
    marginLeft: 10,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
