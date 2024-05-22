import { useEffect } from "react";
import "./product.css";
import { apiResponse, useFetchApi } from "../../hooks/useFetchApi";
import { setProduct } from "../../reducers/ProductSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { useNavigate } from "react-router-dom";
import { REACT_CONSTANTS } from "../../constants";

const ProductList = () => {
    const navigate = useNavigate();
    const products = useAppSelector((state) => state.products.products);
    const dispatch = useAppDispatch();

    const apiEndpoint = `${REACT_CONSTANTS.BASE_URL.MOCK_API}/products`;
    const apiResponse: apiResponse = useFetchApi(apiEndpoint);
    const { status, data, error, loading } = apiResponse;

    const checkForLeadingZero = (value: number) => {
        return value < 10 ? "0" + value.toString() : value.toString();
    };
    const formatDate = (date: Date) => {
        let dateObj = new Date(date);
        /* Date format you have */
        let dateMDY = `${dateObj.getDate()}-${checkForLeadingZero(
            dateObj.getMonth() + 1
        )}-${checkForLeadingZero(dateObj.getFullYear())}`;

        let time = `${checkForLeadingZero(
            dateObj.getHours()
        )}:${checkForLeadingZero(dateObj.getMinutes())}:${checkForLeadingZero(
            dateObj.getSeconds()
        )}`;
        /* Date converted to MM-DD-YYYY format */
        return `${dateMDY} ${time} ||| ${date}`;
    };

    useEffect(() => {
        if (data?.length > 0 && status === 200) dispatch(setProduct({ data }));
        // eslint-disable-next-line
    }, [data, status]);

    return (
        <>
            <h1>Product List</h1>
            {loading ? <p className="loading">Loading...</p> : ""}
            {error ? <p className="error">Something wend wrong</p> : ""}
            <div className="totalItem">
                <p>Total Products: {data?.length}</p>
            </div>
            <div className="formControl">
                <p>
                    <button
                        className="btnInput"
                        onClick={() => navigate("/products/addProduct")}
                    >
                        Add New Product
                    </button>
                </p>
            </div>
            {products?.length > 0 ? (
                <table>
                    <tr>
                        <th>ID</th>
                        <th align="left">Title</th>
                        <th align="left">Description</th>
                        <th>Stock</th>
                        <th>Discount</th>
                        <th align="left">Created At</th>
                        <th>Actions</th>
                    </tr>
                    {products?.map((product: any) => {
                        return (
                            <tr>
                                <td align="center">{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td align="center">{product.stock}</td>
                                <td align="center">{product.discount} %</td>
                                <td>{formatDate(product.createdAt)}</td>
                                <th>
                                    <button className="btnInput">Update</button>{" "}
                                    <button className="btnInput">Delete</button>
                                </th>
                            </tr>
                        );
                    })}
                </table>
            ) : (
                <p className="error">No Products Found</p>
            )}
        </>
    );
};
export default ProductList;
