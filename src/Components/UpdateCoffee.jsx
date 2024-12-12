import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const coffeeName = form.coffeeName.value;
        const coffeeChef = form.coffeeChef.value;
        const coffeeSupplier = form.coffeeSupplier.value;
        const coffeeTaste = form.coffeeTaste.value;
        const coffeeCategory = form.coffeeCategory.value;
        const coffeeDetails = form.coffeeDetails.value;
        const photoUrl = form.photoUrl.value;
        const updateCoffee = { coffeeName, coffeeChef, coffeeSupplier, coffeeTaste, coffeeCategory, coffeeDetails, photoUrl }
        console.log(updateCoffee)
        fetch(`http://localhost:5000/coffee/${coffee._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'close'
                    })
                }
            })
    }
    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="container mx-auto p-6 bg-card rounded-lg shadow-lg">
                <Link to={"/"} className="text-muted-foreground flex items-center mb-4">
                    ← Back to home
                </Link>
                <h1 className="text-2xl font-bold text-foreground mb-4">Update Coffee:{coffee.coffeeName} </h1>
                <p className="text-muted-foreground mb-6">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-muted-foreground mb-1" htmlFor="coffeeName">Name</label>
                            <input type="text" id="coffeeName" name="coffeeName" defaultValue={coffee.coffeeName} placeholder="Enter coffee name" className="border border-border rounded-lg p-2 w-full" />
                        </div>
                        <div>
                            <label className="block text-muted-foreground mb-1" htmlFor="coffeeChef">Chef</label>
                            <input type="text" id="coffeeChef" name="coffeeChef" defaultValue={coffee.coffeeChef} placeholder="Enter coffee chef" className="border border-border rounded-lg p-2 w-full" />
                        </div>
                        <div>
                            <label className="block text-muted-foreground mb-1" htmlFor="coffeeSupplier">Supplier</label>
                            <input type="text" id="coffeeSupplier" name="coffeeSupplier" defaultValue={coffee.coffeeSupplier} placeholder="Enter coffee supplier" className="border border-border rounded-lg p-2 w-full" />
                        </div>
                        <div>
                            <label className="block text-muted-foreground mb-1" htmlFor="coffeeTaste">Taste</label>
                            <input type="text" id="coffeeTaste" name="coffeeTaste" defaultValue={coffee.coffeeTaste} placeholder="Enter coffee taste" className="border border-border rounded-lg p-2 w-full" />
                        </div>
                        <div>
                            <label className="block text-muted-foreground mb-1" htmlFor="coffeeCategory">Category</label>
                            <input type="text" id="coffeeCategory" name="coffeeCategory" defaultValue={coffee.coffeeCategory} placeholder="Enter coffee category" className="border border-border rounded-lg p-2 w-full" />
                        </div>
                        <div>
                            <label className="block text-muted-foreground mb-1" htmlFor="coffeeDetails">Details</label>
                            <input type="text" id="coffeeDetails" name="coffeeDetails" defaultValue={coffee.coffeeDetails} placeholder="Enter coffee details" className="border border-border rounded-lg p-2 w-full" />
                        </div>
                        <div className="col-span-2">
                            <label className="block text-muted-foreground mb-1" htmlFor="photoUrl">Photo</label>
                            <input type="text" id="photoUrl" name="photoUrl" defaultValue={coffee.photoUrl} placeholder="Enter photo URL" className="border border-border rounded-lg p-2 w-full" />
                        </div>
                    </div>


                    <button type="submit" className="bg-amber-700 text-white hover:bg-amber-800 rounded-lg p-2 w-full">
                        Update Coffee
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;