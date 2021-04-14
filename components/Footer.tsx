import HeartIcon from "./Images/HeartIcon";
import NextJSIcon from "./Images/NextJSIcon";
import TailwindIcon from "./Images/TailwindIcon";

const Footer = () => (
    <footer className='flex flex-wrap justify-center text-center w-full bg-gray-900 p-8'>
        <p className='flex w-full items-center justify-center text-white font-bold text-lg space-x-1'>
            Made with
            <HeartIcon className='text-red-500 h-6 w-6 ml-1' />
            <a href='https://tailwindcss.com' target='_blank'>
                <TailwindIcon className='text-tailwind h-6 w-6'/>
            </a>
            <a href='https://nextjs.org' target='_blank'>
                <NextJSIcon className='text-white h-6 w-6 mr-1' />
            </a>
        </p>
        <p className='text-white font-bold text-lg w-full'>Copyright &copy; 2021 Jack Merrill</p>
    </footer>
)

export default Footer;