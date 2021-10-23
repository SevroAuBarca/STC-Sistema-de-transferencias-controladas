import HomeScreen from "../pages/HomeScreen.svelte";
import Error404 from "../pages/Error404.svelte";
import Login from "../pages/Login.svelte";
import Register from "../pages/Register.svelte";  
import Products from "../pages/Products.svelte";  


export const routes = {
  '/': HomeScreen,
  '/login': Login,
  '/register': Register,
  '/products': Products,
  '*': Error404,
}