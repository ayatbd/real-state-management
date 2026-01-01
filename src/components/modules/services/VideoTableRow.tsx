import { TableCell, TableRow } from "@/components/ui/table";
import ViewDetails from "../modals/sidebar-packages/ViewDetails";
import EditPackage from "../modals/sidebar-packages/EditPackage";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const VideoTableRow = ({ index, pkg, handleDelete }: any) => {
  return (
    <>
      <TableRow key={index} className="border-none hover:bg-slate-50">
        <TableCell className="py-4 text-slate-600">{pkg.id}</TableCell>
        <TableCell className="py-4 text-slate-600">{pkg.name}</TableCell>
        <TableCell className="py-4 text-slate-600">{pkg.price}</TableCell>
        <TableCell className="py-4 text-slate-500 max-w-xs truncate">
          {pkg.description}
        </TableCell>

        {/* Details Icon */}
        <TableCell className="py-4 text-center">
          <div className="flex justify-center">
            <ViewDetails />
          </div>
        </TableCell>

        {/* Action Icons */}
        <TableCell className="py-4">
          <div className="flex justify-center gap-2">
            <EditPackage />
            <Button
              onClick={handleDelete}
              size="icon"
              className="bg-[#E11D48] hover:bg-[#be123c] w-9 h-8"
            >
              <Trash2 className="w-4 h-4 text-white" />
            </Button>
          </div>
        </TableCell>
      </TableRow>
    </>
  );
};

export default VideoTableRow;
