// src/types/finance-types.ts

// Types pour les icônes (si nécessaire)
export type IconName = React.ComponentProps<
  typeof import("@expo/vector-icons").Ionicons
>["name"];

// Interface pour les rêves
export interface Dream {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  category: string;
  monthlyContribution?: number;
  targetDate?: string;
  createdAt: string;
}

// Interface pour les objectifs
export interface Goal {
  id: string;
  title: string;
  type: string;
  targetAmount: number;
  currentAmount: number;
  monthlyContribution?: number;
  targetDate?: string;
  createdAt: string;
}

// Catégories de rêves
export const DREAM_CATEGORIES: {
  id: string;
  name: string;
  icon: string;
  color: string;
}[] = [
  { id: "travel", name: "Voyage", icon: "airplane", color: "#3B82F6" },
  { id: "car", name: "Voiture", icon: "car", color: "#EF4444" },
  { id: "house", name: "Maison", icon: "home", color: "#10B981" },
  { id: "retirement", name: "Retraite", icon: "umbrella", color: "#8B5CF6" },
  { id: "education", name: "Éducation", icon: "school", color: "#F59E0B" },
  { id: "wedding", name: "Mariage", icon: "heart", color: "#EC4899" },
  { id: "business", name: "Entreprise", icon: "business", color: "#6366F1" },
  { id: "other", name: "Autre", icon: "star", color: "#6B7280" },
];

// Types d'objectifs
export const GOAL_TYPES: {
  id: string;
  name: string;
  icon: string;
  color: string;
}[] = [
  { id: "retirement", name: "Retraite", icon: "umbrella", color: "#8B5CF6" },
  { id: "house", name: "Achat Maison", icon: "home", color: "#10B981" },
  { id: "car", name: "Achat Voiture", icon: "car", color: "#EF4444" },
  { id: "education", name: "Éducation", icon: "school", color: "#F59E0B" },
  {
    id: "investment",
    name: "Investissement",
    icon: "trending-up",
    color: "#6366F1",
  },
];

// Interface pour les statistiques mensuelles
export interface MonthlyStats {
  totalIncome: number;
  totalExpenses: number;
  totalSavings: number;
  monthlyContributions: {
    dreams: number;
    goals: number;
    total: number;
  };
  projectedSavings: number;
  progress: {
    dreams: number;
    goals: number;
    overall: number;
  };
}

// Interface pour les résultats de projection
export interface ProjectionResult {
  years: number;
  months: number;
  monthsNeeded: number;
  monthlyNeeded: number;
  achieved: boolean;
  needsMonthly?: boolean;
}

// Clés de stockage
export const STORAGE_KEYS = {
  DREAMS: "@finance_app_dreams",
  GOALS: "@finance_app_goals",
  TRANSACTIONS: "@finance_app_transactions",
  SETTINGS: "@finance_app_settings",
};
