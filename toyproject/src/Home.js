import React from "react";
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image" src="https://gwangjunewsgic.com/wp-content/uploads/2020/07/TJ8A7233_small-1024x713.jpg"/>
            
                <div className="home__row">
                    <Product 
                    title='Calculus(Introduction to Linear Algebra)' 
                    price={10000} 
                    image='https://images-na.ssl-images-amazon.com/images/I/31EDCEy0gNL._SY291_BO1,204,203,200_QL40_ML2_.jpg'
                    rating={5} />
                    <Product
                    title='Linear Algebra 4th Edition Friedberg Stephen'
                    price={15000}
                    image='https://images-na.ssl-images-amazon.com/images/I/51jOYAfztTL._SX334_BO1,204,203,200_.jpg'
                    rating={4} />
                    <Product 
                    title='Calculus Early Transcendentals Stewart 8th'
                    price={15000}
                    image='https://images-na.ssl-images-amazon.com/images/I/71h65gyJVhL.jpg'
                    rating={5}/>
                </div>
                <div className="home__row">
                    <Product 
                    title='Goodrich, Tamassia, Mount: Data Structures and Algorithms in C++, 2nd Edition, Wiley'
                    price={15000}
                    image='http://image.kyobobook.co.kr/images/book/xlarge/278/x9780470383278.jpg'
                    rating={5}/>
                    <Product 
                    title='Herbert Schildt, Java: A Beginner Guide'
                    price={15000}
                    image='https://images-na.ssl-images-amazon.com/images/I/41Grbye67nL._SX404_BO1,204,203,200_.jpg'
                    rating={5}/>
                    <Product 
                    title='Goodrich, Tamassia, Goldwasser: Data Structures and Algorithms in Java, 6th edition, Wiley; Goodrich,'
                    price={15000}
                    image='https://m.media-amazon.com/images/I/61s6zH2bbIL.jpg'
                    rating={5}/>
                </div>
                <div className="home__row">
                    {}
                    {}
                    {}
                </div>
            </div>
        </div>
    )
}

export default Home
