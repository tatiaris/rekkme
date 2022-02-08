import React, { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import { circularText } from '../components/Helper';
import styles from '../components/ui/styles/pages/discover.module.css';

const Discover = (props): React.ReactNode => {
  useEffect(() => {
    if (document) {
      circularText('MUSIC', 100, 0);
      circularText('MOVIES', 100, 1);
      circularText('BOOKS', 100, 2);
      circularText('PRODUCTS', 100, 3);
      circularText('BITES', 100, 4);
      circularText('RECIPES', 100, 5);
      circularText('TRAVEL', 100, 6);
    }
  }, []);

  return (
    <>
      <Navbar userSession={props.userSession} pageTitle="Discover" />
      <div className={styles.discover_container}>
        <div className={styles.category_container}>
          <a href="/discover/music">
            <div className="circleText">
              <img src="/badge/music.png" alt="" />
            </div>
          </a>
        </div>
        <div className={styles.category_container}>
          <a href="/discover/tv">
            <div className="circleText">
              <img src="/badge/tv.png" alt="" />
            </div>
          </a>
        </div>
        <div className={styles.category_container}>
          <a href="/discover/book">
            <div className="circleText">
              <img src="/badge/book.png" alt="" />
            </div>
          </a>
        </div>
        <div className={styles.category_container}>
          <a href="/discover/product">
            <div className="circleText">
              <img src="/badge/product.png" alt="" />
            </div>
          </a>
        </div>
        <div className={styles.category_container}>
          <a href="/discover/bites">
            <div className="circleText">
              <img src="/badge/restaurant.png" alt="" />
            </div>
          </a>
        </div>
        <div className={styles.category_container}>
          <a href="/discover/recipes">
            <div className="circleText">
              <img src="/badge/recipe.png" alt="" />
            </div>
          </a>
        </div>
        <div className={styles.category_container}>
          <a href="/discover/travel">
            <div className="circleText">
              <img src="/badge/travel.png" alt="" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Discover;
