import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export default function PrimaryButton(text: string, onPress: any) {
  return (
    <Button
      style={styles.button}
      mode="contained"
      labelStyle={{ fontSize: 18, fontWeight: 600 }}
      onPress={() => {
        onPress;
      }}
    >
      {text}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.dark,
    color: COLORS.white,
    width: 220,
  },
});
