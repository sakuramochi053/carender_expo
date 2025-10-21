import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

export default function App() {
  const [selectedDate, setSelectedDate] = useState<string>("");

  return (
    <View style={styles.container}>
      <Calendar
        // 初期表示月を今日に設定
        current={new Date().toISOString().split("T")[0]}
        // ユーザーが日付をタップした時
        onDayPress={(day) => {
          console.log("選択された日：", day);
          setSelectedDate(day.dateString);
        }}
        // 選択された日付のスタイル
        markedDates={{
          [selectedDate]: {
            selected: true,
            marked: true,
            selectedColor: "#00adf5"
          }
        }}
        // カスタムテーマ（任意）
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "orange",
          monthTextColor: "blue",
          indicatorColor: "blue",
        }}
        style={styles.calendar}
      />

      <Text style={styles.selectedText}>
        選択日： {selectedDate || "なし"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, backgroundColor: "#fff" },
  calendar: { marginBottom: 20 },
  selectedText: { fontSize: 18, textAlign: "center" },
});
