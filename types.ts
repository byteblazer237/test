
export enum AppTab {
  CHAT = 'chat',
  VISION = 'vision',
  VOICE = 'voice',
  SEARCH = 'search'
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  image?: string;
  urls?: { uri: string; title: string }[];
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: number;
}
