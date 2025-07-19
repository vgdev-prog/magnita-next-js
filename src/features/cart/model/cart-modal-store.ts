import { create } from 'zustand'

interface CartModalState {
  isOpen: boolean;
    products: Array<{
        id: string;
        name: string;
        price: number;
        image: string;
        quantity: number;
    }>;
}

interface CartModalActions {
  openModal: () => void
  closeModal: () => void
  clearCart: () => void
}

type CartModalStore = CartModalState & CartModalActions

const initialState: CartModalState = {
  isOpen: false,
  products: [],
}

export const useCartModalStore = create<CartModalStore>((set) => ({
  ...initialState,

  openModal: () => {
    set({ isOpen: true })
  },
  
  closeModal: () => set({ isOpen: false }),

  clearCart: () => set({
    products: [],
  }),
}))