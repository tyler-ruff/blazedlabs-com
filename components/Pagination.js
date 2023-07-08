import { useRouter } from "next/router";

export const Pagination = ({ totalPages = 1 }) => {
    const router = useRouter();
    let { page = 1 } = router.query;

    const handleClick = (pageNumber) => {
        router.push(`blog/?page=${pageNumber}`);
    }
    const handleNextPage = () => {
        if(page < totalPages){
            page = Integer(page) + 1;
            router.push(`blog/?page=${page}`);
        }
    }
    const handlePrevPage = () => {
        if(page >= 2){
            page -= 1;
            router.push(`blog/?page=${page}`);
        }
    }
    return (
        <nav aria-label="Pagination" className="inline-flex -space-x-px rounded-md shadow-sm dark:bg-gray-800 dark:text-gray-100">
            <button 
                type="button" 
                className={page <= 1 ? "inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md bg-gray-200" : "inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md hover:bg-gray-50"}
                disabled={page <= 1}
                onClick={() => handlePrevPage()}>
                <span className="sr-only">Previous</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                    <button 
                        type="button"
                        className={page == String(pageNumber) ? "inline-flex items-center px-4 py-2 text-sm font-semibold border bg-gray-100" : "inline-flex items-center px-4 py-2 text-sm font-semibold border hover:bg-gray-50"}
                        key={pageNumber}
                        onClick={() => handleClick(pageNumber)}
                        disabled={page == String(pageNumber)}>
                        {pageNumber}
                    </button>
                )
            )}
            <button 
                type="button" 
                className={totalPages == page ? "inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md bg-gray-200" : "inline-flex items-center px-2 py-2 text-sm font-semibold border hover:bg-gray-50 rounded-r-md"}
                disabled={totalPages == page}
                onClick={() => handleNextPage()}>
                <span className="sr-only">Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
            </button>
        </nav>
    );
}
