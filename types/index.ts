export interface User {
    id: number,
    name: string,
    email: string,
    email_verified_at: string | null,
    two_factor_secret: string | null,
    two_factor_recovery_codes: string | null,
    created_at: Date,
    updated_at: Date
}


export interface LoginPayload {
    email: string;
    password: string;
}

export interface RegisterPaylaod {
    name: string,
    email: string,
    password: string,
    password_confirmation: string,
}