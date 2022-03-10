import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

const ThemeSwitch = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Switch
      checked={isDark}
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
    />
  )
}

export default ThemeSwitch;
