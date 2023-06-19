import image from '/images/me.jpg'
import { AiOutlineArrowDown } from 'react-icons/ai'

export function About() {
    return (
        <div className='flex flex-wrap justify-center'>
            <div className="py-16 flex flex-wrap justify-center items-center gap-12 text-center max-w-screen-lg">
                <img src={image} alt="Alexei" className="rounded-full aspect-square w-3/4 object-cover object-center shadow-sm drop-shadow-2xl md:w-2/5"/>
                <div className='w-3/4'>
                    <h1 className='font-bold text-2xl md:text-3xl'>Who am I?</h1>
                    <p>Insert text here. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, libero nisi! Autem excepturi perspiciatis a fugit voluptate neque quas dicta, dolor sed? Ratione, laborum repellendus obcaecati corporis doloribus vel maiores!</p>
                </div>
                <AiOutlineArrowDown size={35} className="w-full animate-bounce text-accent-1"/>
            </div>
        </div>
    )
}