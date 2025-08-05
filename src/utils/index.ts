// Mock utility functions to replace Firebase utilities
export const throwFirebaseException = (error: string) => {
  const errorMessages: Record<string, string> = {
    'auth/user-not-found': 'No user found with this email address.',
    'auth/wrong-password': 'Incorrect password.',
    'auth/email-already-in-use': 'An account with this email already exists.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/operation-not-allowed': 'This operation is not allowed.',
    'auth/invalid-verification-code': 'Invalid verification code.',
    'auth/invalid-verification-id': 'Invalid verification ID.',
    'auth/quota-exceeded': 'Quota exceeded.',
    'auth/network-request-failed': 'Network error. Please check your connection.'
  };
  
  return errorMessages[error] || 'An error occurred. Please try again.';
};

// Mock Firebase utility functions
export const setDocument = async ({ collectionName, userId, data }: any) => {
  // Mock implementation
  console.log('Mock setDocument:', { collectionName, userId, data });
  return Promise.resolve();
};

export const addDocument = async ({ collectionName, data }: any) => {
  // Mock implementation
  console.log('Mock addDocument:', { collectionName, data });
  return Promise.resolve({ id: `doc_${Date.now()}` });
};

export const getDocument = async ({ collectionName, userId }: any) => {
  // Mock implementation
  console.log('Mock getDocument:', { collectionName, userId });
  return Promise.resolve({ exists: () => true, data: () => ({}) });
};

export const updateDocument = async ({ collectionName, userId, data }: any) => {
  // Mock implementation
  console.log('Mock updateDocument:', { collectionName, userId, data });
  return Promise.resolve();
};

export const deleteDocument = async ({ collectionName, userId }: any) => {
  // Mock implementation
  console.log('Mock deleteDocument:', { collectionName, userId });
  return Promise.resolve();
};

export const getRealTimeDataByDocumentId = ({ collectionName, userId, onUpdate }: any) => {
  // Mock real-time listener
  console.log('Mock getRealTimeDataByDocumentId:', { collectionName, userId });
  const mockData = { id: userId, email: 'mock@example.com' };
  onUpdate(mockData);
  return () => {}; // Return unsubscribe function
};
