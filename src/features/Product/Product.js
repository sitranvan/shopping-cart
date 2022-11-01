import { Box } from "@mui/material";
import ListPage from "./pages/ListPage";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";

function Product() {
    return (
        <Box pt={1}>
            <Routes>
                <Route path="/" element={<ListPage />} />
                <Route path=":productId/*" element={<DetailPage />} />
            </Routes>
        </Box>
    );
}

export default Product;