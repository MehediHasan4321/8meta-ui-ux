import { TfiVideoClapper } from "react-icons/tfi";
import { MdOutlineVpnLock, MdSecurity } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiFacebookCircleFill, RiTwitterFill, RiGithubFill,RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdNetworkCheck } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { GrStorage } from "react-icons/gr";
import { HiOutlineSupport } from "react-icons/hi";




export const Clients = [
    {
        src: '/images/client/client-1.png'
    },
    {
        src: '/images/client/client-2.png'
    },
    {
        src: '/images/client/client-3.png'
    },
    {
        src: '/images/client/client-4.png'
    },
    {
        src: '/images/client/client-1.png'
    },
    {
        src: '/images/client/client-2.png'
    },

]


export const useCases = [
    {
        name: 'Video Streaming Platforms',
        desc: 'Serve video content to thousands of concurrent viewers.',
        icon: TfiVideoClapper
    },
    {
        name: 'VPN providers',
        desc: 'Enable secure, private, and borderless browsing with rapid connection.',
        icon: MdOutlineVpnLock
    },
    {
        name: 'Gaming Companies',
        desc: 'Deliver great online gaming experiences to player bases of all sizes.',
        icon: IoGameController
    },
    {
        name: 'Content Delivery',
        desc: 'Distribute your content effortlessly without performance or traffic restrictions.',
        icon: AiOutlineGlobal
    }
]

export const testimonials = [
    {
        id: 'test001',
        name: 'Jason Doe',
        avater: '/images/testimonial-avater.png',
        employeePosition: 'Director Ringover Inc.',
        review: '8meta infrastructure has been able to absorb traffic peaks that very few people heard of. Their customer service is excellent and proves that there are no boundaries in today’s world. I really recommend 8meta to anybody looking for a high performance, innovative solution for high traffic hosting.',
        logo: Clients[0].src
    },
    {
        id: 'test002',
        name: 'Jason Doe',
        avater: '',
        employeePosition: 'Director Ringover Inc.',
        review: '8meta infrastructure has been able to absorb traffic peaks that very few people heard of. Their customer service is excellent and proves that there are no boundaries in today’s world. I really recommend 8meta to anybody looking for a high performance, innovative solution for high traffic hosting.',
        logo: Clients[1].src
    },
    {
        id: 'test003',
        name: 'Jason Doe',
        avater: '',
        employeePosition: 'Director Ringover Inc.',
        review: '8meta infrastructure has been able to absorb traffic peaks that very few people heard of. Their customer service is excellent and proves that there are no boundaries in today’s world. I really recommend 8meta to anybody looking for a high performance, innovative solution for high traffic hosting.',
        logo: Clients[2].src
    },
    {
        id: 'test004',
        name: 'Jason Doe',
        avater: '',
        employeePosition: 'Director Ringover Inc.',
        review: '8meta infrastructure has been able to absorb traffic peaks that very few people heard of. Their customer service is excellent and proves that there are no boundaries in today’s world. I really recommend 8meta to anybody looking for a high performance, innovative solution for high traffic hosting.',
        logo: Clients[3].src
    }
]

export const swiperSettings = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
        480: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 1.5
        },
        750: {
            slidesPerView: 2
        },
        1100: {
            slidesPerView: 2.5
        }
    }
}

export const useCaseSwiperSettings = {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {

        640: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 4
        },

    },

}

export const useCaseHardwareSwiperSetting = {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {

        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 1.5
        },
        1100: {
            slidesPerView: 2
        },
        1250: {
            slidesPerView: 2
        },
        1400: {
            slidesPerView: 2.5
        }

    },
}


