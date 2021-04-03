const isIn = (str1: string, str2: string): boolean => {
    return str1.toLowerCase().includes(str2.toLowerCase())
}

export const getCurrency = (str: string): string => {
    if (isIn(str, 'EUR')) {
        return '€'
    }
    if (isIn(str, 'USD') || isIn(str, 'Dollar')) {
        return '$'
    }
    if (isIn(str, 'GBP') || isIn(str, 'Pound')) {
        return '£'
    }
    return '€'
}