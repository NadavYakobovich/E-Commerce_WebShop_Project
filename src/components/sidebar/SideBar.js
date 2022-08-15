import React from 'react';
import {Card, Container, Form, Row} from "react-bootstrap";
import "./SideBar.css"
import $ from 'jquery'


function SideBar({doSearch}) {
    //the search by text the user types in the search bar
    const searchValue = React.useRef(null);
    const search = function () {
        const barandValue = $('#Category').find(":selected").val()
        console.log(barandValue)
        const QueryParmeters= { searchValue: searchValue.current.value, category: $('#Category').find(":selected").val(), brand:  $('#Brand').find(":selected").val() };
        console.log(QueryParmeters);
        doSearch(QueryParmeters);
    }
    return (
        //todo: add the search by category and brand by automatically , and no hard coding
        <div >
            <h2 className="fw-bold  ">
                Filter by:
            </h2>
            <Card className="sideBar fs-5 p-3 ms-4">
                <Form>
                <Form.Group className="mb-3 "  onChange={search}  defaultValue={null}>
                    <Form.Label htmlFor="Category">Category</Form.Label>
                    <Form.Select id="Category" >
                        <option  value="">All</option>
                        <option value="Desktop Computer">Desktop Computer</option>
                        <option value="Laptop">Laptop</option>
                        <option  value="External Speakers">External Speakers</option>
                        <option value="Mic" >Mic</option>
                    </Form.Select>
                </Form.Group>
                    <Form.Group  onChange={search}  className="mb-3"  defaultValue={null}>
                        <Form.Label htmlFor="Brand">Brand</Form.Label>
                        <Form.Select id="Brand" >
                            <option  value="">All</option>
                            <option value="Apple">Apple</option>
                            <option value="hp">Hp</option>
                            <option value="Dell">Dell</option>
                            <option value="LG">LG</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Search By Name</Form.Label>
                        <Form.Control type="text" ref={searchValue} onKeyUp={search} placeholder="type here" />
                    </Form.Group>
                </Form>
            </Card>
        </div>
    );
}

export default SideBar;