const Loading = ({ loading }: { loading: boolean }): JSX.Element => (
    <div className={`flex justify-center items-center align-middle fixed h-screen w-screen z-50 dark:bg-gray-800 ${loading ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`} />
);

export default Loading;
