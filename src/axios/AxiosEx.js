import React from 'react';
import useAxios from "./useAxios";

const AxiosEx = () => {
    const { loading, data, error, refetch } = useAxios({
        url:"https://yts.mx/api/v2/list_movies.json"
    });

    console.log(`Loading: ${loading}\n Data: ${JSON.stringify(data)}\n Error: ${error}`);
    return (
        <div className="App">
            <div>Hi</div>
            <button onClick={refetch}>Refetch</button>
            <div>{data && data.status}</div>
            <div>{loading && "Loading"}</div>
        </div>
    )
}

export default AxiosEx;