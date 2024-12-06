export interface Profile{
    uid: string;
    avatar: string;
    displayName: string;
    theme: string;
    lastOnline: string;
    createdAt: string;
}

export interface Account {
    bio: string;
    location?: string;
    employer?: string;
    occupation?: string;
    social: {
        blazed: string;
        twitter?: string;
        facebook?: string;
        linkedin?: string;
        github?: string;
        instagram?: string;
        youtube?: string;
    },
}

export interface Settings {
    privacy: {},
    cookies: {},
    communication: {},
    accessibility: {
        textSize?: string;
        linkUnderline?: boolean;
    }
}

