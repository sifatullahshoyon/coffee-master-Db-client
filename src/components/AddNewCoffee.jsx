import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddNewCoffee = () => {
  const handleAddNewCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  return (
    <section className="container mx-auto my-32">
      <p className="my-5 text-white">
        <Link to="/">Back to home</Link>
      </p>
      <div className="bg-gray-50 px-10 rounded">
        <h4 className="text-center text-2xl font-bold py-5 text-black">
          Add New Coffee
        </h4>
        <p className="tracking-wide text-center mb-5 text-black">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleAddNewCoffee} className="py-10">
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
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Add Coffee"
            className="btn btn-block text-white text-lg"
          />
        </form>
      </div>
    </section>
  );
};

export default AddNewCoffee;
