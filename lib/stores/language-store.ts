import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Language = 'pt' | 'en' | 'es'

interface LanguageState {
  language: Language
  setLanguage: (language: Language) => void
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: 'pt',
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'language-storage',
    },
  ),
)

// Initialize language based on browser language
if (typeof window !== 'undefined') {
  const store = useLanguageStore.getState()
  const userLang = navigator.language.toLowerCase()

  if (userLang.startsWith('en')) {
    store.setLanguage('en')
  } else if (userLang.startsWith('es')) {
    store.setLanguage('es')
  }
}
