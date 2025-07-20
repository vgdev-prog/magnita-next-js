import { create } from 'zustand'

interface SearchModalState {
  isOpen: boolean
  searchQuery: string
}

interface SearchModalActions {
  openModal: () => void
  closeModal: () => void
  setSearchQuery: (query: string) => void
  clearSearch: () => void
}

type SearchModalStore = SearchModalState & SearchModalActions

const initialState: SearchModalState = {
  isOpen: false,
  searchQuery: '',
}

export const useSearchModalStore = create<SearchModalStore>((set) => ({
  ...initialState,

  openModal: () => {
    set({ isOpen: true })
  },
  
  closeModal: () => set({ isOpen: false }),
  
  setSearchQuery: (query: string) => set({ searchQuery: query }),

  clearSearch: () => set({ 
    searchQuery: '',
  }),
}))