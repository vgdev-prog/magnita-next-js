import { create } from 'zustand'

interface CartModalState {
  isOpen: boolean
  searchQuery: string
}

interface CartModalActions {
  openModal: () => void
  closeModal: () => void
  setCartQuery: (query: string) => void
  clearCart: () => void
}

type CartModalStore = CartModalState & CartModalActions

const initialState: CartModalState = {
  isOpen: false,
  searchQuery: '',
}

export const useCartModalStore = create<CartModalStore>((set, get) => ({
  ...initialState,

  openModal: () => {
    set({ isOpen: true })
  },
  
  closeModal: () => set({ isOpen: false }),
  
  setCartQuery: (query: string) => set({ searchQuery: query }),

  clearCart: () => set({
    searchQuery: '',
  }),
}))