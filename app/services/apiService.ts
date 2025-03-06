const apiService = {
    get: async (url: string): Promise<any> => {
        console.log('get', url );

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then((json) => {
                    console.log('Response', json);

                    resolve(json);
                })
                .catch((error  => {
                    reject(error);
                }))
        })
    }

}

export default apiService;