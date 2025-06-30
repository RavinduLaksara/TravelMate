import { TextInput } from "react-native-paper";
import { useState } from "react";
import { COLORS } from "@/constants/colors";

export default function PrimaryTextInput(label: string) {
  const [text, setText] = useState("");
  return (
    <TextInput
      label={label}
      mode={"outlined"}
      value={text}
      onChangeText={(text) => setText(text)}
      left={<TextInput.Icon icon="email-outline" color={COLORS.dark} />}
      outlineColor={COLORS.dark}
      activeOutlineColor={COLORS.dark}
      style={[{ width: 300, letterSpacing: 2 }]}
      theme={{ roundness: 50, colors: { placeholder: COLORS.dark } }}
    />
  );
}
