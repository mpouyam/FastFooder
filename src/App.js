import { useCallback, useEffect, useState } from 'react';
import './App.css';
import CategoryList from './CategoryList/categoryList';
import Header from './Header/header';
import axios from './useAxios';
import Loading from './Loading/loading';
import FastFoodList from './FastFoodList/fastFoodList';
import SearchBar from './SearchBar/searchBar';
import notFound from "./assets/images/404.png"
import useAxios from './useAxios';

function App() {
  const [url , setUrl] = useState("/FastFood/list")
  const [fastFoodItems, , loading] = useAxios({
    url
  })




  const searchItems = async (term) => {
    setUrl(`/FastFood/search/${term ? "?term=" + term : ""}`)
  }


  const filterItems = (categoryId) => {
    setUrl(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`)
  }
  const renderContent = () => {
    if (loading) {
      return <Loading theme="dark"></Loading>
    }

    if(fastFoodItems.length === 0 ){
      return(
        <>
          <div className='alert alert-warning text-center'>
            محصولی یافت نشد
          </div>
          <img className='mx-auto mt-5 d-block fade-in-horiz' src={notFound}/>
        </>
      )
    } else {
      return <FastFoodList fastFoodItems = {fastFoodItems}></FastFoodList>
    }
  }
  return (
    <div className='wrapper bg-faded-dark'>
      <Header></Header>
      <CategoryList filterItems={filterItems}>
        <SearchBar searchItems= {searchItems}></SearchBar>
      </CategoryList>
      <div className='container mt-4'>{renderContent()}</div>
    </div>
  );
}

export default App;
