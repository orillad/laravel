import axios from "axios";

import {User, LoginPayload, RegisterPaylaod} from "@/types"

const user = ref<User | null>(null);


export const useAuth = () => {
    async function login(payload: LoginPayload) {
        await axios.post("/login", payload)
        useRouter().push("/me")
    }

    async function logout() {
        await axios.post('/logout');
        useRouter().push('/login')
    }

    async function register(payload: RegisterPaylaod) {
        if (payload.password !== payload.password_confirmation) throw new Error("Passwords do not match")
        await axios.post('/register', payload)
        alert('User created! Please login')
    }

    async function getUser(): Promise<User | null> {
        if(user.value) return user.value
        try {
            const res = await axios.get('/user');
            const user = res.data
            return {
                ...user,
                created_at: new Date(user.created_at),
                updated_at: new Date(user.updated_at),
                email_verified_at: user.email_verified_at
                    ? new Date(user.email_verified_at)
                    : null,
                two_factor_confirmed_at: user.two_factor_confirmed_at
                    ? new Date(user.two_factor_confirmed_at)
                    : null,
            };
        } catch (err) {
            return null
        }
        
    }
    async function initUser() {
        const userInit = await getUser();
        user.value = userInit
    }

    return {
        login,
        logout,
        register,
        getUser,
        user,
        initUser
    }
}

