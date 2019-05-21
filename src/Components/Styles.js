import styled from 'styled-components';
export const MovieWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-template-rows: repeat(auto-fit, 1fr);
  grid-gap: 1rem;
  grid-auto-flow: dense;
    .movie{
        .link{
            text-decoration:none;
            color: black;
        }
        .title{
            min-height: 2.5rem;
            position: relative;
        }
        button{
            position: relative;
            cursor: pointer;
        }

    }
`;