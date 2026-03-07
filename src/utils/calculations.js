export const calculateTotals = (transactions) => {
  return transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.totalIncome += transaction.amount;
      } else {
        acc.totalExpenses += transaction.amount;
      }
      return acc;
    },
    { totalIncome: 0, totalExpenses: 0 },
  );
};

export const calculateSavings = (income, expenses) => {
  return income - expenses;
};

export const calculatePercentage = (value, total) => {
  if (total === 0) return 0;
  return (value / total) * 100;
};

export const filterTransactionsByMonth = (transactions, date) => {
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();

  return transactions.filter((t) => {
    const tDate = new Date(t.date);
    return tDate.getMonth() === month && tDate.getFullYear() === year;
  });
};
