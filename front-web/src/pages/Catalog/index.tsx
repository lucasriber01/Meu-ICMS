import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import './styles.scss';


const Catalog = () =>(
    <div className= "catalog-container">
        <h1 className="catalog-title" >Manuais </h1>
        <div className="catalog-products">
           <Link to= "/catalog/1" ><ProductCard text ="O que e o ICMS?"/></Link>
           <Link to= "/catalog/2"><ProductCard text ="Como calcular ICMS-ST"/></Link>
           <Link to= "/catalog/3"><ProductCard text ="Produtos insentos "/></Link>
           <Link to= "/catalog/4"><ProductCard text ="Taxa do ICMS por estado"/></Link>
           <Link to= "/catalog/5"><ProductCard text ="Blusa BA/ SP"/></Link>
           <Link to= "/catalog/6"><ProductCard text ="Blusa BA/ SP"/></Link>
           <Link to= "/catalog/7"><ProductCard text ="Blusa BA/ SP"/></Link>
           <Link to= "/catalog/8"><ProductCard text ="Blusa BA/ SP"/></Link>
           <Link to= "/catalog/9"><ProductCard text ="Blusa BA/ SP"/></Link>
        </div>
    </div>

);


export default Catalog ; 