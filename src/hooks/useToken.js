import { useEffect, useState } from "react"


const useToken = user => {

    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://nameless-reef-39581.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                    const tokenAccess = data.token;
                    localStorage.setItem('tokenAccess', tokenAccess);
                    setToken(tokenAccess);

                })
        }

    }, [user]);
    return [token];
}

export default useToken;