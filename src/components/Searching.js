import React from 'react';
import Search from "antd/es/input/Search";

const Searching = ({onSearch, ...resProps}) => {
    return (
        <>
            <Search
                placeholder="searching"
                allowClear
                autoFocus
                enterButton
                size={'large'}
                style={{width: 300}}
                {...resProps}
                onSearch={onSearch}
            />
        </>
    );
};

export default Searching;