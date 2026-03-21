// import { Ionicons } from "@expo/vector-icons";
// // import { useRouter } from 'expo-router';
// import ParallaxScrollView from "@/components/parallax-scroll-view";
// import { ThemedText } from "@/components/themed-text";
// import { ThemedView } from "@/components/themed-view";
// import { IconSymbol } from "@/components/ui/icon-symbol";
// import React, { useCallback, useState } from "react";
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import { useFocusEffect } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import BackgroundImage from "../../src/components/BackgroundImage";
// import IslandCard from "../../src/components/IslandCard";
// import { useTheme } from "../../src/context/ThemeContext";
// import { formatCurrency } from "../../src/utils/formatters";

// export default function GoalView() {
//   const { colors, theme } = useTheme();
//   const [goals, setGoals] = useState([]);
// // import { COLORS } from "../../src/constants/colors";
// import { formatCurrency } from "../../src/utils/formatters";

// const DREAMS_STORAGE = "@finance_app_dreams";
// const GOALS_STORAGE = "@finance_app_goals";

// type IconName = React.ComponentProps<typeof Ionicons>["name"];

// const DREAM_CATEGORIES: {
//   id: string;
//   name: string;
//   icon: IconName;
//   color: string;
// }[] = [
//   { id: "travel", name: "Voyage", icon: "airplane", color: "#3B82F6" },
//   { id: "car", name: "Voiture", icon: "car", color: "#EF4444" },
//   { id: "house", name: "Maison", icon: "home", color: "#10B981" },
//   { id: "retirement", name: "Retraite", icon: "umbrella", color: "#8B5CF6" },
//   { id: "education", name: "Éducation", icon: "school", color: "#F59E0B" },
//   { id: "wedding", name: "Mariage", icon: "heart", color: "#EC4899" },
//   { id: "business", name: "Entreprise", icon: "business", color: "#6366F1" },
//   { id: "other", name: "Autre", icon: "star", color: "#6B7280" },
// ];

// // Même chose pour GOAL_TYPES
// const GOAL_TYPES: {
//   id: string;
//   name: string;
//   icon: IconName;
//   color: string;
// }[] = [
//   { id: "retirement", name: "Retraite", icon: "umbrella", color: "#8B5CF6" },
//   { id: "house", name: "Achat Maison", icon: "home", color: "#10B981" },
//   { id: "car", name: "Achat Voiture", icon: "car", color: "#EF4444" },
//   { id: "education", name: "Éducation", icon: "school", color: "#F59E0B" },
//   {
//     id: "investment",
//     name: "Investissement",
//     icon: "trending-up",
//     color: "#6366F1",
//   },
// ];
// // Types pour les rêves et objectifs
// interface Dream {
//   id: string;
//   name: string;
//   targetAmount: number;
//   currentAmount: number;
//   category: string;
//   createdAt: string;
//   monthlyContribution?: number; // ← AJOUTER
//   targetDate?: string;
// }

// interface Goal {
//   id: string;
//   title: string;
//   type: string;
//   targetAmount: number;
//   currentAmount: number;
//   monthlySavings: number;
//   createdAt: string;
//   monthlyContribution?: number; // ← AJOUTER
//   targetDate?: string;
// }

// export default function ExploreScreen() {
//   // const router = useRouter();
//   const [activeTab, setActiveTab] = useState("dreams"); // 'dreams' ou 'goals'
//   const [dreams, setDreams] = useState<Dream[]>([]);
//   const [goals, setGoals] = useState<Goal[]>([]);
//   const [showAddDream, setShowAddDream] = useState(false);
//   const [showAddGoal, setShowAddGoal] = useState(false);
//   const [newDream, setNewDream] = useState({
//     name: "",
//     targetAmount: "",
//     currentAmount: "0",
//     category: "travel",
//     monthlyContribution: "", // ← AJOUTER
//     targetDate: "",
//   });
//   const [newGoal, setNewGoal] = useState({
//     title: "",
//     type: "retirement",
//     targetAmount: "",
//     currentAmount: "0",
//     monthlySavings: "",
//     monthlyContribution: "", // ← AJOUTER
//     targetDate: "",
//   });
//   const [editingDreamId, setEditingDreamId] = useState<string | null>(null);
//   const [editingGoalId, setEditingGoalId] = useState<string | null>(null);
//   const [editMonthlyValue, setEditMonthlyValue] = useState("");
//   // Charger les données
//   // const loadData = async () => {
//   //   try {
//   //     const dreamsData = await AsyncStorage.getItem(DREAMS_STORAGE);
//   //     setDreams(dreamsData ? JSON.parse(dreamsData) : []);

//   //     const goalsData = await AsyncStorage.getItem(GOALS_STORAGE);
//   //     setGoals(goalsData ? JSON.parse(goalsData) : []);
//   //   } catch (error) {
//   //     console.error("Erreur chargement:", error);
//   //   }
//   // };

