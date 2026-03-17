// import React from "react";
// import { ImageBackground, StyleSheet, ViewStyle } from "react-native";
// import { useAppTheme } from "../hooks/useAppTheme";

// interface BackgroundImageProps {
//   children: React.ReactNode;
//   style?: ViewStyle;
//   opacity?: number;
//   blurRadius?: number;
// }

// export default function BackgroundImage({
//   children,
//   style,
//   opacity = 0.3,
//   blurRadius = 5,
// }: BackgroundImageProps) {
//   const { theme } = useAppTheme();

//   const backgroundImage =
//     theme === "dark"
//       ? require("../../assets/images/RichBackDark.jpg")
//       : require("../../assets/images/RichBackLight.jpg");

//   return (
//     <ImageBackground
//       source={backgroundImage}
//       style={[styles.container, style]}
//       imageStyle={{ opacity }}
//       blurRadius={blurRadius}
//     >
//       {children}
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// import React from "react";
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, ViewStyle } from "react-native";
import { useTheme } from "../context/ThemeContext"; // ← Changement ici

interface BackgroundImageProps {
  children: React.ReactNode;
  style?: ViewStyle;
  opacity?: number;
  blurRadius?: number;
}

// export default function BackgroundImage({
//   children,
//   style,
//   opacity = 0.6,
//   blurRadius = 2,
// }: BackgroundImageProps) {
//   const { theme } = useTheme(); // ← Utilisez useTheme

//   const backgroundImage =
//     theme === "dark"
//       ? require("../../assets/images/RichBackDark.jpg")
//       : require("../../assets/images/RichBackLight.jpg");

//   return (
//     <ImageBackground
//       source={backgroundImage}
//       style={[styles.container, style]}
//       imageStyle={{ opacity }}
//       blurRadius={blurRadius}
//     >
//       {children}
//     </ImageBackground>
//   );
// }

export default function BackgroundImage({
  children,
  style,
  opacity = 0.6,
  blurRadius = 2,
}: BackgroundImageProps) {
  const { theme } = useTheme();
  const [imageSource, setImageSource] = useState(
    theme === "dark"
      ? require("../../assets/images/RichBackDark.jpg")
      : require("../../assets/images/RichBackLight.jpg"),
  );

  // FORCER le re-rendu quand le thème change
  useEffect(() => {
    setImageSource(
      theme === "dark"
        ? require("../../assets/images/RichBackDark.jpg")
        : require("../../assets/images/RichBackLight.jpg"),
    );
  }, [theme]); // ← Dépendance sur theme

  return (
    <ImageBackground
      source={imageSource}
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
