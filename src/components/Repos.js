import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';

const Repos = () => {
  const {repo} = React.useContext(GithubContext);
  let myLanguanges = repo.reduce((total,item)=>{
    const {stargazers_count,language} = item;  
    if (!language) return total;
    if (!total[language]){
      total[language] = {label: language, value: 1, star: 1};
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        star: total[language].star + stargazers_count,
      };
    }
    return total;
  }, {})

  console.log(myLanguanges)

  const usedLanguages = Object.values(myLanguanges)
  .sort((a,b)=>{
    console.log('a',a)
    console.log('b',b)
    return b.value - a.value
  })
  .slice(0,5);

  const popularRepo = Object.values(myLanguanges)
  .sort((a,b)=>{
    return b.star - a.star
  }).map((item)=>{
    return {...item,value: item.star}
  }).slice(0,5);

  return (
  <section className='section'>
    <Wrapper className='section-center'>
      <Pie3D dataChart={usedLanguages} />
      <Doughnut2D dataChart={popularRepo} />
    </Wrapper>
  </section>
  
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
