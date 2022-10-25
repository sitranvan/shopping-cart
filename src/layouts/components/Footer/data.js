
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { MoMoIcon, VisaIcon, ZaloPayIcon, CashIcon, AtmIcon } from '~/components/Icons';
export const PAY_LIST = [
    {
        id: 1,
        icon: <MoMoIcon />
    },
    {
        id: 2,
        icon: <VisaIcon />
    },
    {
        id: 3,
        icon: <ZaloPayIcon />
    },
    {
        id: 4,
        icon: <CashIcon />
    },
    {
        id: 5,
        icon: <AtmIcon />
    },
]

export const LINK_LIST = [
    {
        id: 1,
        icon: <FacebookIcon sx={{ color: '#1877F2', fontSize: '3rem' }} />
    },
    {
        id: 2,
        icon: <InstagramIcon sx={{ color: '#E4405F', fontSize: '3rem' }} />
    },
    {
        id: 3,
        icon: <LinkedInIcon sx={{ color: '#0A66C2', fontSize: '3rem' }} />
    },
    {
        id: 4,
        icon: <TwitterIcon sx={{ color: '#1DA1F2', fontSize: '3rem' }} />
    },
    {
        id: 5,
        icon: <GitHubIcon sx={{ color: '#00000', fontSize: '3rem' }} />
    },
]
export const CONTACT_LIST = [
    {
        id: 1,
        title: 'Địa chỉ: 60 Đoàn Nguyễn Tuấn Xã Hưng Long Huyện Bình Chánh',
        icon: <LocationOnIcon />
    },
    {
        id: 2,
        title: 'School: STU Đại Học Công Nghệ Sài Gòn',
        icon: <SchoolIcon />
    },
    {
        id: 3,
        title: 'Email: it.sitranvan@gmail.com',
        icon: <EmailIcon />,
    },
    {
        id: 4,
        title: 'Phone: 0388060302',
        icon: <PermPhoneMsgIcon />
    }
]