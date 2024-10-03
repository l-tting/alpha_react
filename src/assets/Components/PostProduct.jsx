import { useState } from "react";
import axios from "axios";

const Product = () => {
    const url = "http://127.0.0.1:5000/products";
    const token  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKb2huIiwiZXhwIjoxNzI3OTgxMjY0fQ.hnrU-Hbld1hn8LfH8qDEfAUiDPFB09KYFpDsZW0SRSw';
    const [products, addProducts] = useState({
        name: "",
        buying_price: "",
        selling_price: "",
        stock_quantity: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        addProducts({
            ...products,
            [name]: value,
        });
    }
    const postProds = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url,products,{
                headers:{
                    Authorization : token
                }
            }) 
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };
    return (
        <>
            <div>
                <h4 className="text-white"><u>Add Product</u></h4>
                <form onSubmit={postProds}>
                    <div>
                        <input type="text"
                            name="name"
                            value={products.name}
                            onChange={handleChange}
                            placeholder=" Enter Product Name"
                            className="border border-black mt-2"
                           
                            
                        />
                    </div>
                    <div>
                        <input type="number"
                            name="buying_price"
                            placeholder=" Enter Buying Price"
                            className="border border-black mt-2"
                            onChange={handleChange}
                            value={products.buying_price}
                        />
                    </div>
                    <div>
                        <input type="number"
                            name="selling_price"
                            placeholder="Enter Selling Price"
                            className="border border-black mt-2"
                            onChange={handleChange}
                            value={products.selling_price}

                        />
                    </div>
                    <div>
                        <input type="number"
                            name="stock_quantity"
                            placeholder="Enter Stock Quantity"
                            className="border border-black mt-2"
                            onChange={handleChange}
                            value={products.stock_quantity}
                        />
                    </div>
                    <div>
                        <button className="border text-white mt-2">Post Product</button>
                    </div>
                </form>
            </div>

        </>
    )
}
export default Product;