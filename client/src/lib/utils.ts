export const getImagePath = (path: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/hosptail-mangment-' : '';
    return `${basePath}${path}`;
};
