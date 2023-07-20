import 'server-only'

type Dict = {
    [lang: string]: object
}

const dictionaries: Dict = {
    en: () => import('../../dictionaries/en.json').then((module)=> module.default),
    ko: () => import('../../dictionaries/ko.json').then((module)=> module.default),
}

export const getDictionary = (async (lang:string) => dictionaries[lang]())