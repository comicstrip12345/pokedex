import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar from './Navbar';

const Pokemon = () => {
    const {name} = useParams();
    const [details,setDetails] = useState(null);

    const url = `https://pokeapi.co/api/v2/pokemon/${name}`

    let content = null
    
    useEffect(()=>{
      axios.get(url).then((res)=>{
        console.log(res.data);
        setDetails(res.data);
      }).catch((err)=>{
        console.log(err);
      })
    },[url])
    
    if(details){
      content =
        <section className='pokemon'>
          <div className='container'>
            <div className='row'>
              <div data-aos="fade-right" className='col-12 col-sm-6 col-md-12 col-lg-6 image'>
                <img src={details.sprites.other.home.front_default} alt={details.name}/>
              </div>
              <div data-aos="fade-left" className='col-12 col-sm-6 col-md-12 col-lg-4 details'>
                <div className='row'>
                  <div className='col-5 d-flex align-items-center title'>
                    <h1>Name:</h1>
                  </div>
                  <div className='col-7 list'>
                    <p>{details.name}</p>
                  </div>
                  <div className='col-5 d-flex align-items-center title'>
                    <h1>Type:</h1>
                  </div>
                  <div className='col-7 list'>
                    <div className='row'>
                      {details.types.map((data,index)=>(
                      <div className='col-12' key={index}>
                        <p>{data.type.name}</p>
                      </div>
                      ))}
                    </div>
                  </div>
                  <div className='col-5 d-flex align-items-center title'>
                    <h1>Abilities:</h1>
                  </div>
                  <div className='col-7 list'>
                    <div className='row'>
                      {details.abilities.map((data,index)=>(
                        <div className='col-12' key={index}>
                          <p>{data.ability.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className='col-5 d-flex align-items-center title'>
                    <h1>Stats:</h1>
                  </div>
                  <div className='col-7 list'>
                    <div className='row'>
                      {details.stats.map((data,index)=>(
                        <div className='col-12' key={index}>
                          <p>{data.stat.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    }
    return (
        <>
          <Navbar/>
          {content}
        </>
    )
}

export default Pokemon