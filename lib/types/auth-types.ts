export interface Credentials {
    email: string
    password: string
}

export interface AuthUser {
    uid: string
    email: string | null
    displayName: string | null
    phoneNumber: string | null
    photoURL: string | null
    providerId: string
    emailVerified: boolean
    isAnonymous: boolean
}

export interface UserProfileDoc {
    email: string | null
    name: string
    photoURL: string | null
}