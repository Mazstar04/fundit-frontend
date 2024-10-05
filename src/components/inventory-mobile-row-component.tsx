import { IInventory } from "@/interfaces";
import ItemRowComponent from "./item-row-component";
import { formatCurrency } from "@/utils/formatter";
import { format } from "date-fns";

const InventoryMobileRowComponent = ({
  inventoryItem,
}: {
  inventoryItem: IInventory;
}) => {
  return (
    <div className="flex flex-col gap-3 px-[24px] py-[12px]">
      <div className="flex justify-between items-center">
        <ItemRowComponent
          title="Price"
          value={`${formatCurrency(inventoryItem.price)}`}
        />
        <ItemRowComponent
          justifyEnd
          title="Quantity"
          value={`${inventoryItem.qty?.toLocaleString()}`}
        />
      </div>
      <div className="flex justify-between items-center">
        <ItemRowComponent
          title="Category"
          value={`${inventoryItem.category}`}
        />{" "}
        <ItemRowComponent
          justifyEnd
          title="Date added"
          value={`${format(inventoryItem.date, "dd-MM-yyyy")}`}
        />
      </div>
    </div>
  );
};

export default InventoryMobileRowComponent;
