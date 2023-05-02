import { Image, View } from "react-native";

function EmojiSticker({ stickerSource, imageSize }) {
  return (
    <View style={{ top: -350 }}>
      <Image
        source={stickerSource}
        style={{ width: imageSize, height: imageSize }}
      />
    </View>
  );
}

export default EmojiSticker;
