export const getSingleProduct = async (id: string) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    throw new Error(
      'No se pudo obtener el producto. Por favor, intente más tarde.'
    );
  }
};
