import { Button } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import { COLORS } from "@/constants/colors";
interface PrimaryButtonProps {
  text: string;
  onPress: () => void;
}
export default function PrimaryButton({ text, onPress }: PrimaryButtonProps) {
  return (
    <View>
      <Button
        style={styles.button}
        mode="contained"
        labelStyle={{ fontSize: 18, fontWeight: 600 }}
        onPress={onPress}
      >
        {text}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.dark,
    color: COLORS.white,
    width: 250,
    alignSelf: "center",
  },
});
