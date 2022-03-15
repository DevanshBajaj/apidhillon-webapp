import { useState, useEffect } from 'react'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)

  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <Switch
      checked={isDark}
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
    />
  )
}

export default ThemeSwitch;
