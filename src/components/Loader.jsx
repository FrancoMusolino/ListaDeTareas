import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Loader() {
    return (
        <Stack style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", height: "100vh" }} spacing={1}>
            <Skeleton variant="text" width={300} animation="wave" />
            <Skeleton variant="rectangular" width={300} height={118} animation="wave" />
            <div>
                <Skeleton variant="text" width={180} animation="wave" />
                <Skeleton variant="text" width={180} animation="wave" />
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
                <Skeleton variant="text" height={50} width={100} animation="wave" />
                <Skeleton variant="text" height={50} width={100} animation="wave" />
            </div>
        </Stack>
    );
}