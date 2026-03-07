// import { Ionicons } from "@expo/vector-icons";
// import { useFocusEffect } from "@react-navigation/native";
// import { useRouter } from "expo-router";
// import React, { useCallback, useState } from "react";
// import {
//   Alert,
//   FlatList,
//   RefreshControl,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import SummaryCard from "../../src/components/SummaryCard";
// import TransactionCard from "../../src/components/TransactionCard.js";
// import { COLORS } from "../../src/constants/colors";
// import {
//   calculateSavings,
//   calculateTotals,
//   filterTransactionsByMonth,
// } from "../../src/utils/calculations";
// import { formatMonth } from "../../src/utils/formatters";
// import { loadTransactions, saveTransactions } from "../../src/utils/storage";

// // En haut du fichier, après les imports
// interface Transaction {
//   id: string;
//   type: 'income' | 'expense';
//   amount: number;
//   description: string;
//   category: string;
//   date: string;
// }

// export default function HomeScreen() {
//   const router = useRouter();
//   const [transactions, setTransactions] = useState([]);
//   const [refreshing, setRefreshing] = useState(false);
//   const [currentMonth, setCurrentMonth] = useState(new Date());

//   const loadData = async () => {
//     const data = await loadTransactions();
//     setTransactions(data);
//   };

//   useFocusEffect(
//     useCallback(() => {
//       loadData();
//     }, []),
//   );

//   const onRefresh = async () => {
//     setRefreshing(true);
//     await loadData();
//     setRefreshing(false);
//   };

//   const handleDelete = (id: number) => {
//     Alert.alert("Supprimer", "Voulez-vous supprimer cette transaction ?", [
//       { text: "Annuler", style: "cancel" },
//       {
//         text: "Supprimer",
//         style: "destructive",
//         onPress: async () => {
//           const newTransactions = transactions.filter((t) => t.id !== id);
//           setTransactions(newTransactions);
//           await saveTransactions(newTransactions);
//         },
//       },
//     ]);
//   };

//   const monthlyTransactions = filterTransactionsByMonth(
//     transactions,
//     currentMonth,
//   );
//   const { totalIncome, totalExpenses } = calculateTotals(monthlyTransactions);
//   const savings = calculateSavings(totalIncome, totalExpenses);

//   const changeMonth = (increment: number) => {
//     const newDate = new Date(currentMonth);
//     newDate.setMonth(currentMonth.getMonth() + increment);
//     setCurrentMonth(newDate);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => changeMonth(-1)}>
//           <Ionicons name="chevron-back" size={24} color={COLORS.text} />
//         </TouchableOpacity>

//         <Text style={styles.monthText}>{formatMonth(currentMonth)}</Text>

//         <TouchableOpacity onPress={() => changeMonth(1)}>
//           <Ionicons name="chevron-forward" size={24} color={COLORS.text} />
//         </TouchableOpacity>
//       </View>

//       <SummaryCard
//         income={totalIncome}
//         expenses={totalExpenses}
//         savings={savings}
//       />

//       <View style={styles.transactionsHeader}>
//         <Text style={styles.transactionsTitle}>Transactions récentes</Text>
//         <TouchableOpacity onPress={() => router.push("/transactions")}>
//           <Text style={styles.seeAll}>Voir tout</Text>
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         data={monthlyTransactions.slice(0, 5)}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TransactionCard
//             transaction={item}
//             onDelete={() => handleDelete(item.id)}
//             onPress={() =>
//               router.push({
//                 pathname: "/transaction-details",
//                 params: { transaction: JSON.stringify(item) },
//               })
//             }
//           />
//         )}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }
//         ListEmptyComponent={
//           <View style={styles.emptyContainer}>
//             <Ionicons
//               name="receipt-outline"
//               size={60}
//               color={COLORS.textLight}
//             />
//             <Text style={styles.emptyText}>Aucune transaction ce mois-ci</Text>
//             <TouchableOpacity
//               style={styles.addButton}
//               onPress={() => router.push("/add-transaction")}
//             >
//               <Text style={styles.addButtonText}>Ajouter une transaction</Text>
//             </TouchableOpacity>
//           </View>
//         }
//       />

