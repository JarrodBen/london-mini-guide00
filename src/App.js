import './App.css';
import React, { useState } from 'react';
import StratfordData from './data/Stratford.json';
import HeathrowData from './data/Heathrow.json';
import HarrowData from './data/Harrow.json';

function App() {
  const [data, setData] = useState([]);
  const [city, setCity] = useState('Stratford');
  const [activeTab, setActiveTab] = useState({
    pharmacies: false,
    colleges: false,
    hospitals: false,
    doctors: false,
  });

  const changeCategory = (e) => {
    e.preventDefault();
    let clickedTab = e.target.value;

    switch (clickedTab) {
      case 'pharmacies':
        setActiveTab({
          pharmacies: true,
          colleges: false,
          hospitals: false,
          doctors: false,
        });

        break;

      case 'colleges':
        setActiveTab({
          pharmacies: false,
          colleges: true,
          hospitals: false,
          doctors: false,
        });
        break;

      case 'hospitals':
        setActiveTab({
          pharmacies: false,
          colleges: false,
          hospitals: true,
          doctors: false,
        });
        break;

      case 'doctors':
        setActiveTab({
          pharmacies: false,
          colleges: false,
          hospitals: false,
          doctors: true,
        });
        break;

      default:
        break;
    }
  };

  return (
    <div className='App'>
      <div className='header-div'>
        <h1 className='header-text'>City Mini Guide</h1>
      </div>
      <hr />
      <div className='select-div'>
        <span>Choose a city:</span>
        <select
          className='city-selector'
          onChange={(e) => setCity(e.target.value)}
        >
          <option id='default-city' value='Default' defaultValue=''>
            Select a city
          </option>
          <option value='Harrow'>Harrow</option>
          <option value='Stratford'>Stratford</option>
          <option value='Heathrow'>Heathrow</option>
        </select>
      </div>
      <hr />
      <div className='category-div'>
        <button
          className={activeTab.pharmacies ? 'active-tab' : 'inactive-tab'}
          value='pharmacies'
          onClick={(e) => {
            changeCategory(e);
          }}
        >
          Pharmacies
        </button>
        <button
          className={activeTab.colleges ? 'active-tab' : 'inactive-tab'}
          value='colleges'
          onClick={(e) => {
            changeCategory(e);
          }}
        >
          Colleges
        </button>
        <button
          className={activeTab.hospitals ? 'active-tab' : 'inactive-tab'}
          value='hospitals'
          onClick={(e) => {
            changeCategory(e);
          }}
        >
          Hospitals
        </button>
        <button
          className={activeTab.doctors ? 'active-tab' : 'inactive-tab'}
          value='doctors'
          onClick={(e) => {
            changeCategory(e);
          }}
        >
          Doctors
        </button>
      </div>
      <hr />
      <Table activeTab={activeTab} city={city} />
    </div>
  );
}
const Table = ({ activeTab, city }) => {
  console.log(activeTab);
  console.log(city);
  let data = [];

  if (city === 'Stratford') {
    if (activeTab.pharmacies) {
      data = StratfordData.pharmacies;
    }
    if (activeTab.colleges) {
      data = StratfordData.colleges;
    }
    if (activeTab.hospitals) {
      data = StratfordData.hospitals;
    }
    if (activeTab.doctors) {
      data = StratfordData.doctors;
    }
  } else if (city === 'Harrow') {
    if (activeTab.pharmacies) {
      data = HarrowData.pharmacies;
    }
    if (activeTab.colleges) {
      data = HarrowData.colleges;
    }
    if (activeTab.hospitals) {
      data = HarrowData.hospitals;
    }
    if (activeTab.doctors) {
      data = HarrowData.doctors;
    }
  } else if (city === 'Heathrow') {
    if (activeTab.pharmacies) {
      data = HeathrowData.pharmacies;
    }
    if (activeTab.colleges) {
      data = HeathrowData.colleges;
    }
    if (activeTab.hospitals) {
      data = HeathrowData.hospitals;
    }
    if (activeTab.doctors) {
      data = HeathrowData.doctors;
    }
  }

  return (
    <div>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col' style={{ width: '10%' }}>
              #
            </th>
            <th scope='col' style={{ width: '25%' }}>
              Name
            </th>
            <th scope='col' style={{ width: '20%' }}>
              Phone
            </th>
            <th scope='col' style={{ width: '20%' }}>
              Address
            </th>
            <th scope='col' style={{ width: '25%' }}>
              website
            </th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((place, i) => {
              return (
                <tr key={i}>
                  <th scope='row'>{i + 1}</th>
                  <td>{place.name ? place.name : 'N/A'}</td>
                  <td>{place.phone ? place.phone : 'N/A'}</td>
                  <td>{place.address ? place.address : 'N/A'}</td>
                  <td>
                    {place.website ? (
                      <a href={place.website} target='_blank'>
                        {place.name}
                      </a>
                    ) : (
                      'N/A'
                    )}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan='5'>
                <h3 className='text-center'>
                  Please choose a city and category first!
                </h3>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default App;
