import { useStaticQuery, graphql } from "gatsby"

export const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allWpMenu(filter: { name: { eq: "Main Menu" } }) {
        nodes {
          menuItems {
            mainMenuItems: nodes {
              url
              order
              label
              id
            }
          }
        }
      }
    }
  `)
  return data
}
