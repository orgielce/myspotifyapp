import React, {useState} from "react";
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../redux/reducers/tokenSlice";
import {RootState} from "../redux/store";

export const Pagination = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(useSelector((state: RootState) => state.token.page));

  const setNextValue = (e: any) => {
    e.preventDefault();
    setPage(page + 10);
    dispatch(setCurrentPage({page}));
  };

  const setPreviousValue = (e: any) => {
    e.preventDefault();
    if (page === 10) return;
    dispatch(setCurrentPage({page: page - 10}));
    setPage(page - 10);
  };

  return (
    <div className="flex flex-nowrap mt-8 py-3 text-3xl cursor-pointer ml-auto md:mr-10 lg:mr-10 2xl:mr-28">
      {/*{page === 10 && (*/}
      {/*  <div onClick={setPreviousValue} className="mr-5 opacity-25">*/}
      {/*    <BsArrowLeftCircle />*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*{page > 10 && (*/}
      {/*  <div onClick={setPreviousValue} className="mr-5">*/}
      {/*    <BsArrowLeftCircle />*/}
      {/*  </div>*/}
      {/*)}*/}
      <div onClick={setPreviousValue} className="mr-5">
        {page === 10 && <BsArrowLeftCircle className="opacity-25" />}
        {page > 10 && <BsArrowLeftCircle />}
      </div>

      <div onClick={setNextValue}>
        <BsArrowRightCircle />
      </div>
    </div>
  );
};
