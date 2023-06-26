// components/Layout.tsx

import React, {ReactNode} from 'react';
import SessionOne from "./SessionOne";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({children}: LayoutProps) => {
    return (
        <div>
            <SessionOne/>
            {children}
        </div>
    );
};

export default Layout;

