
export const make = <T> (obj?: T): T => {
    return obj || ({} as T);
};
