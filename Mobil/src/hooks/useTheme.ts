import { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

export const useTheme = () => {
  const systemColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemColorScheme === 'dark');
  const [overrideDarkMode, setOverrideDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    if (systemColorScheme) setIsDark(systemColorScheme === 'dark');
  }, [systemColorScheme]);

  const effectiveIsDark = overrideDarkMode !== null ? overrideDarkMode : isDark;

  return { isDark, effectiveIsDark, overrideDarkMode, setOverrideDarkMode };
};
