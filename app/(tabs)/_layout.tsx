import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="ipod" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="transView"
        options={{
          title: "Transactions",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="signature.ja" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="goalView"
        options={{
          title: "Goals",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="binoculars" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wisdomView"
        options={{
          title: "Wisdom",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="sparkles" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="systemView"
        options={{
          title: "System",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="wand.and.outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
