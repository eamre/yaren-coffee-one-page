import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Yazı tipleri projeyle birlikte sunulur (Google'a istek gitmez). Türkçe harfler
// için hem `latin` hem `latin-ext` dilimi gerekir; tarayıcı yalnızca kullanılanı indirir.
import '@fontsource-variable/fraunces/opsz.css'
import '@fontsource/dm-sans/latin-400.css'
import '@fontsource/dm-sans/latin-ext-400.css'
import '@fontsource/dm-sans/latin-500.css'
import '@fontsource/dm-sans/latin-ext-500.css'
import '@fontsource/dm-sans/latin-700.css'
import '@fontsource/dm-sans/latin-ext-700.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
