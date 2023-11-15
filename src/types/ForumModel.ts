import type { Category, TPost, TThread, TUser, Stats } from '@/types'

export type ForumElement = {
    categoryId: string;
    description: string;
    lastPostId?: string;
    name: string;
    slug: string;
    threads?: string[];
    id: string;
}

export type TForum = {
    categories: Category[];
    forums: ForumElement[];
    posts: TPost[];
    stats: Stats;
    threads: TThread[];
    users: TUser[];
}
