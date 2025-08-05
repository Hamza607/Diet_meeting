// Mock authentication hook to replace Firebase auth
import { useState, useCallback } from 'react';
import { mockAuth, mockDb, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, confirmPasswordReset } from '@libs';

export const useFirebaseAuth = () => {
  const [loading, setLoading] = useState(false);

  const createNewAccount = useCallback(async ({ email, password, phone }: { email: string; password: string; phone: string }) => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(mockAuth, email, password);
      
      // Create user data in mock database
      const userData = {
        id: response.user.uid,
        email,
        phone,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      mockDb.users.set(response.user.uid, userData);
      mockDb.save();
      
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }, []);

  const loginUser = useCallback(async ({ email, password }: { email: string; password: string }) => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(mockAuth, email, password);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }, []);

  const logoutUser = useCallback(async () => {
    setLoading(true);
    try {
      const response = await signOut(mockAuth);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }, []);

  const forgotUserPassword = useCallback(async ({ email }: { email: string }) => {
    setLoading(true);
    try {
      const response = await sendPasswordResetEmail(mockAuth, email);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }, []);

  const resetUserPassword = useCallback(async ({ oobCode, password }: { oobCode: string; password: string }) => {
    setLoading(true);
    try {
      const response = await confirmPasswordReset(mockAuth, oobCode, password);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }, []);

  const getUserCollection = useCallback(({ userUid, onUpdate }: { userUid: string; onUpdate: (data: any) => void }) => {
    const userData = mockDb.users.get(userUid);
    onUpdate(userData || null);
    return () => {}; // Return unsubscribe function
  }, []);

  const updateUserInfo = useCallback(async ({ userId, data }: { userId: string; data: any }) => {
    setLoading(true);
    try {
      const existing = mockDb.users.get(userId);
      if (existing) {
        mockDb.users.set(userId, { ...existing, ...data, updatedAt: new Date() });
        mockDb.save();
      }
      setLoading(false);
      return { success: true };
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }, []);

  // Mock OTP functions
  const sendOtp = useCallback(async ({ phoneNumber, setConfirmId }: { phoneNumber: string; setConfirmId: (value: string) => void }) => {
    setLoading(true);
    try {
      // Mock OTP sending
      const mockConfirmId = `confirm_${Date.now()}`;
      setConfirmId(mockConfirmId);
      setLoading(false);
      return true;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }, []);

  const verifyOTP = useCallback(async ({ confirmId, code }: { confirmId: string; code: string }) => {
    setLoading(true);
    try {
      // Mock OTP verification - accept any 6-digit code
      if (code.length === 6 && /^\d+$/.test(code)) {
        setLoading(false);
        return true;
      } else {
        throw new Error('auth/invalid-verification-code');
      }
    } catch (error) {
      setLoading(false);
      throw error;
    }
  }, []);

  return {
    createNewAccount,
    loginUser,
    logoutUser,
    forgotUserPassword,
    resetUserPassword,
    getUserCollection,
    updateUserInfo,
    sendOtp,
    verifyOTP,
    loading
  };
};
