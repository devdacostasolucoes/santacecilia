import React from 'react';
import * as LucideIcons from 'lucide-react';

const iconMap = {
  menu: 'Menu',
  x: 'X',
  phone: 'Phone',
  mail: 'Mail',
  'map-pin': 'MapPin',
  heart: 'Heart',
  stethoscope: 'Stethoscope',
  clock: 'Clock',
  shield: 'Shield',
  users: 'Users',
  award: 'Award',
  'chevron-down': 'ChevronDown',
  'chevron-right': 'ChevronRight',
  star: 'Star',
  'star-filled': 'Star',
  calendar: 'Calendar',
  'book-open': 'BookOpen',
  flask: 'Flask',
  pill: 'Pill',
  ambulance: 'Ambulance',
  bed: 'Bed',
  microscope: 'Microscope',
  facebook: 'Facebook',
  instagram: 'Instagram',
  youtube: 'Youtube',
  linkedin: 'LinkedIn',
  play: 'Play',
  check: 'Check',
  external: 'ExternalLink',
};

export const Icon = ({ name, size = 24, className = '', ...props }) => {
  const iconName = iconMap[name];
  if (!iconName) return null;

  const IconComponent = LucideIcons[iconName];
  if (!IconComponent) return null;

  return <IconComponent size={size} className={className} {...props} />;
};

export default Icon;
