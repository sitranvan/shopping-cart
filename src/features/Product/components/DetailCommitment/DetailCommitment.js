import { Fragment } from 'react';
import { Box, Typography } from '@mui/material';
import commitIconRefund from '~/assets/images/commit-icon-refund.png'
import commitIconLike from '~/assets/images/commit-icon-like.png'
import commitIconBarter from '~/assets/images/commit-icon-barter.png'
import commitBanner from '~/assets/images/commit-banner.jpg'
import detailCommitmentStyles from './detailCommitmentStyles'

const COMMIT_LIST = [
    {
        id: 1,
        title: 'Hoàn tiền 111% Nếu hàng giả',
        icon: commitIconRefund
    },
    {
        id: 2,
        title: 'Mở hộp kiểm tra nhận hàng',
        icon: commitIconLike
    },
    {
        id: 3,
        title: 'Đổi trả 7 ngày nếu SP lỗi',
        icon: commitIconBarter
    }
]

function DetailCommitment() {
    return (

        <Fragment>
            <Typography sx={{ ...detailCommitmentStyles.title }}>Cam kết</Typography>
            <Box sx={{ ...detailCommitmentStyles.wrap }}>
                {COMMIT_LIST.map(item => (
                    <Box key={item.id} sx={{ ...detailCommitmentStyles.wrapCommit }}>
                        <img width="32px" height="32px" src={item.icon} alt={item.title} />
                        <Typography sx={{ ...detailCommitmentStyles.descCommit }}>{item.title}</Typography>
                    </Box>
                ))}
            </Box>
            <Box mt={2}>
                <img style={{ borderRadius: '6px' }} width="100%" src={commitBanner} alt="commit-banner" />
            </Box>
        </Fragment>

    )
}

export default DetailCommitment