export const index = () => `
import routes from './routes';
export default async () => ({
  server: {
    port: process.env.PORT || 3000
  },
  routes
});`

export const routes = routes => `
/* THIS IS AN AUTOGENERATED FILE */
/* MODIFY AT YOUR OWN RISK */
export default ${JSON.stringify(routes, 0, 2)}
`
