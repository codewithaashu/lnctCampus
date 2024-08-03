import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RecentPlacedCard = ({ placedData }) => {
  return (
    <div className="col-span-2 w-full">
      <Card className="w-full">
        <CardHeader className="px-7">
          <CardTitle className="text-lg">Recent Placements</CardTitle>
        </CardHeader>
        <CardContent>
          <Table className="border">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="hidden sm:table-cell text-center">
                  Department
                </TableHead>
                <TableHead className="hidden sm:table-cell text-center">
                  Company
                </TableHead>
                <TableHead className="hidden sm:table-cell text-center">
                  Package
                </TableHead>
                <TableHead className="hidden md:table-cell text-center">
                  Date
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {placedData.map((curr, index) => (
                <TableRow className="hover:bg-accent" key={index}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full">
                        <img
                          className="aspect-square h-full w-full rounded-full"
                          src={curr.imgSrc}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{curr.name}</p>
                        <p className="text-xs text-muted-foreground lining-nums">
                          {curr.enrollNo}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-center">
                    {curr.department}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-center">
                    {curr.company}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-center">
                    {curr.package}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-center">
                    {curr.placedDate}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentPlacedCard;
