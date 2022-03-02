export interface Category {
  categoryId: string;
  name: string;
  imageUrl: string;
}

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

export interface FormRekk {
  category: string;
  usernames: string[];
  url: string;
  wager: number;
  title: string;
  imageUrl: string;
  description: string;
  tags: string[];
  artist?: string;
  location?: string;
  author?: string;
  likes?: number;
  comments?: number;
}

export interface Rekk {
  rekId?: string;
  url: string;
  description: string;
  wager: number;
  toUser: User;
  fromUser: User;
  category: Category;
  createdOn: Date;
  rekResult?: string;
  comments?: Comment[];
  tags?: string[];
  imageUrl?: string;
  artist?: string;
  location?: string;
  author?: string;
  title: string;
  numLikes?: number;
  liked?: boolean;
}
