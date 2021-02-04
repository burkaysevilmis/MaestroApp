import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {BlogContext} from '../context/ContextProvider';
import style from '../style/Blog';
import blogItem from '../components/blogItem';
export default function Blog(props) {
  const context = useContext(BlogContext);
  useEffect(() => {
    context.getData();
  }, []);
  if (context.loading) {
    return (
      <View style={[style.loadingFlex]}>
        <ActivityIndicator color="white" size="large" />
      </View>
    );
  }
  return (
    <View style={[style.screen]}>
      <FlatList
        numColumns={1}
        data={context.blogList}
        onEndReachedThreshold={0.1}
        onEndReached={() => {
          context.addData();
        }}
        extraData={context.blogList}
        onRefresh={() => context.onRefresh()}
        refreshing={context.refreshing}
        scrollEnabled={!context.addDataLoading}
        renderItem={({item}) => blogItem(item, props.navigation)}
        keyExtractor={(item) => {
          item.postId;
        }}
      />
      {context.addDataLoading ? (
        <View style={[style.loading]}>
          <ActivityIndicator color="white" size="large" />
        </View>
      ) : null}
    </View>
  );
}
