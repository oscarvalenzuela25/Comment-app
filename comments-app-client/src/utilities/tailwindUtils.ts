import clsx from 'clsx';
import { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import tailwindConfig from '../../tailwind.config.js';
import resolveConfig from 'tailwindcss/resolveConfig';

export class TailwindUtils {
  static cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }

  static get theme() {
    const fullConfig = resolveConfig(tailwindConfig);
    return fullConfig.theme;
  }
}
