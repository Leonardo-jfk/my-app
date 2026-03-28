// import React from "react";
// import { StyleSheet, View, ViewStyle } from "react-native";
// import { useAppTheme } from "../hooks/useAppTheme";

// interface IslandCardProps {
//   children: React.ReactNode;
//   style?: ViewStyle;
// }

// export default function IslandCard({ children, style }: IslandCardProps) {
//   const { theme } = useAppTheme();

//   // Couleurs adaptées au thème
//   const backgroundColor =
//     theme === "dark"
//       ? "rgba(0, 0, 0, 0.7)" // Sombre en mode sombre
//       : "rgba(255, 255, 255, 0.4)"; // Clair en mode clair

//   const borderColor =
//     theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.8)";

//   return (
//     <View style={[styles.card, { backgroundColor, borderColor }, style]}>
//       {children}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     borderRadius: 24,
//     padding: 20,
//     marginBottom: 16,
//     borderWidth: 1,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.3,
//     shadowRadius: 20,
//     elevation: 5,
//   },
// });

// import React from "react";
// import { StyleSheet, View, ViewStyle } from "react-native";
// import { useTheme } from "../context/ThemeContext"; // ← Changement ici

// interface IslandCardProps {
//   children: React.ReactNode;
//   style?: ViewStyle;
// }

// export default function IslandCard({ children, style }: IslandCardProps) {
//   const { theme } = useTheme(); // ← Utilisez useTheme au lieu de useAppTheme

//   const backgroundColor =
//     theme === "dark" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.4)";

//   const borderColor =
//     theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.8)";

//   return (
//     <View style={[styles.card, { backgroundColor, borderColor }, style]}>
//       {children}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     borderRadius: 24,
//     padding: 20,
//     marginBottom: 16,
//     borderWidth: 1,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.3,
//     shadowRadius: 20,
//     elevation: 5,
//   },
// });

// // import React, { useEffect, useState } from "react"; // ← Ajouter useEffect, useState
// import { StyleSheet, View, ViewStyle } from "react-native";
// import { useTheme } from "../context/ThemeContext";

// interface IslandCardProps {
//   children: React.ReactNode;
//   style?: ViewStyle;
// }

// // export default function IslandCard({ children, style }: IslandCardProps) {
// //   const { theme } = useTheme();

// //   // Utiliser useState pour forcer le re-rendu
// //   const [cardStyle, setCardStyle] = useState({
// //     backgroundColor:
// //       theme === "dark" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.4)",
// //     borderColor:
// //       theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.8)",
// //   });

// //   // Mettre à jour le style quand le thème change
// //   useEffect(() => {
// //     setCardStyle({
// //       backgroundColor:
// //         theme === "dark" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.4)",
// //       borderColor:
// //         theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.8)",
// //     });
// //   }, [theme]);

// //   return <View style={[styles.card, cardStyle, style]}>{children}</View>;
// // }

// export default function IslandCard({ children, style }: IslandCardProps) {
//   const { theme } = useTheme();

//   // On calcule les couleurs à chaque rendu, c'est très rapide
//   const backgroundColor =
//     theme === "dark" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.4)";

//   const borderColor =
//     theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.8)";

//   return (
//     <View style={[styles.card, { backgroundColor, borderColor }, style]}>
//       {children}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     borderRadius: 24,
//     padding: 20,
// //     paddingVertical: 20, // padding vertical
// //     paddingHorizontal: 16, // padding horizontal interne
// //     marginBottom: 16,
// //     marginHorizontal: 16,
// //     borderWidth: 1,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 10 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 20,
// //     elevation: 5,
// //   },
// // });

// // IslandCard.tsx
// import { StyleSheet, View, ViewStyle } from "react-native";
// import { useTheme } from "../context/ThemeContext";

// // interface IslandCardProps {
// //   children: React.ReactNode;
// //   style?: ViewStyle;
// //   noPadding?: boolean; // ← Ajouter cette prop
// // }

// // export default function IslandCard({
// //   children,
// //   style,
// //   noPadding = false,
// // }: IslandCardProps) {
// //   const { theme } = useTheme();

// //   const backgroundColor =
// //     theme === "dark" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.4)";

// //   const borderColor =
// //     theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.8)";

