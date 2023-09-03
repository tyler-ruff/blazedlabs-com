export default function Loading(){
    return (
        <div className="flex items-center justify-center space-x-2 py-20">
            <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-blue-600"></div>
        </div>
    );
}