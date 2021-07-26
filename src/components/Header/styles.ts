import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  background: var(--purple);
`

export const Content = styled.div`
  max-width:1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button{
    font-size: 1rem; 
    padding: 0 2rem;
    height:3rem;
    background: var(--purple-light);
    color: var(--shape);

    border: 0;
    border-radius: 0.25rem;

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`