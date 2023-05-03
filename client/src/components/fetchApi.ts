export const fetchApi = async (url: string, setData: any) => {
    try {
        await fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            setData(data);
        });
    } catch (err: any) {
        console.log(err.message);
    }
}