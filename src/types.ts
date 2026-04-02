import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  target: string;
  icon?: LucideIcon;
}

export interface RoleItem {
  role: string;
  organization: string;
  description?: string;
}
