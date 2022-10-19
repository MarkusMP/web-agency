import React from "react";
import { IServicesList, IServiceListItem } from "../../interfaces";
import ServicesListItem from "../ServicesListItem";

const ServicesList = ({ title, listService }: IServicesList) => {
  return (
    <section id="services" className="py-12 bg-secondary">
      <div className="xl:container mx-auto px-6">
        <div className="text-center max-w-lg mx-auto">
          <h2 className="text-white text-3xl font-semibold">
            {title && title}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-12 gap-8">
          {listService &&
            listService.map((item: IServiceListItem) => (
              <ServicesListItem key={item._id} data={item} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
