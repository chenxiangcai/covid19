import Home from "../pages/home/Home";
import ChinaMap from "../pages/china_map/ChinaMap";
import WorldMap from "../pages/world_map/WorldMap";
import Error404 from "../pages/error/Error404";
import HeatMapPage from "../pages/heatMap_Wrold";
import HeartMapChina from "../pages/heatMap_China";

export const projectRoutes = [{
    path: '/covid19',
    component: Home,
    exact: true
}, {
    path: '/covid19/china',
    component: ChinaMap
}, {
    path: '/covid19/world',
    component: WorldMap
}, {
    path: '/covid19/heatmapofchina',
    component: HeartMapChina
}, {
    path: '/covid19/heatmapofworld',
    component: HeatMapPage
}, {
    path: '/404',
    component: Error404
}]