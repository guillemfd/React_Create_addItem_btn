import './App.css';
import {useState} from 'react'

//Components
import Product from './Components/Product/Product.jsx'
import Form from './Components/Form/Form.jsx'



function App() {

  const [user, setUser] = useState({
    username: "guillemfd",
    name: "Guillem",
    lastname: "Ferrer",
    admin: true,
    products: [
      {
        name: `Televisión 42"`,
        description: "Televisión en perfecto estado, con 6 meses de garantía.",
        category: "TV, Audio y Foto",
        interests: "Móviles y Telefonía",
      },
      {
        name: "Bici carretera",
        description: "Bici con ruedas de 700mm, 2 años de uso, mantenimiento al día, buen estado general",
        category: "Deporte y Ocio",
        interests: "Móviles y Telefonía",
      },
      {
        name: "Chaqueta hombre",
        description: "Chaqueta marrón de entretiempo, talla L, con forro interior.",
        category: "Moda y accesorios",
        interests: "Móviles y Telefonía",
      },
      {
        name: "Cámara Canon 800D",
        description: "Cámara réflex con unos 4.000 disparos, adquirida en Agosot de 2019.",
        category: "TV, Audio y Foto",
        interests: "Móviles y Telefonía",
      },
    ],
  });

  const deleteProductAndUpdate = (productName)=>{
    const filteredProducts = user.products.filter((product) => {
      return productName !== product.name;
    })
    //como sólo queremos modificar una cosa del usuario, tenemos que hacer lo siguiente (si quisieramos modificar todo el usuario funcionaria sólo con la línea 52). Creamos una copia del array original de user y modificamos ese (el estado original no lo podemos modificar)
    const copyOfUser = {...user}
    copyOfUser.products = filteredProducts

    setUser(copyOfUser);
  }

  return (
    <div className="App">
      <h1>Adding items</h1>
      <Form userFromApp={user} setUserFromApp={setUser} />
      <div className="cards">
        {user.products.map((product, index)=>{
        return <Product key={index + Date.now()} productData={product} funcionBorrar={deleteProductAndUpdate} usuario={user.username} />
        })}
      </div>

    </div>
  );
}

export default App;
