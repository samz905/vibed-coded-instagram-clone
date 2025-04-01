import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Temporary mock data for posts
const MOCK_POSTS = [
  {
    id: '1',
    username: 'user1',
    userAvatar: 'https://via.placeholder.com/40',
    postImage: 'https://via.placeholder.com/400',
    likes: 123,
    caption: 'Beautiful day! #instagram #clone',
  },
  {
    id: '2',
    username: 'user2',
    userAvatar: 'https://via.placeholder.com/40',
    postImage: 'https://via.placeholder.com/400',
    likes: 456,
    caption: 'Another great post #reactnative',
  },
];

const Post = ({ post }: { post: typeof MOCK_POSTS[0] }) => (
  <View style={styles.postContainer}>
    <View style={styles.postHeader}>
      <Image source={{ uri: post.userAvatar }} style={styles.avatar} />
      <Text style={styles.username}>{post.username}</Text>
    </View>
    <Image source={{ uri: post.postImage }} style={styles.postImage} />
    <View style={styles.postFooter}>
      <Text style={styles.likes}>{post.likes} likes</Text>
      <Text style={styles.caption}>{post.caption}</Text>
    </View>
  </View>
);

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Instagram Clone</Text>
      </View>
      <FlatList
        data={MOCK_POSTS}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  postContainer: {
    marginBottom: 15,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  postFooter: {
    padding: 10,
  },
  likes: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  caption: {
    color: '#262626',
  },
}); 