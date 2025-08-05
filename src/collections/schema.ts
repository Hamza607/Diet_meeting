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

import type { EDietPreference, EUserAgeRange } from "@collections";

// Collections
interface User {
  id: MockDocumentReference;
  email: string;
  phone?: string;
  is2FAEnabled: boolean;
  profilePictureUrl: string;
  firstName: string;
  lastName: string;
  displayName: string;
  ageRange: EUserAgeRange;
  gender: "male" | "female" | "other";
  height: UserHeightMeasurement;
  currentWeight: UserWeightMeasurement;
  targetWeight: UserWeightMeasurement;
  timelineType: "1month" | "3months" | "6months" | "1year" | "custom";
  targetedAt: MockTimestamp;
  dietPreferences: EDietPreference[];
  stripeCustomerId: string;
  type: "member" | "coach";
  about: string;
  location: string;
  externalLinks: UserExternalLinks;
  notificationSettings: UserNotificationSettings;
  subscribedUsers: MockDocumentReference[]; // Ref to User
  blockedUsers: MockDocumentReference[]; // Ref to User
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
}

interface ForumContent {
  // For coaches to upload content & forum posts
  id: MockDocumentReference;
  createdBy: MockDocumentReference; // Ref to User
  title: string;
  description: string;
  tags: EDietPreference[];
  commentsCount: number;
  likes: MockDocumentReference[]; // Ref to User
  dislikes: MockDocumentReference[]; // Ref to User
  product?: ProductInfo; // Optional, only used when toggle is on
  contentType: "forum" | "content";
  videoUrl?: string; // Only present when contentType === 'content'
  scheduleAt: MockTimestamp; // Only present when contentType === 'content'
  views: number; // Number of views of the forum content
  status: "publish" | "unpublish"; // if it is a uploaded content
  favoritedBy: MockDocumentReference[]; // Ref to User
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
}

interface Comment {
  id: MockDocumentReference;
  forumContentId: MockDocumentReference; // Ref to ForumContent
  meetingId: MockDocumentReference; // Ref to Meeting, if it is a comment on a meeting
  createdBy: MockDocumentReference; // Ref to User
  content: string;
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
}

interface Reply {
  id: MockDocumentReference;
  commentId: MockDocumentReference; // Ref to parent Comment
  createdBy: MockDocumentReference; // Ref to User
  content: string;
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
}

interface Meeting {
  id: MockDocumentReference;
  title: string;
  description: string;
  tags: EDietPreference[];
  allowUsersToJoin: boolean;
  enableLiveChat: boolean;
  product?: ProductInfo; // Optional, only used when toggle is on
  meetingScheduleAt: MockTimestamp; // Show in upcoming meetings section if meeting is scheduled
  createdBy: MockDocumentReference; // Ref to User
  meetingUrl: string;
  status: "publish" | "unpublish"; // if it is not a scheduled meeting
  likes: MockDocumentReference[]; // Ref to User
  dislikes: MockDocumentReference[]; // Ref to User
  commentsCount: number;
  views: number; // Number of views of the meeting
  favoritedBy: MockDocumentReference[]; // Ref to User
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
}

interface MessageThread {
  id: string;
  title?: string;
  users: MockDocumentReference[]; // Array of Ref to User
  lastMessage: String;
  lastMessageSentBy: MockDocumentReference; // Ref to User
  lastMessageTimestamp: MockTimestamp;
  messages: Message[]; // Sub-Collection
  createdBy: MockDocumentReference; // Ref to User
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
}

interface Message {
  id: MockDocumentReference;
  sentBy: MockDocumentReference; // Ref to User
  text: string;
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
}

interface Favorite {
  id: MockDocumentReference;
  createdBy: MockDocumentReference; // Ref to User
  type: "content" | "meeting"; // @TODO: Add all collection that can be favorited by users
  favouritedRef: MockDocumentReference; // Ref to Content i.e. ForumContent or Meeting
  createdAt: MockTimestamp;
}

interface Report {
  id: MockDocumentReference;
  type: "content" | "comment" | "reply" | "profile" | "forum" | "messageThread";
  reportedBy: MockDocumentReference; // Ref to User
  reportedRef: MockDocumentReference; // Reference to the collection about which the report is made
  reason:
    | "Inappropriate Content"
    | "Abusive Behavior"
    | "Inaccurate Information"
    | "Other";
  details?: string;
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
}

interface DailyActivityCheckin {
  id: MockDocumentReference;
  weightLog: UserWeightMeasurement;
  createdBy: MockDocumentReference; // Ref to User
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
}

interface Notification {
  id: MockDocumentReference;
  userId: MockDocumentReference; // Ref to User
  type: "comment" | "schedule-meeting" | "new-post" | "like";
  title: string;
  message: string;
  isRead: boolean;
  createdAt: MockTimestamp;
  updatedAt: MockTimestamp;
}

interface UserHeightMeasurement {
  value: number;
  unit: "ft" | "cm";
  feet?: number; // Only used when unit is 'ft'
  inches?: number; // Only used when unit is 'ft'
}

interface UserWeightMeasurement {
  value: number;
  unit: "lb" | "kg";
  notes?: string; // Only used when logging daily activity checkin
}

interface UserExternalLinks {
  link1: string;
  link2: string;
  link3: string;
}

interface UserNotificationSettings {
  email: UserNotificationSettingTypes;
  inApp: UserNotificationSettingTypes;
}

interface UserNotificationSettingTypes {
  newContent: boolean; // Only applicable for inApp
  liveMeetingReminder: boolean;
  commentReply: boolean;
  newMessage: boolean;
}

interface ProductInfo {
  name: string;
  link: string;
  description: string;
  productImageUrl: string;
}

export type {
  User,
  ForumContent,
  Comment,
  Reply,
  Meeting,
  Favorite,
  MessageThread,
  Message,
  Report,
  DailyActivityCheckin,
  Notification,
};
