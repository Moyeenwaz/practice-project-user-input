import React from 'react';
import classes from './UsersList.module.css';
import Card from '../UI/Card';

export default function UsersList({ users }) {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
