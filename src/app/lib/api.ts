 const sendContactFrom = async ({data} : any) => fetch('/api/route', {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
})

export default sendContactFrom;