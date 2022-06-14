import React,{useEffect , useState} from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link} from 'react-router-dom';

const HomePage = () => {
    const [pokemon,setPokemon] = useState([]);
    const api = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100"

    useEffect(()=>{
        axios.get(api).then((res)=>{
            setPokemon(res.data.results);
        }).catch((err)=>{
            console.log(err);
        })
    }, [api])

    return (
        <>
            <Navbar/>
            <section className='hero'>
                <div className='container'>
                    <div className='row'>
                        {pokemon.map((data,index)=>(
                            <div data-aos="fade-up" className='col-6 col-sm-3 col-md-6 col-lg-3 pokemon' key={index}>
                                <Link to={`/${data.name}`}>
                                    <div className='tile'>
                                        {data.name}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
        
    )
}

export default HomePage