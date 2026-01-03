
import React from 'react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Commitment {
  title: string;
  description: string;
  icon: React.ReactNode;
}