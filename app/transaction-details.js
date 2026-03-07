import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CATEGORIES } from "../src/constants/categories";
import { COLORS } from "../src/constants/colors";
import { formatCurrency, formatDate } from "../src/utils/formatters";

export default function TransactionDetailsScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const transaction = params.transaction
    ? JSON.parse(params.transaction)
    : null;

  if (!transaction) {
    return (
      <View style={styles.container}>
        <Text>Transaction non trouvée</Text>
      </View>
    );
  }

  const category =
    CATEGORIES.find((c) => c.id === transaction.category) || CATEGORIES[8];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Détails</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.card}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: category.color + "20" },
          ]}
        >
          <Ionicons name={category.icon} size={50} color={category.color} />
        </View>

        <Text style={styles.description}>{transaction.description}</Text>
        <Text style={styles.category}>{category.name}</Text>

        <View style={styles.amountContainer}>
          <Text style={styles.amountLabel}>Montant</Text>
          <Text
            style={[
              styles.amount,
              {
                color:
                  transaction.type === "income"
                    ? COLORS.income
                    : COLORS.expense,
              },
            ]}
          >
            {transaction.type === "income" ? "+" : "-"}
            {formatCurrency(transaction.amount)}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>{formatDate(transaction.date)}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Type</Text>
          <Text
            style={[
              styles.value,
              {
                color:
                  transaction.type === "income"
                    ? COLORS.income
                    : COLORS.expense,
              },
            ]}
          >
            {transaction.type === "income" ? "Revenu" : "Dépense"}
          </Text>
        </View>
      </View>
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
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.text,
  },
  card: {
    backgroundColor: COLORS.surface,
    margin: 16,
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 4,
    textAlign: "center",
  },
  category: {
    fontSize: 16,
    color: COLORS.textLight,
    marginBottom: 20,
  },
  amountContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  amountLabel: {
    fontSize: 14,
    color: COLORS.textLight,
    marginBottom: 4,
  },
  amount: {
    fontSize: 32,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: COLORS.background,
    marginVertical: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 8,
  },
  label: {
    fontSize: 16,
    color: COLORS.textLight,
  },
  value: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: "500",
  },
});
