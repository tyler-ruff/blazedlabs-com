
export const Logo = () => {
    return (
        <div>
            <div className="dark:hidden">
              <img priority="true" className="pt-6 pl-4 md:p-0 hover:opacity-75" title="Blazed Labs" src="https://blazed.sirv.com/logo/Beaker-Dark.png?w=45&h=45"/>
            </div>
            <div className="hidden dark:block">
              <img priority="true" className="pt-6 pl-4 md:p-0 hover:opacity-75" title="Blazed Labs" src="https://blazed.sirv.com/logo/Beaker-White.png?w=45&h=45"/>
            </div>
        </div>
    );
}