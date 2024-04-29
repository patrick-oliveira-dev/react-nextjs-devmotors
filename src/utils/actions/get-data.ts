export async function getDataHome() {
    try {
        const res = await fetch(`${process.env.API_URL}/objects/662983ba110003f9e3bf58ac?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`)

        if (!res.ok) {
            throw new Error("Failed to fetch data 1")
        }

        return res.json();

    } catch(err) {
        throw new Error("Failed to fetch data 2")
    }
    
}