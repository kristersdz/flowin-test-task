import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function useAxiosGet(path) {
    let domain = 'http://18.158.173.83';
    let fullPath = domain + path;

    const [request, setRequest] = useState({
        data: null,
        loading: false,
        error: false
    })

    useEffect(() => {
        setRequest({
            data: null,
            loading: true,
            error: false
        })
        axios.get(fullPath)
            .then(response => {
                setRequest({
                    data: response.data,
                    loading: false,
                    error: false
                })
            })
            .catch(() => {
                setRequest({
                    data: null,
                    loading: false,
                    error: true
                })
            })
    }, [fullPath])

    if(request.loading) {
        return <div>Loading...</div>
    }
    return request
}
