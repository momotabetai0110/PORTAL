export interface AppsData {
    title: string; //アプリ名
    description: string; //アプリの説明
    image: string; //アプリ画像
    url:string; //アプリURL
    releaseDate:string; //リリース日
    deviceType:number; //1:PC 2:スマホ 3:両方
    languages: string[]; //使用言語
    frameworks: string[]; //使用フレームワーク
    database:string; //使用データベース
    tags: string[];
}

export const AppsData: AppsData[] = [
    {
        title: 'サンプルサイト1',
        description: 'PC対応のサンプルサイト',
        image: '/src/Portal/assets/img/sample_thumb.jpg',
        url: 'https://sample.com',
        releaseDate: '2021-01-01',
        deviceType: 1,
        database: 'MySQL',
        languages: ['JavaScript'],
        frameworks: ['Vue.js'],
        tags: ['HTML', 'CSS' ],
    },
    {
        title: 'サンプルサイト2',
        description: 'スマホ対応のサンプルサイト',
        image: '/src/Portal/assets/img/sample_thumb.jpg',
        url: 'https://sample.com',
        releaseDate: '2021-01-02',
        deviceType: 1,
        database: 'MySQL',
        languages: ['JavaScript'],
        frameworks: ['Vue.js'],
        tags: ['HTML', 'CSS' ],
    },
    {
        title: 'サンプルサイト3',
        description: '両方対応のサンプルサイト',
        image: '/src/Portal/assets/img/sample_thumb.jpg',
        url: 'https://sample.com',
        releaseDate: '2021-01-03',
        deviceType: 3,
        database: 'MySQL',
        languages: ['JavaScript'],
        frameworks: ['Vue.js'],
        tags: ['HTML', 'CSS' ],
    },
]