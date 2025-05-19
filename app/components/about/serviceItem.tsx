// components/ServiceItem.tsx
import React from 'react';
import EllipsisText from '../ellipsis';


type ServiceItemProps = {
  title: string;
  description: string;
};

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => {
  return (
    <div className="border-t pt-4 pb-6">
      <h3 className="font-bold text-lg gap-6">
        {title}
      </h3>
      <EllipsisText text={description} lines={4} />
      </div>
  );
};

export default ServiceItem;
