import { AiOutlineAreaChart } from 'react-icons/ai';
import { IoIosPricetag } from 'react-icons/io';
import { MdLocationPin } from 'react-icons/md';
import { RiShoppingBag3Fill } from 'react-icons/ri';

export default function Card({ item }) {
  return (
    <>
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.estate_title}</h2>
          <div className="flex  justify-between">
            <div className="flex flex-wrap justify-between">
              <span className="flex items-center">
                <AiOutlineAreaChart /> Area: {item.area}
              </span>
              <span className="flex items-center">
                <MdLocationPin /> Location: {item.location}
              </span>
            </div>
            <div className="flex flex-wrap justify-between">
              <span className="flex items-center">
                <IoIosPricetag /> Price: {item.price}
              </span>
              <span className="flex items-center">
                <RiShoppingBag3Fill /> Status: {item.status}
              </span>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </>
  );
}
