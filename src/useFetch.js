import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [err, setErr] = useState(null);


    useEffect(() => {
        const abortCont = new AbortController();


        console.log("runs every time after render");
        setTimeout(()=>{
            fetch(url, {signal: abortCont.signal})
        .then((resp) => {
            console.log(resp);
            if(!resp.ok) {
                throw Error("could not fetch data for that resource");
            }
            return resp.json();
        }).then((data_)=> {
           // console.log(data_);
          //  console.log("Set data" + setData(data_));
            setData(data_);
            console.log(data);
            setErr(null);
            setIsPending(false);
        })
        .catch((e)=>{
            if (e.name=="AbortError") {
                console.log("fetch aborted");
            } else {
                setErr(e.message);
                console.log(e.message);
            }
        })
        ;
        }, 1000);

        return ()=>abortCont.abort();

        //dont setState in useEffect
    }, [url]);


    return {data, isPending, err};
}


export default useFetch;