import {routes as routesConfig} from '~/configs';
//Pages
import {
    HomePage,
    FollowingPage,
    ProfilePage,
    UploadPage,
    SearchPage,
} from '~/pages';

//Layouts
import { OnlyHeader } from '~/layout';

// Route Public -- dành cho Customer không cần đăng nhập tài khoản vẫn có thể xem
const publicRouter = [
    { path: routesConfig.root, component: <HomePage /> },
    { path: routesConfig.following, component: <FollowingPage /> },
    { path: routesConfig.profile, component: <ProfilePage /> },
    { path: routesConfig.upload, component: <UploadPage /> , layout: OnlyHeader },
    { path: routesConfig.search, component: <SearchPage />, layout: null },
];

// Route Private -- dành cho User  cần đăng nhập tài khoản mới có thể xem
const privateRouter = [];

export { publicRouter, privateRouter };
