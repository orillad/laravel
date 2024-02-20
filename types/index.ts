export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    two_factor_secret: string | null;
    two_factor_recovery_codes: string | null;
    created_at: Date;
    updated_at: Date
}


export interface LoginPayload {
    email: string;
    password: string;
}

export interface RegisterPaylaod {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface Links {
    id: number
    created_at: Date;
    updated_at: Date;
    short_link: string;
    full_link: string;
    views: string
}

export interface ErrorResponse {
    message: string;
    errors: Record<string, string[]>;
}

export interface PaginateResponse<T> {
    current_page: number;
    data: T[];
    first_page_url: string | null;
    from: number;
    last_page: number;
    last_page_url: string | null;
    links: {
        url: string | null;
        label: string;
        active: boolean;
    }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}