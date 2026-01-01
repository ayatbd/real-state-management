import { TableHead, TableHeader, TableRow } from "@/components/ui/table";

const VideoTableHeader = () => {
  return (
    <>
      <TableHeader>
        <TableRow className="hover:bg-transparent border-none">
          <TableHead className="font-bold text-slate-900">SL No.</TableHead>
          <TableHead className="font-bold text-slate-900">
            Package Name
          </TableHead>
          <TableHead className="font-bold text-slate-900">Price</TableHead>
          <TableHead className="font-bold text-slate-900">
            Description
          </TableHead>
          <TableHead className="font-bold text-slate-900 text-center">
            Details
          </TableHead>
          <TableHead className="font-bold text-slate-900 text-center">
            Action
          </TableHead>
        </TableRow>
      </TableHeader>
    </>
  );
};

export default VideoTableHeader;
