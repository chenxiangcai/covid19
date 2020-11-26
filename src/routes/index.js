import Home from "../pages/home/Home";
import ChinaMap from "../pages/chinaMap/ChinaMap";
import WorldMap from "../pages/worldMap/WorldMap";
import Error404 from "../pages/error/Error404";

export const projectRoutes = [{
    path: '/covid19',
    component: Home,
    exact: true
}, {
    path: '/covid19/China',
    component: ChinaMap
}, {
    path: '/covid19/World',
    component: WorldMap
}, {
    path: '/404',
    component: Error404
}]