export interface User {
  userId?: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  rekPoints: number;
  kos?: number;
  imageUrl: string;
  lastLogin?: Date;
  isPublic: boolean;
  numFriends: number;
  numFollowing: number;
  numFollowers: number;
}

export interface Rekk {
  category: string;
  usernames: string[];
  url: string;
  wager: number;
  title: string;
  imageUrl: string;
  description: string;
  tags: string[];
  artist: string;
  location: string;
  author?: string;
  likes?: number;
  comments?: number;
}
