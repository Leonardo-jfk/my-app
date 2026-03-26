// // Fallback for using MaterialIcons on Android and web.

// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import { SymbolViewProps, SymbolWeight } from "expo-symbols";
// import { ComponentProps } from "react";
// import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";

// type IconMapping = Record<
//   SymbolViewProps["name"],
//   ComponentProps<typeof MaterialIcons>["name"]
// >;
// type IconSymbolName = keyof typeof MAPPING;

// /**
//  * Add your SF Symbols to Material Icons mappings here.
//  * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
//  * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
//  */
// const MAPPING = {
//   "house.fill": "home",
//   "house": "home",
//   "paperplane.fill": "send",
//   "chevron.left.forwardslash.chevron.right": "code",
//   "chevron.right": "chevron-right",
//   "list.bullet": "list",
//   "star.fill": "star",
//   star: "star",
//   "lightbulb.fill": "lightbulb",
//   lightbulb: "lightbulb",
//   "gearshape.fill": "settings",
//   gearshape: "settings",
//   signature: "edit",
// "logo-bitcoin": "signature.ja",
// } as IconMapping;

// /**
//  * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
//  * This ensures a consistent look across platforms, and optimal resource usage.
//  * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
//  */
// export function IconSymbol({
//   name,
//   size = 24,
//   color,
//   style,
//   type = "monochrome",
// }: {
//   name: IconSymbolName;
//   size?: number;
//   color: string | OpaqueColorValue;
//   style?: StyleProp<TextStyle>;
//   weight?: SymbolWeight;
//   type?: "monochrome" | "hierarchical" | "palette" | "multicolor";
// }) {
//   return (
//     <MaterialIcons
//       color={color}
//       size={size}
//       name={MAPPING[name]}
//       style={style}
//     />
//   );
// }

// Fallback for using MaterialIcons on Android and web.

// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import { SymbolViewProps, SymbolWeight } from "expo-symbols";
// import { ComponentProps } from "react";
// import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";

// type IconMapping = Record<
//   SymbolViewProps["name"],
//   ComponentProps<typeof MaterialIcons>["name"]
// >;
// type IconSymbolName = keyof typeof MAPPING;

// /**
//  * Add your SF Symbols to Material Icons mappings here.
//  * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
//  * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
//  */
// // const MAPPING = {
// //   "house.fill": "home",
// //   "house": "home",
// //   "paperplane.fill": "send",
// //   "chevron.left.forwardslash.chevron.right": "code",
// //   "chevron.right": "chevron-right",
// //   "list.bullet": "list",
// //   "star.fill": "star",
// //   "star": "star",
// //   "lightbulb.fill": "lightbulb",
// //   "lightbulb": "lightbulb",
// //   "gearshape.fill": "settings",
// //   "gearshape": "settings",
// //   "signature": "edit",
// //   "signature.ja": "edit", // ← Correction ici
// //   "logo-bitcoin": "bitcoin", // ← Correction pour bitcoin
// // } as IconMapping;

// const MAPPING = {
//   // Navigation
//   "house.fill": "home",
//   "house": "home",

//   // Transactions
//   "signature": "edit",
//   "signature.ja": "edit",
//   "receipt": "receipt",
//   "receipt.fill": "receipt",
//   "dollarsign.circle": "attach-money",
//   "dollarsign.circle.fill": "attach-money",
//   "creditcard": "credit-card",
//   "creditcard.fill": "credit-card",
//   "banknote": "money",

//   // Objectifs
//   "star.fill": "star",
//   "star": "star",
//   "heart.fill": "favorite",
//   "heart": "favorite-border",
//   "flag.fill": "flag",
//   "flag": "flag",
//   "trophy.fill": "emoji-events",
//   "trophy": "emoji-events",

//   // Sagesse / Ampoule
//   "lightbulb.fill": "lightbulb",
//   "lightbulb": "lightbulb-outline",

//   // Paramètres
//   "gearshape.fill": "settings",
//   "gearshape": "settings",
//   "gear": "settings",

//   // Actions
//   "trash.fill": "delete",
//   "trash": "delete-outline",
//   "pencil": "edit",
//   "pencil.fill": "edit",
//   "plus.circle.fill": "add-circle",
//   "plus.circle": "add-circle-outline",
//   "checkmark.circle.fill": "check-circle",
//   "checkmark.circle": "check-circle-outline",
//   "xmark.circle.fill": "cancel",
//   "xmark.circle": "cancel",

