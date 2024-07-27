import PaginaAristoteles from "@/PaginaAristoteles.vue";
import PaginaPlatao from "@/PaginaPlatao.vue";
import PaginaSocrates from "@/PaginaSocrates.vue";
import HelloWorld from "@/components/HelloWorld.vue";

const routes = [
    {
        path: '/inicio',
        component: HelloWorld
    },
    {
        path: '/aristoteles',
        component: PaginaAristoteles
    },
    {
        path: '/platao',
        component: PaginaPlatao
    },
    {
        path: '/socrates',
        component: PaginaSocrates
    }
]

export default routes;
