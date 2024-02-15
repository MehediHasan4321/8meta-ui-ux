import { TfiVideoClapper } from "react-icons/tfi";
import { MdOutlineVpnLock } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { RiFacebookCircleFill,RiTwitterFill,RiGithubFill } from "react-icons/ri";


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

export const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
};

export const swiperSettings = {
    slidesPerView:1,
    spaceBetween:50,
    breakpoints:{
        480:{
          slidesPerView:1
        },
        600:{
          slidesPerView:1.5
        },
        750:{
          slidesPerView:2
        },
        1100:{
          slidesPerView:2.5
        }
      }
}


export const footerSecures = {
    "PRODUCT":[
        {
            id:'pro001',
            name:'Network',
            url:'/'
        },
        {
            id:'pro002',
            name:'Locations',
            url:'/locations'
        },
        {
            id:'pro003',
            name:'DDoS Protection',
            url:'ddosProtection'
        },
        {
            id:'pro004',
            name:'Client Exprience',
            url:'/'
        },
        {
            id:'pro005',
            name:'Clent Reviews',
            url:'/Reviews'
        },
        {
            id:'pro006',
            name:'Pricing',
            url:'/pricing'
        }
    ],
    "USE CASES":[
        {
            id:'case001',
            name:'Video Streaming',
            url:'/'
        },
        {
            id:'case002',
            name:'Gaming Companies',
            url:'/'
        },
        {
            id:'case003',
            name:'VPN Providers',
            url:'/'
        },
        {
            id:'case004',
            name:'Content Delivery',
            url:'/'
        },
        {
            id:'case005',
            name:'Use Case Overview',
            url:'/'
        }
    ],
    "RESOURCES":[
        {
            id:'reso001',
            name:'Looking Glass',
            url:'/'
        },
        {
            id:'reso002',
            name:'Server Hardware',
            url:'/'
        },
        {
            id:'reso003',
            name:'Compare Providers',
            url:'/'
        },
        {
            id:'reso004',
            name:'FAQ',
            url:'/faq'
        },
        {
            id:'reso005',
            name:'API',
            url:'/api'
        }
    ],
    "COMPANY":[
        {
            id:'comp001',
            name:'Contact',
            url:'/contact'
        },
        {
            id:'comp002',
            name:'About DataPacket',
            url:'/'
        },
        {
            id:'comp003',
            name:'Blog',
            url:'/ '
        }
    ],
    "GET IN TOUCH":{
        mail:'sales@8meta.com',
        contactNum:['+44 11 2222 3333','+1 222 333 4444'],
        socialMedia:[
            {
                title:'Facebook',
                icon:RiFacebookCircleFill
            },
            {
                title:'Twitter',
                icon:RiTwitterFill
            },
            {
                title:'Github',
                icon:RiGithubFill
            }
        ]
    }

}