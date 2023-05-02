import { Image, StyleSheet } from "react-native";

function ImageViewer({ imageSource, selectedImage }) {
  const imageSrc =
    selectedImage !== null ? { uri: selectedImage } : imageSource;

  return <Image style={styles.image} source={imageSrc} />;
}

export default ImageViewer;
const styles = StyleSheet.create({
  image: {
    height: 440,
    width: 320,
    borderRadius: 18,
  },
});
