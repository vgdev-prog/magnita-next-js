interface CartProduct {
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

// Mock data - в реальном приложении это будет из store или props
export const cartItems: CartProduct[] = [
    {
        id: "bel9016",
        name: "Захисні ролети на вікна 1200х1200 мм РА45",
        price: 4764,
        image: "/images/rozetka/bel9016.png",
        quantity: 1
    }
];