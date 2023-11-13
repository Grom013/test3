
export const Search = ({setSearchText}) => {

    return (
        <div>
            <input onChange={(e) => setSearchText(e.target.value)}/>
        </div>
    );
};