import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "./results";
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
const ANIMALS = ["bird" , "cat" , "dog" , "rabbit" , "reptile"];


const SearchParams = () => {
    const [requestParams , setRequestParams] = useState({
        location : "",
        breed : "",
        animal : ""
    });
    const [animal, setAnimal] = useState("");
    
    const [Breeds] = useBreedList(animal);

const results = useQuery(["search" , requestParams], fetchSearch);
const pets = results?.data?.pets ?? [];

    return (
        <div className="search-params">
            <form
            onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target)
                const obj = {
                    animal: formData.get("animal") ?? "",
                    breed: formData.get("breed") ?? "",
                    location: formData.get("location") ?? "",
                };
               setRequestParams(obj);
            }}
            >
                <label htmlFor="location">
                    Location
                    <input name="location"
                     id="location"  placeholder="location"/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select onChange={e => {setAnimal(e.target.value) }
                   }
                    id = "animal"  value={animal}
                    >
                    <option />
                    {ANIMALS.map((animalVal )=> (
                        <option key={animalVal}>{animalVal}</option>
                    ))}
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed 
                    <select name="breed"
                    id = "breed" disabled={Breeds.length === 0} 
                    >
                        <option />
                        {Breeds.map((breed) => (
                            <option key={breed}>{breed}</option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets = {pets} />
     
        </div>
    )
}

export default SearchParams;