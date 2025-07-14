import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Text } from '@react-three/drei';
import { Physics, useBox, usePlane, useCylinder } from '@react-three/cannon';
import Burger from '../components/Burger';
import Fries from '../components/Fries';
import CardBoardBox from '../components/CardBoardBox';
import Juice from '../components/Juice';
import Lays from '../components/Lays';
import Packet from '../components/Packet';
import Pepsi from '../components/Pepsi';

const PhysicsBurger = ({ position, onSelect }) => {
  const [ref] = useBox(() => ({
    mass: 1.5,
    position,
    args: [1, 0.6, 1],
    linearDamping: 0.4,
    angularDamping: 0.6,
    onCollide: (e) => {
      if (e.body.userData?.type === 'box') {
        console.log('Burger landed in box');
      }
    },
    userData: { type: 'burger' }
  }));

  return (
    <group ref={ref} onClick={() => onSelect(ref.current)}>
      <Burger scale={0.8} />
    </group>
  );
};

const PhysicsJuice = ({ position, onSelect }) => {
  const [ref] = useCylinder(() => ({
    mass: 0.8,
    position,
    args: [0.3, 0.3, 1.2, 16],
    linearDamping: 0.5,
    angularDamping: 0.7,
    userData: { type: 'juice' }
  }));

  return (
    <group ref={ref} onClick={() => onSelect(ref.current)}>
      <Juice />
    </group>
  );
};
const PhysicsPepsi = ({ position, onSelect }) => {
  const [ref] = useCylinder(() => ({
    mass: 0.8,
    position,
    args: [0.3, 0.3, 1.2, 16],
    linearDamping: 0.5,
    angularDamping: 0.7,
    userData: { type: 'juice' }
  }));

  return (
    <group ref={ref} onClick={() => onSelect(ref.current)}>
      <Pepsi />
    </group>
  );
};

const PhysicsLays = ({ position, onSelect }) => {
    const [ref, api] = useBox(() => ({
      mass: 0.3,
      position,
      args: [0.8, 0.2, 1.5],
      linearDamping: 0.6,
      angularDamping: 0.8,
      material: { restitution: 0.2, friction: 0.3 },
      userData: { type: 'lays' }
    }));
  
    // Optional: Add slight random movement when spawned
    React.useEffect(() => {
      api.applyImpulse(
        [Math.random() * 0.1 - 0.05, 0, Math.random() * 0.1 - 0.05],
        [0, 0, 0]
      );
    }, []);
  
    return (
      <group ref={ref} onClick={() => onSelect(ref.current)}>
        <Lays scale={2} />
      </group>
    );
  };

const PhysicsPacket = ({ position, onSelect }) => {
  const [ref] = useBox(() => ({
    mass: 0.5,
    position,
    args: [0.5, 0.8, 0.5],
    linearDamping: 0.3,
    angularDamping: 0.5,
    userData: { type: 'fries' }
  }));

  return (
    <group ref={ref} onClick={() => onSelect(ref.current)}>
      <Packet scale={1}/>
    </group>
  );
};

// Physics Cardboard Box Container
const PhysicsCardboardBox = () => {
  const [ref] = useBox(() => ({
    type: 'Static',
    mass: 0,
    position: [0, -0.5, 0],
    args: [6, 1.5, 6],
    material: { restitution: 0.2 },
    userData: { type: 'box' }
  }));

  const [bottomRef] = usePlane(() => ({
    type: 'Static',
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -1.2, 0],
    material: { restitution: 0.2 }
  }));

  return (
    <group>
      {/* Visual representation */}
      <CardBoardBox position={[0, -0.5, 0]} scale={[6, 1.5, 6]} />
      
      {/* Invisible physics colliders */}
      <mesh ref={ref} visible={false} />
      <mesh ref={bottomRef} visible={false} />
    </group>
  );
};

const Order = () => {
  const [cartItems, setCartItems] = useState([]);
  const [menuItems] = useState([
    { id: 1, type: 'burger', name: 'Burger', price: 8.99 },
    { id: 2, type: 'juice', name: 'Juice', price: 2.49 },
    { id: 3, type: 'pepsi', name: 'Pepsi', price: 3.99 },
    { id: 4, type: 'lays', name: 'Lays', price: 1.99 },
    { id: 5, type: 'packet', name: 'Packet', price: 2.99 },
  ]);

  const addToCart = (item) => {
    const position = [
      (Math.random() * 2) - 1, // x between -2 and 2
      5, // Start above the box
      (Math.random() * 2) - 1  // z between -2 and 2
    ];
    
    setCartItems([...cartItems, {
      ...item,
      cartId: Math.random().toString(),
      position
    }]);
  };

  const removeFromCart = (cartId) => {
    setCartItems(cartItems.filter(item => item.cartId !== cartId));
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Menu Panel */}
      <div className="w-1/4 p-6 bg-white shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Menu</h2>
        <div className="space-y-4">
          {menuItems.map((item) => (
            <div 
              key={item.id}
              className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer"
              onClick={() => addToCart(item)}
            >
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-red-600">${item.price.toFixed(2)}</span>
                <button className="px-3 py-1 bg-red-600 text-white rounded-full text-sm hover:bg-red-700 transition-colors">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3D Scene with Physics */}
      <div className="flex-1 relative">
        <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          
          <Physics gravity={[0, -9.81, 0]} defaultContactMaterial={{ restitution: 0.2 }}>
            {/* Cardboard box container */}
            <PhysicsCardboardBox />
            
            {/* Food Items */}
            {cartItems.map((item) => {
              const props = {
                key: item.cartId,
                position: item.position,
                onSelect: () => removeFromCart(item.cartId)
              };
              
              switch(item.type) {
                case 'burger': return <PhysicsBurger {...props} />;
                case 'juice': return <PhysicsJuice {...props} />;
                case 'lays': return <PhysicsLays {...props} />;
                case 'packet': return <PhysicsPacket {...props} />;
                case 'pepsi': return <PhysicsPepsi {...props} />;
                default: return null;
              }
            })}
          </Physics>
          
          {/* Instruction Text */}
          <Text
            position={[0, 2, 0]}
            fontSize={0.5}
            color="black"
            anchorX="center"
            anchorY="middle"
          >
            Select the items to add them to the box
          </Text>
          
          <OrbitControls 
            enablePan={false}
            minDistance={5}
            maxDistance={15}
          />
        </Canvas>
        
        {/* Cart Summary */}
        <div className="absolute w-1/5 bottom-6 left-6 bg-white p-5 rounded-xl shadow-xl border border-gray-200">
          <h3 className="font-bold text-lg mb-3 text-gray-800">Your Order ({cartItems.length})</h3>
          {cartItems.length === 0 ? (
            <div className="text-center py-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-gray-500">Your box is empty</p>
              <p className="text-sm text-gray-400">Add items from the menu</p>
            </div>
          ) : (
            <>
              <ul className="divide-y divide-gray-200 max-h-60 overflow-y-auto">
                {cartItems.map(item => (
                  <li key={item.cartId} className="py-3 flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.cartId)}
                      className="p-1 text-red-500 hover:text-red-700 rounded-full hover:bg-red-50 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between font-bold text-lg mb-4">
                  <span>Total:</span>
                  <span>${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-bold transition-colors shadow-md">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;