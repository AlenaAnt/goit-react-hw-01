import React from 'react';
import ReactDOM from 'react-dom';

import Profile from './components/Profile';
import user from './user.json';
import Statistical from './components/Statistical';
import statisticalData from './statistical-data.json';
import FriendList from './components/FriendList.jsx';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory';
import transactions from './transactions.json';

ReactDOM.render(
  <React.StrictMode>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistical title="Upload stats" stats={statisticalData} />
    <Statistical stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
