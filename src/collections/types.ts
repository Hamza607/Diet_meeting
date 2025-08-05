import type { MockDocumentReference, MockTimestamp } from "./schema";

export type User = {
  id: MockDocumentReference;
  email: string;
  phone?: string;
  type?: string;
  is2FAEnabled?: boolean;
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
};

export type ForumContent = {
  id: MockDocumentReference;
  createdBy: MockDocumentReference;
  title: string;
  description: string;
  tags: EDietPreference[];
  commentsCount: number;
  likes: MockDocumentReference[];
  dislikes: MockDocumentReference[];
  product?: ProductInfo;
  contentType: "forum" | "content";
  videoUrl?: string;
  scheduleAt?: MockTimestamp;
  views: number;
  status: "publish" | "unpublish";
  favoritedBy: MockDocumentReference[];
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
};

export type Comment = {
  id: MockDocumentReference;
  forumContentId: MockDocumentReference;
  meetingId?: MockDocumentReference;
  createdBy: MockDocumentReference;
  content: string;
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
};

export type Reply = {
  id: MockDocumentReference;
  commentId: MockDocumentReference;
  createdBy: MockDocumentReference;
  content: string;
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
};

export type Meeting = {
  id: MockDocumentReference;
  title: string;
  description: string;
  enableLiveChat: boolean;
  product?: ProductInfo;
  meetingScheduleAt?: MockTimestamp;
  createdBy: MockDocumentReference;
  meetingUrl: string;
  status: "publish" | "unpublish";
  likes: MockDocumentReference[];
  dislikes: MockDocumentReference[];
  commentsCount: number;
  views: number;
  favoritedBy: MockDocumentReference[];
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
};

export type MessageThread = {
  id: string;
  title?: string;
  users: MockDocumentReference[];
  lastMessage: string;
  lastMessageSentBy: MockDocumentReference;
  lastMessageTimestamp: MockTimestamp;
  messages: Message[];
  createdBy: MockDocumentReference;
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
};

export type Message = {
  id: MockDocumentReference;
  sentBy: MockDocumentReference;
  text: string;
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
};

export type Favorite = {
  id: MockDocumentReference;
  createdBy: MockDocumentReference;
  type: "content" | "meeting";
  favouritedRef: MockDocumentReference;
  createdAt: MockTimestamp;
};

export type Report = {
  id: MockDocumentReference;
  type: "content" | "comment" | "reply" | "profile" | "forum" | "messageThread";
  reportedBy: MockDocumentReference;
  reportedRef: MockDocumentReference;
  reason: string;
  details?: string;
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
};

export type DailyActivityCheckin = {
  id: MockDocumentReference;
  weightLog: UserWeightMeasurement;
  createdBy: MockDocumentReference;
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
};

export type Notification = {
  id: MockDocumentReference;
  userId: MockDocumentReference;
  type: "comment" | "schedule-meeting" | "new-post" | "like";
  title: string;
  message: string;
  isRead: boolean;
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
};

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
