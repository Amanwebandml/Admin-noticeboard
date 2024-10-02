export function Button({label, onClick}) {
    return (
        <button type="button" onClick={onClick} className="bg-pink-500 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 dark:border-pink-700">
            {label}
        </button>
    );
}