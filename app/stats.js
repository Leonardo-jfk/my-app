// app/stats.js
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../src/constants/categories";
import { COLORS } from "../src/constants/colors";
import { formatCurrency } from "../src/utils/formatters";
import { loadTransactions } from "../src/utils/storage";

export default function StatsScreen() {
  const [transactions, setTransactions] = useState([]);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, []),
  );

  const loadData = async () => {
    const data = await loadTransactions();
    setTransactions(data);
  };

  const getCategoryStats = () => {
    const stats = {};

    transactions.forEach((t) => {
      if (t.type === "expense") {
        if (!stats[t.category]) {
          stats[t.category] = 0;
        }
        stats[t.category] += t.amount;
      }
    });

    return Object.entries(stats)
      .map(([categoryId, amount]) => ({
        category: CATEGORIES.find((c) => c.id === categoryId) || CATEGORIES[8],
        amount,
      }))
      .sort((a, b) => b.amount - a.amount);
  };

  const getMonthlyTotal = () => {
    const now = new Date();
    const thisMonth = transactions.filter((t) => {
      const date = new Date(t.date);
      return (
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
      );
    });

    const income = thisMonth
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
    const expenses = thisMonth
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    return { income, expenses, savings: income - expenses };
  };

  const categoryStats = getCategoryStats();
  const monthly = getMonthlyTotal();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.monthlyCard}>
        <Text style={styles.cardTitle}>Ce mois-ci</Text>

        <View style={styles.monthlyRow}>
          <View style={styles.monthlyItem}>
            <Ionicons name="arrow-down" size={24} color={COLORS.income} />
            <Text style={styles.monthlyLabel}>Revenus</Text>
            <Text style={[styles.monthlyAmount, { color: COLORS.income }]}>
              {formatCurrency(monthly.income)}
            </Text>
          </View>

          <View style={styles.monthlyItem}>
            <Ionicons name="arrow-up" size={24} color={COLORS.expense} />
            <Text style={styles.monthlyLabel}>Dépenses</Text>
            <Text style={[styles.monthlyAmount, { color: COLORS.expense }]}>
              {formatCurrency(monthly.expenses)}
            </Text>
          </View>
        </View>

        <View style={styles.savingsContainer}>
          <Text style={styles.savingsLabel}>Économies</Text>
          <Text
            style={[
              styles.savingsAmount,
              { color: monthly.savings >= 0 ? COLORS.savings : COLORS.danger },
            ]}
          >
            {formatCurrency(monthly.savings)}
          </Text>
        </View>
      </View>

      <View style={styles.categoriesCard}>
        <Text style={styles.cardTitle}>Dépenses par catégorie</Text>

        {categoryStats.length === 0 ? (
          <Text style={styles.noData}>Aucune dépense enregistrée</Text>
        ) : (
          categoryStats.map((stat, index) => (
            <View key={stat.category.id} style={styles.categoryRow}>
              <View style={styles.categoryInfo}>
                <View
                  style={[
                    styles.categoryIcon,
                    { backgroundColor: stat.category.color + "20" },
                  ]}
                >
                  <Ionicons
                    name={stat.category.icon}
                    size={20}
                    color={stat.category.color}
                  />
                </View>
                <Text style={styles.categoryName}>{stat.category.name}</Text>
              </View>
              <Text style={styles.categoryAmount}>
                {formatCurrency(stat.amount)}
              </Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  monthlyCard: {
    backgroundColor: COLORS.surface,
    margin: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 16,
  },
  monthlyRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  monthlyItem: {
    alignItems: "center",
  },
  monthlyLabel: {
    fontSize: 12,
    color: COLORS.textLight,
    marginVertical: 4,
  },
  monthlyAmount: {
    fontSize: 18,
    fontWeight: "600",
  },
  savingsContainer: {
    alignItems: "center",
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: COLORS.background,
  },
  savingsLabel: {
    fontSize: 14,
    color: COLORS.textLight,
    marginBottom: 4,
  },
  savingsAmount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  categoriesCard: {
    backgroundColor: COLORS.surface,
    margin: 16,
    marginTop: 0,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  noData: {
    textAlign: "center",
    color: COLORS.textLight,
    padding: 20,
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.background,
  },
  categoryInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  categoryName: {
    fontSize: 14,
    color: COLORS.text,
  },
  categoryAmount: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.expense,
  },
});
// export default NomDuComposant;
