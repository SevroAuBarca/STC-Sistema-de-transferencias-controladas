import HomeScreen from "../pages/HomeScreen.svelte";
import Error404 from "../pages/Error404.svelte";
import Login from "../pages/Login.svelte";
import Register from "../pages/Register.svelte";  
import Products from "../pages/Products.svelte";  
import CartScreen from "../pages/CartScreen.svelte";
import PaidScreen from "../pages/PaidScreen.svelte";


export const routes = {
  '/': HomeScreen,
  '/login': Login,
  '/cart': CartScreen,
  '/register': Register,
  '/products': Products,
  '/paid': PaidScreen,

  '*': Error404,
}