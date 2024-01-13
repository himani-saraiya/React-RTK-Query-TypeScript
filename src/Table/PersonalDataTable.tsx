import React from 'react';
import ATMTable from '../Atoms/ATMTable';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  category: string;
};

export type ProductsData = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

type PersonalDataTableProps = {
  productsData: ProductsData;
};

const PersonalDataTable: React.FC<PersonalDataTableProps> = ({ productsData }) => {
  if (!productsData || !Array.isArray(productsData.products)) {
    return <div>No product data available.</div>;
  }

  const data: Record<string, any>[] = productsData.products.map((product) => ({
    id: product.id,
    title: product.title,
    category: product.category,
    description: product.description,
    price: product.price,
    discountPercentage: product.discountPercentage,
  }));

  return <ATMTable data={data} />;
};

export default PersonalDataTable;
