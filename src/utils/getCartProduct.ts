// Función auxiliar para obtener productos del carrito
export const getCartProducts = () => {
  try {
    const storedProducts = localStorage.getItem('cartProducts');
    return storedProducts ? JSON.parse(storedProducts) : [];
  } catch (error) {
    console.error('Error al obtener productos del localStorage:', error);
    return [];
  }
};
