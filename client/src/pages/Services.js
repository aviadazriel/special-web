import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => (
  <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '20px' }}>
    <ServiceCard
      title="Mortgage Planning"
      description="Comprehensive planning services for your mortgage."
      image="https://mashkantaguru.co.il/wp-content/uploads/2019/03/mashkanta-hol-430x330.jpg"
    />
    <ServiceCard
      title="Loan Refinancing"
      description="Helping you find better refinancing options."
      image="https://www.hon.co.il/wp-content/uploads/2016/03/mortgage-351x480.jpg"
    />
    <ServiceCard
      title="Debt Consolidation"
      description="Strategies to consolidate and manage debt effectively."
      image="https://www.hon.co.il/wp-content/uploads/2011/11/%D7%9E%D7%93%D7%A8%D7%99%D7%9B%D7%99-%D7%9E%D7%A9%D7%9B%D7%A0%D7%AA%D7%90%D7%95%D7%AA-55x55-1.jpg"
    />
  </div>
);

export default Services;
