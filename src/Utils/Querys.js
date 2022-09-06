import {gql} from 'apollo-boost';

export const ALL_CONTINENTS = gql`
    query {
        continents {
          code,
          name,
          countries{
            emojiU,
            native,
            phone,
            capital,
            currency,
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
      emojiU,
      native,
      phone,
      capital,
      currency,
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