export const footerSecures = {
    "PRODUCT": [
        {
            id: 'pro001',
            name: 'Network',
            url: '/'
        },
        {
            id: 'pro002',
            name: 'Locations',
            url: '/locations'
        },
        {
            id: 'pro003',
            name: 'DDoS Protection',
            url: 'ddosProtection'
        },
        {
            id: 'pro004',
            name: 'Client Exprience',
            url: '/'
        },
        {
            id: 'pro005',
            name: 'Clent Reviews',
            url: '/Reviews'
        },
        {
            id: 'pro006',
            name: 'Pricing',
            url: '/pricing'
        }
    ],
    "USE CASES": [
        {
            id: 'case001',
            name: 'Video Streaming',
            url: '/'
        },
        {
            id: 'case002',
            name: 'Gaming Companies',
            url: '/'
        },
        {
            id: 'case003',
            name: 'VPN Providers',
            url: '/'
        },
        {
            id: 'case004',
            name: 'Content Delivery',
            url: '/'
        },
        {
            id: 'case005',
            name: 'Use Case Overview',
            url: '/'
        }
    ],
    "RESOURCES": [
        {
            id: 'reso001',
            name: 'Looking Glass',
            url: '/'
        },
        {
            id: 'reso002',
            name: 'Server Hardware',
            url: '/'
        },
        {
            id: 'reso003',
            name: 'Compare Providers',
            url: '/'
        },
        {
            id: 'reso004',
            name: 'FAQ',
            url: '/faq'
        },
        {
            id: 'reso005',
            name: 'API',
            url: '/api'
        }
    ],
    "COMPANY": [
        {
            id: 'comp001',
            name: 'Contact',
            url: '/contact'
        },
        {
            id: 'comp002',
            name: 'About DataPacket',
            url: '/'
        },
        {
            id: 'comp003',
            name: 'Blog',
            url: '/ '
        }
    ],
    "GET IN TOUCH": {
        mail: 'sales@8meta.com',
        contactNum: ['+44 11 2222 3333', '+1 222 333 4444'],
        socialMedia: [
            {
                title: 'Facebook',
                icon: RiFacebookCircleFill
            },
            {
                title: 'Twitter',
                icon: RiTwitterFill
            },
            {
                title: 'Github',
                icon: RiGithubFill
            }
        ]
    }

}

export const menus = [
    {
        name: 'Whay 8Meta',
        subMenu: [
            {
                name: 'Premume Network',
                icon: MdNetworkCheck,
                url: '/'
            },
            {
                name: 'Exceptional client service',
                icon: IoDiamondOutline,
                url: '/'
            },
            {
                name: 'Built-in DDoS protection',
                icon: MdOutlineSecurity,
                url: ''
            },
            {
                name: 'Latest hardware',
                icon: GrStorage,
                url: '/'
            }
        ]
    },
    {
        name: 'Location',
        subMenu: [
            {
                name: 'Premume Network',
                icon: MdNetworkCheck,
                url: '/'
            },
            {
                name: 'Exceptional client service',
                icon: IoDiamondOutline,
                url: '/'
            },
            {
                name: 'Built-in DDoS protection',
                icon: MdOutlineSecurity,
                url: ''
            },
            {
                name: 'Latest hardware',
                icon: GrStorage,
                url: '/'
            }
        ]
    },
    {
        name: 'Use Cases',
        subMenu: [
            {
                name: 'Premume Network',
                icon: MdNetworkCheck,
                url: '/useCase'
            },
            {
                name: 'Exceptional client service',
                icon: IoDiamondOutline,
                url: '/'
            },
            {
                name: 'Built-in DDoS protection',
                icon: MdOutlineSecurity,
                url: ''
            },
            {
                name: 'Latest hardware',
                icon: GrStorage,
                url: '/'
            }
        ]
    },
    {
        name: 'Pricing',
        subMenu: [],
        url: '/pricing'
    }, {
        name: 'Company',
        url:'/company',
        subMenu:[]
        // subMenu: [
        //     {
        //         name: 'Premume Network',
        //         icon: MdNetworkCheck,
        //         url: '/'
        //     },
        //     {
        //         name: 'Exceptional client service',
        //         icon: IoDiamondOutline,
        //         url: '/'
        //     },
        //     {
        //         name: 'Built-in DDoS protection',
        //         icon: MdOutlineSecurity,
        //         url: '/'
        //     },
        //     {
        //         name: 'Latest hardware',
        //         icon: GrStorage,
        //         url: '/'
        //     }
        // ]
    }
]

export const useCaseFeatures = [
    {
        id: '1',
        title: '4 Locations',
        subTitle: 'on 3 continents'
    },
    {
        id: '2',
        title: '150+ Tbps',
        subTitle: 'network capacity'
    },
    {
        id: '3',
        title: 'Unmetered',
        subTitle: 'bandwidth'
    },
    {
        id: '4',
        title: '24/7 tech support',
        subTitle: '& dedicated account manager'
    },


]

