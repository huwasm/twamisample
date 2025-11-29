export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  progress?: string;
  total?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
}

export interface Quest {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  progress?: number; // 0-100
  currentDay?: number;
  totalDays?: number;
  completedOn?: string;
}

export interface Transaction {
  id: string;
  title: string;
  date: string;
  amount: string;
}
