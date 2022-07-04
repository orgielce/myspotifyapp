import React, {FunctionComponent} from "react";
import classNames from "classnames";
import {AiFillHeart} from "react-icons/ai";
import {BsChatSquareFill} from "react-icons/bs";

import styles from "../assets/styles/card.module.scss";
import {CardProps} from "../utilities/types";

export const Card: FunctionComponent<CardProps> = ({
  title,
  likes,
  order,
  image,
  type,
}) => {
  return (
    <div className={classNames([styles.wrapper, styles.wrapperAnime])}>
      <div className={styles.header}>
        <div className={styles.imageWrapper}>
          <img src={image} className={styles.image} alt="" />
        </div>
        <div className={styles.badgeWrapper}>
          <div className={classNames([styles.dangerBadge, styles.badgeAnime])}>
            <AiFillHeart />
          </div>
          <div className={classNames([styles.primaryBadge, styles.badgeAnime, "group"])}>
            <BsChatSquareFill />
            <span className={classNames([styles.counter, "group-hover:text-white"])}>
              {likes}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <h1 className={styles.text}>{`${order}. ${title}`}</h1>
      </div>
    </div>
  );
};
