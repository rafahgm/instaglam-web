import { createContext, useContext, useMemo } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext<{user: any, login: Function, logout: Function}>({
    user: null,
    login: () => {},
    logout: () => {}
});

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [user, setUser] = useLocalStorage("user", null);
    const navigate = useNavigate();

    const login = async (data: any) => {
        setUser(data);
        navigate("/profile");
    }

    const logout = () => {
        setUser(null);
        navigate("/", {replace: true});
    };

    const value = useMemo(() => ({
        user, login, logout
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [user]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
}