// //   return (
// //     <View
// //       style={[
// //         styles.card,
// //         noPadding && styles.noPadding, // ← Si noPadding, appliquer un style sans padding
// //         { backgroundColor, borderColor },
// //         style,
// //       ]}
// //     >
// //       {children}
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   card: {
// //     borderRadius: 24,
// //     padding: 20,
// //     paddingVertical: 16,
// //     paddingHorizontal: 16,
// //     marginBottom: 16,
// //     marginHorizontal: 16,
// //     borderWidth: 1,
// //     shadowColor: "#000",
// //     shadowOffset: { width: 0, height: 10 },
// //     shadowOpacity: 0.3,
// //     shadowRadius: 20,
// //     // elevation: 5,
// //   },
// //   noPadding: {
// //     padding: 0, // ← Pas de padding
// //     paddingVertical: 0,
// //     paddingHorizontal: 0,
// //   },
// // });

// // IslandCard.tsx
// interface IslandCardProps {
//   children: React.ReactNode;
//   style?: ViewStyle;
//   noPadding?: boolean;
//   compact?: boolean; // ← Ajouter cette prop
//   paddingTop?: number;      // ← Padding seulement en haut
//   paddingBottom?: number;   // ← Padding seulement en bas
//   paddingLeft?: number;     // ← Padding seulement à gauche
//   paddingRight?: number;
// }

// export default function IslandCard({
//   children,
//   style,
//   noPadding = false,
//   compact = false,
// }: IslandCardProps) {
//   const { theme } = useTheme();

//   const backgroundColor =
//     theme === "dark" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.4)";

//   const borderColor =
//     theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.8)";

//   return (
//     <View
//       style={[
//         styles.card,
//         noPadding && styles.noPadding,
//         compact && styles.compact, // ← Style compact
//         { backgroundColor, borderColor },
//         style,
//       ]}
//     >
//       {children}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     borderRadius: 24,
//     padding: 20,
//     paddingVertical: 20,
//     paddingHorizontal: 16,
//     marginBottom: 16,
//     marginHorizontal: 16,
//     borderWidth: 1,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 10 },
//     shadowOpacity: 0.3,
//     shadowRadius: 20,
//     elevation: 5,
//   },
//   noPadding: {
//     padding: 0,
//     paddingVertical: 0,
//     paddingHorizontal: 0,
//   },
//   compact: {
//     paddingVertical: 8, // ← Réduit l'espace interne
//     paddingHorizontal: 12,
//   },
// });

// IslandCard.tsx
import { StyleSheet, View, ViewStyle } from "react-native";
import { useTheme } from "../context/ThemeContext";

interface IslandCardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  noPadding?: boolean;
  compact?: boolean;
  paddingTop?: number; // ← Padding seulement en haut
  paddingBottom?: number; // ← Padding seulement en bas
  paddingLeft?: number; // ← Padding seulement à gauche
  paddingRight?: number; // ← Padding seulement à droite
}

export default function IslandCard({
  children,
  style,
  noPadding = false,
  compact = false,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: IslandCardProps) {
  const { theme } = useTheme();

  const backgroundColor =
    theme === "dark" ? "rgba(0, 0, 0, 0.7)" : "rgba(255, 255, 255, 0.4)";

  const borderColor =
    theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.8)";

  // Style par défaut
  let paddingStyle = {};

  if (noPadding) {
    paddingStyle = { padding: 0, paddingVertical: 0, paddingHorizontal: 0 };
  } else if (compact) {
    paddingStyle = { paddingVertical: 8, paddingHorizontal: 12 };
  } else if (
    paddingTop !== undefined ||
    paddingBottom !== undefined ||
    paddingLeft !== undefined ||
    paddingRight !== undefined
  ) {
    // Padding personnalisé
    paddingStyle = {
      paddingTop: paddingTop ?? 20,
      paddingBottom: paddingBottom ?? 20,
      paddingLeft: paddingLeft ?? 16,
      paddingRight: paddingRight ?? 16,
    };
  } else {
    // Padding par défaut
    paddingStyle = { padding: 20, paddingVertical: 20, paddingHorizontal: 16 };
  }

  return (
    <View
      style={[
        styles.card,
        paddingStyle,
        { backgroundColor, borderColor },
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    marginBottom: 16,
    marginHorizontal: 16,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 5,
  },
});
