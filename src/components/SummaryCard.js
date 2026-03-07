import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import { formatCurrency } from "../utils/formatters";

const SummaryCard = ({ income, expenses, savings }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Résumé du mois</Text>
      </View>

      <View style={styles.row}>
        <View style={[styles.item, styles.incomeBorder]}>
          <Text style={styles.label}>Revenus</Text>
          <Text style={[styles.amount, styles.incomeText]}>
            {formatCurrency(income)}
          </Text>
        </View>

        <View style={[styles.item, styles.expenseBorder]}>
          <Text style={styles.label}>Dépenses</Text>
          <Text style={[styles.amount, styles.expenseText]}>
            {formatCurrency(expenses)}
          </Text>
        </View>
      </View>

      <View style={styles.savingsContainer}>
        <Text style={styles.savingsLabel}>Économies potentielles</Text>
        <Text
          style={[
            styles.savingsAmount,
            { color: savings >= 0 ? COLORS.savings : COLORS.danger },
          ]}
        >
          {formatCurrency(savings)}
        </Text>
        {savings < 0 && (
          <Text style={styles.warning}>
            ⚠️ Vous dépensez plus que vos revenus
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.text,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  item: {
    flex: 1,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  incomeBorder: {
    borderColor: COLORS.income,
    marginRight: 8,
  },
  expenseBorder: {
    borderColor: COLORS.expense,
    marginLeft: 8,
  },
  label: {
    fontSize: 14,
    color: COLORS.textLight,
    marginBottom: 4,
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  incomeText: {
    color: COLORS.income,
  },
  expenseText: {
    color: COLORS.expense,
  },
  savingsContainer: {
    backgroundColor: COLORS.background,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
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
  warning: {
    fontSize: 12,
    color: COLORS.danger,
    marginTop: 8,
  },
});

export default SummaryCard;
