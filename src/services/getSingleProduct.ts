import { Product } from '../types';

export const getSingleProduct = async (id: Product['id']) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();

    if (!response.ok || !data) {
      throw new Error('Error al obtener el producto');
    }

    return data;
  } catch (error) {
    throw new Error('Error al obtener el producto');
  }
};
