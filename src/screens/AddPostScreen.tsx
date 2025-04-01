import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export const AddPostScreen = () => {
  const [image, setImage] = useState<string | null>(null);
  const [caption, setCaption] = useState('');

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handlePost = () => {
    if (!image) {
      Alert.alert('Please select an image first');
      return;
    }
    // TODO: Implement actual post creation with Firebase
    Alert.alert('Success', 'Post created! (This is just a mock for now)');
    setImage(null);
    setCaption('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>New Post</Text>
          <TouchableOpacity 
            style={styles.postButton}
            onPress={handlePost}
          >
            <Text style={styles.postButtonText}>Share</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {image ? (
            <Image source={{ uri: image }} style={styles.selectedImage} />
          ) : (
            <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
              <Ionicons name="add-circle-outline" size={40} color="#666" />
              <Text style={styles.imagePickerText}>Select Image</Text>
            </TouchableOpacity>
          )}

          <TextInput
            style={styles.captionInput}
            placeholder="Write a caption..."
            value={caption}
            onChangeText={setCaption}
            multiline
            numberOfLines={4}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postButton: {
    paddingHorizontal: 15,
  },
  postButtonText: {
    color: '#0095f6',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  imagePicker: {
    width: '100%',
    height: 300,
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderStyle: 'dashed',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  imagePickerText: {
    marginTop: 10,
    color: '#666',
  },
  selectedImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
    marginBottom: 15,
  },
  captionInput: {
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 8,
    padding: 10,
    height: 100,
    textAlignVertical: 'top',
  },
}); 