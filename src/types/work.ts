export type Work = {
    outline: string;
    id: string;
    title: string;
    slug: string;
    role: string[];
    duration: string;
    client: string;
    member: string;
    url?: string;
    categories: string[]; // 複数選択なら配列
    language: string[];
    body: string;
    thumbnail?: {
        url: string;
    };
    eyecatchImage?: {
        url: string;
    };
};
