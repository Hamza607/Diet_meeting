// Mock authentication system to replace Firebase
export interface MockUser {
  phoneNumber?: string;
  uid: string;
  email: string;
  password?: string;
}

export interface MockUserData {
  id: string;
  email: string;
  phone?: string;
  type?: string;
  is2FAEnabled?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// Mock authentication functions
export const mockAuth = {
  currentUser: null as MockUser | null,
  onAuthStateChanged: (callback: (user: MockUser | null) => void) => {
    // Simulate auth state change
    const user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')!) : null;
    callback(user);
    return () => {}; // Return unsubscribe function
  }
};

// Mock database functions
export const mockDb = {
  users: new Map<string, MockUserData>(),
  
  // Initialize with some mock data
  init() {
    const storedUsers = localStorage.getItem('mockUsers');
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      this.users = new Map(Object.entries(users));
    }
  },
  
  // Save users to localStorage
  save() {
    const usersObj = Object.fromEntries(this.users);
    localStorage.setItem('mockUsers', JSON.stringify(usersObj));
  }
};

// Initialize mock database
mockDb.init();

// Export mock functions that mimic Firebase API
export const createUserWithEmailAndPassword = async (_auth: any, email: string, password: string) => {
  const uid = `user_${Date.now()}`;
  const user = { uid, email, password };
  mockAuth.currentUser = user;
  localStorage.setItem('currentUser', JSON.stringify(user));
  
  // Create user data
  const userData: MockUserData = {
    id: uid,
    email,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  mockDb.users.set(uid, userData);
  mockDb.save();
  
  return { user };
};

export const signInWithEmailAndPassword = async (_auth: any, email: string, password: string) => {
  // Find user by email
  const userEntry = Array.from(mockDb.users.entries()).find(([_, userData]) => userData.email === email);
  
  if (!userEntry) {
    throw new Error('auth/user-not-found');
  }
  
  const [uid, userData] = userEntry;
  const user = { uid, email: userData.email, password };
  mockAuth.currentUser = user;
  localStorage.setItem('currentUser', JSON.stringify(user));
  
  return { user };
};

export const signOut = async (_auth: any) => {
  mockAuth.currentUser = null;
  localStorage.removeItem('currentUser');
  return {};
};

export const sendPasswordResetEmail = async (_auth: any, email: string) => {
  // Mock password reset - just check if user exists
  const userExists = Array.from(mockDb.users.values()).some(user => user.email === email);
  if (!userExists) {
    throw new Error('auth/user-not-found');
  }
  return {};
};

export const confirmPasswordReset = async (_auth: any, _oobCode: string, _newPassword: string) => {
  // Mock password reset confirmation
  return {};
};

// Mock Firestore functions
export const doc = (collection: any, id: string) => ({ id, collection });
export const getDoc = async (docRef: any) => {
  const userData = mockDb.users.get(docRef.id);
  return { exists: () => !!userData, data: () => userData };
};
export const setDoc = async (docRef: any, data: any) => {
  mockDb.users.set(docRef.id, { ...data, updatedAt: new Date() });
  mockDb.save();
};
export const updateDoc = async (docRef: any, data: any) => {
  const existing = mockDb.users.get(docRef.id);
  if (existing) {
    mockDb.users.set(docRef.id, { ...existing, ...data, updatedAt: new Date() });
    mockDb.save();
  }
};
export const collection = (db: any, name: string) => ({ name, db });
export const onSnapshot = (docRef: any, callback: (snapshot: any) => void) => {
  // Mock real-time updates
  const userData = mockDb.users.get(docRef.id);
  callback({ data: () => userData });
  return () => {}; // Return unsubscribe function
};

// Mock types
export type DocumentData = any;
export type WhereFilterOp = any;
export type AuthUser = MockUser;
export type User = MockUserData;
