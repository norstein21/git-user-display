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
    
    return (
    <GithubContext.Provider 
    value={{githubUser,repo,userFollowers}}>{children}</GithubContext.Provider>)
}

export {GithubContext,GithubProvider}