import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const updateCoffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    updateCoffee;
  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updateCoffee);

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Update successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
    <div className="container mx-auto my-32">
      <p className="my-5 text-white">
        <Link to="/">Back to home</Link>
      </p>
      <div className="bg-gray-50 px-10 rounded">
        <form onSubmit={handleUpdateCoffee} className="py-10">
          {/* form name & quantity row*/}
          <div className="flex gap-4 mb-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-black">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter coffee name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-black">
                  Available Quantity
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Supplier & Taste row*/}
          <div className="flex gap-4 mb-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-black">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Enter coffee Supplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-black">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Enter coffee Taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Category & Details row*/}
          <div className="flex gap-4 mb-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-black">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Enter coffee Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-black">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Enter coffee details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form photo row*/}
          <div className="form-control  mb-4">
            <label className="label">
              <span className="label-text text-black">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Update Coffee"
            className="btn btn-block text-white text-lg"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
