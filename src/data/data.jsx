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
    {
        name: '200', title: 'New User', date: '6.8% from yesterday', user: '100K user from last month', btnImg: <svg width="20" height="20" viewBox="0 0 20 20" fill='none' xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_44_1528)">
                <path d="M14.1667 17.014V15.4723C14.1667 14.6546 13.8155 13.8703 13.1904 13.2921C12.5652 12.7138 11.7174 12.389 10.8333 12.389H4.16668C3.28262 12.389 2.43478 12.7138 1.80965 13.2921C1.18453 13.8703 0.833344 14.6546 0.833344 15.4723V17.014" stroke="currentColor" strokeWidth="2" strokewinecap="round" strokeLinejoin="round" />
                <path d="M7.49999 9.30564C9.34094 9.30564 10.8333 7.92519 10.8333 6.22231C10.8333 4.51943 9.34094 3.13898 7.49999 3.13898C5.65904 3.13898 4.16666 4.51943 4.16666 6.22231C4.16666 7.92519 5.65904 9.30564 7.49999 9.30564Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.1667 17.014V15.4723C19.1661 14.7892 18.9203 14.1255 18.4678 13.5856C18.0153 13.0456 17.3818 12.66 16.6667 12.4892" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.3333 3.2392C14.0504 3.40901 14.6859 3.79474 15.1397 4.33556C15.5935 4.87638 15.8399 5.54154 15.8399 6.22618C15.8399 6.91081 15.5935 7.57597 15.1397 8.11679C14.6859 8.65761 14.0504 9.04334 13.3333 9.21316" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_44_1528">
                    <rect width="20" fill='none' height="18.5" transform="translate(0 0.826477)" />
                </clipPath>
            </defs>
        </svg>
    },
    {
        name: '200', title: 'New User', date: '6.8% from yesterday', user: '100K user from last month', btnImg: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 2.5V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H17.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="5.759" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.83333 11.6667L9.16666 8.33332L12.5 11.6667L17.5 6.66666" stroke="currentColor" strokeWidth="2" strokeMiterlimit="5.759" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 6.66666H17.5V9.16666" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    },
    {
        name: '200', title: 'New User', date: '6.8% from yesterday', user: '100K user from last month', btnImg: <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 8.5L8.16667 10.1667L11.5 6.83333M5.52917 2.41416C6.12692 2.36646 6.6944 2.13142 7.15083 1.7425C7.66659 1.30272 8.3222 1.06116 9 1.06116C9.6778 1.06116 10.3334 1.30272 10.8492 1.7425C11.3056 2.13142 11.8731 2.36646 12.4708 2.41416C13.1465 2.46792 13.7808 2.76068 14.2601 3.23993C14.7393 3.71918 15.0321 4.35354 15.0858 5.02916C15.1335 5.62692 15.3686 6.1944 15.7575 6.65083C16.1973 7.16659 16.4388 7.8222 16.4388 8.5C16.4388 9.1778 16.1973 9.83341 15.7575 10.3492C15.3686 10.8056 15.1335 11.3731 15.0858 11.9708C15.0321 12.6465 14.7393 13.2808 14.2601 13.7601C13.7808 14.2393 13.1465 14.5321 12.4708 14.5858C11.8731 14.6335 11.3056 14.8686 10.8492 15.2575C10.3334 15.6973 9.6778 15.9388 9 15.9388C8.3222 15.9388 7.66659 15.6973 7.15083 15.2575C6.6944 14.8686 6.12692 14.6335 5.52917 14.5858C4.85354 14.5321 4.21918 14.2393 3.73994 13.7601C3.26069 13.2808 2.96792 12.6465 2.91417 11.9708C2.86646 11.3731 2.63142 10.8056 2.2425 10.3492C1.80272 9.83341 1.56116 9.1778 1.56116 8.5C1.56116 7.8222 1.80272 7.16659 2.2425 6.65083C2.63142 6.1944 2.86646 5.62692 2.91417 5.02916C2.96792 4.35354 3.26069 3.71918 3.73994 3.23993C4.21918 2.76068 4.85354 2.46792 5.52917 2.41416V2.41416Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    },
    {
        name: '200', title: 'New User', date: '6.8% from yesterday', user: '100K user from last month', btnImg: <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.37499 0.333336C2.6567 0.333336 1.96782 0.618677 1.45991 1.12659C0.951998 1.6345 0.666656 2.32337 0.666656 3.04167V10.125C0.666656 10.8433 0.951998 11.5322 1.45991 12.0401C1.96782 12.548 2.6567 12.8333 3.37499 12.8333H14.625C14.9807 12.8333 15.3328 12.7633 15.6614 12.6272C15.99 12.4911 16.2886 12.2916 16.5401 12.0401C16.7916 11.7886 16.9911 11.49 17.1272 11.1614C17.2633 10.8328 17.3333 10.4807 17.3333 10.125V3.04167C17.3333 2.68601 17.2633 2.33383 17.1272 2.00523C16.9911 1.67664 16.7916 1.37808 16.5401 1.12659C16.2886 0.875096 15.99 0.675602 15.6614 0.539496C15.3328 0.403389 14.9807 0.333336 14.625 0.333336H3.37499ZM1.91666 3.04167C1.91666 2.23667 2.56999 1.58334 3.37499 1.58334H5.66666V2.59C5.2828 2.42222 4.85728 2.37406 4.44564 2.45181C4.034 2.52955 3.65535 2.72959 3.35913 3.02581C3.06291 3.32203 2.86287 3.70068 2.78513 4.11232C2.70738 4.52396 2.75554 4.94948 2.92332 5.33334H1.91666V3.04167ZM6.91666 4.5C6.91666 4.33518 6.96553 4.17407 7.0571 4.03703C7.14867 3.89999 7.27881 3.79318 7.43109 3.7301C7.58336 3.66703 7.75091 3.65053 7.91256 3.68268C8.07422 3.71484 8.2227 3.7942 8.33925 3.91075C8.45579 4.02729 8.53516 4.17578 8.56731 4.33743C8.59946 4.49908 8.58296 4.66663 8.51989 4.81891C8.45682 4.97118 8.35001 5.10133 8.21297 5.19289C8.07592 5.28446 7.91481 5.33334 7.74999 5.33334H6.91666V4.5ZM5.66666 5.33334H4.83332C4.66851 5.33334 4.50739 5.28446 4.37035 5.19289C4.23331 5.10133 4.1265 4.97118 4.06342 4.81891C4.00035 4.66663 3.98385 4.49908 4.016 4.33743C4.04816 4.17578 4.12752 4.02729 4.24407 3.91075C4.36061 3.7942 4.5091 3.71484 4.67075 3.68268C4.8324 3.65053 4.99995 3.66703 5.15223 3.7301C5.3045 3.79318 5.43465 3.89999 5.52621 4.03703C5.61778 4.17407 5.66666 4.33518 5.66666 4.5V5.33334ZM5.66666 7.46667V11.5833H3.37499C2.98822 11.5833 2.61728 11.4297 2.34379 11.1562C2.0703 10.8827 1.91666 10.5118 1.91666 10.125V6.58334H4.78332L3.34999 8.01667C3.28858 8.07389 3.23933 8.14289 3.20517 8.21955C3.17101 8.29622 3.15264 8.37898 3.15116 8.4629C3.14968 8.54682 3.16512 8.63018 3.19655 8.708C3.22799 8.78582 3.27478 8.85652 3.33412 8.91587C3.39347 8.97522 3.46417 9.022 3.54199 9.05344C3.61982 9.08487 3.70317 9.10031 3.78709 9.09883C3.87101 9.09735 3.95377 9.07898 4.03044 9.04482C4.1071 9.01066 4.1761 8.96141 4.23332 8.9L5.66666 7.46667ZM6.91666 11.5833V7.46667L8.34999 8.9C8.40721 8.96141 8.47621 9.01066 8.55287 9.04482C8.62954 9.07898 8.7123 9.09735 8.79622 9.09883C8.88014 9.10031 8.9635 9.08487 9.04132 9.05344C9.11914 9.022 9.18984 8.97522 9.24919 8.91587C9.30854 8.85652 9.35532 8.78582 9.38676 8.708C9.41819 8.63018 9.43363 8.54682 9.43215 8.4629C9.43067 8.37898 9.4123 8.29622 9.37814 8.21955C9.34398 8.14289 9.29473 8.07389 9.23332 8.01667L7.79999 6.58334H16.0833V10.125C16.0833 10.3165 16.0456 10.5062 15.9723 10.6831C15.899 10.86 15.7916 11.0208 15.6562 11.1562C15.5208 11.2916 15.36 11.399 15.1831 11.4723C15.0061 11.5456 14.8165 11.5833 14.625 11.5833H6.91666ZM6.91666 2.59V1.58334H14.625C15.43 1.58334 16.0833 2.23667 16.0833 3.04167V5.33334H9.65999C9.82777 4.94948 9.87593 4.52396 9.79819 4.11232C9.72044 3.70068 9.5204 3.32203 9.22418 3.02581C8.92796 2.72959 8.54932 2.52955 8.13767 2.45181C7.72603 2.37406 7.30051 2.42222 6.91666 2.59Z" fill="currentColor" />
        </svg>
    },
    {
        name: '200', title: 'New User', date: '6.8% from yesterday', user: '100K user from last month', btnImg: <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_46_384)">
                <path d="M10.6583 18L2.5 9.84167V11.5083C2.5 11.95 2.675 12.375 2.99167 12.6833L9.48333 19.175C10.1333 19.825 11.1917 19.825 11.8417 19.175L17.0167 14C17.6667 13.35 17.6667 12.2917 17.0167 11.6417L10.6583 18Z" fill="currentColor" />
                <path d="M9.48333 15.0083C9.80833 15.3333 10.2333 15.5 10.6583 15.5C11.0833 15.5 11.5083 15.3333 11.8333 15.0083L17.0083 9.83333C17.6583 9.18333 17.6583 8.125 17.0083 7.475L10.5167 0.983333C10.2083 0.675 9.78333 0.5 9.34167 0.5H4.16667C3.25 0.5 2.5 1.25 2.5 2.16667V7.34167C2.5 7.78333 2.675 8.20833 2.99167 8.51667L9.48333 15.0083ZM4.16667 2.16667H9.34167L15.8333 8.65833L10.6583 13.8333L4.16667 7.34167V2.16667Z" fill="currentColor" />
                <path d="M6.04167 5.08333C6.61696 5.08333 7.08333 4.61696 7.08333 4.04167C7.08333 3.46637 6.61696 3 6.04167 3C5.46637 3 5 3.46637 5 4.04167C5 4.61696 5.46637 5.08333 6.04167 5.08333Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_46_384">
                    <rect width="20" height="20" fill="currentColor" transform="translate(0 0.5)" />
                </clipPath>
            </defs>
        </svg>
    },
]

