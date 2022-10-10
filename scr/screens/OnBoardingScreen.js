import {
  StyleSheet,
  useWindowDimensions,
  FlatList,
  SafeAreaView,
} from "react-native";
import React from "react";
import OnBoardingItem from "./OnBoardingItem";
import Dots from "../components/Dots";
import { useState } from "react";

const onBoardingList = [
  {
    id: 1,
    imageUrl: require("../../assets/images/group.png"),
  },
  {
    id: 2,
    imageUrl: require("../../assets/images/card1.png"),
  },
];

const OnBoardingScreen = () => {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnScroll = (event) => {
    const leftSpace = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(leftSpace / width);
    setActiveIndex(currentIndex);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={onBoardingList}
        keyExtractor={(item) => item.id}
        pagingEnabled
        disableIntervalMomentum
        onScroll={handleOnScroll}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <OnBoardingItem imageUrl={item.imageUrl} />}
      />
      <FlatList
        data={onBoardingList}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        contentContainerStyle={styles.dotsContentContainerStyle}
        renderItem={({ index }) => (
          <Dots index={index} activeIndex={activeIndex} />
        )}
      />
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // marginHorizontal: 65,
  },
  dotsContentContainerStyle: {
    justifyContent: "center",
    flex: 1,
  },
});
