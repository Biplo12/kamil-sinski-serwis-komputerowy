import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InterestsOutlinedIcon from '@mui/icons-material/InterestsOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';

const navItems = [
  {
    label: 'Dashboard',
    icon: <HomeOutlinedIcon />,
    to: '/admin/dashboard',
  },

  {
    label: 'Manage Orders',
    icon: <ReceiptOutlinedIcon />,
    to: '/admin/dashboard/orders',
  },
  {
    label: 'Create New Order',
    icon: <FeedOutlinedIcon />,
    to: '/admin/dashboard/create-order',
  },
  {
    label: 'Manage Users',
    icon: <PeopleOutlinedIcon />,
    to: '/admin/dashboard/users',
  },
  {
    label: 'Website Analytics',
    icon: <AssessmentOutlinedIcon />,
    to: '/admin/dashboard/website-analytics',
  },
  {
    label: 'Social Media',
    icon: <InterestsOutlinedIcon />,
    to: '/admin/dashboard/social-media',
  },
];

export default navItems;
