import React from "react";
import CollectionPreview from "../components/CollectionPreview";
import SHOP_DATA from "../components/shopData";



class Shop extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherDataProps}) => (
                        <CollectionPreview key={id} {...otherDataProps}/>
                    ))
                }
            </div>
        );
    }
}

export default Shop;