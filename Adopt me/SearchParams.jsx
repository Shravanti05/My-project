import { useState , useEffect} from "react";
import Results from "./results";
import useBreedList from "./useBreedList";
const ANIMALS = ["bird" , "cat" , "dog" , "rabbit" , "reptile"];


const SearchParams = () => {
    const [location , setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [Breeds] = useBreedList(animal);

    useEffect(() => {
        requestPets();
    },[]);

    async function requestPets() {
        const res = await fetch(
          `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
    
        setPets(json.pets);

    
      }

    return (
        <div className="search-params">
            <form
            onSubmit={(e) => {
                e.preventDefault();
                requestPets();
            }}
            >
                <label htmlFor="location">
                    Location
                    <input onChange={(e) => setLocation(e.target.value)}
                     id="location" value={location} placeholder="location"/>
                </label>
                <label htmlFor="animal">
                    Animal
                    <select onChange={e => {setAnimal(e.target.value) , setBreed("")}
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
                    <select onChange={e => {setBreed(e.target.value)}}
                    id = "breed" disabled={Breeds.length === 0} value={Breeds}
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