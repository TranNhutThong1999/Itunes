import React from 'react';
import {Card} from "antd";
import Meta from "antd/es/card/Meta";

const Item = ({value = {}}) => {
    const {collectionName, artistName, artworkUrl100 = '', previewUrl = ''} = value
    function setSizeImageUrl(){
        return artworkUrl100.replace('100x100', '500x500')
    }
    return (
        <Card
            hoverable
            style={{width: 300}}
            cover={<img alt="avatar" width={300} height={300} src={setSizeImageUrl()}/>}
        >
            <Meta title={collectionName} description={artistName}/>

        </Card>
    );
};

export default Item;