import React, { useEffect } from 'react';
import Navbar from '../components/common/Navbar';
import { circularText } from '../components/Helper';

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
      <div className="discover-container">
        <div className="category-container">
          <a href="/discover/music">
            <div className="circTxt">
              <img width="150" src="/badges/MusicBadge.png" alt="" />
            </div>
          </a>
        </div>
        <div className="category-container">
          <a href="/discover/tv">
            <div className="circTxt">
              <img width="150" src="/badges/TVBadge.png" alt="" />
            </div>
          </a>
        </div>
        <div className="category-container">
          <a href="/discover/book">
            <div className="circTxt">
              <img width="150" src="/badges/BookBadge.png" alt="" />
            </div>
          </a>
        </div>
        <div className="category-container">
          <a href="/discover/product">
            <div className="circTxt">
              <img width="150" src="/badges/ProductBadge.png" alt="" />
            </div>
          </a>
        </div>
        <div className="category-container">
          <a href="/discover/bites">
            <div className="circTxt">
              <img width="150" src="/badges/RestaurantBadge.png" alt="" />
            </div>
          </a>
        </div>
        <div className="category-container">
          <a href="/discover/recipes">
            <div className="circTxt">
              <img width="150" src="/badges/RecipeBadge.png" alt="" />
            </div>
          </a>
        </div>
        <div className="category-container">
          <a href="/discover/travel">
            <div className="circTxt">
              <img width="150" src="/badges/TravelBadge.png" alt="" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Discover;
