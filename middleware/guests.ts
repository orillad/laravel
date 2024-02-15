import axios, { AxiosError } from "axios";
// export default defineNuxtRouteMiddleware(async(to, from) => {
//     try{
//         const {data:user} = await axios.get("/users")
//         if(user){
//             return navigateTo("/me")
//         }
//     }catch(error){}
// })


export default defineNuxtRouteMiddleware(async (to, from) => {
  const { user, initUser } = useAuth();
  await initUser();
  if (user.value) {
    return navigateTo("/me");
  }
});