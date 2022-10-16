import { Box, Grid, Skeleton } from '@mui/material'
import PropTypes from 'prop-types'

function TitleSkeleton({ length = 6 }) {
    return (
        <Box>
            <Grid container>
                {Array.from(new Array(length)).map((x, index) => (
                    <Grid item key={index} xs={12}>
                        <Box mb={1}>
                            <Skeleton height='20px' width='60%' />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

TitleSkeleton.propTypes = {
    length: PropTypes.number
}

export default TitleSkeleton 