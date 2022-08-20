import usersImg from './../assets/users.svg'
import decrase from './../assets/decrase.svg'
import badge from './../assets/badge.svg'
import reward from './../assets/reward.svg'
import point from './../assets/point.svg'
import building from './../assets/building.svg'
import building2 from './../assets/building2.svg'
import building3 from './../assets/building3.svg'

export const users = [
    { name: 'Mohammed Abdullah', pt: '5,000pt', badge: '29 Badge', reward: '5 Rewards' },
    { name: 'Mohammed Abdullah', pt: '5,000pt', badge: '29 Badge', reward: '5 Rewards' },
    { name: 'Mohammed Abdullah', pt: '5,000pt', badge: '29 Badge', reward: '5 Rewards' },
    { name: 'Mohammed Abdullah', pt: '5,000pt', badge: '29 Badge', reward: '5 Rewards' },
    { name: 'Mohammed Abdullah', pt: '5,000pt', badge: '29 Badge', reward: '5 Rewards' },
    { name: 'Mohammed Abdullah', pt: '5,000pt', badge: '29 Badge', reward: '5 Rewards' },
]

export const cards = [
    { name: '200', title: 'New User', date: '6.8% from yesterday', user: '100K user from last month', btnImg: usersImg },
    { name: '200', title: 'New User', date: '6.8% from yesterday', user: '100K user from last month', btnImg: decrase },
    { name: '200', title: 'New User', date: '6.8% from yesterday', user: '100K user from last month', btnImg: badge },
    { name: '200', title: 'New User', date: '6.8% from yesterday', user: '100K user from last month', btnImg: reward },
    { name: '200', title: 'New User', date: '6.8% from yesterday', user: '100K user from last month', btnImg: point },
]

export const badges = [
    { name: 'Badge Name', earn: 'Earned by: 5000 User', lastEarn: 'Last Earned: 22/11/2022', color: 'text-[#91B9B4]', btnColor: 'bg-[#0F2837]', bgColor: 'bg-[#D3E3E1]' },
    { name: 'Badge Name', earn: 'Earned by: 5000 User', lastEarn: 'Last Earned: 22/11/2022', color: 'text-[#FF9619]', btnColor: 'bg-[#FF9619]', bgColor: 'bg-[#FFD5A3]' },
    { name: 'Badge Name', earn: 'Earned by: 5000 User', lastEarn: 'Last Earned: 22/11/2022', color: 'text-[#6E1946]', btnColor: 'bg-[#0F2837]', bgColor: 'bg-[#C5A3B5]' }
]

export const navigations = [
    {
        name: 'Dashboard', icon: <svg width="50" height="52" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_44_2049)">
                <path d="M17.5 23.5L25 17.6667L32.5 23.5V32.6667C32.5 33.1087 32.3244 33.5326 32.0118 33.8452C31.6993 34.1577 31.2754 34.3333 30.8333 34.3333H19.1667C18.7246 34.3333 18.3007 34.1577 17.9882 33.8452C17.6756 33.5326 17.5 33.1087 17.5 32.6667V23.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22.5 34.3333V26H27.5V34.3333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <filter id="filter0_d_44_2049" x="0.75" y="0.916656" width="48.5" height="50.1667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="8" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.921569 0 0 0 0 0.352941 0 0 0 0 0.235294 0 0 0 0.5 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_44_2049" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_44_2049" result="shape" />
                </filter>
            </defs>
        </svg>
    },
    { name: 'Users', icon: 'fas fa-users' },
    { name: 'Badges', icon: 'fas fa-house' },
    { name: 'Rewards', icon: 'fas fa-house' },
    { name: 'Activities', icon: 'fas fa-house' },
    { name: 'Tickets', icon: 'fas fa-house' },
    { name: 'Systems', icon: 'fas fa-house' },
    { name: 'Settings', icon: 'fas fa-house' }
]

export const TotalRegisteredUsers = [
    {
        name: 'Jan',
        count: 123,
    },
    {
        name: 'Feb',
        count: 50,
    },
    {
        name: 'Mar',
        count: 250,
    },
    {
        name: 'Apr',
        count: 175,
    },
    {
        name: 'May',
        count: 175,
    },
    {
        name: 'Jun',
        count: 275,
    },
    {
        name: 'Jul',
        count: 180,
    },
    {
        name: 'Aug',
        count: 100,
    },
    {
        name: 'Sep',
        count: 150,
    },
    {
        name: 'Oct',
        count: 250,
    },
    {
        name: 'Nov',
        count: 200,
    },
    {
        name: 'Dec',
        count: 120,
    },
];

export const UserStatisticsData = [
    {
        name: 'Total Users',
        count: 100000,
    },
    {
        name: 'Active Users',
        count: 75000,
    },
    {
        name: 'Inactive Users',
        count: 50000,
    },
    {
        name: 'Users with Badges',
        count: 20000,
    },
    {
        name: 'User with Rewards',
        count: 10000,
    },
    {
        name: 'Blacklistde Users',
        count: 500,
    },
]
export const cities = [
    { name: 'Riyadh', users: '250K Active Users', bgColor: 'bg-[#F5AD9E]', img: building },
    { name: 'Jeddah', users: '150K Active Users', bgColor: 'bg-[#B78CA2]', img: building2 },
    { name: 'Dammam', users: '50K Active Users', bgColor: 'bg-[#C8DCDA]', img: building3 },
]
