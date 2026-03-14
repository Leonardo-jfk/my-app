import React from "react";
import { ImageBackground, StyleSheet, ViewStyle } from "react-native";
import { useAppTheme } from "../hooks/useAppTheme";

interface BackgroundImageProps {
  children: React.ReactNode;
  style?: ViewStyle;
  opacity?: number;
  blurRadius?: number;
}

export default function BackgroundImage({
  children,
  style,
  opacity = 0.3,
  blurRadius = 5,
}: BackgroundImageProps) {
  const { theme } = useAppTheme();

  const backgroundImage =
    theme === "dark"
      ? require("../../assets/images/RichBackDark.jpg")
      : require("../../assets/images/RichBackLight.jpg");

  return (
    <ImageBackground
      source={backgroundImage}
      style={[styles.container, style]}
      imageStyle={{ opacity }}
      blurRadius={blurRadius}
    >
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
