import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';
import {BlogContext} from '../context/ContextProvider';
import {WebView} from 'react-native-webview';
export default function Blog(props) {
  const context = useContext(BlogContext);
  const postId = props.route.params.id;
  const selectedBlog = context.blogList.filter(
    (blog) => blog.postId === postId,
  );
  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: selectedBlog[0].title,
    });
  }, [selectedBlog, props.navigation]);
  return (
    <View style={{flex: 1}}>
      <WebView
        originWhitelist={['*']}
        source={{html: selectedBlog[0].content}}
      />
    </View>
  );
}