export const hardwares = [
    {
        id: 'hard001',
        hardwareName: '1 x Interl E-2336',
        hardwareSerice: 'Intel Xeon E-2336',
        hardwareLine: 'Rocket Lake',
        hardwareCache: '12 MB Intel Smart Cache',
        hardwareGhz: '2.9 GHz (4.8 GHz turbo)',
        hardwareConfig: {
            cores: '6 Cores',
            threads: '12 Threads',
            ghz: '2.9 Ghz'
        },
        hardwareImg: '/images/hardwares/intelSilver.png',
        hardwareRams: [
            {
                name: 'Ram',
                config: '256 GB Ram'
            },
            {
                name: 'Storage',
                config: '2 * 512 GB SSD'
            },
            {
                name: 'Uplink',
                config: '1 - 40 Gbps'
            }
        ],
        tag: 'POPULAR',
        status: 'In Stock',
        price: 174,
        duration: 1,

    },
    {
        id: 'hard002',
        hardwareName: '1 × AMD EPYC 7443P',
        hardwareSerice: 'Raizen AMD EPYC-7443P',
        hardwareLine: 'AMD',
        hardwareCache: '',
        hardwareGhz: '2.85 Ghz',
        hardwareConfig: {
            cores: '24 Cores',
            threads: '48 Threads',
            ghz: '2.85 Ghz'
        },
        hardwareImg: '/images/hardwares/amdepyc.png',
        hardwareRams: [
            {
                name: 'Ram',
                config: '256 GB Ram'
            },
            {
                name: 'Storage',
                config: '2 * 4 TB NVMe'
            },
            {
                name: 'Uplink',
                config: '20 or 40 Gbps'
            }
        ],
        tag: 'POPULAR',
        status: 'In Stock',
        price: 180,
        duration: 1
    },
    {
        id: 'hard003',
        hardwareName: '2 x Intel Silver 4316',
        hardwareSerice: 'Intel Sliver-4316',
        hardwareLine: 'Rocket Lake',
        hardwareCache: '26',
        hardwareGhz: '2.3 Ghz',
        hardwareConfig: {
            cores: '40 Cores',
            threads: '80 Threads',
            ghz: '2.3 Ghz'
        },
        hardwareImg: '/images/hardwares/intelSilver.png',
        hardwareRams: [
            {
                name: 'Ram',
                config: '256 GB Ram'
            },
            {
                name: 'Storage',
                config: '2 * 512 GB SSD'
            },
            {
                name: 'Uplink',
                config: '1 - 40 Gbps'
            }
        ],
        tag: 'POPULAR',
        status: 'On Request',
        price: 174,
        duration: 1
    },

]


export const FAQs = [
    {
        name: 'Pricing',
        icon:RiMoneyDollarCircleLine ,
        questions: [
            {
                question: `Can i use the full capacity of my server's uplink?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            },
            {
                question: `What’s the difference between a bandwidth plan and uplink capacity?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            },
            {
                question: `How do you charge for bandwidth?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            }, {
                question: `How do I upgrade/downgrade my bandwidth plan?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            }, {
                question: `What if I use more bandwidth than I paid for?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            }, {
                question: `Can I get billed based on the 95th percentile rather than peak bandwidth usage?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            },

        ]
    },
    {
        name: 'Security',
        icon: MdOutlineSecurity,
        questions: [
            {
                question: `Can i use the full capacity of my server's uplink?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            },
            {
                question: `What’s the difference between a bandwidth plan and uplink capacity?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            },
            {
                question: `How do you charge for bandwidth?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            }, {
                question: `How do I upgrade/downgrade my bandwidth plan?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            }, {
                question: `What if I use more bandwidth than I paid for?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            }, {
                question: `Can I get billed based on the 95th percentile rather than peak bandwidth usage?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            },

        ]
    },
    {
        name: 'Support',
        icon: HiOutlineSupport,
        questions: [
            {
                question: `Can i use the full capacity of my server's uplink?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            },
            {
                question: `What’s the difference between a bandwidth plan and uplink capacity?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            },
            {
                question: `How do you charge for bandwidth?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            }, {
                question: `How do I upgrade/downgrade my bandwidth plan?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            }, {
                question: `What if I use more bandwidth than I paid for?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            }, {
                question: `Can I get billed based on the 95th percentile rather than peak bandwidth usage?`,
                answer: `Absolutely. Each 8meta server is deployed with unshared uplink dedicated exclusively to you. Uplink capacity varies depending of your desired CPU and bandwidth choice or custom NIC on demand. We currently offer 1×10, 2×10, 1×25, 2×25, 1×40, 2×40, 1×100 or 2×100 GE unshared uplinks.`
            },

        ]
    }
]