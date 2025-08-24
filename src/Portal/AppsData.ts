export interface AppsData {
    title: string;
    description: string;
    image: string;
    languages: string[];
    frameworks: string[];
    tags: string[];
}

export const AppsData: AppsData[] = [
    {
        title: 'EMOJI-ESCAPE',
        description: 'スマホで遊べるミニゲーム',
        image: '/src/Portal/assets/img/sample.png',
        languages: ['JavaScript', 'PHP'],
        frameworks: ['Vue.js', 'Laravel'],
        tags: ['MySQL', 'API', 'cookie'],
    },
    {
        title: 'ポートフォリオ',
        description: 'ポートフォリオサイト',
        image: '/src/Portal/assets/img/sample.png',
        languages: ['TypeScript'],
        frameworks: ['Vue.js'],
        tags: ['HTML', 'CSS' ],
    },
    {
        title: 'Sample',
        description: 'サンプルサイト',
        image: '/src/Portal/assets/img/sample.png',
        languages: ['JavaScript'],
        frameworks: ['Vue.js'],
        tags: ['HTML', 'CSS' ],
    },
]