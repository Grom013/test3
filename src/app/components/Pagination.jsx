import _ from 'lodash'
export const Pagination = ({itemsCount,pageSize,onPageChange,currentPage}) => {
    const pageCount = Math.ceil(itemsCount/pageSize)
    const pages =  _.range(1,pageCount+1)

    if(pageCount === 1 )return  null
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {pages.map((page)=>(
                        <li
                            key={page}
                            className={`page-item ${currentPage===page?'active': ''}`}
                            onClick={()=>onPageChange(page)}>
                                <a className="page-link" >
                                    {page}
                                </a>
                        </li>
                    ))}

                </ul>
            </nav>
        </div>
    );
};