import React from 'react';
import PersonalDataTable, { ProductsData } from './PersonalDataTable';
import { useGetUsersQuery } from '../services/PostSlice';
// import { useGetProductsQuery } from '../services/PostSlice';

const PersonalDataTableWrapper: React.FC = () => {
  const { data, isLoading } = useGetUsersQuery("");

  const sampleProductsData = (): ProductsData => {
    if (isLoading) {
      return { products: [], total: 0, skip: 0, limit: 0 };
    } else {
      // console.log(data);
      return data as ProductsData;
    }
  };

  return (
    <div>
      <PersonalDataTable productsData={sampleProductsData()} />
    </div>
  );
};

export default PersonalDataTableWrapper;