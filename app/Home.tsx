import { View, ScrollView } from "react-native";

import React from "react";
import OfferCard from "@/components/OfferCard";
import SectionTitle from "@/components/SectionTitle";
import GameCard from "@/components/GameCard";

let arrOfCards = [
  { id: 1, price: 5, title: "Sirius XM" },
  { id: 2, price: 5, title: "Sirius XM" },
  { id: 3, price: 5, title: "Sirius XM" },
  { id: 4, price: 5, title: "Sirius XM" },
];

const Home = () => {
  return (
    <View className="flex-1 bg-[#4E08D7]">
      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {/* box adding */}
        <OfferCard />

        {/* section title */}
        <SectionTitle title="Hot OFFERS" />

        {/* home cards */}
        {arrOfCards.map((e) => (
          <View key={e.id}>
            <GameCard title={e.title} price={e.price} />
          </View>
        ))}
      </ScrollView>

      {/* <View className="flex-1">
        <FlatList
          data={arrOfCards}
          renderItem={({ item }) => <GameCard />}
          keyExtractor={(item) => item.id.toString()}
        />
      </View> */}
    </View>
  );
};

export default Home;
