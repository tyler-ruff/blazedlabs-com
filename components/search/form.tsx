"use client"
import React, { useState } from 'react';

import { Button, TextInput } from 'flowbite-react';
import { ISearchForm } from './data';

export default function SearchForm(props: ISearchForm){
    const [formData, setFormData] = useState({
        query: props.searchTerm || ''
    });
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Handle the form submission logic here, e.g., submit data to an API
        //console.log('Form data submitted:', formData);
        window.location.href=`/blog/search/${formData.query}`;
    };

    return (
        <form method="get" onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
            <div className="py-3 pb-0 px-11">
                <div className="mb-2 block">
                    <TextInput
                        id="search-term"
                        name="query"
                        placeholder="Search blog..."
                        className="inline-flex mr-2"
                        required
                        type="text"
                        onChange={handleChange}
                        value={formData.query}
                    />
                    <Button type="submit" className="inline-flex">
                        Search
                    </Button>
                </div>
            </div>
        </form>
    );
}