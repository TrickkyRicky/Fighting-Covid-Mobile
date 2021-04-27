import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Animated,
  Image,
  Dimensions,
} from "react-native";
import Card from "../UI/Card.js";
import Title from "../UI/Title.js";

const imageData = [
  { localImage: require("../../assets/Images/coming-soon-1.png"), id: 1 },
  { localImage: require("../../assets/Images/coming-soon-2.png"), id: 2 },
  { localImage: require("../../assets/Images/coming-soon-4.png"), id: 3 },
];

const { width } = Dimensions.get("window");

function infiniteScroll(data, mySlide) {
  const numOfData = data.length;
  let scrollValue = 0;
  let scrolled = 0;

  setInterval(function () {
    scrolled++;
    if (scrolled < numOfData) {
      scrollValue = scrollValue + (width * 0.9 - 50);
    } else {
      scrollValue = 0;
      scrolled = 0;
    }
    if (mySlide.current) {
      mySlide.current.scrollToOffset({ animated: true, offset: scrollValue });
    }
  }, 3000);
}

const CarouselCard = (props) => {
  const mySlide = useRef();
  const [dataList, setDataList] = useState(imageData);

  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    setDataList(imageData);
    infiniteScroll(dataList, mySlide);
  }, []);

  return (
    <Card style={styles.container}>
      <Title>Station Images</Title>
      <FlatList
        horizontal
        ref={mySlide}
        keyExtractor={(item, index) => item.id.toString()}
        pagingEnabled
        scrollEnabled
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        data={imageData}
        renderItem={({ item }) => {
          return (
            <Image
              style={styles.image}
              resizeMode="stretch"
              source={item.localImage}
              item={item}
            />
          );
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { x: scrollX } },
            },
          ],
          { useNativeDriver: false }
        )}
      />
      <View style={styles.dotView}>
        {imageData.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.1],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 10,
                width: 10,
                backgroundColor: "#e0e4fb",
                margin: 12,
                marginTop: 16,
                borderRadius: 6,
              }}
            />
          );
        })}
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 320,
  },
  image: {
    width: width * 0.9 - 50,
    height: 200,
  },
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default CarouselCard;
