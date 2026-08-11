"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { UserProfile } from "@/types";

interface UserContextType {
  user: UserProfile | null;
  setUserProfile: (profile: UserProfile) => void;
  isOnboarded: boolean;
  setIsOnboarded: (val: boolean) => void;
  showOnboardingModal: boolean;
  setShowOnboardingModal: (show: boolean) => void;
  resetUser: () => void;
}

const DEFAULT_USER: UserProfile = {
  name: "Alex Morgan",
  level: "UG",
  course: "B.Tech Computer Science",
  semester: 4,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isOnboarded, setIsOnboarded] = useState<boolean>(false);
  const [showOnboardingModal, setShowOnboardingModal] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem("studydesk_user_profile");
      const savedOnboarded = localStorage.getItem("studydesk_is_onboarded");

      if (savedUser && savedOnboarded === "true") {
        setUser(JSON.parse(savedUser));
        setIsOnboarded(true);
      } else {
        // Set fallback default for preview, but prompt onboarding modal if not configured
        setUser(DEFAULT_USER);
        setShowOnboardingModal(true);
      }
    } catch (e) {
      console.error("Failed to load user state from localStorage", e);
      setUser(DEFAULT_USER);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  const setUserProfile = (profile: UserProfile) => {
    setUser(profile);
    setIsOnboarded(true);
    setShowOnboardingModal(false);
    try {
      localStorage.setItem("studydesk_user_profile", JSON.stringify(profile));
      localStorage.setItem("studydesk_is_onboarded", "true");
    } catch (e) {
      console.error("Failed to save user state to localStorage", e);
    }
  };

  const resetUser = () => {
    setUser(DEFAULT_USER);
    setIsOnboarded(false);
    setShowOnboardingModal(true);
    try {
      localStorage.removeItem("studydesk_user_profile");
      localStorage.setItem("studydesk_is_onboarded", "false");
    } catch (e) {
      console.error("Failed to reset user state in localStorage", e);
    }
  };

  if (!isInitialized) {
    return null; // Prevents hydration mismatch
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUserProfile,
        isOnboarded,
        setIsOnboarded,
        showOnboardingModal,
        setShowOnboardingModal,
        resetUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