//   const loadData = async () => {
//     try {
//       const storedGoals = await AsyncStorage.getItem("@finance_app_goals");
//       if (storedGoals) setGoals(JSON.parse(storedGoals));
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   useFocusEffect(
//     useCallback(() => {
//       loadData();
//     }, []),
//   );

//   // Sauvegarder les rêves
//   const saveDreams = async (newDreams: Dream[]) => {
//     try {
//       await AsyncStorage.setItem(DREAMS_STORAGE, JSON.stringify(newDreams));
//       setDreams(newDreams);
//     } catch (error) {
//       console.error("Erreur sauvegarde:", error);
//     }
//   };

//   // Sauvegarder les objectifs
//   const saveGoals = async (newGoals: Goal[]) => {
//     try {
//       await AsyncStorage.setItem(GOALS_STORAGE, JSON.stringify(newGoals));
//       setGoals(newGoals);
//     } catch (error) {
//       console.error("Erreur sauvegarde:", error);
//     }
//   };

//   // Ajouter un rêve
//   const handleAddDream = () => {
//     if (!newDream.name || !newDream.targetAmount) {
//       Alert.alert("Erreur", "Veuillez remplir tous les champs");
//       return;
//     }

//     const target = parseFloat(newDream.targetAmount);
//     const current = parseFloat(newDream.currentAmount) || 0;
//     const monthly = parseFloat(newDream.monthlyContribution) || 0;

//     if (isNaN(target) || target <= 0) {
//       Alert.alert("Erreur", "Montant cible invalide");
//       return;
//     }

//     // const dream = {
//     //   id: Date.now().toString(),
//     //   ...newDream,
//     //   targetAmount: target,
//     //   currentAmount: current,
//     //   createdAt: new Date().toISOString(),
//     // };

//     const dream: Dream = {
//       id: Date.now().toString(),
//       name: newDream.name,
//       targetAmount: target,
//       currentAmount: current,
//       category: newDream.category,
//       monthlyContribution: monthly > 0 ? monthly : undefined, // ← AJOUTER
//       targetDate: newDream.targetDate || undefined, // ← AJOUTER
//       createdAt: new Date().toISOString(),
//     };

//     saveDreams([...dreams, dream]);
//     setNewDream({
//       name: "",
//       targetAmount: "",
//       currentAmount: "0",
//       category: "travel",
//       monthlyContribution: "", // ← AJOUTER
//       targetDate: "",
//     });
//     setShowAddDream(false);
//   };

//   // Ajouter un objectif
//   const handleAddGoal = () => {
//     if (!newGoal.title || !newGoal.targetAmount) {
//       Alert.alert("Erreur", "Veuillez remplir les champs obligatoires");
//       return;
//     }

//     const target = parseFloat(newGoal.targetAmount);
//     const current = parseFloat(newGoal.currentAmount) || 0;
//     const monthly = parseFloat(newGoal.monthlySavings) || 0;

//     if (isNaN(target) || target <= 0) {
//       Alert.alert("Erreur", "Montant cible invalide");
//       return;
//     }

//     // const goal = {
//     //   id: Date.now().toString(),
//     //   ...newGoal,
//     //   targetAmount: target,
//     //   currentAmount: current,
//     //   monthlySavings: monthly,
//     //   createdAt: new Date().toISOString(),
//     // };

//     const goal: Goal = {
//       id: Date.now().toString(),
//       title: newGoal.title,
//       type: newGoal.type,
//       targetAmount: target,
//       currentAmount: current,
//       monthlyContribution: monthly > 0 ? monthly : undefined, // ← AJOUTER
//       targetDate: newGoal.targetDate || undefined, // ← AJOUTER
//       createdAt: new Date().toISOString(),
//       monthlySavings: monthly,
//     };

//     saveGoals([...goals, goal]);
//     setNewGoal({
//       title: "",
//       type: "retirement",
//       targetAmount: "",
//       currentAmount: "0",
//       monthlySavings: "",
//       monthlyContribution: "", // ← AJOUTER
//       targetDate: "",
//     });
//     setShowAddGoal(false);
//   };

//   // Supprimer un rêve
//   const handleDeleteDream = (id: string) => {
//     Alert.alert("Supprimer", "Voulez-vous supprimer ce rêve ?", [
//       { text: "Annuler", style: "cancel" },
//       {
//         text: "Supprimer",
//         style: "destructive",
//         onPress: () => saveDreams(dreams.filter((d) => d.id !== id)),
//       },
//     ]);
//   };

//   // Supprimer un objectif
//   const handleDeleteGoal = (id: string) => {
//     Alert.alert("Supprimer", "Voulez-vous supprimer cet objectif ?", [
//       { text: "Annuler", style: "cancel" },
//       {
//         text: "Supprimer",
//         style: "destructive",
//         onPress: () => saveGoals(goals.filter((g) => g.id !== id)),
//       },
//     ]);
//   };

//   // Ajouter après handleDeleteGoal

//   // Mise à jour de la contribution mensuelle
//   const updateMonthlyContribution = (
//     item: Dream | Goal,
//     value: string,
//     isDream: boolean,
//   ) => {
//     const numValue = parseFloat(value);
//     if (isNaN(numValue) || numValue < 0) return;

//     if (isDream) {
//       const updated = dreams.map((d) =>
//         d.id === item.id
//           ? { ...d, monthlyContribution: numValue || undefined }
//           : d,
//       );
//       saveDreams(updated);
//     } else {
//       const updated = goals.map((g) =>
//         g.id === item.id
//           ? { ...g, monthlyContribution: numValue || undefined }
//           : g,
//       );
//       saveGoals(updated);
//     }
//     setEditingDreamId(null);
//     setEditingGoalId(null);
//   };

//   // Formater la projection
//   const formatProjection = (years: number, months: number): string => {
//     const parts = [];
//     if (years > 0) parts.push(`${years} an${years > 1 ? "s" : ""}`);
//     if (months > 0) parts.push(`${months} mois`);
//     return parts.length > 0 ? parts.join(" et ") : "moins d'un mois";
//   };

//   // Contribution rapide à un rêve
//   const addContribution = (dream: Dream, amount: number) => {
//     const newAmount = dream.currentAmount + amount;
//     if (newAmount > dream.targetAmount) {
//       Alert.alert("Félicitations !", "Vous avez atteint votre objectif ! 🎉");
//     }

//     const updatedDreams = dreams.map((d) =>
//       d.id === dream.id
//         ? { ...d, currentAmount: Math.min(newAmount, d.targetAmount) }
//         : d,
//     );
//     saveDreams(updatedDreams);
//   };

//   // Contribution rapide à un objectif
//   const addContributionToGoal = (goal: Goal, amount: number) => {
//     const newAmount = goal.currentAmount + amount;
//     if (newAmount >= goal.targetAmount) {
//       Alert.alert(
//         "Félicitations ! 🎉",
//         `Vous avez atteint votre objectif "${goal.title}" !`,
//       );
//     }

//     const updatedGoals = goals.map((g) =>
//       g.id === goal.id
//         ? { ...g, currentAmount: Math.min(newAmount, g.targetAmount) }
//         : g,
//     );
//     saveGoals(updatedGoals);
//   };

//   const calculateProjection = (item: Dream | Goal, isDream: boolean) => {
//     const remaining = item.targetAmount - item.currentAmount;
//     if (remaining <= 0) return { achieved: true };

//     const monthly = isDream
//       ? (item as Dream).monthlyContribution
//       : (item as Goal).monthlyContribution || (item as Goal).monthlySavings;

//     if (!monthly || monthly <= 0) {
//       return {
//         needsMonthly: true,
//         monthlyNeeded: remaining / 12, // Par défaut sur 1 an
//       };
//     }

//     const monthsNeeded = Math.ceil(remaining / monthly);
//     const years = Math.floor(monthsNeeded / 12);
//     const months = monthsNeeded % 12;

//     return {
//       years,
//       months,
//       monthsNeeded,
//       monthlyNeeded: monthly,
//       achieved: false,
//     };
//   };

//   // Rendu d'un rêve
//   const renderDream = ({ item }: { item: Dream }) => {
//     const category =
//       DREAM_CATEGORIES.find((c) => c.id === item.category) ||
//       DREAM_CATEGORIES[0];
//     const progress = (item.currentAmount / item.targetAmount) * 100;
//     const remaining = item.targetAmount - item.currentAmount;
//     const projection = calculateProjection(item, true);

//     return (
//       <ThemedView style={styles.card}>
//         {/* CARD HEADER - Utilise handleDeleteDream */}
//         <View style={styles.cardHeader}>
//           <View
//             style={[
//               styles.iconContainer,
//               { backgroundColor: category.color + "20" },
//             ]}
//           >
//             <Ionicons
//               name={category.icon as any}
//               size={24}
//               color={category.color}
//             />
//           </View>
//           <View style={styles.cardInfo}>
//             <ThemedText type="defaultSemiBold">{item.name}</ThemedText>
//             <ThemedText style={styles.categoryText}>{category.name}</ThemedText>
//           </View>
//           <TouchableOpacity onPress={() => handleDeleteDream(item.id)}>
//             <Ionicons name="trash-outline" size={20} color={COLORS.danger} />
//           </TouchableOpacity>
//         </View>

//         {/* PROGRESS BAR */}
//         <View style={styles.progressContainer}>
//           <View style={styles.progressBar}>
//             <View
//               style={[
//                 styles.progressFill,
//                 { width: `${progress}%`, backgroundColor: category.color },
//               ]}
//             />
//           </View>
//           <ThemedText style={styles.progressText}>
//             {progress.toFixed(1)}%
//           </ThemedText>
//         </View>

//         {/* AMOUNTS */}
//         <View style={styles.amountRow}>
//           <View>
//             <ThemedText style={styles.amountLabel}>Objectif</ThemedText>
//             <ThemedText type="defaultSemiBold">
//               {formatCurrency(item.targetAmount)}
//             </ThemedText>
//           </View>
//           <View>
//             <ThemedText style={styles.amountLabel}>Épargné</ThemedText>
//             <ThemedText type="defaultSemiBold" style={{ color: COLORS.income }}>
//               {formatCurrency(item.currentAmount)}
//             </ThemedText>
//           </View>
//           <View>
//             <ThemedText style={styles.amountLabel}>Reste</ThemedText>
//             <ThemedText
//               type="defaultSemiBold"
//               style={{ color: COLORS.warning }}
//             >
//               {formatCurrency(remaining)}
//             </ThemedText>
//           </View>
//         </View>

//         {/* QUICK ADD - Utilise addContribution */}
//         {remaining > 0 && (
//           <View style={styles.quickAdd}>
//             <ThemedText style={styles.quickAddLabel}>
//               Ajouter rapidement :
//             </ThemedText>
//             <View style={styles.quickAddButtons}>
//               {[10, 50, 100, Math.min(remaining, 500)].map((amount) => (
//                 <TouchableOpacity
//                   key={amount}
//                   style={[
//                     styles.quickAddButton,
//                     { backgroundColor: category.color + "20" },
//                   ]}
//                   onPress={() => addContribution(item, amount)}
//                 >
//                   <Text
//                     style={[
//                       styles.quickAddButtonText,
//                       { color: category.color },
//                     ]}
//                   >
//                     {amount}€
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>
//         )}

//         {/* MONTHLY CONTRIBUTION SECTION */}
//         <View style={styles.monthlySection}>
//           <ThemedText style={styles.sectionLabel}>Épargne mensuelle</ThemedText>

//           {editingDreamId === item.id ? (
//             <View style={styles.monthlyEdit}>
//               <TextInput
//                 style={styles.monthlyInput}
//                 value={editMonthlyValue}
//                 onChangeText={setEditMonthlyValue}
//                 keyboardType="numeric"
//                 placeholder="Montant"
//                 placeholderTextColor={COLORS.textLight}
//                 autoFocus
//               />
//               <TouchableOpacity
//                 onPress={() =>
//                   updateMonthlyContribution(item, editMonthlyValue, true)
//                 }
//                 style={styles.monthlySaveButton}
//               >
//                 <Ionicons name="checkmark" size={20} color="white" />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={() => setEditingDreamId(null)}
//                 style={[
//                   styles.monthlySaveButton,
//                   { backgroundColor: COLORS.danger },
//                 ]}
//               >
//                 <Ionicons name="close" size={20} color="white" />
//               </TouchableOpacity>
//             </View>
//           ) : (
//             <TouchableOpacity
//               style={styles.monthlyDisplay}
//               onPress={() => {
//                 setEditingDreamId(item.id);
//                 setEditMonthlyValue(item.monthlyContribution?.toString() || "");
//               }}
//             >
//               <ThemedText style={styles.monthlyAmount}>
//                 {item.monthlyContribution
//                   ? formatCurrency(item.monthlyContribution)
//                   : "—"}
//               </ThemedText>
//               <ThemedText style={styles.monthlyLabel}>/mois</ThemedText>
//               <Ionicons
//                 name="pencil"
//                 size={16}
//                 color={COLORS.textLight}
//                 style={styles.editIcon}
//               />
//             </TouchableOpacity>
//           )}
//         </View>

//         {/* PROJECTION */}
//         {projection && !projection.achieved && (
//           <View style={styles.projectionCard}>
//             {projection.needsMonthly ? (
//               <View style={styles.projectionRow}>
//                 <Ionicons name="bulb" size={16} color={COLORS.warning} />
//                 <ThemedText style={styles.projectionText}>
//                   Définissez une épargne mensuelle pour voir la projection
//                 </ThemedText>
//               </View>
//             ) : (
//               <>
//                 <View style={styles.projectionRow}>
//                   <Ionicons
//                     name="calendar"
//                     size={16}
//                     color={COLORS.textLight}
//                   />
//                   <ThemedText style={styles.projectionText}>
//                     Objectif atteint dans{" "}
//                     {formatProjection(
//                       projection.years || 0,
//                       projection.months || 0,
//                     )}
//                   </ThemedText>
//                 </View>
//                 <View style={styles.projectionRow}>
//                   <Ionicons name="cash" size={16} color={COLORS.textLight} />
//                   <ThemedText style={styles.projectionText}>
//                     {formatCurrency(projection.monthlyNeeded || 0)}/mois
//                   </ThemedText>
//                 </View>
//               </>
//             )}
//           </View>
//         )}
//       </ThemedView>
//     );
//   };

//   // Rendu d'un objectif
//   const renderGoal = ({ item }: { item: Goal }) => {
//     const goalType =
//       GOAL_TYPES.find((g) => g.id === item.type) || GOAL_TYPES[0];
//     const progress = (item.currentAmount / item.targetAmount) * 100;
//     const remaining = item.targetAmount - item.currentAmount;
//     const projection = calculateProjection(item, false);

//     return (
//       <ThemedView style={styles.card}>
//         {/* CARD HEADER - Utilise handleDeleteGoal */}
//         <View style={styles.cardHeader}>
//           <View
//             style={[
//               styles.iconContainer,
//               { backgroundColor: goalType.color + "20" },
//             ]}
//           >
//             <Ionicons
//               name={goalType.icon as any}
//               size={24}
//               color={goalType.color}
//             />
//           </View>
//           <View style={styles.cardInfo}>
//             <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
//             <ThemedText style={styles.categoryText}>{goalType.name}</ThemedText>
//           </View>
//           <TouchableOpacity onPress={() => handleDeleteGoal(item.id)}>
//             <Ionicons name="trash-outline" size={20} color={COLORS.danger} />
//           </TouchableOpacity>
//         </View>

//         {/* PROGRESS BAR */}
//         <View style={styles.progressContainer}>
//           <View style={styles.progressBar}>
//             <View
//               style={[
//                 styles.progressFill,
//                 { width: `${progress}%`, backgroundColor: goalType.color },
//               ]}
//             />
//           </View>
//           <ThemedText style={styles.progressText}>
//             {progress.toFixed(1)}%
//           </ThemedText>
//         </View>

//         {/* AMOUNTS */}
//         <View style={styles.amountRow}>
//           <View>
//             <ThemedText style={styles.amountLabel}>Objectif</ThemedText>
//             <ThemedText type="defaultSemiBold">
//               {formatCurrency(item.targetAmount)}
//             </ThemedText>
//           </View>
//           <View>
//             <ThemedText style={styles.amountLabel}>Actuel</ThemedText>
//             <ThemedText type="defaultSemiBold" style={{ color: COLORS.income }}>
//               {formatCurrency(item.currentAmount)}
//             </ThemedText>
//           </View>
//           <View>
//             <ThemedText style={styles.amountLabel}>Reste</ThemedText>
//             <ThemedText
//               type="defaultSemiBold"
//               style={{ color: COLORS.warning }}
//             >
//               {formatCurrency(remaining)}
//             </ThemedText>
//           </View>
//         </View>

//         {/* QUICK ADD - Utilise addContributionToGoal */}
//         {remaining > 0 && (
//           <View style={styles.quickAdd}>
//             <ThemedText style={styles.quickAddLabel}>
//               Ajouter rapidement :
//             </ThemedText>
//             <View style={styles.quickAddButtons}>
//               {[10, 50, 100, Math.min(remaining, 500)].map((amount) => (
//                 <TouchableOpacity
//                   key={amount}
//                   style={[
//                     styles.quickAddButton,
//                     { backgroundColor: goalType.color + "20" },
//                   ]}
//                   onPress={() => addContributionToGoal(item, amount)}
//                 >
//                   <Text
//                     style={[
//                       styles.quickAddButtonText,
//                       { color: goalType.color },
//                     ]}
//                   >
//                     {amount}€
//                   </Text>
//                 </TouchableOpacity>
//               ))}
//             </View>
//           </View>
//         )}

//         {/* MONTHLY CONTRIBUTION SECTION */}
//         <View style={styles.monthlySection}>
//           <ThemedText style={styles.sectionLabel}>Épargne mensuelle</ThemedText>

//           {editingGoalId === item.id ? (
//             <View style={styles.monthlyEdit}>
//               <TextInput
//                 style={styles.monthlyInput}
//                 value={editMonthlyValue}
//                 onChangeText={setEditMonthlyValue}
//                 keyboardType="numeric"
//                 placeholder="Montant"
//                 placeholderTextColor={COLORS.textLight}
//                 autoFocus
//               />
//               <TouchableOpacity
//                 onPress={() =>
//                   updateMonthlyContribution(item, editMonthlyValue, false)
//                 }
//                 style={styles.monthlySaveButton}
//               >
//                 <Ionicons name="checkmark" size={20} color="white" />
//               </TouchableOpacity>
//               <TouchableOpacity
//                 onPress={() => setEditingGoalId(null)}
//                 style={[
//                   styles.monthlySaveButton,
//                   { backgroundColor: COLORS.danger },
//                 ]}
//               >
//                 <Ionicons name="close" size={20} color="white" />
//               </TouchableOpacity>
//             </View>
//           ) : (
//             <TouchableOpacity
//               style={styles.monthlyDisplay}
//               onPress={() => {
//                 setEditingGoalId(item.id);
//                 setEditMonthlyValue(item.monthlyContribution?.toString() || "");
//               }}
//             >
//               <ThemedText style={styles.monthlyAmount}>
//                 {item.monthlyContribution
//                   ? formatCurrency(item.monthlyContribution)
//                   : "—"}
//               </ThemedText>
//               <ThemedText style={styles.monthlyLabel}>/mois</ThemedText>
//               <Ionicons
//                 name="pencil"
//                 size={16}
//                 color={COLORS.textLight}
//                 style={styles.editIcon}
//               />
//             </TouchableOpacity>
//           )}
//         </View>

//         {/* PROJECTION */}
//         {projection && !projection.achieved && (
//           <View style={styles.projectionCard}>
//             {projection.needsMonthly ? (
//               <View style={styles.projectionRow}>
//                 <Ionicons name="bulb" size={16} color={COLORS.warning} />
//                 <ThemedText style={styles.projectionText}>
//                   Définissez une épargne mensuelle pour voir la projection
//                 </ThemedText>
//               </View>
//             ) : (
//               <>
//                 <View style={styles.projectionRow}>
//                   <Ionicons
//                     name="calendar"
//                     size={16}
//                     color={COLORS.textLight}
//                   />
//                   <ThemedText style={styles.projectionText}>
//                     Objectif atteint dans{" "}
//                     {formatProjection(
//                       projection.years || 0,
//                       projection.months || 0,
//                     )}
//                   </ThemedText>
//                 </View>
//                 <View style={styles.projectionRow}>
//                   <Ionicons name="cash" size={16} color={COLORS.textLight} />
//                   <ThemedText style={styles.projectionText}>
//                     {formatCurrency(projection.monthlyNeeded || 0)}/mois
//                   </ThemedText>
//                 </View>
//               </>
//             )}
//           </View>
//         )}
//       </ThemedView>
//     );
//   };

//   // Calcul des stats
//   const totalDreamsTarget: number = dreams.reduce(
//     (sum, d) => sum + d.targetAmount,
//     0,
//   );
//   const totalDreamsCurrent: number = dreams.reduce(
//     (sum, d) => sum + d.currentAmount,
//     0,
//   );
//   const totalGoalsTarget: number = goals.reduce(
//     (sum, g) => sum + g.targetAmount,
//     0,
//   );
//   const totalGoalsCurrent = goals.reduce((sum, g) => sum + g.currentAmount, 0);

//   return (
//     // <ParallaxScrollView
//       // headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
//       // headerImage={
//       //   <IconSymbol
//       //     size={310}
//       //     color="#808080"
//       //     name="star.circle.fill"
//       //     style={styles.headerImage}
//       //   />
//       // }
//     // >
//     <BackgroundImage>
//       <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
//       Header avec titre
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title" style={styles.title}>
//           🎯 Mes Objectifs
//         </ThemedText>
//       </ThemedView>

//       {/* LISTE DES OBJECTIFS */}
//         {goals.map((goal, index) => (
//           <IslandCard key={index}>
//             <Text style={[styles.goalName, { color: colors.text }]}>{goal.name}</Text>
//             <Text style={{ color: colors.primary, fontWeight: 'bold' }}>
//               {formatCurrency(goal.targetAmount)}
//             </Text>
//           </IslandCard>
//         ))}

//         {/* LA BLAGUE EN BAS */}
//         <View style={styles.jokeContainer}>
//           <Text style={[styles.jokeText, { color: colors.textLight }]}>
//             "Moi attendant que mes économies augmentent miraculeusement :"
//           </Text>
//           <Image
//             source={
//               theme === "dark"
//                 ? require("../../assets/images/NeedDark.jpg")
//                 : require("../../assets/images/NeedLight.jpg")
//             }
//             style={styles.jokeImage}
//             resizeMode="contain"
//           />
//         </View>

//       {/* HEADER : Style identique à index.tsx */}
//         <View style={styles.header}>
//           <Text style={[styles.title, { color: colors.text }]}>Mes Objectifs</Text>
//           <Text style={[styles.subtitle, { color: colors.textLight }]}>
//             Le chemin vers la richesse... ou presque.
//           </Text>
//         </View>

//       {/* Statistiques globales */}
//       {/* <ThemedView style={styles.statsContainer}>
//         <View style={styles.statCard}>
//           <ThemedText style={styles.statValue}>{dreams.length}</ThemedText>
//           <ThemedText style={styles.statLabel}>Rêves</ThemedText>
//         </View>
//         <View style={styles.statCard}>
//           <ThemedText style={styles.statValue}>{goals.length}</ThemedText>
//           <ThemedText style={styles.statLabel}>Objectifs</ThemedText>
//         </View>
//         <View style={styles.statCard}>
//           <ThemedText style={styles.statValue}>
//             {formatCurrency(totalDreamsCurrent + totalGoalsCurrent)}
//           </ThemedText>
//           <ThemedText style={styles.statLabel}>Épargné</ThemedText>
//         </View>
//       </ThemedView> */}

//       {/* Statistiques globales */}
//       <ThemedView style={styles.statsContainer}>
//         {/* Première ligne : compteurs */}
//         <View style={styles.statCard}>
//           <View style={styles.statCard}>
//             <ThemedText style={styles.statValue}>{dreams.length}</ThemedText>
//             <ThemedText style={styles.statLabel}>Rêves</ThemedText>
//           </View>
//           <View style={styles.statCard}>
//             <ThemedText style={styles.statValue}>{goals.length}</ThemedText>
//             <ThemedText style={styles.statLabel}>Objectifs</ThemedText>
//           </View>
//           <View style={styles.statCard}>
//             <ThemedText style={styles.statValue}>
//               {formatCurrency(totalDreamsCurrent + totalGoalsCurrent)}
//             </ThemedText>
//             <ThemedText style={styles.statLabel}>Épargné</ThemedText>
//           </View>
//         </View>

//         {/* Deuxième ligne : objectifs */}
//         <View style={styles.statCard}>
//           <View style={styles.statCard}>
//             <ThemedText style={styles.statValue}>
//               {formatCurrency(totalDreamsTarget)}
//             </ThemedText>
//             <ThemedText style={styles.statLabel}>Objectif rêves</ThemedText>
//           </View>
//           <View style={styles.statCard}>
//             <ThemedText style={styles.statValue}>
//               {formatCurrency(totalGoalsTarget)}
//             </ThemedText>
//             <ThemedText style={styles.statLabel}>Objectif objectifs</ThemedText>
//           </View>
//           <View style={styles.statCard}>
//             <ThemedText style={styles.statValue}>
//               {(
//                 ((totalDreamsCurrent + totalGoalsCurrent) /
//                   (totalDreamsTarget + totalGoalsTarget)) *
//                   100 || 0
//               ).toFixed(1)}
//               %
//             </ThemedText>
//             <ThemedText style={styles.statLabel}>Progrès global</ThemedText>
//           </View>
//         </View>
//       </ThemedView>

//       {/* Tabs */}
//       <View style={styles.tabContainer}>
//         <TouchableOpacity
//           style={[styles.tab, activeTab === "dreams" && styles.activeTab]}
//           onPress={() => setActiveTab("dreams")}
//         >
//           <ThemedText
//             style={[
//               styles.tabText,
//               activeTab === "dreams" && styles.activeTabText,
//             ]}
//           >
//             💭 Rêves
//           </ThemedText>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.tab, activeTab === "goals" && styles.activeTab]}
//           onPress={() => setActiveTab("goals")}
//         >
//           <ThemedText
//             style={[
//               styles.tabText,
//               activeTab === "goals" && styles.activeTabText,
//             ]}
//           >
//             📊 Objectifs
//           </ThemedText>
//         </TouchableOpacity>
//       </View>

//       {/* Contenu selon l'onglet */}
//       {activeTab === "dreams" ? (
//         <>
//           {/* Bouton ajout rêve */}
//           {!showAddDream ? (
//             <TouchableOpacity
//               style={styles.addButton}
//               onPress={() => setShowAddDream(true)}
//             >
//               <Ionicons name="add-circle" size={24} color={COLORS.primary} />
//               <ThemedText style={styles.addButtonText}>
//                 Ajouter un rêve
//               </ThemedText>
//             </TouchableOpacity>
//           ) : (
//             <ThemedView style={styles.formCard}>
//               <ThemedText type="subtitle">Nouveau rêve</ThemedText>

//               <TextInput
//                 style={styles.input}
//                 placeholder="Nom du rêve"
//                 value={newDream.name}
//                 onChangeText={(text) =>
//                   setNewDream({ ...newDream, name: text })
//                 }
//                 placeholderTextColor="#999"
//               />

//               <TextInput
//                 style={styles.input}
//                 placeholder="Montant objectif (€)"
//                 value={newDream.targetAmount}
//                 onChangeText={(text) =>
//                   setNewDream({ ...newDream, targetAmount: text })
//                 }
//                 keyboardType="numeric"
//                 placeholderTextColor="#999"
//               />

//               <TextInput
//                 style={styles.input}
//                 placeholder="Déjà épargné (€)"
//                 value={newDream.currentAmount}
//                 onChangeText={(text) =>
//                   setNewDream({ ...newDream, currentAmount: text })
//                 }
//                 keyboardType="numeric"
//                 placeholderTextColor="#999"
//               />

//               <ScrollView
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 style={styles.categoryScroll}
//               >
//                 {DREAM_CATEGORIES.map((cat) => (
//                   <TouchableOpacity
//                     key={cat.id}
//                     style={[
//                       styles.categoryChip,
//                       { backgroundColor: cat.color + "20" },
//                       newDream.category === cat.id && styles.categoryChipActive,
//                     ]}
//                     onPress={() =>
//                       setNewDream({ ...newDream, category: cat.id })
//                     }
//                   >
//                     <Ionicons name={cat.icon} size={20} color={cat.color} />
//                     <Text
//                       style={[styles.categoryChipText, { color: cat.color }]}
//                     >
//                       {cat.name}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </ScrollView>

//               <View style={styles.formButtons}>
//                 <TouchableOpacity
//                   style={[styles.formButton, styles.cancelButton]}
//                   onPress={() => setShowAddDream(false)}
//                 >
//                   <ThemedText>Annuler</ThemedText>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.formButton, styles.saveButton]}
//                   onPress={handleAddDream}
//                 >
//                   <ThemedText style={{ color: "white" }}>Ajouter</ThemedText>
//                 </TouchableOpacity>
//               </View>
//             </ThemedView>
//           )}

//           <FlatList
//             data={dreams}
//             keyExtractor={(item) => item.id}
//             renderItem={renderDream}
//             scrollEnabled={false}
//             ListEmptyComponent={
//               !showAddDream ? (
//                 <ThemedView style={styles.emptyContainer}>
//                   <Ionicons
//                     name="heart-outline"
//                     size={50}
//                     color={COLORS.textLight}
//                   />
//                   <ThemedText style={styles.emptyText}>
//                     Aucun rêve pour le moment
//                   </ThemedText>
//                 </ThemedView>
//               ) : null // 👈 Important: retourner null quand showAddDream est true
//             }
//           />
//         </>
//       ) : (
//         <>
//           {/* Bouton ajout objectif */}
//           {!showAddGoal ? (
//             <TouchableOpacity
//               style={styles.addButton}
//               onPress={() => setShowAddGoal(true)}
//             >
//               <Ionicons name="add-circle" size={24} color={COLORS.primary} />
//               <ThemedText style={styles.addButtonText}>
//                 Ajouter un objectif
//               </ThemedText>
//             </TouchableOpacity>
//           ) : (
//             <ThemedView style={styles.formCard}>
//               <ThemedText type="subtitle">Nouvel objectif</ThemedText>

//               <TextInput
//                 style={styles.input}
//                 placeholder="Titre"
//                 value={newGoal.title}
//                 onChangeText={(text) => setNewGoal({ ...newGoal, title: text })}
//                 placeholderTextColor="#999"
//               />

//               <TextInput
//                 style={styles.input}
//                 placeholder="Montant objectif (€)"
//                 value={newGoal.targetAmount}
//                 onChangeText={(text) =>
//                   setNewGoal({ ...newGoal, targetAmount: text })
//                 }
//                 keyboardType="numeric"
//                 placeholderTextColor="#999"
//               />

//               <TextInput
//                 style={styles.input}
//                 placeholder="Déjà épargné (€)"
//                 value={newGoal.currentAmount}
//                 onChangeText={(text) =>
//                   setNewGoal({ ...newGoal, currentAmount: text })
//                 }
//                 keyboardType="numeric"
//                 placeholderTextColor="#999"
//               />

//               <TextInput
//                 style={styles.input}
//                 placeholder="Épargne mensuelle (€) - optionnel"
//                 value={newDream.monthlyContribution}
//                 onChangeText={(text) =>
//                   setNewDream({ ...newDream, monthlyContribution: text })
//                 }
//                 keyboardType="numeric"
//                 placeholderTextColor="#999"
//               />

//               <TextInput
//                 style={styles.input}
//                 placeholder="Date cible (AAAA-MM-JJ) - optionnel"
//                 value={newDream.targetDate}
//                 onChangeText={(text) =>
//                   setNewDream({ ...newDream, targetDate: text })
//                 }
//                 placeholderTextColor="#999"
//               />

//               <ScrollView
//                 horizontal
//                 showsHorizontalScrollIndicator={false}
//                 style={styles.categoryScroll}
//               >
//                 {GOAL_TYPES.map((type) => (
//                   <TouchableOpacity
//                     key={type.id}
//                     style={[
//                       styles.categoryChip,
//                       { backgroundColor: type.color + "20" },
//                       newGoal.type === type.id && styles.categoryChipActive,
//                     ]}
//                     onPress={() => setNewGoal({ ...newGoal, type: type.id })}
//                   >
//                     <Ionicons name={type.icon} size={20} color={type.color} />
//                     <Text
//                       style={[styles.categoryChipText, { color: type.color }]}
//                     >
//                       {type.name}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </ScrollView>

//               <View style={styles.formButtons}>
//                 <TouchableOpacity
//                   style={[styles.formButton, styles.cancelButton]}
//                   onPress={() => setShowAddGoal(false)}
//                 >
//                   <ThemedText>Annuler</ThemedText>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   style={[styles.formButton, styles.saveButton]}
//                   onPress={handleAddGoal}
//                 >
//                   <ThemedText style={{ color: "white" }}>Ajouter</ThemedText>
//                 </TouchableOpacity>
//               </View>
//             </ThemedView>
//           )}

//           <FlatList
//             data={goals}
//             keyExtractor={(item) => item.id}
//             renderItem={renderGoal}
//             scrollEnabled={false}
//             ListEmptyComponent={
//               !showAddGoal ? (
//                 <ThemedView style={styles.emptyContainer}>
//                   <Ionicons
//                     name="flag-outline"
//                     size={50}
//                     color={COLORS.textLight}
//                   />
//                   <ThemedText style={styles.emptyText}>
//                     Aucun objectif pour le moment
//                   </ThemedText>
//                 </ThemedView>
//               ) : null // 👈 Important: retourner null quand showAddGoal est true
//             }
//           />
//         </>
//       )}
//       </ScrollView>
//     </BackgroundImage>
//   );
// }

// const styles = StyleSheet.create({
//   headerImage: {
//     color: "#808080",
//     bottom: -90,
//     left: -35,
//     position: "absolute",
//   },
//   titleContainer: {
//     flexDirection: "row",
//     gap: 8,
//     marginBottom: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
//   statsContainer: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     padding: 16,
//     backgroundColor: "rgba(0,0,0,0.03)",
//     borderRadius: 12,
//     marginBottom: 16,
//   },
//   statCard: {
//     alignItems: "center",
//   },
//   statValue: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   statLabel: {
//     fontSize: 12,
//     color: "#666",
//     marginTop: 4,
//   },
//   tabContainer: {
//     flexDirection: "row",
//     marginBottom: 16,
//     borderRadius: 8,
//     backgroundColor: "rgba(0,0,0,0.05)",
//     padding: 4,
//   },
//   tab: {
//     flex: 1,
//     paddingVertical: 8,
//     alignItems: "center",
//     borderRadius: 6,
//   },
//   activeTab: {
//     backgroundColor: "#fff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   tabText: {
//     fontSize: 14,
//   },
//   activeTabText: {
//     fontWeight: "600",
//   },
//   addButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 16,
//     backgroundColor: "rgba(99, 102, 241, 0.1)",
//     borderRadius: 12,
//     marginBottom: 16,
//     borderWidth: 2,
//     borderColor: COLORS.primary + "40",
//     borderStyle: "dashed",
//   },
//   addButtonText: {
//     fontSize: 16,
//     color: COLORS.primary,
//     marginLeft: 8,
//     fontWeight: "500",
//   },
//   formCard: {
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 16,
//     backgroundColor: "rgba(255,255,255,0.05)",
//   },
//   input: {
//     backgroundColor: "rgba(0,0,0,0.05)",
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 12,
//     fontSize: 16,
//     color: "#000",
//   },
//   categoryScroll: {
//     flexDirection: "row",
//     marginBottom: 12,
//   },
//   categoryChip: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginRight: 8,
//   },
//   categoryChipActive: {
//     borderWidth: 2,
//     borderColor: COLORS.primary,
//   },
//   categoryChipText: {
//     fontSize: 14,
//     marginLeft: 6,
//   },
//   formButtons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   formButton: {
//     flex: 1,
//     padding: 14,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   cancelButton: {
//     backgroundColor: "rgba(0,0,0,0.05)",
//     marginRight: 8,
//   },
//   saveButton: {
//     backgroundColor: COLORS.primary,
//     marginLeft: 8,
//   },
//   card: {
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 12,
//     backgroundColor: "rgba(255,255,255,0.05)",
//   },
//   cardHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 12,
//   },
//   iconContainer: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 12,
//   },
//   cardInfo: {
//     flex: 1,
//   },
//   categoryText: {
//     fontSize: 13,
//     color: "#666",
//   },
//   progressContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 12,
//   },
//   progressBar: {
//     flex: 1,
//     height: 8,
//     backgroundColor: "rgba(0,0,0,0.1)",
//     borderRadius: 4,
//     marginRight: 10,
//   },
//   progressFill: {
//     height: 8,
//     borderRadius: 4,
//   },
//   progressText: {
//     fontSize: 14,
//     fontWeight: "600",
//   },
//   amountRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 12,
//   },
//   amountLabel: {
//     fontSize: 11,
//     color: "#666",
//     marginBottom: 2,
//   },
//   quickAdd: {
//     borderTopWidth: 1,
//     borderTopColor: "rgba(0,0,0,0.1)",
//     paddingTop: 12,
//   },
//   quickAddLabel: {
//     fontSize: 13,
//     color: "#666",
//     marginBottom: 8,
//   },
//   quickAddButtons: {
//     flexDirection: "row",
//   },
//   quickAddButton: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginRight: 8,
//   },
//   quickAddButtonText: {
//     fontSize: 13,
//     fontWeight: "500",
//   },
//   projectionCard: {
//     marginTop: 12,
//     padding: 12,
//     backgroundColor: "rgba(0,0,0,0.02)",
//     borderRadius: 8,
//   },
//   projectionRow: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 4,
//   },
//   projectionText: {
//     fontSize: 13,
//     marginLeft: 6,
//   },
//   emptyContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 40,
//   },
//   emptyText: {
//     fontSize: 16,
//     color: "#666",
//     marginTop: 12,
//   },

//   // Ajouter ces styles à la fin de l'objet styles (avant la dernière accolade)
//   monthlySection: {
//     marginBottom: 12,
//   },
//   sectionLabel: {
//     fontSize: 13,
//     color: "#666",
//     marginBottom: 4,
//   },
//   monthlyDisplay: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "rgba(0,0,0,0.02)",
//     padding: 10,
//     borderRadius: 8,
//   },
//   monthlyAmount: {
//     fontSize: 15,
//     fontWeight: "600",
//     color: COLORS.primary,
//   },
//   monthlyLabel: {
//     fontSize: 13,
//     color: "#666",
//     marginLeft: 4,
//   },
//   editIcon: {
//     marginLeft: "auto",
//   },
//   monthlyEdit: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   monthlyInput: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.05)",
//     padding: 10,
//     borderRadius: 8,
//     fontSize: 15,
//     color: "#000",
//     marginRight: 8,
//   },
//   monthlySaveButton: {
//     backgroundColor: COLORS.primary,
//     width: 40,
//     height: 40,
//     borderRadius: 8,
//     justifyContent: "center",
//     alignItems: "center",
//     marginRight: 8,
//   },

//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   header: {
//     marginTop: 60,
//     marginBottom: 30,
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 16,
//     marginTop: 4,
//   },
//   goalName: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginBottom: 5,
//   },
//   jokeContainer: {
//     marginTop: 50,
//     alignItems: "center",
//     opacity: 0.8,
//   },
//   jokeText: {
//     fontStyle: "italic",
//     marginBottom: 15,
//     textAlign: "center",
//     paddingHorizontal: 20,
//   },
//   jokeImage: {
//     width: "100%",
//     height: 250,
//     borderRadius: 20,
//   },

// });
