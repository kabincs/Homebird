import React, { useState, useCallback, useRef } from "react";
import { Text, View, SafeAreaView, Image } from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel";

const exampleItems = [
  {
    title: "Lorem Ipsum",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
    imgSrc: require("../../../assets/product1.jpg"),
  },
  {
    title: "1914 translation",
    text: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment",
    imgSrc: require("../../../assets/product2.jpg"),
  },
  {
    title: "Sed ut perspiciatis",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis",
    imgSrc: require("../../../assets/product3.jpg"),
  },
  {
    title: "Item 4",
    text: "Text 4",
    imgSrc: require("../../../assets/product4.jpg"),
  },
  {
    title: "Item 5",
    text: "Text 5",
    imgSrc: require("../../../assets/product5.jpg"),
  },
];

const CustomCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(exampleItems);
  const [activeSlide, setActiveSlide] = useState(0);
  const ref = useRef(null);

  const renderItem = useCallback(
    ({ item, index }) => (
      <View
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 5,
          height: 250,
        }}
      >
        <Image
          style={{ height: 250, width: 420, borderRadius: 5 }}
          source={item.imgSrc}
        ></Image>
        <View style={{ position: "absolute", bottom: 0, width: 420 }}>
          <Text
            style={{
              padding: 5,
              fontSize: 25,
              backgroundColor: "rgba(52, 52, 52, 0.8)",
              color: "#fff",
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              padding: 5,
              fontSize: 15,
              backgroundColor: "rgba(52, 52, 52, 0.8)",
              color: "#fff",
            }}
          >
            {item.text}
          </Text>
        </View>
      </View>
    ),
    []
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#f7a048", paddingTop: 0 }}
    >
      <View style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}>
        <Carousel
          layout="default"
          ref={ref}
          autoplay={true}
          showsHorizontalScrollIndicator={false}
          onSnapToItem={(index) => setActiveSlide(index)}
          loop={true}
          data={carouselItems}
          sliderWidth={420}
          itemWidth={420}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomCarousel;
