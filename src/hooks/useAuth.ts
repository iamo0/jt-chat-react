import {useState} from "react";

interface User {
    username: string
}


export function useAuth() {
    const [currentUser, setCurrentUser] = useState<User | undefined>(undefined)

    function login() {
        setCurrentUser({ username: 'User1' })
        localStorage.setItem('user', JSON.stringify({ username: 'User1' }))
    }

    function logout() {
        setCurrentUser(undefined)
        localStorage.removeItem('user')
    }

    return { isAuth: Boolean(currentUser), user: currentUser, login, logout }
}
