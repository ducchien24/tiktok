import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRouter } from './routers';
import DefaultLayout from '~/layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouter.map((router, index) => {
                        const Layout = router.layout
                            ? router.layout
                            : router.layout === null
                            ? Fragment
                            : DefaultLayout;
                        return (
                            <Route
                                key={index}
                                path={router.path}
                                element={<Layout>{router.component}</Layout>}
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
