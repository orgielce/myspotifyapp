import React, {useState} from "react";
import styled from "styled-components";
import {decrement, increment, incrementByAmount, selectCount} from "../redux/reducers";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useGetListByNameQuery} from "../services/list";

const InputElement = styled.input`
  padding: 10px;
  border: 2px solid #282c34;
  border-radius: 4px;
  margin: 0 15px;
`;

const Button = styled.button`
  padding: 10px;
  border: 2px solid #282c34;
  border-radius: 4px;
  margin: 0 15px;

  &:hover {
    border-color: blue;
    cursor: pointer;
  }

  & > span {
    display: block;
    font-size: 1.1rem;

    &:hover {
      color: blue;
    }
  }
`;

export const Inbox = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("5");

  const {data, error, isLoading} = useGetListByNameQuery("string");

  console.log(data, error, isLoading);

  return (
    <>
      {isLoading && "Data is loading ..."}
      <div>
        <Button onClick={() => dispatch(decrement())}>
          <span>Disminuir</span>
        </Button>
        {count}
        <Button onClick={() => dispatch(increment())}>
          <span>Aumentar</span>
        </Button>

        <InputElement
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
          <span>Add Amount</span>
        </Button>
        <Link to="/posts">
          <Button>
            <span>Go to posts</span>
          </Button>
        </Link>
        <Link to="/">
          <Button>
            <span>Inbox</span>
          </Button>
        </Link>
      </div>
    </>
  );
};
