import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import React from "react";
import Header from "../components/Header";
import OnFlexBoxItem from "../screens/OnFlexBoxItem";
import Footer from "../components/Footer";
import { useWindowDimensions } from "react-native";

const onFlexboxList = [
  {
    id: 1,
    title: "متطلبات تأسيس منشاة مقاولات",
    imageUrl: require("../../assets/flexBoxImages/group12.png"),
  },
  {
    id: 2,
    title: "التعريف بقطاع المقاولات ",
    imageUrl: require("../../assets/flexBoxImages/construction_project_plan_building_architect_design_develop-61_icon-icons.com_60253.png"),
  },
  {
    id: 3,
    title: " قواعد وإجراءات أساسية بشأن التعاقد ",
    imageUrl: require("../../assets/flexBoxImages/business.png"),
  },
  {
    id: 4,
    title: "تراخيص مزاولة نشاط المقاولات",
    imageUrl: require("../../assets/flexBoxImages/file.png"),
  },
  {
    id: 5,
    title: "منصات الكترونية في خدمة المقاول",
    imageUrl: require("../../assets/flexBoxImages/group53.png"),
  },
  {
    id: 6,
    title: "الجهات ذات العلاقة",
    imageUrl: require("../../assets/flexBoxImages/develop.png"),
  },
  {
    id: 7,
    title: "آليات تسليم مشاريع المقاولات",
    imageUrl: require("../../assets/flexBoxImages/construction_project_plan_building_architect_design_develop-95_icon-icons.com_60215.png"),
  },
  {
    id: 8,
    title: "خطة عمل المشروعات وتدفقاتها المالية",
    imageUrl: require("../../assets/flexBoxImages/money.png"),
  },
  {
    id: 9,
    title: "علاقة  المقاول مع مكاتب وإجراءات السلامة",
    imageUrl: require("../../assets/flexBoxImages/bank.png"),
  },
  {
    id: 10,
    title: "أنظمة عقود المقاولات ",
    imageUrl: require("../../assets/flexBoxImages/contract.png"),
  },
  {
    id: 11,
    title: ":لجنة المقاولات",
    imageUrl: require("../../assets/flexBoxImages/group40.png"),
  },
  {
    id: 12,
    title: "الجانب الاجتماعي والوطني ",
    imageUrl: require("../../assets/flexBoxImages/social-care.png"),
  },
];

const FlexboxScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <SafeAreaView style={[styles.contanier1, { width }]}>
      <View>
        <Header title="المقاولات" />
      </View>
      <Text style={styles.index}>الفهرس</Text>
      <FlatList
        style={{ marginBottom: 60 }}
        data={onFlexboxList}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <OnFlexBoxItem
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
          />
        )}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default FlexboxScreen;

const styles = StyleSheet.create({
  contanier1: {
    backgroundColor: "#F8F8FF",
  },
  statusBar: {
    backgroundColor: "red",
  },
  statusBar: {
    backgroundColor: "#7380A1",
  },
  index: {
    paddingRight: 30,
    fontSize: 16,
    fontFamily: "Cairo",
  },
});
