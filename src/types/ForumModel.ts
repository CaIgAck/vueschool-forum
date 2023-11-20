import type { TCategory, TPost, TThread, TUser, Stats } from '@/types'

export type TForumElement = {
    categoryId: string;
    description: string;
    lastPostId?: string;
    name: string;
    slug: string;
    threads?: string[];
    id: string;
}

export type TForum = {
    categories: TCategory[];
    forums: TForumElement[];
    posts: TPost[];
    stats: Stats;
    threads: TThread[];
    users: TUser[];
}
