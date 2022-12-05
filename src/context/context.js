import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

//provider  - GithubContext.Provider
const GithubProvider = ({children})=>{
    const [githubUser,setGithubUser] = useState(mockUser)
    const [repo,setRepo] = useState(mockRepos)
    const [userFollowers,setUserFollowers] = useState(mockFollowers)
    
    //request loading
    const [requests,setRequest] = useState(0);
    const [loading,setLoading] = useState(false);

    //error
    const [error,setError] = useState({})

    //checkrate
    const checkRequests = ()=>{
        axios(`${rootUrl}/rate_limit`)
        .then(({data})=>{
            console.log(data)
            let {
                rate:{remaining},
            } = data;
            setRequest(remaining);
            if(remaining === 0 ){
            //fungsi error
            toggleError(true,'Sorry, limit request reached.')
            }       
        })
        .catch((err)=>console.log(err))
    }

    function toggleError(show=false,msg=''){
        setError({show,msg})
    }

    // search user
    const searchUser = async (user) =>{
        toggleError()
        setLoading(true)
        const response = await axios(`${rootUrl}/users/${user}`).catch((err)=>console.log(err))
        if(response){
            setGithubUser(response.data)
            const {repos_url,followers_url} = response.data;

            await Promise.allSettled([
                axios(`${followers_url}?per_page=100`),
                axios(`${repos_url}?per_page=100`)
            ]).then((hasil)=>{
                console.log(hasil)
                const status = 'fulfilled'
                //ini namanya gue bikin ribet karena utk hipotesa gw kalo namanya ga harus followers dan repo. HASILNYA, array ini NANGKEP data sesuai urutan aja
                const [flwers,repp] = hasil;
                if(repp.status === status){
                    setRepo(repp.value.data)
                }
                if(flwers.status === status){
                    setUserFollowers(flwers.value.data)
                }

            })

            //get data user followers 
            // axios(`${followers_url}?per_page=100`).then((response)=>{
            //     console.log(response)
            //     setUserFollowers(response.data)
            // })

            // //repo
            // axios(`${repos_url}?per_page=100`).then((response)=>{
            //     console.log('data repo',response.data)
            //     setRepo(response.data)
            // })

        } else{
            toggleError(true,'there is no user with that username')
        }
        // untuk merequest data rate_limit
        checkRequests()
        setLoading(false)
    }

    //error
    useEffect(()=>{
        checkRequests();
    },[])

    return (
    <GithubContext.Provider 
    value={{githubUser,repo,userFollowers,requests,error,searchUser,loading}}>{children}</GithubContext.Provider>)
}

export {GithubContext,GithubProvider}