
export interface FunctionType {
    (form?: "NFC" | "NFD" | "NFKC" | "NFKD"): (str: string) => string
}

export default (form?: "NFC" | "NFD" | "NFKC" | "NFKD") => (str: string) => str.normalize(form);