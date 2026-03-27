// src/hooks/useDailyBudget.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const CREDITS_STORAGE = "@finance_app_credits";

export interface Credit {
  id: string;
  title: string;
  totalAmount: number;
  paidAmount: number;
  remainingMonths: number;
  startDate: string;
  monthlyPayment: number;
  description?: string;
}

export function useDailyBudget(
  monthlyIncome: number,
  monthlyExpenses: number,
  dreams: any[],
  goals: any[],
) {
  const [credits, setCredits] = useState<Credit[]>([]);

  // Charger les crédits
  useEffect(() => {
    loadCredits();
  }, []);

  const loadCredits = async () => {
    try {
      const data = await AsyncStorage.getItem(CREDITS_STORAGE);
      setCredits(data ? JSON.parse(data) : []);
    } catch (error) {
      console.error("Erreur chargement crédits:", error);
    }
  };

  const saveCredits = async (newCredits: Credit[]) => {
    try {
      await AsyncStorage.setItem(CREDITS_STORAGE, JSON.stringify(newCredits));
      setCredits(newCredits);
    } catch (error) {
      console.error("Erreur sauvegarde crédits:", error);
    }
  };

  const addCredit = async (credit: Omit<Credit, "id" | "paidAmount">) => {
    const newCredit: Credit = {
      ...credit,
      id: Date.now().toString(),
      paidAmount: 0,
    };
    await saveCredits([...credits, newCredit]);
  };

  const payCredit = async (creditId: string, amount: number) => {
    const updated = credits.map((credit) => {
      if (credit.id === creditId) {
        const newPaid = Math.min(
          credit.paidAmount + amount,
          credit.totalAmount,
        );
        return { ...credit, paidAmount: newPaid };
      }
      return credit;
    });
    await saveCredits(updated);
  };

  const deleteCredit = async (creditId: string) => {
    await saveCredits(credits.filter((c) => c.id !== creditId));
  };

  // Calculer les paiements mensuels des crédits
  const totalMonthlyCreditPayments = credits.reduce((sum, credit) => {
    const remaining = credit.totalAmount - credit.paidAmount;
    // Si le crédit est actif, calculer le paiement mensuel
    if (remaining > 0 && credit.remainingMonths > 0) {
      return sum + credit.monthlyPayment;
    }
    return sum;
  }, 0);

  // Calculer le budget disponible après tous les engagements
  const totalCommitments = monthlyExpenses + totalMonthlyCreditPayments;

  // Récupérer le nombre de jours restants dans le mois
  const getRemainingDays = () => {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return lastDay.getDate() - today.getDate();
  };

  const remainingDays = getRemainingDays();

  // Budget quotidien
  const dailyBudget = (monthlyIncome - totalCommitments) / remainingDays;

  // Budget total restant pour le mois
  const remainingMonthlyBudget = monthlyIncome - totalCommitments;

  return {
    credits,
    totalMonthlyCreditPayments,
    dailyBudget: dailyBudget > 0 ? dailyBudget : 0,
    remainingMonthlyBudget:
      remainingMonthlyBudget > 0 ? remainingMonthlyBudget : 0,
    remainingDays,
    addCredit,
    payCredit,
    deleteCredit,
  };
}
