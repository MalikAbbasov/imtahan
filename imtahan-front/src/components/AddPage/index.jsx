import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./add.scss"

function AddPage() {
    const [product, setProduct] = useState([])
    const [sorted, setSorted] = useState(null)
    const [filter, setFilter] = useState("")

    async function getAllProducts() {
        const data = await fetch("http://localhost:3400/")
        const res = await data.json()
        setProduct(res)
    }

    useEffect(() => {
        getAllProducts()
    }, [])


    async function addProduct(item) {
        await fetch("http://localhost:3400/", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item)
        })
        await getAllProducts()
    }

    async function delProduct(id) {
        await fetch(`http://localhost:3400/${id}`, { method: 'DELETE' })
        await getAllProducts()
    }


    return (
        <div>
            <div className="formik">
                <Formik
                    initialValues={{ image: '', name: '', price: 0 }}
                    validationSchema={Yup.object({
                        image: Yup.string()
                            .required('Required'),
                        name: Yup.string()
                            .required('Required'),
                        price: Yup.string()
                            .required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setTimeout(() => {
                            setSubmitting(false);
                            addProduct(values)
                            resetForm()
                        }, 400);
                    }}
                >
                    <Form>
                        <label htmlFor="image"><p>Image Url</p></label>
                        <Field name="image" type="text" />
                        <h4><ErrorMessage name="image" /></h4>

                        <label htmlFor="name"><p>Name</p></label>
                        <Field name="name" type="text" />
                        <h4><ErrorMessage name="name" /></h4>

                        <label htmlFor="price"><p>Price</p></label>
                        <Field name="price" type="number" />
                        <h4><ErrorMessage name="price" /></h4>

                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>

            <div className="functions">
                <input type="text" placeholder='Search By Name' onChange={(e) => setFilter(e.target.value)} />
                <button onClick={() => setSorted({ property: "name", asc: true })}>A-z</button>
                <button onClick={() => setSorted({ property: "name", asc: false })}>Z-a</button>
                <button onClick={() => setSorted({ property: "price", asc: false })}>Price(low to high)</button>
                <button onClick={() => setSorted({ property: "price", asc: true })}>Price(high to low)</button>
                <button onClick={() => setSorted(null)}>Default</button>
            </div>
            <table id="customers">
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                    <th>Button</th>
                </tr>
                {
                    product
                        .filter((x) => x.name.includes(filter))
                        .sort((a, b) => {
                            if (sorted && sorted.asc) {
                                return (a[sorted.property] > b[sorted.property]) ? 1 : ((b[sorted.property] > a[sorted.property]) ? -1 : 0)
                            }
                            else if (sorted && sorted.asc === false) {
                                return (a[sorted.property] < b[sorted.property]) ? 1 : ((b[sorted.property] < a[sorted.property]) ? -1 : 0)
                            }
                            else {
                                return 0
                            }
                        })
                        .map(x => (
                            <tr key={x._id}>
                                <td><img src={x.image} alt="" /></td>
                                <td>{x.name}</td>
                                <td>${x.price}</td>
                                <td><button onClick={() => delProduct(x._id)}>Delete</button></td>
                            </tr>
                        ))

                }
            </table>
        </div>
    )
}

export default AddPage