export const badges = [
    { name: 'Badge Name', earn: 'Earned by: 5000 User', lastEarn: 'Last Earned: 22/11/2022', color: 'text-[#91B9B4]', btnColor: 'bg-[#0F2837]', bgColor: 'bg-[#D3E3E1]' },
    { name: 'Badge Name', earn: 'Earned by: 5000 User', lastEarn: 'Last Earned: 22/11/2022', color: 'text-[#FF9619]', btnColor: 'bg-[#FF9619]', bgColor: 'bg-[#FFD5A3]' },
    { name: 'Badge Name', earn: 'Earned by: 5000 User', lastEarn: 'Last Earned: 22/11/2022', color: 'text-[#6E1946]', btnColor: 'bg-[#0F2837]', bgColor: 'bg-[#C5A3B5]' }
]

export const navigations = [
    {
        name: 'Dashboard', icon: <svg width="50" className='-mx-3' height="52" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_44_2049)">
                <path d="M17.5 23.5L25 17.6667L32.5 23.5V32.6667C32.5 33.1087 32.3244 33.5326 32.0118 33.8452C31.6993 34.1577 31.2754 34.3333 30.8333 34.3333H19.1667C18.7246 34.3333 18.3007 34.1577 17.9882 33.8452C17.6756 33.5326 17.5 33.1087 17.5 32.6667V23.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.5 34.3333V26H27.5V34.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_d_44_2049" x="0.75" y="0.916656" width="48.5" height="50.1667" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
    {
        name: 'Users', icon: <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" clipPath="url(#clip0_44_1410)" filter="url(#filter0_d_44_1410)">
                <path d="M18.1666 17.5V15.8333C18.1666 14.9493 17.8155 14.1014 17.1903 13.4763C16.5652 12.8512 15.7174 12.5 14.8333 12.5H8.16665C7.28259 12.5 6.43474 12.8512 5.80962 13.4763C5.1845 14.1014 4.83331 14.9493 4.83331 15.8333V17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.5 9.16667C13.341 9.16667 14.8334 7.67428 14.8334 5.83333C14.8334 3.99238 13.341 2.5 11.5 2.5C9.65907 2.5 8.16669 3.99238 8.16669 5.83333C8.16669 7.67428 9.65907 9.16667 11.5 9.16667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23.1667 17.5V15.8333C23.1661 15.0948 22.9203 14.3773 22.4678 13.7936C22.0153 13.2099 21.3818 12.793 20.6667 12.6083" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.3333 2.60834C18.0503 2.79192 18.6858 3.20892 19.1397 3.7936C19.5935 4.37827 19.8398 5.09736 19.8398 5.8375C19.8398 6.57765 19.5935 7.29674 19.1397 7.88141C18.6858 8.46609 18.0503 8.88309 17.3333 9.06667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_d_44_1410" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_44_1410" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_44_1410" result="shape" />
                </filter>
                <clipPath id="clip0_44_1410">
                    <rect width="20" height="20" fill="white" transform="translate(4)" />
                </clipPath>
            </defs>
        </svg>
    },
    {
        name: 'Badges', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
                <path d="M8.76748 2.18666C8.92368 2.01507 9.11399 1.87798 9.32622 1.78418C9.53846 1.69037 9.76794 1.64192 9.99998 1.64192C10.232 1.64192 10.4615 1.69037 10.6737 1.78418C10.886 1.87798 11.0763 2.01507 11.2325 2.18666L12.0825 3.11999C12.2475 3.30117 12.4505 3.44373 12.6769 3.5375C12.9033 3.63127 13.1477 3.67395 13.3925 3.66249L14.6533 3.60416C14.885 3.59324 15.1164 3.63081 15.3328 3.71445C15.5491 3.79809 15.7456 3.92597 15.9097 4.08991C16.0738 4.25384 16.2019 4.45022 16.2857 4.66648C16.3696 4.88274 16.4073 5.11413 16.3966 5.34583L16.3375 6.60749C16.326 6.85231 16.3687 7.09663 16.4625 7.32306C16.5562 7.54949 16.6988 7.75246 16.88 7.91749L17.8133 8.76749C17.9849 8.92369 18.122 9.114 18.2158 9.32624C18.3096 9.53847 18.358 9.76795 18.358 9.99999C18.358 10.232 18.3096 10.4615 18.2158 10.6738C18.122 10.886 17.9849 11.0763 17.8133 11.2325L16.88 12.0825C16.6988 12.2475 16.5562 12.4505 16.4625 12.6769C16.3687 12.9034 16.326 13.1477 16.3375 13.3925L16.3958 14.6533C16.4067 14.885 16.3692 15.1164 16.2855 15.3328C16.2019 15.5491 16.074 15.7456 15.9101 15.9097C15.7461 16.0738 15.5498 16.2019 15.3335 16.2857C15.1172 16.3696 14.8858 16.4074 14.6541 16.3967L13.3925 16.3375C13.1477 16.326 12.9033 16.3687 12.6769 16.4625C12.4505 16.5563 12.2475 16.6988 12.0825 16.88L11.2325 17.8133C11.0763 17.9849 10.886 18.122 10.6737 18.2158C10.4615 18.3096 10.232 18.3581 9.99998 18.3581C9.76794 18.3581 9.53846 18.3096 9.32622 18.2158C9.11399 18.122 8.92368 17.9849 8.76748 17.8133L7.91748 16.88C7.75244 16.6988 7.54948 16.5563 7.32305 16.4625C7.09661 16.3687 6.85229 16.326 6.60748 16.3375L5.34665 16.3958C5.11495 16.4067 4.88354 16.3692 4.66719 16.2855C4.45085 16.2019 4.25435 16.074 4.09026 15.9101C3.92617 15.7461 3.7981 15.5498 3.71425 15.3335C3.6304 15.1172 3.59262 14.8859 3.60331 14.6542L3.66248 13.3925C3.67393 13.1477 3.63125 12.9034 3.53748 12.6769C3.44371 12.4505 3.30116 12.2475 3.11998 12.0825L2.18665 11.2325C2.01505 11.0763 1.87797 10.886 1.78416 10.6738C1.69036 10.4615 1.64191 10.232 1.64191 9.99999C1.64191 9.76795 1.69036 9.53847 1.78416 9.32624C1.87797 9.114 2.01505 8.92369 2.18665 8.76749L3.11998 7.91749C3.30116 7.75246 3.44371 7.54949 3.53748 7.32306C3.63125 7.09663 3.67393 6.85231 3.66248 6.60749L3.60415 5.34666C3.59323 5.11497 3.63079 4.88355 3.71444 4.66721C3.79808 4.45087 3.92596 4.25436 4.08989 4.09027C4.25382 3.92618 4.4502 3.79812 4.66647 3.71427C4.88273 3.63042 5.11411 3.59263 5.34581 3.60333L6.60748 3.66249C6.85229 3.67395 7.09661 3.63127 7.32305 3.5375C7.54948 3.44373 7.75244 3.30117 7.91748 3.11999L8.76748 2.18666V2.18666Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M7.5 9.99999L9.16667 11.6667L12.5 8.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    },
    {
        name: 'Rewards', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
                <path d="M4.37502 3.33333C3.65673 3.33333 2.96785 3.61867 2.45994 4.12658C1.95203 4.63449 1.66669 5.32337 1.66669 6.04166V13.125C1.66669 13.8433 1.95203 14.5322 2.45994 15.0401C2.96785 15.548 3.65673 15.8333 4.37502 15.8333H15.625C15.9807 15.8333 16.3329 15.7633 16.6615 15.6272C16.99 15.4911 17.2886 15.2916 17.5401 15.0401C17.7916 14.7886 17.9911 14.49 18.1272 14.1614C18.2633 13.8328 18.3334 13.4807 18.3334 13.125V6.04166C18.3334 5.686 18.2633 5.33382 18.1272 5.00523C17.9911 4.67664 17.7916 4.37807 17.5401 4.12658C17.2886 3.87509 16.99 3.67559 16.6615 3.53949C16.3329 3.40338 15.9807 3.33333 15.625 3.33333H4.37502ZM2.91669 6.04166C2.91669 5.23666 3.57002 4.58333 4.37502 4.58333H6.66669V5.58999C6.28283 5.42221 5.85731 5.37405 5.44567 5.4518C5.03403 5.52954 4.65538 5.72958 4.35916 6.0258C4.06294 6.32202 3.8629 6.70067 3.78516 7.11231C3.70741 7.52395 3.75557 7.94947 3.92335 8.33333H2.91669V6.04166ZM7.91669 7.49999C7.91669 7.33518 7.96556 7.17406 8.05713 7.03702C8.1487 6.89998 8.27885 6.79317 8.43112 6.7301C8.58339 6.66702 8.75094 6.65052 8.9126 6.68267C9.07425 6.71483 9.22273 6.7942 9.33928 6.91074C9.45582 7.02728 9.53519 7.17577 9.56734 7.33742C9.5995 7.49907 9.58299 7.66663 9.51992 7.8189C9.45685 7.97117 9.35004 8.10132 9.213 8.19289C9.07595 8.28445 8.91484 8.33333 8.75002 8.33333H7.91669V7.49999ZM6.66669 8.33333H5.83335C5.66854 8.33333 5.50742 8.28445 5.37038 8.19289C5.23334 8.10132 5.12653 7.97117 5.06345 7.8189C5.00038 7.66663 4.98388 7.49907 5.01603 7.33742C5.04819 7.17577 5.12755 7.02728 5.2441 6.91074C5.36064 6.7942 5.50913 6.71483 5.67078 6.68267C5.83243 6.65052 5.99998 6.66702 6.15226 6.7301C6.30453 6.79317 6.43468 6.89998 6.52624 7.03702C6.61781 7.17406 6.66669 7.33518 6.66669 7.49999V8.33333ZM6.66669 10.4667V14.5833H4.37502C3.98825 14.5833 3.61731 14.4297 3.34382 14.1562C3.07033 13.8827 2.91669 13.5118 2.91669 13.125V9.58333H5.78335L4.35002 11.0167C4.28861 11.0739 4.23936 11.1429 4.2052 11.2195C4.17104 11.2962 4.15267 11.379 4.15119 11.4629C4.14971 11.5468 4.16515 11.6302 4.19658 11.708C4.22802 11.7858 4.27481 11.8565 4.33415 11.9159C4.3935 11.9752 4.4642 12.022 4.54202 12.0534C4.61985 12.0849 4.7032 12.1003 4.78712 12.0988C4.87104 12.0973 4.9538 12.079 5.03047 12.0448C5.10713 12.0107 5.17614 11.9614 5.23335 11.9L6.66669 10.4667ZM7.91669 14.5833V10.4667L9.35002 11.9C9.40724 11.9614 9.47624 12.0107 9.55291 12.0448C9.62957 12.079 9.71233 12.0973 9.79625 12.0988C9.88017 12.1003 9.96353 12.0849 10.0414 12.0534C10.1192 12.022 10.1899 11.9752 10.2492 11.9159C10.3086 11.8565 10.3554 11.7858 10.3868 11.708C10.4182 11.6302 10.4337 11.5468 10.4322 11.4629C10.4307 11.379 10.4123 11.2962 10.3782 11.2195C10.344 11.1429 10.2948 11.0739 10.2334 11.0167L8.80002 9.58333H17.0834V13.125C17.0834 13.3165 17.0456 13.5061 16.9723 13.6831C16.8991 13.86 16.7916 14.0208 16.6562 14.1562C16.5208 14.2916 16.36 14.399 16.1831 14.4723C16.0062 14.5456 15.8165 14.5833 15.625 14.5833H7.91669ZM7.91669 5.58999V4.58333H15.625C16.43 4.58333 17.0834 5.23666 17.0834 6.04166V8.33333H10.66C10.8278 7.94947 10.876 7.52395 10.7982 7.11231C10.7205 6.70067 10.5204 6.32202 10.2242 6.0258C9.92799 5.72958 9.54935 5.52954 9.1377 5.4518C8.72606 5.37405 8.30054 5.42221 7.91669 5.58999Z" fill="currentColor" />
            </g>
        </svg>
    },
    {
        name: 'Activities', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
                <path d="M10.6583 17.5L2.5 9.34167V11.0083C2.5 11.45 2.675 11.875 2.99167 12.1833L9.48333 18.675C10.1333 19.325 11.1917 19.325 11.8417 18.675L17.0167 13.5C17.6667 12.85 17.6667 11.7917 17.0167 11.1417L10.6583 17.5Z" fill="currentColor" />
                <path d="M9.48333 14.5083C9.80833 14.8333 10.2333 15 10.6583 15C11.0833 15 11.5083 14.8333 11.8333 14.5083L17.0083 9.33333C17.6583 8.68333 17.6583 7.625 17.0083 6.975L10.5167 0.483333C10.2083 0.175 9.78333 0 9.34167 0H4.16667C3.25 0 2.5 0.75 2.5 1.66667V6.84167C2.5 7.28333 2.675 7.70833 2.99167 8.01667L9.48333 14.5083ZM4.16667 1.66667H9.34167L15.8333 8.15833L10.6583 13.3333L4.16667 6.84167V1.66667Z" fill="currentColor" />
                <path d="M6.04167 4.58333C6.61696 4.58333 7.08333 4.11696 7.08333 3.54167C7.08333 2.96637 6.61696 2.5 6.04167 2.5C5.46637 2.5 5 2.96637 5 3.54167C5 4.11696 5.46637 4.58333 6.04167 4.58333Z" fill="currentColor" />
            </g>
        </svg>
    },
    {
        name: 'Tickets', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
                <path d="M12.5 4.16667V5.83333V4.16667ZM12.5 9.16667V10.8333V9.16667ZM12.5 14.1667V15.8333V14.1667ZM4.16667 4.16667C3.72464 4.16667 3.30072 4.34226 2.98816 4.65482C2.67559 4.96738 2.5 5.39131 2.5 5.83333V8.33333C2.94203 8.33333 3.36595 8.50893 3.67851 8.82149C3.99107 9.13405 4.16667 9.55797 4.16667 10C4.16667 10.442 3.99107 10.866 3.67851 11.1785C3.36595 11.4911 2.94203 11.6667 2.5 11.6667V14.1667C2.5 14.6087 2.67559 15.0326 2.98816 15.3452C3.30072 15.6577 3.72464 15.8333 4.16667 15.8333H15.8333C16.2754 15.8333 16.6993 15.6577 17.0118 15.3452C17.3244 15.0326 17.5 14.6087 17.5 14.1667V11.6667C17.058 11.6667 16.634 11.4911 16.3215 11.1785C16.0089 10.866 15.8333 10.442 15.8333 10C15.8333 9.55797 16.0089 9.13405 16.3215 8.82149C16.634 8.50893 17.058 8.33333 17.5 8.33333V5.83333C17.5 5.39131 17.3244 4.96738 17.0118 4.65482C16.6993 4.34226 16.2754 4.16667 15.8333 4.16667H4.16667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    },
    {
        name: 'Systems', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
                <path d="M8.33333 2.5H2.5V8.33333H8.33333V2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.5 2.5H11.6667V8.33333H17.5V2.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.5 11.6667H11.6667V17.5H17.5V11.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.33333 11.6667H2.5V17.5H8.33333V11.6667Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>
    },
    {
        name: 'Settings', icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" clipPath="url(#clip0_44_1420)">
                <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.1666 12.5C16.0557 12.7513 16.0226 13.0302 16.0716 13.3005C16.1207 13.5708 16.2495 13.8203 16.4416 14.0167L16.4916 14.0667C16.6466 14.2215 16.7695 14.4053 16.8534 14.6076C16.9373 14.8099 16.9805 15.0268 16.9805 15.2458C16.9805 15.4649 16.9373 15.6817 16.8534 15.8841C16.7695 16.0864 16.6466 16.2702 16.4916 16.425C16.3369 16.58 16.153 16.7029 15.9507 16.7868C15.7484 16.8706 15.5315 16.9138 15.3125 16.9138C15.0935 16.9138 14.8766 16.8706 14.6742 16.7868C14.4719 16.7029 14.2881 16.58 14.1333 16.425L14.0833 16.375C13.8869 16.1829 13.6375 16.054 13.3671 16.005C13.0968 15.956 12.818 15.9891 12.5666 16.1C12.3202 16.2056 12.11 16.381 11.9619 16.6046C11.8138 16.8282 11.7344 17.0902 11.7333 17.3583V17.5C11.7333 17.942 11.5577 18.366 11.2452 18.6785C10.9326 18.9911 10.5087 19.1667 10.0666 19.1667C9.62462 19.1667 9.2007 18.9911 8.88814 18.6785C8.57558 18.366 8.39998 17.942 8.39998 17.5V17.425C8.39353 17.1492 8.30425 16.8817 8.14374 16.6573C7.98323 16.4328 7.75893 16.2619 7.49998 16.1667C7.24863 16.0557 6.96982 16.0227 6.69949 16.0717C6.42916 16.1207 6.17971 16.2496 5.98331 16.4417L5.93331 16.4917C5.77852 16.6466 5.59471 16.7696 5.39238 16.8534C5.19005 16.9373 4.97317 16.9805 4.75415 16.9805C4.53512 16.9805 4.31824 16.9373 4.11591 16.8534C3.91358 16.7696 3.72977 16.6466 3.57498 16.4917C3.42002 16.3369 3.29709 16.1531 3.21321 15.9507C3.12934 15.7484 3.08617 15.5315 3.08617 15.3125C3.08617 15.0935 3.12934 14.8766 3.21321 14.6743C3.29709 14.4719 3.42002 14.2881 3.57498 14.1333L3.62498 14.0833C3.81709 13.8869 3.94597 13.6375 3.99498 13.3672C4.044 13.0968 4.01091 12.818 3.89998 12.5667C3.79434 12.3202 3.61894 12.11 3.39537 11.9619C3.17179 11.8139 2.9098 11.7344 2.64165 11.7333H2.49998C2.05795 11.7333 1.63403 11.5577 1.32147 11.2452C1.00891 10.9326 0.833313 10.5087 0.833313 10.0667C0.833313 9.62464 1.00891 9.20072 1.32147 8.88816C1.63403 8.5756 2.05795 8.4 2.49998 8.4H2.57498C2.85081 8.39355 3.11832 8.30427 3.34273 8.14376C3.56714 7.98326 3.73808 7.75895 3.83331 7.5C3.94424 7.24866 3.97733 6.96984 3.92832 6.69951C3.8793 6.42918 3.75043 6.17974 3.55831 5.98334L3.50831 5.93334C3.35335 5.77855 3.23042 5.59473 3.14655 5.3924C3.06267 5.19007 3.0195 4.9732 3.0195 4.75417C3.0195 4.53514 3.06267 4.31827 3.14655 4.11594C3.23042 3.91361 3.35335 3.72979 3.50831 3.575C3.6631 3.42004 3.84692 3.29711 4.04925 3.21324C4.25158 3.12936 4.46845 3.08619 4.68748 3.08619C4.90651 3.08619 5.12338 3.12936 5.32571 3.21324C5.52804 3.29711 5.71186 3.42004 5.86665 3.575L5.91665 3.625C6.11305 3.81712 6.36249 3.94599 6.63282 3.99501C6.90315 4.04402 7.18197 4.01093 7.43331 3.9H7.49998C7.74645 3.79437 7.95666 3.61897 8.10472 3.39539C8.25279 3.17182 8.33224 2.90982 8.33331 2.64167V2.5C8.33331 2.05798 8.50891 1.63405 8.82147 1.32149C9.13403 1.00893 9.55795 0.833336 9.99998 0.833336C10.442 0.833336 10.8659 1.00893 11.1785 1.32149C11.4911 1.63405 11.6666 2.05798 11.6666 2.5V2.575C11.6677 2.84316 11.7472 3.10515 11.8952 3.32872C12.0433 3.5523 12.2535 3.7277 12.5 3.83334C12.7513 3.94427 13.0301 3.97736 13.3005 3.92834C13.5708 3.87932 13.8202 3.75045 14.0166 3.55834L14.0666 3.50834C14.2214 3.35338 14.4052 3.23044 14.6076 3.14657C14.8099 3.0627 15.0268 3.01952 15.2458 3.01952C15.4648 3.01952 15.6817 3.0627 15.884 3.14657C16.0864 3.23044 16.2702 3.35338 16.425 3.50834C16.5799 3.66312 16.7029 3.84694 16.7867 4.04927C16.8706 4.2516 16.9138 4.46848 16.9138 4.6875C16.9138 4.90653 16.8706 5.12341 16.7867 5.32574C16.7029 5.52807 16.5799 5.71188 16.425 5.86667L16.375 5.91667C16.1829 6.11307 16.054 6.36252 16.005 6.63285C15.956 6.90317 15.9891 7.18199 16.1 7.43334V7.5C16.2056 7.74648 16.381 7.95668 16.6046 8.10475C16.8282 8.25281 17.0902 8.33227 17.3583 8.33334H17.5C17.942 8.33334 18.3659 8.50893 18.6785 8.82149C18.9911 9.13405 19.1666 9.55798 19.1666 10C19.1666 10.442 18.9911 10.866 18.6785 11.1785C18.3659 11.4911 17.942 11.6667 17.5 11.6667H17.425C17.1568 11.6677 16.8948 11.7472 16.6713 11.8953C16.4477 12.0433 16.2723 12.2535 16.1666 12.5V12.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_44_1420">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    }
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
