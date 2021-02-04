import React, {createContext, useState} from 'react';
export const BlogContext = createContext();
export const ContextProvider = (props) => {
  const [blogList, setBlogList] = useState([]);
  const [refreshing, setRefresing] = useState(false);
  const [addDataLoading, setaddDataLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const getData = async () => {
    const response = await fetch(
      'https://www.lenasoftware.com/api/v1/en/maestro/1?page=1&count=5',
    );
    response.json().then((data) => {
      setBlogList(data.result);
      setLoading(false);
    });
    setPage(page + 1);
  };
  const onRefresh = async () => {
    setRefresing(true);
    setBlogList([]);
    const response = await fetch(
      'https://www.lenasoftware.com/api/v1/en/maestro/1?page=1&count=5',
    );
    response.json().then((data) => {
      setPage(page + 1);
      setBlogList(data.result);
      setRefresing(false);
    });
  };
  const addData = async () => {
    setaddDataLoading(true);
    const response = await fetch(
      `https://www.lenasoftware.com/api/v1/en/maestro/1?page=${page}&count=5`,
    );
    response.json().then((data) => {
      setBlogList([...blogList, ...data.result]);
      setPage(page + 1);
    });
    setaddDataLoading(false);
  };
  return (
    <BlogContext.Provider
      value={{
        onRefresh: onRefresh,
        refreshing: refreshing,
        blogList: blogList,
        getData: getData,
        addData: addData,
        addDataLoading: addDataLoading,
        loading: loading,
      }}>
      {props.children}
    </BlogContext.Provider>
  );
};
