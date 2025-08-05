import React from "react";
import { DashboardLayout } from "@layouts";
import { SearchScreen } from "@modules";

const SearchContainer: React.FC = () => {
    return (
        <DashboardLayout>
            <SearchScreen />
        </DashboardLayout>
    );
};

export default SearchContainer;