//   // Utilitaires
//   "calendar": "calendar-today",
//   "calendar.fill": "calendar-today",
//   "clock": "access-time",
//   "clock.fill": "access-time",
//   "magnifyingglass": "search",
//   "magnifyingglass.circle": "search",
//   "paperplane.fill": "send",
//   "paperplane": "send",

//   // Crypto
//   "logo-bitcoin": "currency-bitcoin",
//   "bitcoin": "currency-bitcoin",

//   // Fallback
//   "chevron.left.forwardslash.chevron.right": "code",
//   "chevron.right": "chevron-right",
//   "list.bullet": "list",
// } as IconMapping;

// /**
//  * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
//  * This ensures a consistent look across platforms, and optimal resource usage.
//  * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
//  */
// export function IconSymbol({
//   name,
//   size = 24,
//   color,
//   style,
//   type = "monochrome",
// }: {
//   name: IconSymbolName;
//   size?: number;
//   color: string | OpaqueColorValue;
//   style?: StyleProp<TextStyle>;
//   weight?: SymbolWeight;
//   type?: "monochrome" | "hierarchical" | "palette" | "multicolor";
// }) {
//   const mappedName = MAPPING[name];

//   // Si l'icône n'est pas trouvée, utiliser une icône par défaut
//   if (!mappedName) {
//     console.warn(`Icon "${name}" not found in mapping, using default`);
//     return (
//       <MaterialIcons
//         color={color}
//         size={size}
//         name="help-outline"
//         style={style}
//       />
//     );
//   }

//   return (
//     <MaterialIcons
//       color={color}
//       size={size}
//       name={mappedName}
//       style={style}
//     />
//   );
// }

// components/ui/icon-symbol.tsx
// Fallback for using MaterialIcons on Android and web.

// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
// import { SymbolViewProps, SymbolWeight } from "expo-symbols";
// import { ComponentProps } from "react";
// import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";

// type IconMapping = Record<
//   SymbolViewProps["name"],
//   ComponentProps<typeof MaterialIcons>["name"]
// >;
// type IconSymbolName = keyof typeof MAPPING;
// type IconMapping = Record<string, string>;

// /**
//  * Add your SF Symbols to Material Icons mappings here.
//  * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
//  * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
//  */
// const MAPPING = {
//   // Navigation
//   "house.fill": "home",
//   "house": "home",

//   // Transactions
//   "signature": "edit",
//   "signature.ja": "edit",
//   "receipt": "receipt",
//   "receipt.fill": "receipt",
//   "dollarsign.circle": "attach-money",
//   "dollarsign.circle.fill": "attach-money",
//   "creditcard": "credit-card",
//   "creditcard.fill": "credit-card",
//   "banknote": "money",
//   "banknote.fill": "money",
//   "cart": "shopping-cart",
//   "cart.fill": "shopping-cart",

//   // Objectifs
//   "star.fill": "star",
//   "star": "star-border",
//   "heart.fill": "favorite",
//   "heart": "favorite-border",
//   "flag.fill": "flag",
//   "flag": "flag",
//   "trophy.fill": "emoji-events",
//   "trophy": "emoji-events",
//   "target": "track-changes",

//   // Sagesse / Ampoule
//   "lightbulb.fill": "lightbulb",
//   "lightbulb": "lightbulb-outline",
//   "book.fill": "menu-book",
//   "book": "menu-book",

//   // Paramètres
//   "gearshape.fill": "settings",
//   "gearshape": "settings",
//   "gear": "settings",
//   "person.fill": "person",
//   "person": "person-outline",

//   // Actions
//   "trash.fill": "delete",
//   "trash": "delete-outline",
//   "pencil": "edit",
//   "pencil.fill": "edit",
//   "plus.circle.fill": "add-circle",
//   "plus.circle": "add-circle-outline",
//   "checkmark.circle.fill": "check-circle",
//   "checkmark.circle": "check-circle-outline",
//   "xmark.circle.fill": "cancel",
//   "xmark.circle": "cancel",
//   "arrow.up": "arrow-upward",
//   "arrow.down": "arrow-downward",
//   "arrow.left": "arrow-back",
//   "arrow.right": "arrow-forward",

//   // Utilitaires
//   "calendar": "calendar-today",
//   "calendar.fill": "calendar-today",
//   "clock": "access-time",
//   "clock.fill": "access-time",
//   "magnifyingglass": "search",
//   "magnifyingglass.circle": "search",
//   "paperplane.fill": "send",
//   "paperplane": "send",
//   "bell.fill": "notifications",
//   "bell": "notifications-none",
//   "folder.fill": "folder",
//   "folder": "folder-open",