//       <TouchableOpacity
//         style={styles.fab}
//         onPress={() => router.push("/add-transaction")}
//       >
//         <Ionicons name="add" size={30} color="white" />
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.background,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 20,
//     paddingTop: 60,
//     paddingBottom: 10,
//   },
//   monthText: {
//     fontSize: 18,
//     fontWeight: "600",
//     color: COLORS.text,
//   },
//   transactionsHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//   },
//   transactionsTitle: {
//     fontSize: 16,
//     fontWeight: "600",
//     color: COLORS.text,
//   },
//   seeAll: {
//     fontSize: 14,
//     color: COLORS.primary,
//   },
//   emptyContainer: {
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 60,
//   },
//   emptyText: {
//     fontSize: 16,
//     color: COLORS.textLight,
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   addButton: {
//     backgroundColor: COLORS.primary,
//     paddingHorizontal: 20,
//     paddingVertical: 12,
//     borderRadius: 8,
//   },
//   addButtonText: {
//     color: "white",
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   fab: {
//     position: "absolute",
//     bottom: 20,
//     right: 20,
//     backgroundColor: COLORS.primary,
//     width: 56,
//     height: 56,
//     borderRadius: 28,
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 6,
//     elevation: 8,
//   },
// });

import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  Alert,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SummaryCard from "../../src/components/SummaryCard";
import TransactionCard from "../../src/components/TransactionCard.js";
import { COLORS } from "../../src/constants/colors";
import {
  calculateSavings,
  calculateTotals,
  filterTransactionsByMonth,
} from "../../src/utils/calculations";
import { formatMonth } from "../../src/utils/formatters";
import { loadTransactions, saveTransactions } from "../../src/utils/storage";

// Interface pour typer les transactions
interface Transaction {
  id: string;
  type: "income" | "expense";
  amount: number;
  description: string;
  category: string;
  date: string;
}

export default function HomeScreen() {
  const router = useRouter();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const loadData = async () => {
    const data = await loadTransactions();
    setTransactions(data);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  const handleDelete = (id: string) => {
    Alert.alert("Supprimer", "Voulez-vous supprimer cette transaction ?", [
      { text: "Annuler", style: "cancel" },
      {
        text: "Supprimer",
        style: "destructive",
        onPress: async () => {
          const newTransactions = transactions.filter((t) => t.id !== id);
          setTransactions(newTransactions);
          await saveTransactions(newTransactions);
        },
      },
    ]);
  };

  const monthlyTransactions = filterTransactionsByMonth(
    transactions,
    currentMonth,
  );
  const { totalIncome, totalExpenses } = calculateTotals(monthlyTransactions);
  const savings = calculateSavings(totalIncome, totalExpenses);

  const changeMonth = (increment: number) => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(currentMonth.getMonth() + increment);
    setCurrentMonth(newDate);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeMonth(-1)}>
          <Ionicons name="chevron-back" size={24} color={COLORS.text} />
        </TouchableOpacity>

        <Text style={styles.monthText}>{formatMonth(currentMonth)}</Text>

        <TouchableOpacity onPress={() => changeMonth(1)}>
          <Ionicons name="chevron-forward" size={24} color={COLORS.text} />
        </TouchableOpacity>
      </View>

      <SummaryCard
        income={totalIncome}
        expenses={totalExpenses}
        savings={savings}
      />

      <View style={styles.transactionsHeader}>
        <Text style={styles.transactionsTitle}>Transactions récentes</Text>
        <TouchableOpacity onPress={() => router.push("/transactions")}>
          <Text style={styles.seeAll}>Voir tout</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={monthlyTransactions.slice(0, 5)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TransactionCard
            transaction={item}
            onDelete={() => handleDelete(item.id)}
            onPress={() => {
              // Option 1: Vers la page de détails (si vous avez créé le fichier)
              router.push({
                pathname: "../app/transaction-details.js",
                params: { transaction: JSON.stringify(item) },
              });

              // Option 2: Si vous n'avez pas créé la page, utilisez:
              // Alert.alert('Détails', `${item.description}: ${formatCurrency(item.amount)}`);
            }}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons
              name="receipt-outline"
              size={60}
              color={COLORS.textLight}
            />
            <Text style={styles.emptyText}>Aucune transaction ce mois-ci</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => router.push("/add-transaction")}
            >
              <Text style={styles.addButtonText}>Ajouter une transaction</Text>
            </TouchableOpacity>
          </View>
        }
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => router.push("/add-transaction")}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 10,
  },
  monthText: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.text,
  },
  transactionsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  transactionsTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.text,
  },
  seeAll: {
    fontSize: 14,
    color: COLORS.primary,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: COLORS.textLight,
    marginTop: 10,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  addButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: COLORS.primary,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
});
//ggg
