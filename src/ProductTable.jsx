import useSortableData from './useSortableData.jsx';

const ProductTable = ( props ) => {
  const { items, requestSort, sortConfig } = useSortableData( props.products );
  const getClassNamesFor = ( name ) => {
    if ( !sortConfig ) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>Products</caption>
      <thead>
      <tr>
        <th>
          <button
            type="button"
            onClick={() => requestSort( 'name' )}
            className={getClassNamesFor( 'name' )}
          >
            Name
          </button>
        </th>
        <th>
          <button
            type="button"
            onClick={() => requestSort( 'price' )}
            className={getClassNamesFor( 'price' )}
          >
            Price
          </button>
        </th>
        <th>
          <button
            type="button"
            onClick={() => requestSort( 'stock' )}
            className={getClassNamesFor( 'stock' )}
          >
            In Stock
          </button>
        </th>
      </tr>
      </thead>
      <tbody>
      {items.map( ( item ) => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>${item.price}</td>
          <td>{item.stock}</td>
        </tr>
      ) )}
      </tbody>
    </table>
  );
};

export default ProductTable;