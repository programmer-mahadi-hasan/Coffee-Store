/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, coffeeName, coffeeChef, photoUrl } = coffee;
    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/coffee/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your coffee has been deleted.",
                                    icon: "success"
                                });
                                const remaining = coffees.filter(coffee => coffee._id !== _id)
                                setCoffees(remaining);
                            }
                        })
                }
            });
    }
    return (
        <div className="rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 flex items-center gap-4">
            <img src={photoUrl} alt="Coffee Cup" className="w-1/2 h-auto rounded-md shadow-md" />
            <div className="flex">
                <div>
                    <h2 className="text-xl font-bold text-primary">Name: {coffeeName}</h2>
                    <p className="text-muted-foreground">Chef: {coffeeChef}</p>
                    <p className="text-muted-foreground font-semibold">Price: 890 Taka</p>
                </div>
                <div className="ml-2 flex flex-col gap-y-4">
                    <button className="bg-accent text-accent-foreground hover:bg-accent/80 p-2 rounded-lg shadow transition duration-200">
                        👁
                    </button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="bg-primary text-primary-foreground hover:bg-primary/80 p-2 rounded-lg shadow transition duration-200">
                            ✏
                        </button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="bg-destructive text-destructive-foreground hover:bg-destructive/80 p-2 rounded-lg shadow transition duration-200">
                        🗑
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;

