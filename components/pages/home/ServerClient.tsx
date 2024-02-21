import Image from "next/image"

interface ServerClientProps {
    src: string
}


const ServerClient: React.FC<ServerClientProps> = ({ src }) => {
    return (
        <div className='relative min-h-[29px] min-w-[130px]'>
            <Image className=' object-contain' fill src={src} alt='image ' />
        </div>
    )
}

export default ServerClient