import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import React from "react";
export default function WhosUsScreen() {
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView style={[styles.container, { width }]}>
      <Image
        style={styles.imgStyle}
        source={require("../../assets/images/group.png")}
      />
      <Text style={styles.title}>من نحن</Text>
      <Text style={styles.content}>
        نقوم بتنفيذ جميع مقاولات واعمال البناء بجميع المراحل بداية من اعمال
        الحفر للأساسات مرورا بجميع المراحل وحتى اعمال تركيب الكهرباء والسباكة
        والنجارة واعمال السيراميك والرخام والواجهات والدهانات.
        {"\n"}
        {"\n"}نقدم مجموعة كبيرة ومتميزة من الافكار والتصميمات لتشطيب العقارات
        والوحدات السكنية والشركات والهيئات والمؤسسات الحكومية وغيرها من الوحدات
        وتركيب كافة الخدمات واعمال التشطيبات الكاملة.
        {"\n"}
        {"\n"}نقدم كافة الخدمات الخاصة بتصميم الديكورات وفق احدث الاساليب
        المتطورة والاشكال العصرية
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    marginVertical: 100,
  },
  title: {
    fontSize: 29,
    fontFamily: "Cairo",
    color: "#848698",
    marginBottom: 64,
  },
  content: {
    fontFamily: "CairoRegular",
    marginRight: 15,
    marginLeft: 35,
    fontSize: 12,
  },
});
