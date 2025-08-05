// Mock types to replace Firebase types
export interface MockTimestamp {
  toDate(): Date;
  toMillis(): number;
  seconds: number;
  nanoseconds: number;
}

export interface MockDocumentReference {
  id: string;
  path: string;
}

// Mock Timestamp function
export const Timestamp = {
  now: () => ({
    toDate: () => new Date(),
    toMillis: () => Date.now(),
    seconds: Math.floor(Date.now() / 1000),
    nanoseconds: (Date.now() % 1000) * 1000000
  }),
  fromDate: (date: Date) => ({
    toDate: () => date,
    toMillis: () => date.getTime(),
    seconds: Math.floor(date.getTime() / 1000),
    nanoseconds: (date.getTime() % 1000) * 1000000
  })
};

// Mock DocumentReference function
export const DocumentReference = (path: string) => ({
  id: path.split('/').pop() || '',
  path
});

// Additional types
export type EDietPreference = "vegetarian" | "vegan" | "keto" | "paleo" | "mediterranean" | "low-carb" | "high-protein" | "gluten-free" | "dairy-free" | "pescatarian";

export type EUserAgeRange = "18-25" | "26-35" | "36-45" | "46-55" | "56-65" | "65+";

export type UserWeightMeasurement = {
  value: number;
  unit: "kg" | "lbs";
};

export type ProductInfo = {
  name: string;
  price: number;
  currency: string;
  description?: string;
};
