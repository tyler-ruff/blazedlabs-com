
export const Rating = ({ rates = 0, stars = 1 }) => {
    return (
        <div>
            <div className="rating rating-lg">
                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-8" className="mask mask-star-2 bg-orange-400" />
            </div>
            <div className="indicator">
                <span className="indicator-item badge badge-secondary">{rates}</span> 
            </div>
        </div>
    );
}