import React, {FC} from 'react';
import {makePages} from "../../helpers/pages";
import classes from './pagination.module.scss'

interface IPaginationProps {
    currentPage: number
    total: number
    onClick: (page: number) => void
}

const Pagination: FC<IPaginationProps> = ({currentPage, total, onClick}) => {
    const pages = makePages(Math.ceil(total / 20))
    const from = currentPage - 3 >= 0 ? currentPage - 3 : 0
    const to = currentPage + 2 <= pages.length - 2 ? currentPage + 2 : pages.length - 1

    return (
        <div className={classes.container}>
            {pages.slice(from, to).map((page) => <span
                className={page === currentPage ? classes.item + ' ' + classes.current : classes.item}
                key={page}
                onClick={() => {
                    onClick(page)
                }}>{page}</span>
            )}
        </div>
    );
};

export default Pagination;