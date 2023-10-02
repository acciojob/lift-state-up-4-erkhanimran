import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemList, setItemList] = useState([
        {key: 0, itemName: 'item1', itemPrice: 2},
        {key: 1, itemName: 'item2', itemPrice: 3},
        {key: 2, itemName: 'item3', itemPrice: 4},
    ]);
    const [key, setKey] = useState(itemList.length);
    const handleClick = () => {
        setItemList([...itemList, {key: key, itemName: itemName, itemPrice: itemPrice}]);
        setKey(key+1);
        setItemName('');
        setItemPrice('');
    }

    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <label>Item Name: </label>
            <input type="text" value={itemName} id="itemName" onChange={(e) => setItemName(e.target.value)} />
            <label>Item Price: </label>
            <input type="number" id="itemPrice" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
            <button onClick={handleClick} >Add Item</button>
            <Child itemList={itemList} setItemList={setItemList}/>
        </div>
    )
}

export default Parent;