//   // Crypto
//   "logo-bitcoin": "currency-bitcoin",
//   "bitcoin": "currency-bitcoin",

//   // Fallback
//   "chevron.left.forwardslash.chevron.right": "code",
//   "chevron.right": "chevron-right",
//   "list.bullet": "list",
//   "ellipsis": "more-horiz",
// } as const;

// /**
//  * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
//  * This ensures a consistent look across platforms, and optimal resource usage.
//  * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
//  */
// export function IconSymbol({
//   name,
//   size = 24,
//   color,
//   style,
//   type = "monochrome",
// }: {
//   name: IconSymbolName;
//   size?: number;
//   color: string | OpaqueColorValue;
//   style?: StyleProp<TextStyle>;
//   weight?: SymbolWeight;
//   type?: "monochrome" | "hierarchical" | "palette" | "multicolor";
// }) {
//   const mappedName = MAPPING[name];

//   // Si l'icône n'est pas trouvée, utiliser une icône par défaut
//   if (!mappedName) {
//     console.warn(`Icon "${name}" not found in mapping, using default`);
//     return (
//       <MaterialIcons
//         color={color}
//         size={size}
//         name="help-outline"
//         style={style}
//       />
//     );
//   }

//   return (
//     <MaterialIcons
//       color={color}
//       size={size}
//       name={mappedName}
//       style={style}
//     />
//   );
// }

// components/ui/icon-symbol.tsx

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { OpaqueColorValue, type StyleProp, type TextStyle } from "react-native";

// Mapping SF Symbols → Material Icons
const MAPPING: Record<string, string> = {
  // Navigation
  "house.fill": "home",
  house: "home",

  // Transactions
  signature: "edit",
  "signature.ja": "edit",
  receipt: "receipt",
  "receipt.fill": "receipt",
  "dollarsign.circle": "attach-money",
  "dollarsign.circle.fill": "attach-money",
  creditcard: "credit-card",
  "creditcard.fill": "credit-card",
  banknote: "money",
  "banknote.fill": "money",
  cart: "shopping-cart",
  "cart.fill": "shopping-cart",

  // Objectifs
  "star.fill": "star",
  star: "star-border",
  "heart.fill": "favorite",
  heart: "favorite-border",
  "flag.fill": "flag",
  flag: "flag",
  "trophy.fill": "emoji-events",
  trophy: "emoji-events",
  target: "track-changes",

  // Sagesse / Ampoule
  "lightbulb.fill": "lightbulb",
  lightbulb: "lightbulb-outline",
  "book.fill": "menu-book",
  book: "menu-book",

  // Paramètres
  "gearshape.fill": "settings",
  gearshape: "settings",
  gear: "settings",
  "person.fill": "person",
  person: "person-outline",

  // Actions
  "trash.fill": "delete",
  trash: "delete-outline",
  pencil: "edit",
  "pencil.fill": "edit",
  "plus.circle.fill": "add-circle",
  "plus.circle": "add-circle-outline",
  "checkmark.circle.fill": "check-circle",
  "checkmark.circle": "check-circle-outline",
  "xmark.circle.fill": "cancel",
  "xmark.circle": "cancel",
  "arrow.up": "arrow-upward",
  "arrow.down": "arrow-downward",
  "arrow.left": "arrow-back",
  "arrow.right": "arrow-forward",

  // Utilitaires
  calendar: "calendar-today",
  "calendar.fill": "calendar-today",
  clock: "access-time",
  "clock.fill": "access-time",
  magnifyingglass: "search",
  "magnifyingglass.circle": "search",
  "paperplane.fill": "send",
  paperplane: "send",
  "bell.fill": "notifications",
  bell: "notifications-none",
  "folder.fill": "folder",
  folder: "folder-open",

  // Crypto
  // brain: "network_intel_node_24",
  brain: "psychology",

  // Fallback
  "chevron.left.forwardslash.chevron.right": "code",
  "chevron.right": "chevron-right",
  "list.bullet": "list",
  ellipsis: "more-horiz",
};

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: string;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
}) {
  const materialIconName = MAPPING[name];

  // Si l'icône n'est pas trouvée, utiliser une icône par défaut
  if (!materialIconName) {
    console.warn(`⚠️ Icon "${name}" not found in mapping, using default`);
    return (
      <MaterialIcons
        color={color}
        size={size}
        name="help-outline"
        style={style}
      />
    );
  }

  return (
    <MaterialIcons
      color={color}
      size={size}
      name={materialIconName as any}
      style={style}
    />
  );
}
