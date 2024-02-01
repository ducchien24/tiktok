import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

// Import file custom
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWraper } from '~/components/Popper';

// Import custom hook
import { useDebounce } from '~/hooks';
//import api
import * as searchService from '~/services';

const cx = classNames.bind(styles);

// Function component
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isShowResult, setIsShowResult] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const inRef = useRef();

    const debounceSearch = useDebounce(searchValue, 700);

    useEffect(() => {
        let ignore = false;
        if (!debounceSearch.trim()) {
            setSearchResult([]);
            return;
        }
        async function fetchAPI() {
            setIsLoading(true);
            const res = await searchService.search(debounceSearch);
            if (!ignore) {
                setSearchResult(res.data);
                setIsLoading(false);
            }
        }
        fetchAPI();
        return () => {
            ignore = true;
        };
    }, [debounceSearch]);

    // Handle events
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inRef.current.focus();
    };

    const handleHideResult = () => {
        setIsShowResult(false);
    };
    const handleSearch = (e) => {
        const valueSearch = e.target.value;
        // không cho nhập kí tự khoảng trẳng ở đầu
        if (!valueSearch.startsWith(' ')) setSearchValue(valueSearch);
    };
    return (
        // Using a wrapper <div> tag around the reference
        // element solves this by creating a new parentNode context
        <div>
            <HeadlessTippy
                // disabled
                // hideOnClick
                interactive
                visible={isShowResult && searchResult.length}
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex={-1}
                        {...attrs}
                    >
                        <PopperWraper>
                            <div className={cx('search-title')}>Accounts</div>
                            {searchResult.map((data) => (
                                <AccountItem key={data.id} data={data} />
                            ))}
                            {/* <AccountItem />
                            <AccountItem />
                            <AccountItem /> */}
                        </PopperWraper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inRef}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        value={searchValue}
                        onChange={handleSearch}
                        onFocus={() => setIsShowResult(true)}
                    />
                    {searchValue && !isLoading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                        </button>
                    )}
                    {isLoading && (
                        <button className={cx('loading')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    )}
                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => e.preventDefault()} // Behaviour for mouse down click
                    >
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
