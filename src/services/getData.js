const getData = async () =>{

    const BASE_URL = process.env.BASE_URL

    try{
        const res =  await   fetch(`${BASE_URL}/slides.json`)
                            .then(res => res.json())
        return res
    }catch(error){
        console.log(error)
    }
}

export default getData