const brl = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
export const formatPrice = (value: number): string => brl.format(value);

export const asset = (path: string): string => `${import.meta.env.BASE_URL}${path}`;
