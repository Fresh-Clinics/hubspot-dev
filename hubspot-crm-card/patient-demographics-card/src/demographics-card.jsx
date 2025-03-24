import {
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
    hubspot,
  } from '@hubspot/ui-extensions';
  
  hubspot.extend(() => {
    return (
      <Table bordered={true}>
        <TableHead>
          <TableRow>
            <TableHeader>Age</TableHeader>
            <TableHeader>Female</TableHeader>
            <TableHeader>Male</TableHeader>
            <TableHeader>Total</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>18 – 29</TableCell>
            <TableCell>5%</TableCell>
            <TableCell>0%</TableCell>
            <TableCell>48</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>30 – 39</TableCell>
            <TableCell>9%</TableCell>
            <TableCell>1%</TableCell>
            <TableCell>91</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>40 – 49</TableCell>
            <TableCell>21%</TableCell>
            <TableCell>2%</TableCell>
            <TableCell>185</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>50 – 59</TableCell>
            <TableCell>27%</TableCell>
            <TableCell>5%</TableCell>
            <TableCell>256</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>60 – 69</TableCell>
            <TableCell>17%</TableCell>
            <TableCell>2%</TableCell>
            <TableCell>155</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>70 – 79</TableCell>
            <TableCell>4%</TableCell>
            <TableCell>0%</TableCell>
            <TableCell>39</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>80+</TableCell>
            <TableCell>0%</TableCell>
            <TableCell>0%</TableCell>
            <TableCell>5</TableCell>
          </TableRow>
          <TableRow>
            <TableCell><strong>Total</strong></TableCell>
            <TableCell><strong>87%</strong></TableCell>
            <TableCell><strong>12%</strong></TableCell>
            <TableCell><strong>779</strong></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  });
  