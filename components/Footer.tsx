import HeartIcon from "./Images/HeartIcon";
import NextJSIcon from "./Images/NextJSIcon";
import TailwindIcon from "./Images/TailwindIcon";

const Footer = () => (
    <footer className='flex flex-wrap justify-center border-t-2 border-white text-center w-full bg-black p-8'>
        <p className='flex w-full items-center justify-center text-white font-bold text-lg space-x-1'>
            Made with
            <HeartIcon className='text-red-500 md:h-6 md:w-6 h-12 w-12 ml-1' />
            <a href='https://tailwindcss.com' target='_blank' id='twcssSite' aria-label='TailwindCSS Website' rel='noreferrer'>
                <TailwindIcon className='text-tailwind md:h-6 md:w-6 h-12 w-12'/>
            </a>
            <a href='https://nextjs.org' target='_blank' id='nextjsSite' aria-label='Next.js Website' rel='noreferrer'>
                <NextJSIcon className='text-white md:h-6 md:w-6 h-12 w-12 mr-1' />
            </a>
        </p>
        <p className='text-white font-bold text-lg w-full'>Copyright &copy; 2021 Jack Merrill</p>
    </footer>
)

export default Footer;