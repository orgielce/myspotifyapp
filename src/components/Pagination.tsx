import React, {useState} from "react";
import {BsArrowLeftCircle, BsArrowRightCircle} from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../redux/reducers/releaseSlice";
import {RootState} from "../redux/store";

export const Pagination = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(
    useSelector((state: RootState) => state.releases.page)
  );

  const setNextValue = () => {
    setPage(page + 10);
    dispatch(setCurrentPage(page));
  };

  const setPreviousValue = () => {
    if (page === 10) return;
    setPage(page - 10);
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="flex flex-nowrap mt-8 py-3 text-3xl cursor-pointer ml-auto md:mr-10 lg:mr-10 2xl:mr-10">
      <div onClick={setPreviousValue} className="mr-5">
        <BsArrowLeftCircle></BsArrowLeftCircle>
      </div>
      <div onClick={setNextValue}>
        <BsArrowRightCircle></BsArrowRightCircle>
      </div>
    </div>
  );
};
