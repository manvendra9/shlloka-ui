import React from 'react'
import { Link } from 'react-router-dom'
import ItemGalleryImage from '../items/ItemGalleryImage'
import Divider from './Divider'

export default function Gallery() {
    return (
        <section>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <h2>Gallery</h2>
                <Divider />
            </div>
            <div className="container-gallery container">
                <ItemGalleryImage />
                <ItemGalleryImage />
                <ItemGalleryImage />
                <ItemGalleryImage />
                <ItemGalleryImage />
                <ItemGalleryImage />
                <ItemGalleryImage />
                <ItemGalleryImage />
            </div>

            <button>View all </button>

        </section>
    )
}
