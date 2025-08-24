
export const isValidImage = (image: any) => image && 
        typeof image === 'string' && 
    (image.startsWith('http://') || image.startsWith('https://'));