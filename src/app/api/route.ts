const handler = ({ req, res }: any) => {

    console.log('Received body:', req.body);

    // If you want to process the data, you can access it like this
    //const data = req.body; // Assuming it's JSON

    // Simulate a success response after processing the data
    // return res.status(200).json({ message: 'Form submitted successfully', data });


    // if(req.method=== "POST"){
    // const data = req.body
    // }
    return res.status(400).json({ message: "Bad Request" })
    // res.status(200).json({name: "john", })
}