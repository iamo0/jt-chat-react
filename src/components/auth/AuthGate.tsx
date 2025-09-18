import { type JSX, useState } from 'react';

interface Props {
  render: (args: { isAuth: boolean, login: () => void, logout: () => void, user: User | undefined }) => JSX.Element;
}

interface User {
  username: string
}

function AuthGate({ render }: Props): JSX.Element {
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined)

  function login() {
    setCurrentUser({ username: 'User1' })
    localStorage.setItem('user', JSON.stringify({ username: 'User1' }))
  }

  function logout() {
    setCurrentUser(undefined)
    localStorage.removeItem('user')
  }


  return <>{render({ isAuth: Boolean(currentUser), login, logout, user: currentUser })}</>
}

export default AuthGate;
