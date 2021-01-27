import React from 'react';
import { Link } from 'react-router-dom';

export default function MyHome() {
  return (
    <>
      Olá MyHome
      <Link to="/mystats">
        MyStats
      </Link>
      <Link to="/mymatchup">
        MyMatchup
      </Link>
    </>
  );
}