import React, { Component } from "react";
import { View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";
import { BASE_URL } from "../../api/explore";

class KosView extends Component {
  render() {
    const { width } = Dimensions.get("window");
    return (
      <View style={{ display: this.props.display }}>
        <ScrollView
          pagingEnabled={true}
          horizontal={true}
          style={styles.imageContainer}
          showsHorizontalScrollIndicator={false}
        >
          {this.props.kostList.images.map((image, id) => {
            return (
              <Image
                key={id}
                style={[styles.image, { width: width }]}
                source={{
                  uri: `${BASE_URL}/${image.uri}`
                }}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 230
  },
  imageContainer: {
    height: 230
  }
});

export default KosView;
