type Payment = {
    name: string;
}

const payment = {
    name: 'Mercado Pago'
} as Payment;

// Not so good, but it's posible =) 
const item = ('hello' as any) as number;
