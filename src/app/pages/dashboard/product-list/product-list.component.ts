import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  data = [
    { company: 'Jill', category: 'Smith', product: 50, productId: 'Jill', rate: 'Smith', quantity: 50, total: 50 },
    { company: 'Eve', category: 'Jackson', product: 94, productId: 'Jill', rate: 'Smith', quantity: 50, total: 50 }
  ];

  exportToExcel() {
    // Create a new workbook
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    
    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Export the workbook
    XLSX.writeFile(wb, 'table_data.xlsx');
  }



  printTable() {
    const printWindow = window.open('', '', 'height=600,width=800');
    if (printWindow) {
      // Create the HTML content for printing
      const heading = '<h1 style="text-align: center;">Radhika Electronics</h1>';
      const table = document.getElementById('data-table')?.outerHTML || '';
      const printContents = heading + table;

      printWindow.document.write('<html><head><title>Print Table</title>');
      printWindow.document.write('<style>table { width: 100%; border-collapse: collapse; } th, td { border: 1px solid #000; padding: 8px; text-align: left; }</style>');
      printWindow.document.write('</head><body>');
      printWindow.document.write(printContents);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  }

}
