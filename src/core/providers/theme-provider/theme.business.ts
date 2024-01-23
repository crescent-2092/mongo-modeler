import { ThemeModel, createInitialTheme } from './theme.model';
import {
  saveValueToLocalStorage,
  retrieveValueFromLocalStorage,
} from '@/common/local-storage';

export const saveThemePreferenceToLocalStorage = (themeValue: string) => {
  try {
    saveValueToLocalStorage<string>('themeMode', themeValue);
  } catch (e) {
    console.warn('Failed to save in localStorage');
  }
};

export const retrieveThemePreferenceFromLocalStorage = (): ThemeModel => {
  try {
    const themeMode = retrieveValueFromLocalStorage<'dark' | 'light'>(
      'themeMode'
    );
    return themeMode !== null ? { themeMode } : createInitialTheme();
  } catch {
    return createInitialTheme();
  }
};
