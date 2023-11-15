export type Edited = {
    at: number;
    by: string;
    moderated: boolean;
}

export type Reactions = Record<string, Record<string, string>>

export type TPost = {
    edited?: Edited;
    publishedAt: number;
    text: string;
    threadId: string;
    userId: string;
    id: string;
    reactions?: Reactions;
}
