import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@finance_app_transactions";

export const saveTransactions = async (transactions) => {
  try {
    const jsonValue = JSON.stringify(transactions);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error("Erreur de sauvegarde:", e);
  }
};

export const loadTransactions = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error("Erreur de chargement:", e);
    return [];
  }
};

export const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.error("Erreur de nettoyage:", e);
  }
};
