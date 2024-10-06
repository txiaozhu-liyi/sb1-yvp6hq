import React from 'react'
import EquipmentRentalTimeline from './components/EquipmentRentalTimeline'

const timelineItems = [
  {
    date: '2023-05-01',
    name: 'John Doe',
    location: 'New York',
    project: 'City Survey',
    projectDate: '2023-05-01',
    equipment: [
      { type: 'Core', items: ['Total Station', 'GPS Receiver'] },
      { type: 'Auxiliary', items: ['Tripod', 'Range Pole'] },
      { type: 'Accessories', items: ['Batteries', 'Data Collector'] },
    ],
  },
  {
    date: '2023-04-15',
    name: 'Jane Smith',
    location: 'Los Angeles',
    project: 'Coastal Mapping',
    projectDate: '2023-04-15',
    equipment: [
      { type: 'Core', items: ['Drone', 'LiDAR Scanner'] },
      { type: 'Auxiliary', items: ['Ground Control Points', 'RTK Base Station'] },
      { type: 'Accessories', items: ['SD Cards', 'Spare Propellers'] },
    ],
  },
  {
    date: '2023-03-30',
    name: 'Bob Johnson',
    location: 'Chicago',
    project: 'Urban Planning',
    projectDate: '2023-03-30',
    equipment: [
      { type: 'Core', items: ['3D Laser Scanner', 'Theodolite'] },
      { type: 'Auxiliary', items: ['Prism Set', 'Leveling Rod'] },
      { type: 'Accessories', items: ['Tablet', 'Measuring Tape'] },
    ],
  },
  {
    date: '2023-02-14',
    name: 'Alice Brown',
    location: 'Miami',
    project: 'Beachfront Development',
    projectDate: '2023-02-14',
    equipment: [
      { type: 'Core', items: ['Robotic Total Station', 'GNSS Receiver'] },
      { type: 'Auxiliary', items: ['360° Prism', 'Radio Antenna'] },
      { type: 'Accessories', items: ['Field Software', 'Chargers'] },
    ],
  },
  {
    date: '2023-01-05',
    name: 'Charlie Davis',
    location: 'Seattle',
    project: 'Forest Inventory',
    projectDate: '2023-01-05',
    equipment: [
      { type: 'Core', items: ['Terrestrial LiDAR', 'Handheld GPS'] },
      { type: 'Auxiliary', items: ['Rangefinder', 'Clinometer'] },
      { type: 'Accessories', items: ['Rugged Laptop', 'Solar Charger'] },
    ],
  },
  {
    date: '2022-12-20',
    name: 'Eva Wilson',
    location: 'Denver',
    project: 'Mountain Road Survey',
    projectDate: '2022-12-20',
    equipment: [
      { type: 'Core', items: ['Mobile Mapping System', 'Inertial Measurement Unit'] },
      { type: 'Auxiliary', items: ['Vehicle Mount', 'High-Precision Odometer'] },
      { type: 'Accessories', items: ['Power Inverter', 'External Hard Drives'] },
    ],
  },
  {
    date: '2022-11-10',
    name: 'Frank Miller',
    location: 'Houston',
    project: 'Oil Field Mapping',
    projectDate: '2022-11-10',
    equipment: [
      { type: 'Core', items: ['Airborne LiDAR', 'Multispectral Camera'] },
      { type: 'Auxiliary', items: ['Aircraft Mount', 'Navigation System'] },
      { type: 'Accessories', items: ['Flight Planning Software', 'Data Storage Array'] },
    ],
  },
  {
    date: '2022-10-05',
    name: 'Grace Lee',
    location: 'San Francisco',
    project: 'Smart City Infrastructure',
    projectDate: '2022-10-05',
    equipment: [
      { type: 'Core', items: ['Mobile LiDAR', '360° Camera'] },
      { type: 'Auxiliary', items: ['Electric Vehicle', 'Precision IMU'] },
      { type: 'Accessories', items: ['Cloud Data Processing', 'AI Analysis Software'] },
    ],
  },
  {
    date: '2022-09-15',
    name: 'Henry Clark',
    location: 'Boston',
    project: 'Historical Building Preservation',
    projectDate: '2022-09-15',
    equipment: [
      { type: 'Core', items: ['Photogrammetry Drone', 'High-Resolution DSLR Camera'] },
      { type: 'Auxiliary', items: ['Laser Distance Meter', 'Color Calibration Chart'] },
      { type: 'Accessories', items: ['3D Modeling Software', 'Precision Gimbal'] },
    ],
  },
  {
    date: '2022-08-01',
    name: 'Ivy Martinez',
    location: 'Phoenix',
    project: 'Solar Farm Layout',
    projectDate: '2022-08-01',
    equipment: [
      { type: 'Core', items: ['RTK Drone', 'Thermal Imaging Camera'] },
      { type: 'Auxiliary', items: ['Solar Irradiance Sensor', 'Weather Station'] },
      { type: 'Accessories', items: ['Solar Panel Efficiency Analyzer', 'Drone Landing Pad'] },
    ],
  },
]

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <EquipmentRentalTimeline items={timelineItems} />
    </div>
  )
}

export default App