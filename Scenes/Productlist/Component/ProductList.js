import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList, Image } from "react-native";
import AddCartBtn from "./AddCartBtn";
import { useSelector, useDispatch } from "react-redux";
import { addProductInCart, removeProductInCart } from "../../../Redux/action";

const DATA = [
  {
    id: "1",
    title: "First Item",
    imgSrc: require("../../../assets/product1.jpg"),
  },
  {
    id: "2",
    title: "Second Item",
    imgSrc: require("../../../assets/product2.jpg"),
  },
  {
    id: "3",
    title: "Third Item",
    imgSrc: require("../../../assets/product3.jpg"),
  },
];

const Item = ({
  title,
  productList,
  addProductToCart,
  removProductFromCart,
}) => {
  console.log(title);
  console.log(title.imgSrc);

  const handleClick = () => {};
  return (
    <View
      style={{
        borderBottomWidth: 1,
        padding: 3,
        borderBottomColor: "#f9f9f9",
        display: "flex",
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View>
        <Image
          style={{ height: 80, width: 80, borderRadius: 10 }}
          source={title.imgSrc}
        />
      </View>
      <View
        style={{
          backgroundColor: "rgba(52, 52, 52, 0.8)",
          marginLeft: 10,
          padding: 2,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          shadowColor: "#4d96f4",
        }}
      >
        <View>
          <Text
            style={{
              padding: 3,
              fontWeight: "bold",
              color: "#f9f9f9",
              fontSize: 15,
            }}
          >
            {" "}
            {title.title}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              padding: 10,
              color: "#f9f9f9",
              fontSize: 15,
            }}
          >
            Per Unit: {title.pricePerunit}$
          </Text>
          <Text
            style={{
              padding: 10,
              color: "#f9f9f9",
              fontSize: 15,
            }}
          >
            {" "}
            Total Price: {title.totalPrice ? title.totalPrice : 0}$
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          backgroundColor: "rgba(52, 52, 52, 0.8)",
          padding: 13,
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        <AddCartBtn
          item={title}
          handleClick={{
            addProductToCart: addProductToCart,
            removProductFromCart: removProductFromCart,
          }}
        ></AddCartBtn>
      </View>
    </View>
  );
};
const ProductList = () => {
  const [productList, setProductList] = useState([
    {
      id: "1",
      title: "First Item",
      imgSrc: require("../../../assets/product1.jpg"),
      pricePerunit: 4,
    },
    {
      id: "2",
      title: "Second Item",
      imgSrc: require("../../../assets/product2.jpg"),
      pricePerunit: 5,
    },
    {
      id: "3",
      title: "Third Item",
      imgSrc: require("../../../assets/product3.jpg"),
      pricePerunit: 6,
    },
  ]);
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.homeBirdShopping);
  useEffect(() => {
    //  console.log("After updatin", productList);
  });
  const addProductToCart = (product) => {
    // console.log(
    //   "*******************befor updating Product List*********************"
    // );
    // console.log(productList);
    //
    let newProductList = productList.map((item) => {
      //console.log(item.id);
      //console.log(product.id);
      item.id === product.id
        ? item.quantity
          ? (item = {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.pricePerunit,
            })
          : (item = { ...item, quantity: 1, totalPrice: 1 * item.pricePerunit })
        : item;
      return item;
    });

    //let [firstList, ...otherList] = productList;
    //console.log("------------------------------After--------------------");
    //firstList.qty ? (firstList.qty = firstList.qty + 1) : (firstList.qty = 1);
    //const newProductList = [firstList, ...otherList];
    //console.log("*******************First List*********************");
    //console.log(firstList);
    //console.log("*******************Other List*********************");
    //console.log(otherList);
    //console.log("*******************New Product List*********************");
    //console.log(newProductList);
    setProductList(newProductList);
    dispatch(addProductInCart(product));
    // console.log(newProductList);
    //console.log("*******************Updated Product List*********************");
    //console.log(productList);
    //console.log(shoppingCart);
  };
  const removProductFromCart = (product) => {
    console.log(product.id);
    let newProductList = productList.map((item) => {
      //console.log(item.id);
      //console.log(product.id);
      item.id === product.id
        ? item.quantity
          ? (item = {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: (item.quantity - 1) * item.pricePerunit,
            })
          : (item = { ...item, quantity: 0, totalPrice: 0 * item.pricePerunit })
        : item;
      return item;
    });
    setProductList(newProductList);
    dispatch(removeProductInCart(product.id));
    //console.log(store.getState());
  };
  const renderItem = ({ item }) => (
    <Item
      productList={productList}
      removProductFromCart={removProductFromCart}
      addProductToCart={addProductToCart}
      title={item}
    />
  );
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={productList}
        renderItem={renderItem}
      ></FlatList>
    </View>
  );
};
export default ProductList;
