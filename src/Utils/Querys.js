import {gql} from 'apollo-boost';

export const ALL_CONTINENTS = gql`
    query {
        continents {
          code,
          name,
          countries{
            code,
            name,
            languages{
              code,
              name
            }
          }
        }
      }
      `

export const GET_COUNTRIES = gql`
{
    countries {
      code,
      name,
      continent{
        code,
        name,
        countries{
          code,
          name,
        }
      },
      languages{
        code,
        name
      }
    }
  }
    
  `;